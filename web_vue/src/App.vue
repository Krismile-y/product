<template>
  <div id="app">
    <router-view class="root-router" />
  </div>
</template>

<script>

export default {
  mounted() {
    // 获取购物车数量
    // this.$store.dispatch('getShopcartCount');
    // // 获取用户信息
    // this.$store.dispatch('getUserInfo');
    // this.$store.commit('setWechatUrl', location.href);
  },
};
</script>
