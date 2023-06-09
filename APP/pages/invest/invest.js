import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
// 静态图片引入，用作没数据时的展示
import kezaisheng from '../../static/common/kezaisheng.jpg';
import plane from '../../static/common/plane.jpg';
import xinnengyuan from '../../static/common/xinnengyuan.jpg';
import qingjie from '../../static/common/qingjie.jpg';
import zhishuzaolin from '../../static/common/zhishuzaolin.jpg';
import shuzihua from '../../static/common/shuzihua.jpg';
import jieneng from '../../static/common/jieneng.jpg';
import mstabs from '../../components/ms-tabs/ms-tabs.vue'
export default {
	components: {
		"helang-tab-bar-bulge": tabBarBulge,mstabs
	},
	   watch:{
	        active2() {
	            console.log(this.active2)  // 0
	        }
	    },
	data() {
		return {
			changdu:'',//控制向左的长度
			xxx:10,
			 list2: [{
			                title: 'test1'
			            }, {
			                title: 'test2'
			            },{
			                title: 'test3'
			            }, {
			                title: 'test4'
			            },{
			                title: 'test5'
			            }, {
			                title: 'test6'
			            },{
			                title: 'test7'
			            }, {
			                title: 'test8'
			            }
			        ],
			        active2: 0,
			left: 0,
      noneDataImgs:[
        {
          id:1,
          url:kezaisheng,
        },
        {
          id:2,
          url:plane,
        },
        {
          id:4,
          url:xinnengyuan,
        },
        {
          id:5,
          url:qingjie,
        },
        {
          id:6,
          url:zhishuzaolin,
        },
        {
          id:7,
          url:shuzihua,
        },
        {
          id:8,
          url:jieneng,
        },
      ],
      nowNoneImg: '',
			kong: false, //分类数据为空
			out: 0, //退出参数
			typeIndex: 0,
			xiadan: 1, //下单数量
			currentDay: 0, //目前天数
			showIndex: 0, //下单的三个弹出框
			dayInfo: [], //产品天数信息
			dayID: [],
			viewItem: '',
			show: false,
			currentIndex: 0,
			type: ['余额支付', '微信支付'],
			zhifu: false,
			dayChange: false, //控制天数选择的弹出框
			value: '',
			list: [],
			id: '', //产品id
			goods_list: [], //产品列表
			detail: {}, //产品详情
			// 基本案列数据
			radiolist1: [{
					name: '微信',
					disabled: false
				},
				{
					name: '支付宝',
					disabled: false
				},

			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			radiovalue1: '苹果',
		};
	},
	mounted() {

	},
	onShow() {
		this.currentIndex = this.$store.state.scrollIndex
	},
	onLoad(options) {
		this.setViewItem(options.id)
		//  初始页面渲染
		this.currentIndex = options.id
		
		// 支付方式
		let type = {}
		this.$fn.request('/pay/list', 'GET', type).then(res => {
			console.log(res.data.data, '支付方式')

		})


		// ------------
		let data = {

		}
		// 产品分类接口
		this.$fn.request('goods/goods_type', 'GET', data).then(res => {
			console.log(res.data.data, '产品分类接口')
			this.changdu=res.data.data.length-1
			if(res.data.code == 1){
				this.list = res.data.data
        this.getchanpin(this.list[options.id].id)
				setTimeout(()=>{
					uni.getSystemInfo({
						success: (res) => {
							this.systemInfo = res
							console.log(res.safeArea.width*0.4*0.2)
							// let last = res.safeArea.width*0.4 -this.xxx
							//  let last = res.safeArea.width
							// this.left=index*last
							this.left = options.id * res.safeArea.width*0.95*0.5
						}
					})
					
				},100)
			}
			
		})




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
			if (plus.os.name.toLowerCase() === 'android') {
				plus.runtime.quit();
			}
			uni.removeStorageSync('token')
		}

		if (event.from === 'backbutton') {
			this.overlayShow = true;

			return true;
		} else {
			// return false
		}

	},
	onShow() {

		this.out = 0
		this.$store.state.one = true
		this.$store.state.two = true
		this.$store.state.three = true
		this.$store.state.four = true
	},
	methods: {
		
		backBtn() { //认购弹出层
			this.close()
		},
		// 给横向滚动分配id
		setViewId(index) {
			return `id${index}`
		},
		setViewItem(index) {
			this.viewItem = `id${index}`
		},
		lastbackBtn() { //马上认购返回
			this.zhifuclose()
		},
		jia() {
			this.xiadan++
		},
		jian() {
			if (this.xiadan == 0) {
				return
			}
			this.xiadan--
		},
    // 获取产品列表的方法
    getchanpin(id) {
      let goods_list = {
      	'tid': id
      }
      this.$fn.request('goods/goods_list', 'GET', goods_list).then(res => {
      	console.log(res.data.data.data, id,'产品列表接口')
      	
      	this.goods_list = res.data.data.data
      	if (this.goods_list.length == 0) {
          this.noneDataImgs.forEach((item)=> {
            if(id == item.id) {
              this.nowNoneImg = item.url
            }
          })
      		this.kong = true
      	} else {
      		this.kong = false
      	}
      	if (res.data.code == 204) {
      		
			this.$refs.error.showTips({
			msg: res.data.msg,
			duration: 2000
				})
		
      		setTimeout(() => {
      			uni.removeStorageSync('token');
      			uni.navigateTo({
      				url: '/pages/login/login'
      			})
      		}, 1500)
      	}
      })
    },
		typetap(index) { //支付方式
			this.typeIndex = index
			console.log(index)
		},
		danxuan(e) {
			console.log(e)
		},
		righttap(index, item) { //天数

			this.currentDay = index
			this.dayChangeClose()
			console.log(item.id)
		},
		// -----------
		changeDay(e) {
			// this.currentDay=e
		},
		changeNumber(e) { //数量
			this.xiadan = e
			console.log(this.xiadan)
		},

		bian(index, id) { //切换产品列表接口
		
		// if(index==0  ){
		// 	this.xxx=0
		// }
		// if(index==this.changdu ){
		// 	this.xxx=20
		// }
		// 	this.xxx++
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					console.log(res.safeArea.width*0.5*0.95 )
					// let last = res.safeArea.width*0.4 -this.xxx
					//  let last = res.safeArea.width
					// this.left=index*res.safeArea.width*0.5*0.95
					
				}
			})
			this.currentIndex = index
			// this.$store.state.scrollIndex = index
			// 产品列表接口
			console.log(id)
			let goods_list = {
				'tid': id
			}
			this.$fn.request('goods/goods_list', 'GET', goods_list).then(res => {
				console.log(res.data.data.data, '产品列表接口')
				this.goods_list = res.data.data.data
				if (this.goods_list.length == 0) {
          this.noneDataImgs.forEach((item)=> {
            if(id == item.id) {
              this.nowNoneImg = item.url
            }
          })
					this.kong = true
				} else {
					this.kong = false
				}
			})
		},
		go(index) {
			// this.show=true
			this.id = index
			// 产品详情
			// let goods_one={
			// 	"id":this.id
			// }
			// this.$fn.request('goods/goods_one', 'GET',goods_one).then(res => {
			// 	console.log(res.data.data,'产品详情')
			// 	this.detail=res.data.data
			// }) 
			uni.navigateTo({
				url: `/pages/projectDetails/projectDetails?id=${index}`
			})
		},
		open() {
			// console.log('open');
		},
		close() {
			this.show = false
			uni.pageScrollTo({
				duration: 100,
				scrollTop: 120,
			})
			// console.log('close');
		},
		zhifuopen() {

		},
		zhifuclose() {
			this.zhifu = false
		},
		dayChangeOpen() {

		},
		dayChangeClose() {
			this.dayChange = false
		},

		groupChange(n) {
			console.log('groupChange', n);
		},
		radioChange(n) {
			console.log('radioChange', n);
		}
	}
}