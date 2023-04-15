<template>
  <div class="heade-title" :style="{'backgroundColor': color, 'color': fontColor, fontSize: fontSize, position: fixedFlag ? 'fixed' : '',zIndex: fixedFlag ? 10 : 0 }">
    <div class="back" @click="$router.go(-1)">
      <van-icon :style="{fontSize: iconSize}" name="arrow-left" class="arrow-left" v-show="fanhuiFlag" />
    </div>
    <div class="head-title">{{ title }}</div>
    <div class="head-right" @click="toPath">
      <slot>
        {{ rightTitle }}
      </slot>
    </div>
  </div>
</template>

<script>
import { Icon  } from 'vant';
export default {
  components: {
    [Icon.name]: Icon,
  },
  props: {
    fixedFlag: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    },
    fanhuiFlag: {
      type: Boolean,
      default: true
    },
    rightTitle: {
      type: String,
      default: ''
    },
    toPathValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '',
    },
    // 背景颜色
    color: {
      type: String,
      default: '',
    },
    // 字体颜色
    fontColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    toPath() {
      this.$router.push(this.toPathValue)
    },
  },
  watch: {
    deep: true,
    title(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="stylus">
.heade-title
    display flex
    justify-content space-between
    align-items center
    height 44px
    background #FFf
    width 100%
    flex-shrink 0
    text-align center
    font-size: 16px;
    font-family: Source Han Sans CN;
    div
      width: calc(100% / 3)
.back
  text-align: left;
  padding-left: 20px;
  box-sizing border-box
  font-size: 18px;
.head-right
  text-align: right;
  padding-right: 20px;
  box-sizing border-box
/*头部*/
//.back
//    flex-shrink: 0;
//    position absolute
//    left 15px
//.head-title
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;
//    flex: 1;
//.head-title
//    width: calc(100% / 3)
//    font-size: 16px;
//.arrow-left
//    font-size 18px
//.head-right
//    width: calc(100% / 3)
</style>
