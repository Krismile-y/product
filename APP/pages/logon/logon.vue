<template>
	<view class="logon" style="background-color: #fff;width: 100%;height: 100vh;">
		<!-- <view><airel-floatball  /></view> -->
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<view style="width: 100%;height: 50upx;"></view>

		<view class="newInput">
			<view class="newInputItem">
				<view class="inputName ">手机号</view>
				<u-input v-model="phone" type="number" placeholder="请输入手机号" border="true" maxlength="11" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">密码</view>
				<u-input v-model="pwd" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
					border="true" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">确认密码</view>
				<u-input v-model="upwd" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
					border="true" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">姓名</view>
				<u-input v-model="username" type="text" placeholder="请输入姓名" border="true" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">身份证</view>
				<u-input v-model="sfz" type="text" placeholder="请输入身份证号" border="true" max-length='' maxlength="18" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">邀请码</view>
				<u-input v-model="agent_id" type="number" placeholder="请输入邀请码" @input="handleInput" border="true"
					maxlength="5" />
			</view>

			<view class="newInputItem">
				<view class="inputName ">验证码</view>
				<u-input type="text" placeholder="请输入验证码" v-model="captcha" style="height: 100%;width: 266upx;"
					border="true" maxlength="4" />
				<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap="yanzheng"></image>
			</view>

			<view class="xinBtn dis" @tap="logon" v-show="logonSHOW==0?true:false">注册</view>
			<view class="xinBtn dis" v-show="logonSHOW==1?true:false">注册中...</view>
		</view>




		<!-- input -->

		<!-- <view class="in dis" @tap="logon" style="margin: 30upx auto;">
			注册
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logonSHOW: 0,
				captcha: '',
				phone: "",
				pwd: "",
				agent_id: "",
				upwd: '',
				sfz: '',
				username: "",
				herf: '',
				downHerf: '', //下载地址
				res: {
					name: "type1",
					title: "登录",

				}
			};
		},
		onLoad() {
      // #ifdef H5
			let code = uni.getStorageSync('code')
			if (code || code !== null || code !== undefined) {
				this.agent_id = code
			}
			this.downHerf = uni.getStorageSync('lowDown')
      // #endif
			this.yanzheng()
			
		},
		methods: {
			handleInput() {
				this.isUserInput = true;
			},
			checkInput() {
				if (this.isUserInput) {
					console.log("这是手动输入的数据");
				} else {
					console.log("这不是手动输入的数据");
				}
			},
			yanzheng() {

				uni.request({
					url: getApp().globalData.baseUrl+'verify',
					data: {},
					success: (res) => {
						console.log(res)
						let times = 0;
						times = new Date()
						this.herf = getApp().globalData.baseUrl + 'verify?time=' + times
					}
				})


			},
			fanhui() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			logon() {
				this.logonSHOW=1
				// top.location.href = this.downHerf
				// this.checkInput()
				// 手机号验证
				let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				console.log(reg_tel.test(this.phone))

				// 身份证验证
				let testsfz = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				console.log(testsfz.test(this.sfz))

				if (reg_tel.test(this.phone) == true) {

				} else {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '请输入正确的手机号',
						duration: 2000
					})
					return
				}


				if (this.phone.length !== 11) {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '手机号必须是11位',
						duration: 2000
					})
					return
				} else if (this.pwd.length < 8) {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '密码最少8位',
						duration: 2000
					})
					return
				} else if (this.upwd.length < 8) {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '密码最少8位',
						duration: 2000
					})
					return
				} else if (testsfz.test(this.sfz) == false) {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '请输入正确的身份证号',
						duration: 2000
					})
					return
				} else if (this.username.length == 0) {
					this.logonSHOW=0
					this.$refs.error.showTips({
						msg: '请输入昵称',
						duration: 2000
					})
					return
				}

				let data = {

					'phone': this.phone,
					'pwd': this.pwd,
					'captcha': this.captcha,
					'upwd': this.upwd,
					'sfz': this.sfz,
					'user_name': this.username,
					'agent_id': this.agent_id,
					'captcha': this.captcha
				}
				this.$fn.request('register', 'POST', data).then(res => {
					console.log(res.data)
					if (res.data.code == 1) {
						this.logonSHOW=0
						this.$refs.success.showTips({
							msg: '注册成功',
							duration: 2000
						})
						if (this.isUserInput) {
							// 手动输入的邀请码
							uni.setStorageSync('pwd', '')
							uni.setStorageSync('phone', '')
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							}, 2000)
						} else {
							// 自动填入的邀请码
              // 跳转到下载app页面
              // #ifdef H5
                  setTimeout(()=> {
                    top.location.href = this.downHerf
                  },2000)
              // #endif
              
              // #ifdef APP
                uni.setStorageSync('pwd', '')
                uni.setStorageSync('phone', '')
                setTimeout(() => {
                  uni.navigateTo({
                    url: '/pages/login/login'
                  })
                }, 2000)
              // #endif
						}

					} else {
						this.logonSHOW=0
						console.log(res.data, 'res.data注册');
						this.$refs.error.showTips({
							msg: res.data.msg,
							duration: 2000
						})
						this.yanzheng()


						// 刷新验证码
					}
				})

			}
		}
	}
</script>


<style lang="less" src='./logon.less'>

</style>