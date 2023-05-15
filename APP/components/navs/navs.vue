<template>
	<view>
		<view class="nav dis">
			<view class="title" >绿色中国</view>
			<view class="icon dis" @tap="show = true" v-show='false'>
				<image
					src="../../static/common/yunduo.png"
					mode=""></image>
			</view>
		</view>

		<view>
			<u-popup :show="show" @close="close" @open="open" mode='right'>
				<view class="info">
					<view class="title " style="margin-top: 70upx;">
						绿色中国
					</view>
					<view class="item" v-for="(item,index) in list" :key="index" @tap="go(index)">
						<image :src="item.src" mode=""></image>
						<view class="titles">{{item.title}}</view>
					</view>
					
					<!-- 最底部 -->
					<view class="bottom">
						 <view class="dis">《软件许可及服务协议》</view>
						 <view class="dis">《隐私保护指引》</view>
						   <view class="dis">
							   <view class="btn dis" @tap="out">
								   安全退出							   
							   </view>
						   </view>
					</view>
					
				</view>
			</u-popup>
			<!-- <u-button @click="show = true">打开</u-button> -->
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				list: [
					{
						title: "个人信息",
						src: "../../static/common/zhanghuanquan.png"
					},
			 	{
						title: "安全保障",
						src: "../../static/common/anquanbaozhang.png"
					},
					{
						title: "我的客服",
						src: "../../static/common/kefu.png"
					},
					{
						title: "反馈与帮助",
						src: "../../static/common/bangzhu.png"
					},
					{
						title: "检查更新",
						src: "../../static/common/gengxin.png"
					},
			  {
						title: "关于我们",
						src: "../../static/common/guanyuwomen.png"
					},
				]
			}
		},
		methods: {
			out(){
				// plus.runtime.quit();  安卓和苹果两种情况，目前只有一种
				
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			go(index){
				if(index==0){
					uni.navigateTo({
						url:"/pages/safe/safe"
					})
				}else if(index==1){
					uni.navigateTo({
						url:"/pages/ensure/ensure"
					})
				}else if(index==3){
					uni.navigateTo({
						url:"/pages/help/help"
					})
				}else if(index==5){
					uni.navigateTo({
						url:"/pages/about/about"
					})
				}
				
			}
		}
	}
</script>

<style lang="less">
	.nav {
		background-color: #ffffff;
		width: 100%;
		height: 90upx;
		position: relative;

		.icon {
			height: 100%;
			width: 120upx;
			position: absolute;
			right: 0;
			top: 0;

			image {
				width: 80upx;
				height: 80upx;
			}
		}
	}

	.info {
		height: 100vh;
		width: 320upx;
		position: relative;
	.bottom{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 320upx;
		height: 200upx;
		font-size: 28upx;
		color: #cccccc;
		view{
			margin-bottom: 10upx;
		}
		.btn{
			width: 140upx;
			height: 70upx;
			color: #fff;
			background-color: greenyellow;
			border-radius: 15upx;
			margin-top: 10upx;
		}
	}
	.title {
			width: 100%;
			height: 90upx;
			font-size: 36upx;
			border-bottom: 1upx solid #ccc;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.item {
			width: 100%;
			height: 110upx;
			display: flex;
			align-items: center;
			image {
				width: 45upx;
				height: 45upx;
				margin-left: 50upx;
				margin-right: 20upx;
			}
			.titles{
				padding-top: 0upx;
			}
		}
	}
</style>
