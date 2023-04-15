<template>
  <div class="authenti">
    <Header title="Tài khoản tên thật"  fontSize="20px" iconSize="30px"></Header>
    <div class="authenti_panel">
        <div class="authenti_row">
            <span class="authenti_row_explan">tên thật</span>
            <div class="authenti_box">
                <input class="authenti_input" placeholder="vui lòng nhập tên thật của bạn" type="text" v-model="userData.username">
            </div>
        </div>
        <div class="authenti_row">
            <span class="authenti_row_explan">số ID</span>
            <div class="authenti_box">
                <input class="authenti_input" placeholder="Vui lòng nhập số CMND" type="text" v-model="userData.shenfenzheng">
            </div>
        </div>

        <cube-button class="authenti_button" @click="submitUserInfo" v-if="btnFlag">chứng nhận</cube-button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import axios from '../../api/request_two';
import { updateUser_api, getUserInfo_api } from '_api/user';
export default {
    name: "authenti",
    components: {
        Header,
    },
    data() {
      return {
        userData: {
          username: '',
          shenfenzheng: ''
        },
        userInfo: {},
        btnFlag: true
      }
    },
    watch: {

    },
    created() {
      this.getUserInfo()
    },
    methods: {
      // 获取用户信息
      async getUserInfo() {
        let userInfo = await getUserInfo_api();
        console.log(userInfo);
        if (userInfo.is_shi === 1) {
          this.btnFlag = false
        }
        this.userInfo = userInfo;
        this.userData.username = this.userInfo.card_name;
        this.userData.shenfenzheng = this.userInfo.id_card
      },
      // 提交实名认证信息按钮事件
      async submitUserInfo() {
        // 判断逻辑
        if (this.userData.username === '') {
          this.$toastBounce('xin vui lòng nhập tên thật của bạn!')
          return
        } else if (this.userData.shenfenzheng === '') {
          this.$toastBounce('xin vui lòng nhập số chứng minh nhân dân của bạn!')
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
  
}
</script>

<style lang="css" scoped>
.authenti, .authenti *{
    box-sizing: border-box;
}
.authenti{
    height: 100%;
}
.authenti_panel{
    height: calc(100% - 44px);
    width: 90vw;
    padding: 10px 0 0 0;
    margin: 0 auto;
}
.authenti_row{
    height: 50px;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
}
.authenti_row_explan{
    width: 80px;
    display: flex;
    align-items: center;
}
.authenti_box{
    width: calc(100% - 80px);
}
.authenti_button {
    width: 80vw;
    height: 40px;
    background: linear-gradient(90deg, #EB6643, #CA2A1C);
    border-radius: 3px; 
    margin: 0 auto;
    margin-top:40px;
}
</style>