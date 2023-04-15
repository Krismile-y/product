import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    getPriceByLevel(price) {
      let { status } = this.userInfo;
      let { discount } = this.userInfo.user_level;
      switch (status) {
        case 0:
          return '<span class="price-status">未审核<span/>';
        case 1:
          return '<span class="price-status">审核中<span/>';
        case 2:
          return `<span class="price-code">${Number(
            (price * discount).toFixed(2),
          )}<span/>`;
        case 3:
          return '<span class="price-status">审核未通过<span/>';
        default:
          break;
      }
    },
  },
};
