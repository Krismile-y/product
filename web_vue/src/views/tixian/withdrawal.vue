<template>
  <div class="withdrawal">
    <Header title="Rút tiền"  fontSize="20px" right-title="Hồ sơ rút tiền" iconSize="30px" to-path-value="/tixianRecord"></Header>
    <div class="withdrawal_panel">
        <div class="withdrawal_password">
            <div class="withdrawal_text">Số tiền rút</div>
            <div class="withdrawal_cash">
                <input placeholder="Vui lòng nhập số tiền rút" v-model="tixianInfo.jine" type="number">
            </div>
        </div>
        <div class="withdrawal_password">
            <div class="withdrawal_text">Mật khẩu rút</div>
            <div class="withdrawal_cash">
                <cube-input
              clearable
              :eye="eye"
              type="password"
              v-model="tixianInfo.password"
              placeholder="Vui lòng nhập mật khẩu rút tiền"
          ></cube-input>
            </div>
        </div>
        <div class="withdrawal_type" @click="showSelect=true">
          <div class="withdrawal_type_text">Thẻ ngân hàng</div>
          <div class="withdrawal_select">
            <div class="withdrawal_box">
              <input class="withdrawal_input" v-model="tixianInfo.yinhangka" type="text" placeholder="Vui lòng chọn thẻ ngân hàng" disabled>
              <div class="withdrawal_to">
                <img src="@/assets/images/xy.png" alt="" srcset="">
              </div>
            </div>
          </div>
        </div>
      <div v-html="tishiMessage" class="tishiMessage"></div>

<!--        <cube-button class="withdrawal_button" >提现</cube-button>-->
    </div>
    <div class="withdrawal_dialog" v-if="showSelect">
        <div class="withdrawal_dialog_panel">
            <div class="withdrawal_dialog_content">
                <div class="withdrawal_dialog_top">
                    <div class="withdrawal_dialog_title">chọn thẻ ngân hàng</div>
                    <div class="withdrawal_dialog_close" @click="showSelect=false">
                        <img src="@/assets/images/cha.png" alt="" srcset="">
                    </div>
                </div>
                <div class="withdrawal_dialog_main">
<!--                    &lt;!&ndash;  微信  &ndash;&gt;-->
<!--                    <div class="withdrawal_dialog_row" @click="weChatClick">-->
<!--                      <div class="withdrawal_dialog_icon">-->
<!--                        <img src="@/assets/images/weChat.png" alt="">-->
<!--                      </div>-->
<!--                      <div class="withdrawal_dialog_select">-->
<!--                        <span>微信</span>-->
<!--                        <div class="withdrawal_dialog_sebtn">-->
<!--                          <img v-if="currentIndex === -1" src="@/assets/images/selectActive.png" alt="">-->
<!--                          <img v-else src="@/assets/images/select.png" alt="">-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;  支付宝  &ndash;&gt;-->
<!--                    <div class="withdrawal_dialog_row" @click="alpayClick">-->
<!--                      <div class="withdrawal_dialog_icon">-->
<!--                        <img src="@/assets/images/alpay.png" alt="">-->
<!--                      </div>-->
<!--                      <div class="withdrawal_dialog_select">-->
<!--                        <span>支付宝</span>-->
<!--                        <div class="withdrawal_dialog_sebtn">-->
<!--                          <img v-if="currentIndex === -2" src="@/assets/images/selectActive.png" alt="">-->
<!--                          <img v-else src="@/assets/images/select.png" alt="">-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
                    <div class="withdrawal_dialog_row" v-for="(item,index) in selectOptions" :key="index" @click="yhkItemClick(item,index)">
                        <div class="withdrawal_dialog_icon">
                            <img src="@/assets/images/yinhangka.png" alt="">
                        </div>
                        <div class="withdrawal_dialog_select">
                            <span>{{ item }}</span>
                            <div class="withdrawal_dialog_sebtn">
                              <img v-if="currentIndex === index" src="@/assets/images/selectActive.png" alt="">
                              <img v-else src="@/assets/images/select.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <cube-button class="withdrawal_submit" @click="submitTiXian()" >Chắc chắn</cube-button>
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
export default {
    name: "withdrawal",
    components: {
        Header,
        popup
    },
    data() {
    return {
        tixianInfo: {
            jine: '',
            yinhangka: '',
            password: '',
        },
        selectOptions: [],
        showSelect: false,
        eye: {
            open: true,
            reverse: true
        },
        currentIndex: null,
        yhk_id: null,
        tishiMessage: ''
    }
    },
    watch: {

    },
    created() {
        this.getBankData()
        this.getMessage()
    },
    methods: {
        // 银行卡点击事件
        yhkItemClick(item, index) {
          for (let key of this.bankInfo) {
            if (key.yh_name === item) {
              this.yhk_id = key.id
              this.tixianInfo.yinhangka = key.yh_name
            }
          }
          this.currentIndex = index
        },
        // 获取提示信息
        async getMessage() {
            let res = await axios.post('api/index/gywm', {
                id: 11
            })
            if (res.data.code === 200) {
                this.tishiMessage = res.data.data.content
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
              console.log(res);
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
                this.$toastBounce('Vui lòng vào My-Personal Center-Bank Card Information để thêm thẻ ngân hàng!')
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
            let res = await axios.post('api/member/tx_apply', {
                user_id: userId,
                t_price: this.tixianInfo.jine,
                yhk_id: this.yhk_id,
                tx_pass: this.tixianInfo.password
            })
            if (res.data.code === 200) {
                this.$toastBounce('Rút tiền thành công!')
                this.$router.push('/tixianRecord')
            } else {
                this.$toastBounce(res.data.msg)
                this.currentIndex = null
            }
        },
    }
}
</script>

<style lang="css" scoped>
::v-deep .withdrawal_cash .cube-input::after{
    border: none;
}
.withdrawal * ,.withdrawal{
    box-sizing: border-box;
}
.withdrawal{
    font-family: Source Han Sans CN;
    height: 100%;
    background: #F8F8F8;
}
.withdrawal_panel{
    height: calc(100% - 44px);
    width: 90vw;
    margin-top: 20px;
    margin: 0 auto;
    margin-top: 20px;
}
.withdrawal_money{
    background: #FFFFFF;
    height: 110px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.0300);
    border-radius: 14px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.withdrawal_password{
    background: #FFFFFF;
    height: 70px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.0300);
    border-radius: 14px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
}
.withdrawal_text{
    font-size: 16px;
    font-weight: 400;
    color: #B4B4B4;
}
.withdrawal_cash{
    font-size: 22px;
    font-weight: 400;
    color: #333333;
    margin-top: 15px;
}
.withdrawal_type{
    margin-top: 20px;
    margin-bottom: 20px;
    background: #FFFFFF;
    height: 80px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.0300);
    border-radius: 14px;
    padding: 10px;
    display: flex;
    align-items: center;
}
.withdrawal_type_text{
    width: 70px;
}
.withdrawal_select{
    flex: 1;
    margin-top: -40px;
}
.withdrawal_button {
    width: 80vw;
    height: 40px;
    background: linear-gradient(90deg, #EB6643, #CA2A1C);
    border-radius: 3px; 
    margin: 0 auto;
    margin-top:60px;
}
.withdrawal_input{
    width: 100%;
    position: absolute;
    top: 0px;
    height: 40px;
}
.withdrawal_box{
    position: relative;
}
.withdrawal_to{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(10px); 
}
.withdrawal_to img{
    height: 100%;
    width: 100%;
}

















.withdrawal_dialog{
    top: 0;
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0,.5);
}
.withdrawal_dialog_panel{
    height: 100%;
    width: 100%;
    position: relative;
}
.withdrawal_dialog_content{
    position: absolute;
    bottom: 0;
    height: 300px;
    background: #FFFFFF;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.withdrawal_dialog_top{
    position: relative;
    background: #CE615E;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 40px;
}
.withdrawal_dialog_title{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
}
.withdrawal_dialog_close{
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
.withdrawal_dialog_close img{
    width: 100%;
    height: 100%;
}
.withdrawal_dialog_main{
    height: 200px;
    overflow: auto;
    margin-top: 30px;
    padding: 0 10px;
}
.withdrawal_dialog_row{
    height: 55px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}
.withdrawal_dialog_select{
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #cccc;
    align-items: center;
    height: 100%;
}
.withdrawal_dialog_icon{
    width: 28px;
    height: 28px;
}
.withdrawal_dialog_icon img{
    width: 100%;
    height: 100%;
}
.withdrawal_dialog_sebtn{
    width: 15px;
    height: 15px;
}
.withdrawal_dialog_sebtn img{
    width: 100%;
    height: 100%;
}
.withdrawal_submit{
    width: 80vw;
    height: 40px;
    background: linear-gradient(90deg, #EB6643, #CA2A1C);
    border-radius: 20px; 
    margin: 0 auto;
    margin-top:60px;
}
.tishiMessage {
  margin-top: 20px;
  color: red;
}

</style>