<template>
	<view>
		<view class="tops" style="background-color: #54d27e;height: 400upx;">
			<view class="fanhui dis" >
				<!-- <image src="../../static/common/fanhui.png" mode=""></image> -->
				<view class="title"></view>
			</view>
			<view class="center disc">
				<view class="da">Login</view>
				<view class="xiao">hellow</view>
			</view>
		</view>
		
		<!-- input -->
		<view class="inputBox">
			<view class="inputs">
				<view class="title">phone</view>
				<input type="text" placeholder="please enter phone" v-model="phone">
			</view>
			
			<view class="inputs">
				<view class="title">password</view>
				<input type="password" placeholder="please enter password" v-model="pwd">
			</view>
			
			<view class="yanzheng">
				<view class="left">
					<input type="text" placeholder="请输入验证码">
				</view>	
				<view class="right">
					
				</view>
			</view>		
			
			<view class="xuanxiang" style="margin-top: 110upx;">
				<view class="left ">
					记住密码 <u-switch v-model="value" @change="change" style="margin-left: 20upx;" activeColor="#4bc93e"></u-switch>
				</view>
				<view class="right "  style="">	</view>
			</view>
			
			<!-- 登录 -->
			<view class="in dis" @tap="login">
				登录
			</view>
			
			<!-- 两个选项 -->
			<view class="xuanxiang" style="margin-top: 50upx;">
				<view class="left"  @tap="go()">
					注册
				</view>
				<view class="right " style=""  @tap="forgetPwd">忘记密码?	</view>
			</view>
			
		</view>
		
	</view>
</template>

<script src='./login.js'>
	
</script>

<style lang="less" src='./login.less'>

</style>
