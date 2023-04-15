<template>
  <transition name="menu-fade">
    <div class="select-wrapper" v-show="value">
      <transition name="menu-item-slide">
        <div class="select-menu border-top-1px" v-show="value">
          <slot></slot>
        </div>
      </transition>
      <div @click="$emit('input', false)" class="select-mask"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(newValue) {
      if (!newValue) {
        setTimeout(() => {
          this.$emit('closed');
        }, 300);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.select-wrapper
  position absolute
  z-index 99
  top 44px
  left 0
  right 0
  bottom 0
  overflow hidden
.select-menu
  position absolute
  z-index 9
  top 0
  left 0
  right 0
  font-size 14px
  min-height 250px
  background-color #fff
.select-mask
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background-color #25262d
  opacity 0.4
// 动画
.menu-fade
  &-enter-active
    animation 0.3s zui-fade-in
  &-leave-active
    animation 0.2s zui-fade-out
@keyframes zui-fade-in
  from
    opacity 0
@keyframes zui-fade-out
  to
    opacity 0
.menu-item-slide
  &-enter-active
    animation zui-slide-up-enter 0.3s both
  &-leave-active
    animation zui-slide-up-leave 0.3s both
@keyframes zui-slide-up-enter
  from
    opacity 0.4
    transform scale(0.9) translate3d(0, -8%, 0)
    transform-origin top
@keyframes zui-slide-up-leave
  to
    opacity 0.4
    transform scale(0.9) translate3d(0, -8%, 0)
    transform-origin top
</style>
