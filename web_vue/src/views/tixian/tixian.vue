<template>
  <div class="tixian">
    <Header title="rút" right-title="Hồ sơ rút tiền" to-path-value="/tixianRecord"></Header>
    <div class="content">
      <div class="form-list">
        <div class="form-item">
          <div class="form-item__label">Số tiền rút</div>
          <cube-input
              clearable
              v-model="tixianInfo.jine"
              placeholder="Vui lòng nhập số tiền rút"
          ></cube-input>
        </div>
        <div class="form-item">
          <div class="form-item__label">Thẻ ngân hàng</div>
          <cube-select
              :options="selectOptions"
              v-model="tixianInfo.yinhangka"
              placeholder="Vui lòng chọn thẻ ngân hàng của bạn"
              @change="selectChange"
              @picker-show="selectShow"
          ></cube-select>
        </div>
        <div class="form-item">
          <div class="form-item__label">rút mật khẩu</div>
          <cube-input
              clearable
              :eye="eye"
              type="password"
              v-model="tixianInfo.password"
              placeholder="Vui lòng nhập mật khẩu rút tiền của bạn"
          ></cube-input>
        </div>
      </div>
      <cube-button @click="submitTiXian" class="cube-button">rút</cube-button>
      <div class="tishiMessage" v-html="tishiMessage"></div>
      <div class="gaoshi">
        <img src="../../assets/images/jg.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/header/header.vue';
import axios from "../../api/request_two";
export default {
  data() {
    return {
      tixianInfo: {
        jine: '',
        yinhangka: '',
        password: '',
      },
      bankInfo: [],
      selectOptions: [],
      selectChangeValue: '',
      eye: {
        open: true,
        reverse: true
      },
      disabledFlag: true,
      tishiMessage: '', // 提示信息
    }
  },
  created () {
    this.getBankData()
    this.getMessage()
  },
  methods: {
    // 获取提示信息
    async getMessage() {
      let res = await axios.post('api/index/gywm', {
        id: 11
      })
      if (res.data.code === 200) {
        this.tishiMessage = res.data.data.content
        console.log('tishiMessage',tishiMessage)
      } else {
        this.$toastBounce('Tìm nạp nội dung không thành công, vui lòng thử lại sau!')
      }
      console.log(res);
    },
    selectShow() {
      // 判断逻辑
      if (this.selectOptions.length === 0) {
        this.$toastBounce('Không có thông tin thẻ ngân hàng, vui lòng truy cập thông tin thẻ ngân hàng trung tâm cá nhân của tôi để thêm!')
        return
      }
    },
    // 获取银行卡信息
    getBankData() {
      // 获取银行卡信息
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      axios.post('api/member/get_yhk', {
        user_id: userId
      }).then(res => {
        this.bankInfo = res.data.data
        for (let item of this.bankInfo) {
          this.selectOptions.push(item.yh_name)
        }
        console.log(this.bankInfo)
      })
    },
    // 提交提现事件
    async submitTiXian() {
      // 判断逻辑
      if (this.tixianInfo.jine === '') {
        this.$toastBounce('Vui lòng điền số tiền rút!')
        return
      } else if (this.tixianInfo.password === '') {
        this.$toastBounce('Vui lòng điền mật khẩu rút tiền!')
        return
      }
      if (this.selectOptions.length === 0) {
        this.$toastBounce('Không có thông tin thẻ ngân hàng, vui lòng truy cập thông tin thẻ ngân hàng trung tâm cá nhân của tôi để thêm!')
        return
      }
      // 判断逻辑
      if (this.tixianInfo.jine.length === '') {
        this.$message.fail('Vui lòng nhập số tiền rút!')
        return
      } else if (parseFloat(this.tixianInfo.jine) < 0) {
        this.$message.fail('Vui lòng nhập đúng số tiền rút!')
        return
      }
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      for (let item of this.bankInfo) {
        if (item.yh_name === this.selectChangeValue) {
          this.tixianInfo.yinhangka = item.id
        }
      }
      let res = await axios.post('api/member/tx_apply', {
        user_id: userId,
        t_price: this.tixianInfo.jine,
        yhk_id: this.tixianInfo.yinhangka,
        tx_pass: this.tixianInfo.password
      })
      if (res.data.msg === 'Thành công') {
        this.$toastBounce('Rút tiền thành công!')
        this.$router.push('/carryRecord')
      } else {
        this.$toastBounce(res.data.msg)
      }
      console.log(res);
      console.log(this.tixianInfo)
    },
    // 银行卡选择器change事件
    selectChange(value) {
      this.selectChangeValue = value
    },
  },
  components: {
    Header,
  }
}
</script>
<style lang="css" scoped>
.tixian {
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
.content .gaoshi {
  width: 100%;
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.content .gaoshi img {
  width: 15px;
  height: 15px;
}
.content .gaoshi span {
  margin-left: 5px;
}
.tishiMessage {
  width: 100%;
  color: red;
}
</style>