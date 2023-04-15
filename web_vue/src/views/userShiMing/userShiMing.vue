<template>
  <div class="userShiMing">
    <Header title="Tài khoản tên thật"></Header>
    <div class="content">
      <div class="form-list">
        <div class="form-item">
          <div class="form-item__label">tên thật</div>
          <cube-input
              clearable
              v-model="userData.username"
              placeholder="vui lòng nhập tên thật của bạn"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">mã số</div>
          <cube-input
              clearable
              v-model="userData.shenfenzheng"
              placeholder="vui lòng nhập số chứng minh nhân dân của bạn"
          ></cube-input>
        </div>
      </div>
      <cube-button @click="submitUserInfo">chứng nhận</cube-button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import axios from '../../api/request_two';
import { updateUser_api, getUserInfo_api } from '_api/user';
export default {
  name: "userShiMing",
  data() {
    return {
      userData: {
        username: '',
        shenfenzheng: ''
      },
      userInfo: {}
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    async getUserInfo() {
      let userInfo = await getUserInfo_api();
      this.userInfo = userInfo;
      this.userData.username = this.userInfo.card_name;
      this.userData.shenfenzheng = this.userInfo.id_card
    },
    // 提交实名认证信息按钮事件
    async submitUserInfo() {
      // 判断逻辑
      if (this.userData.username === '') {
        this.$toastBounce('vui lòng nhập tên thật của bạn!')
        return
      } else if (this.userData.shenfenzheng === '') {
        this.$toastBounce('vui lòng nhập số chứng minh nhân dân của bạn!')
        return
      }
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!reg.test(this.userData.shenfenzheng)) {
        this.$toastBounce('Vui lòng nhập số ID hợp lệ!')
        return
      }
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/update_name',{
        user_id: userId,
        id_card: this.userData.shenfenzheng,
        card_name: this.userData.username
      })
      if (res.data.code === 200) {
        this.$toastBounce('Xác thực tên thật thành công!')
        this.$router.push('/personal')
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.userShiMing {
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