<template>
	<view class="withdrawal">
		<view class="box">
			
			<view class="container">
				<view class="tits">
          <!--  @tap="bian(0)" :class="{color:currentIndex==0?true:false}" -->
					<view class="title dis">
						余额提现
					</view>
					<!-- <view class="title dis"@tap="bian(1)" :class="{color:currentIndex==1?true:false}">
						佣金提现
					</view> -->
				</view>
				<!--  -->
				
				<view class="item">
					<view class="left">可提现余额</view>
          <!--  v-show="currentIndex==0?true:false" -->
					<!-- <view class="left "v-show="currentIndex==1?true:false">可提现佣金</view> -->
					<view class="right ">{{money_balance}}</view>
				</view>
				
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
                <uni-easyinput type="text" v-model="formData.cardNum" placeholder="请输入银行卡号" />
              </uni-forms-item>
              <uni-forms-item required name="openingBank" label="开户行">
                <uni-easyinput type="text" v-model="formData.openingBank" placeholder="请输入开户行" />
              </uni-forms-item>
              <uni-forms-item required name="userName" label="卡用户名">
                <uni-easyinput type="text" v-model="formData.userName" placeholder="请输入卡用户名" />
              </uni-forms-item>
            </uni-forms>
            <button @click="submitForm" type="primary">填写完成</button>
            <button @click="close">取消</button>
          </view>
        </u-popup>
        
				<view class="tishi">
					温馨提示：请勿绑定本人以外银行卡提现
				</view>
				
				<view class="btns">
					<view class="btn dis" @click="sendBtn" style="background-color: #aaff7f;">申请提现</view>
					<!-- <view class="btn dis">产品复投</view> -->
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        show: false, //显示银行填写信息
				currentIndex:0,
        money_balance: 0, //可提现金额
        money: 0,
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
          money: 100,
          u_bank_name: '农行',
          u_back_card: '123',
          u_back_user_name: 'hello'
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
	height: 1520upx;
	background-image: url('../../static/my/tixian.jpg');
	background-size: 100% auto;
	position: relative;
	.box{
		width: 100%;
		height: 600upx;
		position: absolute;
		top: 340px;
		left: 0;
		
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
		color: red;
		margin: 0 auto;
		border-radius: 10upx;
		border: 1upx solid red;
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
