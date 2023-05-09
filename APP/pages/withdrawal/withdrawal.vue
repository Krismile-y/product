<template>
	<view class="withdrawal">
    <backgroundPage :title="title">
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
            <view class="right" @click="open">
              <view style="color: #999;">点击填写银行卡信息</view>
            </view>
          </view>
          <u-popup :show="show" mode="bottom"  @close="close" @open="open">
            <view class="popupBox">
              <uni-forms :modelValue="formData" label-position="top">
                <uni-forms-item label="银行卡号" name="cardNum" required>
                  <uni-easyinput type="text" v-model="formData.u_back_card" placeholder="请输入银行卡号" />
                </uni-forms-item>
                <uni-forms-item required name="openingBank" label="开户行">
                  <uni-easyinput type="text" v-model="formData.u_bank_name" placeholder="请输入开户行" />
                </uni-forms-item>
                <uni-forms-item required name="userName" label="卡用户名">
                  <uni-easyinput type="text" v-model="formData.u_back_user_name" placeholder="请输入卡用户名" />
                </uni-forms-item>
              </uni-forms>
              <button @click="submitForm" type="primary">填写完成</button>
              <button @click="close">取消</button>
            </view>
          </u-popup>
          
          <view class="bottom dis zbottom">
          	<view class="in dis" @tap="sendBtn">
          		申请提现
          	</view>
          </view>
          <!-- <view class="btns">
            <view class="btn dis" @click="sendBtn" style="background-color: #aaff7f;">申请提现</view>
          </view> -->
        </view>
        
      </view>
    </backgroundPage>
	</view>
</template>

<script>
  import backgroundPage from "../../components/background-page/background.vue";
	export default {
    components: {backgroundPage},
		data() {
			return {
        show: false, //显示银行填写信息
				currentIndex:0,
        money_balance: 0, //可提现金额
        money: 0,
        title:``,
        formData: {
          
        },
			};
		},
    onLoad() {
      this.init()
    },
		methods:{
      init() {
        // 获取用户可提现资金
        let params = {
          is_whole: 1
        }
        const that = this
        this.$fn.request('/user',"GET",params).then(res=>{
          console.log(res);
          that.money_balance = res.data.data.money_balance
          that.title = `<view class="wdtjm">可提现余额</view><br />
          <view class="numberCode">${that.money_balance}</view>`
        })
      },
			bian(index){
				this.currentIndex=index
			},
      open() {
        this.show = true
      },
      close() {
        this.show = false
      },
      submitForm() {
        console.log(this.formData);
        this.close()
      },
      // 发送申请接口
      sendBtn() {
        let params = {
          money: this.money,
          ...this.formData
        }
        
        this.$fn.request('/withdrawal',"POST",params).then(res=>{
          console.log(res);
          if(res.data.code == 1) {
            // 请求成功
            uni.showToast({
              icon:'success',
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
.color{
	background-color: red;
	color: #fff;
}	
.withdrawal{
	width: 100%;
	height: 100vh;
	.box{
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
.container{
	width: 90%;
	margin: 0 auto;
	height: 100%;
	.tits{
		width: 80%;
		height: 55upx;
		display: flex;
		color: 000;
		margin: 0 auto;
		border-radius: 10upx;
		border: 1upx solid #000;
		margin-top: 20upx;
		.title{		
      width: 100%;
			height: 100%;
      text-align: center;
		}
	}	
	.item{
		width: 80%;
		height: 90upx;
		display: flex;
		align-items: center;
		margin: 0 auto;	
		border-bottom: 1upx solid #cccccc;
		.left{
			width: 40%;
			height: 100%;
			display: flex;
			align-items: center;
			padding-left: 20upx;
		}
		.right{
			width: 60%;
			height: 100%;
			box-sizing: border-box;
			padding-left: 30upx;
			display: flex;
			align-items: center;
			input{
				width: 100%;
				height: 100%;
			}
		}
	}
	.tishi{
			width: 90%;
			text-align: center;
			font-size: 22upx;
			color: red;
			margin: 20upx auto;
	}
	.btns{
	width: 90%;
	height: 90upx;
	font-size: 22upx;
	margin: 20upx auto;	
	display: flex;
	justify-content: space-around;
	.btn{
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
