<template>
  <div class="number-control">
    <div
      class="reduce"
      :class="{ active: count > 1 }"
      @click.stop="handleClickMinus"
    >
      <i class="iconfont iconjianshao"></i>
    </div>
    <div class="num">{{ count }}</div>

    <div
      class="add "
      :class="{ active: count < max }"
      @click.stop="handleClickPlus"
    >
      <i class="iconfont iconzengjia"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 9999,
    },
  },
  methods: {
    handleClickMinus() {
      if (this.count > 1) {
        this.$emit('minus');
      }
    },
    handleClickPlus() {
      if (this.count < this.max) {
        this.$emit('plus');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.number-control
  display flex
  align-items center
  .num
    font-size 16px
    font-weight 700
    min-width 30px
    text-align center
  .reduce, .add
    padding 5PX
  .iconfont
    font-size 26px
    color #ccc
  .active .iconfont
    color #E89222
</style>
