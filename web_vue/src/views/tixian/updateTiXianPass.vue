<template>
  <div class="updatePass">
    <Header title="Sửa đổi mật khẩu rút tiền"></Header>
    <div class="content">
      <div class="form-list">
        <div class="form-item">
          <div class="form-item__label">Mật khẩu rút tiền cũ</div>
          <cube-input
              clearable
              :eye="eye"
              type="password"
              v-model="passwordObj.oldPassword"
              placeholder="Vui lòng nhập mật khẩu rút tiền cũ của bạn"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Mật khẩu rút tiền mới</div>
          <cube-input
              clearable
              :eye="eye"
              type="password"
              v-model="passwordObj.newPassword"
              placeholder="Vui lòng nhập mật khẩu rút tiền mới của bạn"
          ></cube-input>
        </div>
      </div>
      <cube-button @click="submitNewPass" class="cube-button">Trở lại</cube-button>
    </div>
  </div>
</template>

<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header';
export default {
  name: "updateTiXianPass",
  data() {
    return {
      passwordObj: {
        oldPassword: '',
        newPassword: ''
      },
      eye: {
        open: true,
        reverse: true
      }
    }
  },
  methods: {
    // 提交修改密码按钮事件
    async submitNewPass() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;

      // 判断逻辑
      if (this.passwordObj.oldPassword === '') {
        this.$message.fail('Vui lòng nhập mật khẩu rút tiền cũ!')
        return
      } else if (this.passwordObj.newPassword === '') {
        this.$message.fail('Vui lòng nhập mật khẩu rút tiền mới!')
        return
      }

      // 提现逻辑
      let res = await axios.post('api/login/upd_tx_pass', {
        pass: this.passwordObj.oldPassword,
        new_pass: this.passwordObj.newPassword,
        user_id: userId
      })
      if (res.data.code === 200) {
        this.$toastBounce('Đổi mật khẩu rút tiền thành công!')
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
.updatePass {
  width: 100%;
}
.content {
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
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