<template>
  <zui-view :loading="false">
    <div class="search-page">
      <div class="search-icon">
        <van-icon
          name="arrow-left"
          class="arrow-left"
          @click="$router.go(-1)"
        />
        <top-search
          input
          @search="onSearch"
          @empty="onEmpty"
          :keyword="keyword"
          placeholder="Tìm kiếm sản phẩm bạn muốn"
          :disabled="false"
        ></top-search>
      </div>
      <div
        v-show="showProduct"
        class="product-wrapper default-bg"
        id="productWrapper"
      >
        <mescroll-vue
          ref="mescroll"
          :down="mescrollDown"
          :up="mescrollUp"
          @init="mescrollInit"
        >
          <product-list :data-list="goodsList"></product-list>
        </mescroll-vue>
      </div>
      <div v-show="!showProduct" class="history-wrapper">
        <div class="title">
          <span>hồ sơ lịch sử</span>
          <i @click="clearHistory" class="iconshanchu iconfont"></i>
        </div>
        <div v-if="historyList.length > 0" class="history-list">
          <div
            class="item"
            :key="index"
            v-for="(item, index) in historyList"
            @click="handleClick(item)"
          >
            {{ item }}
          </div>
        </div>
        <div v-else class="empty">Không có lịch sử</div>
      </div>
    </div>
  </zui-view>
</template>

<script>
import TopSearch from '_com/top-search/top-search';
import ProductList from '_com/product-list/product-list';
import meScrollBase from '@/mixins/meScrollBase';
// import { searchGoods_api } from '_api/goods';
import { getGoodsList_api } from '_api/goods';
import { Icon } from 'vant';

export default {
  name: 'Search',
  mixins: [meScrollBase],
  components: {
    TopSearch,
    ProductList,
    [Icon.name]: Icon,
  },
  data() {
    return {
      keyword: 'default',
      showProduct: false,
      goodsList: [],
      queryList: {},
      historyList: [],
      // getList_api: searchGoods_api,
      getList_api: getGoodsList_api,
      mescrollUp: {
        empty: {
          tip: 'Không tìm thấy dữ liệu nào ~', //提示
          warpId: 'listWrap',
        },
      },
    };
  },
  mounted() {
    this.historyList = this._getHistoryList();
  },
  methods: {
    _requestBefore() {
      this.queryList = {
        ...this.queryList,
        page: 1,
        search_key: this.keyword,
      };
    },
    _requestAfter(list) {
      this.isSearch = true;
      if (this.params.page > 1 && list == 0) return;
      this.goodsList = list;
    },
    onDownPullRefresh() {
      this.goodsList = [];
      this.mescroll.hideUpScroll();
    },
    onEmpty() {
      this.historyList = this._getHistoryList();
      this.showProduct = false;
    },
    onSearch(keyword) {
      if (!this.isSearch) return;
      this.isSearch = false;
      this.keyword = keyword;
      this.showProduct = true;
      this.goodsList = [];
      this.mescroll.resetUpScroll();
      this.mescroll.hideTopBtn();
      this._addHistory(keyword);
    },
    handleClick(item) {
      this.keyword = item;
    },

    _getHistoryList() {
      let list = localStorage.getItem('historyList');
      if (list) {
        return JSON.parse(list);
      } else {
        return [];
      }
    },
    _addHistory(keyword) {
      let list = this._getHistoryList();
      let index = list.findIndex(item => item == keyword);
      if (index < 0) {
        list.push(keyword);
        localStorage.setItem('historyList', JSON.stringify(list));
      }
    },
    clearHistory() {
      this.historyList = [];
      localStorage.removeItem('historyList');
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.search-icon
  display:flex
  align-items: center
  justify-content :center
.product-wrapper {
  flex: 1;
  overflow: hidden;
}
.history-wrapper {
  padding: 20px 15px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
    .iconfont {
      padding: 6px;
    }
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    color: #999;
    height: 30px;
    line-height: 32px;
    padding: 0 14px;
    margin-right: 15px;
    margin-top: 15px;
    background-color: #F2F2F2;
    border-radius: 32px;
  }
}
.empty {
  color: #999;
  padding-top: 70px;
  text-align: center;
}
</style>
