<template>
  <div class="forgetPassword">
    <Header title="quên mật khẩu" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <ul>
        <li>
          <span>Số điện thoại</span>
          <input type="text" placeholder="Vui lòng nhập số điện thoại" v-model="forgetPasswordInfo.phone">
        </li>
        <li>
          <span>mã xác nhận</span>
          <input type="text" placeholder="vui lòng nhập mã xác nhận" v-model="forgetPasswordInfo.code">
          <button @click="sendYanZhengMa" :disabled="sendModel.countFlag" style="color: #E0A26C">
            {{sendModel.btnMsg == null ? sendModel.countNum+'s gửi lại sau' : sendModel.btnMsg}}
          </button>
        </li>
        <li>
          <span>mật khẩu mới</span>
          <input :type="passwordType" placeholder="Xin vui lòng nhập mật khẩu" v-model="forgetPasswordInfo.pass">
          <img v-if="passwordEye" src="../../assets/images/eye.png" alt="" @click="passwordClick">
          <img v-else src="../../assets/images/bieye.png" alt="" @click="passwordClick">
        </li>
      </ul>
<!--      <ul>-->
<!--        <li>-->
<!--          <label for="phone">手机号码：</label>-->
<!--          <input type="text" id="phone" placeholder="请输入手机号码" v-model="forgetPasswordInfo.phone">-->
<!--        </li>-->
<!--        <li class="yanzhengma">-->
<!--          <label for="yanzhengma">验证码：</label>-->
<!--          <input type="text" id="yanzhengma" placeholder="请输入验证码" v-model="forgetPasswordInfo.code">-->
<!--          <button @click="sendYanZhengMa" :disabled="sendModel.countFlag">-->
<!--            {{sendModel.btnMsg == null ? sendModel.countNum+'s后重新发送' : sendModel.btnMsg}}-->
<!--          </button>-->
<!--        </li>-->
<!--        <li>-->
<!--          <label for="phone">新密码：</label>-->
<!--          <input type="password" id="phone" placeholder="请输入新密码" v-model="forgetPasswordInfo.pass">-->
<!--        </li>-->
<!--      </ul>-->
      <cube-button class="cube-button" @click="updatePasswordClick">cập nhật mật khẩu</cube-button>
    </div>
  </div>
</template>
<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header.vue';
import validator from '@/libs/validator';
export default {
  data() {
    return {
      forgetPasswordInfo: {
        phone: '',
        pass: '',
        code: ''
      },
      resultYanzhengma: '',
      sendModel: {
        // 倒计时周期
        countNum: 60,
        // 用于倒计时标记，true-正在倒计时
        countFlag: false,
        // 定时器
        intervalBtn: {},
        // 默认按钮的值
        btnMsg: 'lấy mã xác minh',
      },
      passwordEye: false,
    }
  },
  methods: {
    passwordClick() {
      if (this.passwordEye) {
        this.passwordEye = false
        this.passwordType = 'password'
      } else {
        this.passwordEye = true
        this.passwordType = 'text'
      }
    },
    // 发送验证码方法
    async sendYanZhengMa() {
      // 判断有没有输入电话号码
      if (this.forgetPasswordInfo.phone === '' || !validator.checkPhone(this.forgetPasswordInfo.phone)) {
        this.$toastBounce('Vui lòng nhập đúng số điện thoại!')
        return
      }
      // 设置btn倒计时时显示的信息
      this.sendModel.btnMsg = null;
      // 更改btn状态
      this.sendModel.countFlag = !this.sendModel.countFlag;
      // 设置倒计时
      this.sendModel.intervalBtn = setInterval(() => {
        if (this.sendModel.countNum <= 0) {
          // 重置btn提示信息
          this.sendModel.btnMsg = 'lấy mã xác minh';
          // 清除定时器
          clearInterval(this.sendModel.intervalBtn);
          // 更改btn状态
          this.sendModel.countFlag = !this.sendModel.countFlag;
          // 重置倒计时状态
          this.sendModel.countNum = 60;
        };
        // 倒计时
        this.sendModel.countNum--;
      }, 1000);

      // 判断用户是否输入电话号码
      if (this.forgetPasswordInfo.phone.length !== 11) {
        this.$toastBounce('Vui lòng nhập đúng số điện thoại');
        return
      }
      // // 输入正确逻辑
      // let result = await axios.post('api/Login/send_code', {
      //   phone: this.forgetPasswordInfo.phone,
      //   is: 2
      // });
      // this.resultYanzhengma = result.data.data
    },
    // 点击更新密码按钮方法
    async updatePasswordClick() {
      // 判断用户是否输入新密码
      if (this.forgetPasswordInfo.pass.length === 0) {
        this.$toastBounce('Vui lòng nhập mật khẩu mới!')
        return
      } else if (this.forgetPasswordInfo.pass.length < 6) {
        this.$toastBounce('Độ dài mật khẩu không được ít hơn 6 ký tự, vui lòng nhập lại!')
        return
      }
      let result = await axios.post('api/Login/forget', this.forgetPasswordInfo)
      if (result.data.msg === 'Thành công') {
        this.$toastBounce(result.data.msg)
        this.$router.push('/login')
      } else {
        this.$toastBounce(result.data.msg)
      }
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="css" scoped>
.forgetPassword {
  width: 100%;
  height: 100vh;
  padding: 10px 10px;
  box-sizing: border-box;
  font-family: Source Han Sans CN;
}
.content {
  width: 100%;
}
.cube-button {
  background-color: #DF5959;
  margin-top:40px;
}
.content ul {
  width: 100%;
}
.content ul li {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.content ul li span {
  width: 80px;
  font-size: 16px;
}
.content ul li input {
  flex:1;
}
.content ul li input::placeholder {
  font-size: 16px;
}
.content ul li img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.content ul li button {
  width: 100px;
}
</style>