<template>
  <div class="register">
    <Header title="đăng ký" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <ul>
        <li>
          <span>số điện thoại</span>
          <input type="text" placeholder="Xin vui lòng điền số điện thoại của bạn" v-model="registerInfo.phone">
        </li>
        <li>
          <span>mật khẩu</span>
          <input :type="passwordType" placeholder="xin vui lòng nhập mật khẩu" v-model="registerInfo.password">
          <img v-if="passwordEye" src="../../assets/images/eye.png" alt="" @click="passwordClick">
          <img v-else src="../../assets/images/bieye.png" alt="" @click="passwordClick">
        </li>
        <li>
          <span>Xác nhận mật khẩu</span>
          <input :type="okPasswordType" placeholder="Vui lòng xác nhận mật khẩu của bạn" v-model="registerInfo.okPassword">
          <img v-if="okPasswordEye" src="../../assets/images/eye.png" alt="" @click="okPasswordClick">
          <img v-else src="../../assets/images/bieye.png" alt="" @click="okPasswordClick">
        </li>
<!--        <li>
          <span>mã xác nhận</span>
          <input type="text" placeholder="vui lòng nhập mã xác nhận" v-model="registerInfo.yanzhengma">
          <button @click="sendYanZhengMa" :disabled="sendModel.countFlag" style="color: #E0A26C">
            {{sendModel.btnMsg == null ? sendModel.countNum+'sgửi lại sau' : sendModel.btnMsg}}
          </button>
        </li> -->
        <li>
          <span>mã giới thiệu</span>
          <input type="text" placeholder="Vui lòng nhập mã giới thiệu" v-model="registerInfo.tuijianma">
        </li>
      </ul>
      <cube-button class="cube-button" @click="submitRegister">đăng ký</cube-button>
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
      registerInfo: {
        username: '',
        password: '',
        phone: '',
        yanzhengma: '',
        tuijianma: '',
        okPassword: '',
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
      passwordType: 'password',
      okPasswordType: 'password',
      okPasswordEye: false
    }
  },
  beforeRouteEnter(to,from,next) {
    console.log(from);
    console.log(to);
    console.log(this)
    let code = to.fullPath.split('=')[1]
    next(vm => {
      if (code) {
        vm.registerInfo.tuijianma = code
      }
    })
  },
  methods: {
    okPasswordClick() {
      if (this.okPasswordEye) {
        this.okPasswordEye = false
        this.okPasswordType = 'password'
      } else {
        this.okPasswordEye = true
        this.okPasswordType = 'text'
      }
    },
    passwordClick() {
      if (this.passwordEye) {
        this.passwordEye = false
        this.passwordType = 'password'
      } else {
        this.passwordEye = true
        this.passwordType = 'text'
      }
    },
    async submitRegister() {
      console.log(this.registerInfo);
      // 判断验证
      if (this.registerInfo.phone === '') {
        this.$toastBounce('Xin vui lòng điền số điện thoại của bạn!');
        return
      } else if (!validator.checkPhone(this.registerInfo.phone)) {
        // this.$toastBounce('Vui lòng nhập đúng số điện thoại!');
        // return
      } else if (this.registerInfo.password === '') {
        this.$toastBounce('xin vui lòng nhập mật khẩu!');
        return
      } else if (!validator.checkPwd(this.registerInfo.password)) {
        this.$toastBounce('Độ dài mật khẩu là 6~18 ký tự có chữ cái, vui lòng nhập lại!');
        return
      } else if (!this.registerInfo.okPassword) {
        this.$toastBounce('Vui lòng nhập mật khẩu xác nhận!');
        return
      } else if (this.registerInfo.password !== this.registerInfo.okPassword) {
        this.$toastBounce('Mật khẩu không khớp với mật khẩu xác nhận, vui lòng nhập lại!');
        return
      } else if (!this.registerInfo.yanzhengma) {
        // this.$toastBounce('Mã xác minh trống, vui lòng nhập mã xác minh!')
        // return
      }
      // 已填写验证码逻辑
      console.log(this.registerInfo.yanzhengma);
      console.log(this.resultYanzhengma);

      this.registerInfo.username = this.registerInfo.phone
      let result = await axios.post('api/Login/register', {
        code: this.registerInfo.yanzhengma,
        // phone: parseInt(this.registerInfo.phone),
		phone: this.registerInfo.phone,
        nickname: this.registerInfo.username,
        rec_code: this.registerInfo.tuijianma,
        pass: this.registerInfo.password
      })
      if (result.data.code === 200) {
        this.$toastBounce('đăng ký thành công!')
        this.$router.push('/login')
      } else {
        this.$toastBounce(result.data.msg)
      }
    },
    async sendYanZhengMa() {

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

      // 判断用户有没有输入电话号码
      if (this.registerInfo.phone.length !== 11) {
        this.$toastBounce('Vui lòng nhập đúng số điện thoại');
        return
      }
      // 输入正确逻辑
      let result = await axios.post('api/Login/send_code', {
        phone: this.registerInfo.phone,
        is: 2
      });
      this.resultYanzhengma = result.data.data
    },
  },
  components: {
    Header,
  }
}
</script>
<style lang="stylus" scoped>
.register {
  width: 100%;
  height: 100vh;
  padding: 10px 10px;
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
>>> .content .form-list .form-item,.yanzhengma .cube-input::after  {
  width: 100%;
}
.content .content .form-list .form-item,.yanzhengma .inputBtn {
  display: flex;
}
.content .content .form-list .form-item,.yanzhengma .inputBtn button {
  width: 120px;
  height: 40px;
  background-color: #fff;
  margin-left: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #DC9858;
}
.cube-button {
  background-color: #DF5959;
  margin-top:20px;
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