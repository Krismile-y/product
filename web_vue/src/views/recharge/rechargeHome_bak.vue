<template>
  <div class="re_home">
    <Header title="nạp tiền" right-title="hồ sơ nạp tiền" :toPathValue="'/chongzhiRecord?money=' + userMessage.balance" fontSize="20px" iconSize="30px"></Header>
    <div class="re_home_panel">
        <div class="re_home_money">
            <div class="re_home_text">số tiền nạp</div>
          <div class="re_home_cash">
            <span>₫</span>
            <input type="text" v-model="userInfo.money" placeholder="Vui lòng nhập số tiền nạp">
          </div>
        </div>
        <div class="re_home_type" @click="showSelect = true">
            <div class="re_home_type_text">phương thức thanh toán</div>
            <div class="re_home_select">
                <div class="re_home_box">
                    <input class="re_home_input" type="text" placeholder="Xin hãy chọn phương pháp thanh toán của bạn" disabled v-model="userInfo.zhifu">
                    <div class="re_home_to">
                        <img src="@/assets/images/xy.png" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
		<div v-html="content" class="tishiMessage"></div>
    </div>



    <div class="re_home_notice" v-if="showNotice">
        <div class="re_home_notice_panel">
            <div class="re_home_notice_content" :style="{ height: currentItemInfo.name === '银行卡' ? 'auto' : '330px' }">
                <div class="re_home_notice_title">nhắc nhở nạp tiền</div>
                <div class="re_home_notice_account" :style="{ marginBottom: currentItemInfo.name === '银行卡' ? '30px' : '10px' }"><span>Tài khoản nhờ thu：</span><span>{{ currentItemInfo.number }}</span></div>
                <div class="re_home_notice_code" v-if="currentItemInfo.name !== '银行卡'">
                    <img :src="'https://api.btcexvip.top/' + currentItemInfo.ercode" alt="" srcset="">
                </div>
                <div class="re_home_notice_btns">
                    <span class="re_home_notice_btn re_home_notice_cancel" @click="showNotice=false">Hủy bỏ</span>
                    <span class="re_home_notice_btn" @click="okBtn">Chắc chắn</span>
                </div>
            </div>
        </div>
    </div>

    <div class="re_home_dialog" v-if="showSelect">
        <div class="re_home_dialog_panel">
            <div class="re_home_dialog_content">
                <div class="re_home_dialog_top">
                    <div class="re_home_dialog_title">Phương thức thanh toán</div>
                    <div class="re_home_dialog_close" @click="showSelect=false">
                        <img src="@/assets/images/cha.png" alt="" srcset="">
                    </div>
                </div>
                <div class="re_home_dialog_main">
                    <div class="re_home_dialog_row" v-for="(item, index) in payList" :key="item.id" @click="zhifuClick(item,index)">
                      <div class="re_home_dialog_icon">
                        <img v-if="item.name === '微信'" src="@/assets/images/weChat.png" alt="">
                        <img v-else-if="item.name === '支付宝'" src="@/assets/images/alpay.png" alt="">
                        <img v-else-if="item.name === '银行卡'" src="@/assets/images/yinhangka.png" alt="">
						<img v-else-if="item.name === 'Thẻ ngân hàng'" src="@/assets/images/yinhangka.png" alt="">
                      </div>
                      <div class="re_home_dialog_select">
                        <span>{{ item.name }}</span>
                        <div class="re_home_dialog_sebtn">
                          <img v-if="currentIndex === index" src="@/assets/images/selectActive.png" alt="">
                          <img v-else src="@/assets/images/select.png" alt="">
                        </div>
                      </div>
                    </div>
                    <div>
                        <cube-button class="re_home_submit" @click="submitRegister">Chắc chắn</cube-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import popup from '_com/popup/popup.vue';
import Header from '../../components/header/header';
import axios from "../../api/request_two";
import { getUserInfo_api } from '_api/user';
export default {
    name: "rechargeHome",
    components: {
        Header,
        popup
    },
    data() {
    return {
      selectOptions: [],
      showSelect: false,
      showNotice: false,
      userInfo: {
        username: '',
        money: '',
        zhifu: ''
      },
      payList: [],
      currentIndex: null,
      currentItemInfo: {},
      content: '',
      userMessage: {}
    }
    },
    watch: {

    },
    created() {
      this.getData()
      // 请求支付方式接口
      axios.post('api/pay/zhifu').then(res => {
        this.payList = res.data.data;
      })
      this.getMessage()
    },
    methods: {
      async getData() {
        this.userMessage = await getUserInfo_api();
        console.log(this.userMessage)
      },
      // 确定按钮
      okBtn() {
        this.visiblePopup = false
        // 跳转到充值记录界面
        console.log(this.userMessage.balance);
        this.$router.push({
          path: '/chongzhiRecord',
          query: {
            money: this.userMessage.balance
          }
        })
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
      // 支付方式弹框确定按钮事件
      async submitRegister() {
        this.userInfo.zhifu = this.currentItemInfo.name
        // 判断逻辑
        if (this.userInfo.money === '') {
          this.$toastBounce('Vui lòng nhập số tiền bạn muốn nạp!')
          this.selectValue = ''
          return
        }
        // 弹出框后就生成支付记录
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let res = await axios.post('api/index/user_chonzhi', {
          user_id: userId,
          auto_price: this.userInfo.money,
          type: this.currentItemInfo.number
        })
        console.log(res);
        if (res.data.code === 200) {
          this.showSelect = false;
          this.showNotice = false;
		  // 直接跳转 到 接口网关
		  console.log(res.data.data.pageurl)
		  window.location.href = res.data.data.pageurl
        } else {
          this.$toastBounce(res.data.msg)
        }
      },
      // 选择支付方式事件
      zhifuClick(item, index) {
          this.currentIndex = index
          this.currentItemInfo = item
      },
    },

    }
</script>

<style lang="css" scoped>
::v-deep .re_home_select .cube-select::after{
    border: none;
}
.re_home * ,.re_home{
    box-sizing: border-box;
}
.re_home{
    font-family: Source Han Sans CN;
    height: 100%;
    background: #F8F8F8;
}
.re_home_panel{
    height: calc(100% - 44px);
    width: 90vw;
    margin-top: 20px;
    margin: 0 auto;
    margin-top: 20px;
}
.re_home_money{
    background: #FFFFFF;
    height: 110px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.0300);
    border-radius: 14px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.re_home_text{
    font-size: 16px;
    font-weight: 400;
    color: #B4B4B4;
}
.re_home_cash{
    font-size: 26px;
    font-weight: 400;
    color: #333333;
    margin-top: 15px;
}
.re_home_type{
    margin-top: 20px;
    background: #FFFFFF;
    height: 80px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.0300);
    border-radius: 14px;
    padding: 10px;
    display: flex;
    align-items: center;
}
.re_home_type_text{
    width: 70px;
}
.re_home_select{
    flex: 1;
    margin-top: -40px;
}
.re_home_button {
    width: 80vw;
    height: 40px;
    background: linear-gradient(90deg, #EB6643, #CA2A1C);
    border-radius: 3px; 
    margin: 0 auto;
    margin-top:60px;
}
.re_home_input{
    width: 100%;
    position: absolute;
    top: 0px;
    height: 40px;
}
.re_home_box{
    position: relative;
}
.re_home_to{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(10px); 
}
.re_home_to img{
    height: 100%;
    width: 100%;
}

















.re_home_dialog{
    top: 0;
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0,.5);
}
.re_home_dialog_panel{
    height: 100%;
    width: 100%;
    position: relative;
}
.re_home_dialog_content{
    position: absolute;
    bottom: 0;
    height: 300px;
    background: #FFFFFF;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.re_home_dialog_top{
    position: relative;
    background: #CE615E;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 40px;
}
.re_home_dialog_title{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
}
.re_home_dialog_close{
    position: absolute;
    right: 0;
    top: 0;
    right: 10px;
    width: 20px;
    height: 20px;
    top: 50%;
    z-index: 9;
    transform: translateY(-10px);
}
.re_home_dialog_close img{
    width: 100%;
    height: 100%;
}
.re_home_dialog_main{
    height: 240px;
    overflow: auto;
    margin-top: 30px;
    padding: 0 10px;
}
.re_home_dialog_row{
    height: 55px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}
.re_home_dialog_select{
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #cccc;
    align-items: center;
    height: 100%;
}
.re_home_dialog_icon{
    width: 28px;
    height: 28px;
}
.re_home_dialog_icon img{
    width: 100%;
    height: 100%;
}
.re_home_dialog_sebtn{
    width: 15px;
    height: 15px;
}
.re_home_dialog_sebtn img{
    width: 100%;
    height: 100%;
}
.re_home_submit{
    width: 80vw;
    height: 40px;
    background: linear-gradient(90deg, #EB6643, #CA2A1C);
    border-radius: 20px; 
    margin: 40px auto 20px;
}






.re_home_notice{
    top: 0;
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0,.5);
}
.re_home_notice_panel{
    height: 100%;
    width: 100%;
    position: relative;
}
.re_home_notice_content{
    position: absolute;
    top: 50%;
    left: 5vw;
    width: 90vw;
    height: 300px;
    transform: translateY(-150px);
    background: #FFFFFF;
    border-radius: 5px;
}
.re_home_notice_title{
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
}
.re_home_notice_account{
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.re_home_notice_code{
    margin-top: 10px;
    height: 180px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.re_home_notice_code img{
    height: 180px;
    width: auto;
}
.re_home_notice_btns{
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 11px;
    border-radius: 0 0 5px 5px;
    border: 1px solid #cccccc;
    justify-content: space-between;
    align-items: center;
}
.re_home_notice_btn{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.re_home_notice_cancel{
    border-right: 1px solid #cccccc;
    color: #cccccc;
}

.tishiMessage {
  margin-top: 20px;
  color: red;
}
</style>