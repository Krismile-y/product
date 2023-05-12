<template>
	<view class="content">
		<adTabbar>
		    <adTabbarItem text="首页" dataCur="page1" class="maxWidth" @click="navClick" :textColor="curPage=='page1'? '#DF421D':'#9B9B9B'" :icon="'../../static/home' + [curPage=='page1'?'-hover':''] + '.png'"></adTabbarItem>
		    <adTabbarItem text="订单" dataCur="page2" class="maxWidth" @click="navClick" :textColor="curPage=='page2'? '#DF421D':'#9B9B9B'" :icon="'../../static/order' + [curPage=='page2'?'-hover':''] + '.png'"></adTabbarItem>
		    <!--自定义中间View，可以注释掉就是正常4个Tab菜单-->
		    <view class="middleItem" @click="middleClick">
		        <view class="buttonView">+</view>
		        <text>自定义</text>
		    </view>
		    <adTabbarItem text="图表" dataCur="page3" class="maxWidth" @click="navClick" :textColor="curPage=='page3'? '#DF421D':'#9B9B9B'" :icon="'../../static/chart' + [curPage=='page3'?'-hover':''] + '.png'"></adTabbarItem>
		    <adTabbarItem text="我的" dataCur="page4" class="maxWidth" @click="navClick" :textColor="curPage=='page4'? '#DF421D':'#9B9B9B'" :icon="'../../static/my' + [curPage=='page4'?'-hover':''] + '.png'"></adTabbarItem>
		</adTabbar>
	</view>
</template>

<script>
	import adTabbar from '@/components/andy-ADTabbar/andy-ADTabbar.vue';
	import adTabbarItem from '@/components/andy-ADTabbar/andy-ADTabbarItem.vue';
	export default {
		  components: {adTabbar,adTabbarItem},
		data() {
			return {
				title: 'Hello',
				curPage:''
			}
		},
		onLoad() {

		},
		methods: {
navClick(){},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
