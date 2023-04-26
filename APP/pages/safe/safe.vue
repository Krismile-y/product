<template>
	<view class="safe">
		<view class="item">
			<image src="../../static/common/phone.png" mode=""></image>
			手机号
			<view class="right dis">
				{{info.phone}}
			</view>
		</view>
		
		<view class="item" style="margin-top: 30upx;"  @tap="go(1)">
			<image src="../../static/common/shimingzhi.png" mode=""></image>
			实名制
			<view class="right dis">
				未实名
			</view>
		</view>
		<view class="item" style="margin-top: 0upx;" @tap="go(2)">
			<image src="../../static/common/xiugai.png" mode=""></image>
			修改登录密码
			
			<view class="right dis">
				>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  info:{},
			  shiming:""
			};
		},
		onLoad() {
			this.info=uni.getStorageSync('user_info')
			if(this.info.is_real_name==0){
				this.shiming='未实名'
			}else{
				this.shiming='已实名'
			} 
		},
		methods:{
			go(index){
				
					uni.navigateTo({
						url:'/pages/revisePassword/revisePassword?type='+index
					})
				
			}
		}
	}
</script>

<style lang="less">
.safe{
	width: 100%;
	height: 100vh;
	background-color: #f1f1f1;
	.item{
		width: 100%;
		height: 90upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		position: relative;
		.right{
			position: absolute;
			top: 0;
			right: 30upx;
			width: 150upx;
			height: 100%;
			color: #999;
		}
		image{
			width: 40upx;
			height: 40upx;
			padding-left: 30upx;
			margin-right: 15upx;
		}
	}
}
</style>
