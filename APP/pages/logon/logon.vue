<template>
	<view class="logon">
		<view class="tops" style="background-color: #54d27e;height: 400upx;">
			<view class="fanhui dis" >
				<image src="../../static/common/fanhui.png" mode="" @tap="fanhui"></image>
				<!-- <view class="title">注册</view> -->
			</view>
			<view class="center disc">
				<view class="da">Logon</view>
				<view class="xiao">hellow</view>
			</view>
		</view>
		
		<!-- input -->
		<view class="inputBox" >
			<view class="inputs">
				<view class="title">电话</view>
				<input type="text" placeholder="please enter phone" v-model="phone">
			</view>
			
			<view class="inputs">
				<view class="title">密码</view>
				<input type="password" placeholder="密码最少八位" v-model="pwd">
			</view>
			
			<view class="inputs">
				<view class="title">确认密码</view>
				<input type="password" placeholder="确认密码" v-model="upwd">
			</view>
			
			<view class="inputs">
				<view class="title">身份证</view>
				<input type="password" placeholder="" v-model="sfz">
			</view>
			
			<view class="inputs">
				<view class="title">用户昵称</view>
				<input type="password" placeholder="" v-model="username">
			</view>
			
			
			
			<view class="inputs">
				<view class="title">邀请码</view>
				<input type="password" placeholder="please enter password" v-model="agent_id">
			</view>
				
			
			
		</view>
		<view class="in dis" @tap="logon" style="margin: 30upx auto;">
			注册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",
				pwd:"",
				agent_id:"",
				upwd:'',
				sfz:'',
				username:"",
				res:{
					name:"type1",
					title:"登录",
					
				}
			};
		},
		methods:{
			fanhui(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			logon(){
				let data={
					
						'phone':this.phone,
						'pwd':this.pwd,
						'captcha':'12312',
						'upwd':this.upwd,
						'sfz':this.sfz,
						'user_name':this.username,
						'agent_id':"10006"
					
				}
				this.$fn.request('register','POST',data).then(res=>{
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title:'注册成功',
							duration:1000,
							icon:'success'
						})
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				})
				
			}
		}
	}
</script>


<style lang="less" src='./logon.less'>

</style>
