
<script>
	import Vue from "vue";
	import uniPopup from "./components/down/updatepage/uni-popup/uni-popup.vue";
	import uniPopupMessage from "./components/down/updatepage/uni-popup/uni-popup-message.vue";
	import uniPopupDialog from "./components/down/updatepage/uni-popup/uni-popup-dialog.vue";
	export default {
		data: function() {
			return {
				version: "1.5.4" //版本号
			}
		},
		onShow() {

			if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined || !uni.getStorageSync(
					'token')) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		onLaunch: function() {
			uni.setStorageSync('gengxin',true)//app更新首页显示状态
			// 客服接口
			// let kefu = {
			// 	"sid": "1"
			// }
			// this.$fn.request('customer', "GET", kefu, ).then(res => {
			// 	// console.log(res.data.data[0].url,'客服')
			// 	uni.setStorageSync('kefu', res.data.data[0].url)
			// 	this.$store.commit('kefu', res.data.data[0].url)
			// })

			// 获取设备信息
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					// console.log(res.safeArea)
					uni.setStorageSync('x', res.safeArea.width - 70)
					uni.setStorageSync('y', res.safeArea.bottom / 2 - 25)
					this.$store.commit('x', uni.getStorageSync('x'))
					this.$store.commit('y', uni.getStorageSync('y'))
					// console.log(this.$store.state.y,'yy')
				}
			})

			if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined || !uni.getStorageSync(
					'token')) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
			// #ifdef APP
			plus.runtime.getProperty(plus.runtime.appid, (appInfo) => {
				// appInfo为当前应用程序的所有信息
				// this.globalData.version = appInfo.version
				// this.globalData.versionCode = appInfo.versionCode
				console.log(JSON.stringify(appInfo));
				// 获取版本名称
				console.log(appInfo.version, '版本名称e');
				this.version = appInfo.version
				// 获取版本号
				console.log(appInfo.versionCode);
				// 获取当前应用id
				console.log(appInfo.appid);
			});

			uni.getSystemInfo({
				success: (res) => {
					console.log(res.platform);
					//检测当前平台，如果是安卓则启动安卓更新  
					// if (res.platform == "android") {
					// this.AndroidCheckUpdate();
					// }
				}
			})
			// #endif
			
			
		},
		methods: {
			AndroidCheckUpdate: function() {
				var _this = this;
				uni.request({
					//version.txt中内容为版本号，如果版本号大于客户端的版本号，客户端就自动更新
					url: this.$url + 'v',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data.data.v)
						console.log(res.data.data.apk)
						if (res.data.data.v !== this.version) {
							uni.showToast({
								title: '有新的版本发布，程序已启动自动更新。新版本下载完成后将自动弹出安装程序!',
								mask: false,
								duration: 5000,
								icon: "none"
							});
							var dtask = plus.downloader.createDownload(
								res.data.data.apk, {},
								function(d, status) {
									//下载完成 3 
									if (status == 200) {
										plus.runtime.install(plus.io.convertLocalFileSystemURL(d
											.filename), {}, {}, function(error) {
											uni.showToast({
												title: '安装失败',
												mask: false,
												duration: 1500,
												icon: 'error'
											});
										})
									} else {
										uni.showToast({
											title: '更新失败',
											mask: false,
											duration: 1500
										});
									}
								});
							try {
								dtask.start(); // 开启下载的任务
								var prg = 0;
								var showLoading = plus.nativeUI.showWaiting(
									"正在下载"); //创建一个showWaiting对象 
								dtask.addEventListener('statechanged', function(
									task,
									status
								) {
									// 给下载任务设置一个监听 并根据状态  做操作
									switch (task.state) {
										case 1:
											showLoading.setTitle("正在下载");
											break;
										case 2:
											showLoading.setTitle("已连接到服务器");
											break;
										case 3:
											prg = parseInt(
												(parseFloat(task.downloadedSize) /
													parseFloat(task.totalSize)) *
												100
											);
											showLoading.setTitle("  正在下载" + prg + "%  ");
											break;
										case 4:
											plus.nativeUI.closeWaiting();
											//下载完成
											break;
									}
								});
							} catch (err) {
								plus.nativeUI.closeWaiting();
								uni.showToast({
									title: '更新失败-03',
									mask: false,
									duration: 1500
								});
							}


						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import "uview-ui/index.scss";

	// 设置整个项目的背景色
	page {
		// background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		// font-size: 14px;
		// color: #333;
		// padding: 10px;
	}

	.dis {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.disc {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.content {
		padding-bottom: 140upx;
	}

	.fix {
		position: fixed;
		left: 0;
		bottom: 0;
	}

	// 顶部组件
	.tops {
		width: 100%;
		height: 400upx;
		border-bottom-left-radius: 5.4em 5.4em;
		background-color: #4bc93e;
		background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));

		.fanhui {
			width: 100%;
			height: 110upx;
			position: relative;

			image {
				width: 50upx;
				height: 50upx;
				position: absolute;
				top: 70upx;
				left: 50upx;
			}

			.title {
				color: #fff;
			}
		}

		.center {
			width: 100%;
			height: 290upx;
			color: #fff;

			.da {
				font-size: 62upx;
			}

			.xiao {
				font-size: 32upx;
				margin-top: 50upx;
			}
		}
	}


	.in {
		width: 90%;
		height: 130upx;
		margin-top: 30upx;
		// background-color: #4bc93e;
		// background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
		background-image: url('./static/common/btn.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-size: 40upx;
		border-radius: 20upx;
		margin: 0 auto;
		font-size: 46upx;
		font-weight: 500;
	}

	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 300upx;
	}
</style>