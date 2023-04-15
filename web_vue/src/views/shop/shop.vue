<template>
  <div class="shop-box">
    <Header :title="headerTitle"></Header>
    <div class="shop-list">
      <div
        class="shop-item"
        v-for="(item, index) in plateList.list"
        :key="index"
        @click="shop_list(item.id, item.name)"
        :style="{ backgroundImage: 'url(' + item.thumb + ')' }"
      ></div>
      <div class="shop-item offline" @click="onItem"></div>
    </div>
  </div>
</template>

<script>
import { plateList_api } from '_api/shop';
import { getHomeGoods_api } from '_api/goods';
import Header from '_com/header/header';
import { imgPath } from '@/libs/filters';

export default {
  components: {
    Header,
  },
  data() {
    return {
      plateList: [],
      headerTitle: '门店入驻',
      bg: require('../../assets/images/offline.png'),
    };
  },
  // filters: {
  //     imgPath,
  // },
  async created() {
    this.plateList = await plateList_api();
    this.plateList.list.forEach(v => {
      v.thumb = imgPath(v.thumb);
      console.log(v);
    });
  },
  methods: {
    shop_list(id, name) {
      var params = {
        plate_id: id,
        name: name,
        is_exchange: '',
        tip: 3,
      };
      params = JSON.stringify(params);
      this.$router.push({
        path: '/goods-list/' + params,
      });
      localStorage.setItem('tip', 3);
    },

    onItem() {
      this.$router.push({
        path: '/offline-shop',
      });
    },
  },
};
</script>

<style scoped src="./shop.styl" lang="stylus"></style>
