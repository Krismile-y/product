<template>
  <div class="app">
    <div class="delivery">
      <Header :title="title" class="Header"></Header>
      <div
        class="customer-steps van-steps van-steps--vertical"
        v-if="list !== null"
      >
        <div
          class="van-steps__items"
          v-for="(item, index) in list"
          :key="index"
        >
          <div
            class="van-hairline van-step van-step--vertical van-step--process"
          >
            <div class="van-step__title">
              <h3>{{ item.status }}</h3>
              <p>{{ item.time }}</p>
            </div>
            <div class="van-step__circle-container">
              <i
                class="van-icon van-icon-checked van-step__icon"
                style="color: rgb(7, 193, 96);"
              ></i>
            </div>
            <div class="van-step__line"></div>
          </div>
        </div>
      </div>
      <div
        v-if="!list"
        style="text-align: center; font-size: 18px; padding: 50px; color: #999; border-top: 1px solid #e5e5e5"
      >
        Không có thông tin hậu cần
      </div>
    </div>
  </div>
</template>

<script>
import { delivery_api } from '_api/order';
import Header from '_com/header/header';
export default {
  name: 'Delivery',
  components: {
    Header,
  },
  data() {
    return {
      list: [],
      title: 'thông tin hậu cần',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      let data = await delivery_api(this.$route.query.order_sn);
      if (data.length > 0) {
        this.list = data;
      } else {
        this.list = null;
      }
      console.log(data.data);
    },
  },
};
</script>

<style scoped>
.delivery {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.van-steps--vertical {
  padding: 0 0 0 32px;
}
.van-steps {
  overflow: scroll;
  height: 100%;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.van-step--vertical {
  display: block;
  float: none;
  padding: 10px 10px 10px 0;
  line-height: 18px;
}
.van-step {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  color: #969799;
  font-size: 14px;
}
.van-step--vertical:first-child:before {
  position: absolute;
  top: 0;
  left: -15px;
  z-index: 1;
  width: 1px;
  height: 20px;
  background-color: #fff;
  content: '';
}
.van-step--vertical {
  display: block;
  float: none;
  padding: 10px 10px 10px 0;
  line-height: 18px;
}
van-step--vertical .van-step__circle-container {
  position: absolute;
  top: 19px;
  left: -15px;
  z-index: 2;
  font-size: 12px;
  line-height: 1;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.van-step--vertical .van-step__line {
  top: 16px;
  left: -15px;
  width: 1px;
  height: 100%;
}
.van-step__line {
  position: absolute;
  background-color: #ebedf0;
}
.van-step:last-child .van-step__line {
  width: 0;
}
.van-step--vertical .van-step__line {
  top: 16px;
  left: -15px;
  width: 1px;
  height: 100%;
}
.van-step__line {
  position: absolute;
  background-color: #ebedf0;
}
</style>
