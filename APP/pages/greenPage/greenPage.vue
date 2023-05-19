<template>
	<view v-html="info">
		<airel-floatball  />
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
