<template>
	<view class="content" style="">

		<!-- 弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" round='40'>
				<view class="popup">
					<scroll-view scroll-y="true" style="width: 100%;height: 100%;">
						<view class="shopDetail">
							<view style="background-color: #fff; padding-bottom: 30upx;">
								<image
									src="https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800">
								</image>
								<view class="biaoti">
									<view class="left dis">绿色商品</view>
									<text>绿色中国冬日暖心水壶</text>
								</view>
								<view class="tishi">
									温馨提示：冬季暖心必备，家用小型电水壶
								</view>

								<view class="buy dis">
									您可以使用能量兑换商品
								</view>
							</view>

							<view class="de">
								冬季暖心必备，家用小型电水壶
							</view>

							<view class="btn dis">
								兑换
							</view>

						</view>
					</scroll-view>
				</view>
			</u-popup>

		</view>

		<view class="top " v-show="false">
			<view class="list">
				<view class="left">积分</view>

			</view>


		</view>

		<view class="top">
			<view class="shang" v-show="false">
				<!-- <view class="left dis">
					<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" mode=""></image>
				</view> -->
				<view class="center">
					<view class="one">地址：address</view>
					<view class="two">积分:199875</view>
				</view>
				<view class="right dis" style="color: #000;" @tap="sign">
					<view class="shiming dis">立即签到</view>
					<!-- <image   @click="show = true" src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" mode=""></image> -->
				</view>
			</view>

			<view style="width: 100%;height: 100%;display: flex;align-items: flex-end;">
				<view class="xia " style="">
					<view class="boxs ">

						<view class="address disc">
							<view class="zuo">我的积分</view>
							<view class="you " style="margin-top: 20upx;">1888 </view>
						</view>

						<view class="address disc">
							<image src="../../static/common/weizhi.png" mode="" @tap="address"></image>
						</view>

					</view>
				</view>
			</view>

		</view>


		<view class="box" style="margin-top: 60upx;">
			<view class="shop disc" v-for="item in list" @tap="go(item)">
				<image @tap="show=true"
					src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
					mode=""></image>
				<view class="title">{{item.wares_name}}</view>
				<view class="detail">{{item.wares_money}}元</view>
			</view>
		</view>

		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				list:[],//商品列表
			};
		},
		onShow() {
			uni.pageScrollTo({
				duration: 100,
				scrollTop: 120,
			})
			if (uni.getStorageSync('name') == 'shop') {
				this.$store.state.one = true
				this.$store.state.two = true
				this.$store.state.three = false
				this.$store.state.four = true
			}
		},
		onLoad() {
			// 积分兑换商品列表
			let wares={}
			this.$fn.request('wares/list',"GET",wares).then(res=>{
				console.log(res.data.data.data,'积分兑换商品列表')
				this.list=res.data.data.data
			})
			
			
			// 积分兑换商品下单
			// let order={}
			// this.$fn.request('wares/order',"POST",order).then(res=>{
			// 	console.log(res,'积分兑换商品下单')
			// })
			
			
			
		},
		methods: {
			sign() {
				uni.navigateTo({
					url: '/pages/sign/sign'
				})
			},
			go(item) {

				uni.pageScrollTo({
					duration: 100,
					scrollTop: 0,
				})
				console.log(item)
				
				// 积分下单
				let data={
					wid:item.id,
					aid:item.wares_spec,
				}
				this.$fn.request('wares/order',"POST",data).then(res=>{
					console.log(res,'积分兑换商品接口')
					
				})
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
			address(){
				uni.navigateTo({
					url:'/pages/address/address'
				})
			}
		}
	}
</script>

<style lang="less" src='./shop.less'>

</style>