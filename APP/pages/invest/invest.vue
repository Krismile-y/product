<template>
	<view class="content" style="padding-top: 70upx;">
		
		<navs></navs>
		
		<scroll-view scroll-x="true" style="width: 100%;height: 90upx;white-space: nowrap;">
			<view class="item " v-for="(item,index) in list" :key="index" @tap="bian(index)">
				<view class="box disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item}}</view>
					<view class="line" v-show="currentIndex==index?true:false"></view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 单个产品 -->
		<view class="items" v-for="item in 4">
			<image src="https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681232400&t=8eebeeb6082aee907cfaab7836e6d768"></image>
		    <view class="tit">测试产品</view>
			<view class="buy">
				<view class="left">最低投资：298</view>
				<view class="right">
					<view class="pay dis" @tap="go(0)">认购</view>
				</view>
			</view>
		</view>
		
		<bottom></bottom>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0,
				list:[
					'生态修复重大工程','中国绿色发展基金','title3','title4','title5','title6',
				]
			};
		},
		methods:{
			bian(index){
				this.currentIndex=index
			},
			go(index){
				uni.navigateTo({
					url:'/pages/investDetail/investDetail?id='+index
				})
			}
		}
	}
</script>

<style lang="less" src='./invest.less' scoped>

</style>
