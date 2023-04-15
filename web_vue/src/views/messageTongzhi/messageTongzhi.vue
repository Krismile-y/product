<template>
  <div class="messageTongzhi">
    <Header title="Thông báo toàn trang web" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <div class="item" v-for="(item, index) in messageList" :key="index">
        <h2>{{ item.create_time }}</h2>
        <div class="box">
          <h2>{{ item.msg_type }}Thông báo toàn trang web</h2>
          <div class="context">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import axios from '../../api/request_two';
import {
  getHomeNotice_api,
} from '_api/goods';
export default {
  name: "messageTongzhi",
  data() {
    return {
      messageList: [],
      arr: [
        {
          time: '星期六 11:02',
          list: [
            {
              mone: '签到通知',
              message: '2022-07-23 19:00签到成功，获得100个积分。'
            }
          ]
        },
        {
          time: '星期天 13:25',
          list: [
            {
              mone: '订单通知',
              message: '2022-07-23 19:00您在本平台购买了一个苹果手机，我们会为您尽快发货'
            },
            {
              mone: '发货通知',
              message: '您的订单1234345345已为你选择顺丰发货，请关注物流信息。'
            },
          ]
        },
        {
          time: '星期三 19:01',
          list: [
            {
              mone: '订单通知',
              message: '2022-07-23 19:00您在本平台购买了一个苹果手机，我们会为您尽快发货'
            },
            {
              mone: '发货通知',
              message: '您的订单1234345345已为你选择顺丰发货，请关注物流信息。'
            },
          ]
        }
      ]
    }
  },
  created() {
    this.getMessage()
  },
  methods: {
    async getMessage() {
      let noticeRes = await getHomeNotice_api();
      console.log(noticeRes);
      this.messageList = noticeRes
      // const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      // let res = await axios.post('api/member/msg_log', {
      //   user_id: userId,
      //   limit: 10,
      //   page: 1
      // })
      // console.log(res);
      // if (res.data.code === 200) {
      //   this.messageList = res.data.data.data
      //   // let arr = []
      //   // let list = []
      //   // for (let item of this.messageList.data) {
      //   //   if (!list.includes(item.add_time)) {
      //   //     list.push(item.add_time)
      //   //   }
      //   // }
      //   // console.log(list);
      //   let arr = []
      //   for (let item of this.messageList.data) {
      //     arr.push({
      //       time: item.add_time,
      //       list: [item]
      //     })
      //   }
      //   console.log(arr);
      //   this.messageList = arr
      // } else {
      //   this.$toastBounce(res.data.msg)
      // }
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.messageTongzhi {
  width:100%;
  font-family: Source Han Sans CN;
}
.content {
  width: 100%;
  height: calc(100vh - 44px);
  overflow: auto;
  padding: 0 15px 20px;
  box-sizing: border-box;
  background-color: #F5F5F5;
}
.content .item {
  width: 100%;
  /*height: 150px;*/
  /*border: 1px solid red;*/
  margin-top: 20px;
}
.content .item > h2 {
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  color: #A2A2A2;
}
.content .item .box {
  width: 100%;
  /*height: 110px;*/
  background-color: #fff;
  border-radius: 15px;
  margin-top: 10px;
}
.content .item .box > h2 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px solid #E6E6E6;
  padding: 0 15px;
  box-sizing: border-box;
}
.content .item .box .context {
  width: 100%;
  padding: 20px 15px 23px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>