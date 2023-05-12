<template>
	<view>

		<!-- <view class="zhengce">
			<image src="../../static/common/ocean.jpg"></image>
		  <view class="zhengce-txt">
		    政策解读
		  </view>
		</view> -->

		<view class="xinwen" v-for="(item,index) in listData" :key="index" @tap="go(index)">
			<view class="left">
				{{index+1}}.{{item.title}}
			</view>
			<view class="right dis" v-show="false">
				<!-- <image src="../../static/my/jilu.png" mode=""></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						title: '​国家林业和草原局关于印发《国家储备林建设管理办法（试行）》的通知'
					},

				]
			};
		},
		onLoad() {
			this.$fn.request('introduction','GET',{'tid':"25"}).then(res=>{
				console.log(res.data.data)
			})
		},
		methods: {
			go(index) {
				uni.navigateTo({
					url: `/pages/newsListDetails/newsListDetails?index=${index}`
				})
			}
		}
	}
</script>

<style lang="less">
	.zhuanti {
		color: red;
		padding-top: 10upx;
		text-align: center;
	}

	.xinwen {
		width: 100%;
		// height: 200upx;
		display: flex;

		.left {
			width: 95%;
			height: 100%;
			// padding: 10upx 0 10upx 20upx;
			box-sizing: border-box;
			text-indent: 2em;
			font-size: 36upx;
			// text-align: justify;
			margin: 30upx auto;
		}

		.right {
			width: 30%;
			height: 100%;

			image {
				width: 160upx;
				height: 140upx;
			}
		}
	}

	.zhengce {
		width: 98%;
		margin: 0 auto;
		height: 200upx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
			border-radius: 20upx;
			position: absolute;
			top: 0%;
			left: 0%;
			z-index: 0;
		}

		.zhengce-txt {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0%;
			height: 0%;
			z-index: 10;
			text-align: center;
			line-height: 200upx;
			font-size: 44px;
			color: #fff;
			letter-spacing: 25px;
			text-indent: 25px;
			font-weight: 700;
		}
	}
</style>