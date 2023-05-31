<template>
  <view class="webview" >
    
    <web-view :src="url" :scroll-x="true" :scroll-y="true" style="height:100%" v-if="url!==''"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  onLoad(options) {
    this.url = options.url
  }
}
</script>

<style>
.webview {
  height: 100%;
}
</style>