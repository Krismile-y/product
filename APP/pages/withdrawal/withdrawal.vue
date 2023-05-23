<template>
  <view class="withdrawal">
    <airel-floatball  />
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <view class="head-box">
      <view class="head-text">
        可提现余额
      </view>
      <view class="head-num" :key="moneyRemake">
        {{info.money_approve}}
      </view>
    </view>
    <view class="content-box">
      <view class="content-title">
        <view class="shu"></view>
        <view class="title-text">
          提现金额
        </view>
      </view>
      <view class="money-num">
        <u--input
          placeholder="请输入提现金额"
          border="bottom"
          v-model="money"
          clearable
        >
          <!-- <u--text
            text="￥"
            slot="prefix"
            margin="0 3px 0 0"
            type="tips"
          ></u--text> -->
        </u--input>
      </view>
      <view class="cardChange" @tap="open()">
        <view class="left">
          银行卡
        </view>
        <view class="center" :class="{
          'cardNumcolor': cardTextColor
        }">
          {{cardText}}
        </view>
        <image src="../../static/my/xia.png" mode=""></image>
      </view>
    </view>
    <view class="bottom-fixd">
      <view class="bot-btn" @tap="tixian">
        提交申请
      </view>
    </view>
    <u-popup :show="show" mode="bottom" @close="close" :round="16" @open="open">
      <view class="popupBox">
        <view class="popupBox-title">
          银行卡选择
        </view>
        <view class="card-item" v-for="(item,index) in cardList" :key="index" @tap="checkCard(item)">
          <view class="card-name">
            {{item.name}}
          </view>
          <view class="username">
            {{item.account_name}}
          </view>
          <view class="card-number">
            {{item.card}}
          </view>
          <view class="defaultText" v-show="(item.is_default==1)">
            当前选中
          </view>
        </view>
        <view class="addCard" @tap="openAgain()">
          <image src="../../static/newIndex/add.png" mode=""></image>
          <view class="addtext">
            添加银行卡
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup :show="addShow" mode="bottom" @close="closeAgain" :round="16" @open="openAgain">
      <view class="popupBox">
        <view class="popupBox-title">
          银行卡填写
        </view>
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" :label-width='80'>
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
        <view class="btn-group">
          <view class="quxiao" @tap="closeAgain">
            取消
          </view>
          <view class="wancheng" @tap="submitForm('valiForm')">
            填写完成
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        addShow: false,
        money: '0',
        cardList: [],
        moneyRemake: 0,
        info: {
          money_approve: 0
        }, //用户信息
        nowCard: {}, //当前选中的银行卡
        cardText: '请选择',
        cardTextColor: false,
        // 校验表单数据
        valiFormData: {
          u_back_card: '',
          u_bank_name: '',
          u_back_user_name: '',
          is_default: 0
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
        sexs: [{
        					text: '否',
        					value: 0
        				}, {
        					text: '是',
        					value: 1
        				}],
      };
    },
    watch: {
      cardText(newVal) {
        if(newVal!='请选择') {
          this.cardTextColor = true
        }
      },
      info: {
        handler(newVal) {
          this.$nextTick(()=> {
            this.moneyRemake = this.moneyRemake==0? 1:0
            this.$forceUpdate();
          })
        },
        deep: true
      }
    },
    onLoad() {
      this.init()
      this.getuserMsg()
    },
    methods: {
      // 获取银行卡列表
      init() {
        this.cardList = []
        // 获取用户已绑定的银行卡
        let params = {
          
        }
        const that = this
        this.$fn.request('my_bank', "POST", params).then(res => {
          console.log(res,'我的银行卡');
          res.data.data.forEach((item,index) => {
            let cardStr = this.noSpace(item.card)
            item.card = that.newCardNum(cardStr)
            that.cardList.push(item)
            if(item.is_default == 1) {
              this.cardText = item.card
              this.nowCard = item
            }
          })
        })
      },
      getuserMsg() {
        let params = {
          is_whole: 1
        }
        this.$fn.request('user', "GET", params).then(res => {
          console.log(res,'个人信息');
          this.info = res.data.data
        })
      },
      // 选择银行卡
      checkCard(item) {
        console.log(item,'信息');
        this.cardText = this.noSpace(item.card)
        this.cardText = this.newCardNum(this.cardText)
        let params = {
          name: item.name,
          card: this.cardText,
          account_name: item.account_name,
          default: 1,
          bid: item.id
        }
        this.editCard(params)
      },
      addCard(params) {
        // 新增银行卡
        this.$fn.request('bank', "POST", params).then(res => {
         
		  this.$refs.success.showTips({
		      msg: '添加银行卡成功',
		      duration: 2000
		    })
          this.init()
          this.$forceUpdate()
          this.close()
          this.closeAgain()
        })
      },
      editCard(params) {
        // 修改银行卡
        this.$fn.request('edit_bank', "POST", params).then(res => {
          
		  this.$refs.success.showTips({
		      msg: '修改银行卡成功',
		      duration: 2000
		    })

          this.init()
          this.close()
        })
      },
      // 打开银行卡列表
      open() {
        this.show = true
      },
      // 关闭银行卡列表
      close() {
        this.show = false
      },
      // 打开银行卡信息填写弹窗
      openAgain() {
        this.addShow = true
      },
      closeAgain() {
        this.addShow = false
      },
      // 去掉字符串中所有的空格
      noSpace(str) {
        return str.replace(/\s/g, '')
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
      submitForm(ref) {
        // 非中文字符的正则表达式
        const reg = /[^\u4e00-\u9fa5]/g
        this.$refs[ref].validate().then(res => {
          let cardStr = this.noSpace(res.u_back_card)
          console.log('success',res ,cardStr);
          if(cardStr.length <= 15 || cardStr.length >19 ) {
           
			this.$refs.error.showTips({
			msg: '请检查银行卡号输入是否正确',
			duration: 2000
				})
          }else if (reg.test(res.u_bank_name) || reg.test(res.u_back_user_name)) {
            
			this.$refs.error.showTips({
			msg: '请检查开户行或卡用户名',
			duration: 2000
				})
          }else if(res.u_back_user_name !== this.info.user_name) {
            
			this.$refs.error.showTips({
			msg: '请检查卡用户名是否正确',
			duration: 2000
				})
          }
          else {
            let params = {
              name: '',
              card: '',
              account_name: '',
              default: 1
            }
            params.name = res.u_bank_name
            params.card = cardStr
            params.account_name = res.u_back_user_name
            console.log(params);
            this.addCard(params)
          }
        }).catch(err => {
          console.log('err', err);
        })
        // this.close()
      },
      // 提交申请
      tixian() {
        if(this.money == 0) {
          
		  this.$refs.error.showTips({
		  msg: '请输入提现金额',
		  duration: 2000
		  	})
		  		
          return
        }
        if(this.info.money_approve < this.money ) {
         this.$refs.error.showTips({
         msg: '可提现余额不足',
         duration: 2000
         	})
          return
        }
        let params = {
          money: this.money,
          u_bank_name: this.nowCard.name,
          u_back_card: this.nowCard.card,
          u_back_user_name: this.nowCard.account_name
        }
        console.log(params,'money');
        this.$fn.request('withdrawal', "POST", params).then(res => {
			console.log(res.data)
			if(res.data.code == 1){
				
				this.$refs.success.showTips({
				    msg: '申请成功',
				    duration: 2000
				  })

        // this.info = uni.getStorageSync('user_info')
        this.getuserMsg()
				this.init()
			}
          
        })
      }
    }
  }
</script>

<style lang="less">
  .withdrawal {
    width: 100%;
    .head-box {
      width: 100%;
      height: 344rpx;
      background-image: url('../../static/common/tixian_head.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 67rpx 0 0;
      .head-text {
        width: 100%;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        // line-height: 40rpx;
        opacity: .95;
        text-align: center;
      }
      .head-num {
        width: 100%;
        text-align: center;
        font-size: 56rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        letter-spacing: 2px;
        margin-top: 24rpx;
      }
    }
    .content-box {
      width: 100%;
      margin-top: -86rpx;
      height: calc(100vh - 258rpx);
      background: #F7F8FA;
      border-radius: 32rpx 32rpx 0rpx 0rpx;
      box-sizing: border-box;
      padding: 40rpx 24rpx 0;
      .content-title {
        display: flex;
        align-items: center;
        margin-bottom: 36rpx;
        width: 100%;
        .shu {
          width: 10rpx;
          height: 24rpx;
          background: #02AD70;
          border-radius: 5rpx;
          margin-right: 12rpx;
        }
        .title-text {
          height: 40rpx;
          font-size: 28rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #272727;
          line-height: 40rpx;
        }
      }
      .money-num {
        /deep/ .u-text__value {
          font-size: 64rpx !important;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 550;
          color: #272727;
        }
        /deep/ .uni-input-input {
          font-size: 54rpx !important;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 550;
          color: #272727; 
        }
      }
    }
    .cardChange {
      width: 100%;
      height: 102rpx;
      box-sizing: border-box;
      border-bottom: 1upx solid #E5E5E5;
      display: flex;
      align-items: center;
      .left {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      .center {
        flex: 1;
        text-align: right;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #8E8E8E;
      }
      // 有选择银行卡时的样式
      .cardNumcolor{
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      image {
        width: 32rpx;
        height: 32rpx;
        transform: rotate(270deg);
        margin-left: 10rpx;
      }
      
    }
    .bottom-fixd {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 180rpx;
      background: #FFFFFF;
      .bot-btn {
        width: 686rpx;
        height: 80rpx;
        background: #02AE71;
        border-radius: 100rpx;
        margin: 16rpx auto 0;
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 80rpx;
        text-align: center;
      }
    }
    .popupBox {
      width: 100%;
      height: 836rpx;
      background: #F7F8FA;
      border-radius: 32rpx 32rpx 0rpx 0rpx;
      box-sizing: border-box;
      padding: 24rpx 24rpx 0;
      position: relative;
      overflow-y: scroll;
      .popupBox-title {
        width: 100%;
        text-align: center;
        font-size: 36rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #272727;
        margin-bottom: 24rpx;
      }
      .btn-group {
        width: 100%;
        position: fixed;
        bottom: 64rpx;
        left: 0%;
        display: flex;
        justify-content: space-evenly;
        .quxiao {
          width: 327rpx;
          height: 80rpx;
          border-radius: 40rpx;
          border: 2rpx solid #8E8E8E;
          font-size: 28rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #8E8E8E;
          line-height: 80rpx;
          text-align: center;
        }
        .wancheng {
          width: 327rpx;
          height: 80rpx;
          background: #02AE71;
          border-radius: 100rpx;
          font-size: 28rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 80rpx;
          text-align: center;
        }
      }
      .card-item {
          background: linear-gradient(to bottom, #34D099 0%, #07c07e 100%);
          margin-bottom: 20upx;
          border-radius: 25upx;
          width: 100%;
          height: 200upx;
          box-sizing: border-box;
          padding: 20upx 40upx;
          color: #fff;
          position: relative;
          .card-name {
            font-size: 16px;
            margin-bottom: 10upx;
          }
          
          .username {
            font-size: 14px;
            margin-bottom: 10upx;
          }
          .card-number {
            font-size: 18px;
            margin-bottom: 10upx;
          }
          .defaultText {
            border: 1upx solid #fff;
            border-radius: 12upx;
            box-sizing: border-box;
            padding: 2upx 8upx 6upx;
            color: #fff;
            position: absolute;
            font-size: 20rpx;
            bottom: 12rpx;
            right: 12rpx;
          }
        }
        .addCard {
          width: 100%;
          height: 160rpx;
          background-color: #fff;
          box-sizing: border-box;
          padding: 10rpx 20rpx;
          display: flex;
          align-items: center;
          border-radius: 25rpx;
          image {
            width: 80rpx;
            height: 80rpx;
          }
          .addtext {
            flex: 1;
            line-height: 160rpx;
            color: #5e6570;
            font-size: 16px;
            margin-left: 20rpx;
          }
        }
      }
  }
</style>
