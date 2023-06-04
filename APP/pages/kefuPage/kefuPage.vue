<template>
  <view>
    <web-view :src="url" :update-title="false"></web-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        url: ''
      };
    },
    onLoad() {
      this.url = uni.getStorageSync('kefu')
    }
  }
</script>

<style lang="less">

</style>
