<template>
  <view>
    <web-view :src="urlData" :update-title="false"></web-view>
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
