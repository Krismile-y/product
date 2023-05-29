<template>
  <view class="tousuyujianyi">
    <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
    <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <!-- 投诉与建议 -->
    <view class="bumen-title">
      <view class="bumen-img">
        <image src="../../static/common/guohui.jpeg" mode="widthFix"></image>
      </view>
      <view class="bumen-title-text">
        <view class="text">
          {{bumenItems[itemIndex]}}
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
        <textarea placeholder-style="color:#ccc" placeholder="在这里输入您的反馈或建议."/>
      </view>
    </view>
    <!-- 联系方式 -->
    <view class="lianxi">
      <view class="lianxi-title">
        您的联系方式
      </view>
      <view class="inputBox">
        <input class="uni-input" maxlength="15" placeholder="手机号码" />
      </view>
      <view class="inputBox">
        <input class="uni-input" maxlength="15" placeholder="邮箱(选填)" />
      </view>
      <view class="ps">
        请留下您的联系方式，以使我们能更方便了解问题以及您的反馈问题结果。
      </view>
      <view class="bot-btn" @tap="tijiao">
        提交建议
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        itemIndex: '',
        bumenItems:[
          '国家发展和改革委员会',
          '国家生态环境部',
          '国家住房和城乡建设部',
          '国家林业和草原局',
          '国家航天局',
          '国家能源局',
          '自然资源部',
        ], //监管部门
        enList: [
          'National Development and Reform Commission',
          'Ministry of Ecology and Environment',
          'Ministry of Housing and Urban-Rural Development',
          'Forestry and Grassland Administration',
          'National space administration',
          'National Energy Administration',
          'Department of Natural Resources',
        ]
      };
    },
    onLoad(option) {
      this.itemIndex = option.id
    },
    methods: {
      tijiao() {
        this.$refs.success.showTips({
          msg: '感谢您的建议！',
          duration: 2000
        })
      }
    }
  }
</script>

<style lang="less">
.tousuyujianyi {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 40rpx 32rpx 0rpx;
  .bumen-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bumen-img {
      width: 100rpx;
      height: 100rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .bumen-title-text {
      // flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding-top: 20rpx;
      .text {
        font-size: 54rpx;
        color: darkred;
        font-weight: 600;
        line-height: 54rpx;
        margin-bottom: 10rpx;
      }
      .en-text {
        font-size: 20rpx;
        color: darkred;
        font-weight: 400;
      }
    }
  }
  .yijian {
    width: 100%;
    height: 500rpx;
    box-sizing: border-box;
    border-radius: 25rpx;
    padding: 32rpx;
    margin-top: 16rpx;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .yijian-title {
      font-size: 26rpx;
      height: 30rpx;
      line-height: 30rpx;
      color: #666;
      margin-bottom: 10rpx;
    }
    .textarea-box {
      flex: 1;
      /deep/ uni-textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #666;
      }
    }
  }
  .lianxi {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 32rpx 32rpx;
    border-radius: 25rpx;
    margin-top: 30rpx;
    .lianxi-title {
      color: #666;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .inputBox {
      width: 100%;
      height: 64rpx;
      margin: 20rpx 0;
      border-radius: 20rpx;
      border: 1px solid #ccc;
      /deep/ .uni-input {
        width: 100%;
        height: 100%;
        line-height: 64rpx;
        text-indent: .5em;
      }
    }
    .ps {
      color: #666;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .bot-btn {
      width: 100%;
      height: 80rpx;
      background: #02AE71;
      border-radius: 100rpx;
      margin: 16rpx auto 0;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 80rpx;
      text-align: center;
    }
  }
}
</style>
