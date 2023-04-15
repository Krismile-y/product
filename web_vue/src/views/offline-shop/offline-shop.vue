<template>
  <div class="shop-box">
    <Header :title="headerTitle"></Header>
    <div class="flex-scroll" id="toTopWrap">
      <mescroll-vue
        ref="mescroll"
        :down="mescrollDown"
        :up="mescrollUp"
        @init="mescrollInit"
      >
        <div class="shop-list">
          <div class="content" id="listWrap">
            <div
              class="shop-item"
              v-for="(item, index) in dataList"
              :key="index"
              @click="shop_list(item.id, item.name)"
            >
              <div class="shop-img">
                <img :src="item.thumb | imgPath" />
              </div>
              <div class="shop-name">{{ item.name }}</div>
              <div class="product">{{ item.plate_count }}件产品</div>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>

<script>
import Header from '_com/header/header';
import meScrollTab from '@/mixins/meScrollTab';
import { businessList_api } from '@/api/shop';
import { imgPath } from '../../libs/filters';
export default {
  mixins: [meScrollTab],
  components: {
    Header,
  },
  filters: {
    imgPath,
  },
  data() {
    return {
      headerTitle: 'dịch vụ ngoại tuyến',
      getList_api: businessList_api,
      list: [],
    };
  },

  methods: {
    shop_list(id, name) {
      var params = {
        plate_id: id,
        name: name,
        is_exchange: '',
        tip: 3,
        type: 'xianxia',
      };
      params = JSON.stringify(params);
      this.$router.push({
        path: '/goods-list/' + params,
      });
      localStorage.setItem('tip', 3);
    },
  },
};
</script>

<style scoped>
.shop-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.shop-list {
  flex: 1;
  overflow: scroll;
  margin: 0 10px;
}
.content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shop-item {
  margin-bottom: 10px;
}
.shop-name {
  margin: 10px 10px;
  font-size: 14px;
  font-weight: 700;
}
.product {
  margin: 10px 10px;
  font-size: 12px;
  color: #999999;
}
.shop-img img {
  width: 174px;
  height: 174px;
}
</style>
