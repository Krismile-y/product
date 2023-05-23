<template>
	<view class="help-page">
    <airel-floatball  />
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <image src="../../static/common/back.png" mode="widthFix" class="back-img" @tap="back"></image>
		<image src="../../static/common/forest.jpg" mode="widthFix" class="help-img"></image>
    <view class="help-title">
      反馈与帮助
    </view>
    <view class="form">
      <view class="uni-title uni-common-pl">{{txt}}</view>
    </view>
    <view class="bottom dis zbottom">
    	<view class="in dis" @tap="tuichu">
    		联系客服
    	</view>
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
		    msg: '感谢您的反馈',
		    duration: 2000
		  })
      	// uni.navigateTo({
      	// 	url:'/pages/login/login'
      	// })
      },
      back() {
        // uni.navigateTo({
        // 	url:'/pages//setting/setting'
        // })
        uni.navigateBack()
      }
    }
	}
</script>

<style lang="less">
.help-page {
  height: 100vh;
  border-radius: 50upx 50upx 0 0;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  .back-img {
    width: 50upx;
    height: 50upx;
    position: absolute;
    z-index: 999;
    top: 20upx;
    left: 20upx;
    border-radius: 50%;
    background-color: #fff;
  }
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
    border-radius: 50upx 50upx 0 0;
  }
  /deep/ uni-textarea {
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-top: 20upx;
  }
  /deep/ .uni-common-pl {
    margin-top: 120upx;
    font-size: 20px;
    text-indent: 2em;
    box-sizing: border-box;
    padding: 0 16upx;
    text-align: justify;
    line-height: 40px;
  }
  .zbottom {
    z-index: 999;
  }
}
image{
	width: 100%;
}
</style>
