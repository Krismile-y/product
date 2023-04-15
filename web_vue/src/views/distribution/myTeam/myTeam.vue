<template>
  <div class="flex-column default-bg">
    <Header :title="title"></Header>
    <div class="top-box">
      <div class="recommend">
        <div class="title">Tổng số khuyến nghị</div>
        <div class="num">{{ userData.all_user_num }}<span>mọi người</span></div>
      </div>
      <div class="recommend team">
        <div class="title">nhóm thực hiện</div>
        <div class="num">{{ userData.team_yj }}<span>₫</span></div>
      </div>
    </div>
    <div class="panel-title border-1px--bottom">
      <div class="item">Thông tin cơ bản</div>
      <div class="item">Lượng tiêu thụ</div>
      <div class="item">Kiếm phần thưởng</div>
    </div>
    <div class="flex-scroll" id="toTopWrap">
      <mescroll-vue
        ref="mescroll"
        :down="mescrollDown"
        :up="mescrollUp"
        @init="mescrollInit"
      >
        <ul class="team-list" id="listWrap">
          <li class="team-item" v-for="item in dataList" :key="item.id">
            <div class="item-left">
              <div @click="$router.push('/twoLevelTeam/' + item.id)">
                <img :src="item.head_img | imgPath" v-if="item.head_img" />
                <img src="../../../assets/images/headerImg.png" v-else />
              </div>
              <div class="item-user">
                <p class="name">{{ item.nickname }}</p>
                <!--                                <p class="time">{{ item.time }}</p>-->
                <p class="phone" @click="call(item.phone)">{{ item.phone }}</p>
              </div>
            </div>
            <div class="grade">₫{{ item.xf_money }}</div>
            <div class="number">₫{{ item.yj_money }}</div>
          </li>
        </ul>
      </mescroll-vue>
    </div>
  </div>
</template>

<script>
import { getMyTeam_api } from '_api/user';
import meScrollTab from '@/mixins/meScrollTab';
import { imgPath } from '@/libs/filters';
import Header from '_com/header/header';
export default {
  mixins: [meScrollTab],
  components: {
    Header,
  },
  data() {
    return {
      isInit: true,
      queryList: {},
      getList_api: getMyTeam_api,
      tabs: ['bạn cùng lớp của tôi', 'Thu nhập của tôi'],
      mescrollUp: {
        toTop: {
          warpId: 'toTopWrap',
        },
        scrollbar: {
          use: true,
        },
        lazyLoad: {
          use: false,
        },
      },
      title: 'đội của tôi',
      userData: {},
    };
  },
  filters: {
    imgPath,
  },
  methods: {
    _requestAfter(list, res) {
      this.userData = res.info;
    },
    call(phone) {
      window.location.href = 'tel:' + phone;
    },
  },
};
</script>

<style lang="stylus" scoped>
.panel-title
    margin-top 10px
    display flex
    height 41px
    align-items center
    background-color #fff
.item
    flex 1
    color #666
    text-align center

.flex-scroll
    background-color #fff
.team-list
    padding 0 15px
.team-item
    display flex
    align-items center
    padding 15px 0
    border-bottom 1px solid #E5E5E5
    &:last-child::after
        display none
    &>div
        flex 1
        &:nth-child(1)
            flex 1.5
            overflow hidden
            padding-right 6PX
        &:last-child
            text-align center
.item-left
    display flex
    align-items center
.item-left img
    width 40px
    height 40px
    border-radius 50%
    margin-right 6px
.item-left .item-user
    flex 1
    overflow hidden
.item-user .name
    ellipsis()
    margin-bottom 2PX
    line-height 20px
.item-user .time
    color #666
    font-size 12px
.phone
    margin-top 10px
    font-size 13px
    color #409E98
.grade
    min-width 42px
.income
    color #d89e63
.top-box
    display flex
    align-items center
    justify-content space-around
    margin-top 10px
.recommend
    color #ffffff
    width 175px
    height 82px
    background-image url("../../../assets/images/recommend_bg.png")
    background-size 100% 100%
.team
    background-image url("../../../assets/images/team_bg.png")
.title, .num
    margin 15px 16px

.title
    font-size 12px
.num
    font-size 20px
    font-weight bold
.num span
    font-size 12px
</style>
