export default {
  data() {
    return {
      documentHeight: document.body.clientHeight,
      showHeight: document.body.clientHeight,
      isShow: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.showHeight = document.body.clientHeight;
    },
  },
  watch: {
    showHeight() {
      if (this.documentHeight > this.showHeight) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
};
