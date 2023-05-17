<template>
	<view class="shopDetail">
		<image :src="item.head_img"  style="width: 750upx;height: 750upx;margin: 0 auto;border-radius: 20upx;" mode="widthFix"></image>
		<view class="shopInfo">
			<view class="frist">
				<view>{{item.wares_money}}</view>
				<view  style="font-size: 28upx;margin-left: 10upx;padding-top: 10upx;">积分</view>
			</view>
			<view class="detail">{{item.wares_name}}</view>
			<view class="lvse">
				<view class="zi">
					绿色商品
				</view>
			</view>
		</view>
		
		<view class="duihuan disc">
			<view class="title">
				<view class="shu"></view>
				商品介绍
			</view>
			
			<image :src="item.head_img"  style="width: 686upx;height: 678upx;margin-top: 30upx;border-radius: 20upx;"></image>
			<view class="btn dis">
				<view class="font" @tap="duihuan">
					立即兑换
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{}
			};
		},
		onLoad() {
			this.item=uni.getStorageSync('shopDetail')
			console.log(this.item)
		},
		methods:{
			duihuan() {
				let addressID=''  //默认地址id
				// 获取默认地址
				this.$fn.request('my_address',"POST",{'default':'1'}).then(r=>{
					console.log(r.data.data,'地址')
						if(r.data.data.length == 0){
							uni.showToast({
								duration:1000,
								icon:"none",
								title:'您还未添加默认地址'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/address/address'
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
									this.show=false
										uni.pageScrollTo({
											duration: 100,
											scrollTop: 120,
										})
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
		}
		
	}
</script>

<style lang="less" src='./shopDetail.less'>

</style>
