<template>
	<view class="msg">
		
		<view class="item"  @tap="go(0)">
			<!-- <view class="left dis">
				<image src="../../static/my/xitongtongtongzhi.png" mode=""></image>
			</view> -->
			<view class="right ">
				<view class="tit">系统通知</view>
				<view class="de">
					官方系统消息通知,请注意查看!
				</view>
			</view>
		</view>
		
		<view class="item" @tap="go(1)">
			<!-- <view class="left dis"  >
				<image src="../../static/my/zuixinhuodong.png" mode=""></image>
			</view> -->
			<view class="right ">
				<view class="tit">最新活动</view>
				<view class="de">
					官方活动消息通知,请注意查看!
				</view>
			</view>
		</view>
		
		<view class="item" @tap="go(2)">
			<!-- <view class="left dis"  >
				<image src="../../static/my/pingtaigonggao.png" mode=""></image>
			</view> -->
			<view class="right ">
				<view class="tit">平台公告</view>
				<view class="de">
					最新平台通知,请注意查看!
				</view>
			</view>
		</view>
		
		<view class="item"  @tap="go(3)">
			<!-- <view class="left dis">
				<image src="../../static/my/zhanneixin.png" mode=""></image>
			</view> -->
			<view class="right ">
				<view class="tit">站内信</view>
				<view class="de">
					关于绿色中国
				</view>
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
			go(index){
				uni.navigateTo({
					url:'/pages/msgCenter/msgCenter?id='+index
				})
			}
		}
	}
</script>

<style lang="less">
.msg{
	
}
.item{
	height: 200upx;
	width: 95%;
	margin: 30upx auto;
	border: 1upx solid #cccccc;
	border-radius: 20upx;
	box-shadow:4px 4px 15px #cccccc;
	display: flex;
	.left{
		width: 30%;
		height: 100%;
		image{
			width: 90upx;
			height: 90upx;
			border-radius: 50%;
			// background-color: #383838;
		}
	}
	.right{
		padding-left: 60upx;
		width: 70%;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-size: 32upx;
		.tit{
			color: #bfbfbf;
		}
		.de{
			margin-top: 20upx;
			
		}
	}
}
</style>
