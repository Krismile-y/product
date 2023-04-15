/* eslint-disable no-undef */
import scrollBounce from '@/mixins/scrollBounce';
import NumberControl from '_com/number-control/number-control.vue';
import Header from '_com/header/header';
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Cell, CellGroup } from 'vant';
import {
  placeOrderMobile_api,
  placeOrder_api,
  placeOrderCart_api,
} from '_api/goods';
import axios from '../../api/request_two';

import { payVip_api } from '_api/member';

import { getAddressList_api } from '_api/address';

//寄售协议
import { getAgree_api } from '_api/agreeMent';
// import { getRate_api } from '_api/user';

import AddressList from '_com/address-select/address-select.vue';
import wxConfig from '@/mixins/wxConfig';
import wx from 'weixin-js-sdk';
import { mapGetters } from 'vuex';
import {isArray} from "cube-ui/src/common/helpers/util";

export default {
  name: 'PlaceOrder',
  mixins: [scrollBounce, wxConfig],
  components: {
    NumberControl,
    AddressList,
    Header,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
  provide() {
    return {
      refreshParentData: this.refreshAddress,
    };
  },
  data() {
    return {
      postage_money: 0,
      headerTitle: 'Lệnh thanh toán',
      leaveMsg: '',
      fromName: '',
      isChecked: false,
      visibleFooterBar: false,
      visibleAddress: false,
      quantity: 1,
      productList: [],
      address: {},
      addressList: [],
      paymentPicker: {},
      jsApiList: ['chooseWXPay'],
      isClick: true,
      rateVo: {
        xfjf_conv_money: 0,
        jljf_conv_money: 0,
      },
      tip: '',
      radio: '1',
      is_mail: '1',
      qianbao: '',
      //寄售1 邮寄2
      jishou: 1,
      checkAgree: false,
      jishouAgreeMent: '',
      isAgree: true,
      isShop: true,
      mendianAgreeMent: '',
      code: '', // 防止二次请求接口
      visiblePopup: false,
      duobaoPayFlag: false, // 多宝支付标识
    };
  },
  async created() {
    console.log('1111',JSON.parse(this.$route.query.payData));
    let payData = JSON.parse(this.$route.query.payData)
    console.log(payData[0]);
    if (payData[0].content === 'Thanh toán bằng DOBO GOLD') {
      this.duobaoPayFlag = true
    }
    if (payData) {
      this.paymentPicker = {
        pay_type: payData[0].id,
        content: payData[0].content,
        cancelTxt:"111"
      }
    }
    // this.paymentPicker = {
    //   pay_type: 4,
    //   index: 0,
    //   content: '余额支付',
    // };
    // if (this.isWeixinBrowser()) {
    //   this.paymentPicker = {
    //     pay_type: 2,
    //     index: 0,
    //     content: '微信支付',
    //   };
    // } else {
    //   this.paymentPicker = {
    //     pay_type: 3,
    //     index: 0,
    //     content: '支付宝支付',
    //   };
    // }
    this.fromName = this.$route.params.fromName;
    // 获取积分转化的倍率
    // this.rateVo = await getRate_api();

    //1秒杀2黔宝兑换3门店4批发
    this.tip = localStorage.getItem('tip');
    if (this.tip == 4) {
      this.jishou = 1;
    } else {
      this.jishou = 2;
    }
    this._getAgreeMent();
    this._loadData();
    this._getAddress();
    // 从商品详情页跳转过来的
    if (!isArray(JSON.parse(this.$route.query.guigeData))) {
      this.productList = [JSON.parse(this.$route.query.guigeData)]
      console.log(this.productList);
    } else {
      this.productList = JSON.parse(this.$route.query.guigeData)
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    // 需要支付的金额
    totalMoney() {
      let totalPrice = 0;
      // let num = 0;
      this.productList.forEach(item => {
        console.log(item.pf_price);
        const { pf_price,price, number, nowPrice,total_price } = item;
        if (pf_price) {
          totalPrice += pf_price * number;
        }
        // 如果没有 pf_price 这个字段
        // if (price) {
        //   totalPrice += parseFloat(price) * number
        // }
      });
      // if (this.postage_money) {
      //   num = Math.max(Number((totalPrice + this.postage_money).toFixed(2)), 0);
      // } else {
      //   num = Math.max(Number(totalPrice.toFixed(2)), 0);
      // }
      // return num;
      return totalPrice
    },
    // 根据自己的积分跟商品可使用积分计算出最终可使用积分
    totalIntegral() {
      let goods_integral = 0; // 商品可使用积分
      let user_integral = this.userInfo.xf_integral; // 用户可使用积分
      this.productList.forEach(item => {
        goods_integral += item.deduct_jf;
      });
      let integral = Math.min(user_integral, goods_integral);
      return integral;
    },
    // 是否使用积分抵扣
    useIntegral() {
      if (this.isChecked && this.totalIntegral) {
        return this.totalIntegral * this.rateVo.xfjf_conv_money;
      } else {
        return 0;
      }
    },
  },
  watch: {
    visibleAddress(newValue) {
      this.visibleFooterBar = newValue;
    },
  },
  // async beforeRouteLeave(to,from,next) {
    // console.log(this.code);
    // if (this.code === '') {
    //   let data = JSON.parse(this.$route.query.guigeData)
    //   let ids = [];
    //   if (isArray(data)) {
    //     for (let item of data) {
    //       ids.push(item.order_id)
    //     }
    //     let res = await axios.post('api/order/del_order', {
    //       ids: ids
    //     })
    //     if (res.data.code === 200) {
    //       this.$toastBounce(res.data.msg)
    //       this.$router.push(`/category/product-detail/${data[0].goods_id}`)
    //     } else {
    //       this.$toastBounce(res.data.msg)
    //     }
    //     this.code = res.data.code
    //     next()
    //   } else {
    //     ids.push(data.id)
    //     let res = await axios.post('api/order/del_order', {
    //       ids: ids
    //     })
    //     if (res.data.code === 200) {
    //       this.$toastBounce(res.data.msg)
    //       this.$router.push(`/category/product-detail/${data.goods_id}`)
    //     } else {
    //       this.$toastBounce(res.data.msg)
    //     }
    //     this.code = res.data.code
    //     next()
    //   }
    // } else {
    //   next()
    // }
  // },
  methods: {
    // Hủy bỏ支付按钮
    async cancelSubmit() {
      console.log(this.$route.query.gouwucheFlag)
      console.log(JSON.parse(this.$route.query.guigeData));
      // 判断是否是从购物车结算来的
      if (this.$route.query.gouwucheFlag) {
        console.log('是从购物车结算来的')
        let guigeData = JSON.parse(this.$route.query.guigeData);
        let list = []
        for (let item of guigeData) {
          list.push({
            goods_id: item.goods_id,
            sum: item.number,
            spec_id: item.spec_id
          })
        }
        console.log(list);
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
        let res = await axios.post('api/pay/dowm_order_car', {
          user_id: userId,
          list
        })
        if (res.data.code === 200) {
          this.$toastBounce(res.data.msg)
          this.$router.push(`/shopping-cart`)
        } else {
          this.$toastBounce(res.data.msg)
        }
        console.log(res);
      } else {
        // 直接购买或者从订单详情去付款来的
        let data = JSON.parse(this.$route.query.guigeData)
        console.log(data);
        let ids = [];
        if (isArray(data)) {
          console.log(data)
          for (let item of data) {
            if (item.order_id) {
              ids.push(item.order_id)
            } else {
              ids.push(item.goods_id)
            }
          }
          console.log(ids);
          let res = await axios.post('api/order/del_order', {
            ids: ids
          })
          if (res.data.code === 200) {
            this.$toastBounce(res.data.msg)
            this.$router.push(`/category/product-detail/${data[0].goods_id}`)
          } else {
            this.$toastBounce(res.data.msg)
          }
          this.code = res.data.code
        } else {
          ids.push(data.id)
          let res = await axios.post('api/order/del_order', {
            ids: ids
          })
          if (res.data.code === 200) {
            this.$toastBounce(res.data.msg)
            this.$router.push(`/category/product-detail/${data.goods_id}`)
          } else {
            this.$toastBounce(res.data.msg)
          }
          this.code = res.data.code
          console.log(ids);
        }
      }
    },
    async _getAgreeMent() {
      let resAgree = await getAgree_api();
      this.jishouAgreeMent = resAgree.js_agreement;
      this.mendianAgreeMent = resAgree.check_agreement;
    },
    //选择寄售或邮寄
    jiShouF(jishou, radio) {
      this.jishou = jishou;
      this.radio = radio;
    },
    isMail(is_mail, radio) {
      this.is_mail = radio;
    },
    checkAgreeF() {
      this.checkAgree = true;
    },
    closeAgree() {
      this.checkAgree = false;
    },
    isAgreeF() {
      let isAgree = !this.isAgree;
      this.isAgree = isAgree;
    },
    isShopF() {
      let isShop = !this.isShop;
      this.isShop = isShop;
    },
    // 从缓存中获取商品
    _loadData() {
      let productList = sessionStorage.getItem('paymentGoods');
      console.log('productList', productList);
      if (!productList || JSON.parse(productList).length == 0) {
        this.$toastBounce('非法进入');
        setTimeout(() => {
          this.$router.replace('/');
        }, 1500);
      } else {
        console.log(JSON.parse(this.$route.query.payData))
        console.log(JSON.parse(this.$route.query.guigeData))
        if (JSON.parse(productList).list) {
          console.log('有list');
          this.productList = JSON.parse(productList).list;
          let num = JSON.parse(productList).car_postage_money;
          this.postage_money = Number(num);
          console.log('123', this.productList);
        } else {
          console.log('没有list');
          this.productList = JSON.parse(productList);
          console.log(this.productList);
          if (this.tip == 2) {
            this.postage_money =
              Number(this.productList[0].postage_money) *
              Number(this.productList[0].number);
            console.log('this.postage_money ', this.postage_money);
          } else {
            console.log('走到这里')
            this.postage_money = Number(this.productList[0].postage_money);
            console.log(this.postage_money);
          }
        }
      }
    },
    // 获取地址
    async _getAddress() {
      let addresses = await getAddressList_api();
      let list = addresses.list;
      if (list.length) {
        let address = list.find(item => {
          if (item.is_default == 2) {
            item.isChecked = true;
            return true;
          }
          item.isChecked = false;
        });
        if (address) {
          this.address = address;
        } else {
          list[0].isChecked = true;
          this.address = list[0];
        }
      }
      this.addressList = list;
      this.$pageLoading.hide();
    },
    // 手机模块增加数量
    onPlus() {
      let { number, stock } = this.productList[0];
      if (number >= stock) {
        this.$toastBounce('Hàng tồn kho không đủ');
        return;
      }
      this.productList[0].number++;
    },
    // 提交支付
    async handleSubmit() {
      if (!this.address.id) {
        this.$toastBounce('Vui lòng chọn địa chỉ trước');
        return;
      }
      if (!this.isAgree && this.jishou == 1 && this.tip == 4) {
        this.$toastBounce('Vui lòng đồng ý với thỏa thuận ký gửi trước');
        return;
      }
      // if (!this.isShop && this.tip == 3) {
      //   this.$toastBounce('请先同意门店协议');
      //   return;
      // }
      if (!this.isClick) return;
      this.isClick = false;
      // this.$toast('đang tải...');
      let payData = {};
      let _this = this;
      try {
        if (this.fromName === 'cart') {
          payData = await this._placeOrderCart(); // 购物车下单
        } else {
          payData = await this._placeOrder(); // 商品详情下单
        }
        console.log('payData', payData);
        if (payData.data.code === 200) {
          this.$toast({ type: 'success', content: 'Thành công', time: 1000 });
          setTimeout(() => {
            console.log('开始跳转到/personal/my-order/2')
            _this.$router.replace('/personal/my-order/2');
          }, 1000);
        } else {
          this.$toast({ type: 'success', content: payData.data.msg, time: 1000 });
          let timer = setTimeout(_ => {
            clearTimeout(timer)
            // 支付失败跳转到充值页
            this.$router.push({
              path: '/rechargeHome'
            })
          }, 1000)
        }
        // let {pay_type} = this.paymentPicker
        //微信
        // if (this.isWeixinBrowser()) {
        //   let type = _this.paymentPicker.pay_type;
        //   if (type === 2) {
        //     if (payData.code === 200) {
        //       wx.config({
        //         // debug: true, //
        //         // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //         appId: payData.data.appId, // 必填，公众号的唯一标识
        //         timestamp: payData.data.timeStamp,
        //         nonceStr: payData.data.nonceStr,
        //         package: payData.data.package,
        //         jsApiList: ['chooseWXPay'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        //       });
        //       wx.ready(function() {
        //         console.log('payData=>>', payData);
        //         _this.$toast.hide();
        //         wx.chooseWXPay({
        //           timestamp: payData.data.timeStamp,
        //           nonceStr: payData.data.nonceStr,
        //           package: payData.data.package,
        //           signType: payData.data.signType,
        //           paySign: payData.data.paySign,
        //           success: function(res) {
        //             console.log(res);
        //             _this.$toast({ type: 'success', content: '购买成功' });
        //             if (_this.jishou == 1) {
        //               setTimeout(() => {
        //                 // 寄售商品跳转寄售订单
        //                 _this.$router.replace('/deposit');
        //               }, 700);
        //             } else if (_this.is_mail == 2) {
        //               setTimeout(() => {
        //                 _this.$router.replace('/personal/my-order/3');
        //               }, 700);
        //             } else {
        //               setTimeout(() => {
        //                 // 普通订单跳转订单列表
        //                 _this.$router.replace('/personal/my-order/2');
        //               }, 700);
        //             }
        //           },
        //           cancel: function(res) {
        //             console.log(res);
        //             // 普通订单Hủy bỏ支付跳转待付款订单列表
        //             if (_this.jishou == 1) {
        //               _this.$toast({
        //                 type: 'text',
        //                 content: '支付失败',
        //                 time: 1000,
        //               });
        //             } else {
        //               setTimeout(() => {
        //                 // 普通订单跳转订单列表
        //                 _this.$router.replace('/personal/my-order/1');
        //               }, 700);
        //             }
        //             _this.isClick = true;
        //           },
        //         });
        //       });
        //     } else if (payData.code == 400) {
        //       this.$toast({ type: 'text', content: payData.msg, time: 1000 });
        //       this.isClick = true;
        //     } else {
        //       if (_this.jishou == 1) {
        //         _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
        //       } else {
        //         _this.$router.replace('/personal/my-order/1');
        //       }
        //       _this.isClick = true;
        //     }
        //   } else {
        //     if (payData.code == 200) {
        //       _this.$toast({ type: 'text', content: '支付成功', time: 1000 });
        //       if (_this.jishou == 1) {
        //         setTimeout(() => {
        //           // 寄售商品跳转寄售订单
        //           _this.$router.replace('/deposit');
        //         }, 700);
        //       } else if (_this.is_mail == 2) {
        //         setTimeout(() => {
        //           // 普通订单跳转订单列表
        //           _this.$router.replace('/personal/my-order/3');
        //         }, 700);
        //       } else {
        //         setTimeout(() => {
        //           // 普通订单跳转订单列表
        //           _this.$router.replace('/personal/my-order/2');
        //         }, 700);
        //       }
        //     } else if (payData.code == 400) {
        //       _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
        //       _this.isClick = true;
        //     } else {
        //       _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
        //       _this.isClick = true;
        //     }
        //   }
        // } else {
        //   let type = _this.paymentPicker.pay_type;
        //   if (type == 3) {
        //     if (payData.code == 200) {
        //       _this._alipay(payData);
        //     } else if (payData.code == 400) {
        //       _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
        //       _this.isClick = true;
        //       return false;
        //     } else {
        //       _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
        //       _this.isClick = true;
        //       return false;
        //     }
        //   } else if (type == 1) {
        //     if (payData.code === 200) {
        //       _this._AppWxpay(payData);
        //     } else if (payData.code === 400) {
        //       _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
        //       _this.isClick = true;
        //       return false;
        //     } else {
        //       _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
        //       _this.isClick = true;
        //       return false;
        //     }
        //   } else {
        //     if (payData.code == 200) {
        //       _this.$toast({ type: 'text', content: '支付成功', time: 1000 });
        //       if (_this.jishou == 1) {
        //         setTimeout(() => {
        //           // 寄售商品跳转寄售订单
        //           _this.$router.replace('/deposit');
        //         }, 700);
        //       } else if (_this.is_mail == 2) {
        //         setTimeout(() => {
        //           // 普通订单跳转订单列表
        //           _this.$router.replace('/personal/my-order/3');
        //         }, 700);
        //       } else {
        //         setTimeout(() => {
        //           // 普通订单跳转订单列表
        //           _this.$router.replace('/personal/my-order/2');
        //         }, 700);
        //       }
        //     } else if (payData.code == 400) {
        //       _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
        //       _this.isClick = true;
        //     } else {
        //       if (_this.jishou == 1) {
        //         _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
        //       } else {
        //         _this.$router.replace('/personal/my-order/1');
        //       }
        //       _this.isClick = true;
        //     }
        //   }
        // }
      } catch (error) {
        _this.isClick = true;
      }
    },

    // 商品详情下单
    _placeOrder() {
      return new Promise(async (resolve, reject) => {
        try {
          let { pay_type } = this.paymentPicker;
          let { goods_id, number, sku_id } = this.productList[0];
          let jishou = this.jishou;
          if (sku_id == '') {
            sku_id = 0;
          }
          let total_price;
          //黔宝兑换只需要付运费
          if (this.tip == 2) {
            total_price = this.postage_money;
          } else {
            total_price = this.totalMoney;
          }
          let params = {
            sku_id,
            goods_id,
            number,
            pay_type,
            address_id: this.address.id,
            total_price: total_price,
            postage_money: this.postage_money,
            tip: this.tip,
            is_jishou: this.radio,
            qianbao: this.productList[0].exchange_score,
            is_mail: Number(this.is_mail),
          };
          console.log('到这里了')
          // let res = await placeOrder_api(params);
          // 拿到规格数据
          let guigeData = JSON.parse(this.$route.query.guigeData)
          console.log(guigeData);
          let order_ids = []
          if (isArray(guigeData)) {
            // 循环拿到所有订单id
            for (let item of guigeData) {
              order_ids.push(item.order_id)
            }
            // if (this.$route.query.zhijiegoumaiFlag !== '1') {
            //   const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
            //   let res = await axios.post('api/pay/zhijie_goumai_toorder', {
            //     user_id: userId,
            //     // order_ids: order_ids,
            //     sum: guigeData[0].number,
            //     goods_id: guigeData[0].goods_id,
            //     site_id: params.address_id,
            //     spec_id: guigeData[0].spec_id
            //   })
            // }
            const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
            let res2 = await axios.post('api/pay/xia_pays', {
              user_id: userId,    
              order_ids: order_ids,
              site_id: params.address_id
            })
            console.log(res2)
            resolve(res2);
          } else {
            order_ids.push(guigeData.id)
            console.log('不是数组', order_ids)
            const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
            console.log('发送请求了', guigeData)
            // let res = await axios.post('api/pay/zhijie_goumai_toorder', {
            //   user_id: userId,
            //   // order_ids: order_ids,
            //   sum: guigeData.number,
            //   goods_id: guigeData.goods_id,
            //   site_id: params.address_id,
            //   spec_id: guigeData.spec_id
            // })
            console.log('发送一个请求')
            let res2 = await axios.post('api/pay/xia_pays', {
              user_id: userId,
              order_ids: order_ids,
              site_id: params.address_id
            })
            // console.log(res)
            console.log(res2)
            resolve(res2);
          }
          console.log(params);
          console.log(guigeData);
          console.log(order_ids);

          // if (res.data.code === 200) {
          //   this.$toast({ type: 'text', content: res.data.msg, time: 1000 });
          // } else {
          //   this.$toast({ type: 'text', content: res.data.msg, time: 1000 });
          // }
        } catch (error) {
          this.isClick = true;
        }
      });
    },
    // 购物车下单
    _placeOrderCart() {
      return new Promise(async (resolve, reject) => {
        try {
          let car_id = [];
          let { pay_type } = this.paymentPicker;
          this.productList.forEach(item => {
            car_id.push(item.car_id);
          });
          let params = {
            car_id,
            pay_type,
            address_id: this.address.id,
            total_price: this.totalMoney,
            postage_money: this.postage_money,
            is_jishou: this.radio,
            tip: this.tip,
          };
          console.log('到这里了')
          // 处理数据
          let guigeData = JSON.parse(this.$route.query.guigeData)
          console.log(guigeData);
          let listArr = []
          for (let item of guigeData) {
            listArr.push({
              goods_id: item.goods_id,
              sum: item.number,
              spec_id: item.spec_id
            })
          }
          console.log(listArr);
          let res2 = null;
          const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
          let res = await axios.post('api/pay/dowm_order_car', {
            user_id: userId,
            list: listArr,
            site_id: params.address_id
          })
          console.log(res)
          if (res.data.code === 200) {
            console.log(this.address)
            res2 = await axios.post('api/pay/xia_pays', {
              user_id: userId,
              site_id: params.address_id,
              order_ids: res.data.data
            })
            // if (res2.data.code === 200) {
            //   this.$toastBounce(res2.data.msg)
            // } else {
            //   this.$toastBounce(res2.data.msg)
            // }
            console.log(res2);
          } else {
            this.$toastBounce(res.data.msg)
          }
          console.log(this.$route.query.gouwucheFlag)
          resolve(res2);
        } catch (error) {
          this.isClick = true;
        }
      });
    },
    // 选择支付方式
    showPaymentPicker() {
      console.log(this.tip);
      console.log(this.productList);
      this.visibleFooterBar = true;
      let data;
      //微信浏览器时
      if (this.isWeixinBrowser()) {
        //公众号  微信支付2
        //门店只能支付宝和微信
        if (this.tip == 3 || this.tip == 1) {
          data = [
            {
              id: 2,
              content: '微信支付',
            },
          ];

          //批发且打开开关
        } else if (this.tip == 4 && this.productList[0].pf_switch == 2) {
          data = [
            // {
            //   id: 2,
            //   content: '微信支付',
            // },
            {
              id: 4,
              content: 'Thanh toán số dư1111',
            },
            {
              id: 5,
              content: 'Thanh toán bằng DOBO GOLD',
            },
          ];
        } else if (this.tip == 4 && this.productList[0].pf_switch == 1) {
          data = [
            // {
            //   id: 2,
            //   content: '微信支付',
            // },
            {
              id: 4,
              content: 'Thanh toán số dư111',
            },
          ];
        } else if (this.tip == 2) {
          data = [
            // {
            //   id: 2,
            //   content: '微信支付',
            // },
            {
                id: 5,
                content: 'Thanh toán bằng DOBO GOLD',
            },
          ];
        } else if (this.tip == 5) {
          data = [
            // {
            //   id: 2,
            //   content: '微信支付',
            // },
          ];
        }
      } else {
        //app微信支付1
        if (this.tip == 3 || this.tip == 1) {
          console.log(this.$route)
          data = JSON.parse(this.$route.query.payData);
          // data = [
            // {
            //   id: 3,
            //   content: '支付宝支付',
            // },
            // {
            //   id: 1,
            //   content: '微信支付',
            // },
            // {
            //   id: 4,
            //   content: '余额支付',
            // },
            // {
            //   id: 5,
            //   content: '多宝支付',
            // },
          // ];

          //批发且打开开关
        } else if (this.tip == 4 && this.productList[0].pf_switch == 2) {
          data = [
            // {
            //   id: 3,
            //   content: '支付宝支付',
            // },
            // {
            //   id: 1,
            //   content: '微信支付',
            // },
            {
              id: 4,
              content: '111',
            },
            {
              id: 5,
              content: 'Thanh toán bằng DOBO GOLD',
            },
          ];
        } else if (this.tip == 4 && this.productList[0].pf_switch == 1) {
          data = [
            // {
            //   id: 3,
            //   content: '支付宝支付',
            // },
            // {
            //   id: 1,
            //   content: '微信支付',
            // },
            {
              id: 4,
              content: 'Thanh toán số dư111',
            },
          ];
        } else if (this.tip == 2) {
          data = [
            // {
            //   id: 3,
            //   content: '支付宝支付',
            // },
            // {
            //   id: 1,
            //   content: '微信支付',
            // },
            {
                id: 5,
                content: 'Thanh toán bằng DOBO GOLD',
            },
          ];
        } else if (this.tip == 5) {
          data = [
            // {
            //   id: 3,
            //   content: '支付宝支付',
            // },
            // {
            //   id: 1,
            //   content: '微信支付',
            // },
          ];
        }
      }

      this.$createActionSheet({
        active: this.paymentPicker.index,
        data,
        cancelTxt:"Hủy bỏ",
        $class: {
          actionSheet__custom: true,
        },
        onSelect: (item, index) => {
          console.log(item)
          // 如果是微信支付、支付宝支付、银行卡支付，则提示“暂未开通此功能”
          if (item.content === '微信支付' || item.content === '支付宝支付' || item.content === '银行卡支付') {
            this.$toastBounce('暂未开通此功能，敬请期待!')
            this.visibleFooterBar = false;
            return
          }
          // 计算出奖励积分是否足够
          let totalPrice = 0;
          let { id, content } = item;
          let user_integral = this.userInfo.jl_integral;
          this.productList.forEach(item => {
            const { price, number } = item;
            totalPrice += price * number;
          });
          totalPrice = totalPrice / this.rateVo.jljf_conv_money;

          this.paymentPicker = {
            index,
            content,
            pay_type: id,
          };
          this.visibleFooterBar = false;
        },
        onCancel: () => {
          this.visibleFooterBar = false;
        },
      }).show();
    },
    // 支付宝支付
    _alipay(data) {
      var channel = null;
      let res = data;
      console.log('调支付接口', res);
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
            res.data,
            result => {
              this.$toast({ type: 'text', content: 'Thanh toán thành công', time: 1000 });
              if (this.jishou == 1) {
                setTimeout(() => {
                  // 寄售商品跳转寄售订单
                  this.$router.replace('/deposit');
                }, 700);
              } else if (this.is_mail == 2) {
                setTimeout(() => {
                  // 普通订单跳转订单列表
                  this.$router.replace('/personal/my-order/3');
                }, 700);
              } else {
                setTimeout(() => {
                  // 普通订单跳转订单列表
                  this.$router.replace('/personal/my-order/2');
                }, 700);
              }
            },
            e => {
              if (res.code === 400) {
                this.$toast({ type: 'text', content: res.msg, time: 2000 });
                return false;
              } else {
                if (this.jishou == 1) {
                  this.$toast({
                    type: 'text',
                    content: '支付失败',
                    time: 1000,
                  });
                } else {
                  this.$router.replace('/personal/my-order/1');
                }
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

    //app微信支付
    _AppWxpay(data) {
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
              if (this.jishou == 1) {
                setTimeout(() => {
                  // 寄售商品跳转寄售订单
                  this.$router.replace('/deposit');
                }, 700);
              } else if (this.is_mail == 2) {
                setTimeout(() => {
                  this.$router.replace('/personal/my-order/3');
                }, 700);
              } else {
                setTimeout(() => {
                  // 普通订单跳转订单列表
                  this.$router.replace('/personal/my-order/2');
                }, 700);
              }
            },
            e => {
              if (data.code === 400) {
                this.$toast({ type: 'text', content: data.msg, time: 2000 });
                return false;
              } else {
                if (this.jishou == 1) {
                  this.$toast({
                    type: 'text',
                    content: '支付失败',
                    time: 1000,
                  });
                } else {
                  this.$router.replace('/personal/my-order/1');
                }
              }
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
    // 选择地址
    onChangeAddress(item) {
      this.addressList.forEach(item => {
        item.isChecked = false;
      });
      item.isChecked = true;
      setTimeout(() => {
        this.visibleAddress = false;
      }, 100);
    },
    // 添加地址
    handleJump() {
      console.log(this.$route.fullPath);
      this.$router.push({
        query: { type: 'add' },
        path: this.$route.fullPath.split('?')[0] + '/address-edit',
      });
    },
    // 修改地址后刷新
    async refreshAddress() {
      let addresses = await getAddressList_api();
      let newList = addresses.list;
      if (newList.length === 1) {
        newList[0].isChecked = true;
        this.address = newList[0];
      } else {
        newList.forEach(item => {
          if (item.id == this.address.id) {
            item.isChecked = true;
          } else {
            item.isChecked = false;
          }
        });
      }
      this.addressList = newList;
    },
    // 选择地址弹层关闭
    onClose() {
      this.addressList.forEach(item => {
        if (item.isChecked) {
          this.address = item;
        }
      });
    },
    isWeixinBrowser() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
  },
};
