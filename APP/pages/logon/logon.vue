<template>
	<view class="logon" style="background-color: #fff;width: 100%;height: 100vh;">
		<view><airel-floatball  /></view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<view style="width: 100%;height: 50upx;"></view>
		
        <view class="newInput">
        	<view class="newInputItem">
        		<view class="inputName ">手机号</view>
        		<u-input v-model="phone" type="number" placeholder="请输入手机号" border="true" />
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
				<view class="inputName ">身份证</view>
				<u-input v-model="sfz" type="number" placeholder="请输入身份证号" border="true" max-length=''/>
			</view>
			
			<view class="newInputItem">
				<view class="inputName ">用户姓名</view>
				<u-input v-model="username" type="text" placeholder="请输入昵称" border="true" />
			</view>
			
			<view class="newInputItem">
				<view class="inputName ">邀请码</view>
				<u-input v-model="agent_id" type="number" placeholder="请输入邀请码" border="true" />
			</view>
			
			<view class="xinBtn dis" @tap="logon">注册</view>
        	
        </view>


		
		
		<!-- input -->
		<view class="inputBox" v-show="false">
			<view class="inputs">
				<view class="title">电话</view>
				<!-- <input type="number" placeholder="请输入电话" v-model="phone" maxlength="11"> -->
				<u-input v-model="phone" type="number" placeholder="请输入手机号" border="true" />
			</view>

			<view class="inputs">
				<view class="title">密码</view>
				<!-- <input type="password" placeholder="密码最少八位" v-model="pwd" pattern="[0-9]{8,}"> -->
				<u-input v-model="pwd" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
					border="true" />
			</view>

			<view class="inputs">
				<view class="title">确认密码</view>
				<!-- <input type="password" placeholder="确认密码" v-model="upwd" pattern="[0-9]{8,}"> -->
				<u-input v-model="upwd" type="password" password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码"
					border="true" />
			</view>

			<view class="inputs">
				<view class="title">身份证</view>
				<!-- <input type="number" placeholder="请输入身份证号" v-model="sfz"> -->
				<u-input v-model="sfz" type="number" placeholder="请输入身份证号" border="true" />
			</view>

			<view class="inputs">
				<view class="title">用户姓名</view>
				<!-- <input type="text" placeholder="请输入昵称" v-model="username"> -->
				<u-input v-model="username" type="text" placeholder="请输入昵称" border="true" />
			</view>



			<view class="inputs">
				<view class="title">邀请码</view>
				<!-- <input type="number" placeholder="请输入邀请码" v-model="agent_id"> -->
				<u-input v-model="agent_id" type="number" placeholder="请输入邀请码" border="true" />
			</view>



		</view>
		<!-- <view class="in dis" @tap="logon" style="margin: 30upx auto;">
			注册
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				pwd: "",
				agent_id: "",
				upwd: '',
				sfz: '',
				username: "",
				res: {
					name: "type1",
					title: "登录",

				}
			};
		},
		onLoad(){
			let code = uni.getStorageSync('code')
			if(code || code!==null ||code!==undefined){
				this.agent_id=code
			}
		},
		methods: {
			fanhui() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			logon() {
				if (this.phone.length !== 11) {
					
					
					this.$refs.error.showTips({
					msg: '手机号必须是11位',
					duration: 2000
						})
					return
				} else if (this.pwd.length < 8) {
					this.$refs.error.showTips({
					msg: '密码最少8位',
					duration: 2000
						})
					return
				}else if(this.upwd.length < 8){
					this.$refs.error.showTips({
					msg: '手机号必须是11位',
					duration: 2000
						})
					return
				}else if(this.sfz.length !==18){
					this.$refs.error.showTips({
					msg: '身份证必须是18位',
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
					'agent_id': this.agent_id

				}
				this.$fn.request('register', 'POST', data).then(res => {
					console.log(res.data.msg)
					if (res.data.code == 1) {
						this.$refs.success.showTips({
						    msg: '注册成功',
						    duration: 2000
						  })
						setTimeout(()=>{
							uni.navigateTo({
								url: '/pages/login/login'
							})
						},2000)
					} else {
						console.log('wnti')
						this.$refs.error.showTips({
						msg:res.data.msg,
						duration: 2000
							})
						
					}
				})

			}
		}
	}
</script>


<style lang="less" src='./logon.less'>

</style>