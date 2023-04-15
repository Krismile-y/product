import {
  delCart_api,
  addCart_api,
  decreaseCart_api,
  getCartList_api,
  // countPostpage_api,
  checkCar_api,
} from '_api/order';

import meScrollBase from '@/mixins/meScrollBase';
import { imgPath } from '@/libs/filters';
import { ContactCard } from 'vant';
import axios from '../../api/request_two';

export default {
  mixins: [meScrollBase],
  data() {
    return {
      getList_api: getCartList_api,
      mescrollUp: {
        toTop: {
          warpId: 'shopCartToTopWrap',
        },
        empty: {
          tip: 'Không có dữ liệu ~',
          btntext: 'Đi mua sắm >',
          btnClick: () => {
            this.$router.push('/home');
          },
        },
      },
      pf_switch: '',
    };
  },
  filters: {
    imgPath,
  },
  activated() {
    this.dataList = [];
    this.mescroll.resetUpScroll();
    this.mescroll.hideTopBtn();
  },
  computed: {
    // 是否全选
    isCheckedAll() {
      let tempArr = this.dataList.filter(goods => goods.item.isSale);
      if (tempArr.length > 0) {
        let bool = tempArr.every(goods => goods.item.isChecked);
        return bool;
      } else {
        return false;
      }
    },
    // 选中的总价格
    totalObject() {
      let price = 0;
      let count = 0;
      let checkedArr = this.dataList.filter(goods => goods.item.isChecked);
      checkedArr.forEach(goods => {
        console.log(goods);
        const { isChecked, number, tip } = goods.item;
        const { sell_price, pf_price } = goods.item.goods;
        if (isChecked) {
          count++;
          if (tip === 3) {
            price += sell_price * number;
          } else {
            price += pf_price * number;
          }
        }
      });
      return {
        price: Number(price.toFixed(2)),
        count,
      };
    },
    isSubmit() {
      return this.dataList.some(goods => goods.item.isChecked);
    },
  },
  methods: {
    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';

        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('') ;
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    },
    _requestAfter(list, res) {
      list.forEach((goods, index) => {
        // goods.thumb = imgPath(goods.thumb);
        // goods.sell_price = Number(goods.sell_price);
        list[index] = {
          item: {
            ...goods,
            isChecked: false,
            isSale: this._isSale(goods.goods),
          },
          btns: [
            {
              id: goods.id,
              action: 'delete',
              text: 'Xoá',
              color: '#D53833',
            },
          ],
        };
      });
      this.pf_switch = res.pf_switch;
    },

    _isSale(goods) {
      let { is_show, delete_time } = goods;
      return !delete_time && is_show == 1;
    },

    // 左滑删除
    onBtnClick(btn, index) {
      this.actionSheet = this.$createActionSheet({
        title: 'Xác nhận bạn muốn xóa？',
        active: 0,
        data: [{ content: 'xóa'}],
        cancelTxt:'Hủy bỏ',
        onSelect: async () => {
          this.$toast('Đang xóa...');
          let count = await delCart_api({ id: btn.id });
          if (count.code === 200) {
            this.$store.commit('setShopCartCount', count.data);
            this.dataList = [];
            this.mescroll.resetUpScroll();
            this.$toast({ type: 'success', content: 'Xóa thành công', time: 1000 });
          } else {
            this.$toast({ type: 'error', content: count.msg, time: 1000 });
          }
        },
        onCancel: () => {
          this.$refs.swipeItem[index].shrink();
        },

      }).show();
    },
    // 选中单个
    async handleClickItem(item, goods) {
      console.log('item', item);
      console.log('goods', goods);
      let check = await this._checkingCart();
      if (item.isSale) {
        item.isChecked = !item.isChecked;
      }
    },

    async _checkingCart() {
      let params = {};
    },
    // 全选反选
    handleCheckedAll() {
      if (this.isCheckedAll) {
        this.dataList.forEach(goods => {
          let { isSale } = goods.item;
          if (isSale) {
            goods.item.isChecked = false;
          }
        });
      } else {
        this.dataList.forEach(goods => {
          let { isSale } = goods.item;
          if (isSale) {
            goods.item.isChecked = true;
          }
        });
      }
    },
    // 减少数量
    async handleClickReduce(item) {
      const { number } = item;
      if (number > 1) {
        this.$toast('đang tải...');
        await decreaseCart_api({ id: item.id });
        item.number--;
        this.$toast.hide();
      }
    },
    // 添加数量
    async handleClickAdd(item) {
      let { kc_number, goods_id, sku_id, tip } = item;
      if (item.number >= kc_number) {
        this.$toastBounce('Hàng tồn kho không đủ');
        return;
      }
      this.$toast('đang tải...');
      let params = {
        sku_id,
        number: 1,
        goods_id,
        tip,
      };
      await addCart_api(params);
      item.number++;
      this.$toast.hide();
    },
    // 去结算
    async handleSubmit() {
      let checkedArr = this.dataList.filter(goods => goods.item.isChecked);
      let car_id = [];
      // 计算总的运费
      let postage_money = 0;
      console.log(checkedArr);
      checkedArr = checkedArr.map(goods => {
        postage_money += Number(goods.item.goods.postage_money);
        car_id.push(goods.item.id);
        const { id, number, buy_profit, sku_id, tip,spec_id } = goods.item;
        const { thumb, goods_name, sell_price, pf_price } = goods.item.goods;
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        // 传到支付界面的参数
        return {
          spec_id,
          user_id: userId,
          car_id: id,
          thumb,
          sku_id,
          goods_id: goods.item.goods_id,
          goods_name,
          price: sell_price,
          number,
          buy_profit,
          tip,
          pf_price,
          pf_switch: this.pf_switch,
        };
      });
      // 检测购物车
      // let res = await checkCar_api({
      //   car_id: car_id,
      //   total_price: this.totalObject.price,
      // });
      // console.log(res.msg);
      // if (res.code === 400) {
      //   this.$toast({ type: 'error', content: res.msg, time: 2000 });
      //   return false;
      // }
      // tip必须一样才可下单，所以获取一个商品的tip就好；
      localStorage.setItem('tip', checkedArr[0].tip);
      let datearr = {};
      datearr.car_postage_money = postage_money;
      datearr.list = checkedArr;
      console.log(checkedArr);
      sessionStorage.setItem('paymentGoods', JSON.stringify(datearr));
      this.$router.push({
        path: '/place-order/cart',
        query: {
          payData: JSON.stringify([
            {
              id: 4,
              content: 'Thanh toán số dư',
            },
          ]),
          guigeData: JSON.stringify(checkedArr),
          gouwucheFlag: '1'
        }
      })
    },
  },
};
