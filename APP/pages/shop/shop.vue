<template>
	<view class="content" style="padding-top: 70upx;">
		
		<navs></navs>
		
		<view class="top disc">
			<view class="price">
				
					<view class="shang">
						<view class="left">总资产（元）</view>
						<view class="right">当日收益</view>
					</view>
					<view class="shang">
						<view class="left">0.00</view>
						<view class="right">+0.00</view>
					</view>
				   
			</view>
			
			<view class="item">
				<view class="left">可提现收益</view>
				<view class="right">0</view>
			</view>
			<view class="item">
				<view class="left">碳排放量</view>
				<view class="right">0.000002/t</view>
			</view>
			<view class="item">
				<view class="left">碳能量</view>
				<view class="right">0.00/g</view>
			</view>
			
		</view>
		
		<view class="box">
			<view class="shop disc" v-for="item in 6" @tap="go(0)">
				<image src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500" mode=""></image>
				<view class="title">hellow qqq</view>
				<view class="detail">this my name</view>
			</view>	
		</view>
		
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			go(index){
				uni.navigateTo({
					url:'/pages/shopDetail/shopDetail?id='+index
				})
			}
		}
	}
</script>

<style lang="less" src='./shop.less'>

</style>
