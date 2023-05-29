import down from '../../components/down/updatepage/updatepage.vue'
import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
import Vue from "vue";
import uniPopup from "../../components/down/updatepage/uni-popup/uni-popup.vue";
import uniPopupMessage from "../../components/down/updatepage/uni-popup/uni-popup-message.vue";
import uniPopupDialog from "../../components/down/updatepage/uni-popup/uni-popup-dialog.vue";
import hezuoImg1 from "@/static/hezuo/hezuodanwei.png"
import hezuoImg2 from "@/static/hezuo/hezuoAll.png"
export default {
	components: {
		down,
    "helang-tab-bar-bulge": tabBarBulge,
	},
	data() {
		return {
      hezuoImg: [
        hezuoImg1,
        hezuoImg2,
      ],
			newMSG:0,//官方最新消息
			phoneDown: "",
			out: 0,
			obj: {
				type: 'index',
				index: 0,
			},
      bumenItems:[
        '中华人民共和国国家发展和改革委员会',
        '生态环境部\n',
        '中华人民共和国住房和城乡建设部',
        '国家林业和草原局\n',
        '国家航天局',
        '国家能源局',
        '自然资源部',
      ], //监管部门
			banner: [], //轮播图
			article: [], //新闻
			text1: '',
			nowNum: 0, //控制海报显示,
			posterShow: true,
			lastLength:'',
			posterList: [
				
					// {
					// 	img: "https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
					// },
					// {
					// 	img: "https://img0.baidu.com/it/u=2616180438,3555003891&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
					// },
					// {
					// 	img: "https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
					// },
					
				
			]
			// posterList: {
			// 	one: [
			// 		{
			// 			src: "https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
			// 		},
			// 		{
			// 			src: "https://img0.baidu.com/it/u=2616180438,3555003891&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
			// 		},
			// 		{
			// 			src: "https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
			// 		},
					
			// 	]
			// }
		}
	},
	onReady() { //onReady用于监听组件渲染完成
		// //  #ifdef APP
		// if(uni.getStorageSync('gengxin') == true){
		// 	this.$refs.down.upgrade() //检查更新
		// }	
		// // #endif

	},
	onHide(){
		uni.setStorageSync('gengxin',false)
	},
	onShow() {
		// if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined || !uni.getStorageSync(
		// 		'token')) {
		// 	uni.navigateTo({
		// 		url: '/pages/login/login'
		// 	})
		// }
		
		// 海报接口
		this.nowNum=0
		
		this.$fn.request('banner', "GET", {"type":"5"}).then(res => {
			console.log(res.data.data.length,'海报')
			 this.posterList = res.data.data
			 this.lastLength=res.data.data.length
		})
		
		// 判断手机型号
 
		uni.getSystemInfo({
			success: (res) => {
				this.$fn.request('v', "GET", {}).then(r => {
					console.log(r,'v');
          uni.setStorageSync('lowDown',r.data.data.down)
					if (res.platform = 'android') {
						this.phoneDown = r.data.data.apk
					} else {
						this.phoneDown = r.data.data.ios
					}
				})

			}
		})

		this.out = 0
		uni.setStorageSync('name', 'index')
		if (uni.getStorageSync('name') == 'index') {
			this.$store.state.one = false
			this.$store.state.two = true
			this.$store.state.three = true
			this.$store.state.four = true
		}
		// console.log(uni.getStorageSync('token'),'')

	},
  
	onBackPress(event) {
		if (this.out == 0) {
			this.out++
			
			this.$refs.success.showTips({
			    msg: '在按一次退出程序',
			    duration: 2000
			  })
		} else if (this.out >= 1) {
			plus.runtime.quit();
			// if (plus.os.name.toLowerCase() === 'android') {
			// 	plus.runtime.quit();
			// }
			uni.removeStorageSync('token')
		}

		if (event.from === 'backbutton') {
			this.overlayShow = true;

			return true;
		} else {
			// return false
		}

	},
  onReady(){
	 
  },
  
	onLoad() {
    this.$store.state.current = 'index'
    uni.setStorageSync('current','index')
		// 最新官方消息接口
		this.$fn.request('notice/count', "GET", {"type":"1"}).then(res => {
		
			this.newMSG=res.data.data.count
		})
	
		  const searchParams = new URLSearchParams(window.location.search);

      console.log(window.location.origin)
		  const params = {};
		  for (const pair of searchParams.entries()) {
		    params[pair[0]] = pair[1];
		  }
      
		  let code = params['code']; // 返回 "123"
      console.log(code)
			if(parseInt(code) >0 && code.length >1){
        uni.setStorageSync('code', code)
        window.location.href = window.location.origin+'/#/pages/login/login?='+code
        // uni.navigateTo({
        //   url:
        // })
        return;
      }
			
			

		// 轮播图接口
		let data = {
			"type": "1",
		}
		this.$fn.request('banner', "GET", data).then(res => {
			let arr = res.data.data
			
			arr.forEach((item, index) => {
				let strArr = item.img.split('\\')
				let img = strArr.join('//')
				this.banner.push({
					img: img
				})
			})
			// console.log(this.banner,'轮播图');
		})

		// 新闻接口
		this.$fn.request('article', "GET", {}).then(res => {
			// console.log(res.data.data,'新闻')
			this.article = res.data.data
		})

		// 公告接口
		let info = {
			"type": "1"
		}
		this.$fn.request('notice', "GET", info).then(res => {
			// console.log(res.data.data,'公告')
			let data = res.data.data;
			let i = 0;
			setInterval(() => {
				if (i < data.length) {
					this.text1 = data[i].content
					i++;
				} else {
					i = 0
				}

			}, 3000)
		})

		let kefu = {
			"sid": "1"
		}
		this.$fn.request('customer', "GET", kefu, ).then(res => {
			console.log(res.data.data[0].url,'客服')
			uni.setStorageSync('kefu', res.data.data[0].url)
			this.$store.commit('kefu', res.data.data[0].url)
		})
	},
	methods: {
		guanwang(){//进入官网
		
		uni.navigateTo({
		  url: '/pages/webview/webview?url='+this.$lastUrl
		})
			
		},
		check(){
			//  #ifdef APP
			this.$refs.down.upgrade()  //检查更新
			// #endif
		},
		ceshi() {
			console.log()
		},
		income() {

		},
    // 部门点击事件
    bumenJump(index) {
      uni.navigateTo({
        url:`/pages/tousuyujianyi/tousuyujianyi?id=${index}`
      })
    },
		down() { //app下载
			this.$fn.request('v', "GET", {}).then(res => {
				// console.log(res.data.data.apk,'安卓')
				let anzhuo = res.data.data.apk
				// console.log(res.data.data.ios,'ios')
				let pingguo = res.data.data.ios
				uni.getSystemInfo({
					success: (res) => {
						console.log(res.platform);
						//检测当前平台，如果是安卓则启动安卓更新 
						let nowUrl = ''
						if (res.platform == "android") {
							nowUrl = anzhuo

						} else if (res.platform == "ios") {
							nowUrl = pingguo

						}
						// 下载
						uni.downloadFile({
							url: nowUrl,
							success: function(res) {
								var filePath = res.tempFilePath;
								uni.openDocument({
									filePath: filePath,
									showMenu: true,
									fail: function(err) {
										console.log('openDocument fail',
											err);
									}
								});
							},
							fail: function(err) {
								console.log('downloadFile fail', err);
							}
						});
						// 
					}
				})
			})
		},
		xinshou() {
			uni.navigateTo({
				url: '/pages/xinshoutiyan/xinshoutiyan'
			})
		},
		goHome(name) {
      // 跳转到社区或者积分商城,切换底部标签
      if(name == 'community') {
        uni.setStorageSync('current','community')
        this.$store.state.current = 'community'
      }
      if(name == 'shop') {
        uni.setStorageSync('current','shop')
        this.$store.state.current = 'shop'
      }
			uni.navigateTo({
				url: `/pages/${name}/${name}`
			})
		},
		go(url) {
			window.location = (url)
		},
		huanbao(id) {
			uni.navigateTo({
				url: '/pages/environmental/environmental?id=' + id
			})
		},
		xinwen(index) {
			uni.navigateTo({
				url: `/pages/news/news?id=${index}`
			})
		},
		newsList() {
			uni.navigateTo({
				url: '/pages/newsList/newsList'
			})
		},
		business() {
			uni.navigateTo({
				url: '/pages/business/business'
			})
		},
		close() { //关闭海报
			this.nowNum++
			console.log(this.nowNum,'现在的index')
            console.log(this.posterList.length ,'海报的长度')
			if (this.nowNum == this.posterList.length ) {
				console.log('999')
				// this.posterShow = false
				//  #ifdef APP
				if(uni.getStorageSync('gengxin') == true){
					this.$refs.down.upgrade() //检查更新
				}	
				// #endif
			}
		}
	}
}