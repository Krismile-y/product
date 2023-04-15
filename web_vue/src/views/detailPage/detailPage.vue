<template>
  <div class="content">
    <Header :title="item.title"></Header>
    <div class="product-info">
      <div class="" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import { getTour_api } from '@/api/goods';
export default {
  components: {
    Header,
  },
  data() {
    return {
      type: '',
      id: '',
      item: {},
    };
  },

  created() {
    let params = this.$route.query;
    this.type = params.type;
    this.id = params.id;
    this.getData();
  },

  methods: {
    async getData() {
      let res = await getTour_api({ id: this.id });
      console.log(res);
      this.item = res.list;
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
}
.product-info {
  flex: 1;
  overflow-y: scroll;
  padding-top: 10px;
}
.bottom {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 50px;
  background: #ffffff;
}
.price {
  color: #e89222;
  font-size: 18px;
}
.buy {
  width: 100px;
  height: 40px;
  background: #dc0000;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
