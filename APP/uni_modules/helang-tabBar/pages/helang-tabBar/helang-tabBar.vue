<template>
	<view>
		<view class="preview" style="background-color: #82a9f2;">
			<view class="title">翻滚效果</view>
			<helang-tab-bar-roll :fixed-bottom="false"></helang-tab-bar-roll>
		</view>
		
		<view class="preview" style="background-color: #313131;">
			<view class="title" style="margin-bottom: 30px;">冒泡效果</view>
			<helang-tab-bar-bubble :fixed-bottom="false"></helang-tab-bar-bubble>
		</view>
		
		<view class="preview" style="background-color: #b49df9;">
			<view class="title">翻转效果</view>
			<helang-tab-bar-overturn :fixed-bottom="false"></helang-tab-bar-overturn>
		</view>
		
		<view class="preview" style="background-color: #efedee;">
			<view class="title" style="margin-bottom: 30px;color: #333;">凸起舵式切换效果</view>
			<helang-tab-bar-bulge :fixed-bottom="false"></helang-tab-bar-bulge>
		</view>
		
		<view class="preview" style="background-color: #f4614e;">
			<view class="title" style="margin-bottom: 30px;">窗帘下拉效果</view>
			<helang-tab-bar-curtain :fixed-bottom="false"></helang-tab-bar-curtain>
		</view>
	</view>
</template>

<script>
	import tabBarRoll from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-roll";
	import tabBarBubble from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bubble";
	import tabBarOverturn from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-overturn";
	import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
	import tabBarCurtain from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-curtain";
	
	export default {
		components: {
			"helang-tab-bar-roll": tabBarRoll,
			"helang-tab-bar-bubble": tabBarBubble,
			"helang-tab-bar-overturn": tabBarOverturn,
			"helang-tab-bar-bulge": tabBarBulge,
			"helang-tab-bar-curtain": tabBarCurtain
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.preview{
	margin-bottom: 24px;
	padding: 32px 8px;
	
	.title{
		font-weight: 32rpx;
		margin-bottom: 20rpx;
		padding-left: 10px;
		color: #fff;
	}
}
</style>
