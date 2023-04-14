<template>
	<view class="tops">
		<view class="fanhui dis" v-show="types.name=='type1'?true:false">
			<image src="../../static/common/fanhui.png" mode=""></image>
			<view class="title">登录</view>
		</view>
		<view class="center">
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"tops",
		data() {
			return {
				
			};
		},
		props:{
			types:{
				type:Object
			}
		}
	}
</script>

<style lang="less">

</style>