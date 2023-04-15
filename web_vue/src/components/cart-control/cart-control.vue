<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="cart-decrease"
        v-show="goods.quantity > 0"
        @click.stop.prevent="decreaseCart"
      >
        <span class="inner iconfont iconjianshao"></span>
      </div>
    </transition>
    <div class="cart-quantity" v-show="goods.quantity > 0">
      {{ goods.quantity }}
    </div>
    <div
      class="cart-add iconfont iconzengjia"
      @click.stop.prevent="addCart"
    ></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    goods: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    addCart() {
      // this.goods.quantity++;
      this.$emit('plus');
    },
    decreaseCart() {
      this.goods.quantity--;
      this.$emit('minus', event.target);
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  display flex
  align-items center
  margin-right -6PX
  .cart-decrease
    padding 6PX
    opacity 1
    transform translate3d(0, 0, 0)
    .inner
      display inline-block
      font-size 24px
      color #4d4225
      transition all 0.4s linear
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    &.move-enter, &.move-leave-active
      opacity 0
      transform translate3d(24px, 0, 0)
      .inner
        transform rotate(180deg)
  .cart-quantity
    width 20px
    font-size 14px
    text-align center
    font-weight 700
  .cart-add
    padding 6PX
    font-size 24px
    color #4d4225
</style>
