<template>
	<view class="msg">
		
		<scroll-view scroll-y="true" style="width: 100%;height: 100vh;">
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   
		   <view class="newBox" @tap="go(0)">
		   	<view class="shang">
		   		<image src="./one.png" mode=""></image>
		   		系统通知
		   	</view>
		   	<view class="xia">
		   		<view class="none dis">
		   			<view class="yuan" v-if="one == 1?true:false"></view>
		   		</view>
		   		官方系统消息通知,请注意查看!
		   		<view class="pos dis">
		   			<image src="./right.png" mode=""></image>
		   		</view>
		   	</view>
		   </view>
		   
		   
		   <view class="newBox" @tap="go(1)">
		   	<view class="shang">
		   		<image src="./two.png" mode=""></image>
		   		最新活动
		   	</view>
		   	<view class="xia">
		   		<view class="none dis">
		   			<view class="yuan" v-if="two == 1?true:false"></view>
		   		</view>
		   		官方活动消息通知,请注意查看!
		   		<view class="pos dis">
		   			<image src="./right.png" mode=""></image>
		   		</view>
		   	</view>
		   </view>
		   
		   <view class="newBox" @tap="go(2)">
		   	<view class="shang">
		   		<image src="./three.png" mode=""></image>
		   		平台公告
		   	</view>
		   	<view class="xia">
		   		<view class="none dis">
		   			<view class="yuan" v-if="three == 1?true:false"></view>
		   		</view>
		   		最新平台通知,请注意查看!
		   		<view class="pos dis">
		   			<image src="./right.png" mode=""></image>
		   		</view>
		   	</view>
		   </view>
		   
		   
		   <view class="newBox" @tap="go(2)">
		   	<view class="shang">
		   		<image src="./four.png" mode=""></image>
		   		站内信
		   	</view>
		   	<view class="xia">
		   		<view class="none dis">
		   			<view class="yuan" v-if="four == 1?true:false"></view>
		   		</view>
		   		关于绿色中国
		   		<view class="pos dis">
		   			<image src="./right.png" mode=""></image>
		   		</view>
		   	</view>
		   </view>
		   	   
		   <view><airel-floatball /></view>
		  </scroll-view>
		
		
	</view>
</template>

<script>
	//使用HBuilderX导入插件
	import Tips from '@/uni_modules/bluestar-Tips/components/bluestar-Tips/bluestar-Tips.vue'
	export default {
		onReady() {
			// this.$refs.success.showTips({
			//    msg: '成功消息提示',
			//    duration: 2000
			//  })

			//  this.$refs.error.showTips({
			//     msg: '失败消息提示',
			//     duration: 2000
			//   })
		},
		components: {
			Tips
		},
		data() {
			return {
              one:'',
			  two:'',
			  three:"",
			  four:""
			};
		},
		onLoad() {
			this.$fn.request('notice', "GET", {"type":"4"}).then(res => {
				console.log(res.data.data[0].new,'系统通知')
				if(res.data.data[0].new){
					this.one=res.data.data[0].new
				}
			    
			})
			
			this.$fn.request('notice', "GET", {"type":"5"}).then(res => {
				console.log(res.data.data[0].new,'系统通知')
				if(res.data.data[0].new){
				  this.two=res.data.data[0].new	
				}
			     
			})
			
			this.$fn.request('notice', "GET", {"type":"6"}).then(res => {
				console.log(res.data.data[0].new,'平台公告')
			     
				 if(res.data.data[0].new){
					this.three=res.data.data[0].new 
				 }
			})
			this.$fn.request('notice', "GET", {"type":"7"}).then(res => {
				console.log(res.data.data[0].new,'站内信')
				if(res.data.data[0].new){
					 this.four=res.data.data[0].new
				}
			    
			})
		},
		methods: {
			go(index) {
				uni.navigateTo({
					url: '/pages/msgCenter/msgCenter?id=' + index
				})
			},

		}
	}
</script>

<style lang="less">
	.newBox {
		margin: 30upx auto;
		width: 686upx;
		height: 146upx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		box-sizing: border-box;
		color: #242831;

		.shang {
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 550;
			width: 100%;
			height: 50%;
			border-bottom: 1upx solid #EFEFEF;
			display: flex;
			align-items: center;

			image {
				width: 28upx;
				height: 26upx;
				margin-left: 30upx;
				margin-right: 20upx;
			}
		}

		.xia {
			width: 100%;
			height: 50%;
			display: flex;
			align-items: center;
			position: relative;

			.none {
				height: 100%;
				width: 76upx;

				.yuan {
					background-color: red;
					width: 10upx;
					height: 10upx;
					margin-left: 10upx;
					border-radius: 50%;
				}
			}

			.pos {
				width: 100upx;
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;

				image {
					width: 15upx;
					height: 15upx;
				}
			}
		}
	}

	.msg {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 41rpx 24rpx 0;
	}

	.item {
		height: 216upx;
		width: 100%;
		background: #FFFFFF;
		border-radius: 16rpx;
		box-sizing: border-box;
		padding: 24rpx;
		margin-bottom: 24rpx;

		.right {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.tit {
				font-size: 32rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 550;
				color: #272727;
				margin-bottom: 15rpx;
			}

			.de {
				flex: 1;
				// width: 100%;
				// height: 100%;
				background: #F7F8FA;
				border-radius: 8rpx;
				box-sizing: border-box;
				padding: 16rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;

				.text {
					width: 100%;
					height: 100%;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #272727;
					line-height: 38rpx;
				}
			}
		}
	}
</style>