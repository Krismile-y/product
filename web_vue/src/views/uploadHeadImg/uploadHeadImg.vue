<template>
  <div class="uploadHeadImg">
    <Header title="thay đổi hình đại diện"></Header>
    <div class="content">
      <div class="imgs-container">
        <div v-for="(img, index) in imgs">
          <img
            :src="img"
            :key="img"
            class="img"
            @click="handleImgsClick(index)">
          <div v-if="initialIndex === index">
            <img class="bgImg" src="../../assets/images/gou.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <cube-button @click="handleSubmit" class="cube-button"
    >thay thế</cube-button>
  </div>
</template>

<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header';
export default {
  name: "uploadHeadImg",
  data() {
    return {
      initialIndex: null,
      imgs: []
    }
  },
  created() {
    this.getHeadImageList()
  },
  methods: {
    handleImgsClick(index) {
      this.initialIndex = index
    },
    // 获取头像图片数据
    async getHeadImageList() {
      let res = await axios.post('api/member/headimg')
      if (res.data.code === 200) {
        let list = res.data.data;
        for (let item of list) {
          this.imgs.push('https://api.btcexvip.top/' + item.url)
        }
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
    // 提交用户头像
    async handleSubmit() {
      if (this.initialIndex === null) {
        this.$toastBounce('Vui lòng chọn một hình đại diện!')
        return
      }
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/member/upd_head_img', {
        user_id: userId,
        head_img: this.imgs[this.initialIndex].split('https://api.btcexvip.top/')[1]
      })
      if (res.data.code === 200) {
        this.$toastBounce('Thay thế thành công!')
        this.$router.push({
          path: '/personal/user-info'
        })
      } else {
        this.$toastBounce(res.data.msg)
      }
    },
  },
  components: {
    Header
  },
}
</script>
<style lang="css" scoped>
.uploadHeadImg {
  width: 100%;
}
.content {
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  overflow: auto;
  height: 83%;
}
.cube-button {
  background: #DF5959;
  margin-top: 20px;
}
.imgs-container {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  /*justify-content: space-evenly;*/
}
.imgs-container div {
  width: 100px;
  height: 100px;
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
}
.imgs-container div .img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
}
.imgs-container div div {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.4);
  margin: 0;
  border-radius: 10px;
}
.imgs-container div div img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>