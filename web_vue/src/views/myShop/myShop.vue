<template>
  <div class="shop-list">
    <Header :title="headerTitle"></Header>
    <van-swipe
      :initial-swipe="palteIndex"
      :loop="false"
      :show-indicators="false"
      :width="300"
      :style="{ padding: 0 + ' ' + sPadding + 'px' }"
      @change="swichSwiper"
    >
      <van-swipe-item v-for="(item, index) in shopArray" :key="index">
        <div
          :class="[
            'top-box',
            index === 0
              ? 'cy-shop'
              : index === 1
              ? 'xx-shop'
              : index === 2
              ? 'qj-shop'
              : 'lc-shop',
          ]"
        >
          <div class="shop-name">
            {{ item.name
            }}<span
              :class="[
                myself.role_id === 0
                  ? ''
                  : myself.check_plate >= myself.role_id &&
                    myself.role_id === item.id
                  ? 'reach'
                  : '',
              ]"
              >{{
                myself.role_id === 0
                  ? '未达成'
                  : myself.check_plate >= myself.role_id &&
                    myself.role_id === item.id
                  ? '已达成'
                  : '未达成'
              }}</span
            >
          </div>
          <div class="divide-into">享受团队分红{{ item.rebate }}%</div>
          <div class="enjoy">
            已享受分红<span style="margin-left: 10px; font-size: 10px">₫</span
            ><span style="font-size: 14px !important; font-weight: bold">{{
              myself.yj_money
            }}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- <div class="shop-item">
            <div :class="['top-box', myself.role_id === 1 ? 'cy-shop' : myself.role_id === 2 ? 'xx-shop' : myself.role_id === 3 ? 'qj-shop' : 'lc-shop']">
                <div class="shop-name">{{ myself.name }}<span :class="[myself.check_plate >= myself.role_id ? 'reach' : '']">{{ myself.check_plate >= myself.role_id ? '已达成' : '未达成' }}</span></div>
                <div class="divide-into">享受团队分红{{ myself.rebate }}%</div>
                <div class="enjoy">已享受分红<span style="margin-left: 10px; font-size: 10px">₫</span><span style="font-size: 14px !important; font-weight: bold">{{ myself.yj_money }}</span></div>
            </div>
        </div> -->

    <div class="bottom-box">
      <div>
        <div class="item-box">
          <div class="box">
            <div class="item-title">消费任务</div>
            <div class="item-condition">
              <div class="condition-title">
                一次性消费<span style="margin-left: 10px; font-size: 10px"
                  >₫</span
                ><span style="font-weight: bold; font-size: 14px">{{
                  shopArray[palteIndex].job_xf
                }}</span>
              </div>
              <div class="accomplish">
                ₫{{ myself.xf_money }}/<span style="color: #DC0000"
                  >₫{{ shopArray[palteIndex].job_xf }}</span
                >
              </div>
            </div>
          </div>

          <div class="box" v-if="palteIndex === 0">
            <div class="item-title">签到任务</div>
            <div class="item-condition">
              <div class="condition-title">
                官方App每周签到{{ shopArray[palteIndex].job_num }}次
              </div>
              <div class="accomplish">
                {{ myself.sign_num }}/<span style="color: #DC0000">{{
                  shopArray[palteIndex].job_num
                }}</span>
              </div>
            </div>
          </div>

          <div class="box" v-if="palteIndex !== 0">
            <div class="item-title">分享任务</div>
            <div class="item-condition">
              <div class="condition-title">
                分享{{ shopArray[palteIndex].job_md }}个云店
              </div>
              <div class="accomplish">
                {{ myself.plate_count }}/<span style="color: #DC0000">{{
                  shopArray[palteIndex].job_md
                }}</span>
              </div>
            </div>
          </div>

          <div class="box" v-if="palteIndex !== 0">
            <div class="item-title">业绩任务</div>
            <div class="item-condition">
              <div class="condition-title">
                团队业绩累计达{{ shopArray[palteIndex].job_team }}元
              </div>
              <div class="accomplish">
                ₫{{ myself.team_yj }}/<span style="color: #DC0000"
                  >₫{{ shopArray[palteIndex].job_team }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { plateDetail_api } from '_api/user';
import { Swipe, SwipeItem } from 'vant';
import Header from '_com/header/header';
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Header,
  },
  data() {
    return {
      myself: {},
      headerTitle: '店铺',
      shopArray: [],
      //动态设置swiper padding
      sPadding: 10,
      //当前门店索引
      palteIndex: 0,
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let res = await plateDetail_api();
      console.log(res);
      this.shopArray = res.list;
      this.myself = res.myself;
      if (this.myself.role_id === 0 || this.myself.role_id === 1) {
        this.palteIndex = 0;
      } else if (this.myself.role_id === 2) {
        this.palteIndex = 1;
      } else if (this.myself.role_id === 3) {
        this.palteIndex = 2;
      } else if (this.myself.role_id === 4) {
        this.palteIndex = 3;
      }
    },

    swichSwiper(e) {
      this.palteIndex = e;
      if (e === 3) {
        this.sPadding = 0;
      } else if (e === 0) {
        this.sPadding = 10;
      } else {
        this.sPadding = 35;
      }
    },
  },
};
</script>

<style src="./myShop.styl" scoped lang="stylus"></style>
