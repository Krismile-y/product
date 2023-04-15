<template>
  <div class="account">
    <Header :title="title"></Header>
    <div style="flex: 1">
      <div class="top-box">
        <div class="title">Tài khoản của tôi</div>
        <div class="totality">₫{{ account || 0 }}</div>
<!--        <button @click="rechargeClick">充值</button>-->
      </div>
      <!-- <div class="add-up">
        <div class="add-up-text">累计提现</div>
        <div class="cell-box">
          <div class="money">
            ₫<span>{{ userInfo.cash_count ? userInfo.cash_count : 0 }}</span>
          </div>
          <div class="look" @click="$router.push('/tx/record/tx')">
            <div class="look-text">查看提现记录</div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
      </div> -->
      <div class="hr"></div>

      <div class="bottom-box">
        <div class="item" @click="yueClick">
          <div class="left-box">
            <i class="iconfont iconyue"></i>
            <div class="label">Số dư của tôi</div>
          </div>
          <div class="right-box">
            <div class="value">
              ₫{{ userInfo.balance ? userInfo.balance : 0 }}
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
        <div class="item" @click="ketiYueClick">
          <div class="left-box">
            <i class="iconfont iconqiandou"></i>
            <div class="label">Số dư rút tiền của tôi</div>
          </div>
          <div class="right-box">
            <div class="value">
              ₫{{ userInfo.qianbao ? userInfo.qianbao : 0 }}
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
<!--        <div class="item" @click="$router.push('/htCarryRecord')">-->
<!--          <div class="left-box">-->
<!--            <i class="iconfont iconqiandou"></i>-->
<!--            <div class="label">我的可提余额(后台操作)</div>-->
<!--          </div>-->
<!--          <div class="right-box">-->
<!--            &lt;!&ndash;            <div class="value">&ndash;&gt;-->
<!--            &lt;!&ndash;              {{ userInfo.qiandou ? userInfo.qiandou : 0 }}&ndash;&gt;-->
<!--            &lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <i class="iconfont iconxiaojiantou"></i>-->
<!--          </div>-->
<!--        </div>-->
        <div class="item" @click="integralRecordClick">
          <div class="left-box">
            <i class="iconfont iconjiaquanfenhong"></i>
            <div class="label">Điểm số của tôi</div>
          </div>
          <div class="right-box">
            <div class="value">
              {{ userInfo.integral ? userInfo.integral : 0 }}
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
<!--        <div class="item" @click="$router.push('/htIntegralRecord')">-->
<!--          <div class="left-box">-->
<!--            <i class="iconfont iconjiaquanfenhong"></i>-->
<!--            <div class="label">我的积分(后台操作)</div>-->
<!--          </div>-->
<!--          <div class="right-box">-->
<!--            &lt;!&ndash;            <div class="value">&ndash;&gt;-->
<!--            &lt;!&ndash;              {{ userInfo.qiandou ? userInfo.qiandou : 0 }}&ndash;&gt;-->
<!--            &lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <i class="iconfont iconxiaojiantou"></i>-->
<!--          </div>-->
<!--        </div>-->
        <div class="item" @click="duobaoClick">
          <div class="left-box">
            <i class="iconfont iconqianbao"></i>
            <div class="label">Vàng kho báu của tôi</div>
          </div>
          <div class="right-box">
            <div class="value">
              {{ userInfo.qiandou ? userInfo.qiandou : 0 }}
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
<!--        <div class="item" @click="$router.push('/htDuobao')">-->
<!--          <div class="left-box">-->
<!--            <i class="iconfont iconqianbao"></i>-->
<!--            <div class="label">我的多宝(后台操作)</div>-->
<!--          </div>-->
<!--          <div class="right-box">-->
<!--            &lt;!&ndash;            <div class="value">&ndash;&gt;-->
<!--            &lt;!&ndash;              {{ userInfo.qiandou ? userInfo.qiandou : 0 }}&ndash;&gt;-->
<!--            &lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <i class="iconfont iconxiaojiantou"></i>-->
<!--          </div>-->
<!--        </div>-->
        <div class="item" @click="yongjinClick" v-if="isXsFlag.data != 1">
          <div class="left-box">
            <img style="width: 35px;height:35px;margin-left: -5px;" src="../../../assets/images/fanyong.png" class="iconfont iconqianbao"></img>
            <div class="label" style="margin-left: 10px;">Hoa hồng của tôi</div>
          </div>
          <div class="right-box">
            <!--            <div class="value">-->
            <!--              {{ userInfo.qiandou ? userInfo.qiandou : 0 }}-->
            <!--            </div>-->
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '_com/header/header';
import { getUserInfo_api } from '_api/user';
import axios from "../../../api/request_two";

export default {
  components: {
    Header,
  },
  data() {
    return {
      title: 'Tài khoản của tôi',
      userInfo: {},
      account: 0,
      isXsFlag: {}
    };
  },
  created() {
    this.getData();
    // 调用是否显示接口
    axios.post('api/index/is_sx').then(res2 => {
      console.log(res2);
      if (res2.data.data) {
        this.isXsFlag = res2.data
      }
    })
  },
  methods: {
    // 我的余额跳转
    yueClick() {
      this.$router.push({
        path: '/yueRecord',
        query: {
          money: this.userInfo.balance
        }
      })
    },
    // 我的可提余额跳转
    ketiYueClick() {
      this.$router.push({
        path: '/carryRecord',
        query: {
          money: this.userInfo.qianbao
        }
      })
    },
    // 积分跳转
    integralRecordClick() {
      this.$router.push({
        path: '/IntegralRecord',
        query: {
          money: this.userInfo.integral
        }
      })
    },
    // 多宝跳转
    duobaoClick() {
      this.$router.push({
        path: '/duobao',
        query: {
          money: this.userInfo.qiandou
        }
      })
    },
    // 返佣记录跳转
    yongjinClick() {
      this.$router.push({
        path: '/fanyongRecord',
        query: {
          money: this.userInfo.qianbao
        }
      })
    },
    async getData() {
      this.userInfo = await getUserInfo_api();
      console.log(this.userInfo)
      let balance = Number(this.userInfo.balance);
      let qiandou = Number(this.userInfo.qianbao);
      let integral = Number(this.userInfo.integral);
      let qianbao = Number(this.userInfo.qiandou);
      // this.account = balance + qiandou + integral + qianbao;
      this.account = balance
    },
  },
};
</script>

<style lang="stylus" scoped>
.account
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow hidden
.top-box
    height 128px
    background-image url("../../../assets/images/my-zh.png")
    background-size 100% 100%
    /*padding-left 15px*/
    display flex
    flex-direction column
    position: relative;
.top-box > button
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color: orange;
    color: #fff;
    position: absolute;
    right: 20px;
    bottom: 10px;
.title
    height 50px
    display flex
    align-items center
    border-bottom 1px solid rgba(255,255,255,0.2);
    font-size 14px
    color #ffffff
    flex-shrink 0
    padding-left 15px
.totality
    flex 1
    display flex
    align-items center
    font-size 24px
    color #ffffff
    font-weight bold
    padding-left 15px
.add-up
    height 60px
    display flex
    flex-direction column
    justify-content center
    background #ffffff
    padding 0 15px
.add-up-text
    color #999999
    font-size 12px
.cell-box
    display flex
    align-items center
    justify-content space-between
.cell-box
    margin-top 6px
.money
    font-size 12px
.money span
    font-size 14px
    font-weight bold
.look
    display flex
    align-items flex-end
.look-text
    color #999999
    font-size 14px
.hr
   height 8px
   background #F4F4F4
.item
    height 70px
    margin 0 15px 0 25px
    border-bottom 1px solid #E5E5E5
    display flex
    align-items center
    justify-content space-between
.left-box
    display flex
    align-items center
.left-box .iconfont
    font-size 23px
    color #E89222
.label
    margin-left 13px
    font-size 14px
.right-box
    display flex
    align-items flex-end
.value
    font-size 14px
    color #E89222
</style>
