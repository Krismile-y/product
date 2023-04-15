/* eslint-disable no-undef */
import scrollBounce from '@/mixins/scrollBounce';
import NumberControl from '_com/number-control/number-control.vue';
import Header from '_com/header/header';
import { Checkbox, CheckboxGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Cell, CellGroup } from 'vant';

import { getAddressList_api } from '_api/address';

import AddressList from '_com/address-select/address-select.vue';
import wxConfig from '@/mixins/wxConfig';
import wx from 'weixin-js-sdk';
import { mapGetters } from 'vuex';

import { getTour_api } from '@/api/goods';
import { extensionPay_api } from '@/api/order';

export default {
  name: 'Pay',
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
      headerTitle: '购买',
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
      checkAgree: false,
      jishouAgreeMent: '',
      isAgree: true,
      isShop: true,
      mendianAgreeMent: '',
      tour: '',
    };
  },
  async created() {
    if (this.isWeixinBrowser()) {
      this.paymentPicker = {
        pay_type: 2,
        index: 0,
        content: '微信支付',
      };
    } else {
      this.paymentPicker = {
        pay_type: 1,
        index: 0,
        content: '微信支付',
      };
    }
    this._getAddress();
    this.getData();
  },
  computed: {
    ...mapGetters(['userInfo']),
    // 需要支付的金额
    totalMoney() {
      let totalPrice = 0;
      let num = 0;
      this.productList.forEach(item => {
        const { price, number, pf_price, nowPrice } = item;
        if (nowPrice) {
          totalPrice += nowPrice * number;
        } else if (item.tip == 4) {
          totalPrice += pf_price * number;
        } else {
          totalPrice += price * number;
        }
      });
      if (this.postage_money) {
        num = Math.max(Number((totalPrice + this.postage_money).toFixed(2)), 0);
      } else {
        num = Math.max(Number(totalPrice.toFixed(2)), 0);
      }
      return num;
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
  methods: {
    async getData() {
      let res = await getTour_api({ id: 1 });
      console.log(res);
      this.tour = res.list;
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
    // 提交支付
    async handleSubmit() {
      if (!this.address.id) {
        this.$toastBounce('Vui lòng chọn địa chỉ trước');
        return;
      }
      if (!this.isClick) return;
      this.isClick = false;
      this.$toast('đang tải...');
      let _this = this;
      try {
        let { pay_type } = this.paymentPicker;
        let payData = await extensionPay_api({
          total_price: this.tour.price,
          pay_type: pay_type,
          address_id: this.address.id,
        });
        console.log('payData', payData);
        // 微信
        if (this.isWeixinBrowser()) {
          if (payData.code === 200) {
            wx.config({
              // debug: true, //
              // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: payData.data.appId, // 必填，公众号的唯一标识
              timestamp: payData.data.timeStamp,
              nonceStr: payData.data.nonceStr,
              package: payData.data.package,
              jsApiList: ['chooseWXPay'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function() {
              console.log('payData=>>', payData);
              _this.$toast.hide();
              wx.chooseWXPay({
                timestamp: payData.data.timeStamp,
                nonceStr: payData.data.nonceStr,
                package: payData.data.package,
                signType: payData.data.signType,
                paySign: payData.data.paySign,
                success: function(res) {
                  console.log(res);
                  _this.$toast({ type: 'success', content: 'Mua thành công' });
                  _this.$router.replace('/personal');
                },
                cancel: function(res) {
                  console.log(res);
                  _this.$toast({
                    type: 'text',
                    content: 'Thanh toán thất bại',
                    time: 1000,
                  });
                  _this.isClick = true;
                },
              });
            });
          } else {
            this.$toast({ type: 'text', content: payData.msg, time: 1000 });
            this.isClick = true;
          }
        } else {
          let type = _this.paymentPicker.pay_type;
          if (type == 3) {
            if (payData.code === 200) {
              _this._alipay(payData);
            } else if (payData.code === 400) {
              _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
              _this.isClick = true;
              return false;
            } else {
              _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
              _this.isClick = true;
              return false;
            }
          } else if (type == 1) {
            if (payData.code === 200) {
              _this._AppWxpay(payData);
            } else if (payData.code === 400) {
              _this.$toast({ type: 'text', content: payData.msg, time: 1000 });
              _this.isClick = true;
              return false;
            } else {
              _this.$toast({ type: 'text', content: '支付失败', time: 1000 });
              _this.isClick = true;
              return false;
            }
          }
        }
      } catch (error) {
        _this.isClick = true;
      }
    },

    // 选择支付方式
    showPaymentPicker() {
      this.visibleFooterBar = true;
      let data;
      //微信浏览器时
      if (this.isWeixinBrowser()) {
        data = [
          {
            id: 2,
            content: '微信支付',
          },
        ];
      } else {
        data = [
          {
            id: 1,
            content: '微信支付',
          },

          {
            id: 3,
            content: '支付宝支付',
          },
        ];
      }

      this.$createActionSheet({
        active: this.paymentPicker.index,
        data,
        $class: {
          actionSheet__custom: true,
        },
        onSelect: (item, index) => {
          let { id, content } = item;
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
              this.$router.replace('/personal');
            },
            e => {
              if (res.code === 400) {
                this.$toast({ type: 'text', content: res.msg, time: 2000 });
                return false;
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
              this.$router.replace('/personal');
            },
            e => {
              if (data.code === 400) {
                this.$toast({ type: 'text', content: data.msg, time: 2000 });
                return false;
              } else {
                this.$toast({ type: 'text', content: '支付失败', time: 1000 });
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
      console.log(3);
      this.$router.push({
        query: { type: 'add' },
        path: this.$route.fullPath + '/address-edit',
      });
      console.log(this.$route.fullPath + '/address-edit');
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
