<template>
  <div class="distribution">
    <div class="top-box">
      <div class="top-box-title">
        <div>hoa hồng thanh toán</div>
        <router-link to="/tx/record/tx" class="record">
          <div>Hồ sơ rút tiền</div>
          <i class="iconfont iconxiaojiantou"></i>
        </router-link>
      </div>
      <div class="top-box-record" @click="extract">
        <div>{{ userInfo.yj_money }}</div>
        <!--        <router-link to="/withdrawDeposit" class="btn">提现</router-link>-->
        <router-link to="" class="btn">rút</router-link>
      </div>
    </div>
    <div class="middle">
      <div class="middle-box" @click="$router.push('/tx/record/yj')">
        <div>
          <img src="@/assets/images/commission.png" />
        </div>
        <div class="details">
          <div class="details-title">hoa hồng phân phối</div>
          <div class="money">₫{{ userInfo.yj_money }}</div>
        </div>
      </div>
      <div class="middle-box-border"></div>
      <div class="middle-box" @click="$router.push('/tx/record/dd')">
        <div>
          <img src="@/assets/images/indent.png" />
        </div>
        <div class="details">
          <div class="details-title">thứ tự phân phối</div>
          <div class="money">
            {{ userInfo.count_order ? userInfo.count_order : 0 }}
          </div>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <div class="botton">
      <div class="nav-item" @click="$router.push('/myTeam')">
        <div class="nav-item-left">
          <i class="iconfont iconwodetuandui"></i>
        </div>
        <div class="nav-item-right">
          <div class="nav-item-title">tuyến dưới của tôi</div>
          <div class="to-details">
            <div class="num">
              {{ userInfo.all_user_num ? userInfo.all_user_num + 'mọi người' : '' }}
            </div>
            <i class="iconfont icondajiantou"></i>
          </div>
        </div>
      </div>
      <div class="nav-item" @click="$router.push('/personal/share')">
        <div class="nav-item-left">
          <i class="iconfont iconwodefenxiang"></i>
        </div>
        <div class="nav-item-right">
          <div class="nav-item-title">Quảng bá mã QR</div>
          <i class="iconfont icondajiantou"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo_api } from '_api/user';
export default {
  data() {
    return {
      num: 0,
      userInfo: {},
    };
  },
  async created() {
    console.log('1111')
    var token = sessionStorage.getItem('token');
    let getUserInfoRes = getUserInfo_api(token);
    this.userInfo = await getUserInfoRes;
    console.log('useInfo', this.userInfo);
  },
  methods: {
    extract() {
      this.$toastBounce('Tính năng này chưa khả dụng, vui lòng đợi');
    },
  },
};
</script>

<style scoped>
.top-box {
  display: flex;
  flex-direction: column;
  height: 130px;
  background: #d89e63;
  margin: 15px 15px 0;
  border-radius: 10px 10px 0px 0px;
}
.top-box-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px 0;
  color: #fff;
  font-size: 14px;
}
.record {
  display: flex;
  color: #fff;
  font-size: 12px;
}
.top-box-record {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 53px;
}
.top-box-record {
  font-size: 20px;
  color: #fff;
}
.btn {
  color: #fff;
  font-size: 14px;
  width: 80px;
  height: 32px;
  background: rgba(232, 181, 129, 1);
  opacity: 1;
  border-radius: 16px;
  text-align: center;
  line-height: 32px;
}
.middle {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 76px;
}
.middle-box {
  display: flex;
  align-items: center;
}
.details {
  margin-left: 8px;
}
.money {
  font-size: 12px;
  color: #666666;
  margin-top: 10px;
}
.middle-box img {
  width: 46px;
  height: 46px;
}
.middle-box-border {
  margin-left: 58px;
  width: 1px;
  height: 46px;
  background: #e5e5e5;
  margin-right: 20px;
}
.border {
  height: 10px;
  background: #f7f7f7;
}
.nav-item {
  height: 70px;
  /*padding: 0 15px;*/
  display: flex;
  align-items: center;
}
.nav-item-left i {
  font-size: 25px;
  padding: 0 15px;
  color: #198e7d;
}
.nav-item-right {
  padding: 0 15px 0 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid #e5e5e5;
}
.to-details {
  display: flex;
  /*align-items: center;*/
}
.num {
  color: #666666;
}
</style>
