<template>
  <div>
    <div class="login-box">
      <div class="content-box">
        <div class="content">
          <div class="cancel" @click="$router.go(-1)">
            <div>
              <i class="iconfont iconjiantou-zuo"></i>
              <span>trở lại</span>
            </div>
          </div>
          <div class="logo">
            <img src="../../../assets/images/logo.png" class="login-img" />
          </div>
          <div class="code-input">
            <input placeholder="vui lòng nhập mã xác nhận" v-model="code" />
          </div>
          <div class="get-code">
            <!--active有值的时候  -->
            <button
              :class="['get-code-btn', code ? 'active' : '']"
              @click="login"
            >
              Đăng nhập
            </button>
          </div>
          <!--					<div class="agreement">-->
          <!--						<div style="display: flex; align-items: center">-->
          <!--							<Checkbox v-model="checked" shape="square" icon-size="15px"></Checkbox>-->
          <!--							<div class="xy">-->
          <!--								同意-->
          <!--								<a href="##" @click="showXy">《用户协议》</a>-->
          <!--							</div>-->
          <!--						</div>-->
          <!--					</div>-->
        </div>
      </div>
    </div>
    <van-popup
      v-model="isShowXy"
      @click="isShowXy = false"
      class="mask"
      closeable="true"
    >
      <div class="protocol">
        <div class="text" v-html="xy"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Checkbox, Notify, Overlay, Popup, Dialog } from 'vant';
import { officialLogin_api, loginUser_api, getAgreement_api } from '_api/user';
export default {
  components: {
    Checkbox,
    [Notify.name]: Notify,
    [Overlay.name]: Overlay,
    [Popup.name]: Popup,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      checked: false,
      code: '',
      phone: '',
      wxCode: '',
      openid: '',
      isShowXy: false,
      xy: '',
      user_id: 0,
    };
  },
  created() {
    this.phone = this.$route.query.phone;
    this.wxCode = this.$route.query.wxCode;
    console.log('user_id>>>>>>>>>>', this.$route.query.user_id);
    if (this.$route.query.user_id) {
      this.user_id = this.$route.query.user_id;
    }
  },
  methods: {
    getIsApp() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
    async login() {
      if (!this.code) {
        Notify({ type: 'danger', message: 'vui lòng nhập mã xác nhận', duration: 1000 });
        return false;
      } else if (!this.phone) {
        Notify({ type: 'danger', message: 'số điện thoại không chính xác', duration: 1000 });
        return false;
      } else {
        // app端不用获取openid
        if (this.getIsApp()) {
          let officialLogin = await officialLogin_api({ code: this.wxCode });
          if (officialLogin.code === 200) {
            this.openid = officialLogin.data;
          } else {
            Notify({
              type: 'danger',
              message: officialLogin.msg,
              duration: 2000,
            });
            this.$router.go(-1);
            return false;
          }
        }
        let res;
        if (this.user_id !== 0) {
          res = await loginUser_api({
            phone: this.phone,
            code: this.code,
            openid: this.openid,
            user_id: this.user_id,
          });
        } else {
          res = await loginUser_api({
            phone: this.phone,
            code: this.code,
            openid: this.openid,
          });
        }
        if (res.code === 200) {
          this.$store.commit('SET_TOKEN', res.data.token);
          this.$store.dispatch('getUserInfo');
          this.$store.dispatch('getShopcartCount');
          console.log('是否是微信环境', this.getIsApp());
          console.log('是否有user_id', this.user_id);
          console.log('检测类型', typeof this.user_id);
          console.log('是否显示下载',this.getIsApp() && typeof this.user_id == 'number',);
          if (
            this.getIsApp() &&
            typeof this.user_id == 'number' &&
            this.user_id !== 0
          ) {
            Dialog.confirm({
              title: 'Tải ứng dụng',
              message: 'Bạn có muốn tải xuống APP không?',
            })
              .then(() => {
                window.location.href = 'https://api.btcexvip.top/';
              })
              .catch(() => {
                this.$router.push('/');
              });
          } else {
            this.$router.push('/');
          }
        } else {
          Notify({ type: 'danger', message: res.msg, duration: 2000 });
        }
      }
    },
    async showXy() {
      let res = await getAgreement_api();
      this.xy = res.login_agreement;
      this.isShowXy = true;
    },
  },
};
</script>

<style lang="stylus" scoped src="./code.styl"></style>
