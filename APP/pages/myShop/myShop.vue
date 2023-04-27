<template>
	<view>
		<view class="box" style="margin-top: 0upx;">
			<view class="shop " v-for="item in list" @tap="go(item)">
				<image @tap="show=true"
					src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
					mode=""></image>
				<view class="font">
					<view class="info">{{item.wares_money}}元</view>
					<view class="info youbian">{{item.status_text}}</view>
				</view>
				<view class="de">{{item.address}}</view>
				
				
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		onLoad() {
			let data={
				
			}
			this.$fn.request('wares/my','GET',data).then(res=>{
				console.log(res.data.data.data)
				this.list=res.data.data.data
			})
		}
	}
</script>

<style lang="less" src='./myShop.less'>

</style>
