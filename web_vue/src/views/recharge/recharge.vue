<template>
  <div class="recharge">
    <Header title="nạp tiền" right-title="hồ sơ nạp tiền" :toPathValue="'/yueRecord?money=' + userMessage.balance" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <div class="money">
        <h2>Số tiền nạp</h2>
        <div>
          <span>₫</span>
          <input type="text" placeholder="Vui lòng nhập số tiền nạp" v-model="userInfo.money">
        </div>
      </div>
      <div class="fangshi">
        <div class="form-item__label">Phương thức thanh toán</div>
        <cube-select
            :options="selectOptions"
            v-model="selectValue"
            placeholder="Xin hãy chọn phương pháp thanh toán của bạn"
            @change="selectChange"
            :disabled="selectDisabled"
        ></cube-select>
      </div>
<!--      <div class="form-list">-->
<!--&lt;!&ndash;        <div class="form-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="form-item__label">姓名</div>&ndash;&gt;-->
<!--&lt;!&ndash;          <cube-input&ndash;&gt;-->
<!--&lt;!&ndash;              clearable&ndash;&gt;-->
<!--&lt;!&ndash;              v-model="userInfo.username"&ndash;&gt;-->
<!--&lt;!&ndash;              placeholder="请输入您的姓名"&ndash;&gt;-->
<!--&lt;!&ndash;          ></cube-input>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div class="form-item">-->
<!--          <div class="form-item__label">金额</div>-->
<!--          <cube-input-->
<!--              clearable-->
<!--              :eye="eye"-->
<!--              type="text"-->
<!--              v-model="userInfo.money"-->
<!--              placeholder="请输入您的金额"-->
<!--          ></cube-input>-->
<!--        </div>-->
<!--        <div class="form-item">-->
<!--          <div class="form-item__label">支付方式</div>-->
<!--          <cube-select-->
<!--              :options="selectOptions"-->
<!--              v-model="selectValue"-->
<!--              placeholder="请选择您的支付方式"-->
<!--              @change="selectChange"-->
<!--              :disabled="selectDisabled"-->
<!--          ></cube-select>-->
<!--        </div>-->
<!--      </div>-->
      <div class="tishiMessage" v-html="content"></div>
    </div>
    <popup :visible.sync="visiblePopup">
      <div class="popup-container">
        <div class="popup-title">Nhắc nhở nạp tiền</div>
        <div class="popup-sub-title">
          <h2>{{ 'Tài khoản nhờ thu：' + number }}</h2>
          <div class="image" v-show="erImgFlag">
            <img :src="imgUrl" alt="">
          </div>
<!--          <div class="gaoshi">-->
<!--            <img src="../../assets/images/jg.png" alt="">-->
<!--          </div>-->
        </div>
        <div class="popup-btns border-1px--top">
          <div class="btn border-1px--right" @click="visiblePopup = false">
            Hủy bỏ
          </div>
          <div class="btn" @click="okBtn">Chắc chắn</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from '_com/popup/popup.vue';
import axios from '../../api/request_two';
import Header from '../../components/header/header';
import { getUserInfo_api } from '_api/user';
export default {
  name: "recharge",
  data() {
    return {
      imgUrl: '', // 充值二维码
      payList: [],
      selectValue: '',
      userInfo: {
        username: '',
        money: ''
      },
      selectOptions: [],
      visiblePopup: false,
      number: '', // 收款账号
      erImgFlag: false,
      selectDisabled: false,
      currentZhiFu: {}, // 当前选择的支付方式对象
      content: '', // 提示信息
      userMessage: {}
    }
  },
  watch: {
    // userInfo: {
    //   deep: true,
    //   handler(newValue) {
    //     // 判断逻辑
    //     if (newValue.username === '') {
    //       this.$toastBounce('请输入您的姓名!')
    //       return
    //     } else if (newValue.money === '') {
    //       this.$toastBounce('请输入您要充值的金额!')
    //       return
    //     }
    //     this.selectDisabled = false
    //   }
    // }
  },
  created() {
    this.getMessage();
    // 请求支付方式接口
    axios.post('api/pay/zhifu').then(res => {
      this.payList = res.data.data;
      for (let item of this.payList) {
        this.selectOptions.push(item.name)
      }
    })
    this.getData();
  },
  methods: {
    async getData() {
      this.userMessage = await getUserInfo_api();
      console.log(this.userMessage)
    },
    // 获取提示信息
    async getMessage() {
      let res = await axios.post('api/index/gywm', {
        id: 12
      })
      if (res.data.code === 200) {
        this.content = res.data.data.content
      } else {
        this.$toastBounce('Tìm nạp nội dung không thành công, vui lòng thử lại sau!')
      }
      console.log(res);
    },
    // 确定按钮
    okBtn() {
      this.visiblePopup = false
      // 跳转到充值记录界面
      console.log(this.userMessage.balance);
      this.$router.push({
        path: '/yueRecord',
        query: {
          money: this.userMessage.balance
        }
      })
    },
    // 下拉框选择事件
    async selectChange() {
      console.log(this.payList)
      // 判断逻辑
      if (this.userInfo.money === '') {
        this.$toastBounce('Vui lòng nhập số tiền bạn muốn nạp!')
        this.selectValue = ''
        return
      }
      for (let item of this.payList) {
        if (item.name === this.selectValue) {
          this.currentZhiFu = item;
          this.imgUrl = 'https://api.btcexvip.top/' + item.ercode;
          this.number = item.number
          console.log(this.imgUrl);
          // 判断是否有二维码
          if (this.imgUrl !== 'https://api.btcexvip.top/') {
            this.erImgFlag = true
          } else {
            this.erImgFlag = false
          }
          this.visiblePopup = true
        }
      }
      // 弹出框后就生成支付记录
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/index/user_chonzhi', {
        user_id: userId,
        auto_price: this.userInfo.money,
        type: this.currentZhiFu.number
      })
      console.log(res);
    },
    // 提交充值按钮
    // submitPay() {},
  },
  components: {
    Header,
    popup
  }
}
</script>

<style lang="css" scoped>
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
>>> .fangshi .cube-select {
  flex: 1;
  font-size: 16px;
}
>>> .fangshi .cube-select::after {
  border: 0 !important;
}
/*.content .form-list {*/
/*  width: 100%;*/
/*  margin-top: 10px;*/
/*}*/
/*.content .form-list .form-item {*/
/*  font-size: 16px;*/
/*  height: 70px;*/
/*}*/
/*>>> .content .form-list .form-item .cube-input-field {*/
/*  width: 80% !important;*/
/*  border: 0;*/
/*  height: 40px;*/
/*  font-size: 18px;*/
/*}*/
/*>>> .content .form-list .form-item .cube-input::after {*/
/*  border: 0;*/
/*  border-bottom: 1px solid #ccc;*/
/*}*/
/*>>> .content .form-list .form-item,.yanzhengma .cube-input::after  {*/
/*  width: 100%;*/
/*}*/
/*.content .content .form-list .form-item,.yanzhengma .inputBtn {*/
/*  display: flex;*/
/*}*/
/*.content .content .form-list .form-item,.yanzhengma .inputBtn button {*/
/*  width: 120px;*/
/*  height: 40px;*/
/*  background-color: skyblue;*/
/*  margin-left: 10px;*/
/*  line-height: 40px;*/
/*  text-align: center;*/
/*  font-size: 16px;*/
/*  color: #fff;*/
/*}*/
/*>>> .content .form-list .form-item .cube-select {*/
/*  width: 100%;*/
/*  height: 40px;*/
/*  font-size: 18px;*/
/*  padding-left: 0;*/
/*}*/
/*>>> .content .form-list .form-item .cube-select::after {*/
/*  border: 0;*/
/*  border-bottom: 1px solid #ccc;*/
/*}*/
/*>>> .content .form-list .form-item .cube-select span {*/
/*  color: #999999;*/
/*}*/
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
.tishiMessage {
  width: 100%;
  color: red;
}
</style>