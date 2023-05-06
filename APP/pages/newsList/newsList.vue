<template>
	<view>
		
		<view class="zhengce">
			<image src="../../static/common/ocean.jpg"></image>
		  <view class="zhengce-txt">
		    政策解读
		  </view>
		</view>
		
		<view class="xinwen" v-for="item in 6">
			<view class="left">
				骆歆不主持LPL季后赛有两种可能，第一种就是在赛前的主持排序中没有骆歆，
				<text class="zhuanti">专题</text>既然没有骆歆那她不上场就很正常，不过这种可能性不大
			</view>
			<view class="right dis">
			<image src="../../static/my/jilu.png" mode=""></image>
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
.zhuanti{
	color: red;
	padding-top:10upx ;
	text-align: center;
}
.xinwen{
	width: 100%;
	height: 200upx;
	display: flex;
	
	.left{
		width: 70%;
		height: 100%;
		padding-left: 20upx;
		text-indent: 40upx;
		font-size: 28upx;
	}
	.right{
	   width: 30%;
	   height: 100%;
	   image{
		   width: 160upx;
		   height: 140upx;
	   }
	}
}
.zhengce{
	width: 98%;
	margin: 0 auto;
	height: 200upx;
	position: relative;
	image{
		width: 100%;
		height: 100%;
		border-radius: 20upx;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 0;
	}
  .zhengce-txt {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0%;
    height: 0%;
    z-index: 10;
    text-align: center;
    line-height: 200upx;
    font-size: 44px;
    color: #fff;
    letter-spacing: 25px;
    text-indent: 25px;
    font-weight: 700;
  }
}
</style>
