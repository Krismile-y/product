<template>
  <div class="sign">
    <Header :title="headerTitle"></Header>
    <div class="backImg">
      <img src="../../assets/images/qiandao.png" alt="" />
    </div>
    <div class="signBody">
      <div class="signBody_title">Đăng nhập 7 ngày liên tục để nhận phần thưởng</div>
      <div class="signBody_content">
        <div class="sign_item" v-for="(item, index) in signList" :key="index">
          <div class="sign_number">{{ item.qianbao_num }}</div>
          <div
            :class="[
              'sign_check',
              item.day_num <= personalList.length ? 'isSign' : 'unSign',
            ]"
          >
            <span>✔</span>
          </div>
        </div>
      </div>
      <div class="sign_btn">
        <button @click="sign">{{ btn }}</button>
        <span
          >Check in liên tiếp
          <span style="color:rgba(220, 0, 0, 1)">{{
            personalList.length
          }}</span>
          ngày, đăng nhập liên tục
          <span style="color:rgba(220, 0, 0, 1)">7</span>
          ngày có sẵn
          <span style="color:rgba(220, 0, 0, 1)">{{ qBNumber }}tiền bảo</span>
        </span>
      </div>
      <div class="sign_bottom">
        <div class="sign_bottom_left">
          <span>Thiên Bảo của tôi：</span>
          <span style="color:rgba(220, 0, 0, 1);font-size:15px">{{
            qianbao
          }}</span>
        </div>
        <div class="sign_bottom_right" @click="goToQian">Món quà tốt để mua hàng Quý Châu</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '_com/header/header';
import { sign_api } from '_api/signIn';
import { signList_api } from '_api/signIn';
import { signSetList_api } from '_api/signIn';
export default {
  components: {
    Header,
  },
  data() {
    return {
      headerTitle: 'Nhận phòng hàng ngày',
      signList: [],
      personalList: [],
      qBNumber: 0,
      isSign: '',
      btn: 'đăng ký vào',
      signData: '',
      today: '',
      qianbao: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let listRes = await signList_api();
      this.personalList = listRes.list;
      this.qianbao = listRes.qianbao;
      this.signData = this.personalList[0].create_time.split(' ')[0];
      var aData = new Date();
      var M =
        aData.getMonth() + 1 < 10
          ? '0' + (aData.getMonth() + 1)
          : aData.getMonth() + 1;
      var D = aData.getDate() < 10 ? '0' + aData.getDate() : aData.getDate();
      this.today = aData.getFullYear() + '-' + M + '-' + D;
      if (this.signData == this.today) {
        this.btn = 'Đăng nhập hôm nay';
      }
      let res = await signSetList_api();
      this.signList = res.list;
      this.signList.forEach((item, i) => {
        this.qBNumber += item.qianbao_num;
      });
    },
    async sign() {
      let res = await sign_api();
      if (res.code === 200) {
        alert('Đăng nhập thành công！');
        this.btn = 'Đăng nhập hôm nay';
        let temp = {
          create_time: '',
        };
        this.personalList.push(temp);
      } else {
        alert(res.msg);
      }
    },
    goToQian() {
      let params = {
        is_exchange: 1,
        plate_id: '',
        name: 'Khu Thiên Bảo',
      };
      params = JSON.stringify(params);
      this.$router.push({ path: '/goods-list/' + params });
    },
  },
};
</script>

<style lang="stylus" scoped>
.sign
    background: rgba(255, 148, 79, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
.backImg
    img
       width: 100%;
.signBody
    background: rgba(255, 255, 255, 1);
    width: 95%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position relative
.signBody_title
    background:rgba(255,148,79,1)
    border-radius:6px
    font-size:28rpx
    font-family:PingFang SC;
    font-weight:bolder;
    color:rgba(255,255,255,1);
    padding 4% 10%
    position absolute
    top 6%
.signBody_content
    display flex
    flex-wrap nowrap
    justify-content center
    margin 13% 0 0 0
    padding 15% 0 4% 0
    border:2px dashed rgba(255,148,79,0.4);
    border-radius:10px;
    width 96%
.sign_item
    display flex
    flex-direction column
    align-items center
    width 10%
    background rgba(244, 66, 86, 1)
    border-radius 10px
    padding 2% 1%
    margin 0 1%
.sign_number
    font-size 24rpx
    color rgba(255,255,255,1)
    margin 5% 0 0 0
.sign_check
    background rgba(185, 34, 51, 1)
    width 50%
    text-align center
    margin 20% 0 0 0
    padding 15% 3%
    font-weight bold
    display flex
    justify-content center
    align-items baseline
.sign_check
    span
       font-weight bold
       font-size 30rpx
       display block
.isSign
    color rgba(255, 148, 79, 1)
.unSign
    color rgba(255, 255, 255, 0.1)
.sign_btn
     margin-top 10%
     display flex
     flex-direction column
     align-items center
.sign_btn
     button
       width 95%
       background:rgba(254,96,51,1);
       opacity:1;
       border-radius:40px;
       color:rgba(255,255,255,1)
       padding 4% 0
.sign_btn
       span
        font-size:10rpx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153, 153, 153, 1)
        margin 5% 0 0 0
.sign_bottom
        display flex
        justify-content center
        margin 15% 0 10% 0
.sign_bottom_left
        border:1px solid rgba(220,0,0,1);
        border-radius:6px
        color rgba(153, 153, 153, 1)
        display flex
        align-items center
        justify-content center
        width 120px
        padding 5% 0
        font-size 10px
.sign_bottom_right
        background:rgba(232,146,34,1);
        border-radius:6rpx
        color:rgba(255,255,255,1)
        padding 5% 0
        width 120px
        display flex
        justify-content center
        border-radius:6px
        margin 0 0 0 5%
</style>
