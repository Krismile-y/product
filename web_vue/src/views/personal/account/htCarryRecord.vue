<template>
  <div class="htCarryRecord">
    <Header title="Bản ghi số dư có thể rút"></Header>
    <div class="content">
      <ul>
        <li v-for="(item) in carryList" :key="item.id">
          <div class="left">
            <span>{{ item.mone }}</span>
            <span>trước khi sửa：₫{{ item.old_jf }}</span>
            <span>{{ item.create_time }}</span>
          </div>
          <div class="right">
            <span>sau khi sửa đổi：₫{{ item.new_jf }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header/header';
import axios from "../../../api/request_two";
export default {
  name: "htCarryRecord",
  data() {
    return {
      carryList: []
    }
  },
  created() {
    this.getYueRecord()
  },
  methods: {
    // 获取可提余额（后台操作）记录
    async getYueRecord() {
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/my_jf', {
        user_id: userId
      })
      if (res.data.code === 200) {
        this.carryList = res.data.data
      } else {
        this.$toastBounce(res.data.msg)
      }
      console.log(res);
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
.htCarryRecord {
  width: 100%;
}
.content {
  width: 100%;
  height: 100vh;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: #ccc;
  overflow: auto;
}
.content ul {
  width: 100%;
}
.content ul li {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.content ul li:nth-of-type(1) {
  margin-top: 0;
}
.content ul li .left {
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.content ul li .left span:nth-of-type(1) {
  font-size: 16px;
}
.content ul li .right {
  flex: 1;
  font-weight: 700;
  font-size: 18px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
}
</style>