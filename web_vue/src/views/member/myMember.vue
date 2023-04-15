<template>
  <div class="member-box">
    <div class="content">
      <div class="bg">
        <div class="member" v-if="!userInfo.is_vip">
          <div class="hint">
            <i class="iconfont iconhuiyuan-"></i>
            <div class="text">Thành viên chưa đăng ký</div>
          </div>
          <div class="show-box">
            <div class="top-text">
              <div class="goods-name">Thành viên chưa đăng ký</div>
              <div class="more-goods">
                <router-link :to="'/record'" class="record"
                  >hồ sơ thành viên</router-link
                >
                <i class="iconfont iconxiaojiantou"></i>
              </div>
            </div>
            <div class="valid-time">Tận hưởng các đặc quyền thành viên sau khi đăng ký</div>
            <div class="dredge">
              <div class="residue">
                Trở thành một thành viên có giá trị bây giờ→
              </div>
              <div class="residue-btn">
                <router-link to="/dredge" class="residue-btn-text">
                  đã mở
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="member" v-else>
          <div class="hint">
            <i class="iconfont iconhuiyuan-"></i>
            <div class="text">Tư cách thành viên đã được mở</div>
          </div>
          <div class="show-box">
            <div class="top-text">
              <div class="goods-name goods-name-active">Đám mây Huateng (VIP)</div>
              <div class="more-goods">
                <router-link :to="'/record'" class="record"
                  >hồ sơ thành viên</router-link
                >
                <i class="iconfont iconxiaojiantou"></i>
              </div>
            </div>

            <div class="valid-time">
              {{ userInfo.vip_begin_time }} ĐẾN {{ userInfo.vip_end_time }}
            </div>
            <div class="dredge">
              <div class="residue">
                <span class="residue"
                  >{{ userInfo.vip_end_day }}ngày sau tư cách thành viên hết hạn</span
                >
              </div>
              <div class="residue-btn">
                <router-link to="/dredge" class="residue-btn-text">
                  Thay mới
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="state">
          <div class="state-title">Hướng dẫn liên quan đến thẻ thành viên：</div>
          <div
            class="state-lists"
            v-for="(item, index) in getVipExplain.list"
            :key="index"
          >
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { getUserInfo_api } from '_api/user';
import { getVipExplain_api } from '_api/member';

export default {
  data() {
    return {
      memberList: [],
      isMember: false,
      length: '',
      getVipExplain: [],
      userInfo: {},
    };
  },
  async created() {
    this.getMember();
    // this.userInfo = this.$store.state.common.userInfo
    let getUserInfoRes = getUserInfo_api();
    this.userInfo = await getUserInfoRes;
  },
  computed: {
    // ...mapGetters(['userInfo']),
  },
  methods: {
    async getMember() {
      // 获取会员说明
      let getVipExplainPromise = getVipExplain_api();
      let getVipExplain = await getVipExplainPromise;
      console.log(getVipExplain);
      this.getVipExplain = getVipExplain;
    },
    dredge(item) {
      window.location.href =
        this.$store.state.baseURL +
        '/api/member/pay/?id=' +
        item.pid +
        '&user_id=' +
        this.$store.state.userInfo.id;
    },
  },
};
</script>

<style scoped>
.member-box {
  height: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content {
  height: 100%;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bg {
  background: #fff;
}
.member {
  padding: 15px 15px 0 15px;
}
.hint {
  display: flex;
  align-items: center;
}
.text {
  font-size: 12px;
  margin-left: 10px;
}
.iconhuiyuan- {
  font-size: 16px;
  color: #d89e63;
}
.show-box {
  width: 100%;
  /*height: 120px;*/
  /*width: 6.9rem;*/
  background-image: url('../../assets/images/member.png');
  background-size: 100% 100%;
  margin-top: 10px;
}
.top-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 12px 15px;
}
.top-text-active {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding: 12px 15px;
}
.goods-name {
  font-size: 16px;
  color: #999999;
}
.goods-name-active {
  color: #fff;
  /*padding-left: 15px;*/
  /*margin-bottom: 10px;*/
}
.more-goods {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.record {
  font-size: 12px;
  color: #fff;
}
.valid-time {
  font-size: 10px;
  color: #fff;
  opacity: 0.6;
  padding: 0px 0 0 15px;
}
.residue {
  font-size: 20px;
  color: #d89e63;
  font-weight: bold;
}
.residue-text {
  font-size: 0.28rem;
}
.price span {
  font-size: 0.4rem;
}
.dredge {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px 20px 15px;
}
.residue-btn {
  font-size: 12px;
  width: 70px;
  height: 26px;
  background: rgba(91, 75, 54, 1);
  border-radius: 14px;
  text-align: center;
  border: 1px solid rgba(216, 158, 99, 1);
  line-height: 26px;
}
.residue-btn-text {
  color: #d89e63;
}
.state {
  margin-top: 26px;
  padding: 0 15px;
  margin-bottom: 10px;
}
.state-title {
  font-size: 14px;
  color: #d89e63;
}
.state-lists {
  font-size: 14px;
  margin-top: 15px;
}
.state-lists p {
  margin-bottom: 15px;
  line-height: 25px;
}
</style>
