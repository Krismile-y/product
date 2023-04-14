<template>
	<view>
		<view class="tops" style="background-color: #54d27e;">
			<view class="fanhui dis" >
				<!-- <image src="../../static/common/fanhui.png" mode=""></image> -->
				<view class="title">登录</view>
			</view>
			<view class="center disc">
				<view class="da">Login</view>
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
			
			<view class="yanzheng">
				<view class="left">
					<input type="text" placeholder="请输入验证码">
				</view>	
				<view class="right">
					
				</view>
			</view>		
			
			<!-- 两个选项 -->
			<view class="xuanxiang">
				<view class="left">
					
				</view>
				<view class="right " @tap="go()" style="">注册</view>
			</view>
			
			<!-- 登录 -->
			<view class="in dis">
				Login
			</view>
			
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
			go(){
				uni.navigateTo({
					url:'/pages/logon/logon'
				})
			}
		}
	}
</script>

<style lang="less" src='./login.less'>

</style>
