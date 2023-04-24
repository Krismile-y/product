<template>
	<view>
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
		<view class="inputBox">
			<view class="inputs">
				<view class="title">Email</view>
				<input type="text" placeholder="please enter email">
			</view>
			
			<view class="inputs">
				<view class="title">Password</view>
				<input type="password" placeholder="please enter password">
			</view>
			
			<view class="inputs">
				<view class="title">确认密码</view>
				<input type="password" placeholder="please enter password">
			</view>
			
			<view class="inputs">
				<view class="title">邀请码</view>
				<input type="password" placeholder="please enter password">
			</view>
			
			<view class="yanzheng" v-show="false">
				<view class="left">
					<input type="text" placeholder="请输入验证码">
				</view>	
				<view class="right">
					
				</view>
			</view>		
			
			<!-- 两个选项 -->
			<view class="xuanxiang" v-show="false">
				<view class="left">
					
				</view>
				<view class="right ">forget password?</view>
			</view>
			
			<!-- 登录 -->
			<view class="in dis" @tap="logon">
				注册
			</view>
			
			<!-- 下载 -->
			<!-- <view class="down dis">
				APP下载
			</view> -->
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
					
						'phone':'19584332559',
						'pwd':'12345678',
						'captcha':'12312',
						'captcha':'12312',
						'upwd':'12345678',
						'sfz':'513902199901052546',
						'user_name':'xx',
						'agent_id':"10006"
					
				}
				uni.request({
					url:"http://api.tzhreefvg.top/api/register",
					method:'POST',
					data:data,
					Header:{
								'Content-Type':'multipart/form-data'
							},
					success: (res) => {
						console.log(res)
					},
					err: (res) => {
						console.log(res)
					},
				})
			}
		}
	}
</script>


<style lang="less" src='./logon.less'>

</style>
