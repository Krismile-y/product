export default {
		data() {
			return {
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
					]
				 }
			}
		},
		onLoad(){
			
		 // uni.request({	 
		 // 	url:'http://www.api.com/api/banner',
			// data:{
			// 	type:1
			// },
			// header:{
			// 	token:'123321123'
			// },
			// method:"GET",
			// success: (res) => {
			// 	console.log(res)
			// },
			
		 // })
			
		},
		methods: {
            huanbao(){
				uni.navigateTo({
					url:'/pages/environmental/environmental'
				})
			},
			xinwen(){
				uni.navigateTo({
					url:'/pages/news/news'
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