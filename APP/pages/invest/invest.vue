<template>
	<view class="content" style="min-height: 120vh; padding-bottom: 100upx;">
		<!-- 客服 -->
		<view class="">
			<airel-floatball />
		</view>
		
		<!-- <mstabs :list="list2" v-model="active2" :lineAnimated="false"></mstabs> -->
		 
		
		
		<!-- 标题栏 -->
		<scroll-view scroll-x="true"  scroll-with-animation
			style="width: 95%;height: 90upx;white-space: nowrap;margin-top: 50upx;margin: 60upx auto;" :scroll-left="left">
			<view class="item " v-for="(item,index) in list" :key="index"
				@tap="bian(index,item.id)">
				<view class="boxs disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 单个产品 -->
		<view class="items" v-for="(item,index) in goods_list">
			<image :src="item.head_img"></image>
			<view class="tit">{{item.goods_name}}</view>
			<view class="touzimin">最低投资：</view>
			<view class="buy">
				<view class="left">￥{{item.goods_money}}</view>
				<view class="right" @tap="go(item.id)">
					认购
					<!-- <view class="pay dis" @tap="go(item.id)">认购</view> -->
				</view>
			</view>
		</view>
		<u-empty text="此分类暂时没有数据" mode="order" v-show="kong"></u-empty>


		<view class="bottom-box">
			<helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
		</view>

	</view>
</template>

<script src='./invest.js'>

</script>

<style lang="less" src='./invest.less' scoped>

</style>