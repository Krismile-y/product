<template>
	<view class="safe">
		<view><airel-floatball  /></view>
		
		<view class="newInput">
			<view class="newInputItem">
				<view class="inputName ">手机号</view>
				<u-input v-model="phone" type="number"   placeholder="请输入手机号" border="true"/>
			</view>
			<view class="newInputItem">
				<view class="inputName ">身份证号</view>
				 	<u-input v-model="sfz" type="number"   placeholder="请输入身份证号" border="true"/>
			</view>
			
			<view class="newInputItem">
				<view class="inputName ">新密码</view>
				<u-input v-model="pwd" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
			</view>
			
			<view class="newInputItem">
				<view class="inputName ">验证码</view>
					<u-input v-model="captcha" type="number"   placeholder="请输入验证码" border="true"/>
				<image :src="herf" mode="" style="width: 40%;height: 100%;" @tap='change()'></image>
			</view>
			
			<view class="xinBtn dis" @tap="xiugai()" style="margin-top: 90upx;">提交</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			captcha:'',
			pwd:'',
			phone:"",
			sfz:"",
			herf:"",//验证码
			};
		},
		onShow(){
			this.herf=this.$url+'verify'
		},
		methods:{
			change(){//刷新验证码
			console.log(1)
			
				this.$fn.request('verify','GET',{}).then(res=>{
					let times = 0;
					times = new Date()
					this.herf=this.$url+'verify?time='+times
				})
			},
			go(index){
				
					uni.navigateTo({
						url:'/pages/revisePassword/revisePassword?type='+index
					})
				
			},
			xiugai(){
				if (this.phone.length !== 11) {
					uni.showToast({
						duration: 1000,
						icon: "error",
						title: '手机号必须是11位'
					})
					return
				} else if (this.pwd.length < 8) {
					uni.showToast({
						duration: 1000,
						icon: "error",
						title: '密码最少8位'
					})
					return
				}else if(this.sfz.length !==18){
					uni.showToast({
						duration: 1000,
						icon: "error",
						title: '身份证号必须是18位'
					})
					return
				}
				
				let data={
					'phone':this.phone,
					'pwd':this.pwd,
					'captcha':this.captcha,
					'sfz':this.sfz
				}
				this.$fn.request('forget','POST',data).then(res=>{
					console.log(res.data.msg)
					if(res.data.code == 1){
						uni.removeStorageSync('pwd')
						uni.showToast({
							title:res.data.msg,
							icon:'success',
							duration:1000
						})
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'error',
							duration:1000
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
.safe{
	width: 100%;
	height: 100vh;
	background-color: #fff;
	.item{
		width: 95%;
		height: 100upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1upx solid #ccc;
		margin: 0 auto;
		
		position: relative;
		.left{
			width: 35%;
			height: 100%;
			display: flex;
			align-items: center;
			// border-right: 1upx solid #ccc;
		}
		.right{
			width: 65%;
			height: 100%;
			color: #999;
			input{
				width: 100%;
				height: 100%;
				padding-left: 20upx;
			}
		}
		.yanzheng{
			width: 30%;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}

.in{
		width: 95%;
		height: 130upx;
		margin-top: 30upx;
	// 	background-color: #4bc93e;
	// 	// background-image: linear-gradient(to left bottom, red 60%, green 10%) ;
 //  //       background-image: linear-gradient(to left bottom,'#abe345', '#4bc93e');
 
 //    background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
        background-image: url('../../static/common/btn.png');
        background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-size: 40upx;
		border-radius: 20upx;
	}
	
	.newInput{
		margin: 0 auto;
		width: 686rpx;
		.newInputItem{
			width: 100%;
			height: 90upx;
			border-bottom: 1rpx solid #E5E5E5;
			display: flex;
			align-items: center;
			.inputName{
				font-family: PingFangSC-Regular, PingFang SC;
				width: 140upx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: left;
			}
			input{
				height:100% ;
				width: 546upx;
			}
		}
		.two{
			width: 100%;
			height: 90upx;
			display: flex;
			align-items: center;
			position: relative;
			.jizhu{
				display: flex;
				align-items: center;
			}
			.wangji{
				position: absolute;
				width: 160upx;
				height: 100%;
				right: 0;
				top: 0;
			}
		}
	}
	
	.xinBtn{
		width: 686rpx;
		height: 80rpx;
		background: #02AE71;
		border-radius: 100rpx;
		margin: 0 auto;
		margin-top: 30upx;
		color: #fff;
	}
</style>
