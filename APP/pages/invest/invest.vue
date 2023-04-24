<template>
	<view class="content">

		<!-- 弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" round='60'>
				<view class="popup">
					<scroll-view scroll-y="true" style="width: 100%;height: 100%;overflow: hidden;">
						<view class="investDetail">
							
							<view class="tops" >
								<image src="https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800" mode=""></image>
							</view>
							
							
							
							<view class="li" style=" font-weight: 580;">
								项目规模：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_1}}</text>万元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								每日分红：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_2}}</text>万元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								投资周期：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_3}}</text>万元
								</view>
							</view>
							<view class="li" style="font-weight: 600;">
								分红方式：到期还本还息
							</view>
							
							<view class="li" style=" font-weight: 580;font-size: 32upx;">
								担保机构：{{detail.warrant}}
							</view>
							<view class="li" style="border-bottom: 1upx dashed #ccc;height: 30upx;margin-bottom: 20upx;" >
								
							</view>
							<view class="li" style="color: #484848;font-weight: 510;padding-left: 20upx;margin-top: 0upx;">
								
								起投金额：
								
							</view>
							
							
							
							<view class="li" style="color: #484848;font-weight: 510;">
								
								<image src="../../static/logo.png" mode=""></image>
								<text style="font-size: 68upx; color: #000;">
									
									{{detail.goods_money}}
									</text>
									
								<view class="pos dis">
									<view class="btn dis" @tap="lijirengou()">
										马上认购
									</view>
								</view>	
							</view>
							
							<view class="tops" >
								<image src="https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800" mode=""></image>
							</view>
							
						</view>
					</scroll-view>
				</view>
			</u-popup>
			
		</view>
        <!--  -->
		
		
		
		
		
		
		<view class="top">		
			<view class="xia " style="">

			</view>
		</view>

        <!-- 标题栏 -->
		<scroll-view scroll-x="true" style="width: 100%;height: 90upx;white-space: nowrap;margin-top: 100upx;">
			<view class="item " v-for="(item,index) in list" :key="index" @tap="bian(index,item.id)">
				<view class="box disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
					<view class="line" v-show="currentIndex==index?true:false"></view>
				</view>
			</view>
		</scroll-view>

		<!-- 单个产品 -->
		<view class="items" v-for="(item,index) in goods_list">
			<image src="../../static/index/swiper.png"></image>
			<view class="tit">{{item.goods_name}}</view>
			<view class="buy">
				<view class="left">最低投资：{{item.goods_money}}元</view>
				<view class="right">
					<view class="pay dis" @tap="go(item.id)" >认购</view>
				</view>
			</view>
		</view>

        <view>
        		<u-popup :show="zhifu" @close="zhifuclose" @open="zhifuopen">
                    <view class="zhifu">
                        <view class="zhifuItem ">
							
							<u-radio-group 
							    v-model="value"
								placement='column'
							    iconPlacement="right">
								<view class="radioBox ">
									<view class="left">微信</view>
									<view class="right">
										<u-radio activeColor="red" label=""></u-radio>
									</view>
									
								</view>
								<view class="radioBox ">
									<view class="left">支付宝</view>
									<view class="right">
										<u-radio activeColor="red" label="" style=""></u-radio>
									</view>
									
								</view>
							</u-radio-group>
							
						</view>
						
                    </view>
        		</u-popup>
        		<!-- <u-button @click="zhifu = true">打开</u-button> -->
        </view>

		<bottom></bottom>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				currentIndex: 0,
				zhifu:false,
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
			
			this.currentIndex = options.id
			
			// let goods_list={
			//   	'tid':options.id 
			// }
			// this.$fn.request('goods/goods_list', 'GET',goods_list).then(res => {
			// 	console.log(res.data.data.data,'产品列表接口')
			// 	this.goods_list=res.data.data.data
			// })
			
			
			
			let data = {

			}
			// 产品分类接口
			this.$fn.request('goods/goods_type', 'GET',data).then(res => {
				console.log(res.data.data,'产品分类接口')
				this.list=res.data.data
			})
			
			
			
			// 产品天数接口
			// let goods_day={
			// 	'gid':'1'
			// }
			// this.$fn.request('goods/goods_day', 'GET',goods_day).then(res => {
			// 	console.log(res.data.data.data,'产品天数接口')
			// 	this.goods_list=res.data.data.data
			// })
			
			
			
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
			lijirengou(item){
				this.zhifu=true
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
</script>

<style lang="less" src='./invest.less' scoped>

</style>