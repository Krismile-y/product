<template>
	<view class="xinhezi">
		
		<view class="tops" style="background-color: #54d27e;height: 400upx;" v-show="false">
			<view class="fanhui dis" >
				<!-- <image src="../../static/common/fanhui.png" mode=""></image> -->
				<view class="title"></view>
			</view>
			<view class="center disc">
				<image src="../../static/common/logo.png" mode="" style="width: 220upx;height: 220upx;border-radius: 50%;"></image>
				<!-- <view class="da">Login</view>
				<view class="xiao">hellow</view> -->
			</view>
		</view>
		
		<!-- 新的 -->
		<view class="newTop disc">
			<image src="../../static/common/logo.png" mode="" style="border-radius: 50%;"></image>
			<view class="font">欢迎来到绿色中国</view>
		</view>
		
		<view class="newInput">
			<view class="newInputItem">
				<view class="inputName ">手机号</view>
				<u-input v-model="phone" type="number"   placeholder="请输入手机号" border="true"/>
			</view>
			<view class="newInputItem">
				<view class="inputName ">密码</view>
				<u-input v-model="pwd" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
			</view>
			<view class="newInputItem">
				<view class="inputName ">验证码</view>
					<input type="text" placeholder="请输入验证码" v-model="captcha" style="height: 100%;width: 270upx;">
				<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap="yanzheng"></image>
			</view>
			<view class="two">
				<view class=" jizhu">
					 <u-switch v-model="value" @change="change" style="margin-right: 20upx;width: 100upx;height: 40upx;" activeColor="#4bc93e"></u-switch>记住密码
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
		
		<!-- input -->
		<view class="inputBox" v-show="false">
			<view class="inputs">
				<view class="title">手机号</view>
				
				<!-- <input  placeholder="请输入手机号" v-model="phone" maxlength="11" type="number"> -->
				<u-input v-model="phone" type="number"   placeholder="请输入手机号" border="true"/>
			</view>
			
			<view class="inputs">
				<view class="title">密码</view>
				<!-- <input type="password" placeholder="请输入密码" v-model="pwd"> -->
				<u-input v-model="pwd" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
			</view>
			
			<view class="yanzheng">
				<view class="left">
					<input type="text" placeholder="请输入验证码" v-model="captcha" style="padding-left: 30upx;">
				</view>	
				<image :src="herf" mode="" style="width: 50%;height: 100%;" @tap="yanzheng"></image>
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
