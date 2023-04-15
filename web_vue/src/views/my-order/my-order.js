import {
  getOrderList_api,
  takeGoods_api,
  addComments_api,
  cacelOrder_api,
  payOrderById_api,
} from '_api/order';

import { getWxJSSDK_api } from '_api/goods';
// import { getRate_api } from '_api/user';
import popup from '_com/popup/popup.vue';
import ZuiPopup from '_com/popup/popup';
import meScrollTab from '@/mixins/meScrollTab';
import { imgPath } from '@/libs/filters';
import wx from 'weixin-js-sdk';
import { mapGetters } from 'vuex';
import Header from '_com/header/header';
import { Toast } from 'vant';
import axios from '../../api/request_two';

export default {
  mixins: [meScrollTab],
  components: {
    ZuiPopup,
    Header,
    [Toast.name]: Toast,
    popup
  },
  inject: ['refreshParentData'],
  data() {
    return {
      evaluateObj: {}, // 评价对象
      okObj: {}, // 确认收货对象
      visiblePopup: false,
      isInit: true,
      queryList: {},
      isPopup: false,
      commentOrder: {},
      commentValue: '',
      mescrollUp: {
        toTop: {
          warpId: 'toTopWrap',
        },
      },
      getList_api: getOrderList_api,
      tabs: ['Tất cả đơn hàng', 'Đang chờ thanh toán', 'Đang chờ giao hàng', 'Đang chờ nhận hàng', 'Đang chờ đánh giá'],
      isClick: true,
      rateVo: {},
      headerTitle: 'Chi tiết đơn hàng',
      pf_switch: '',
    };
  },
  async created() {
    console.log(this.getList_api)
    this.tabIndex = parseInt(this.$route.params.type);
    // 获取积分转化的倍率
    // this.rateVo = await getRate_api();
    await this.getOrderList();
  },
  filters: {
    imgPath,
    formatStatus(val) {
      console.log(val)
      // switch (val) {
      //   case 1:
      //     return '待付款';
      //   case 2:
      //     return '待发货';
      //   case 3:
      //     return '待收货';
      //   case 4:
      //     return '已完成';
      // }
       switch (val) {
        case 0:
          return 'Đang chờ thanh toán';
        case 1:
          return 'Vận chuyển';
         case 2:
          return 'Nhận hàng';
         case 3:
           return 'Được đánh giá'
         case 4:
           return 'Đã hoàn thành'
         default:
           console.log('没有多余的东西了!')
      }
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
    status() {
      switch (Number(this.tabIndex)) {
        case 0:
          return 5;
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
      }
    },
  },
  mounted (){
    setTimeout(() => {
      // console.log('dddddddddddddddd:',this.)dataList
      // for(let i=0;i<this.dataList.length;i++){
      //   this.dataList[i].status=3
      // }
      // console.log(this.dataList)

    },1000)

    // this.getList_api().then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    // 点击详情按钮
    xaingqingClick(item) {
      item.isOpen = !item.isOpen
    },
    shouqiClick(item) {
      item.isOpen = !item.isOpen
    },
    // 评价按钮点击事件
    evaluateClick(item) {
      this.isPopup = true;
      this.evaluateObj = item;
    },
    // 确认收货按钮事件
    okShouHuo(item) {
      this.okObj = item
      this.visiblePopup = true
    },
    // 确认按钮事件
    async okClick() {
      console.log('确认')
      console.log(this.okObj)
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/order/qr_shouhuo', {
        user_id: userId,
        order_id: this.okObj.id
      })
      if (res.data.code === 200) {
        this.$toast({
          type: 'success',
          content: res.data.msg,
          time: 1000,
        });
        this.visiblePopup = false;
        console.log('好了')
        this.tabIndex = 3;
        this.$router.replace('/personal/my-order/3');
        this.$router.go()
      } else {
        this.$toast({
          type: 'error',
          content: res.data.msg,
          time: 1000,
        });
        this.visiblePopup = false;
      }
      console.log(res);
    },
    // 获取订单列表
    async getOrderList() {
      console.log(this.dataList)
      console.log('这里',this.tabIndex)
      let type = null;
      let status = null;
      switch(this.tabIndex) {
        case 0:
          type = null;
          status = 5;
          break;
        case 1:
          type = 99;
          status = 1;
          break;
        case 2:
          type = 1;
          status = 2;
          break;
        case 3:
          type = 2;
          status = 3;
          break;
        case 4:
          type = 3;
          status = 4
          break;
        default:
          console.log('没有多余的tab了！')
      }
      console.log(type);
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/myOrderList', {
        user_id: userId,
        page: '1',
        limit: 10,
        type,
        status,
      })
      console.log(res.data.data.data);
      if (res.data.code === 200) {
        this.dataList = res.data.data.data;
        // // 增加 isOpen 字段控制详情与收起
        // for (let item of this.dataList) {
        //   item.isOpen = false;
        // }
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
    // 判断运行环境
    isWeixinBrowser() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
    _requestBefore() {
      this.queryList = {
        ...this.queryList,
        status: this.status,//this.status
      };
      console.log(this.queryList)
      if (status < 0) {
        delete this.queryList.status;
      }
    },
    _requestAfter(list, res) {
      list.forEach(item => {
        const { province, city, county, address } = item.addr;
        item.fullAddress = province + ' ' + city + ' ' + county + ' ' + address;
        item.isOpen = false;
      });
      this.pf_switch = res.pf_switch;
    },
    // Hủy bỏ订单
    handleCancelOrder(id) {
      this.actionSheet = this.$createActionSheet({
        title: 'Xác nhận muốn hủy đơn hàng không?',
        active: 0,
        data: [{ content: 'Hủy đơn hàng' }],
        cancelTxt:'Hủy bỏ',
        onSelect: async () => {
          this.$toast('đang tải...');
          console.log(id);
          let res = await axios.post('api/order/del_order', {
            ids: [id]
          })
          console.log(res);
          if (res.data.code === 200) {
            this.handleChangeTab();
            this.$toast({ type: 'success', content: 'Đơn hàng đã bị hủy' });
          } else {
            this.$toast({ type: 'error', content: 'Đơn hàng bị hủy không thành công!' });
          }
        },
      }).show();
    },
    // 去付款
    async handlePayment(item) {
      console.log(item)
      let paymentGoods = [
        {
          // sku_id,
          goods_id: item.goods_id,
          thumb: item.goods_img,
          goods_name: item.goods_name,
          price: item.pf_price,
          number: item.number,
          postage_money: item.postage_money,
          pf_switch: item.pf_switch,
          exchange_score: item.exchange_score,
          pf_price: item.pf_price,
          tip: localStorage.getItem('tip'),
          nowPrice: item.nowPrice,
        },
      ];
      sessionStorage.setItem('paymentGoods',JSON.stringify(paymentGoods))
      this.$router.push({
        path: '/place-order',
        query: {
          payData: JSON.stringify([
            {
              id: 4,
              content: 'Thanh toán số dư11',
            },
          ]),
          guigeData: JSON.stringify(item)
        }
      })
      // let flag = true;
      // item.order.forEach(v => {
      //   if (!v.stock) {
      //     flag = false;
      //     this.$toast({ content: '对不起，商品库存不足！' });
      //     return false;
      //   }
      //   return false;
      // });
      // if (!flag) return false;
      //
      // // 黔宝专区
      // let postage = '';
      // if (item.tip === 2) {
      //   postage = Number(item.postage_money);
      //   if (!Number(item.postage_money)) {
      //     // 没有运费直接购买
      //     let res = await payOrderById_api({ pay_type: 5, order_id: item.id });
      //     if (res.code === 200) {
      //       this.handleChangeTab();
      //       this.$toast({ type: 'success', content: '支付成功' });
      //     } else {
      //       this.$toast({ content: res.msg });
      //     }
      //     return false;
      //   }
      // }
      // let goods = item;
      // let { total_price, id, postage_money } = item;
      // let data = [];
      // console.log(item);
      // if (this.isWeixinBrowser()) {
      //   if (item.tip === 2) {
      //     // 黔宝
      //     data = [
      //       {
      //         id: 2,
      //         content: '微信支付',
      //       },
      //       // {
      //       //     id: 5,
      //       //     content: '黔豆支付',
      //       // },
      //     ];
      //   } else if (item.tip === 1 || item.tip === 3) {
      //     data = [
      //       {
      //         id: 2,
      //         content: '微信支付',
      //       },
      //     ];
      //   } else if (item.tip === 4 && this.pf_switch === 2) {
      //     data = [
      //       {
      //         id: 2,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 5,
      //         content: '黔豆支付',
      //       },
      //       {
      //         id: 4,
      //         content: '余额支付',
      //       },
      //     ];
      //   } else if (item.tip === 4 && this.pf_switch === 1) {
      //     data = [
      //       {
      //         id: 2,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 4,
      //         content: '余额支付',
      //       },
      //     ];
      //   } else if (item.tip === 5) {
      //     data = [
      //       {
      //         id: 2,
      //         content: '微信支付',
      //       },
      //     ];
      //   }
      // } else {
      //   if (item.tip === 2) {
      //     // 黔宝
      //     data = [
      //       {
      //         id: 1,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 3,
      //         content: '支付宝支付',
      //       },
      //       // {
      //       //     id: 5,
      //       //     content: '黔豆支付',
      //       // },
      //     ];
      //   } else if (item.tip === 1 || item.tip === 3) {
      //     data = [
      //       {
      //         id: 1,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 3,
      //         content: '支付宝支付',
      //       },
      //     ];
      //   } else if (item.tip === 4 && this.pf_switch === 2) {
      //     data = [
      //       {
      //         id: 1,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 3,
      //         content: '支付宝支付',
      //       },
      //       {
      //         id: 4,
      //         content: '余额支付',
      //       },
      //       {
      //         id: 5,
      //         content: '黔豆支付',
      //       },
      //     ];
      //   } else if (item.tip === 4 && this.pf_switch === 1) {
      //     data = [
      //       {
      //         id: 1,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 3,
      //         content: '支付宝支付',
      //       },
      //       {
      //         id: 4,
      //         content: '余额支付',
      //       },
      //     ];
      //   } else if (item.tip === 5) {
      //     data = [
      //       {
      //         id: 1,
      //         content: '微信支付',
      //       },
      //       {
      //         id: 3,
      //         content: '支付宝支付',
      //       },
      //     ];
      //   }
      // }
      // this.$createActionSheet({
      //   data,
      //   title: postage
      //     ? '您需要支付运费₫' + postage
      //     : '您当前需要支付 ₫' + Number(total_price).toFixed(2),
      //   $class: {
      //     actionSheet__custom: true,
      //     actionSheet__title: true,
      //   },
      //   onSelect: async item => {
      //     console.log(goods.tip);
      //     console.log(item);
      //     // 黔宝
      //     if (goods.tip === 2 && item.id === 4) {
      //       this.$toast({ content: '对不起，该订单不支持余额支付！' });
      //       return false;
      //     }
      //     // 秒杀
      //     if (goods.tip === 1 || goods.tip === 3) {
      //       if (item.id === 4 || item.id === 5) {
      //         if (this.isWeixinBrowser()) {
      //           this.$toast({ content: '对不起，该订单只支持微信支付' });
      //           return false;
      //         } else {
      //           this.$toast({
      //             content: '对不起，该订单只支持支付宝、微信支付',
      //           });
      //           return false;
      //         }
      //       }
      //     }
      //     // 批发直接进接口，不用判断tip
      //     let params = {
      //       order_id: id,
      //       pay_type: item.id,
      //     };
      //     if (item.id === 5 || item.id === 4) {
      //       // 奖励积分支付
      //       this.$toast('đang tải...');
      //       let res = await payOrderById_api(params);
      //       if (res.code === 400) {
      //         this.$toast({ content: res.msg, time: 2000 });
      //         return false;
      //       } else {
      //         this.handleChangeTab();
      //         this.$toast({ type: 'success', content: '支付成功', time: 1000 });
      //       }
      //     } else {
      //       this._requestPayment(params, item.id);
      //     }
      //   },
      // }).show();
    },

    // 支付
    async _requestPayment(params, pay_type) {
      try {
        let payData = await payOrderById_api(params);
        if (pay_type === 3) {
          this._alipay(payData);
        } else if (pay_type === 1) {
          // app微信支付
          this._AppWxpay(payData);
        } else if (pay_type === 2) {
          // 公众号微信支付
          this._wxpay(payData.data);
        }
      } catch (error) {
        this.isClick = true;
      }
    },

    // 公众号微信支付
    async _wxpay(payData) {
      console.log('params', payData);
      if (!this.isClick) return;
      this.isClick = false;
      this.$toast('đang tải...');
      try {
        let _this = this;
        // let data = await getWxJSSDK_api();
        // let { appId, timestamp, nonceStr, signature } = data;
        wx.config({
          // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: payData.appId, // 必填，公众号的唯一标识
          timestamp: payData.timeStamp,
          nonceStr: payData.nonceStr,
          package: payData.package,
          jsApiList: ['chooseWXPay'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(async function() {
          _this.$toast.hide();
          wx.chooseWXPay({
            timestamp: payData.timeStamp,
            nonceStr: payData.nonceStr,
            package: payData.package,
            signType: payData.signType,
            paySign: payData.paySign,
            success: function() {
              _this.$toast({
                type: 'success',
                content: 'Thanh toán thành công',
                time: 1000,
              });
              _this.handleChangeTab();
              _this.isClick = true;
            },
            cancel: function() {
              _this.$toastBounce('Thanh toán bị hủy');
              _this.isClick = true;
            },
          });
        });
        wx.error(function(res) {
          console.log(res);
          // _this.$toastBounce('wx:config注入失败');
          _this.isClick = true;
        });
      } catch (error) {
        this.isClick = true;
      }
    },

    // app微信支付
    _AppWxpay(data) {
      console.log('支付时的data', data);
      var channel = null;
      plus.payment.getChannels(
        channels => {
          channels.forEach(v => {
            if (v.id === 'wxpay') {
              channel = v;
            }
          });
          plus.payment.request(
            channel,
            data.data,
            result => {
              this.$toast({ type: 'text', content: 'Thanh toán thành công', time: 1000 });
              this.handleChangeTab();
              this.isClick = true;
            },
            e => {
              console.log('失败的原因', e);
              this.$toast({ type: 'text', content: 'Thanh toán thất bại', time: 1000 });
              this.isClick = true;
            },
          );
        },
        e => {
          this.$toast({
            type: 'text',
            content: '获取支付通道失败',
            time: 1000,
          });
          this.isClick = true;
        },
      );
    },

    // 支付宝支付
    _alipay(data) {
      if (!this.isClick) return;
      this.isClick = false;
      let res = data;
      var channel = null;
      // 获取支付通道
      plus.payment.getChannels(
        channels => {
          channels.forEach(v => {
            if (v.id === 'alipay') {
              channel = v;
            }
          });
          plus.payment.request(
            channel,
            data.data,
            result => {
              this.$toast({ type: 'text', content: '支付成功', time: 1000 });
              this.handleChangeTab();
              this.isClick = true;
            },
            e => {
              console.log('res=>>', res);
              if (res.code === 400) {
                this.$toast({ type: 'text', content: data.msg, time: 1000 });
              } else {
                this.$toast({ type: 'text', content: '支付失败', time: 1000 });
              }
              this.isClick = true;
            },
          );
        },
        function(e) {
          this.$toast({
            type: 'text',
            content: '获取支付通道失败',
            time: 1000,
          });
          this.isClick = true;
        },
      );
    },
    // 收货
    handleOrderFinish(id) {
      this.dialog = this.$createDialog({
        type: 'confirm',
        title: '提示',
        maskClosable: true,
        content: '确认收货后将不能退款',
        confirmBtn: {
          text: '确认',
        },
        onConfirm: async () => {
          this.$toast('đang tải...');
          const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
          let res = await axios.post('api/order/qr_shouhuo', {
            user_id: userId,
            order_id: id
          })
          if (res.data.code === 200) {
            this.$store.dispatch('getUserInfo');
            this.handleChangeTab();
            this.$toast({
              type: 'success',
              content: 'Đã nhận hàng thành công',
              time: 1000,
            });
          } else {
            this.$toast({
              type: 'error',
              content: res.data.msg,
              time: 1000,
            });
          }
        },
      }).show();
    },
    // 显示评价
    handleShowComment(item) {
      this.$router.push({
        path: '/comment',
        query: item,
      });
      // this.commentOrder = item;
      // this.isPopup = true;
    },
    onCommentClosed() {
      this.commentValue = '';
    },
    async handleSubmitCommnet() {
      if (!this.commentValue.trim()) {
        this.$toastBounce('评论内容不能为空');
        return;
      }
      this.isPopup = false;
      this.$toast('đang tải...');
      console.log(this.evaluateObj)
      const { id, goods_id } = this.commentOrder;
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let params = {
        order_id: this.evaluateObj.id,
        goods_id: this.evaluateObj.goods_id,
        content: this.commentValue,
        user_id: userId
      };
      await addComments_api(params);
      this.handleChangeTab();
      this.$toast({
        type: 'success',
        content: 'Bình luận Thành Công',
        time: 1000,
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    this.refreshParentData();
    next();
  },
};
