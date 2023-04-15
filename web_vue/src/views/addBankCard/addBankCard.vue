<template>
  <div class="addBankCard">
    <Header title="thêm thẻ ngân hàng"></Header>
    <div class="content">
      <div class="form-list">
        <div class="form-item">
          <div class="form-item__label">số thẻ ngân hàng</div>
          <cube-input
              clearable
              v-model="bankInfo.bankCard"
              placeholder="Vui lòng nhập số thẻ ngân hàng của bạn"
              @blur="getBankCardInfo"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">tên ngân hàng</div>
          <cube-input
              clearable
              v-model="bankInfo.bankName"
              placeholder="Vui lòng nhập tên ngân hàng của bạn"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Địa chỉ mở tài khoản ngân hàng</div>
          <cube-input
              clearable
              v-model="bankInfo.bankAddress"
              placeholder="Vui lòng nhập địa chỉ đăng ký ngân hàng của bạn"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Tên người dùng ngân hàng</div>
          <cube-input
              clearable
              v-model="bankInfo.bankUserName"
              placeholder="Vui lòng nhập tên người dùng ngân hàng của bạn"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Nó có phải là mặc định</div>
          <cube-select
              :options="selectOptions"
              v-model="bankInfo.is_mo"
              @change="selectChange"
          ></cube-select>
        </div>
      </div>
      <cube-button class="cube-button" @click="submitBankInfo">Thêm vào</cube-button>
    </div>
  </div>
</template>

<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header';
export default {
  name: "addBankCard",
  data() {
    return {
      bankInfo: {
        bankName: '',
        bankCard: '',
        bankAddress: '',
        bankUserName: '',
        is_mo: '',
      },
      bankCardInfo: {}, // 银行卡信息
      selectOptions: ['mặc định', 'không có mặc định']
    }
  },
  methods: {
    // select的change事件
    selectChange () {
      console.log(this.bankInfo.is_mo)
    },
    // 提交新增银行卡信息
    async submitBankInfo() {
      // 判断校验
      if (this.bankInfo.bankName === '') {
        this.$toastBounce('Vui lòng điền tên ngân hàng!')
        return
      } else if (this.bankInfo.bankCard === '') {
        this.$toastBounce('Vui lòng điền số thẻ ngân hàng!')
        return
      } else if (this.bankInfo.bankAddress === '') {
        this.$toastBounce('Vui lòng điền địa chỉ đăng ký ngân hàng!')
        return
      } else if (this.bankInfo.bankUserName === '') {
        this.$toastBounce('Vui lòng điền tên người dùng ngân hàng!')
        return
      } else if (this.bankInfo.is_mo === '') {
        this.$toastBounce('Vui lòng chọn có phải là thẻ ngân hàng mặc định không!')
        return
      }
      console.log(this.bankInfo)
      console.log(this.bankCardInfo)
      // 判断银行卡是否正确（上线时记得打开）
      // if (!this.bankCardInfo.bankCode) {
      //   this.$toastBounce('银行卡卡号有误，请从新输入!')
      //   return
      // }
      // 信息填写完毕逻辑
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      this.bankInfo.is_mo = this.bankInfo.is_mo === 'mặc định' ? 1 : 0
      let result = await axios.post('api/member/add_yhk', {
        user_id: userId,
        is_mo: this.bankInfo.is_mo,
        kahao: parseInt(this.bankInfo.bankCard),
        zuceyh: this.bankInfo.bankAddress,
        yh_name: this.bankInfo.bankName,
        user_name: this.bankInfo.bankUserName,
      })
      console.log(result)
      if (result.data.msg === 'Thành công') {
        this.$toastBounce('Thêm thành công!')
        this.$router.push('/bankCard')
      } else {
        this.$toastBounce(result.data.msg)
      }
    },
    // 失去焦点自动获取银行卡信息
    getBankCardInfo() {
      this.$getBankcardinfo.getBankBin(this.bankInfo.bankCard, (err, data) => {
        if (!err) {
          this.bankCardInfo = data;
          this.bankInfo.bankName = this.bankCardInfo.bankName
          console.log("银行卡信息",data)
        } else {
          this.$toastBounce('Số thẻ ngân hàng bị sai, vui lòng nhập lại!')
        }
      })
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.addBankCard {
  width: 100%;
}
.content {
  width: 100%;
  padding: 0 10px;
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
  background-color: #EB6643;
  margin-top:20px;
}
</style>