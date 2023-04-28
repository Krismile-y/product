<template>
	<view class="invite disc">
		<view class="id dis">我的推荐ID:{{info.id}}</view>
		<image :src="code"></image>
		<view class="btn dis" @tap="fenxiang">立即分享</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{},
				code:""
			};
		},
		onLoad() {
			this.info=uni.getStorageSync('user_info')
			this.$fn.request('qrcode',"GET",{}).then(res=>{
				console.log(res.data.data.qrcode,'用户二维码')
				this.code=res.data.data.qrcode
			})
		},
		methods:{
			
			fenxiang(){
				// #ifdef APP-PLUS 
				  uni.share({
				  	provider:'weixin',
					type:0,
					
				  })
				//#endif
			}
		}
	}
</script>

<style lang="less">
.invite{
	width: 100%;
	height:100vh;
	// // background-image:url('https://pic.616pic.com/bg_w1180/00/20/57/zkoqzSOdaL.jpg') ;
	// background-repeat: no-repeat;
	// background-size: 100% 100%;
	.id{
		width: 50%;
		// color: #fff;
		font-size: 36upx;
	}
	image{
		width: 50%;
		height:360upx;
		margin-top: 30upx;
	}
	.btn{
		color: #fff;
		width: 80%;
		height: 90upx;
		margin-top: 30upx;
		background-color: #4bc93e;
		background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
		border-radius: 30upx;
	}
}
</style>
