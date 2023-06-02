<template>
  <view class="shouyijieshao">
    <view class="shouyibiao">
      <image src="../../static/c/shouyitu.png" mode=""></image>
    </view>
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
  background-image: url('../../static/c/shouyi-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 340rpx 0 0;
  .shouyibiao {
    width: 632rpx;
    height: 574rpx;
    margin: 0 auto;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
