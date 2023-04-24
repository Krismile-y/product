<template>
  <view class="container">
    <view class="title">充值</view>
    <view class="input-box">
      <view class="input-title">充值金额：</view>
      <input class="input" type="number" placeholder="请输入充值金额" v-model="amount" />
    </view>
    <view class="input-box">
      <view class="input-title">支付方式：</view>
      <radio-group class="radio-group" v-model="paymentMethod">
        <radio class="radio" value="alipay">支付宝</radio>
        <radio class="radio" value="wechat">微信</radio>
      </radio-group>
    </view>
    <view class="btn" @click="submit">确认充值</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      amount: '',
      paymentMethod: 'alipay',
    };
  },
  methods: {
    submit() {
      // 这里可以添加提交充值请求的代码
      uni.showToast({
        title: '充值成功',
        icon: 'success',
      });
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
}
.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
.input-box {
  display: flex;
  margin-bottom: 20px;
}
.input-title {
  flex: 1;
  font-size: 18px;
  line-height: 32px;
}
.input {
  flex: 2;
  padding: 0 10px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.radio-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.radio {
  width: 120px;
}
.btn {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #007aff;
  color: #fff;
  border-radius: 4px;
}
</style>
