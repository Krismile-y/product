<template>
  <div class="membership">
    <Header title="Quy tắc cấp độ thành viên"></Header>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import axios from "../../api/request_two";
export default {
  name: "membership",
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
        id: 8
      })
      if (res.data.code === 200) {
        this.content = res.data.data.content
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

</style>