<template>
	<view class="address">
		
		<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 300upx);">
			<view class="item" v-for="item in 4">
				<view class="pos dis">
					<image src="../../static/common/xiugai.png" mode=""></image>
				</view>
				<view class="left dis">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="right">
					<view class="title">
						<view class="name">唐尼</view>
						<view class="phone">987654321552</view>
						<view class="moren dis">默认</view>
					</view>
					<view class="detail">
						美股迈阿密风云数据是开始几点开始金克斯金克斯的会计师考试
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom dis">
			<view class="in dis" @tap="add" >
				新增地址 +
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			add(){
				uni.navigateTo({
					url:'/pages/addressDetail/addressDetail'
				})
			}
		}
	}
</script>

<style lang="less" src='./address.less'>

</style>
