<template>

	<view class="content" style="position: relative;background-color: #f7f8fa;">
		<!-- 头部 -->
		<view><airel-floatball /></view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
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
				<view class="title" style="position: relative;">
					<!-- <view class="shu"></view> -->
					<view style="width: 50%;height: 100%;" class="dis" @tap="qiehuan(0)"
						:class="{yanse:qiehuanIndex==0?true:false}">积分商城</view>
					<view class="titlePOS dis" style="width: 50%;height: 100%;" @tap="qiehuan(1)"
						:class="{yanse:qiehuanIndex==1?true:false}">我的商品</view>
				</view>
				<!-- 商品列表 -->
				<view class="boxItem" v-for="(item,index) in list" :key="index" @tap="shopDetail(item)"
					v-if="qiehuanIndex==0?true:false">
					<image :src="item.head_img"></image>
					<view class="name">{{item.wares_name}} </view>
					<view class="juse">
						<view style="font-size: 34upx;">{{item.wares_money}}</view>
						<view style="font-size: 22upx;padding-top: 10upx;margin-left: 10upx;">积分</view>
					</view>
				</view>

				<!-- 我的商品 -->
				<view style="margin-top:32rpx;width:100%; background-color:#F4F4F6;" v-if="qiehuanIndex==1?true:false">
					<view v-for="(item,index) in myShop" :key="index" class=""
						style="background-color:#fff;margin: 22rpx auto;display:flex;width:686rpx;
						height: 200rpx;border-radius: 20rpx;
						padding-top: 20rpx;padding-bottom:20rpx;">
						<image :src="item.head_img" mode=""
							style="width: 156rpx;height:156rpx;border-radius:20rpx;margin-left:20rpx;"></image>
						<view style="width:500rpx;position:relative;">
							<view style="display:flex;position:relative;box-sizing:border-box;">
								<view style="padding-left:20rpx;font-weight:500;font-size:28rpx; color:#242831;">{{item.wares_spec}}</view>
								<view style="position:absolute;top:0;right:26rpx; font-weight:500; font-size:28rpx;color:#242831;">{{item.wares_money}}积分</view>
							</view>
							<view style="text-align:right;padding-right:26rpx;font-size:28rpx; color:#ABABAB;">x1</view>
							<view style="position:absolute;bottom:16rpx;right:26rpx;color: #FF5A00; font-weight:300; font-size: 36rpx;">
								{{item.status_text}}</view>
						</view>
					</view>

				</view>
				<view style="width: 100%;" class="dis">
					<u-empty text="此分类暂时没有数据" mode="order" v-show="kong&&qiehuanIndex == 1"></u-empty>
				</view>
			</view>
		</view>

		<view class="bottom-box" style="z-index: 2999;">
			<helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
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
				out: 0,
				item: {}, //商品对象
				show: false,
				list: [], //商品列表
				info: {}, //用户信息
				top: "",
				qiehuanIndex: 0, //两个标题切换
				myShop: [],
				kong: false,
				page: 1,
				last_page: '',
				total: [],
				lastList: [],
			};
		},
		onPullDownRefresh(){
			
			if(this.qiehuanIndex == 0){
				this.list = []
				let wares = {}
				// this.info=[]
				this.$fn.request('wares/list', "GET", wares).then(res => {
					// console.log(res.data.data.data, '积分兑换商品列表')	
					
					if(res.data.code == 1){
						
						setTimeout(()=>{
							// this.getuserMsg()
							this.list = res.data.data.data
							uni.hideNavigationBarLoading();
							uni.stopPullDownRefresh();
						},1000)
					}
				})
			}else if(this.qiehuanIndex == 1){
				this.page = 1
        this.myShop = []
				this.x()
				
			}
		},
		onBackPress(event) {
			if (this.out == 0) {
				this.out++

				this.$refs.success.showTips({
					msg: '再按一次退出程序',
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
			// this.qiehuan(0)
			// this.x()
			this.out = 0
			this.getuserMsg()
			console.log('show')
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
				// console.log(res.data.data.data, '积分兑换商品列表')

				this.list = res.data.data.data
			})


		},
		onReachBottom() {

			if (this.qiehuanIndex == 0) {
				return
			}

			if (this.page > this.last_page) {
				return

			}
			console.log('已触底')
			this.x()
		},
		methods: {
			x() {
				let data = {
					page: this.page,
					limit: 10
				}
				// 我的商品
				this.$fn.request('wares/my', "GET", data).then(res => {
					
					if (res.data.code == 1) {
						// console.log(res.data.data.data,'我的商品')
						this.myShop.push(...res.data.data.data)
						this.last_page = res.data.data.last_page
						this.lastList = this.myShop
						this.page++
						console.log(this.myShop, 'zongshuju')
						setTimeout(()=>{
							// this.getuserMsg()
							uni.hideNavigationBarLoading();
							uni.stopPullDownRefresh();
						},1000)
						if (res.data.data.total == 0 && this.qiehuanIndex == 1) {
							this.kong = true
						} else {
							this.kong = false
						}
					}
				})
			},
			qiehuan(index) {
				console.log(index)
				this.qiehuanIndex = index

				if (this.qiehuanIndex == 1) {
					this.x()
				}
			},
			// 获取用户信息，刷新总积分
			getuserMsg() {
				let params = {
					is_whole: 1
				}
				this.$fn.request('user', "GET", params).then(res => {
					console.log(res, '个人信息');
					this.info = res.data.data
					
				})
			},
			backBtn() { //商品详情页返回
				this.close()
			},
			sign() {
				uni.navigateTo({
					url: '/pages/sign/sign'
				})
			},
			duihuan() {
				let addressID = '' //默认地址id
				// 获取默认地址
				this.$fn.request('my_address', "GET", {
					'default': '1'
				}).then(r => {
					console.log(r.data.data, '地址')
					if (r.data.data.length == 0) {

						this.$refs.error.showTips({
							msg: '您还未选择地址',
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/chooseAddress/chooseAddress'
							})
						}, 1000)
					} else {
						addressID = r.data.data[0].id
						console.log(addressID)
						// 积分下单

						let data = {
							wid: this.item.id,
							aid: addressID,
						}
						this.$fn.request('wares/order', "POST", data).then(res => {
							// console.log(res.data.msg, '积分兑换商品接口')
							if (res.data.code == 1) {

								this.$refs.success.showTips({
									msg: '兑换成功',
									duration: 2000
								})

								// this.show=false

								// 用户信息
								let info = {
									"is_whole": "1"
								}
								this.$fn.request('user', 'GET', info).then(res => {
									console.log(res.data.data.money_integral, '用户信息')
									this.info.money_integral = res.data.data.money_integral
									uni.setStorageSync('user_info', res.data.data)
								})
							} else {

								this.$refs.error.showTips({
									msg: res.data.msg,
									duration: 2000
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
			shopDetail(item) {
				uni.setStorageSync('shopDetail', item)
				uni.navigateTo({
					url: '/pages/shopDetail/shopDetail'
				})
			}
		}
	}
</script>

<!-- <style lang="less" src='./shop.less'>

</style> -->

<style lang="less" src='./new.less' scoped>
	.yanse {
		color: red;

	}
</style>