<template>
  <div class="flex-column default-bg">
    <Header :title="title"></Header>
    <div class="box">
      <div class="cell-box">
        <div class="first-stage-info">
          <img :src="info.head_img | imgPath" v-if="info.head_img" />
          <img src="../../../assets/images/headerImg.png" v-else />
          <div class="first-stage-name">
            <div class="first-name">{{ info.nickname }}</div>
            <div class="shop">
              {{
                info.role_id === 1
                  ? '创业店'
                  : info.role_id === 2
                  ? '形象店'
                  : info.role_id === 3
                  ? '旗舰店'
                  : info.role_id === 4
                  ? '联创店'
                  : '未开通'
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="cell-box">
        <div class="people">
          <div class="people-num">{{ info.all_user_num }}人</div>
          <div class="title">TA的推荐</div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="cell-box">
        <div class="money">
          <div class="people-num">{{ info.team_yj }}元</div>
          <div class="title">TA的团队业绩</div>
        </div>
      </div>
    </div>
    <div class="panel-title border-1px--bottom">
      <div class="item">基本信息</div>
      <div class="item">消费金额</div>
      <div class="item">获得奖励</div>
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
              <img :src="item.head_img | imgPath" v-if="item.head_img" />
              <img src="../../../assets/images/headerImg.png" v-else />
              <div class="item-user">
                <p class="name">{{ item.nickname }}</p>
                <p class="phone" @click="call(item.phone)">{{ item.phone }}</p>
                <!--                                <p class="time">{{ item.time }}</p>-->
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
      getList_api: getMyTeam_api,
      tabs: ['我的同学', '我的收益'],
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
      info: {},
      dataList: {},
      title: '二级团队',
    };
  },
  async created() {
    // let params = {
    //     user_id: this.$route.params.id
    // }
    // let getMyTeamRes = getMyTeam_api(params)
    // let getMyTeam = await getMyTeamRes
    // this.info = getMyTeam.info
    // this.dataList = getMyTeam.list
    // console.log('getMyTeam', getMyTeam)
  },
  methods: {
    _requestBefore() {
      this.queryList = {
        user_id: this.$route.params.id,
      };
    },
    _requestAfter(list, res) {
      console.log(res);
      this.info = res.info;
    },
    call(phone) {
      window.location.href = 'tel:' + phone;
    },
  },
  filters: {
    imgPath,
  },
};
</script>

<style lang="stylus" scoped>
.panel-title
    display flex
    height 41px
    align-items center
    background-color #F7F7F7
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
.grade
    min-width 42px
.income
    color #d89e63
.first-stage
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
 .first-stage-info
    display: flex;
    align-items: center;
.first-stage-info img
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
.first-stage-name
    font-size: 14px;
    font-weight:bold;
    line-height 25px
.first-stage-num
    font-size: 14px;
.shop
    font-size 12px
.text
    color #999999
    margin-top 15px
    margin-bottom 15px
.no-team
    font-size: 20px;
    text-align: center;
    margin-top: 100px;
    color: #666666;
.box
    border-top 1px solid #E5E5E5
    display flex
    align-items center
    justify-content space-around
    height 90px
    background #ffffff
.hr
    width 1px
    height 40px
    background #E5E5E5
.people, .money
    display flex
    flex-direction column
    align-items center
.title
    margin-top 10px
    font-size 12px
    color #999999
.people-num
    font-size 12px
.phone
    margin-top 10px
    font-size 13px
    color #409E98
</style>
