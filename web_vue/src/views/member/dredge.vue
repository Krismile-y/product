<template>
  <div class="member-box">
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
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
                  <router-link :to="'/record'" class="record">hồ sơ thành viên</router-link>
                  <i class="iconfont iconxiaojiantou"></i>
                </div>
              </div>
              <div class="valid-time">Tận hưởng các đặc quyền thành viên sau khi đăng ký</div>
              <div class="dredge">
                <div class="residue">
                  Vui lòng chọn thành viên để mở
                </div>
              </div>
            </div>
          </div>
          <div class="member" v-else>
            <div class="hint">
              <i class="iconfont iconhuiyuan-"></i>
              <div class="text">Các thành viên có thời lượng khác nhau có thể được mở</div>
            </div>
            <div class="show-box">
              <div class="top-text">
                <div class="goods-name">Đám mây Huateng (VIP)</div>
                <div class="more-goods" @click="$router.push('/record')">
                  <p>hồ sơ thành viên</p>
                  <i class="iconfont iconxiaojiantou"></i>
                </div>
              </div>
              <div class="valid-time">
                {{ userInfo.vip_begin_time }} ĐẾN {{ userInfo.vip_end_time }}
              </div>
              <div class="residue">
                <span class="number"
                  >{{ userInfo.vip_end_day }}ngày sau tư cách thành viên hết hạn</span
                >
              </div>
            </div>
          </div>

          <div class="timing">
            <div class="timing-title">lựa chọn thời gian：</div>
            <div class="timing-lists">
              <div
                :class="[
                  'timing-lists-item',
                  idx === index ? 'active' : 'timing-lists-item',
                ]"
                v-for="(item, index) in dataList"
                @click="timeChange(index, item)"
                :key="index"
              >
                <div class="member-price">
                  <div class="member-name">{{ item.vipname }}</div>
                  <div class="usable">（{{ item.daynum }}bầu trời）</div>
                </div>
                <div class="price">
                  ₫ <span>{{ item.money }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mode-of-payment">
            <div class="mode-of-payment-item">
              <div class="payment-title">phương thức thanh toán</div>
              <div class="payment-text">thanh toán WeChat</div>
            </div>
            <div class="mode-of-payment-item">
              <div class="payment-title">Thời gian hết hạn thành viên sản phẩm sau khi mua thành công</div>
              <div class="payment-text">{{ defaults.end_time }}</div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>
    <div class="bottom">
      <div class="total-prices">₫ {{ defaults.money }}</div>
      <div class="submit" @click="pay">trả</div>
    </div>
  </div>
</template>

<script>
import meScrollBase from '@/mixins/meScrollBase';
// import wx from 'weixin-js-sdk';
import { getUserInfo_api } from '_api/user';

import { getVip_api, payVip_api } from '_api/member';
export default {
  components: {},
  mixins: [meScrollBase],
  data() {
    return {
      idx: 0,
      defaults: {},
      // getList_api: getVip_api,
      isClick: true,
      isPay: true,
      userInfo: {},
      dataList: [],
    };
  },
  created() {
    this.getVip();
  },
  methods: {
    async getVip() {
      let getUserInfoRes = getUserInfo_api();
      this.userInfo = await getUserInfoRes;
      let getVipRes = getVip_api();
      let getVip = await getVipRes;
      this.dataList = getVip.list;
      this.defaults = Object.assign({}, this.dataList[0]);
    },
    // _requestAfter (list) {
    //   this.defaults = Object.assign({}, list[0])
    // },
    // 时间选择
    timeChange(index, item) {
      this.idx = index;
      this.defaults = Object.assign({}, item);
    },
    async pay() {
      let paymentGoods = [
        {
          goods_id: this.defaults.id,
          goods_name: this.defaults.vipname,
          number: 1,
          price: this.defaults.money,
        },
      ];
      sessionStorage.setItem('paymentGoods', JSON.stringify(paymentGoods));
      this.$router.push('/place-order/member');
    },
    _placeOrder() {
      return new Promise(async resolve => {
        try {
          let params = {
            vip_id: this.defaults.id,
          };
          let res = await payVip_api(params);
          resolve(res);
        } catch (error) {
          this.isClick = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.member-box {
  height: 100%;
  background: #f9fbff;
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
  padding: 12px 15px 0 15px;
}
.goods-name {
  font-size: 16px;
  color: #fff;
  padding-bottom: 10px;
}
.more-goods {
  display: flex;
  /*align-items: center;*/
  font-size: 12px;
}
.valid-time {
  font-size: 10px;
  color: #fff;
  opacity: 0.7;
  padding: 5px 15px 0 15px;
}
.residue {
  color: #d89e63;
  padding: 30px 15px 20px 15px;
}
.number {
  font-size: 20px;
  font-weight: bold;
}
.timing {
  margin: 20px 15px 0 15px;
}
.timing-title {
  font-size: 14px;
}
.record {
  color: #fff;
}
.timing-lists {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.timing-lists-item {
  width: 170px;
  height: 60px;
  background: #f7f7f7;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /*padding-right: 15px;*/
}
.member-name {
  font-size: 14px;
  margin-bottom: 5px;
  color: #000;
  /*padding: .1rem 0 0 .17rem;*/
}
.member-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999999;
  justify-content: center;
  /*justify-content: space-between;*/
  font-size: 14px;
  padding: 0 10px 0 10px;
}
.price {
  font-size: 14px;
  color: #999999;
  /*margin-left: 20px;*/
}
.price span {
  font-size: 20px;
}
.active {
  color: #fff;
  background-image: url('../../assets/images/member.png');
  background-size: 100% 100%;
  /*margin-top: .16rem;*/
}
.active .member-name {
  color: #fff;
}
.usable {
  font-size: 12px;
  padding-top: 10px;
}
.active .usable {
  color: #cccccc;
}
.active .price {
  color: #d89e63;
}
.mode-of-payment {
  margin-top: 26px;
}
.mode-of-payment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  border-top: 1px solid rgba(229, 229, 229, 1);
  padding: 25px 15px;
}
.payment-text {
  color: #666666;
}
.bottom {
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
.total-prices {
  font-size: 18px;
  color: #d89e63;
}
.submit {
  font-size: 16px;
  background: #3ad4be;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
}
</style>
