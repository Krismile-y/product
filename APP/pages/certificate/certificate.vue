<template>
	<view>
		<!-- <view class="box">
			
		</view> -->
		<image :src="herf" mode="" style="height: 960upx;width: 100%;"></image>
		
		<view class="bottom dis" style="bottom: 0;">
			<view class="in dis" @tap="">
				<a :href="link" style="color: #fff;">
					点击下载
				</a>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				herf:"",
				name:"",
				link:""
			};
		},
		onLoad() {
			this.$fn.request('thigh_image','GET',{}).then(res=>{
				this.name=res.data.data.name
				this.herf=res.data.data.thigh
				this.link=this.$url+'thigh_down?name='+this.name
				console.log(this.link,'下载链接')
			})
			// console.log(this.$url+'thigh_down?name='+'10000.png')
		},
		methods:{
			down(){
				
			}
		}
	}
</script>

<style lang="less">
image{
	width: 100%;
}
.box{
	width: 100%;
	height: 1020upx;
	background-image: url('../../static/common/tanpiao.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
