<template>
	<view class="xinhezi">
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<!-- <view><airel-floatball  /></view> -->
		
		<!-- 新的 -->
		<view class="newTop disc">
			<image src="../../static/login/logo.jpg" mode="" style="border-radius: 50%;"></image>
			<view class="font">绿色中国</view>
		</view>
		
		<view class="newInput">
			<view class="newInputItem">
				<view class="inputName ">手机号</view>
				<u-input v-model="phone" type="number"   placeholder="请输入手机号" border="true" maxlength="11"/>
			</view>
			<view class="newInputItem">
				<view class="inputName ">密码</view>
				<u-input v-model="pwd" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
			</view>
			<view class="newInputItem">
				<view class="inputName ">验证码</view>
					<u-input type="text" placeholder="请输入验证码"  maxlength="4" v-model="captcha" style="height: 100%;width: 270upx;padding-left: 20upx;"  border="true"/>
				<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap="yanzheng"></image>
			</view>
			<view class="two">
				<view class=" jizhu">
					 <u-switch v-model="value" @change="change" style="margin-right: 20upx;width: 100upx;height: 40upx;" activeColor="#02AE71"></u-switch>记住密码
				</view>
				<view class="wangji dis" @tap="go()">
					去注册
				</view>
			</view>
		</view>
		
		<view class="xinBtn dis" @tap="login">登录</view>
		
		<view class="last">
			<view class="wangjimima dis" @tap="forgetPwd">忘记密码?找回密码</view>
		</view>
		
		<!-- 新的 -->
		
	
		
	</view>
</template>

<script src='./login.js'>
	
</script>

<style lang="less" src='./login.less'>

</style>
