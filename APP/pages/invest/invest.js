export default {
		data() {
			return {
				xiadan:0,//下单数量
				currentDay:0,//目前天数
				showIndex:0,//下单的三个弹出框
				dayID:[],
				show: false,
				currentIndex: 0,
				zhifu:false,
				value:'',
				list: [
					'生态修复重大工程', '中国绿色发展基金', 'title3', 'title4',
				],
				id: '',//产品id
				goods_list:[],//产品列表
				detail:{},//产品详情
				// 基本案列数据
				          radiolist1: [
							  {
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
		onLoad(options) {
			//  初始页面渲染
			this.currentIndex = options.id
			let xx= Number(options.id)+1
			console.log(xx)
			let goods_list={
			  	'tid':xx.toString()
			}
			this.$fn.request('goods/goods_list', 'GET',goods_list).then(res => {
				console.log(res.data.data.data,'产品列表接口')
				this.goods_list=res.data.data.data
			})
			
			// 支付方式
			let type={}
			this.$fn.request('/pay/list', 'GET',type).then(res => {
				console.log(res,'支付方式')
				
			})
			
			
			// ------------
			let data = {

			}
			// 产品分类接口
			this.$fn.request('goods/goods_type', 'GET',data).then(res => {
				// console.log(res.data.data,'产品分类接口')
				this.list=res.data.data
			})
			
	
		},
		onShow() {
			uni.pageScrollTo({
				duration:100,
				scrollTop:120,
			})
			this.$store.state.one=true
			this.$store.state.two=true
			this.$store.state.three=true
			this.$store.state.four=true
		},
		methods: {
			shang(){//上一步
			    if(this.showIndex==0){
					return
				}
				this.showIndex--
			},
			next(){//下一步
				this.showIndex++
				if(this.showIndex>2){
					return
				}
				
				if(this.showIndex==1){
					//产品天数接口
					let goods_day={
						'gid':this.detail.id
					}
					this.$fn.request('goods/goods_day', 'GET',goods_day).then(res => {
						console.log(res,'产品天数接口')
						this.dayID=res.data.data.data
					})
				}
				
				
				
			},
			pay(){ //最终支付
			console.log(this.xiadan.toString())
				let data={
					'gid':this.detail.id.toString(),
					'num':this.xiadan.toString(),
					'did':this.dayID[0].id.toString(),
					'pid':'1',
					'cid':'0'
				}
				this.$fn.request('/pay/order', 'POST',data).then(res => {
					console.log(res,'产品下单')
					// this.goods_list=res.data.data.data
				})
			},
			// -----------
			changeDay(e){
				this.currentDay=e
			},
			changeNumber(e){//数量
				this.xiadan=e
				console.log(this.xiadan)
			},
			
			lijirengou(item){//立即认购
				this.zhifu=true
				this.showIndex=0
			},
			bian(index,id) {//切换产品列表接口
				this.currentIndex = index
				// 产品列表接口
				console.log(id)
				let goods_list={
				  	'tid':id
				}
				this.$fn.request('goods/goods_list', 'GET',goods_list).then(res => {
					console.log(res.data.data.data,'产品列表接口')
					this.goods_list=res.data.data.data
				})
			},
			go(index) {
				this.show=true
				this.id=index
				// 产品详情
				let goods_one={
					"id":this.id
				}
				this.$fn.request('goods/goods_one', 'GET',goods_one).then(res => {
					console.log(res.data.data,'产品详情')
					this.detail=res.data.data
				}) 
				uni.pageScrollTo({
					duration:100,
					scrollTop:0,
				})
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				uni.pageScrollTo({
					duration:100,
					scrollTop:120,
				})
				// console.log('close');
			},
			zhifuopen(){
				
			},
			zhifuclose(){
				this.zhifu=false
			},
			 groupChange(n) {
			        console.log('groupChange', n);
			      },
			      radioChange(n) {
			        console.log('radioChange', n);
			      }
		}
	}