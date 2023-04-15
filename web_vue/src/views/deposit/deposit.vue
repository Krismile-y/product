<template>
  <div class="flex-column">
    <Header :title="title"></Header>
    <van-tabs
      v-model="active"
      @change="changeTab"
      class="tabs-list"
      title-active-color="#DC0000"
      title-inactive-color="#000000"
    >
      <van-tab
        :title="item"
        v-for="(item, index) in tabs"
        :key="index"
      ></van-tab>
    </van-tabs>
    <div class="tab-panel flex-scroll" id="toTopWrap">
      <mescroll-vue
        ref="mescroll"
        :up="mescrollUp"
        :down="mescrollDown"
        @init="mescrollInit"
      >
        <div class="goods-list" id="listWrap">
          <div
            class="goods-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <!--寄售中-->
            <div class="top-title" v-if="active === 0">
              <div class="count-down">
                <div>{{ _endTime(item.create_time) }}</div>
              </div>
              <div class="status">trên lô hàng</div>
            </div>

            <div class="work-off" v-else-if="active === 1 || active === 2">
              <div class="user-box">
                <div class="bottom-box">
                  <div class="user-name">{{ item.username }}</div>
                  <div class="phone">{{ item.phone }}</div>
                </div>
                <div class="buyer">{{ item.username }}mua</div>
              </div>
            </div>

            <div class="goods-box">
              <div class="info">
                <div class="goods-img">
                  <img :src="item.goods.thumb | imgPath" />
                </div>
                <div class="right-box">
                  <div class="goods-name">{{ item.goods.goods_name }}</div>
                  <div>Số lượngx{{ item.number }}</div>
                  <div>giá sỉ：₫{{ item.total_price }}</div>
                </div>
              </div>
              <div class="price">
                <div>
                  giá ký gửi：<span>₫{{ item.original_price }}</span>
                </div>
                <div class="status">
                  {{
                    active === 1
                      ? 'Đã thanh toán, chờ nhận hàng.'
                      : active === 2
                      ? 'Đã nhận được hàng và giao hàng đầy đủ.'
                      : ''
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>
<script src="./deposit.js"></script>
<style lang="stylus" scoped src="./deposit.styl"></style>
