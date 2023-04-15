<template>
  <!-- :visible.sync="visiblePopup" -->
  <zui-popup v-on="$listeners" v-bind="$attrs" position="bottom">
    <div class="address-container">
      <div class="header border-1px--bottom">
        <span class="close" @click="$emit('update:visible', false)">Hủy bỏ</span>
        <span class="title">Chọn địa chỉ nhận hàng</span>
      </div>
      <ul>
        <li
          class="address-item"
          v-for="item in data"
          :key="item.id"
          @click="$emit('change', item)"
        >
          <div class="checkbox-wrap">
            <div class="checkbox-mask"></div>
            <cube-checkbox
              class="not-text"
              v-model="item.isChecked"
            ></cube-checkbox>
          </div>

          <div class="content">
            <div class="user-row">
              <div class="user__name">{{ item.username }}</div>
              <div class="user__phone">{{ item.phone }}</div>
            </div>
            <div class="address">
              <span class="default-tag" v-if="item.is_default === 2">Mặc định</span>
              {{
                item.province +
                  ' ' +
                  item.city +
                  ' ' +
                  item.county +
                  ' ' +
                  item.address
              }}
            </div>
          </div>
          <i
            @click.stop="handleJump('edit', item)"
            class="iconfont iconbianji"
          ></i>
        </li>
      </ul>
      <div @click="handleJump('add')" class="footer border-1px--top">
        <i class="cubeic-add"></i>
        <span>Thêm địa chỉ nhận hàng</span>
      </div>
    </div>
  </zui-popup>
</template>

<script>
import ZuiPopup from '_com/popup/popup';
export default {
  components: {
    ZuiPopup,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    // visible: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  // computed: {
  //   visiblePopup: {
  //     get() {
  //       return this.visible;
  //     },
  //     set(val) {
  //       this.$emit('update:visible', val);
  //     },
  //   },
  // },
  methods: {
    // 跳转修改地址
    handleJump(type, item) {
      let query = { type };
      if (type === 'edit') {
        query = { ...item, type };
        delete query.create_time;
        delete query.update_time;
        delete query.user_id;
      }
      this.$router.push({
        query,
        path: this.$route.fullPath.split('?')[0] + '/address-edit',
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.address-container
  display flex
  flex-direction column
  height 420px
  & >>>
    .cube-checkbox .cube-checkbox-ui
      font-size 19PX
    .cube-checkbox_checked .cube-checkbox-ui i
      color #1e5357
.header
  position relative
  height 48px
  line-height 50px
  text-align center
  .close
    position absolute
    left 0
    top 50%
    transform translateY(-50%)
    color #666
    padding 0 15px
  .title
    font-size 16px
ul
  flex 1
  overflow auto
  -webkit-overflow-scrolling touch
.address-item
  position relative
  display flex
  align-items center
  padding 6px 10px 6px 15px
  &::after
    content ''
    position absolute
    top 0
    left 15px
    right 0
    width auto
    height 200%
    transform scaleY(0.5)
    transform-origin 0 0
    pointer-events none
    box-sizing border-box
    border-bottom 1PX solid #e5e5e5
  .content
    position relative
    flex 1
    overflow hidden
    padding-left 12px
    line-height 1.4
    &::after
      content ''
      position absolute
      right 0
      top 50%
      transform translateY(-50%)
      height 56%
      width 2PX
      border-radius 1PX
      background-color #ccc
  .user-row
    display flex
    align-items center
    margin-bottom 2PX
  .user__name
    ellipsis()
    display inline-block
    max-width 120px
    font-weight 700
    margin-right 14px
    font-size 16px
  .address
    color #666
  .iconbianji
    color #666
    padding 15px 15px 15px 25px
  .default-tag
    display inline-block
    font-size 10px
    vertical-align middle
    color #1e5357
    padding 0 2PX
    border-radius 2PX
    background-color rgba(30, 83, 87, 0.2)
.footer
  height 52px
  display flex
  align-items center
  justify-content center
  .cubeic-add
    color #1e5357
    font-size 24px
    margin-right 6px
  span
    font-size 16px
</style>
