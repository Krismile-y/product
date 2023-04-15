<template>
  <div class="shopping-cart-page default-bg">
    <div class="flex-scroll" id="shopCartToTopWrap">
      <mescroll-vue
        ref="mescroll"
        :down="mescrollDown"
        :up="mescrollUp"
        @init="mescrollInit"
      >
        <cube-swipe>
          <ul class="order-list" id="listWrap">
            <li
              class="order-item"
              v-for="(goods, index) in dataList"
              :key="goods.item.id"
            >
              <cube-swipe-item
                ref="swipeItem"
                :btns="goods.btns"
                :index="index"
                @btn-click="onBtnClick"
              >
                <div
                  class="swipe-item-content"
                  @click="handleClickItem(goods.item, goods)"
                >
                  <div class="checkbox-wrap">
                    <div class="checkbox-mask"></div>

                    <cube-checkbox
                      v-if="!goods.item.isSale"
                      class="not-text"
                      :option="{ disabled: true }"
                    ></cube-checkbox>

                    <cube-checkbox
                      v-else
                      class="not-text"
                      v-model="goods.item.isChecked"
                    ></cube-checkbox>
                  </div>
                  <img
                    class="order-pic"
                    :imgurl="goods.item.goods.thumb | imgPath"
                    src="../../assets/images/default-img.png"
                  />
                  <div class="order-right">
                    <div class="order-name">
                      {{ goods.item.goods.goods_name }}
                    </div>
                    <!-- <span class="guigeStyle">Số lượng：{{ goods.item.goods.sell_name }}</span> -->
                    <div
                      class="not-sale"
                      v-if="
                        goods.item.goods.delete_time ||
                          goods.item.goods.is_show === 2
                      "
                    >
                      Mặt hàng này không còn nữa
                    </div>
                    <div class="order-footer" v-else>
                      <span class="money-code1">
<!--                        {{-->
<!--                          goods.item.tip === 3-->
<!--                            ? goods.item.goods.sell_price-->
<!--                            : goods.item.goods.pf_price-->
<!--                        }}-->
                        {{ formaterMoney(goods.item.goods.sell_price) }}
                      </span>
                      <div class="number-contrl">
                        <div
                          class="reduce"
                          :class="{ active: goods.item.number > 1 }"
                          @click.stop="handleClickReduce(goods.item)"
                        >
                          <i class="iconfont iconjianshao"></i>
                        </div>
                        <div class="num">{{ goods.item.number }}</div>
                        <div
                          class="add active"
                          @click.stop="handleClickAdd(goods.item)"
                        >
                          <i class="iconfont iconzengjia"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<!--                <div class="tip">-->
<!--                  <div>{{ goods.item.tip === 3 ? '云店' : '批发' }}</div>-->
<!--                </div>-->
              </cube-swipe-item>
            </li>
          </ul>
        </cube-swipe>
      </mescroll-vue>
    </div>
    <div class="footer-wrapper">
      <div class="checkbox-wrap" @click="handleCheckedAll">
        <div class="checkbox-mask"></div>
        <cube-checkbox @click.native="handleCheckedAll" v-model="isCheckedAll"
          >Chọn tất cả</cube-checkbox
        >
      </div>
      <div class="total">
        <div>Tổng cộng:</div>
        <div class="money-d">{{ totalObject.price === 0 ? '' : totalObject.price }}₫</div>
        <!-- stlye="font-size:12px !important;text-decoration:none;" -->
      </div>
      <cube-button
        :disabled="!isSubmit"
        inline
        @click="handleSubmit"
        class="cube-button"
      >
        Thanh toán
        <template v-if="totalObject.count"
          >({{ totalObject.count }})</template
        >
      </cube-button>
    </div>
  </div>
</template>

<script src="./shopping-cart.js">
</script>
<style lang="stylus" scoped src="./shopping-cart.styl"></style>
