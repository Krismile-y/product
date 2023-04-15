<template>
  <div class="updateBankCard">
    <Header title="Sửa thông tin thẻ ngân hàng"></Header>
    <div class="content">
      <ul>
        <li>
          <label for="bankName">tên ngân hàng：</label>
          <input type="text" id="bankName" placeholder="Vui lòng nhập tên ngân hàng" v-model="bankInfo.bankName">
        </li>
        <li>
          <label for="bankCard">số thẻ ngân hàng：</label>
          <input type="text" id="bankCard" placeholder="Vui lòng nhập số thẻ ngân hàng" v-model="bankInfo.bankCard">
        </li>
        <li>
          <label for="bankAddress">Địa chỉ đăng ký ngân hàng：</label>
          <input type="text" id="bankAddress" placeholder="Vui lòng nhập địa chỉ ngân hàng đã đăng ký" v-model="bankInfo.bankAddress">
        </li>
        <li>
          <label for="bankUserName">Tên người dùng ngân hàng：</label>
          <input type="text" id="bankUserName" placeholder="Vui lòng nhập tên người dùng ngân hàng" v-model="bankInfo.bankUserName">
        </li>
        <li>
          <label for="is_mo">Nó có phải là mặc định：</label>
          <select name="" id="is_mo" v-model="bankInfo.is_mo">
            <option value="1">mặc định</option>
            <option value="0">không có mặc định</option>
          </select>
        </li>
      </ul>
      <button @click="updateBankCardClick">Ôn lại</button>
    </div>
  </div>
</template>

<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header';
export default {
  name: "updateBankCard",
  data() {
    return {
      bankInfo: {
        bankName: '',
        bankCard: '',
        bankAddress: '',
        bankUserName: '',
        is_mo: '',
        id: ''
      }
    }
  },
  created() {
    this.bankInfo.bankName = this.$route.query.yhkInfo.yh_name;
    this.bankInfo.user_id = this.$route.query.yhkInfo.user_id;
    this.bankInfo.is_mo = this.$route.query.yhkInfo.is_mo;
    this.bankInfo.bankCard = this.$route.query.yhkInfo.kahao;
    this.bankInfo.bankAddress = this.$route.query.yhkInfo.zuceyh;
    this.bankInfo.bankUserName = this.$route.query.yhkInfo.user_name;
    this.bankInfo.id = this.$route.query.yhkInfo.id;
    console.log(this.bankInfo)
  },
  methods: {
    async updateBankCardClick() {
      // 判断校验
      if (this.bankInfo.bankName === '') {
        this.$message.fail('请填写银行名称!')
        return
      } else if (this.bankInfo.bankCard === '') {
        this.$message.fail('Vui lòng điền số thẻ ngân hàng!')
        return
      } else if (this.bankInfo.bankAddress === '') {
        this.$message.fail('Vui lòng điền địa chỉ đăng ký của ngân hàng!')
        return
      } else if (this.bankInfo.bankUserName === '') {
        this.$message.fail('Vui lòng điền tên người dùng ngân hàng!')
        return
      } else if (this.bankInfo.is_mo === '') {
        this.$message.fail('Vui lòng chọn có phải là thẻ ngân hàng mặc định hay không!')
        return
      }
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let result = await axios.post('api/member/upd_yhk_info', {
        id: this.bankInfo.id,
        user_id: userId,
        is_mo: this.bankInfo.is_mo,
        kahao: parseInt(this.bankInfo.bankCard),
        zuceyh: this.bankInfo.bankAddress,
        yh_name: this.bankInfo.bankName,
        user_name: this.bankInfo.bankUserName,
      });
      console.log(result);
      if (result.data.msg === 'Thành công') {
        this.$message.success('sửa đổi thành công!')
        this.$router.push('/bankCard')
      } else {
        this.$message.fail(result.data.msg)
      }
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.updateBankCard {
  width: 100%
}
.content {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.content ul {
  width: 100%;
}
.content ul li {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.content ul li label {
  width: 100px;
  text-align: right;
}
.content ul li input,select {
  width: 60%;
  border-radius: 10px;
  height: 50px;
  border: 1px solid #ccc;
  padding-left: 10px;
  box-sizing: border-box;
}
.content ul li select {
  width: 50%;
}
.content button {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  background-color: skyblue;
  color: #fff;
  font-size: 16px;
  display: block;
  margin: 15px auto 0;
}
</style>