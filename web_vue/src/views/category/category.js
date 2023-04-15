import TopSearch from '_com/top-search/top-search';
import meScrollBase from '@/mixins/meScrollBase';
import { getGoodsList_api, getCategory_api } from '_api/goods';
import { imgPath } from '@/libs/filters';

export default {
  name: 'Category',
  mixins: [meScrollBase],
  components: {
    TopSearch,
  },
  data() {
    return {
      queryList: {},
      getList_api: getGoodsList_api,
      categorys: [],
      // 一级分类
      labels: [],
      categoryIndex: 0,
      categoryText: [],
      categoryList: [],
      // 子分类
      subCategoryId: 0,
      subCategory: [
        {
          id: 0,
          cate_name: 'Tất cả',
        },
      ],
    };
  },
  mounted() {
    this._calculateNavBar();
  },
  computed: {
    // 选中的分类ID
    categoryId() {
      return this.categoryList[this.categoryIndex].id;
    },
  },
  filters: {
    imgPath,
    vipDengji(value) {
      console.log(value);
      switch(value) {
        case 1:
          return ''
        case 2:
          return '多宝金'
        case 3:
          return 'VIP1'
        case 4:
          return 'VIP2'
        case 5:
          return 'VIP3'
        case 6:
          return 'VIP4'
        case 7:
          return 'VIP5'
      }
    },
  },
  methods: {
    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';

        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('');
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    },
    // 获取一级分类
    async _getFirstCategory() {
      return new Promise(async resolve => {
        let params = {
          parent_id: 0,
        };
        let res = await getCategory_api(params);
        let category = [];
        let labels = [];
        res.data.forEach((item, index) => {
          labels.push(index);
          category.push(item.cate_name);
        });
        this.labels = labels;
        this.categoryText = category;
        this.categoryList = res.data;
        resolve();
      });
    },
    // 获取子分类
    _getSubCategory() {
      return new Promise(async resolve => {
        let res = await getCategory_api(this.categoryId);
        this.subCategory = this.subCategory.concat(res.data);
        resolve();
      });
    },
    // 点击一级分类
    handlerChangeCategory(cur) {
      this.subCategory = [
        {
          id: 0,
          cate_name: 'Tất cả',
        },
      ];
      this.categoryIndex = cur;
      this._getSubCategory();
      this.handleChangeTab(0);
    },
    // 点击子分类
    handleChangeTab(id) {
      // if (this.subCategoryId == id) return;
	  
      this.cancel('cancel');
      this.subCategoryId = id;
      this.dataList = [];
      this.mescroll.resetUpScroll();
      this.mescroll.hideTopBtn();
    },
    _requestBeforeOnceInit() {
      return new Promise(async resolve => {
        await this._getFirstCategory();
        await this._getSubCategory();
        resolve();
      });
    },
    _requestBefore() {
      this.queryList = {
        ...this.queryList,
        type_id: this.subCategoryId,
        // subtype_id: this.subCategoryId,
      };
    },
    _calculateNavBar() {
      this.$nextTick(() => {
        let wrapperH = this.$refs.scrollWrapper.offsetHeight;
        this.$refs.scrollContent.style.minHeight = wrapperH + 1 + 'px';
      });
    },
  },
};
