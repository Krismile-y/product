<template>
  <view>
    <web-view style="padding-bottom: 20rpx;" :src="urlData" :update-title="false"></web-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        urlData: ''
      };
    },
    onLoad() {
      this.urlData = uni.getStorageSync('kefu')
      console.log(this.urlData);
    }
  }
</script>

<style lang="less">

</style>
