import { afterSaleList_api, saleApply_api } from '_api/order';

import ZuiPopup from '_com/popup/popup';
import meScrollBase from '@/mixins/meScrollBase';
import { imgPath } from '@/libs/filters';

export default {
  mixins: [meScrollBase],
  components: {
    ZuiPopup,
  },
  data() {
    return {
      isInit: true,
      queryList: {},
      isPopup: false,
      selectedOrder: {},
      inputValue: '',
      mescrollUp: {
        toTop: {
          warpId: 'toTopWrap',
        },
      },
      getList_api: afterSaleList_api,
      dataList: [],
    };
  },
  filters: {
    imgPath,
  },
  computed: {
    title() {
      let { type } = this.selectedOrder;
      return type == 1 ? '退款' : '换货';
    },
  },
  methods: {
    _requestAfter(list) {
      list.forEach(item => {
        // console.log(item)
        item.isOpen = false;
        item.ordersh.forEach(val => {
          let { status, refund, change } = val;
          if ((refund && status == 5) || status == 6) {
            if (refund.reply) {
              val.title = '商家回复';
              val.value = refund.reply;
            } else {
              val.title = '退款理由';
              val.value = refund.desc;
            }
            // val.value = refund.desc;
          } else if (change) {
            if (change.reply) {
              val.title = '商家回复';
              val.value = change.reply;
            } else {
              val.title = '换货理由';
              val.value = change.desc;
            }
          }
        });
      });
    },
    handleOpenDialog(item, type) {
      this.selectedOrder = {
        ...item,
        type,
      };
      this.isPopup = true;
    },
    onCommentClosed() {
      this.inputValue = '';
    },
    async handleSubmit() {
      if (!this.inputValue.trim()) {
        this.$toastBounce('申请理由不能为空');
        return;
      }
      this.isPopup = false;
      this.$toast('đang tải...');
      const { type, goods_id, order_id } = this.selectedOrder;
      let params = {
        type,
        order_id,
        goods_id,
        desc: this.inputValue,
      };
      await saleApply_api(params);
      this.dataList = [];
      this.mescroll.hideTopBtn();
      this.mescroll.resetUpScroll();
      this.$toast({
        type: 'success',
        content: '申请成功',
        time: 1000,
      });
    },
  },
};
