<script>
	import Vue from "vue";
	import uniPopup from "./components/down/updatepage/uni-popup/uni-popup.vue";
	import uniPopupMessage from "./components/down/updatepage/uni-popup/uni-popup-message.vue";
	import uniPopupDialog from "./components/down/updatepage/uni-popup/uni-popup-dialog.vue";
  
  /**
   * 比较两个版本号的大小
   * @param {string} version1 版本号1
   * @param {string} version2 版本号2
   * @returns {number} 如果版本号1大于版本号2，返回1；否则如果版本号1小于版本号2，返回-1；否则返回0。
   */
  function compareVersion (version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    const len = Math.max(v1.length, v2.length)
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i]) || 0
      const num2 = parseInt(v2[i]) || 0
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  }
	export default {
		data: function() {
			return {
				version: "2.0.0" //版本号
			}
		},
		onShow() {
         // uni.setStorageSync('gengxin',!false)

		},
		onLoad() {
      // $(function(){
      //     $.ajax({
      //       url:'https://asdqq.oss-cn-hongkong.aliyuncs.com/baseUrl.json',
      //       type:'get',
      //       data:{},
      // dataType:"json",
      // async:false,
      //       success:function(data){
      //          console.log(data)
      //       }
      //     })
      //   })
			if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined || !uni.getStorageSync(
					'token')) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
    globalData: {
      baseUrl: ''
    },
		onLaunch: function() {
      // 请求获取后端地址
      const that = this
      const urls = [
        'https://ldbad001.oss-cn-hangzhou.aliyuncs.com/baseUrl.json',
        'https://cadqweasdw.oss-cn-hangzhou.aliyuncs.com/baseUrl.json',
        'https://gqsdwqweasda.oss-cn-hangzhou.aliyuncs.com/baseUrl.json', 
        'http://lszg001.oss-cn-hangzhou.aliyuncs.com/baseUrl.json', 
        'https://asdqq.oss-cn-hongkong.aliyuncs.com/baseUrl.json',
        'https://121qwewq2dw.oss-cn-hongkong.aliyuncs.com/baseUrl.json'
        ]
      let i = 0 // 记录请求的接口索引
          
          function request() {
            if (i >= urls.length) {
              // 所有接口请求都失败
              console.error('All requests failed')
              return
            }
            let urlNum = 0
            // 请求当前接口
            uni.request({
              url: urls[i],
              success(res) {
                
                if (res.statusCode === 200) {
                  // 接口请求成功，输出结果并停止向后执行
                  console.log(res.data)
                  that.globalData.baseUrl = res.data.baseUrl
                  urlNum++
                  return
                }
              },
              fail(err) {
                // 接口请求失败，继续请求下一个接口
              },
              complete() {
                // 递归调用 request() 方法，请求下一个接口
                if(urlNum!==1) {
                  i++
                  setTimeout(request, 3000)
                }else {
                  return
                }
              }
            })
          }
          
          request() // 开始请求第一个接口
      
      // uni.request({
      //   url: 'https://asdqq.oss-cn-hongkong.aliyuncs.com/baseUrl.json',
      //   // url:'https://www.nmsdnct.cn/',
      //   success: function (res) {
      //     // 请求成功后的回调函数
      //     console.log(res,'ressssssssssssss');
      //     // 在这里执行后续代码
      //     // ...
      //     that.globalData.baseUrl = res.data.baseUrl
      //   },
      //   fail: function (err) {
      //     // 请求失败后的回调函数
      //     console.log(err);
      //   }
      // });
      
      
			uni.setStorageSync('gengxin',true)//app更新首页显示状态
			// 客服接口
			let kefu = {
				"sid": "1"
			}
			// 获取设备信息
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					// console.log(res.safeArea)
					// uni.setStorageSync('x', res.safeArea.width - 70)
					uni.setStorageSync('x',0)
					uni.setStorageSync('y', res.safeArea.bottom / 2 - 65)
					this.$store.commit('x', uni.getStorageSync('x'))
					this.$store.commit('y', uni.getStorageSync('y'))
					// console.log(this.$store.state.y,'yy')
				}
			})
			// if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined || !uni.getStorageSync(
			// 		'token')) {
			// 	uni.navigateTo({
			// 		url: '/pages/login/login'
			// 	})
			// }
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
					if (res.platform == "android") {
            this.AndroidCheckUpdate();
					}else if(res.platform == "ios") {
            this.iosUpdata()
          }
				}
			})
			// #endif
			
			
		},
    
    onHide() {
      // 退出app或者app切到后台
      // #ifdef APP
      uni.setStorageSync("tType",false)
      // #endif
    },
		methods: {
      // 安卓更新
			AndroidCheckUpdate: function() {
				var _this = this;
				uni.request({
					//version.txt中内容为版本号，如果版本号大于客户端的版本号，客户端就自动更新
					url: getApp().globalData.baseUrl + 'v',
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
      // ios更新，跳转到下载地址
      iosUpdata() {
        const currentVersion = uni.getStorageSync('version') || '1.0.0'
        // 获取 App Store 中该 App 的最新版本号
        uni.request({
          url: getApp().globalData.baseUrl + 'v',
          method: 'GET',
          data: {},
          success: (res) => {
            const latestVersion = res.data.data.v
            // 如果最新版本高于当前版本，则询问用户是否需要更新
            if (compareVersion(latestVersion, currentVersion) === 1) {
              uni.showModal({
                title: '更新提示',
                content: '检测到新版本，是否更新？',
                success: (res) => {
                  if (res.confirm) {
                    // 用户选择更新，跳转至 App Store 中该 App 的下载页面
                    uni.navigateTo({
                      url: 'http://fir.yxzdldw.cn/7m1564'
                    })
                  }
                }
              })
            }
          }
        })

      }
		},
		onHide: function() {
			console.log('App Hide')
			uni.setStorageSync('gengxin',false)
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
		background-color: #f5f5f5;
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