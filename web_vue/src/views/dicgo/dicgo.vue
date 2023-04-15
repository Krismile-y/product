<!-- 签到界面  -->
<template>
  <div class="am-text-break">
    <Header :title="headerTitle" color="transparent" fontColor="#fff" fontSize="20px" iconSize="30px" :fixedFlag="true"></Header>
    <div class="content">
      <div class="bg">
        <!--        <img src="../../../assets/images/recordBg.png" alt="">-->
        <div>
          <span>đăng nhập!</span>
        </div>
      </div>
      <div class="top">
        <img src="../../assets/images/qd.png" alt="">
        <span>Đăng nhập</span>
        <h2>{{ dicgoNumber }}</h2>
        <button @click="dicgoClick">đăng ký vào</button>
      </div>
      <div class="bottom">
        <h2><span>Nhật ký nhập cảnh</span></h2>
        <ul>
          <li v-for="(item,index) in signData" :key="index">
            <i :style="{ color: index === 0 ? '#57C20E' : '#A2A2A2' }"></i>
            <span class="time" :style="{ color: index === 0 ? '#57C20E' : '#A2A2A2' }">{{ item.add_time }}</span>
            <span :style="{ color: index === 0 ? '#57C20E' : '#A2A2A2' }">Đăng nhập thành công</span>
          </li>
        </ul>
      </div>

<!--      <div class="top">
        <span>已累计签到</span>
        <i>{{ dicgoNumber }}</i>
        <button @click="dicgoClick">签到</button>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(item, index) in signData" :key="index">
            <span>{{ item.add_time }}</span>
            <div>签到成功</div>
          </li>
        </ul>
      </div>-->
    </div>
  </div>
</template>
<script>
import axios from '../../api/request_two';
import Header from '_com/header/header';
export default {
  data() {
    return {
      headerTitle: 'Nhận phòng hàng ngày',
      signData: [],
      dicgoNumber: 0
    };
  },
  created() {
    this.getDicgoList()
  },
  methods: {
    // 签到按钮
    async dicgoClick() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/qiandao', {
        user_id: userId
      })
      if (res.data.code === 200) {
        this.$toastBounce(res.data.msg)
        this.getDicgoList()
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
    // 获取历史签到记录
    async getDicgoList() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/qd_list', {
        user_id: userId
      })
      if (res.data.code === 200) {
        // // 只取最新的20条即可
        // for (let i = 0; i < res.data.data.list.length; i++) {
        //   if (i < 20) {
        //     this.signData.push(res.data.data.list[i])
        //   }
        // }
        this.signData = res.data.data.list
        this.dicgoNumber = res.data.data.count
      } else {
        this.$toastBounce('Không lấy được thông tin đăng nhập, vui lòng thử lại sau!')
      }
      console.log(res);
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang="css" scoped>
.content {
  width: 100%;
  /*height: 100vh;*/
  font-family: Source Han Sans CN;
}
.content .bg {
  width: 100%;
  height: 400px;
  position: fixed;
  left: 0;
  top: 0;
  background: url('../../assets/images/qdBg.png') no-repeat center;
  background-size: 100% 100%;
}
.content .bg div {
  margin-top: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.content .bg div span {
  font-size: 28px;
  color:#fff;
  margin-top: -50px;
}
.top {
  width: 94%;
  /*height: 300px;*/
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 170px;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
.top img {
  width: 78px;
  height: 78px;
  border-radius: 50%;
}
.top span {
  margin-top: 10px;
  font-size: 14px;
  color: #808080;
}
.top h2 {
  font-size: 34px;
  margin-top: 20px;
  font-weight: 700;
}
.top button {
  background-color: #EB6643;
  width: 80%;
  height: 44px;
  text-align: center;
  border-radius: 22px;
  margin: 50px 0 25px 0;
  color: #fff;
  font-size: 16px;
}
.bottom {
  width: 94%;
  height: 390px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 500px;
  transform: translateX(-50%);
  padding: 20px 10px;
  box-sizing: border-box;
}
.bottom h2 {
  width: 94%;
  position: fixed;
  left: 10px;
  top: 10px;
  border-left: 3px solid #CE615E;
}
.bottom h2 span {
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
}
.bottom ul {
  width: 100%;
  height: 330px;
  overflow: auto;
  margin-top: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.bottom ul li {
  width: 98%;
  height: 40px;
  border-left: 2px solid #A2A2A2;
  position: relative;
  font-size: 16px;
  margin-top: 15px;
}
.bottom ul li i {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-60%,-100%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #A2A2A2;
}
.bottom ul li .time {
  margin-left: 15px;
  margin-right: 15px;
}
.bottom ul li span {
  font-weight: 700;
  color: #A2A2A2;
}
</style>
