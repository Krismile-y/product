<template>
  <div class="shop-cart-icon" @click="$router.push('/shopping-cart')">
    <span class="badge" v-if="count">
      <img src="../../assets/images/gwcGou.png" alt="">
    </span>
    <i
      id="cartIcon"
      class="iconfont icongouwuchexianxing"
      :class="{ active: isActive }"
    ></i>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      count: state => state.common.shopCartCount,
    }),
  },
};
</script>

<style lang="stylus" scoped>
.shop-cart-icon
  position absolute
  z-index 999
  top 30px
  right 10px
  width 50PX
  height 50PX
  display flex
  align-items center
  justify-content center
  background-color rgba(0, 0, 0, 0.4)
  border-radius 50%
  box-shadow 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)
.badge
  position absolute
  z-index 9
  top -1PX
  right -4PX
  background-color: #fff
.badge img {
  width: 20px;
  height:20px;
}
.iconfont
  color #fff
  font-size 26PX
  padding-right 5PX
  transition transform .3s
  &.active
    transform scale(1.3)
</style>
