<template>
  <div class="updatePassword">
    <Header title="Thay đổi mật khẩu đăng nhập"></Header>
    <div class="content">
      <div class="form-list">
        <div class="form-item">
          <div class="form-item__label">Mật khẩu cũ</div>
          <cube-input
              clearable
              v-model="userInfo.oldPassword"
              type="password"
              placeholder="Vui lòng nhập mật khẩu đăng nhập cũ của bạn"
              :eye="eye"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">mật khẩu mới</div>
          <cube-input
              clearable
              v-model="userInfo.newPassword"
              type="password"
              placeholder="Vui lòng nhập mật khẩu đăng nhập mới của bạn"
              :eye="eye"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Xác nhận mật khẩu</div>
          <cube-input
              clearable
              v-model="userInfo.okPassword"
              type="password"
              placeholder="Vui lòng xác nhận mật khẩu đăng nhập mới của bạn"
              :eye="eye"
          ></cube-input>
        </div>
      </div>
    </div>
    <cube-button class="cube-button" @click="submitUserInfo">Thay đổi</cube-button>
  </div>
</template>

<script>
import Header from '../../../components/header/header';
import axios from '../../../api/request_two';
import validator from '@/libs/validator';
export default {
  name: "updatePassword",
  data() {
    return {
      userInfo: {
        oldPassword: '',
        newPassword: '',
        okPassword: ''
      },
      eye: {
        open: true,
        reverse: true
      }
    }
  },
  methods: {
    async submitUserInfo() {
      // 判断逻辑
      if (this.userInfo.oldPassword === '' || !validator.checkPwd(this.userInfo.oldPassword)) {
        this.$toastBounce('Vui lòng nhập mật khẩu đăng nhập cũ của bạn!')
        return
      } else if (this.userInfo.newPassword === '' || !validator.checkPwd(this.userInfo.newPassword)) {
        this.$toastBounce('Vui lòng nhập mật khẩu đăng nhập mới của bạn!')
        return
      } else if (this.userInfo.okPassword === '') {
        this.$toastBounce('Vui lòng xác nhận mật khẩu đăng nhập mới của bạn!')
        return
      } else if (this.userInfo.newPassword !== this.userInfo.okPassword) {
        this.$toastBounce('Mật khẩu mới đã nhập sai hai lần, vui lòng nhập lại!')
        return
      }
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/upd_pass', {
        user_id: userId,
        pass: this.userInfo.oldPassword,
        new_pass: this.userInfo.newPassword
      })
      if (res.data.code === 200) {
        this.$toastBounce('mật khẩu đã được cập nhật!')
        this.$router.push('/personal/user-info')
      } else {
        this.$toastBounce(res.data.msg)
      }
      console.log(res);
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.updatePassword{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.content {
  width: 100%;
  margin-top: 10px;
}
.content .form-list {
  width: 100%;
}
.content .form-list .form-item {
  font-size: 16px;
  height: 70px;
}
>>> .content .form-list .form-item .cube-input-field {
  width: 80% !important;
  border: 0;
  height: 40px;
  font-size: 18px;
}
>>> .content .form-list .form-item .cube-input::after {
  border: 0;
  border-bottom: 1px solid #ccc;
}
>>> .content .form-list .form-item .cube-input::after  {
  width: 100%;
}
>>> .content .form-list .form-item .cube-select {
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 0;
}
>>> .content .form-list .form-item .cube-select::after {
  border: 0;
  border-bottom: 1px solid #ccc;
}
>>> .content .form-list .form-item .cube-select span {
  color: #999999;
}
.cube-button {
  background-color: #DF5959;
  margin-top:20px;
}
</style>