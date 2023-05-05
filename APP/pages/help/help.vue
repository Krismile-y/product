<template>
	<view class="help-page">
		<image src="../../static/common/forest.jpg" mode="widthFix"></image>
    <view class="form">
      <view class="uni-title uni-common-pl">如果您有什么问题或者建议，可以在下方输入内容，我们会积极采纳您的反馈。</view>
      <view class="uni-textarea">
        <textarea placeholder-style="color:#ccc" placeholder="请输入反馈内容"/>
      </view>
    </view>
    <view class="bottom dis">
    	<view class="in dis" @tap="tuichu">
    		提交反馈
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
    methods: {
      tuichu(){
      	uni.removeStorageSync('token');
      	// uni.removeStorageSync('address');
        uni.showToast({
          icon:'success',
          title:"感谢您的反馈"
        })
      	// uni.navigateTo({
      	// 	url:'/pages/login/login'
      	// })
      }
    }
	}
</script>

<style lang="less">
.help-page {
  height: 100vh;
  background-color: #eee;
  /deep/ uni-textarea {
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-top: 20upx;
  }
  /deep/ .uni-common-pl {
    font-size: 16px;
    text-indent: 2em;
  }
}
image{
	width: 100%;
}
</style>
