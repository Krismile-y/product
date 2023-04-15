<template>
  <div class="inviteFriends">
    <Header :title="headerTitle" fontSize="20px" iconSize="30px">
      <img style="width: 30px;height: 30px;" src="../../assets/images/fenxiang.png" alt="" @click="imgClick">
    </Header>
    <div class="content">
      <div class="tuiguangma">
        <h2>{{ userInfo.rec_code }}</h2>
        <p>quảng cáo của bạnID</p>
      </div>
      <div class="main">
        <i class="leftBox"></i>
        <i class="rightBox"></i>
        <p class="oneP">1.Các thành viên Duobao Huihui thân mến, sau đây là liên kết lời mời của bạn trong Duobao Huihui</p>
        <input type="text" :value="data.down_site">
        <button
          v-clipboard:copy="data.down_site"
          v-clipboard:success="onCopyLianJie"
          v-clipboard:error="onErrorLianJie"
      >sao chép liên kết mời</button>
        <p class="twoP">2.Sao chép mã QR cho bạn bè của bạn, quét nó để giới thiệu</p>
        <img ref="imgUrl" :src="'https://api.btcexvip.top/' + userInfo.qrcode" alt="">
        <button @click="cunImageClick">lưu dưới dạng hình ảnh</button>
      </div>
    </div>
    <div class="footer" v-if="isXsFlag.data != 1">
      <h2><span><i style="font-size: 18px;font-style: normal;margin-left: 15px;font-weight: 700;">thành viên được đề xuất của tôi</i></span></h2>
      <p class="bottomCode">Mã giới thiệu của tôi：{{ userInfo.rec_code }}</p>
      <table>
        <thead>
        <tr>
          <th>Tài khoản thành viên ngoại tuyến</th>
          <th>tuyến dưới</th>
          <th>Thời gian đăng ký</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in onetableData.one" :key="index">
          <td>{{ item.phone }}</td>
          <td>{{ item.dj }}</td>
          <td>{{ item.time }}</td>
        </tr>
        </tbody>
      </table>
      <div class="limitPageStyle" v-if="btnFlag">
        <cube-button class="cube-button" style="background: #F5F5F5;
        border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;" @click="preClick">trang trước</cube-button>
        <span style="background: #F5F5F5;border: 1px solid #B3B3B3;border-radius: 44px;height: 48px;color: #333333;" @click="showDiaglog = true">
          {{ page <= 1 ? 1 : page }} / {{ totalPage }}
          <img src="../../assets/images/downPage.png" alt="">
        </span>
        <cube-button class="cube-button" style="background: #FFF0F0;
        border: 1px solid #CE615E;border-radius: 44px;height: 48px;" @click="nextClick">Trang tiếp theo</cube-button>
      </div>
      <van-dialog class="dialog" v-model="showDiaglog" title="Vui lòng nhập số trang" show-cancel-button @confirm="submitPage">
        <input type="text" placeholder="Vui lòng nhập số trang" v-model="dialogPage">
      </van-dialog>
    </div>
<!--    <h2 class="h2Class">您的推广ID</h2>-->
<!--    <p class="pClass">{{ userInfo.rec_code }}</p>-->
<!--    <div class="one">-->
<!--      <p>1.尊敬的trung tâm mua sắm会员，以下是您在trung tâm mua sắm的邀请连接</p>-->
<!--      <input type="text" :value="data.down_site" disabled>-->
<!--      <button-->
<!--          v-clipboard:copy="data.down_site"-->
<!--          v-clipboard:success="onCopyLianJie"-->
<!--          v-clipboard:error="onErrorLianJie"-->
<!--      >复制邀请链接</button>-->
<!--    </div>-->
<!--    <div class="two">-->
<!--      <p>2.二维码复制给好友，扫一扫进行推荐</p>-->
<!--      <img ref="imgUrl" :src="'https://api.btcexvip.top/' + userInfo.qrcode" alt="">-->
<!--      <button-->
<!--          v-clipboard:copy="userInfo.rec_code"-->
<!--          v-clipboard:success="onCopyCode"-->
<!--          v-clipboard:error="onErrorCode"-->
<!--      >复制推广ID</button>-->
<!--      <button @click="cunImageClick">存为图片</button>-->
<!--    </div>-->
<!--    <p class="middleP">邀请有好礼!</p>-->
<!--&lt;!&ndash;    <p class="middleContent">您可以通过QQ、微信、微博、邮件等方式把推荐注册链接发送给您的好友，成功注册并充值投资，您将获得此好友投资项目金额1%~5%的奖金[根据不同的项目有不同的佣金金额]，奖金详细和比例请您查看各项目的详细说明，用户不得自己推荐自己如发现将冻结用户非法获得的佣金。</p>&ndash;&gt;-->
<!--    <h2 class="meTuiJian">我推荐的会员</h2>-->
<!--    <div class="meTuiJianContent">-->
<!--      <p>我的推荐码：{{ userInfo.rec_code }}</p>-->
<!--      <table>-->
<!--        <thead>-->
<!--          <tr>-->
<!--            <th>下线会员账号</th>-->
<!--            <th>下线层级</th>-->
<!--            <th>注册时间</th>-->
<!--          </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--          <tr v-for="(item, index) in onetableData" :key="index">-->
<!--            <td>{{ item.phone }}</td>-->
<!--            <td>{{ item.grade }}</td>-->
<!--            <td>{{ item.create_time }}</td>-->
<!--          </tr>-->
<!--          <tr v-for="(item, index) in twotableData" :key="index">-->
<!--            <td>{{ item.phone }}</td>-->
<!--            <td>{{ item.grade }}</td>-->
<!--            <td>{{ item.create_time }}</td>-->
<!--          </tr>-->
<!--          <tr v-for="(item, index) in threetableData" :key="index">-->
<!--            <td>{{ item.phone }}</td>-->
<!--            <td>{{ item.grade }}</td>-->
<!--            <td>{{ item.create_time }}</td>-->
<!--          </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
    <van-share-sheet
        v-model="showShare"
        title="chia sẻ với bạn bè ngay bây giờ"
        :options="options"
        @select="onSelect"
    />
  </div>
</template>
<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header.vue';
import { Download } from "../../libs/download";
import {Toast, ShareSheet, Dialog} from 'vant';

export default {
  data() {
    return {
      headerTitle: 'mời bạn bè',
      userInfo: {},
      onetableData: [],
      twotableData: [],
      threetableData: [],
      data: {},
      download: new Download(),
      showShare: false,
      options: [
        // { name: '微信', icon: 'wechat' },
        // { name: 'QQ', icon: 'qq' },
        // { name: '微博', icon: 'weibo' },
        { name: 'sao chép đường dẫn', icon: 'link' },
        // { name: '分享海报', icon: 'poster' },
        { name: 'mã QR', icon: 'qrcode' },
      ],
      fuzhiMessage: '', // 复制的消息
      page: 1,
      limit: 10,
      totalPage: '',
      totalPrice: '',
      showDiaglog: false, // 控制弹框
      dialogPage: '',
      btnFlag: false,
      isXsFlag: {}
    }
  },
  async created() {
    await this.getFirendsList()
    if (this.page === 1 && this.onetableData.one.length === 0) {
      this.$toastBounce('Tài khoản của bạn không có thông tin!')
      // this.btnFlag = true;
    } else {
      this.btnFlag = true;
    }
    // 调用是否显示接口
    let res = await axios.post('api/index/is_sx')
    console.log(res);
    if (res.data.data) {
      this.isXsFlag = res.data
    }
  },
  mounted() {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
    axios.post('api/member/down_app', {
      id: userId
    }).then(res => {
      console.log(res);
      this.userInfo.qrcode = res.data.data.user_info.qrcode
    })
  },
  methods: {
    // 弹框确认事件
    async submitPage() {
      if (parseInt(this.dialogPage) > this.onetableData.page.last_page) {
        this.$toastBounce('Vui lòng nhập đúng số trang!')
        return
      } else {
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let res = await axios.post('api/member/down_app', {
          id: userId,
          page: this.dialogPage,
          limit: this.limit
        })
        if (res.data.code === 200) {
          this.onetableData = res.data.data
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
      await this.getFirendsList()
    },
    // 下一页事件
    async nextClick() {
      console.log(this.onetableData);
      if (this.onetableData.page.current_page === this.onetableData.page.last_page) {
        this.$toastBounce('Tài khoản của bạn không có thông tin nào khác!')
        return
      }
      this.page += 1;
      await this.getFirendsList()
    },
    imgClick() {
      this.showShare = true;
    },
    // 分享面板选择事件
    onSelect(option) {
      // Toast(option.name);

      // 点击复制链接
      if (option.name === 'sao chép đường dẫn') {
        //参数是复制的内容
        //.then()中的函数是复制成功和复制失败的两个回调函数
        this.$copyText(this.data.down_site).then(
            (e) => {
              this.$toastBounce("Sao chép thành công: " + this.data.down_site);
              console.log(e);
            },
            (err) => {
              alert("sao chép thất bại");
              console.log(err);
            }
        )
      }

      // 点击保存二维码
      if (option.name === 'mã QR') {
        this.cunImageClick()
      }

      this.showShare = false;
    },
    // 点击存为图片按钮
    async cunImageClick() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/down_app', {
        id: userId
      })
      console.log(res);
      if (res.data.code === 200) {
        let downloadName = 'Quảng bá mã QR';//文件名
        let imgData = res.data.data.er_url;//base64
        this.download.downloadFile(downloadName,imgData);
        this.$toastBounce('Lưu hình ảnh vào điện thoại của bạn thành công!')
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
    // 复制链接成功事件
    onCopyLianJie(e) {
      this.$toastBounce('sao chép thành công：' + e.text)
      this.fuzhiMessage = e.text
    },
    // 复制链接失败事件
    onErrorLianJie(e) {
      console.log(e)
      this.$toastBounce('Failed to copy texts')
    },
    // 复制推广ID事件
    onCopyCode(e) {
      this.$toastBounce('sao chép thành công：' + e.text)
    },
    // 复制推广ID失败事件
    onErrorCode(e) {
      this.$toastBounce('Failed to copy texts')
    },
    // 获取邀请好友界面数据
    async getFirendsList() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      let res = await axios.post('api/member/down_app', {
        id: userId,
        limit: this.limit,
        page: this.page + ''
      })
      console.log(res);
      if (res.data.code === 200) {
        this.onetableData = res.data.data
        this.data = res.data.data
        this.userInfo = res.data.data.user_info
        this.totalPage = res.data.data.page.last_page
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
  },
  components: {
    Header,
    [Toast.name]: Toast,
    [ShareSheet.name]: ShareSheet,
    [Dialog.Component.name]: Dialog.Component,
  },
}
</script>
<style lang="css" scoped>
.inviteFriends {
  width: 100%;
  background: url('../../assets/images/yaoqinghaoyou.png') no-repeat 0 45px;
  background-size: 100%;
  overflow: auto;
  background-color: #FE7542;
  font-family: Source Han Sans CN;
}
.content {
  width: 94%;
  margin: 250px auto 0;
  height: 720px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.content .tuiguangma {
  width: 92%;
  height: 130px;
  border-bottom: 1px solid #CCCCCC;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.content .tuiguangma h2 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
}
.content .tuiguangma p {
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  color: #666666;
}
.content .main {
  width: 100%;
  height: calc(100% - 130px);
  position: relative;
}

.content .main .leftBox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FE7542;
  position: absolute;
  left: -10px;
  top: -10px;
  z-index: 10;
}
.content .main .rightBox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FE7542;
  position: absolute;
  right: -10px;
  top: -10px;
  z-index: 10;
}
.content .main .oneP {
  width: 90%;
  color: #333333;
  font-size: 14px;
  padding-top: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  line-height: 20px;
}
.content .main > input {
  width: 90%;
  height: 50px;
  border: 1px solid #E6E6E6;
  margin: 20px auto 0;
  display: block;
  font-size: 12px;
  text-align: center;
  color: #999999;
}
.content .main > button {
  width: 80%;
  height: 44px;
  margin: 44px auto 0;
  display: block;
  background-color: #EB6643;
  color: #fff;
  font-size: 14px;
  border-radius: 22px;
}
.content .main .twoP {
  width: 90%;
  color: #333333;
  font-size: 14px;
  padding-top: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  line-height: 20px;
}
.content .main img {
  width: 144px;
  height: 144px;
  margin: 28px auto 45px;
  display: block;
}
.footer {
  width: 100%;
  height: 620px;
  background-color: #fff;
  margin-top: 20px;
  overflow: auto;
  position: relative;
}
.footer h2 {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  font-size: 18px;
  margin-top: 20px;
}
.footer h2 span {
  display: flex;
  border-left: 3px solid #CE615E;
  height: 20px;
  margin-left: 10px;
  line-height: 20px;
  font-weight: 700;
}
.footer .bottomCode {
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.footer table {
  width: 94%;
  text-align: center;
  margin: 10px auto 20px;
  border: 1px solid #E6E6E6;
}
.footer table thead {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.footer table thead tr th {
  border: 1px solid #E6E6E6;
}
.footer table tbody {
  width: 100%;
}
.footer table tbody tr {
  height: 40px;
  line-height: 40px;
}
.footer table tbody tr td {
  border: 1px solid #E6E6E6;
}
/*.topBg {*/
/*  width: 100%;*/
/*  height: 50px;*/
/*  !*background-color: rgba(135,206,235, .3);*!*/
/*  background-color: orangered;*/
/*}*/
/*.h2Class {*/
/*  margin-top: 20px;*/
/*  text-align: center;*/
/*  color: #000;*/
/*  font-size: 20px;*/
/*}*/
/*.pClass {*/
/*  text-align: center;*/
/*  color: red;*/
/*  font-size: 16px;*/
/*  margin-top: 10px;*/
/*}*/
/*.one {*/
/*  width: 100%;*/
/*  margin-top: 20px;*/
/*  padding: 0 10px;*/
/*  box-sizing: border-box;*/
/*  text-align: center;*/
/*}*/
/*.one > p {*/
/*  text-align: left;*/
/*}*/
/*.one > input {*/
/*  width: 100%;*/
/*  height: 40px;*/
/*  text-align: center;*/
/*  border: 1px solid #ccc;*/
/*  margin-top: 10px;*/
/*}*/
/*.one > button {*/
/*  width: 75%;*/
/*  height: 40px;*/
/*  background-color: #009788;*/
/*  color: #fff;*/
/*  margin-top: 10px;*/
/*}*/
/*.two {*/
/*  width: 100%;*/
/*  padding: 0 10px;*/
/*  box-sizing: border-box;*/
/*  text-align: center;*/
/*  margin-top: 20px;*/
/*}*/
/*.two > p {*/
/*  text-align: left;*/
/*}*/
/*.two > img {*/
/*  width: 150px;*/
/*  height: 150px;*/
/*  margin: 20px 0;*/
/*}*/
/*.two > button {*/
/*  width: 75%;*/
/*  height: 40px;*/
/*  background-color: #009788;*/
/*  color: #fff;*/
/*  margin-top: 10px;*/
/*}*/
/*.middleP {*/
/*  width: 100%;*/
/*  height: 20px;*/
/*  margin-top: 20px;*/
/*  color: #1BBA7E;*/
/*}*/
/*.middleContent {*/
/*  font-family: '幼圆';*/
/*  padding: 0 10px;*/
/*  color: #666;*/
/*  box-sizing: border-box;*/
/*  margin-top: 30px;*/
/*  text-indent: 2em;*/
/*}*/
/*.meTuiJian {*/
/*  width: 100%;*/
/*  height: 20px;*/
/*  border-left: 2px solid blue;*/
/*  padding-left: 10px;*/
/*  box-sizing: border-box;*/
/*  font-size: 18px;*/
/*  line-height: 20px;*/
/*  margin-top: 20px;*/
/*  margin-left: 5px;*/
/*}*/
/*.meTuiJianContent {*/
/*  width: 100%;*/
/*  !* height: 500px; *!*/
/*  padding: 0 5px;*/
/*  box-sizing: border-box;*/
/*  padding-bottom: 20px;*/
/*}*/
/*.meTuiJianContent p {*/
/*  font-weight: 700;*/
/*  margin-top: 20px;*/
/*}*/
/*.meTuiJianContent table {*/
/*  width: 100%;*/
/*  text-align: center;*/
/*  margin-top: 10px;*/
/*  border: 1px solid #ccc;*/
/*}*/
/*.meTuiJianContent table thead {*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*  background-color: #ccc;*/
/*}*/
/*.meTuiJianContent table tbody tr {*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*}*/
/*.meTuiJianContent table tbody tr td {*/
/*  border: 1px solid #ccc;*/
/*}*/
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