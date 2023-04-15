<template>
  <ul class="icon-list">
    <template v-if="data.length == 0">
      <div :key="item" class="icon-item" v-for="item in data">
        <div class="placeholder-icon"></div>
        <p class="placeholder-text"></p>
      </div>
    </template>
    <template v-else>
      <router-link
        tag="li"
        :to="item.path"
        :key="index"
        class="icon-item"
        :style="isWidth"
        v-for="(item, index) in data"
      >
        <img v-if="iconType === 'img'" :src="item.thumb" alt="" />
        <i v-else :class="item.icon"></i>
        <p>{{ item.name || item.cate_name }}</p>
        <span class="iconCount" v-if="count[index]">{{ count[index] }}</span>
        <span v-if="item.count" class="badge">{{ item.count }}</span>
      </router-link>
    </template>
  </ul>
</template>

<script>
import axios from '../../api/request_two';
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    iconType: {
      type: String,
      default: 'img',
    },
    isWidth: {
      type: String,
    },
  },
  data() {
    return {
      list: [],
      count: []
    };
  },
  created() {
    this.getCount()
  },
  methods: {
    // 获取总数量
    async getCount() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/order/order_type_number', {
        user_id: userId
      })
      if (res.data.code === 200) {
        for (let key in res.data.data) {
          this.count.push(res.data.data[key])
        }
        console.log(this.count);
      }
    },
  },
  watch: {},
};
</script>

<style lang="stylus" scoped>
.icon-list
  display flex
  flex-wrap wrap
  background-color #fff
.icon-item
  position relative
  width 20%
  padding 8px 0
  text-align center
  transition all 1s
.icon-item .iconCount{
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: red;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  right: 18px;
  top: 0px;
}
.icon-item img
  width 40px
  height 40px
  border-radius 50%
.iconfont
  color #D89E63
  font-size 22px
.icon-item p
  font-size 14px
  margin-top 5px
  line-height 20px
  height 20px
.badge
  left 68%
  top -5PX
  transform translateX(-50%) scale(0.5)
// 占位符
.placeholder-icon, .placeholder-text
  margin 0 auto
  background #eee
.placeholder-icon
  width 40px
  height 40px
  border-radius 50%
  background #eee
.placeholder-text
  height 20px
  width 80%
  border-radius 2px
</style>
