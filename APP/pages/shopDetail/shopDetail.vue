<template>
	<view class="shopDetail">



		<view>
			<airel-floatball />
		</view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<image :src="item.head_img" style="width: 750upx;height: 750upx;margin: 0 auto;border-radius: 20upx;"
			mode="widthFix"></image>
		<view class="shopInfo">
			<view class="frist">
				<view>{{item.wares_money}}</view>
				<view style="font-size: 28upx;margin-left: 10upx;padding-top: 10upx;">积分</view>
			</view>
			<view class="detail">{{item.wares_name}}</view>
			<view class="lvse dis">
				<view class="zi dis">
					绿色商品
				</view>
			</view>
		</view>

		<view class="duihuan disc">
			<view class="title">
				<view class="shu"></view>
				商品介绍
			</view>

			<view class="jieshao-img" v-html="item.content">

			</view>
			<!-- <image :src="item.head_img" style="width: 686upx;height: 678upx;margin-top: 30upx;border-radius: 20upx;">
		   		</image> -->

			<view class="btn dis" @tap="duihuan" v-show="btnSHOW==0?true:false">
				<view class="font">
					{{font}}
				</view>
			</view>

			<view class="btn dis" v-show="btnSHOW==1?true:false">
				<view class="font">
					{{font}}
				</view>
			</view>

		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {},
				addressID: "",
				font: '立即兑换',
				btnSHOW: 0,
			};
		},
		onBackPress(e) {
			// 这里可以自定义返回逻辑，比如下面跳转其他页面

			uni.navigateTo({
				url: '/pages/shop/shop'
			});
			// return true 表示禁止默认返回
			return true
		},
		onLoad(options) {
			this.item = uni.getStorageSync('shopDetail')
			console.log(this.item)

			// 传过来的地址id
			if (options.id) {
				// console.log(typeof options.id)
				this.addressID = options.id
				console.log(this.addressID, '5.15日')
			}
			// this.addressID = options.id
			// 	console.log(this.addressID, '5.15日')
		},

		methods: {
			changeBTN() {

			},
			duihuan() {
				this.font = "兑换中..."
				let addressID = '' //默认地址id
				// ------------------获取默认地址
				this.$fn.request('my_address', "GET", {
					'default': '1'
				}).then(r => {
					// console.log(r.data.data.length)
					this.sub_token = r.data.sub_token

					// console.log(r.data.data.length, '地址')

					//------------------------------有默认地址
					if (r.data.data.length == 1) {
						this.btnSHOW = 1
						console.log('默认地址下单')
						addressID = r.data.data[0].id
						console.log(addressID)
						// 积分下单

						let data = {
							wid: this.item.id,
							aid: addressID,
							sub_token: this.sub_token
						}
						this.$fn.request('wares/order', "POST", data).then(res => {
							// console.log(res.data.msg, '积分兑换商品接口')
							if (res.data.code == 1) {
								this.btnSHOW = 0
								this.font = "立即兑换"
								this.$refs.success.showTips({
									msg: '兑换成功',
									duration: 2000
								})
								//兑换成功跳转到商城首页
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/shop/shop'
									})
								}, 500)
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

								this.font = "立即兑换"
								this.btnSHOW = 0
							}
						})
						return
					}
					//--------------------------------------------没有默认地址的
					else if (r.data.data.length == 0) {
						// ------------------------------已经选择了地址
						if (this.addressID.length > 0) { //
							this.btnSHOW = 1
							console.log('选择了地址下单,', this.sub_token)
							let data = {
								wid: this.item.id.toString(),
								aid: this.addressID.toString(),
								sub_token: this.sub_token
							}
							this.$fn.request('wares/order', "POST", data).then(res => {
								this.sub_token = res.data.sub_token
								// console.log(res.data.msg, '积分兑换商品接口')
								if (res.data.code == 1) {
									this.btnSHOW = 0
									this.font = "立即兑换"
									this.$refs.success.showTips({
										msg: '兑换成功',
										duration: 2000
									})
									//兑换成功跳转到商城首页
									setTimeout(() => {
										uni.navigateTo({
											url: '/pages/shop/shop'
										})
									}, 500)
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
									this.btnSHOW = 0
									console.log('失败')
									this.$refs.error.showTips({
										msg: res.data.msg,
										duration: 2000
									})
									this.font = "立即兑换"
								}
							})

						}
						//-----------------------------------没有选择地址
						else if (this.addressID.length <= 0) {
							console.log(9999)
							this.font = "立即兑换"
							this.$refs.error.showTips({
								msg: '您还没选择地址',
								duration: 2000
							})
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/chooseAddress/chooseAddress'
								})
							}, 1500)



						}
					}

				})


			},
		}

	}
</script>

<style lang="less" src='./shopDetail.less'>

</style>