<template>
  <view class="help-page">
    <image src="../../static/common/back.png" mode="widthFix" class="back-img" @tap="back" v-show="showBack"></image>
  	<image :src="imgUrl" mode="widthFix" class="help-img"></image>
    <view class="help-title" v-html="title"></view>
    <view class="form">
      <slot></slot>
    </view>
    <!-- <view class="bottom dis zbottom">
    	<view class="in dis" @tap="tuichu">
    		联系客服
    	</view>
    </view> -->
  </view>
</template>

<script>
  // const defaultBg = require('../../static/common/defaultBg.png')
  import defaultBg from '../../static/common/defaultBg.png'
  export default {
    props: {
      title: {
        type: String,
        default:'标题文字'
      },
      imgUrl: {
        default: defaultBg
      },
      showBack: {
        type: Boolean,
        default: true
      },
      pageName: {
        type: String,
        default: ''
      }
    },
  	data() {
  		return {
  			txt: '如果您有什么问题或者建议，可以点击下方按钮，我们的客服会积极的与您沟通。',
  		};
  	},
    methods: {
      tuichu(){
      	// uni.removeStorageSync('token');
      	// uni.removeStorageSync('address');
        uni.showToast({
          icon:'success',
          title:"感谢您的反馈"
        })
      	// uni.navigateTo({
      	// 	url:'/pages/login/login'
      	// })
      },
      back() {
        if(this.pageName == '') {
          uni.navigateBack()
        }else {
          uni.navigateTo({
            url: `/pages/${this.pageName}/${this.pageName}`
          })
        }
      }
    }
  }
</script>

<style lang="less">
  .help-page {
    width: 100%;
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
      top: 3%;
      left: 5%;
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
      max-height: 400upx;
      min-height: 400upx;
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