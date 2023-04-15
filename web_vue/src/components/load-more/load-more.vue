<template>
  <div class="load-more">
    <template v-if="isMore">
      <loading :size="20"></loading>
      <p class="load-more-text">{{ text }}</p>
    </template>
    <template v-else>
      <p class="line"></p>
      <p class="no-text">{{ contens.empty || 'không còn dữ liệu' }}</p>
      <p class="line"></p>
    </template>
  </div>
</template>

<script>
import Loading from '../loading/loading';
export default {
  name: 'LoadMore',
  components: {
    Loading,
  },
  props: {
    isMore: {
      type: Boolean,
      default: true,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
    contens: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    text() {
      const { hasData, noData } = this.contens;
      if (this.dataList.length > 0) {
        return hasData || 'tải thêm dữ liệu...';
      } else {
        return noData || 'đang tải...';
      }
    },
  },
};
</script>

<style lang="stylus">
.load-more
  position relative
  display flex
  justify-content center
  align-items center
  line-height 1
  height 48px
.load-more-text
  color #777
  margin-left 10PX
  padding-top 2PX
.no-text
  color #999
  padding 0 10px
.line
  width 20%
  height 1PX
  background-color rgba(153, 153, 153, 0.4)
  transform scaleY(0.6)
</style>
