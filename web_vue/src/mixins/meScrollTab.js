import meScrollBase from './meScrollBase';
export default {
  mixins: [meScrollBase],
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    // 点击侧边栏
    handleChangeTab() {
      this.cancel('cancel');
      this.dataList = [];
      this.mescroll.hideTopBtn();
      this.mescroll.resetUpScroll();
    },
  },
};
