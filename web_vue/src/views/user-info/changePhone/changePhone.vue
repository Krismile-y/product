<template>
  <div class="change-box">
    <Header :title="headerTitle"></Header>
    <div class="old-phone" v-if="isShowOld">
      <div class="top-box">
        <div class="old">{{ mobileFilter(userInfo.phone) }}</div>
        <div class="get-code">
          <div class="code-input">
            <input placeholder="nhập mã xác nhận" v-model="oldCode" />
          </div>
          <div class="hr"></div>
          <button
            disabled="false"
            class="get-code-btn"
            @click="sendVerifycode"
            :disabled="!disabledCodeBtn"
          >
            {{ codeText }}
          </button>
        </div>
      </div>
      <div class="verify" @click="onVerify">
        <div class="btn">xác minh</div>
      </div>
    </div>

    <div class="newPhone" v-else>
      <div class="top-box">
        <div class="new">
          <input placeholder="Nhập số di động mới" v-model="newPhone" />
        </div>
        <div class="get-code new-get-code">
          <div class="code-input">
            <input placeholder="nhập mã xác nhận" v-model="newCode" />
          </div>
          <div class="hr"></div>
          <button
            disabled="false"
            class="get-code-btn"
            @click="sendNewVerifycode"
            :disabled="!disabledNewCodeBtn"
          >
            {{ NewCodeText }}
          </button>
        </div>
      </div>
      <div class="verify" @click="binding">
        <div class="btn">để ràng buộc</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getUserInfo_api,
  sendmsg_api,
  updatePhone_api,
  verifPhone_api,
} from '_api/user';
import { Notify, Toast } from 'vant';
import Header from '_com/header/header';

export default {
  components: {
    [Notify.name]: Notify,
    [Toast.name]: Toast,
    Header,
  },
  data() {
    return {
      codeText: 'lấy mã xác minh',
      NewCodeText: 'lấy mã xác minh',
      disabledCodeBtn: true,
      disabledNewCodeBtn: true,
      phone: '',
      oldCode: '',
      newCode: '',
      time: null,
      userInfo: '',
      isShowOld: true,
      newPhone: '',
      headerTitle: 'Sửa số điện thoại di động',
    };
  },
  async created() {
    this.userInfo = await getUserInfo_api();
  },
  methods: {
    mobileFilter(val) {
      if (val) {
        let reg = /^(.{3}).*(.{4})$/;
        let phone = val.replace(reg, '$1****$2');
        return phone;
      }
    },
    // 验证旧手机号码
    async onVerify() {
      if (!this.oldCode) {
        Notify({ type: 'danger', message: 'vui lòng nhập mã xác nhận', duration: 2000 });
        return false;
      } else {
        let phone = this.userInfo.phone;
        let code = this.oldCode;
        let res = await verifPhone_api({ phone: phone, code: code });
        if (res.code === 200) {
          this.isShowOld = false;
        } else {
          Notify({ type: 'danger', message: res.msg, duration: 2000 });
        }
      }
    },

    // 绑定新手机号码
    async binding() {
      let reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
      let phone = this.userInfo.phone;
      let new_phone = this.newPhone;
      let code = this.newCode;
      if (!new_phone) {
        Notify({
          type: 'danger',
          message: 'Số điện thoại mới không được để trống',
          duration: 2000,
        });
        return false;
      } else if (!reg.test(new_phone)) {
        Notify({ type: 'danger', message: 'Định dạng điện thoại không chính xác', duration: 2000 });
        return false;
      } else if (!code) {
        Notify({ type: 'danger', message: 'mã xác minh phải được điền', duration: 2000 });
        return false;
      }
      let res = await updatePhone_api({
        phone: phone,
        new_phone: new_phone,
        code: code,
      });
      if (res.code === 200) {
        Toast('liên kết thành công');
        await this.$store.dispatch('getUserInfo');
        setTimeout(() => {
          this.$router.replace('/personal/user-info');
        }, 2000);
      } else {
        Notify({ type: 'danger', message: res.msg, duration: 2000 });
      }
    },

    async sendVerifycode() {
      this.countDown(60);
      let res = await sendmsg_api({ phone: this.userInfo.phone, type: 2 });
      if (res.code === 200) {
        Toast('Gửi thành công');
      } else {
        Toast(res.msg);
      }
    },
    // 新手机号码验证
    async sendNewVerifycode() {
      let reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
      if (!this.newPhone) {
        Notify({
          type: 'danger',
          message: 'Số điện thoại mới không được để trống',
          duration: 1000,
        });
        return false;
      } else if (!reg.test(this.newPhone)) {
        Notify({ type: 'danger', message: 'Định dạng điện thoại không chính xác', duration: 1000 });
        return false;
      }
      this.NewcountDown(60);
      let res = await sendmsg_api({ phone: this.newPhone, type: 1 });
      if (res.code === 200) {
        Toast('Gửi thành công');
      } else {
        Toast(res.msg);
      }
    },
    // 倒计时方法
    countDown(time) {
      if (time === 0) {
        this.disabledCodeBtn = true;
        this.codeText = 'lấy mã xác minh';
        return;
      } else {
        this.disabledCodeBtn = false;
        this.codeText = 'gửi lại(' + time + ')';
        time--;
      }
      setTimeout(() => {
        this.countDown(time);
      }, 1000);
    },

    NewcountDown(time) {
      if (time === 0) {
        this.disabledNewCodeBtn = true;
        this.NewCodeText = 'lấy mã xác minh';
        return;
      } else {
        this.disabledNewCodeBtn = false;
        this.NewCodeText = 'gửi lại(' + time + ')';
        time--;
      }
      setTimeout(() => {
        this.NewcountDown(time);
      }, 1000);
    },
  },
};
</script>

<style scoped lang="stylus" src="./changePhone.styl"></style>
