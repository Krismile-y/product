<template>
  <div class="default-bg" id="toTopWrap">
    <mescroll-vue
      ref="mescroll"
      :up="mescrollUp"
      :down="mescrollDown"
      @init="mescrollInit"
    >
      <ul class="panel-list" id="listWrap">
        <li
          class="panel-item"
          v-for="(item, index) in dataList"
          :key="item.id"
          :data-index="index"
        >
          <div class="panel-item__hd border-1px--bottom">
            <span class="left">Số thứ tự：{{ item.order_num }}</span>
          </div>
          <div class="panel-item__bd">
            <ul class="product-list">
              <li
                class="product-item border-1px--top"
                v-for="val in item.ordersh"
                :key="val.id"
              >
                <div class="item-body">
                  <div class="product-item__left">
                    <img
                      class="picture"
                      :imgurl="val.goods.thumb | imgPath"
                      src="../../assets/images/default-img.png"
                    />
                  </div>
                  <div class="product-item__right">
                    <div class="name">{{ val.goods.goods_name }}</div>
                    <div class="number">Số lượng：{{ val.number }}</div>
                    <div class="price">
                      tổng phụ：₫{{ Number(val.total_price) }}
                    </div>
                  </div>
                </div>
                <div class="postage_money">vận chuyển hàng hóa：₫{{ item.postage_money }}</div>
                <div class="panel-bd__ft">
                  <template v-if="val.status > 1 && val.status < 5">
                    <button class="outline" @click="handleOpenDialog(val, 1)">
                      Yêu cầu hoàn lại
                    </button>
                    <button class="primary" @click="handleOpenDialog(val, 2)">
                      Áp dụng cho một sự thay thế
                    </button>
                  </template>

                  <button v-if="val.status == 5" class="error">
                    Yêu cầu hoàn lại tiền
                  </button>
                  <button v-if="val.status == 6" class="disabled">
                    hoàn trả
                  </button>
                  <button v-if="val.status == 7" class="error">
                    Áp dụng cho một sự thay thế
                  </button>
                  <button v-if="val.status == 8" class="disabled">
                    trao đổi
                  </button>
                </div>

                <div class="panel-item__ft" v-if="val.title && val.value">
                  <div
                    class="detail-hd"
                    v-show="!item.isOpen"
                    @click="item.isOpen = !item.isOpen"
                  >
                    <span class="label" v-if="val.title && val.value"
                      >{{ val.title }}：{{ val.value }}</span
                    >
                    <span class="value">chi tiết</span>
                    <i class="cubeic-select"></i>
                  </div>

                  <div class="detail-bd" v-show="item.isOpen">
                    <div class="detail__item">
                      <span class="detail__label">{{ val.title }}：</span>
                      <span class="detail__value">{{ val.value }}</span>
                    </div>
                    <div class="time">
                      {{
                        val.refund
                          ? val.refund.create_time
                          : val.change.create_time
                      }}
                    </div>
                    <div
                      class="detail__close"
                      @click="item.isOpen = !item.isOpen"
                    >
                      <span>cất đi</span>
                      <i class="cubeic-select"></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </mescroll-vue>
    <!-- 评价 -->
    <zui-popup
      :visible.sync="isPopup"
      position="center"
      @closed="onCommentClosed"
    >
      <div class="dialog-container">
        <div class="o-dialog__header">
          <span>Áp dụng{{ title }}</span>
          <span @click="isPopup = false" class="cancel">Hủy bỏ</span>
        </div>
        <div class="o-dialog__order" v-if="selectedOrder.goods">
          <img :src="selectedOrder.goods.thumb | imgPath" />
          <p class="ellipsis">{{ selectedOrder.goods.goods_name }}</p>
          <p>Số lượng：{{ selectedOrder.number }}</p>
        </div>
        <div class="o-dialog__comment border-1px--top-bottom">
          <cube-textarea
            v-model="inputValue"
            :maxlength="120"
            indicator="indicator"
            :placeholder="'vui lòng nhập' + title + 'lý do'"
            style="color: red"
          ></cube-textarea>
        </div>
        <div class="o-dialog__submit" @click="handleSubmit">Áp dụng</div>
      </div>
    </zui-popup>
  </div>
</template>
<script src="./service.js"></script>
<style lang="stylus" scoped src="./service.styl"></style>
