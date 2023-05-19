<template>
	<view class="msg">
		
		<view class="item"  @tap="go(0)">
			<!-- <view class="left dis">
				<image src="../../static/my/xitongtongtongzhi.png" mode=""></image>
			</view> -->
			<view class="right ">
				<view class="tit">系统通知</view>
				<view class="de">
					官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!官方系统消息通知,请注意查看!
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
					<view class="text">
					  官方活动消息通知,请注意查看!
					</view>
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
	width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 41rpx 24rpx 0;
}
.item{
	height: 216upx;
	width: 100%;
	background: #FFFFFF;
	border-radius: 16rpx;
  box-sizing: border-box;
  padding: 24rpx;
  margin-bottom: 24rpx;
	.right{
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
