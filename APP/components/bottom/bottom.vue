<template>
	<view>
		<view class="bottom fix">
			<view class="item disc" @tap="go(0)">
				<image src="../../static/common/shouye.png" mode=""></image>
				首页
			</view>
			<view class="item disc">
				<image src="../../static/common/jinrong.png" mode=""></image>
				社区
			</view>

			<view class="item disc" @tap="go(2)">

				<view class="disc yuan">
					<!-- <image src="../../static/common/renminbi.png" mode=""></image>
					投资 -->
					<!-- <view class="y disc">
						<image src="../../static/common/renminbi.png" mode="" style="height: 40upx;"></image>
						投资
					</view> -->
					<view class="y">
						<image src="../../static/common/btn.jpg" mode=""></image>
					</view>
				</view>
			</view>
			<view class="item disc">
				<image src="../../static/common/zichan.png" mode="" @tap="go(3)"></image>
				商城
			</view>
			<view class="item disc" @tap="go(4)">
				<image src="../../static/common/wode.png" mode=""></image>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "bottom",
		data() {
			return {

			};
		},
		methods: {
			go(index) {
				if (index == 0) {
					uni.navigateTo({
						url: '/pages/index/index'
					})
				} else if (index == 4) {
					uni.navigateTo({
						url: '/pages/my/my'
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: '/pages/invest/invest'
					})
				} else if (index == 3) {
					uni.navigateTo({
						url: '/pages/shop/shop'
					})
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.bottom {
		width: 100%;
		height: 90upx;
		display: flex;
		background-color: #fff;
		padding: 10upx 0;

		.item {
			position: relative;
			z-index: 999999;
			flex: 1;
			height: 100%;
			font-size: 28upx;

			.yuan {
				width: 80%;
				height: 250px;
				border-radius: 50%;
				// background-color: greenyellow;

			}

			image {
				width: 30%;
				height: 50%;
				margin-bottom: 5upx;
			}

		}

		.y {
			width: 170upx;
			height: 170upx;
			border-radius: 50%;
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 0upx;
			z-index: 1;
           
			image {
				width: 170upx;
				height: 170upx;
				border-radius: 50%;
			}
		}
	}
</style>
