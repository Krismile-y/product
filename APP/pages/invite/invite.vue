<template>
	<view class="invite">
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <view class="invite-title">
      <view class="">
        共同助力
      </view>
      <view class="" style="margin-top: 40rpx;">
        国家绿色发展
      </view>
    </view>
		<view class="newBox disc">
			<image :src="code"></image>
			<view class="dis tuijianma">我的推荐码</view>
			<view class="dis id" style="font-size: 56upx;">{{info.id}}</view>
		</view>

		<view class="two" style="margin-bottom: 80upx;">
			<!-- #ifdef APP-->
			<view class="itemONE dis" @tap="fenxiang">保存图片</view>
			<!-- #endif -->
			<!-- #ifdef H5-->
			<view class="itemONE dis">
				<a :href="code" style="color: #000;"> 保存图片</a>
			</view>
			<!-- #endif -->
			<view class="itemTWO dis" @tap="xin">复制二维码链接</view>
		</view>


	</view>
</template>

<script>
	import backgroundPage from "../../components/background-page/background.vue";
	export default {
		components: {
			backgroundPage
		},
		data() {
			return {
				info: {},
				code: "", //二维码图片
				title: '',
				qr_url: "",
				x:'',
				y:""
			};
		},
		onLoad() {
            // 客服位置
			this.x=uni.getStorageSync('x')
            this.y=uni.getStorageSync('y') 
			
			this.info = uni.getStorageSync('user_info')
			this.$fn.request('qrcode', "GET", {}).then(res => {
				console.log(res.data.data.qr_url, '复制二维码链接地址')
				this.qr_url = res.data.data.qr_url
				console.log(res.data.data.qrcode, '用户二维码')
				this.code = res.data.data.qrcode
				this.title = `<view class="wdtjm">我的推荐码:</view><br />
            <view class="numberCode">${this.info.id}</view>`
			})

			console.log(this.info.id)
		},
		methods: {
			xin() {
				this.info = uni.getStorageSync('user_info')
				console.log(this.info.id)
				let xx = this.info.id
        const that = this
				uni.setStorageSync('code', xx)
        // 隐藏默认提示框
				uni.setClipboardData({
					data: this.qr_url,
					success: function() {
						uni.hideToast()
						that.$refs.success.showTips({
						    msg: '复制成功',
						    duration: 2000
						  })
					}
				})
			},
			fenxiang() {

        const that = this
				// #ifdef APP-PLUS 
				uni.downloadFile({
					url: this.code,
					success: res => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: () => {
									
									that.$refs.success.showTips({
									    msg: '保存相册成功',
									    duration: 2000
									  })
								},
								fail: () => {
									that.$refs.error.showTips({
									msg: '保存相册失败',
									duration: 2000
										})
								}
							})
						} else {
							
							that.$refs.error.showTips({
							msg: '下载失败',
							duration: 2000
								})
						}
					},
					fail: () => {
						that.$refs.error.showTips({
						msg: '下载失败',
						duration: 2000
							})
					}
				})
				//#endif
			}
		}
	}
</script>

<style lang="less">
  @import url("../../static/SIMKAI.css");
	.two {
		width: 622rpx;
		height: 100rpx;
		margin-top: 60upx;
		display: flex;
		justify-content: space-around;

		.itemONE {
			width: 220rpx;
			height: 100rpx;
			background: #E2E2E8;
			border-radius: 100rpx;
		}

		.itemTWO {
			width: 378rpx;
			height: 100rpx;
			background: linear-gradient(270deg, #05D7AA 0%, #04D381 100%);
			border-radius: 100rpx;
		}
	}

	.newBox {
		width: 622rpx;
		height: 800rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 16rpx 0rpx rgba(208, 241, 230, 0.2);
		border-radius: 32rpx;

		image {
			width: 400rpx;
			height: 400rpx;
			background: #D8D8D8;
			border-radius: 24rpx;
		}

		.tuijianma {
			width: 100%;
			height: 83rpx;

			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #A1A1A1;
			margin-top: 30upx;
		}

		.id {
			width: 100%;
			height: 80rpx;

			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #333333;
		}
	}

	.invite {
		width: 100%;
    height: 100vh;
		background-image: url('../../static/common/fenxiangBg.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    .invite-title {
      margin: 140rpx 0 80rpx;
      width: 100%;
      // height: 56rpx;
      line-height: 66rpx;
      font-size: 66rpx;
      font-family: KaiTi;
      font-weight: 400;
      text-align: center;
      color: #04D381;
    }
		.id {
			width: 50%;
			// color: #fff;
			font-size: 36upx;
		}

		/deep/ .help-title {
			top: 5%;
			line-height: 80upx;
			text-align: center;

			.wdtjm {
				font-size: 16px;
				font-weight: 500;
			}
		}

		.invite-content {
			width: 100%;
			height: 100%;

			.code-img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 50%;
					height: 360upx;
					margin: 120upx auto 40upx;
				}
			}

		}

		.btn {
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