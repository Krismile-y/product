<template>
	<view v-html="info">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:''
			};
		},
		onLoad() {
			this.info=uni.getStorageSync('gongyijinzhan')
		},
	}
</script>

<style lang="less">

</style>
