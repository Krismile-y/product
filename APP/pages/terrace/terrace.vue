<template>
	<view>
    <airel-floatball  />
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<image :src="img" mode=""></image>
		<view style="width: 90%;margin: 30upx auto;">
			
			<view v-html="content"></view>
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:'',
				img:''
			};
		},
		onLoad() {
			//平台攻略接口
			this.$fn.request('introduction','GET',{}).then(res=>{
				console.log(res.data.data.thumb_url)
				this.content=res.data.data.content
				this.img=res.data.data.thumb_url
			})
		},
	}
</script>

<style lang="less">
image{
	width: 100%;
}
</style>
