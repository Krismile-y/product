export default {
		data() {
			return {
				out:0,
				res:{
					name:"type1",
					title:"登录",					
				},
				phone:'',//账号
				pwd:"",//密码
				captcha:'',//验证码
				value:false,//记住密码
			};
		},
		onBackPress(event) {
			if(this.out == 0){
				this.out++
				uni.showToast({
					duration:1000,
					title:'再按一次退出程序',
					icon:"none"
				})
			}else if(this.out>=1){
				if (plus.os.name.toLowerCase() === 'android') {
					 plus.runtime.quit();
				}
				uni.removeStorageSync('token')
			}
			
		    if (event.from === 'backbutton') {
		          this.overlayShow = true;
				
		            return true;
		        }else{		
					// return false
				}
		        
		  },
		onLoad() {
			
			this.$fn.request('verify',"GET",{}).then(res=>{
				// console.log(res.data,'验证码')
			})
		},
		onShow(){
			this.value=uni.getStorageSync('remember')
			if(uni.getStorageSync('pwd') && uni.getStorageSync('phone')){
				this.pwd=uni.getStorageSync('pwd')
				// console.log(this.pwd)
				
			}
			
			if(uni.getStorageSync('remember') == true){
				this.value==true
			}else if(uni.getStorageSync('remember') == false){
				this.value==false
			}
		},
		methods:{
			// 记住密码
			change(e) {
				console.log('change', e);
				uni.setStorageSync('remember',e)
				this.value=e
				if(e == true){
					uni.setStorageSync('pwd',this.pwd)
					uni.setStorageSync('phome',this.phone)
				}else{
					uni.removeStorageSync('pwd');
					uni.removeStorageSync('phone');
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
				// let data={
				// 	'phone':'18060989007',
				// 	'pwd':'12345678',
				// 	'captcha':'12312'
				// }	
				let data={
					'phone':this.phone,
					'pwd':this.pwd,
					'captcha':'12312'
				}
				this.$fn.request('login','POST',data).then(res=>{
					if(res.data.code == 1){					
						uni.setStorageSync('token',res.data.data.token)
						uni.setStorageSync('name','index')
						if(this.value == true){
							console.log(this.pwd)
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
						console.log(res.data.msg)
						uni.showToast({
							duration:1000,
							icon:"error",
							title:res.data.msg,
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