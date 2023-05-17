<template>
  <view class="rengou">
    <!-- 商品详情图片 -->
    <image class="detailsImg" src="../../static/uni.png" mode=""></image>
    <view class="project-title">
      项目名称
    </view>
    <!-- 内容选择 -->
    <view class="check-box">
      <view class="check-num" style="border-bottom:1px solid #E5E5E5 ;">
        <view class="check-title">
          数量：
        </view>
        <u-number-box 
            v-model="value"
            integer
            :min="1"
        ></u-number-box>
      </view>
      <view class="check-day">
        <text class="check-title">选择天数：</text>
        <text class="check-title">请选择</text>
      </view>
      <!-- 因为现在距离够了，不用收起列表，所以常态展开 -->
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: 1,
      };
    }
  }
</script>

<style lang="less">
.rengou {
  width: 100%;
  .detailsImg {
    width: 750rpx;
    height: 750rpx;
  }
  .project-title {
    width:100%;
    margin: 24rpx 0;
    text-indent: 40rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #272727;
  }
  .check-box {
    width: 702rpx;
    margin: 24rpx auto;
    border-radius: 16rpx;
    overflow: hidden;
    .check-num,.check-day {
      width: 702rpx;
      height: 103rpx;
      box-sizing: border-box;
      padding: 0 16rpx;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .check-title {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
    }
  }
  
}
</style>
