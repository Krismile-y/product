<template>
	<view>
		<!-- <view class="box">
			
		</view> -->
		<airel-floatball />
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<image :src="herf" mode="" style="height: 960upx;width: 100%;"></image>

		<!-- #ifdef H5 -->
		<view class="bottom dis" style="bottom: 0;">
			<view class="in dis">
				<a :href="link" style="color: #fff;">
					点击下载
				</a>
			</view>
			<!-- #endif -->

			<!-- #ifdef APP -->
			<view class="bottom dis" style="bottom: 0;">
				<view class="in dis" @tap='down'>

					点击下载

				</view>
				<!-- #endif -->

			</view>

		</view>
</template>

<script>
	export default {
		data() {
			return {
				herf: "",
				name: "",
				link: ""
			};
		},

		onLoad() {
			this.$fn.request('thigh_image', 'GET', {}).then(res => {
				this.name = res.data.data.name
				this.herf = res.data.data.thigh
				// 时间戳
				let times = 0;
				times = new Date()
				this.link = this.$url + 'thigh_down?name=' + this.name + '&time=' + times
				console.log(this.link, '下载链接')
				console.log(res.data.code)
			})
			// console.log(this.$url+'thigh_down?name='+'10000.png')
		},
		methods: {
			down() {
				uni.downloadFile({
					url: this.link,
					success: res => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: () => {

									this.$refs.success.showTips({
										msg: '保存成功至相册',
										duration: 2000
									})
								},
								fail: () => {

									this.$refs.error.showTips({
										msg: '保存失败',
										duration: 2000
									})
								}
							})
						} else {

							this.$refs.error.showTips({
								msg: '下载失败',
								duration: 2000
							})
						}
					},
					fail: () => {
						this.$refs.error.showTips({
							msg: '下载失败',
							duration: 2000
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	image {
		width: 100%;
	}

	.box {
		width: 100%;
		height: 1020upx;
		background-image: url('../../static/common/tanpiao.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>