<template>
  <div>
    <!-- 动画为 scale 时的遮罩层 -->
    <transition name="zui-fade">
      <div
        v-show="isToggle"
        class="mask-scale"
        :class="{ toggle: isToggle }"
      ></div>
    </transition>
    <div
      class="zui-view-content"
      :class="[animationType, { toggle: isToggle }]"
    >
      <slot></slot>
    </div>

    <!-- 子路由区域 -->
    <transition name="page-move">
      <router-view class="zui-view-sub-page"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'ZuiView',
  inheritAttrs: false,
  props: {
    // 动画类型  move scale
    animationType: {
      type: String,
      default: 'move',
    },
    // 是否显示loading
    loading: {
      type: Boolean,
      default: true,
    },
    // loading 类型  dot  line
    loadingType: {
      type: String,
      default: 'dot',
    },
  },
  created() {
    // 显示loading
    this.loading && this.$pageLoading(this.loadingType);
  },
  computed: {
    // 组件的名字必须跟路由的名字一样
    isToggle() {
      let routeName = this.$route.name || '';
      let comName = this.$parent.$options.name || '';
      if (routeName == comName || routeName.indexOf(comName + '_') == 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.mask-scale
  position fixed
  z-index 10
  top 0
  left 0
  bottom 0
  right 0
  visibility hidden
  background-color rgba(37, 38, 45, 0.5)
  &.toggle
    visibility visible
.zui-view-content
  height 100%
  overflow hidden
  &.move
    transition transform 0.28s
    &.toggle
      transition transform 0.4s
      transform translateX(-20%) translateZ(0)
  &.scale
    transition transform 0.4s
    &.toggle
      transform scale(0.96, 0.98) translateZ(0)
.zui-view-sub-page
  position absolute
  z-index 99
  top 0px
  left 0px
  width 100%
  height 100%
  background #fff
.page-move-enter, .page-move-leave-active
  transform translateX(100%) translateZ(0)
.page-move-enter-active, .page-move-leave-active
  transition transform 0.3s
// 淡入
.zui-fade-enter-active
  animation fade-in 0.4s
.zui-fade-leave-active
  animation fade-out 0.4s
@keyframes fade-in
  0%
    opacity 0
  100%
    opacity 1
@keyframes fade-out
  0%
    opacity 1
  100%
    opacity 0
</style>
