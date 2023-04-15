<template>
  <div class="rechargeRecord">
    <Header title="Hồ sơ nạp tiền"></Header>
    <div class="content">
      <div class="money">
        <h2>Số tiền nạp</h2>
        <div>
          <span>₫</span>
          <input type="text" placeholder="Vui lòng nhập số tiền nạp" >
        </div>
      </div>
      <div class="fangshi">
        <div class="form-item__label">Phương thức thanh toán</div>
        <cube-select
            :options="selectOptions"
            v-model="selectValue"
            placeholder="Xin hãy chọn phương pháp thanh toán của bạn"
        ></cube-select>
      </div>

      <div class="woring">
        <div>
            lời khuyên tốt：
        </div>
        <div>
            1. Để nạp tiền, vui lòng liên hệ bộ phận chăm sóc khách hàng để xác nhận thông tin liên quan
        </div>
        <div>
            2. Vui lòng chọn kênh thanh toán thẻ ngân hàng để nạp tiền
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
export default {
  name: "rechargeRecord",
  data() {
    return {
        selectOptions: [],
        selectValue: ''
    }
  },
  methods: {},
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.rechargeRecord {
  width: 100%;
}
.recharge {
  width:100%;
}
.content {
  width: 100%;
  height: 100vh;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: #F8F8F8;
}
.money {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
.money h2 {
  font-size: 16px;
  color: #BDBDBD;
}
.money div {
  width: 100%;
  height: 50px;
  /*border-bottom: 1px solid #ccc;*/
  display: flex;
  align-items: center;
  font-size: 28px;
}
.money div input {
  padding-left: 10px;
  box-sizing: border-box;
}
.fangshi {
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.fangshi .form-item__label {
  width: 80px;
  font-size: 16px;
}
::v-deep .fangshi .cube-select {
  flex: 1;
  font-size: 16px;
}
::v-deep .fangshi .cube-select::after {
  border: 0 !important;
}

.image {
  width: 250px;
  height: 250px;
  margin: 20px auto 0;
}
.image img {
  width:100%;
  height: 100%;
}
.gaoshi {
  width: 100%;
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
}
.gaoshi img {
  width: 15px;
  height: 15px;
}
.gaoshi span {
  margin-left: 5px;
}
.popup-container {
  width: 100%;
  padding-bottom: 50px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
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
.tishiMessage {
  width: 100%;
  color: red;
}
.woring{
    color: red;
}
</style>