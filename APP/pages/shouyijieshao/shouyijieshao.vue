<template>
  <view class="shouyijieshao">
    <!-- <view class="">
      <airel-floatball  />
    </view> -->
    <view class="title">
      收益介绍图
    </view>
    <view class="text">
      直接推荐购买得
    </view>
    <view class="text textMargin">
      21%奖励
    </view>
    <view class="text">
      间接推荐购买得
    </view>
    <view class="text textMargin">
      5%
    </view>
    <view class="text">
      次级推荐购买得
    </view>
    <view class="text textMargin">
      2%
    </view>
    <!-- 收益介绍 -->
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
  @import url('../../static/SongTi.css');
.shouyijieshao {
  width: 100%;
  height: 100vh;
  background-image: url('../../static/common/jieshao.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 100rpx 0 0;
  .title,.text {
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 66rpx;
    letter-spacing: .2em;
    font-weight: 600;
    line-height: 80rpx;
    font-family: 'SongTi';
  }
  .title {
    margin-bottom: 60rpx ;
  }
  .text {
    font-size: 54rpx;
  }
  .textMargin {
    margin-bottom: 60rpx;
  }
}
</style>
