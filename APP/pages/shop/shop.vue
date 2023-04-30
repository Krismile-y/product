<template>
	<view class="content" style="">

		<!-- 弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" round="60">
				<view class="popup " style="margin-top: 50px;">
					<scroll-view scroll-y="true" style="width: 100%;height: 100%; ">
						<view class="shopDetail">
							<view style="background-color: #fff; padding-bottom: 30upx;">
								<image
									:src="item.head_img">
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

							<view class="btn dis" @tap='duihuan'>
								兑换
							</view>

						</view>
					</scroll-view>
				</view>
			</u-popup>

		</view>

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
			<view class="shop disc" v-for="item in list" @tap="go(item)">
				<image @tap="show=true"
					:src="item.head_img"
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
				out:0,
				item: {}, //商品对象
				show: false,
				list: [], //商品列表
				info:{},//用户信息
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
			uni.pageScrollTo({
				duration: 100,
				scrollTop: 120,
			})
			
			this.info=uni.getStorageSync('user_info')
			if (uni.getStorageSync('name') == 'shop') {
				this.$store.state.one = true
				this.$store.state.two = true
				this.$store.state.three = false
				this.$store.state.four = true
			}
		},
		onLoad() {
			// 积分兑换商品列表
			let wares = {}
			this.$fn.request('wares/list', "GET", wares).then(res => {
				console.log(res.data.data.data, '积分兑换商品列表')
				this.list = res.data.data.data
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
			duihuan() {
				// 积分下单
				console.log(uni.getStorageSync('address'))
				let data = {
					wid: this.item.id,
					aid: uni.getStorageSync('address').id,
				}
				this.$fn.request('wares/order', "POST", data).then(res => {
					// console.log(res.data.msg, '积分兑换商品接口')
					if (res.data.code == 1) {
						uni.showToast({
							duration: 1000,
							title: '兑换成功'
						})
						this.show=false	
					}else{
						uni.showToast({
							duration: 1000,
							title: res.data.msg,
							icon:'error'
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
			}
		}
	}
</script>

<style lang="less" src='./shop.less'>

</style>