<template>
	<view>
		<!-- <view class="box">
			
		</view> -->
    <airel-floatball  />
		<image :src="herf" mode="" style="height: 960upx;width: 100%;"></image>
		
		<!-- #ifdef H5 -->
		<view class="bottom dis" style="bottom: 0;">
			<view class="in dis" >
				<a :href="link" style="color: #fff;">
					点击下载
				</a>
			</view>
		<!-- #endif -->
			
		<!-- #ifdef APP -->
		<view class="bottom dis" style="bottom: 0;">
			<view class="in dis" @tap='down'>
				
					点击下载
				
			</view>
		<!-- #endif -->	
			
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
				// 时间戳
				let times = 0;
				times = new Date()		
				this.link=this.$url+'thigh_down?name='+this.name+'&time='+times
				console.log(this.link,'下载链接')
				console.log(res.data.code)
			})
			// console.log(this.$url+'thigh_down?name='+'10000.png')
		},
		methods:{
			down(){
				uni.downloadFile({
				  url: this.link,
				  success: res => {
				    if (res.statusCode === 200) {
				      uni.saveImageToPhotosAlbum({
				        filePath: res.tempFilePath,
				        success: () => {
				          uni.showToast({
				            title: '保存成功至相册'
				          })
				        },
				        fail: () => {
				          uni.showToast({
				            title: '保存失败',
				            icon: 'none'
				          })
				        }
				      })
				    } else {
				      uni.showToast({
				        title: '下载失败',
				        icon: 'none'
				      })
				    }
				  },
				  fail: () => {
				    uni.showToast({
				      title: '下载失败',
				      icon: 'none'
				    })
				  }
				})
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
