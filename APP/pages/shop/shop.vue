<template>
	
	<view class="content" style="position: relative;">
		<!-- 头部 -->
		<airel-floatball  />
			<view class="xintop disc">
				<view style="">我的积分</view>
				<view style="margin-top: 30upx;font-size: 36upx; font-weight: 580;">{{info.money_integral}}</view>
				<view class="pos dis" @tap='address'>
					<image src="../../static/newShop/icon_local_slices/icon_local.png" mode=""></image>
					收货地址
				</view>
				
			</view>
	
		
		<!-- 商品盒子 -->
		<view class="itemBox">
			
			
			<view class="box">
				<view class="title">
					<view class="shu"></view>
					积分商城
				</view>
				<view class="boxItem" v-for="(item,index) in list" @tap="shopDetail(item)">
					<image :src="item.head_img"></image>
				 <view class="name">{{item.wares_name}} </view>
				<view class="juse">
					<view style="font-size: 34upx;">{{item.wares_money}}</view>
					<view style="font-size: 22upx;padding-top: 10upx;margin-left: 10upx;">积分</view>
				</view>	
				 
				</view>
				
			</view>
		</view>
		
		<view class="bottom-box" style="z-index: 2999;">
		  <helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
		</view>
		
		<view class="content" style="min-height: 120vh; padding-bottom: 100upx;" v-show="false">
		
			<!-- 弹出层 -->
			<view>
				<u-popup :show="show" @close="close" @open="open" round="60">
					<view class="popup " style="margin-top: 50px;">
						<scroll-view scroll-y="true" style="width: 100%;height: 100%; ">
							<view class="shopDetail">
								<view style="background-color: #fff; padding-bottom: 30upx;">
									<view class="back">
										<view class="backBtn dis" @tap="backBtn"><</view>
									</view>
									<image
										:src="item.head_img" style="margin-top: 30upx;">
									</image>
									<view class="biaoti">
										<view class="left dis">绿色商品</view>
										<text>{{item.wares_name}}</text>
									</view>
									<!-- <view class="tishi">
										温馨提示：冬季暖心必备，家用小型电水壶
									</view> -->
		
									<!-- <view class="buy dis">
										您可以使用能量兑换商品
									</view> -->
								</view>
		
								<!-- <view class="de">
									{{item}}
								</view> -->
		
								<view class="btn dis" @tap='duihuan'>
									兑换
								</view>
		
							</view>
						</scroll-view>
					</view>
				</u-popup>
		
			</view>
		
		    <!-- 滑动 -->
			
			    <!-- <scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 96upx);">
			    	<view></view>
			    </scroll-view> -->
			
				<view class="top" style="position: relative;">
				<view class="toAddress">
					<view class="item disc">
						<view>我的积分</view>
						<view>{{info.money_integral}}</view>
					</view>
					<view class="item dis">
						<image src="../../static/common/weizhi.png" mode="" @tap='address'></image>
					</view>
				</view>
				</view>
				
				<view class="av" v-show="false">
					
					<view class="left">
						<view>我的 推荐人：mr:li</view>
						<view>我的积分：{{info.money_integral}}</view>
					</view>
					<view class="right dis">
						<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465"
							mode=""></image>
					</view>
				</view>
				<view class="newTop " v-show="false">
					<view>可提现：0.00</view>
					<view>每日收益：0.00</view>
					<view>总收益：0.00</view>
					<view>绿币：0.00</view>
					<view>碳票：0.00</view>
					<view>积分：0.00</view>
				</view>
				
				<!-- ********** -->
				<view class="box" style="margin-top: 60upx;">
					<view class="shop disc" v-for="item in list" @tap="go(item)" style="margin-left: 10upx;">
						<image @tap="show=true"
							:src="item.head_img"
							mode=""></image>
						<view class="title">{{item.wares_name}}</view>
						<view class="detail">{{item.wares_money}}元</view>
					</view>
				
				</view>
			
		
			<view class="bottom-box">
			  <helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
			</view>
		</view>
	</view>
	
	
	
	
</template>

<script>
  import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
	export default {
    components: {
      "helang-tab-bar-bulge": tabBarBulge,
    },
		data() {
			return {
				out:0,
				item: {}, //商品对象
				show: false,
				list: [], //商品列表
				info:{},//用户信息
				top:"",
			};
		},
		onBackPress(event) {
			if(this.out == 0){
				this.out++
				uni.showToast({
					duration:1000,
					title:'再按一次退出程序',
					icon:"none"
				})
			}else if(this.out>=1){
				plus.runtime.quit();
				if (plus.os.name.toLowerCase() === 'android') {
					 plus.runtime.quit();
				}
				uni.removeStorageSync('token')
			}
			
		    if (event.from === 'backbutton') {
		          this.overlayShow = true;
				
		            return true;
		        }else{		
					// return false
				}
		        
		  },
		onShow() {
			this.out=0
			this.info=uni.getStorageSync('user_info')
			if (uni.getStorageSync('name') == 'shop') {
				this.$store.state.one = true
				this.$store.state.two = true
				this.$store.state.three = false
				this.$store.state.four = true
			}
		},
		mounted() {
			// uni.pageScrollTo({
			// 	duration: 100,
			// 	scrollTop: 120,
			// })
		},
		onLoad() {
			// 积分兑换商品列表
			let wares = {}
			this.$fn.request('wares/list', "GET", wares).then(res => {
				console.log(res.data.data.data, '积分兑换商品列表')
				// if(res.data.code == 204){
				// 	uni.showToast({
				// 		title:res.data.msg,
				// 		icon:'none',
				// 		duration:1000,
				// 	})
				// 	setTimeout(()=>{
				// 		uni.removeStorageSync('token');
				// 		uni.navigateTo({
				// 			url:'/pages/login/login'
				// 		})
				// 	},1500)
				// }
				this.list = res.data.data.data
			})


			// 积分兑换商品下单
			// let order={}
			// this.$fn.request('wares/order',"POST",order).then(res=>{
			// 	console.log(res,'积分兑换商品下单')
			// })



		},
		methods: {
			backBtn(){//商品详情页返回
				this.close()
			},
			sign() {
				uni.navigateTo({
					url: '/pages/sign/sign'
				})
			},
			duihuan() {
				let addressID=''  //默认地址id
				// 获取默认地址
				this.$fn.request('my_address',"GET",{'default':'1'}).then(r=>{
					console.log(r.data.data,'地址')
						if(r.data.data.length == 0){
							uni.showToast({
								duration:1000,
								icon:"none",
								title:'您还未选择地址'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/chooseAddress/chooseAddress'
								})
							},1000)
						}else{
							addressID=r.data.data[0].id
							console.log(addressID)
							// 积分下单
							
							let data = {
								wid: this.item.id,
								aid:addressID,
							}
							this.$fn.request('wares/order', "POST", data).then(res => {
								// console.log(res.data.msg, '积分兑换商品接口')
								if (res.data.code == 1) {
									uni.showToast({
										duration: 1000,
										title: '兑换成功'
									})
									// this.show=false
									
								// 用户信息
								let info={
									"is_whole":"1"
								}
								this.$fn.request('user','GET',info).then(res=>{
									console.log(res.data.data.money_integral,'用户信息')
									this.info.money_integral=res.data.data.money_integral
									uni.setStorageSync('user_info',res.data.data)
								})		
								}else{
									uni.showToast({
										duration: 1000,
										title: res.data.msg,
										icon:'error'
									})
								}
							})
						}
					
				})
				

			},
			power() { //能量兑换商品

			},
			go(item) {

				uni.pageScrollTo({
					duration: 100,
					scrollTop: 0,
				})
				console.log(item)
				this.item = item

			},
			open() {
				// console.log('open');

			},
			close() {
				this.show = false
				// console.log('close');
				uni.pageScrollTo({
					duration: 100,
					scrollTop: 120,
				})
			},
			// 我的地址
			address() {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},
			// 商品详情
			shopDetail(item){
				uni.setStorageSync('shopDetail',item)
				uni.navigateTo({
					url:'/pages/shopDetail/shopDetail'
				})
			}
		}
	}
</script>

<!-- <style lang="less" src='./shop.less'>

</style> -->

<style lang="less" src='./new.less'>

</style>