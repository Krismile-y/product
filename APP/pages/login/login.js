export default {
	data() {
		return {
			out: 0,
			res: {
				name: "type1",
				title: "登录",
			},
			phone: '', //账号
			pwd: "", //密码
			captcha: '', //验证码
			value: false, //记住密码
			herf: "", //验证码
		};
	},
	onBackPress(event) {
		if (this.out == 0) {
			this.out++
			
			this.$refs.success.showTips({
			    msg: '再按一次退出程序',
			    duration: 2000
			  })
		} else if (this.out >= 1) {
			if (plus.os.name.toLowerCase() === 'android') {
				plus.runtime.quit();
			}
			uni.removeStorageSync('token')
		}

		if (event.from === 'backbutton') {
			this.overlayShow = true;

			return true;
		} else {
			// return false
		}

	},
	onLoad() {
        
		// this.$fn.request('verify', "GET", {}).then(res => {
		// 	// console.log(res,'验证码')
		// })
	},
	onShow() {
		// this.herf = this.$url + 'verify'
        this.yanzheng()  
		this.value = uni.getStorageSync('remember')//记住密码的本地状态
		if (uni.getStorageSync('pwd') && uni.getStorageSync('phone')) {
			this.pwd = uni.getStorageSync('pwd')
			this.phone=uni.getStorageSync('phone')
			// console.log(this.pwd)

		}

		if (uni.getStorageSync('remember') == true) {
			this.value == true
		} else if (uni.getStorageSync('remember') == false) {
			this.value == false
		}
	},
	methods: {
		
		yanzheng() {
			
			uni.request({
				url:this.$url+'verify',
				data:{},
				success: (res) => {
					console.log(res)
					let times = 0;
					times = new Date()
					this.herf = this.$url + 'verify?time=' + times
				}
			})
			
			
		},
        // 记住密码
		change(e) {
			console.log('change', e);
			uni.setStorageSync('remember', e)
			this.value = e
			if (e == true) {
				uni.setStorageSync('pwd', this.pwd)
				uni.setStorageSync('phome', this.phone)
			} else {
				uni.removeStorageSync('pwd');
				uni.removeStorageSync('phone');
			}
		},
		go() { //跳转到注册
			uni.navigateTo({
				url: '/pages/logon/logon'
			})
		},
		forgetPwd() { //跳转到忘记密码
			uni.navigateTo({
				url: '/pages/forgetPwd/forgetPwd'
			})
		},
		login() {
			// let data={
			// 	'phone':'18060989007',
			// 	'pwd':'12345678',
			// 	'captcha':'12312'
			// }
			
			let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
			console.log(this.phone.length)
			if (this.phone.length !== 11) {
				
				
				this.$refs.error.showTips({
				msg: '手机号必须是11位',
				duration: 2000
					})
				return
			}else if(reg_tel.test(this.phone) == false){
				this.$refs.error.showTips({
				msg: '请输入正确的手机号',
				duration: 2000
					})
				return
			}
			 
			 else if (this.pwd.length < 8) {
				
				this.$refs.error.showTips({
				msg: '密码最少8位',
				duration: 2000
					})
				return
			}

			let data = {
				'phone': this.phone,
				'pwd': this.pwd,
				'captcha': this.captcha
			}
			this.$fn.request('login', 'POST', data).then(res => {
				if (res.data.code == 1) {
					uni.setStorageSync('gengxin',true)//app首页更新一次的状态
					uni.setStorageSync('token', res.data.data.token)
					uni.setStorageSync('name', 'index')
					if (this.value == true) {
						console.log(this.pwd)
						uni.setStorageSync('pwd', this.pwd)
						uni.setStorageSync('phone', this.phone)
					}
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/index/index'
						})
					}, 1000)

					// 用户信息
					let info = {
						"is_whole": "1"
					}
					this.$fn.request('user', 'GET', info).then(res => {
						console.log(res.data.data, '用户信息')
						uni.setStorageSync('user_info', res.data.data)
					})
				} else if (res.data.code !== 1) {
					console.log(res.data.msg)
					
					this.$refs.error.showTips({
					msg: res.data.msg,
					duration: 2000
						})
					// this.pwd = ''
					// this.phone = ''
					this.captcha=''
					this.yanzheng()
					
				}
			})
		},
	}
}