<template>
  <zui-view :loading="false">
    <div class="search-page">
      <!--      <top-search input @search="onSearch"></top-search>-->
      <Header :title="headerTitle"></Header>
      <div class="product-wrapper default-bg">
        <mescroll-vue
          ref="mescroll"
          :down="mescrollDown"
          :up="mescrollUp"
          @init="mescrollInit"
        >
          <product-list :data-list="goodsList" :tip="tip"></product-list>
        </mescroll-vue>
      </div>
    </div>
  </zui-view>
</template>

<script>
// import TopSearch from '_com/top-search/top-search';
import { getVipGoodsList_api,getDuobaoGoodsList_api } from '_api/goods';
import productListMixin from '@/mixins/productListMixin';
import Header from '_com/header/header';

export default {
  name: 'GoodsList',
  mixins: [productListMixin],
  components: {
    // TopSearch,
    Header,
  },
  data() {
    return {
      getList_api: getVipGoodsList_api,
      headerTitle: '',
      is_exchange: 2,
      tip: 0,
      type: '',
    };
  },
  created() {
    if (JSON.parse(this.$route.params.type_id).name === '多宝专区') {
      this.getList_api = getDuobaoGoodsList_api;
    }
  },
  async mounted() {
    // this.type_id = this.$route.params.type_id;
    var params = JSON.parse(this.$route.params.type_id);
    this.plate_id = params.plate_id;
    this.type = params.type;
    this.tip = params.tip;
    console.log(this.tip);
    localStorage.setItem('tip', params.tip);
    this.is_exchange = params.is_exchange;
    this.headerTitle = params.name;
    if (params.tip == 2) {
      localStorage.setItem('qianbao', 200);
    }
  },
  methods: {
    _requestBefore() {
      //请求传参数
      if (this.type === 'xianxia') {
        this.queryList = {
          ...this.queryList,
          subplate_id: this.plate_id,
          is_exchange: this.is_exchange,
        };
      } else {
        this.queryList = {
          ...this.queryList,
          plate_id: this.plate_id,
          is_exchange: this.is_exchange,
        };
      }
    },
    onSearch(keyword) {
      this.queryList = {
        ...this.queryList,
        page: 1,
        name: keyword,
      };
      this.dataList = [];
      this.mescroll.resetUpScroll();
      this.mescroll.hideTopBtn();
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-page
  display flex
  flex-direction column
  height 100%
.product-wrapper
  flex 1
  overflow hidden
</style>
