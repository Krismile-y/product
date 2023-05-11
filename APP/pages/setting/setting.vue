<template>
	<view>

		<!-- <airel-floatball  /> -->
		
		
		<view class="box">
			<!-- <view class="title">
				<view class="shu"></view>
				安全与服务
				</view> -->
			<view class="msg">
				<view class="item disc" @tap="go('safe')">
					<image src="../../static/myimg/zhanghu.png" mode=""></image>
					账户安全
				</view>
				<view class="item disc">
					<image src="../../static/myimg/kefu.png" mode=""></image>
					<a :href="kefu" style="color: black;">我的客服</a>
				</view>
				<view class="item disc" @tap="go('help')">
					<image src="../../static/myimg/fankui.png" mode=""></image>
					反馈与帮助
				</view>

				<!--  #ifdef APP -->
				<view class="item disc" >
					<image src="../../static/myimg/jiancha.png" mode=""></image>
					<!-- 检查更新 -->
					<down></down>
				</view>
				<!--  #endif -->

				<view class="item disc" @tap="go('about')">
					<image src="../../static/myimg/guanyu.png" mode=""></image>
					关于我们
				</view>
			</view>
		</view>

		<view class="bottom dis">
			<view class="in dis" @tap="tuichu">
				退出登录
			</view>
		</view>

		<view>

			<!-- <drag-button style="margin-bottom: 100upx;" :isDock="true" :existTabBar="true" @btnClick="btnClick"
				@btnTouchstart="btnTouchstart" @btnTouchend="btnTouchend" /> -->

			<!-- <a href="">
			 <drag-button
			     style="margin-bottom: 100upx;"
			     :isDock="true"
			     :existTabBar="true"
			      />
		 </a> -->

		</view>
	</view>
</template>

<script>
	import down from '../../components/down/updatepage/updatepage.vue'
	export default {
		components: {
down
		},
		data() {
			return {
				version: "",
				kefu:""
			};
		},
		onShow(){
			this.kefu=uni.getStorageSync('kefu')
			// 获取设备信息
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					// console.log(res)
				}
			})
			
			
		},
		methods: {
			check() {
				console.log('检查更新s')
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
						this.AndroidCheckUpdate();
						// }
					}
				})
				// #endif
			},
			AndroidCheckUpdate: function() {
				var _this = this;
				uni.request({
					//version.txt中内容为版本号，如果版本号大于客户端的版本号，客户端就自动更新9
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


						} else if (res.data.data.v == this.version) {
							uni.showToast({
								duration: 1000,
								title: '已经是最新版本',
								icon: 'none'
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			btnClick() {
				console.log('btnClick')
				window.location = ('https://www.baidu.com')
			},
			btnTouchstart() {
				console.log('btnTouchstart')
			},
			btnTouchend() {
				console.log('btnTouchend')

			},
			go(name) {
				console.log(name)
				uni.navigateTo({
					url: `/pages/${name}/${name}`
				})
			},
			tuichu() {
				uni.removeStorageSync('token');
				// uni.removeStorageSync('address');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less" src='./setting.less'>

</style>