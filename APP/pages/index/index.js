export default {
		data() {
			return {
				obj:{
					type:'index',
					index:0,
				},
				 banner:[],//轮播图
				 article:[],//新闻
				 text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
				 nowNum:0,//控制海报显示,
				 posterShow:true,	 
				 posterList:{
					one:[
						{
							src:"https://img0.baidu.com/it/u=2616180438,3555003891&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
						},
						{
							src:"https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
						},
						{
							src:"https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"
						},
					]
				 }
			}
		},
		onShow(){
			uni.setStorageSync('name','index')
			if(uni.getStorageSync('name') == 'index'){
				this.$store.state.one=false
				this.$store.state.two=true
				this.$store.state.three=true
				this.$store.state.four=true
			}
			console.log(uni.getStorageSync('token'),'')
			
			
		},
		onLoad(){
		// 轮播图接口
		let data={
			"type":"1",		
		}
		this.$fn.request('banner',"GET",data).then(res=>{
			this.banner=res.data.data
		})
		
		// 新闻接口
		this.$fn.request('article',"GET",{}).then(res=>{
			console.log(res.data.data,'新闻')
			this.article=res.data.data
		})
		
		// 公告接口
		// let info={
		// 	"type":"1"
		// }
		// this.$fn.request('notice',"GET",info).then(res=>{
		// 	// console.log(res.data.data,'公告')
		// })
		
		// 客服接口
		let kefu={
			"sid":"1"
		}
		this.$fn.request('customer',"GET",kefu,).then(res=>{
			console.log(res,'客服')
		})			
		},
		methods: {
			goHome(name){
				uni.navigateTo({
					url:`/pages/${name}/${name}`
				})
			},
            huanbao(){
				uni.navigateTo({
					url:'/pages/environmental/environmental'
				})
			},
			xinwen(index){
				uni.navigateTo({
					url:`/pages/news/news?id=${index}`
				})
			},
			newsList(){
				uni.navigateTo({
					url:'/pages/newsList/newsList'
				})
			},
			business(){
				uni.navigateTo({
					url:'/pages/business/business'
				})
			},
			close(){//关闭海报
				this.nowNum++
				
				if(this.nowNum >= this.posterList.one.length-1){
					 this.posterShow=false
				}
			}
		}
	}