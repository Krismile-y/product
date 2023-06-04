<template>
	<view class="safe">
		
		
		   <view><airel-floatball /></view>
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   <view class="newInput">
		   	<view class="newInputItem">
		   		<view class="inputName ">手机号</view>
		   		<u-input v-model="phone" type="number" placeholder="请输入手机号" border="true" maxlength="11" />
		   	</view>
		   	<view class="newInputItem">
		   		<view class="inputName ">身份证</view>
		   		<u-input v-model="sfz" type="number" placeholder="请输入身份证号" border="true" maxlength="18" />
		   	</view>
		   
		   	<view class="newInputItem">
		   		<view class="inputName ">新密码</view>
		   		<u-input v-model="pwd" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
		   			border="true" />
		   	</view>
		   
		   	<view class="newInputItem">
		   		<view class="inputName" style="">验证码</view>
		   		<u-input v-model="captcha" type="number" placeholder="请输入验证码" border="true" maxlength="4"
		   			style="width: 266upx;padding-left: 20upx;" />
		   		<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap='change()'></image>
		   	</view>
		   
		   	<view class="xinBtn dis" @tap="xiugai()" style="margin-top: 90rpx;" v-show="show==0?true:false">提交</view>
		   	<view class="xinBtn dis" style="margin-top: 90rpx;" v-show="show==1?true:false">提交中...</view>
		   </view>
		  
		
		



	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				captcha: '',
				pwd: '',
				phone: "",
				sfz: "",
				herf: "", //验证码
			};
		},
		onShow() {
			
			
		},
		onLoad(){
			this.change()
			
		},
		methods: {
			change() { //刷新验证码
				console.log(1)

				this.$fn.request('verify', 'GET', {}).then(res => {
					let times = 0;
					times = new Date()
					this.herf = getApp().globalData.baseUrl + 'verify?time=' + times
				})
			},
			go(index) {

				uni.navigateTo({
					url: '/pages/revisePassword/revisePassword?type=' + index
				})

			},
			xiugai() {
				this.$refs.error.showTips({
					msg: '请联系客服修改',
					duration: 2000
				})
				return
				this.show=1
				// 手机号验证
				let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				console.log(reg_tel.test(this.phone))
                
				// 身份证验证
				let testsfz = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

				if (reg_tel.test(this.phone) == false) {
					this.show=0
					this.$refs.error.showTips({
						msg: '请输入正确的手机号',
						duration: 2000
					})
					return
				}

				if (testsfz.test(this.sfz) == false) {
					this.show=0
					this.$refs.error.showTips({
						msg: '请输入正确的身份证号',
						duration: 2000
					})
					return
				} else if (this.pwd.length < 8) {
					this.show=0
					this.$refs.error.showTips({
						msg: '密码最少8位',
						duration: 2000
					})
					return
				}

				// if (this.phone.length !== 11) {

				// 	this.$refs.error.showTips({
				// 	msg: '手机号必须是11位',
				// 	duration: 2000
				// 		})
				// 	return
				// } else if (this.pwd.length < 8) {

				// 	this.$refs.error.showTips({
				// 	msg: '密码最少八位',
				// 	duration: 2000
				// 		})
				// 	return
				// }else if(this.sfz.length !==18){
				// 	this.$refs.error.showTips({
				// 	msg: '身份证必须是18位',
				// 	duration: 2000
				// 		})
				// 	return
				// }

				let data = {
					'phone': this.phone,
					'pwd': this.pwd,
					'captcha': this.captcha,
					'sfz': this.sfz
				}

				this.$fn.request('forget', 'POST', data).then(res => {
					console.log(res.data.msg)
					if (res.data.code == 1) {
						this.show=0
						uni.removeStorageSync('pwd')
						this.$refs.success.showTips({
							msg: res.data.msg,
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}, 100)
					} else {
						this.show=0
						this.$refs.error.showTips({
							msg: res.data.msg,
							duration: 2000
						})
						this.change()
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.safe {
		width: 100%;
		height: 100vh;
		background-color: #fff;

		.item {
			width: 95%;
			height: 100rpx;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border-bottom: 1rpx solid #ccc;
			margin: 0 auto;

			position: relative;

			.left {
				width: 35%;
				height: 100%;
				display: flex;
				align-items: center;
				// border-right: 1rpx solid #ccc;
			}

			.right {
				width: 65%;
				height: 100%;
				color: #999;

				input {
					width: 100%;
					height: 100%;
					padding-left: 20rpx;
				}
			}

			.yanzheng {
				width: 30%;
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.in {
		width: 95%;
		height: 130rpx;
		margin-top: 30rpx;
		// 	background-color: #4bc93e;
		// 	// background-image: linear-gradient(to left bottom, red 60%, green 10%) ;
		//  //       background-image: linear-gradient(to left bottom,'#abe345', '#4bc93e');

		//    background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
		background-image: url('../../static/common/btn.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-size: 40rpx;
		border-radius: 20rpx;
	}

	.newInput {
		margin: 0 auto;
		width: 686rpx;

		.newInputItem {
			width: 100%;
			height: 90rpx;
			border-bottom: 1rpx solid #E5E5E5;
			display: flex;
			align-items: center;

			.inputName {
				font-family: PingFangSC-Regular, PingFang SC;
				width: 160upx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: left;
			}

			input {
				height: 100%;
				width: 506upx;
			}
		}

		.two {
			width: 100%;
			height: 90rpx;
			display: flex;
			align-items: center;
			position: relative;

			.jizhu {
				display: flex;
				align-items: center;
			}

			.wangji {
				position: absolute;
				width: 160rpx;
				height: 100%;
				right: 0;
				top: 0;
			}
		}
	}

	.xinBtn {
		width: 686rpx;
		height: 80rpx;
		background: #02AE71;
		border-radius: 100rpx;
		margin: 0 auto;
		margin-top: 30rpx;
		color: #fff;
	}
</style>