<template>
  <div class="safety">
    <Header title="bảo vệ" fontSize="20px" iconSize="30px"></Header>
    <div class="content">
      <div class="context" v-html="content">
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../api/request_two';
import Header from '../../components/header/header';
export default {
  name: "safety",
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    // 获取内容
    async getContent() {
      let res = await axios.post('api/index/gywm', {
        id: 1
      })
      if (res.data.code === 200) {
        this.content = res.data.data.content
        // 替换
        this.content = this.content.replaceAll('<img', '<img  width="100%" ')
        this.content = this.content.replaceAll('<p', '<o  style="line-height:0.6rem;" ')
      } else {
        this.$toastBounce('Tìm nạp nội dung không thành công, vui lòng thử lại sau!')
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
.safety {
  width: 100%;
  height: 100vh;
  overflow: auto;
  font-family: Source Han Sans CN;
}
.content {
  width: 100%;
  height: calc(100% - 44px);
  overflow: auto;
}
.content h2 {
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-size: 22px;
  margin-top: 25px;
}
.content .context {
  width: 95%;
  margin: 24px auto 10px;
  box-sizing: border-box;
  font-size: 16px;
  color: #808080;
}
</style>