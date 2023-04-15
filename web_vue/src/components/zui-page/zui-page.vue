<template>
  <div class="zui-page">
    <template v-if="loading">
      <!-- 需要显示loading -->
      <transition name="page-fade">
        <div v-show="ready" class="zui-body">
          <slot></slot>
        </div>
      </transition>
    </template>
    <!-- 不需要显示loading -->
    <template v-else>
      <div class="zui-body">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ZuiPage',
  props: {
    // 是否显示loading
    loading: {
      type: Boolean,
      default: true,
    },
    // loading 类型
    loadingType: {
      type: String,
      default: 'dot',
    },
  },
  data() {
    return {
      ready: false,
    };
  },
  created() {
    // 显示loading
    this.loading && this.$pageLoading(this.loadingType);
  },
  methods: {
    // 执行this.$pageLoading.hide()时自动执行
    onReady() {
      this.ready = true;
    },
  },
};
</script>
<style lang="stylus" scoped>
.zui-page
  height 100%
  display flex
  flex-direction column
.zui-body
  flex 1
  overflow hidden
  // 淡入
.page-fade-enter-active
  animation fade-in 0.2s
@keyframes fade-in
  0%
    opacity 0
  100%
    opacity 1
</style>
