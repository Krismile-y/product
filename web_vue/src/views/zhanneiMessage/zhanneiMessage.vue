<template>
  <div class="zhanneiMessage">
    <Header title="thông tin trang web" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <ul class="header">
<!--        <li><span><img src="../../assets/images/weidu.png" alt=""></span></li>-->
        <li style="width: 40px;"><span>số seri</span></li>
        <li><span style="display: block;width: 100px;">tiêu đề</span></li>
        <li><span style="display: block;width: 100px;">thời gian</span></li>
        <li><span>tình trạng</span></li>
        <li><span>xóa bỏ</span></li>
      </ul>
      <div class="body">
        <ul v-for="(item) in msgData.data" :key="item.id">
          <li style="color: #666666;">{{ item.id }}</li>
          <li @click="yiduClick(item)">
<!--            <img src="../../assets/images/weidu.png" alt="" v-show="item.is_show === 0">-->
<!--            <img src="../../assets/images/yidu.png" alt="" v-show="item.is_show === 1">-->
            <span style="display: block;width: 100px;">
              <i :style="{ backgroundColor: bgcColor(item) }" style="font-style:normal;padding: 5px 5px;color: #fff;">{{ item.msg_type }}</i>
            </span>
          </li>
          <li>
            <span style="display: block;width: 100px;color: #666666;">{{ item.add_time.split(' ')[0] }}</span>
            <span style="display: block;width: 100px;color: #666666;">{{ item.add_time.split(' ')[1] }}</span>
          </li>
          <li :style="{ 'color': item.is_show === 0 ? '#666666' : 'green' }">{{ item.is_show | isShowFilter }}</li>
          <li style="color: #CE615E;" @click="deleteClick(item)">xóa bỏ</li>
        </ul>
      </div>
      <div class="limitPageStyle" v-if="btnFlag">
        <cube-button class="cube-button" style="background: #F5F5F5;
        border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;" @click="preClick">trang trước</cube-button>
        <span style="background: #F5F5F5;border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;color: #333333;" @click="showInputDiaglog = true">
          {{ page <= 1 ? 1 : page }} / {{ totalPage }}
          <img src="../../assets/images/downPage.png" alt="">
        </span>
        <cube-button class="cube-button" style="background: #FFF0F0;
        border: 1px solid #CE615E;border-radius: 44px;height: 48px;" @click="nextClick">Trang tiếp theo</cube-button>
      </div>
    </div>
    <!--  内容弹框  -->
    <div class="box" v-if="showDiaglog">
      <div class="box-top">
        <span>tin tức nhà ga</span>
        <img src="../../assets/images/cha.png" alt="" @click="showDiaglog = false">
      </div>
      <div class="box-content">
        <p>{{ currentItemInfo.msg }}</p>
      </div>
      <div class="box-btn">
        <button @click="showDiaglog = false">Hủy bỏ</button>
        <button @click="okBtnCLick">xác nhận</button>
      </div>
    </div>
    <!--  删除弹框  -->
    <div class="box" v-if="showDelDiaglog">
      <div class="box-top">
        <span>gợi ý</span>
        <img src="../../assets/images/cha.png" alt="" @click="showDelDiaglog = false">
      </div>
      <div class="box-content">
        <p>Bạn có chắc chắn xóa thông tin trang web？</p>
      </div>
      <div class="box-btn">
        <button @click="showDelDiaglog = false">Hủy bỏ</button>
        <button @click="okDeleteBtnCLick">xóa bỏ</button>
      </div>
    </div>
    <!--  输入页数弹框  -->
    <div class="box" v-if="showInputDiaglog">
      <div class="box-top">
        <span>gợi ý</span>
        <img src="../../assets/images/cha.png" alt="" @click="showInputDiaglog = false">
      </div>
      <div class="box-content">
        <input type="text" placeholder="Vui lòng nhập số trang" v-model="dialogPage">
      </div>
      <div class="box-btn">
        <button @click="showInputDiaglog = false">Hủy bỏ</button>
        <button @click="submitPage">xác nhận</button>
      </div>
    </div>

<!--    &lt;!&ndash;  输入页数弹框  &ndash;&gt;-->
<!--    <van-dialog class="dialog" v-model="showInputDiaglog" title="请输入页数" show-cancel-button @confirm="submitPage">-->
<!--      <input type="text" placeholder="请输入页数" v-model="dialogPage">-->
<!--    </van-dialog>-->
  </div>
</template>

<script>
import popup from '_com/popup/popup.vue';
import Header from '../../components/header/header';
import axios from '../../api/request_two';
export default {
  name: "zhanneiMessage",
  data() {
    return {
      msgData: [],
      visiblePopup: false,
      deleteVisiblePopup: false,
      deleteItemInfo: {}, // 记录点击删除的标题信息
      currentItemInfo: {}, // 记录当前点击的标题信息
      limit: 14,
      page: 1,
      btnFlag: false,
      totalPage: '',
      totalPrice: '',
      showDiaglog: false,
      showDelDiaglog: false,
      showInputDiaglog: false,
      dialogPage: ''
    }
  },
  async created() {
    await this.getMsg();
    if (this.page === 1 && this.msgData.length === 0) {
      this.$toastBounce('Tài khoản của bạn không có thông tin!')
      // this.btnFlag = true;
    } else {
      this.btnFlag = true;
    }
  },
  filters: {
    isShowFilter(value) {
      switch (value) {
        case 0:
          return 'chưa đọc'
        case 1:
          return 'Đã đọc'
      }
    },
  },
  watch: {
    async showDiaglog(newValue) {
      let res = await axios.post('api/member/yidu', {
        ids: [this.currentItemInfo.id]
      })
      console.log(res);
      if (res.data.code === 200) {
        await this.getMsg();
      }
    }
  },
  methods: {
    // 弹框确认事件
    async submitPage() {
      if (parseInt(this.dialogPage) > this.msgData.last_page) {
        this.$toastBounce('Vui lòng nhập đúng số trang！')
        return
      } else {
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let res = await axios.post('api/member/msg_log', {
          user_id: userId,
          page: this.dialogPage,
          limit: this.limit
        })
        if (res.data.code === 200) {
          this.msgData = res.data.data.data
          console.log('this.msgData',this.msgData)
          this.page = this.dialogPage
          this.showInputDiaglog = false
        } else {
          this.$toastBounce(res.data.msg)
        }
      }
    },
    bgcColor(item) {
      if (item.msg_type === '返佣奖励') {
        return '#4AA3E7'
      } else if (item.msg_type === '待付款') {
        return '#DB924D'
      } else if (item.msg_type === '已付款') {
        return '#4FBF03'
      } else if (item.msg_type === '邀请注册') {
        return '#999999'
      } else if (item.msg_type === '发货') {
        return 'orange'
      } else if (item.msg_type === '待评论') {
        return 'skyblue'
      } else if (item.msg_type === '签到') {
        return '#CE615E'
      } else {
        return '#808080'
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
      await this.getMsg()
    },
    // 下一页事件
    async nextClick() {
      if (this.msgData.current_page === this.msgData.last_page) {
        this.$toastBounce('Tài khoản của bạn không có thông tin nào khác!')
        return
      }
      this.page = parseInt(this.page) +  1;
      await this.getMsg()
    },
    // 删除弹框确定事件
    async okDeleteBtnCLick() {
      let res = await axios.post('api/member/msg_del ', {
        ids: [this.deleteItemInfo.id]
      })
      if (res.data.code === 200) {
        this.$toastBounce(res.data.msg)
        this.showDelDiaglog = false;
        this.getMsg()
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
    // 删除事件
    deleteClick(item) {
      // this.deleteVisiblePopup = true;
      this.showDelDiaglog = true;
      this.deleteItemInfo = item;
    },
    // 弹框确认按钮事件
    async okBtnCLick() {
      this.showDiaglog = false;
    },
    // 点击标题显示弹框
    yiduClick(item) {
      this.showDiaglog = true;
      this.currentItemInfo = item
    },
    // 获取站点内容信息
    async getMsg() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/msg_log', {
        user_id: userId,
        limit: this.limit,
        page: this.page + ''
      })
      console.log(res);
      if (res.data.code === 200) {
        this.msgData = res.data.data.data
        this.totalPage = res.data.data.data.last_page
        // 判断有没有数据
        if (this.msgData.length === 0) {
          this.$toastBounce('Không có dữ liệu theo dõi!')
          return
        }
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
  },
  components: {
    Header,
    popup,
    // [Dialog.Component.name]: Dialog.Component,
  }
}
</script>

<style lang="css" scoped>
.zhanneiMessage {
  width: 100%;
  font-family: Source Han Sans CN;
}
.content {
  width: 100%;
  height: calc(100vh - 44px);
  padding: 10px 10px;
  box-sizing: border-box;
}
.content .header {
  width: 100%;
  display: flex;
}
.content .header li {
  float: left;
  height: 50px;
  line-height: 50px;
  font-weight: 700;
  border: 1px solid rgba(235,235,235,.5);
  border-collapse: collapse;
  flex: 1;
  text-align: center;
}
.content .header li span {
  font-weight: 700;
}
.content .header li span img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
.content .body {
  width:100%;
  height: 80%;
  overflow: auto;
}
.content .body ul {
  display: flex;
}
.content .body ul li {
  width: 100%;
  flex: 1;
  height: 40px;
  border: 1px solid rgba(235,235,235,.5);
  border-collapse: collapse;
  line-height: 40px;
  text-align: center;
}
.content .body ul li:nth-of-type(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /*padding-left: 10px;*/
  /*box-sizing: border-box;*/
}
.content .body ul li:nth-of-type(3) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 15px;
}
.content .body ul li img {
  width: 20px;
  height: 20px;
  margin-right: -15px;
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
.dialog p {
  width: 80%;
  margin: 20px auto;
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
.box {
  width: 85%;
  /*height: 200px;*/
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.box-top {
  width: 100%;
  height: 50px;
  background-color: #CE615E;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  position: relative;
}
.box-top img {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.box-btn {
  width: 100%;
  /*height: 50px;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
  /*position: absolute;*/
  /*left: 0;*/
  /*bottom: 25px;*/
}
.box-btn button {
  width: 125px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #CF3322;
  font-size: 16px;
}
.box-btn button:nth-of-type(1) {
  color: #CE615E;
}
.box-btn button:nth-of-type(2) {
  color: #fff;
  background-color: #CA2A1C;
}
.box-content {
  width: 90%;
  height: 70px;
  /*min-height: 50px;*/
  text-align: center;
  margin: 0 auto;
}
.box-content p {
  margin-top: 40px;
}
.box-content input {
  width: 70%;
  height: 30px;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 16px;
}
</style>