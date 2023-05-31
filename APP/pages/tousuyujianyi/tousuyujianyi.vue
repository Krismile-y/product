<template>
  <view class="tousuyujianyi">
    <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
    <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <!-- 投诉与建议 -->
    <!-- <view class="bg-bg">
      <image src="../../static/common/fankuiBg.png" mode="widthFix"></image>
    </view> -->
    <view class="head-box">
      <view class="head-back" @click="backTop">
        <image src="../../static/common/fankui-back.png" mode=""></image>
      </view>
      <view class="head-title">
        反馈与建议
      </view>
    </view>
    <view class="bumen-title">
      <view class="bumen-img">
        <image src="../../static/common/guohui.png" mode="widthFix"></image>
      </view>
      <view class="bumen-title-text">
        <view class="text" :style="bumenItems[itemIndex].size">
          {{bumenItems[itemIndex].title}}
        </view>
        <view class="en-text">
          {{enList[itemIndex]}}
        </view>
      </view>
    </view>
    <!-- 反馈或建议输入框 -->
    <view class="yijian">
      <view class="yijian-title">
        您的反馈或建议：
      </view>
      <view class="textarea-box">
        <textarea placeholder-style="color:#ABABAB" placeholder="*在这里输入您的反馈或建议." v-model="jianyiText"/>
      </view>
    </view>
    <view class="ps">
      *请留下您的联系方式，以使我们能更方便了解问题以及您的反馈结果
    </view>
    <!-- 联系方式 -->
    <view class="lianxi">
      <view class="lianxi-title">
        您的联系方式
      </view>
      <view class="inputBox">
        <input class="uni-input" placeholder-style="color:#ABABAB;" maxlength="15" type="number" placeholder="*请输入手机号码" v-model="phone" />
      </view>
      <view class="inputBox">
        <input class="uni-input" placeholder-style="color:#ABABAB;" type="email" maxlength="25" placeholder="请输入邮箱(选填)" />
      </view>
      
      
    </view>
    <view class="bot-btn" @tap="tijiao">
      提交建议
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        itemIndex: '',
        phone: '',
        email: '',
        jianyiText: '',
        bumenItems:[
          {
            title:'国家发展和改革委员会',
            size: {fontSize: '50rpx'},
          },
          {
            title:'住房和城乡建设部',
            size: {fontSize: '60rpx'},
          },
          {
            title:'国家林业和草原局',
            size: {fontSize: '60rpx'},
          },
          {
            title:'生态环境部',
            size: {fontSize: '76rpx'},
          },
          {
            title:'国家航天局',
            size: {fontSize: '76rpx'},
          },
          {
            title:'国家能源局',
            size: {fontSize: '76rpx'},
          },
          {
            title:'自然资源部',
            size: {fontSize: '76rpx'},
          },
        ], //监管部门
        enList: [
          'National Development and Reform Commission',
          'Ministry of Housing and Urban-Rural Development',
          'National Forestry and Grassland Administration',
          'Ministry of Ecology and Environment',
          'National Space Administration',
          'National Energy Administration',
          'Department of Natural Resources',
        ]
      };
    },
    onLoad(option) {
      this.itemIndex = option.id
    },
    methods: {
      // 返回上一页
      backTop() {
        uni.navigateTo({
          url:'/pages/index/index'
        })
      },
      tijiao() {
        if(this.jianyiText=='') {
          this.$refs.error.showTips({
            msg: '未输入建议！',
            duration: 2000
          })
        }else if (this.phone == ''){
          this.$refs.error.showTips({
            msg: '未输入手机号！',
            duration: 2000
          })
        }else {
          this.$refs.success.showTips({
            msg: '感谢您的建议！',
            duration: 2000
          })
        }
        
      }
    }
  }
</script>

<style lang="less">
.tousuyujianyi {
  width: 100%;
  height: 1624rpx;
  box-sizing: border-box;
  padding: 52rpx 32rpx 0rpx;
  background-image: url('../../static/common/fankuiBg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .head-box {
    width: 100%;
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFang SC;
    font-weight: 550;
    position: relative;
    .head-back {
      width: 20rpx;
      height: 34rpx;
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(0,-50%);
      image {
        width: 100%;
        height: 100%;
      }
    }
    .head-title {
      width: 100%;
      text-align: center;
      line-height: 50rpx;
      color: #FFFFFF;
    }
  }
  // position: relative;
  // .bg-bg {
  //   width: 100%;
  //   position: absolute;
  //   top: 0%;
  //   left: 0%;
  //   z-index: 0;
  //   image {
  //     width: 100%;
  //   }
    
  // }
  .bumen-title {
    width: 100%;
    display: flex;
    margin-top: 62rpx;
    margin-bottom: 34rpx;
    justify-content: center;
    align-items: center;
    .bumen-img {
      width: 126rpx;
      height: 116rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .bumen-title-text {
      // flex: 1;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      .text {
        // height: 62rpx;
        // font-size: 50rpx;
        color: #ff0000;
        font-weight: 600;
        margin-bottom: 30rpx;
        // line-height: 72rpx;
      }
      .en-text {
        font-size: 20rpx;
        color: #ff0000;
        text-indent: 6rpx;
        font-weight: 400;
        line-height: 10rpx;
      }
    }
  }
  .yijian {
    width: 100%;
    height: 492rpx;
    box-sizing: border-box;
    border-radius: 25rpx;
    padding: 32rpx;
    margin-top: 16rpx;
    margin-bottom: 30rpx;
    background-color: rgba(255, 255, 255, .9);
    display: flex;
    flex-direction: column;
    .yijian-title {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: 550;
      color: #242831;
      margin-bottom: 10rpx;
    }
    .textarea-box {
      flex: 1;
      /deep/ uni-textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // border: 1px solid #666;
        font-size: 28rpx;
        font-weight: 300;
      }
    }
  }
  .lianxi {
    width: 100%;
    background-color: rgba(255, 255, 255, .9);
    box-sizing: border-box;
    padding: 32rpx 32rpx;
    border-radius: 25rpx;
    .lianxi-title {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: 550;
      color: #242831;
      margin-bottom: 10rpx;
    }
    .inputBox {
      width: 100%;
      height: 64rpx;
      margin: 20rpx 0;
      // border-radius: 20rpx;
      // border: 1px solid #ccc;
      /deep/ .uni-input {
        width: 100%;
        height: 100%;
        line-height: 64rpx;
        text-indent: .5em;
        font-weight: 300;
        font-size: 28rpx;
      }
    }
  }
  .ps {
    color: #666;
    font-size: 20rpx;
    font-weight: 300;
    color: #FFFFFF;
  }
  .bot-btn {
    width: 100%;
    height: 80rpx;
    background: #02AE71;
    border-radius: 100rpx;
    margin: 196rpx auto 0;
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 80rpx;
    text-align: center;
  }
}
</style>
