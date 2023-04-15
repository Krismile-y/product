<template>
  <div class="property">
    <Header :title="headerTitle"></Header>
    <div class="qd-box" v-if="isShow === 'qiandou'">
      <div class="totality-box">
        <div class="title">Qiandou của tôi</div>
        <div class="totality">{{ num.total ? num.total : 0 }}</div>
      </div>
      <div class="details">
        <div class="item">
          <div class="item-title">lợi nhuận ký gửi</div>
          <div class="item-num">
            ₫<span>{{ num.qiandou_js ? num.qiandou_js : 0 }}</span>
          </div>
        </div>
        <div class="item">
          <div class="item-title">chia sẻ phần thưởng</div>
          <div class="item-num">
            ₫<span>{{ num.qiandou_fx ? num.qiandou_fx : 0 }}</span>
          </div>
        </div>
        <div class="item">
          <div class="item-title">ưu đãi đại lý</div>
          <div class="item-num">
            ₫<span>{{ num.qiandou_dl ? num.qiandou_dl : 0 }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="qb-box" v-else-if="isShow === 'qianbao'">
      <div class="totality-box">
        <div class="title">kho báu của tôi</div>
        <div class="totality">{{ num.total ? num.total : 0 }}</div>
      </div>
      <div class="details">
        <div class="item">
          <div class="item-title">Lô hàng Duobao</div>
          <div class="item-num">
            ₫<span>{{ num.jishou ? num.jishou : 0 }}</span>
          </div>
        </div>
        <div class="item">
          <div class="item-title">Đăng nhập Duobao</div>
          <div class="item-num">
            ₫<span>{{ num.qiandao ? num.qiandao : 0 }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="fh-box" v-else>
      <div class="totality-box">
        <div class="title">điểm tích lũy</div>
        <div class="totality">{{ num.total ? num.total : 0 }}</div>
      </div>
      <div class="details">
        <div class="item">
          <div class="item-title">Tổng điểm hiện tại</div>
          <div class="item-num">
            ₫<span>{{ num.fh_total ? num.fh_total : 0 }}</span>
          </div>
        </div>
        <div class="item">
          <div class="item-title">Điểm hiện tại của tôi</div>
          <div class="item-num">
            ₫<span>{{ num.my_fh ? num.my_fh : 0 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '_com/header/header';
import { detailUser_api } from '_api/user';
export default {
  components: {
    Header,
  },
  data() {
    return {
      isShow: '',
      num: {},
      headerTitle: 'chi tiết',
    };
  },
  created() {
    this.isShow = this.$route.params.type;
    this.getData();
  },
  computed: {
    type() {
      let type = this.$route.params.type;
      if (type === 'qiandou') {
        return 1;
      } else if (type === 'qianbao') {
        return 2;
      } else {
        return 3;
      }
    },
  },
  methods: {
    async getData() {
      let res = await detailUser_api({ tip: this.type });
      console.log(res);
      this.num = res;
    },
  },
};
</script>

<style scoped src="./property.styl" lang="stylus"></style>
