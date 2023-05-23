<template>
  <block v-if="position == 'top'">
    <view
      class="tips-class toptips"
      :style="{ backgroundColor: backgroundColor, color: color, fontSize: size + 'rpx' }"
      :class="[show ? 'top-show' : '']"
      >{{ msg }}</view
    >
  </block>
  <block v-else>
    <view class="tips-class toast" :class="[position == 'center' ? 'centertips' : 'bottomtips', show ? 'toast-show' : '']">
      <view class="tips-content" :style="{ backgroundColor: backgroundColor, color: color, fontSize: size + 'rpx' }">{{ msg }}</view>
    </view>
  </block>
</template>

<script>
export default {
  name: 'Tips',
  props: {
    //top bottom center
    position: {
      type: String,
      default: 'top'
    },
    backgroundColor: {
      type: String,
      default: '#4c4c4c'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    size: {
      type: [String, Number],
      default: 30
    }
  },
  data() {
    return {
      timer: null,
      show: false,
      msg: '无法连接到服务器~'
    }
  },
  methods: {
    showTips: function (options) {
      const { duration = 2000 } = options
      clearTimeout(this.timer)
      this.show = true
      // this.duration = duration < 2000 ? 2000 : duration;
      this.msg = options.msg
      this.timer = setTimeout(() => {
        this.show = false
        clearTimeout(this.timer)
        this.timer = null
      }, duration)
    }
  }
}
</script>

<style scoped>
.toptips {
  width: 100%;
  padding: 18rpx 30rpx;
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  opacity: 0;
  transform: translateZ(0) translateY(-100%);
  transition: all 0.3s ease-in-out;
}

.top-show {
  transform: translateZ(0) translateY(0);
  opacity: 1;
}

.toast {
  width: 80%;
  box-sizing: border-box;
  color: #fff;
  font-size: 28rpx;
  position: fixed;
  visibility: hidden;
  opacity: 0;
  left: 50%;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-show {
  visibility: visible;
  opacity: 1;
}

.tips-content {
  word-wrap: break-word;
  word-break: break-all;
  border-radius: 8rpx;
  padding: 18rpx 30rpx;
}

.bottomtips {
  bottom: 120rpx;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.centertips {
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
