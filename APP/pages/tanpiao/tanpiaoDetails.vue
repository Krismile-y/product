<template>
  <view class="tanpiaoDetails">
    <view class="">
      <airel-floatball  />
    </view>
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <image src="../../static/index/senlin.jpg" mode=""></image>
    <view class="tp">
      “碳票”就是林地林木碳减排量收益权的凭证，相当于一片森林的固碳释氧功能作为资产交易的“身份证”。形象地说，一片林子每年吸收多少吨二氧化碳、释放多少吨氧气，经第三方机构监测核算、专家审查、林业和相关部门审定，最终制发具有收益权的凭证。该凭证被赋予交易、质押、兑现、抵消等权能。
    </view>
  </view>
</template>

<script>
</script>

<style lang="less">
  .tanpiaoDetails {
    width: 100%;
    height: 100vh;
    image {
      width: 100%;
      height: 500rpx;
    }
    .tp {
      width: 100%;
      box-sizing: border-box;
      padding: 0 32rpx;
      text-indent: 2em;
      font-size: 36rpx;
      line-height: 60rpx;
    }
  }
</style>