<template>
  <view class="withdrawal">
    <backgroundPage :title="title" pageName="my">
      <view class="box">

        <view class="container">

          <view class="item">
            <view class="left ">提现的金额</view>
            <view class="right ">
              <input type="text" placeholder="" v-model="money">
            </view>
          </view>

          <view class="item">
            <view class="left ">请选择银行卡</view>
            <view class="right" @tap="open">
              <view style="color: #999;">点击填写银行卡信息</view>
            </view>
          </view>
          <view class="show-card" v-show="cardShow">
            <!-- <image src="../../static/common/jincard.jpg" mode="widthFix"></image> -->
            <view class="card-title">
              卡用户名:
            </view>
            <view class="card-p">{{valiFormData.u_back_user_name}}</view>
            <view class="card-title">
              开户行:
            </view>
            <view class="card-p">{{valiFormData.u_bank_name}}</view>
            <view class="card-title">
              银行卡号:
            </view>
            <view class="card-p" style="font-size: 18px;">{{newCardNum(valiFormData.u_back_card)}}</view>
          </view>
          <u-popup :show="show" mode="bottom" @close="close" @open="open">
            <view class="popupBox">
              <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" labelPosition="top">
                <uni-forms-item label="银行卡号" name="u_back_card" required>
                  <uni-easyinput type="text" v-model="valiFormData.u_back_card" placeholder="请输入银行卡号(只能输入数字)" />
                </uni-forms-item>
                <uni-forms-item required name="u_bank_name" label="开户行">
                  <uni-easyinput type="text" v-model="valiFormData.u_bank_name" placeholder="请输入开户行" />
                </uni-forms-item>
                <uni-forms-item required name="u_back_user_name" label="卡用户名">
                  <uni-easyinput type="text" v-model="valiFormData.u_back_user_name" placeholder="请输入卡用户名" />
                </uni-forms-item>
              </uni-forms>
              <button @tap="submitForm('valiForm')" type="primary">填写完成</button>
              <button @tap="close">取消</button>
            </view>
          </u-popup>

          <view class="bottom dis zbottom">
            <view class="in dis" @tap="sendBtn">
              申请提现
            </view>
          </view>
          <!-- <view class="btns">
            <view class="btn dis" @tap="sendBtn" style="background-color: #aaff7f;">申请提现</view>
          </view> -->
        </view>

      </view>
    </backgroundPage>
  </view>
</template>

<script>
  import backgroundPage from "../../components/background-page/background.vue";
  export default {
    components: {
      backgroundPage
    },
    data() {
      return {
        show: false, //显示银行填写信息
        currentIndex: 0,
        money_balance: 0, //可提现金额
        money: 0,
        title: ``,
        cardShow: false, //银行卡信息填写完成时展示
        // 校验表单数据
        valiFormData: {
          u_back_card: '',
          u_bank_name: '',
          u_back_user_name: '',
        },
        // 校验规则
        rules: {
          u_back_card: {
            rules: [{
              required: true,
              errorMessage: '请输入正确的银行卡号'
            }, {
              pattern: '\\d+',
              errorMessage: '银行卡号只能输入数字'
            }]
          },
          u_bank_name: {
            rules: [{
              required: true,
              errorMessage: '开户行不能为空'
            }]
          },
          u_back_user_name: {
            rules: [{
              required: true,
              errorMessage: '卡用户名不能为空'
            }]
          }
        },
      };
    },
    onLoad() {
      this.init()
    },
    methods: {
      init() {
        // 获取用户可提现资金
        let params = {
          is_whole: 1
        }
        const that = this
        this.$fn.request('/user', "GET", params).then(res => {
          console.log(res);
          that.money_balance = res.data.data.money_balance
          that.title = `<view class="wdtjm">可提现余额</view><br />
          <view class="numberCode">${that.money_balance}</view>`
        })
      },
      // 每四位数用空格隔开
      newCardNum(stringNum) {
        if (stringNum == undefined || stringNum == '') {
          return
        }
        let numArr = stringNum.toString().split('')
        for (let i = 0; i < numArr.length; i++) {
          if (i % 5 == 0) {
            numArr.splice(i, 0, ' ')
          }
        }
        let newStr = numArr.join('')
        return newStr
      },
      bian(index) {
        this.currentIndex = index
      },
      open() {
        this.show = true
      },
      close() {
        this.show = false
      },
      submitForm(ref) {
        this.$refs[ref].validate().then(res => {
          console.log('success', res);
          if(res.u_back_card.length != 19) {
            uni.showToast({
              title: "请检查银行卡号输入是否正确",
              icon:"error"
            })
            this.cardShow = false
          }else {
            this.cardShow = true
            this.close()
          }
        }).catch(err => {
          console.log('err', err);
        })
        // this.close()
      },
      // 发送申请接口
      sendBtn() {
        let params = {
          money: this.money,
          ...this.valiFormData
        }

        this.$fn.request('/withdrawal', "POST", params).then(res => {
          console.log(res);
          if (res.data.code == 1) {
            // 请求成功
            uni.showToast({
              icon: 'success',
              title: "申请成功",
              success: () => {
                this.init()
              }
            })

          }
        })
      }
    }
  }
</script>

<style lang="less">
  .color {
    background-color: red;
    color: #fff;
  }

  .withdrawal {
    width: 100%;
    height: 100vh;

    .box {
      // background-color: #fff;
      margin-top: 40upx;
    }

    /deep/ .help-title {
      top: 5%;
      line-height: 80upx;
      text-align: center;

      .wdtjm {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .container {
    width: 90%;
    margin: 0 auto;
    height: 100%;

    .tits {
      width: 80%;
      height: 55upx;
      display: flex;
      color: 000;
      margin: 0 auto;
      border-radius: 10upx;
      border: 1upx solid #000;
      margin-top: 20upx;

      .title {
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }

    .item {
      width: 80%;
      height: 90upx;
      display: flex;
      align-items: center;
      margin: 0 auto;
      border-bottom: 1upx solid #cccccc;

      .left {
        width: 40%;
        font-size: 16px;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 20upx;
      }

      .right {
        width: 60%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 30upx;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          height: 100%;
        }
      }
    }

    .show-card {
      width: 90%;
      border-radius: 15px;
      height: 190px;
      margin: 30px auto;
      background-image: url('../../static/common/heisebg.jpg');
      background-size: 100% auto;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
      font-size: 18px;
      box-sizing: border-box;

      .card-title {
        font-size: 16px;
        margin-bottom: 10upx;
      }

      .card-p {
        font-size: 14px;
        margin-bottom: 10upx;
        text-indent: 30upx;
      }
    }

    .tishi {
      width: 90%;
      text-align: center;
      font-size: 22upx;
      color: red;
      margin: 20upx auto;
    }

    .btns {
      width: 90%;
      height: 90upx;
      font-size: 22upx;
      margin: 20upx auto;
      display: flex;
      justify-content: space-around;

      .btn {
        width: 48%;
        height: 100%;
        background-color: green;
        color: #fff;
        border-radius: 10upx;
      }
    }
  }

  .popupBox {
    box-sizing: border-box;
    padding: 10upx;
  }
</style>
