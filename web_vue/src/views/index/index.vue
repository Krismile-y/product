<template>
  <div class="index-page">
    <keep-alive :exclude="exclude">
      <router-view class="index__content"></router-view>
    </keep-alive>
    <cube-tab-bar
      :class="{ move: isToggle }"
      class="tab-bar__index"
      v-model="activeTab"
    >
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
        <i
          slot="icon"
          class="iconfont"
          :class="activeTab === item.label ? item.iconActive : item.icon"
          :style="activeTab === item.label ? 'color: rgba(223, 89, 89, 1)' : ''"
        ></i>
        <!--        <span v-if="item.badge && count" class="badge">{{ count }}</span>-->
        {{ item.label }}
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Index',
  data() {
    return {
      isToggle: false,
      exclude: ['MoneyTree'],
      tabs: [
        {
          label: 'Trang đầu',
          icon: 'iconshouyexianxing',
          iconActive: 'iconshouyemianxing',
        },
        {
          label: 'Bán lẻ',
          icon: 'iconfenleixianxing',
          iconActive: 'iconfenleimianxing',
        },
        {
          badge: true,
          label: 'Giỏ hàng',
          icon: 'icongouwuchexianxing',
          iconActive: 'iconjiarugouwuche',
        },
        {
          label: 'Của tôi',
          icon: 'iconwodexianxing',
          iconActive: 'iconwodemianxing',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      count: state => state.common.shopCartCount,
    }),
    activeTab: {
      get() {
        let { name, matched } = this.$route;
        let parent = matched[1];
        switch (name) {
          case 'Home':
            return 'Trang đầu';
          case 'Category':
            return 'Bán lẻ';
          case 'ShoppingCart':
            return 'Giỏ hàng';
          case 'Personal':
            return 'Của tôi';
          default:
            return parent.meta.title;
        }
      },
      set(val) {
        let route = '';
        switch (val) {
          case 'Trang đầu':
            route = '/home';
            break;
          case 'Bán lẻ':
            route = '/category';
            break;
          case 'Giỏ hàng':
            route = '/shopping-cart';
            break;
          case 'Của tôi':
            route = '/personal';
            break;
        }
        this.$router.push(route);
      },
    },
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
};
</script>

<style lang="stylus" scoped>
.index-page
  height 100%
  display flex
  flex-direction column
.index__content
  flex 1
  overflow hidden
.tab-bar__index
  background #fff
  border-top 1PX solid rgba(7, 17, 27, 0.1)
  // transition transform 0.4s
  // &.move
  // transform translateY(100%) translateZ(0)
  .cube-tab
    flex-box-col(center, center)
    position relative
    height 50px
    padding 0
    font-size 12px
    color #999
    &.cube-tab_active
      color rgba(223, 89, 89, 1)
  i
    font-size 20px
    margin-bottom 3PX
  .badge
    left 70%
    top -5PX
    transform translateX(-50%) scale(0.5)
  .iconshouyemianxing
    color red
</style>
