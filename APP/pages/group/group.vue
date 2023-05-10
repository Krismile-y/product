<template>
	<view>
		
		<view class="three">
			
			 <view class="one disc">
				 <view class="title">共计获得团队津贴</view>
				 <view class="num">0.00</view>
			 </view>
			 
			 <view class="two">
				 <view class="item disc">
					 <view class="title">共计直推人数</view>
					 <view class="num">0人</view>
				 </view>
				 <view class="item disc">
					 <view class="title">共计完成任务</view>
					 <view class="num">0个</view>
				 </view>
			 </view>
			 
		</view>
		
		<!--  -->
		<view style="margin-top: 30upx;">
			<view class="item" v-for="item in 4">
				<view class="font ">
					绿色中国宣传直推30人岗位津贴1500元/月
				</view>
				<view class="btn dis">领取</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.three{
	width: 90%;
	height: 300upx;
	background-color: red;
	border-radius: 20upx;
	margin: 0 auto;
	color: #fff;
	font-weight: 600;
	.title{
		
	}
	.num{
		margin-top: 1upx;
	}
	.one{
		width: 100%;
		height: 150upx;		
	}
	.two{
		width: 100%;
		height: 150upx;	
		display: flex;
		.item{			
			width: 50%;
			height: 100%;
		}
	}
}
.item{
	width: 90%;
	height: 110upx;
	margin: 0 auto;
	border-bottom: 1upx solid #cccccc;
	display: flex;
	align-items: center;
	position: relative;
	.font{
		width: 90%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.btn{
		width: 100upx;
		height: 50upx;
		background-color: pink;
		color: #fff;
		border-radius: 5upx;
	}
}
</style>
