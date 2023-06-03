<template>
	<view class="help-page">
     <view class="">
       <airel-floatball  />
     </view>
     <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
     <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
      <image src="../../static/common/helpBG.png" mode="widthFix" class="help-img"></image>
     <view class="form">
       <view class="uni-title uni-common-pl">{{txt}}</view>
     </view>
     <view class="bottom" @tap="tuichu">
       联系客服
     </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt: '如果您有什么问题或者建议，可以点击下方按钮，我们的客服会积极的与您沟通。'
			};
		},
    methods: {
      tuichu(){
      	// uni.removeStorageSync('token');
      	// uni.removeStorageSync('address');
        
		this.$refs.success.showTips({
		    msg: '点击客服图标即可联系客服！',
		    duration: 2000
		  })
      	// uni.navigateTo({
      	// 	url:'/pages/login/login'
      	// })
      },
    }
	}
</script>

<style lang="less">
.help-page {
  height: 100vh;
  border-radius: 0;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  .form {
    width: 100%;
    flex: 1;
    border-radius: 50upx 50upx 0 0;
    margin-top: -60upx ;
    background-color: #fff;
    position: relative;
    z-index: 6;
  }
  .help-title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 32px;
    color: #fff;
    font-weight: 600;
  }
  .help-img {
    border-radius: 0;
  }
  /deep/ .uni-common-pl {
    width: 638rpx;
    margin: 60rpx auto;
    font-size: 32rpx;
    box-sizing: border-box;
    padding: 0 16upx;
    text-align: justify;
    line-height: 60rpx;
  }
  .bottom {
    width: 686rpx;
    height: 76rpx;
    position: absolute;
    bottom: 100rpx;
    left: 50%;
    text-align: center;
    line-height: 76rpx;
    transform: translate(-50%,0);
    background: #02AE72;
    font-weight: 550;
    color: #FFFFFF;
    font-size: 32rpx;
    border-radius: 58rpx 58rpx 58rpx 58rpx;
    opacity: 1;
    z-index: 999;
  }
}
image{
	width: 100%;
}
</style>
