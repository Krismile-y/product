<template>
  <div class="list-container default-bg" id="listWrap">
    <Header :title="headerTitle"></Header>
    <ul class="column column1" ref="col1">
      <router-link :to="$route.fullPath + '/product-detail/' + item.id" tag="li" :key="index"
        v-for="(item, index) in dataList1" class="product-item">
        <div class="img-box">
          <img :imgurl="'https://api.btcexvip.top/' + item.thumb | imgPath" src="~_assets/images/default-img.png" />
        </div>

        <div class="product-info">
          <div class="product-name">{{ item.goods_name }}</div>
          <div class="product-footer">
            <div v-if="tip == 4" class="pf-price">
              <p class="original-price">giá gốc：{{ Number(item.sell_price) }}₫</p>
              <p class="money-code-new">{{ parseFloat(item.pf_price) }}</p><span class="money-code "
                style="left: -43px;"></span>
            </div>
            <p style="color: #D89E63;font-size: 16px;" v-else-if="tip == 2">
              {{ Number(item.sell_price) }}Duobao vàng
            </p>
            <block v-else class="pf-price">
              <!--  vip的商品  -->
              <p class="money-code-new"
                style="width: 100%;display: flex;flex:1; justify-content: space-between;align-items: center"
                v-if="item.is_exchange !== 2">
                <span>{{ formaterMoney(item.sell_price) }}<span style="font-size: 0.5rem;">₫</span> </span>
                <span
                  style="font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;margin-right: 10px;"
                  :style="{ 'border': item.is_exchange === 1 ? 'none' : '1px solid red' }">{{ item.is_exchange | vipDengji
                  }}</span>
              </p>
              <!--  多多宝金的商品  -->
              <p class="money-code-new" style="color: #d89e63;font-size: 16px;" v-else>
                <span
                  style="color: #d89e63;font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;">{{
                    item.is_exchange | vipDengji }}</span>
                {{ Number(item.sell_price) }}<span class="money-code" style="left: -43px;"></span>
              </p>
              <p class="money-code-new" v-if="item.is_exchange === 2 && Number(item.vip_price)">
                {{ Number(item.vip_price)
                }}<span class="money-code" style="left: -43px;"></span><span style="font-size: 13px">(vip)</span>
              </p>
            </block>
          </div>
        </div>
      </router-link>
    </ul>
    <ul class="column column2" ref="col2">
      <router-link :to="$route.fullPath + '/product-detail/' + item.id" tag="li" :key="index"
        v-for="(item, index) in dataList2" class="product-item">
        <div class="img-box">
          <img :imgurl="'https://api.btcexvip.top/' + item.thumb | imgPath" src="~_assets/images/default-img.png" />
        </div>
        <div class="product-info">
          <div class="product-name">{{ item.goods_name }}</div>
          <div class="product-footer">
            <p style="color: #D89E63;font-size: 16px;" v-if="tip == 2">
              {{ Number(item.sell_price) }}Duobao vàng
            </p>
            <div v-else-if="tip == 4" class="pf-price">
              <p class="original-price">giá gốc：{{ Number(item.sell_price) }}₫</p>
              <p class="money-code-new">{{ Number(item.pf_price) }}<span class="money-code" style="left: -43px;"></span>
              </p>
            </div>

            <block v-else class="pf-price">
              <!--  vip的商品  -->
              <p class="money-code-new"
                style="width: 100%;display: flex; justify-content: space-between;align-items: center"
                v-if="item.is_exchange !== 2">
                <span>{{ formaterMoney(item.sell_price) }} <span style="font-size: 0.5rem;">₫</span> </span>
                <span
                  style="font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;margin-right: 10px;"
                  :style="{ 'border': item.is_exchange === 1 ? 'none' : '1px solid red' }">{{ item.is_exchange | vipDengji
                  }}</span>
              </p>
              <!--  多宝金的商品  -->
              <p class="money-code-new" style="color: #d89e63;font-size: 16px;" v-else>
                <span
                  style="color: #d89e63;font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;">{{
                    item.is_exchange | vipDengji }}</span>
                {{ Number(item.sell_price) }}<span class="money-code" style="left: -43px;"></span>
              </p>
            </block>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { imgPath } from '@/libs/filters';
// import {formaterMoney} from '@/libs/utils';
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    tip: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      dataList1: [],
      dataList2: [],
    };
  },
  filters: {
    imgPath,
    vipDengji(value) {
      console.log(value);
      switch (value) {
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
  watch: {
    dataList(newValue) {
      if (newValue.length == 0) {
        this.dataList1 = [];
        this.dataList2 = [];
      } else {
        this.mountMenu();
      }
    },
  },
  methods: {
    mountMenu(arg) {
      var temp = this.dataList;
      var index = arg || 0;
      var refName = this.selectCol();
      if (temp.length > index) {
        this[refName].push(this.dataList[index]);
        this.$nextTick(() => {
          this.mountMenu(index + 1);
        });
      }
    },
    selectCol() {
      var getHeight = ref => {
        return this.$refs[ref].offsetHeight;
      };
      var height1 = getHeight('col1');
      var height2 = getHeight('col2');
      switch (Math.min(height1, height2)) {
        case height1:
          return 'dataList1';
        case height2:
          return 'dataList2';
      }
    },
    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        console.log(right,':right')

        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('') ;
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
.list-container {
  overflow: hidden;
  padding: 0 5px 10px;
  .column {
    width: 50%;
    box-sizing: border-box;
    padding: 0 5px;
  }
  .column1 {
    float: left;
  }
  .column2 {
    float: right;
  }
}
.pf-price {
  width 100%
  display flex
  align-items center
  justify-content space-between
}
.product-item {
  width 100%;
  background #fff;
  margin-top: 10px;
}
.original-price {
  font-size 12px
  color #DF5959
  text-decoration line-through
}
.img-box {
  width 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background #fff;
  margin auto;
}
img {
  width: 86%;
  height: auto;
  margin: 1% 7%
  object-fit: cover;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  padding: 5px 10px 10px;
  border-radius: 0 0 5px 5px
}
.product-name {
  //mult_line_ellipsis();
  font-size: 15px;
  line-height: 1.3;
  /*font-weight: 700;*/
  margin-bottom: 5px;
  white-space nowrap
  text-overflow: ellipsis
  overflow hidden
  margin-top 10px
}
.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom 5px
  margin-top 5px
  .right-info {
    color: rgba(0, 0, 0, 0.4);
    font-size: 10px;
  }
}
.money-code {
  font-weight: 400 !important;
}
</style>
