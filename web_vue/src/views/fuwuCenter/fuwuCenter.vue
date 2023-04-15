<template>
  <div class="fuwuCenter">
    <Header title="Trung tâm dịch vụ" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <div class="top">
        <div>
          <!-- <img src="../../assets/images/fuwuzhongxin.png" alt=""> -->
          <h1 style="color:orange ;font-size: 24px; ">Phục vụ tận tình 24/24</h1>
        </div>
        <span>Đường dây nóng dịch vụ：{{ list.kf_phone }}</span>
        <a :href="list.kf_site">liên hệ với dịch vụ khách hàng</a>
      </div>
      <div class="bottom">
        <h2><span><i style="font-size: 18px;font-style: normal;margin-left: 15px;font-weight: 700;">vấn đề thường gặp</i></span></h2>
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item v-for="(item,index) in list.list" size="16" :title="item.title" :name="index">{{ item.content }}</van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import axios from "../../api/request_two";
import { Collapse, CollapseItem } from 'vant';
export default {
  name: "fuwuCenter",
  data() {
    return {
      content: '',
      activeNames: ['0'],
      list: {}
    }
  },
  created() {
    this.getContent();
    // 页面加载实现繁体
    // this.viewFont = false;
    // localStorage.setItem('lang', val)
    this.getChangjian()
  },
  methods: {
    // 获取内容
    async getContent() {
      let res = await axios.post('api/index/gywm', {
        id: 9
      })
      if (res.data.code === 200) {
        this.content = res.data.data.content
      } else {
        this.$toastBounce('Tìm nạp nội dung không thành công, vui lòng thử lại sau!')
      }
      console.log(res);
    },
    // 获取常见问题数据
    async getChangjian() {
      let res = await axios.post('api/index/cjwt')
      console.log(res);
      if (res.data.code === 200) {
        this.list = res.data.data
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
  },
  components: {
    Header,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
}
</script>

<style lang="css" scoped>
.fuwuCenter {
  width: 100%;
  font-family: Source Han Sans CN;
  background-color: #ddd;
}
.content {
  width: 100%;
  /*height: 100%;*/
  overflow: auto;
}
.top {
  width: 100%;
  height: 300px;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
}
.top div {
  width: 100%;
  height: 92px;
  margin-top: 44px;
  text-align: center;
}
.top div img {
  width: 170px;
  height: 92px;
}
.top span {
  display: block;
  margin-top: 60px;
  color: #333333;
  font-size: 16px;
  font-family: SimHei;
}
.top a {
  display: block;
  width: 80%;
  height: 44px;
  background-color: #CE615D;
  border-radius: 22px;
  color: #fff;
  margin: 18px auto 0;
  text-align: center;
  line-height: 44px;
}
.bottom {
  width: 100%;
  height: calc(100vh - 354px);
  margin-top: 10px;
  background-color: #fff;
  padding: 15px 10px;
  box-sizing: border-box;
  overflow: auto;
}
.bottom h2 {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
}
.bottom h2 span {
  display: flex;
  border-left: 3px solid #CE615E;
  height: 20px;
  margin-left: 10px;
  line-height: 20px;
  font-weight: 700;
}
>>> .van-cell__title span {
  font-size: 16px;
}
</style>