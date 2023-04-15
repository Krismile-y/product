import meScrollBase from '@/mixins/meScrollBase';
import ProductList from '_com/product-list/product-list';
export default {
  components: {
    ProductList,
  },
  mixins: [meScrollBase],
  data() {
    return {
      goodsList: [],
    };
  },
  methods: {
    _requestAfter(list) {
      if (this.params.page > 1 && list == 0) return;
      console.log(this.goodsList)
      this.goodsList = list;
    },
    onDownPullRefresh() {
      this.goodsList = [];
      this.mescroll.hideUpScroll();
    },
  },
};
