<template>
  <zui-view animation-type="scale" :loading="false">
    <div class="personal-page default-bg" ref="scrollWrapper">
      <div ref="scrollContent" class="scrollContent">
        <div class="position-top">
          <div class="user-info">
            <button class="messageTongzhi" @click="messagePage">Thông báo toàn trang web</button>
            <div class="left-box">
              <img v-if="avatar" class="user-info__avatar" :src="'https://' + avatar.split('//')[1]" />
              <div class="name-phone" style="width: 100%">
                <div class="user-name">
                  {{ userInfo.nickname }}
                  <span v-if="userInfo.group_id"
                    >({{
                      userInfo.group_id === 1
                        ? 'đại sứ khuyến mãi'
                        : 'userInfo.group_id === 2'
                        ? 'Trung tâm dịch vụ'
                        : ''
                    }})</span
                  >
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <div class="user-phone">
                    {{ mobileFilter(userInfo.phone) }}
                  </div>
                  <div class="right-box">
                    <i class="iconfont icondengji"></i>
                    <span>Cấp thành viên：VIP{{ userInfo.role_id ? userInfo.role_id : 0 }}</span>
                  </div>
<!--                  <div-->
<!--                    :class="[-->
<!--                      'right-box',-->
<!--                      userInfo.role_id === 0-->
<!--                        ? ''-->
<!--                        : userInfo.check_plate >= userInfo.role_id-->
<!--                        ? 'right-box-active'-->
<!--                        : '',-->
<!--                    ]"-->
<!--                    @click="$router.push('/myShop')"-->
<!--                  >-->
<!--                    <i class="iconfont icondengji"></i>-->
<!--                    <p>-->
<!--                      店铺等级：{{-->
<!--                        userInfo.role_id === 1-->
<!--                          ? '创业店'-->
<!--                          : userInfo.role_id === 2-->
<!--                          ? '形象店'-->
<!--                          : userInfo.role_id === 3-->
<!--                          ? '旗舰店'-->
<!--                          : userInfo.role_id === 4-->
<!--                          ? '联创店'-->
<!--                          : '未开通'-->
<!--                      }}-->
<!--                    </p>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>

          <div class="layer">
            <div class="statistics-box">
              <div class="statistics-item">
                <div class="item-num" style="margin-left: 10px;">
                  <span>{{ formaterMoney(userInfo.balance ? userInfo.balance : 0) }}₫</span>
                </div>
                <div class="icon-text">
                  <i class="iconfont iconyue"></i>
                  <div class="text">Tổng số dư</div>
                </div>
              </div>
<!--              <div class="hr"></div>
              <div class="statistics-item">
                <div class="item-num">
                  ₫<span>{{ userInfo.qianbao ? userInfo.qianbao : 0 }}</span>
                </div>
                <div class="icon-text">
                  <i class="iconfont iconqiandou"></i>
                  <div class="text">Số dư có thể rút</div>
                </div>
              </div>
              <div class="hr"></div> -->
<!--              <div class="statistics-item">
                <div class="item-num">
                  <span>{{ userInfo.qiandou ? userInfo.qiandou : 0 }}</span>
                </div>
                <div class="icon-text">
                  <i class="iconfont iconqianbao"></i>
                  <div class="text">Duobao vàng</div>
                </div>
              </div> -->
              <div class="hr"></div>
              <div class="statistics-item">
                <div class="item-num">
                  <span>{{ formaterMoney(userInfo.integral ? userInfo.integral : 0) }}₫</span>
                </div>
                <div class="icon-text" style="margin-right: 5px; ">
                  <i class="iconfont iconjiaquanfenhong"></i>
                  <div class="text">Điểm tích lũy</div>
                </div>
              </div>
            </div>
            <div class="order-form">
              <router-link
                class="header border-1px--bottom"
                to="/personal/my-order/0"
                tag="div"
              >
                <span class="label">Đơn hàng của tôi</span>
                <span class="value">Tất cả các đơn đặt hàng</span>
                <i class="cubeic-arrow"></i>

                <!-- <i class="iconfont iconxiaojiantou"></i> -->
              </router-link>
              <icon-list
                :data="iconList1"
                icon-type="icon"
                class="icon-list"
                :is-width="'width: 25%'"
              ></icon-list>
            </div>
          </div>
        </div>
        <div class="nav-lists">
          <router-link to="/account" class="nav-item border-1px--bottom">
            <div class="left">
              <img src="../../assets/images/account.png" />
              <div>Tài khoản của tôi</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link>
          <!-- <router-link
            to="/withdrawDeposit"
            class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/withdraw.png" />
              <div>我要提现</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
          <!-- <router-link to="/poster" class="nav-item border-1px--bottom">
            <div class="left">
              <img src="../../assets/images/poster.png" />
              <div>分享海报</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
          <!-- <router-link to="/deposit" class="nav-item border-1px--bottom">
            <div class="left">
              <img src="../../assets/images/post.png" />
              <div>我的寄售</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
<!--          <router-link to="/tixian" class="nav-item border-1px&#45;&#45;bottom">-->
<!--            <div class="left">-->
<!--              <img src="../../assets/images/post.png" />-->
<!--              <div>我要提现</div>-->
<!--            </div>-->
<!--            <i class="iconfont iconxiaojiantou"></i>-->
<!--          </router-link>-->
          <router-link to="/rechargeHome" class="nav-item border-1px--bottom">
            <div class="left">
              <img src="../../assets/images/post.png" />
              <div>Tôi muốn nạp tiền</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link>
          <router-link to="/accountAuthentication" class="nav-item border-1px--bottom" v-if="isXsFlag.data != 1">
            <div class="left">
              <img src="../../assets/images/post.png" />
              <div>Tài khoản tên thật</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link>
          <router-link
            to="/personal/address"
            class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/site.png" />
              <div>Địa chỉ giao hàng</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link>
          <!-- <router-link to="/myTeam" class="nav-item border-1px--bottom">
            <div class="left">
              <img src="../../assets/images/my-team.png" />
              <div>我的团队</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
          <router-link
            tag="div"
            to="/personal/user-info"
            class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/set.png" />
              <div>Trung tâm cá nhân</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i
          ></router-link>
          <!-- 客服 -->
          <router-link
            tag="div"
            to="/personal/kefu"
            class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/td.png" />
              <div>Liên hệ Hỗ trợ</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i
          ></router-link>
<!--          <router-link
              tag="div"
              to="/zhanneiMessage"
              class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/poster.png" />
              <div>Thông tin trang web</div>
              <span v-if="msgCount !== 0">{{ msgCount }}</span>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
<!--          <router-link
              tag="div"
              to="/Treaty?type=2"
              class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img style="width: 28px;height: 28px;margin-left: 2px;" src="../../assets/images/yinsizhengce.png" />
              <div>Chính sách bảo mật</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
<!--          <router-link
              tag="div"
              to="/Treaty?type=1"
              class="nav-item border-1px--bottom"
          >
            <div class="left">
              <img src="../../assets/images/fuwuxieyi.png" />
              <div>Thỏa thuận dịch vụ</div>
            </div>
            <i class="iconfont iconxiaojiantou"></i>
          </router-link> -->
<!--          <div class="zhengce">-->
<!--            <button class="secretagreement" @click="toTreaty(2)">《隐私政策》</button>-->
<!--            <button class="useragreement" @click="toTreaty(1)">《服务协议》</button>-->
<!--          </div>-->
          
          <div class="out-login" @click="outLogin">
            <div class="out-login-btn">Đăng xuất</div>
          </div>
        </div>
      </div>
    </div>
  </zui-view>
</template>

<script>
import IconList from '_com/icon-list/icon-list';
import { getAwaitPayOrderCount_api,webSetDetail_api } from '_api/order';
import { imgPath } from '@/libs/filters';
import { getUserInfo_api, checkRole_api } from '_api/user';
import { Dialog } from 'vant';
import axios from "../../api/request_two";
import store from '@/store';
export default {
  name: 'Personal',
  components: {
    IconList,
    [Dialog.name]: Dialog,
  },
  provide() {
    return {
      refreshParentData: this.refreshCount,
      isPer: true,
    };
  },
  data() {
    return {
      msgCount: 0, // 站内信息未读总数
      headerImg: require('../../assets/images/headerImg.png'),
      userInfo: {},
      avatar: '',
      isShowShop: false,
      iconList0: [
        {
          count: 0,
          name: 'đậu Qian',
          path: '/personal/my-order/1',
          icon: 'iconfont icondaifukuan',
          num: 230,
        },
        {
          count: 0,
          name: 'tiền bảo',
          path: '/personal/my-order/1',
          icon: 'iconfont icondaifukuan',
          num: 80,
        },
        {
          count: 0,
          name: 'THĂNG BẰNG',
          path: '/personal/my-order/1',
          icon: 'iconfont icondaifukuan',
          num: 24,
        },
        {
          count: 0,
          name: 'Tích phân',
          path: '/personal/my-order/1',
          icon: 'iconfont icondaifukuan',
          num: 24,
        },
      ],
      iconList1: [
        {
          count: 0,
          name: 'Trong khi chờ thanh toán',
          path: '/personal/my-order/1',
          icon: 'iconfont icondaifukuan',
        },
        {
          count: 0,
          name: 'Được giao',
          path: '/personal/my-order/2',
          icon: 'iconfont icondaifahuo',
        },
        {
          count: 0,
          name: 'Đã nhận được',
          path: '/personal/my-order/3',
          icon: 'iconfont icondaishouhuo',
        },
        {
          name: 'Đánh giá',
          path: '/personal/my-order/4',
          icon: 'iconfont iconyiwancheng',
        },
      ],
      isXsFlag: {}
    };
  },
  filters: {
    imgPath,
  },
  async created() {
    this.getMsgCount()
    // 获取登录时存储到本地的用户信息
    let token = sessionStorage.getItem('token')
    console.log(token)
    let userInfo = await getUserInfo_api({
      token: token
    });
    console.log('userInfo', userInfo);
    this.userInfo = userInfo;
    let { head_img } = userInfo;
    if (head_img) {
      this.avatar = imgPath(head_img);
      console.log(this.avatar);
    } else {
      this.avatar = this.headerImg;
      console.log(this.avatar);
    }
    if (userInfo.role_id !== 0) {
      this.isShowShop = true;
    }

    let res = await checkRole_api();
    if (res.status === 1) {
      let shop_name = '';
      if (res.role_id === 1) {
        shop_name = 'cửa hàng kinh doanh';
      } else if (res.role_id === 2) {
        shop_name = 'cửa hàng hình ảnh';
      } else if (res.role_id === 3) {
        shop_name = 'cửa hàng hàng đầu';
      } else if (res.role_id === 4) {
        shop_name = 'cửa hàng liên trang';
      } else if (res.role_id === 0) {
        return false;
      }
      Dialog.confirm({
        title: 'gợi ý',
        message: 'Chứng chỉ cửa hàng đám mây của bạn đã hết hạn và bạn cần đăng nhập lại để tận hưởng những lợi ích của cửa hàng đám mây',
      })
        .then(() => {
          let params = {
            plate_id: res.role_id,
            name: shop_name,
            is_exchange: '',
            tip: 3,
          };
          params = JSON.stringify(params);
          this.$router.push({
            path: '/goods-list/' + params,
          });
          localStorage.setItem('tip', 3);
        })
        .catch(() => {});
    }
    // 调用是否显示接口
    let res2 = await axios.post('api/index/is_sx')
    console.log(res2);
    if (res2.data.data) {
      this.isXsFlag = res2.data
    }
  },
  activated() {
    // this.$refs.scroll.refresh();
    this.refreshCount();
  },

  methods: {
    

    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';

        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('') ;
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    },
    
    // 点击消息通知按钮跳转页面
    messagePage() {
      this.$router.push({
        path: '/messageTongzhi'
      })
    },
    outLogin() {
      store.dispatch('logoutAct');
      this.$store.dispatch('getShopcartCount');
    },
    // 获取站内信息总数
    async getMsgCount() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/msg_log', {
        user_id: userId
      })
      console.log(res);
      if (res.data.code === 200) {
        this.msgCount = res.data.data.count
      }
    },
     toTreaty(type){
      this.$router.push({
        name: 'Treaty',
        query: {
          type: type,
        },
      });
    },
    jumpUrl() {
      this.$router.push('/personal/user-info');
    },
    async refreshCount() {
      let total = await getAwaitPayOrderCount_api();
      console.log('total', total)
      this.iconList1[0].count = total.status1;
      this.iconList1[1].count = total.status2;
      this.iconList1[2].count = total.status3;
    },
    mobileFilter(val) {
      if (val) {
        let reg = /^(.{3}).*(.{4})$/;
        let phone = val.replace(reg, '$1****$2');
        return phone;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.secretagreement{
width:100%;
height: 45px;
background: #f56c6c;
margin: 10px 0;
text-align: center;
color: #fff;
}
.useragreement{
width: 100%;
height: 45px;
background: #f56c6c;
text-align: center;
margin: 10px 0;
color: #fff;
}
.scrollContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
}

.personal-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;

  & >>> {
    .icon-list {
      padding: 10px;

      .iconfont {
        color: #DF5959;
      }

      p {
        font-size: 12px;
      }
    }
  }
}

.position-top {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 288px;
  background-image: url('../../assets/images/personal.png');
  background-size: 100% 100%;
  flex-shrink: 0;
}

.user-info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 23px 15px;
  margin-bottom: 10px;
  color: #fff;
  position: relative;
  flex-shrink: 0;
}
.vipStyle {
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 20px;
  padding: 3px 10px;
  //border: 1px solid orangered;
  background-color: rgba(0,0,0,.3);
  //position: absolute;
  //left: 200px;
  //top: 50%;
  transform translateY(-50%);
  display: flex;
  justify-content center;
  align-item: center;
}
.user-info__avatar {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
}

.user-info__bd {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 6px 0;
}

.user-info__bd_left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 0;
}

.user-info__bd_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0;
  align-items: flex-end;
  font-size: 12px;

  .row-name {
    display: flex;
    font-size: 16px;
    line-height: 20px;
  }

  .name {
    font-weight: 700;
  }

  .role {
    font-size: 14px;
    color: #999;
    white-space: nowrap;
  }

  .phone {
    color: rgba(255, 255, 255, 1);
    opacity: 0.6;
  }
}

.iconfont {
  align-self: center;
}

.cubeic-arrow {
  align-self: center;
  color: #fff;
}

.layer {
  bottom: -70px;
  margin: 0 10px;
  margin-bottom: 10px;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);

  .order-form {
    border-radius: 5px;
    background: #ffffff;
    overflow: hidden;
    margin-top: 10px;
  }

  .header {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 10px 0 0 0;

    .label {
      flex: 1;
    }

    .value {
      color: #666;
      font-size: 12px;
    }

    .cubeic-arrow {
      color: #666;
      padding-left: 6px;
    }
  }
}

.link {
  margin-top: 60px;
  display: block;
  text-align: center;
}

.nav-lists {
  margin-top: 80px;
  height: 100%;
  padding: 0 20px;
  flex: 1;
  overflow-y: scroll;
  padding-bottom: 150px;

  .nav-item {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
  }

  .left {
    display: flex;
    align-items: center;
    position: relative;
  }
  .left span {
    width: 18px;
    height: 18px;
    line-height: 18px;
    background-color: red;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    right: -15px;
    top: -2px;
  }

  .left img {
    width: 30px;
    height: 30px;
  }

  .left div {
    font-size: 14px;
    margin-left: 10px;
  }
}

.left-box {
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.name-phone {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.user-name {
  margin-bottom: 20px;
}

.right-box {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.right-box-active {
  background: linear-gradient(132deg, rgba(#E86622) 0%, rgba(#DC0000) 100%);
}

.statistics-box {
  height: 85px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.hr {
  width: 1px;
  height: 40px;
  background: #E5E5E5;
}

.statistics-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-text {
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #E89222;
  font-size: 12px;
}

.item-num {
  font-size: 12px;
}

.item-num span {
  font-size: 18px;
}

.text {
  margin-left: 3px;
}
.out-login {
  height: 50px
  backgroun:d #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
}
.out-login-btn {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  background: #DF5959;
}
.messageTongzhi {
  padding: 5px 15px;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: rgba(233,89,89,.5);
  border-radius: 20px;
  font-size: 14px;
}
</style>
