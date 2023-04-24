export default {
		data() {
			return {
				res:{
					name:"type1",
					title:"登录",					
				},
				phone:'',//账号
				pwd:"",//密码
				value:false,//记住密码
			};
		},
		onLoad() {
			
		},
		onShow(){
			if(uni.getStorageSync('pwd') && uni.getStorageSync('phone')){
				this.pwd=uni.getStorageSync('pwd')
			}
		},
		methods:{
			// 记住密码
			change(e) {
				console.log('change', e);
				this.value=e
				if(e == true){
					uni.setStorageSync('pwd',this.pwd)
					uni.setStorageSync('phome',this.phone)
				}
			},
			go(){//跳转到注册
				uni.navigateTo({
					url:'/pages/logon/logon'
				})
			},
			forgetPwd(){//跳转到忘记密码
				uni.navigateTo({
					url:'/pages/forgetPwd/forgetPwd'
				})
			},
			login(){
				let data={
					'phone':'18060989007',
					'pwd':'12345678',
					'captcha':'12312'
				}	
				this.$fn.request('login','POST',data).then(res=>{
					if(res.data.code == 1){					
						uni.setStorageSync('token',res.data.data.token)
						uni.setStorageSync('name','index')
						if(this.value == true){
							uni.setStorageSync('pwd',this.pwd)
							uni.setStorageSync('phone',this.phone)
						}
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/index/index'
							})
						},1000)
						
						// 用户信息
						let info={
							"is_whole":"1"
						}
						this.$fn.request('user','GET',info).then(res=>{
							console.log(res.data.data,'用户信息')
							uni.setStorageSync('user_info',res.data.data)
						})
					}else if(res.data.code !==1){
						uni.showToast({
							duration:1000,
							title:'账号或者密码错误',
							success() {
								this.pwd=''
								this.phone=''
							}
						})
					}
				})
			},
		}
	}