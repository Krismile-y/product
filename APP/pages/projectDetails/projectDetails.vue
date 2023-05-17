<template>
  <view class="projectDetails">
    <!-- 项目详情 -->
    <!-- 商品详情图片 -->
    <image class="detailsImg" src="../../static/uni.png" mode=""></image>
    <!-- 商品信息 -->
    <view class="project-content">
      <view class="project-title">
        项目名称
      </view>
      <view class="items">
        <view class="item-left">
          项目规模
        </view>
        <view class="item-right">
          <text class="orange">5000.00</text>万元
        </view>
      </view>
      <view class="items">
        <view class="item-left">
          每日分红
        </view>
        <view class="item-right">
          <text class="orange">1280.00</text>元
        </view>
      </view>
      <view class="items">
        <view class="item-left">
          投资周期
        </view>
        <view class="item-right">
          <text class="orange">7</text>天
        </view>
      </view>
      <view class="items">
        <view class="item-left">
          分红方式
        </view>
        <view class="item-right">
          到期还息
        </view>
      </view>
      <view class="items" style="border-bottom: 0px;">
        <view class="item-left">
          担保机构
        </view>
        <view class="item-right">
          中国人民银行
        </view>
      </view>
    </view>
    <view class="bottom-fixd">
      <view class="bottom-text">
        <text class="qitou">起投金额：</text>
        <text class="orange">￥5000</text>
        <text class="orange small">.00</text>
      </view>
      <view class="bottom-btn" @tap="go">
        马上认购
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
      go() {
        uni.navigateTo({
          url:'/pages/rengou/rengou'
        })
      }
    }
  }
</script>

<style lang="less">
.projectDetails {
  .detailsImg {
    width: 750rpx;
    height: 750rpx;
  }
  .project-content {
    width: 702rpx;
    margin: 24rpx auto;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 16rpx;
    padding: 32rpx 24rpx 0;
    .project-title {
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #272727;
      line-height: 45rpx;
    }
    .items {
      width: 100%;
      height: 102rpx;
      box-sizing: border-box;
      border-bottom: 2rpx solid #E5E5E5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-left {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      .item-right {
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #272727;
        .orange {
          color:#FF5A00;
          margin-right: .2em
        }
      }
    }
  }
  .bottom-fixd {
    width: 100vw;
    height: 180rpx;
    background-color: #fff;
    box-sizing: border-box;
    padding: 22rpx 30rpx 0 48rpx;
    position: relative;
    .bottom-text {
      height: 80rpx;
      vertical-align: baseline;
      .qitou {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      .orange {
        font-size: 48rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #FF5A00;
      }
      .small {
        font-size: 24rpx;
        font-weight: 400;
      }
    }
    .bottom-btn {
      width: 240rpx;
      height: 80rpx;
      background: #FF7700 linear-gradient(90deg, #FE6700 0%, #FE3E2E 100%);
      border-radius: 40rpx;
      color: #fff;
      position: absolute;
      top: 16rpx;
      right: 30rpx;
      text-align: center;
      line-height: 80rpx;
    }
  }
}
</style>
