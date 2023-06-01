<template>
	<view class="revisePassword" style="width: 100%;height: 100vh;background-color: #fff;">
		
		
		   <view>
		   	<airel-floatball />
		   </view>
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   <view v-show="type==1?true:false">
		   	<view class="item">
		   		<image src="../../static/newMy/shimingBg.png" mode="" v-show="(this.info.is_real_name==1||this.info.is_real_name==2)"></image>
		   		<image src="../../static/newMy/jujueshenqing.png" mode="" v-show="this.info.is_real_name==3"></image>
		   		<view class="shiming-text">
		   			{{shimingText}}
		   		</view>
		   		<view class="shiming-card" v-show="this.info.is_real_name=='2'">
		   			<view class="shiming-p">
		   				姓名：{{this.info.user_name}}
		   			</view>
		   			<view class="shiming-p">
		   				身份证：{{setCardNum(this.info.sfz)}}
		   			</view>
		   		</view>
		   	</view>
		   </view>
		   
		   <!-- 修改密码 -->
		   <view v-show="type==2?true:false">
		   	<view class="newInput">
		   		<view class="newInputItem">
		   			<view class="inputName ">旧密码</view>
		   			<u-input v-model="jiu" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
		   				border="true" />
		   		</view>
		   
		   		<view class="newInputItem">
		   			<view class="inputName ">新密码</view>
		   			<u-input v-model="xin" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
		   				border="true" />
		   		</view>
		   
		   		<view class="newInputItem">
		   			<view class="inputName ">确认密码</view>
		   			<u-input v-model="queren" type="password" password-icon="true" pattern="[0-9]{8,}"
		   				placeholder="请输入密码" border="true" />
		   		</view>
		   
		   		<view class="newInputItem">
		   			<view class="inputName ">身份证</view>
		   			<u-input v-model="sfz" type="number" placeholder="请输入身份证号" border="true" />
		   		</view>
		   
		   		<view class="newInputItem">
		   			<view class="inputName ">验证码</view>
		   			<u-input type="text" placeholder="请输入验证码" v-model="captcha" style="height: 100%;width: 266upx;"
		   				border="true" maxlength="4" />
		   			<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap="yanzheng"></image>
		   		</view>
		   
		   		<view class="xinBtn dis" @tap="change" style="margin-top: 90upx;" v-show="show==0?true:false">修改密码
		   		</view>
		   		<view class="xinBtn dis" style="margin-top: 90upx;" v-show="show==1?true:false">修改密码中...</view>
		   	</view>
		   
		   
		   </view>
		 
		
		

	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.yanzheng()
			
			console.log(options.type)
			this.type = options.type

			this.info = uni.getStorageSync('user_info')
			let z = this.info.is_real_name
			if (z == 0) {
				this.shimingText = '未实名'
			} else if (z == 1) {
				this.shimingText = '您的认证正在申请！'
			} else if (z == 2) {
				this.shimingText = '您的实名认证已成功！'
			} else if (z == 3) {
				this.shimingText = '实名失败,请联系客服!'
			}
			// if(this.info.is_real_name==0){
			// 	this.shiming='未实名'
			// }else{
			// 	this.shiming='已实名'
			// } 
		},
		data() {
			return {
				show: 0,
				type: '',
				xin: '',
				jiu: "",
				queren: '',
				shiming: "",
				sfz: '',
				shimingText: '',
				herf: '',
				captcha: ''
			};
		},
		methods: {
			yanzheng() {

				uni.request({
					url: this.$url + 'verify',
					data: {},
					success: (res) => {
						// console.log(res)
						let times = 0;
						times = new Date()
						this.herf = this.$url + 'verify?time=' + times
					}
				})


			},

			// 保留前四位和后六位，中间用******显示
			setCardNum(str) {
				let newStr = ''
				if (str == '') {
					return
				}
				let str1 = str.slice(0, 4)
				let str2 = str.slice(str.length - 6, str.length)
				newStr = str1 + `********` + str2
				return newStr
			},
			change() {
				this.show = 1
				// 身份证验证
				let testsfz = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				console.log(testsfz.test(this.sfz))

				// 修改密码接口
				if (this.jiu.length < 8) {

					this.$refs.error.showTips({
						msg: '密码必须最少8位',
						duration: 2000
					})
					this.show = 0
					return
				} else if (this.xin.length < 8) {
					this.show = 0
					this.$refs.error.showTips({
						msg: '新密码必须最少8位',
						duration: 2000
					})
					return
				} else if (this.queren.length < 8) {
					this.show = 0
					this.$refs.error.showTips({
						msg: '密码必须最少8位',
						duration: 2000
					})
					return
				} else if (testsfz.test(this.sfz) == false) {
					this.show = 0
					this.$refs.error.showTips({
						msg: '请输入正确的身份证号',
						duration: 2000
					})
					return
				}


				let pwd = {
					'past_pwd': this.jiu,
					'pwd': this.xin,
					'upwd': this.queren,
					'sfz': this.sfz,
					'captcha': this.captcha
				}
				this.$fn.request('pwd', 'POST', pwd).then(res => {
					console.log(res.data.code)
					if (res.data.code == 1) {
						this.show = 0
						uni.removeStorageSync('pwd')
						uni.removeStorageSync('token')
						uni.setStorageSync('remember',false)
						this.$refs.success.showTips({
							msg: '修改成功',
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}, 10)
					} else {
						this.show = 0
						this.$refs.error.showTips({
							msg: res.data.msg,
							duration: 2000
						})

					}
				})
			}
		}
	}
</script>

<style lang="less">
	.newInput {
		margin: 0 auto;
		width: 686rpx;

		.newInputItem {
			width: 100%;
			height: 90upx;
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
			height: 90upx;
			display: flex;
			align-items: center;
			position: relative;

			.jizhu {
				display: flex;
				align-items: center;
			}

			.wangji {
				position: absolute;
				width: 160upx;
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
		margin-top: 30upx;
		color: #fff;
	}


	.revisePassword {}

	.item {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		background-color: #F4F4F6;
		padding-top: 134rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		image {
			width: 466rpx;
			height: 285rpx;
		}

		.shiming-text {
			width: 100%;
			height: 48rpx;
			text-align: center;
			font-size: 34rpx;
			line-height: 48rpx;
			// font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #05BC7B;
			line-height: 0rpx;
			// -webkit-background-clip: text;
			// -webkit-text-fill-color: transparent;
			margin: 70rpx 0 36rpx;
		}

		.shiming-card {
			width: 608rpx;
			height: 152rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(174, 174, 174, 0.16);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			opacity: 1;
			box-sizing: border-box;
			padding: 32rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.shiming-p {
				font-size: 28rpx;
				// font-family: .PingFang SC-Regular, PingFang SC;
				font-weight: 500;
				color: #242831;
				text-indent: 78rpx;
			}
		}
	}

	.btn {
		width: 90%;
		height: 90upx;
		background-color: red;
		color: #fff;
		margin: 30upx auto;
		border-radius: 10upx;
	}
</style>