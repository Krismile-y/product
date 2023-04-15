<template>
  <!-- 全局提示框 -->
  <div class="fixed-message" v-show="visible">
    <div v-show="visible && type === 'success'" class="success">{{ txt }}</div>
    <div v-show="visible && type === 'fail'" class="fail">{{ txt }}</div>
    <div v-show="visible && type === 'warning'" class="warning">{{ txt }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      txt: '',
      type: '',
    };
  },
  methods: {
    test() {
      console.log('这是测试');
    },
  },
};
</script>

<style scoped>
.fixed-message {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 1.2rem;
}
.fixed-message div {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 1.2rem;
  position: relative;
  top: 0rem;
  animation: message 0.5s ease-in-out;
}

@keyframes message {
  0% {
    top: -1.2rem;
  }
  100% {
    top: 0rem;
  }
}

.success {
  background: green;
}

.fail {
  background: #ee0a24;
}

.warning {
  background: #ff976a;
}
</style>
