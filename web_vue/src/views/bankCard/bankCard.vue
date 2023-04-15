<template>
  <div class="bankCard">
    <Header title="Thẻ ngân hàng"></Header>
    <div class="content">
      <ul>
        <li v-for="(item) in yhkInfo" :key="item.id">
          <div>
            <span>{{ item.yh_name }}</span>
            <span style="font-size: 14px;">{{ item.kahao }}</span>
          </div>
          <div>
            <button @click="updateBankCard(item)">Ôn lại</button>
            <button @click="deleteBankCard(item)">cởi trói</button>
            <button v-if="item.is_mo === 0" @click="is_moClick(item)">{{ item.is_mo === 0 ? 'đặt làm mặc định' : '' }}</button>
          </div>
        </li>
      </ul>
      <div class="addBankCard" @click="addBankCard">
        <img src="../../assets/images/add.png" alt="">
        <button>thêm thẻ ngân hàng</button>
      </div>
    </div>
    <popup :visible.sync="visiblePopup">
      <div class="popup-container">
        <div class="popup-title">gợi ý</div>
        <div class="popup-sub-title">Bạn có chắc chắn hủy liên kết thẻ ngân hàng không?</div>
        <div class="popup-btns border-1px--top">
          <div class="btn border-1px--right" @click="visiblePopup = false">
            Hủy bỏ
          </div>
          <div class="btn" @click="okDelete">cởi trói</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from '_com/popup/popup.vue';
import axios from '../../api/request_two';
import Header from '../../components/header/header.vue';
export default {
  name: "bankCard",
  data() {
    return {
      yhkInfo: [],
      visiblePopup: false,
      deleteYhkInfo: {}
    }
  },
  created() {
    this.getBankData();
  },
  methods: {
    getBankData() {
      // 获取银行卡信息
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      axios.post('api/member/get_yhk', {
        user_id: userId
      }).then(res => {
        this.yhkInfo = res.data.data
        console.log(this.yhkInfo)
      })
    },
    // 添加银行卡事件
    addBankCard() {
      this.$router.push('/addBankCard');
    },
    // 删除银行卡
    deleteBankCard(yhkInfo) {
      this.visiblePopup = true;
      this.deleteYhkInfo = yhkInfo
    },
    // 确定解绑银行卡
    async okDelete() {
      let result = await axios.post('api/member/del_yhk', {
        id: this.deleteYhkInfo.id
      })
      if (result.data.msg === 'Thành công') {
        this.$toastBounce('đã xóa thành công!')
        this.visiblePopup = false
        this.getBankData()
      } else {
        this.$toastBounce(result.data.msg)
      }
    },
    // 设为默认值按钮点击事件
    async is_moClick(yhkInfo) {
      let result = await axios.post('api/member/upd_yhk_mo', {
        id: yhkInfo.id
      })
      console.log(result)
      if (result.data.msg === 'Thành công') {
        this.$toastBounce('Đặt làm thẻ ngân hàng mặc định thành công!')
        this.getBankData();
      } else {
        this.$toastBounce(result.data.msg)
      }
    },
    // 点击修改按钮
    updateBankCard(yhkInfo) {
      this.$router.push({
        path: '/updateBankCard',
        query: {
          yhkInfo: yhkInfo
        }
      });
    },
  },
  components: {
    Header,
    popup
  }
}
</script>

<style lang="css" scoped>
.bankCard {
  width: 100%;
  height: 100vh;
  background-color: #F4F4F4;
}
.content {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
}
.content ul {
  width: 100%;
}
.content ul li {
  width:100%;
  height: 70px;
  border-radius: 10px;
  background-color: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  margin-top: 10px;
}
.content ul li div:nth-of-type(1) {
  display: flex;
  height: 50px;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  color: #fff;
}
.content ul li div:nth-of-type(2) {
  display: flex;
  justify-content: space-around;
}
.content ul li div:nth-of-type(2) button {
  width: 50px;
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
}
.content ul li div:nth-of-type(2) button:nth-of-type(1) {
  background-color: deepskyblue;
}
.content ul li div:nth-of-type(2) button:nth-of-type(2) {
  background-color: red;
  margin: 0 10px;
}
.content ul li div:nth-of-type(2) button:nth-of-type(3) {
  width: 70px;
  background-color: orange;
}
.content .addBankCard {
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 10px;
}
.content .addBankCard img {
  width: 25px;
  height: 25px;
}
.content .addBankCard button {
  margin-left: 10px;
}
.popup-container {
  width: 100%;
  height: 130px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  /*padding: 10px 10px;*/
  /*box-sizing: border-box;*/
  position: relative;
}
.popup-title {
  font-size: 20px;
  margin-top: 10px;
}
.popup-sub-title {
  margin-top: 30px;
  color: red;
}
.popup-btns {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.popup-btns div {
  flex: 1;
  height: 28px;
  line-height: 28px;
  color: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
}
.popup-btns div:nth-of-type(1) {
  border-right: 0;
  color: #ccc;
}
.popup-btns div:nth-of-type(2) {
  color: #000;
}
</style>