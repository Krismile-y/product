<template>
  <div class="integralRecord">
    <Header title="Kỷ lục điểm" color="transparent" fontColor="#fff" fontSize="20px" iconSize="30px" :fixedFlag="true"></Header>
    <div class="content">
      <div class="bg">
        <!--        <img src="../../../assets/images/recordBg.png" alt="">-->
        <div>
          <i>{{ totalPrice }}</i>
          <span>Điểm số của tôi</span>
        </div>
      </div>
      <ul>
        <li v-for="(item) in integralList.data" :key="item.id">
          <div class="left">
            <!--  邀请获得图片  -->
<!--            <img src="../../../assets/images/qita.png" alt="">-->
            <!--            &lt;!&ndash;  充值图图片  &ndash;&gt;-->
            <img src="../../../assets/images/zengjia.png" alt="">
            <!--            &lt;!&ndash;  减值图片  &ndash;&gt;-->
<!--            <img v-else-if="item.type === 6" src="../../../assets/images/jianshao.png" alt="">-->
          </div>
          <div class="right">
            <div class="top">
              <span>{{ item.mone }}</span>
              <!--              <span v-if="item.goods_name">{{ item.goods_name ? item.goods_name : '' }}</span>-->
              <span :style="{ color: parseFloat(item.number) > 0 ? '#4FBF03' : '#000' }">{{ item.number !== '0.00' ? item.number : item.auto_price | priceFuhao }}</span>
            </div>
            <div class="bottom">
              <span>{{ item.add_time }}</span>
              <div>
                <!--                <span style="font-size: 14px;" v-if="item.upd_a">{{ '修改前：' + item.upd_a }}</span>-->
                <span v-if="item.upd_b">{{ 'THĂNG BẰNG：' + item.upd_b }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="limitPageStyle" v-if="btnFlag">
        <cube-button class="cube-button" style="background: #F5F5F5;
        border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;" @click="preClick">trang trước</cube-button>
        <span style="background: #F5F5F5;border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;color: #333333;" @click="showDiaglog = true">
          {{ page <= 1 ? 1 : page }} / {{ totalPage }}
          <img src="../../../assets/images/downPage.png" alt="">
        </span>
        <cube-button class="cube-button" style="background: #FFF0F0;
        border: 1px solid #CE615E;border-radius: 44px;height: 48px;" @click="nextClick">Trang tiếp theo</cube-button>
      </div>
      <van-dialog class="dialog" v-model="showDiaglog" title="Vui lòng nhập số trang" show-cancel-button @confirm="submitPage">
        <input type="text" placeholder="Vui lòng nhập số trang" v-model="dialogPage">
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header/header';
import axios from "../../../api/request_two";
import {Dialog} from "vant";
export default {
  name: "integralRecord",
  data() {
    return {
      integralList: [],
      page: 1,
      limit: 10,
      btnFlag: false,
      totalPage: '',
      totalPrice: '',
      showDiaglog: false,
      dialogPage: ''
    }
  },
  filters: {
    priceFuhao(value) {
      if (parseFloat(value) > 0) {
        return '+' + value
      } else {
        return value
      }
    },
  },
  async created() {
    await this.getYueRecord()
    if (this.page === 1 && this.integralList.data.length === 0) {
      this.$toastBounce('Tài khoản của bạn không có thông tin!')
    } else {
      this.btnFlag = true;
    }
    this.totalPrice = this.$route.query.money
    console.log(this.totalPrice);
  },
  methods: {
    async submitPage() {
      if (parseInt(this.dialogPage) > this.integralList.last_page) {
        this.$toastBounce('Vui lòng nhập đúng số trang!')
        return
      } else {
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let res = await axios.post('api/member/get_jf3', {
          user_id: userId,
          page: this.dialogPage,
          limit: this.limit
        })
        if (res.data.code === 200) {
          this.integralList = res.data.data
          this.page = this.dialogPage
        } else {
          this.$toastBounce(res.data.msg)
        }
      }
    },
    // 上一页事件
    async preClick() {
      if (this.page === 1) {
        // this.$toastBounce('前面没有数据哦!')
        return
      } else {
        this.page -= 1;
      }
      await this.getYueRecord()
    },
    // 下一页事件
    async nextClick() {
      if (this.integralList.current_page === this.integralList.last_page) {
        this.$toastBounce('Tài khoản của bạn không có thông tin nào khác!')
        return
      }
      this.page += 1;
      await this.getYueRecord()
    },
    // 获取积分记录
    async getYueRecord() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/get_jf3', {
        user_id: userId,
        page: this.page + '',
        limit: this.limit
      })
      if (res.data.code === 200) {
        this.integralList = res.data.data
        this.totalPage = res.data.data.last_page
      } else {
        this.$toastBounce(res.data.msg)
      }
      console.log(res);
    },
  },
  components: {
    Header,
    [Dialog.Component.name]: Dialog.Component,
  }
}
</script>

<style lang="css" scoped>
.integralRecord {
  width: 100%;
  font-family: Source Han Sans CN;
}
.content {
  width: 100%;
  height: 100vh;
  /*padding: 10px 10px;*/
  box-sizing: border-box;
  background-color: #F8F9FC;
  /*overflow: auto;*/
  position: relative;
}
.content .bg {
  width: 100%;
  height: 210px;
  position: fixed;
  left: 0;
  top: 0;
  background: url('../../../assets/images/recordBg.png') no-repeat center;
  background-size: 100% 100%;
}
.content .bg i {
  font-style: normal;
  margin-top: -80px;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
}
.content .bg div {
  margin-top: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.content .bg div span {
  font-size: 16px;
  color:#fff;
  margin-top: 12px;
}
.content ul {
  width: 90%;
  height: 62%;
  overflow: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px 10px 10px;
  position: absolute;
  left:50%;
  top: 150px;
  transform: translateX(-50%);
  z-index: 10;
}
.content ul li {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  /*padding-left: 10px;*/
  box-sizing: border-box;
  margin-top: 10px;
}
.content ul li .left {
  width: 60px;
  height: 60px;
  position: relative;
}
.content ul li .left img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-60%);
}
.content ul li .right {
  flex: 1;
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.content ul li .right .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content ul li .right .top span:nth-of-type(1) {
  width: 160px;
  font-size: 20px;
  color: #333333;
}
.content ul li .right .top span:nth-of-type(2) {
  font-size: 20px;

}
.content ul li .right .bottom {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9B9B9B;
}
.content ul li .right .bottom div {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 14px;
  color: #9B9B9B;
}
.limitPageStyle {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.limitPageStyle .cube-button {
  width: 100px;
  height: 40px;
  border-radius:30px;
  background-color: #fff;
  border: 1px solid #D67D79;
  color: #999;
}
.limitPageStyle span {
  width: 100px;
  height: 40px;
  border-radius: 30px;
  display: inline-block;
  margin: 0 20px;
  line-height: 42px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #999;
  position: relative;
  padding-right: 20px;
  box-sizing: border-box;
}
.limitPageStyle span img {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  text-align: center;
}
.dialog input {
  text-align: center;
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 5px;
  box-sizing: border-box;
  margin: 10px 0;
}
</style>