<template>
	<view>
		
		<view class="zongshouyi">
			<view class="one disc">
				<view style="color: #fff;">共计获得津贴</view>
				<view style="font-weight: 600;font-size: 42upx;color: #fff;">111</view>
			</view>
			<view class="two disc">
				<view class="t" style="width: 100%;height: 60%;display: flex;">
					<view class="twoItem disc">
						<view>共计直推人数</view>
						<view>666</view>
					</view>
					<view class="twoItem disc">
						<view>共计完成任务</view>
						<view>666</view>
					</view>
				</view>
			</view>
			
		</view>
		
		<!--  -->
		<view style="margin-top: 30upx;">
			<view class="item" v-for="item in 4">
				<view class="font ">
					绿色中国宣传直推30人岗位津贴1500元/月
				</view>
				<view class="btn pink dis">(18/30)领取</view>
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
.zongshouyi{
	height: 300upx;
	width: 684upx;
	margin: 0 auto;
	margin-top: 0upx;
	border: 1upx solid #cccccc;
	border-radius: 30upx;
	background-color: #e5f7f1;
	.one{
		width: 100%;
		height: 40%;
		background-image:url('../../static/newMy/tuoyuan1.png') ;
		background-repeat: no-repeat;
		background-size: 100% auto;
		border-radius: 0 0 26% 26%;
	}
	.two{
		background-image:url('../../static/newMy/juxing.png') ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		 border-radius:30% 30% 0 0 ;
		width: 100%;
		height: 60%;
		.twoItem{
			width: 50%;
			height: 80%;
		}
		.last{
			width: 80%;
			height: 80upx;
			background-color: #07c07e;
			border-radius: 30upx;
			color: #fff;
			
		}
	}
	
}

.item{
	width: 90%;
  height: 160upx;
	margin: 20upx auto;
  box-sizing: border-box;
  padding: 10upx 20upx;
	display: flex;
  flex-direction: column;
	align-items: center;
	position: relative;
  background-image: url('../../static/c/jintie.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
	.font{
		width: 100%;
    text-align: center;
	}
	.btn{
    margin-top: 30upx;
		background-color: #07c07e;
		color: #fff;
		border-radius: 15upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    bottom: 15upx;
    right: 15upx;
	}
  .pink {
    filter: brightness(110%);
    box-shadow: 0 0 5px #fff, 0 0 10upx #fff, 0 0 15upx #fff, 0 0 10upx #fff,
        0 0 10upx #fff, 0 0 40upx #fff, 0 0 10upx #fff, 0 0 15upx #fff;
  }
}
</style>
