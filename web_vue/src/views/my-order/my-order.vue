<template>
  <div class="flex-column">
    <Header :title="headerTitle"></Header>
    <cube-tab-bar
      class="tab-bar__custom"
      show-slider
      v-model="tabIndex"
      @change="handleChangeTab"
    >
      <cube-tab v-for="(item, index) in tabs" :label="index" :key="index">
        <div class="zui-tab">{{ item }}</div>
      </cube-tab>
    </cube-tab-bar>
    <popup :visible.sync="visiblePopup">
      <div class="popup-container">
        <div class="popup-title">Gợi ý</div>
        <div class="popup-sub-title">Bạn có chắc chắn nhận được hàng không?</div>
        <div class="popup-btns border-1px--top">
          <div class="btn border-1px--right" @click="visiblePopup = false">
            Hủy bỏ
          </div>
          <div class="btn" @click="okClick">Xác nhận</div>
        </div>
      </div>
    </popup>
    <div class="tab-panel flex-scroll" id="toTopWrap">
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
              <span class="right">{{ item.status | formatStatus }}</span>
            </div>
            <div class="panel-item__bd border-1px--bottom">
              <ul class="product-list">
                <li
                    class="product-item"
                >
                  <div class="product-item__left">
                    <img
                        class="picture"
                        :imgurl="'https://api.btcexvip.top/' + item.goods_img | imgPath"
                        src="../../assets/images/default-img.png"
                    />
                  </div>
                  <div class="product-item__right">
                    <div class="name">
                      {{ item.goods_name}}
<!--                      <span-->
<!--                        style="color: #dc0000; margin-left: 10px"-->
<!--                        v-if="!val.stock"-->
<!--                      >(库存不足)-->
<!--                      </span>-->
                    </div>
                    <div class="number">Số lượng：{{ item.number }}</div>
                    <!--  余额商品  -->
                    <div class="price" v-if="item.pay_type === 1">
                      Tổng phụ：₫{{
                        // item.tip === 2 ? item.qianbao : Number(val.total_price)
                        item.total_price
                      }}
<!--                      <button-->
<!--                          v-if="val.order_sn && item.status < 4"-->
<!--                          class="comment-btn logistics"-->
<!--                          @click="-->
<!--                          $router.push('/delivery?order_sn=' + val.order_sn)-->
<!--                        "-->
<!--                      >-->
<!--                        查看物流-->
<!--                      </button>-->
                    </div>
                    <!--  多宝金商品  -->
                    <div class="price" v-else>
                      Tổng phụ：{{
                        // item.tip === 2 ? item.qianbao : Number(val.total_price)
                        item.total_price
                      }}Duobao vàng
                      <!--                      <button-->
                      <!--                          v-if="val.order_sn && item.status < 4"-->
                      <!--                          class="comment-btn logistics"-->
                      <!--                          @click="-->
                      <!--                          $router.push('/delivery?order_sn=' + val.order_sn)-->
                      <!--                        "-->
                      <!--                      >-->
                      <!--                        查看物流-->
                      <!--                      </button>-->
                    </div>
<!--                    <template v-if="item.status == 4">-->
<!--                      <button v-if="item.comment" class="comment-btn already">-->
<!--                        已评价-->
<!--                      </button>-->
<!--                      <button-->
<!--                          v-else-->
<!--                          class="comment-btn primary"-->
<!--                          @click="handleShowComment(item)"-->
<!--                      >-->
<!--                        去评价-->
<!--                      </button>-->
<!--                    </template>-->
                  </div>
                  <div v-if="item.status === 5" class="apply">
                    Sản phẩm này đang yêu cầu hoàn lại tiền
                  </div>
                  <div v-if="item.status === 6" class="apply">Mặt hàng này đã được hoàn lại</div>
                  <div v-if="item.status === 7" class="apply">
                    Sản phẩm này đang yêu cầu thay thế
                  </div>
                  <div v-if="item.status === 8" class="apply">
                    Mặt hàng này đã được trao đổi
                  </div>
                </li>
              </ul>
              <div class="panel-bd__ft">
                <div class="left">
                  <div class="postage_money">
                    Vận chuyển hàng hóa：₫<span class="postage_money_active">0.00</span>
                  </div>
                  <div class="total">
                    <span>Tổng cộng：</span>
                    <span v-if="item.tip === 2" style="font-size: 13px">Sản phẩm này cần được đổi sang Duobao</span>

                    <span class="money-code-new" v-else>{{
                        Number(item.total_price)
                      }} <span class="money-code"></span></span>
                  </div>
                </div>
                <div class="right">
                  <!-- <template v-if="item.status == 1">
                    <button class="outline" @click="handleCancelOrder(item.id)">
                      Hủy bỏ
                    </button>
                    <button class="primary" @click="handlePayment(item)">
                      去付款
                    </button>
                  </template> -->
                  <!--                  <button v-if="val.order_sn && item.status < 4" class="comment-btn" @click="$router.push('/delivery?order_sn=' + val.order_sn)">查看物流>></button>-->
                  <button
                    class="primary harvest"
                    v-if="item.status === 2"
                    @click="handleOrderFinish(item.id)"
                  >
                    Xác nhận đã nhận hàng
                  </button>
                  <button
                      class="primary pingjiaBgc"
                      style="background-color: deepskyblue;"
                      v-if="item.status === 3"
                      @click="handleShowComment(item)"
                  >
                  Để đánh giá
                  </button>
                  <button class="outline" @click="handleCancelOrder(item.id)" v-show="item.status === 0">
                    Hủy bỏ
                  </button>
                  <button class="primary" @click="handlePayment(item)" v-show="item.status === 0">
                    Trả
                  </button>
                </div>
              </div>
            </div>
            <div class="panel-item__ft">
              <div
                  class="detail-hd"
                  v-show="!item.isOpen"
                  @click="xaingqingClick(item)"
              >
                <span class="label">Địa chỉ giao hàng：{{ (item.province + item.city + item.county + item.address) || '' }}</span>
                <span class="value">Chi tiết</span>
                <i class="cubeic-select"></i>
              </div>
              <div class="detail-bd" v-show="item.isOpen">
                <div class="detail__item">
                  <span class="detail__label">Người nhận</span>：
                  <span class="detail__value">{{ item.s_username }}</span>
                </div>
                <div class="detail__item">
                  <span class="detail__label">Số liên lạc</span>：
                  <span class="detail__value">{{ item.s_phone }}</span>
                </div>
                <div class="detail__item">
                  <span class="detail__label">Địa chỉ giao hàng</span>：
                  <span class="detail__value">{{ (item.province + item.city + item.county + item.address) || '' }}</span>
                </div>
                <div class="detail__item">
                  <span class="detail__label">Thời gian phục vụ</span>：
                  <span class="detail__value">{{ item.create_time }}</span>
                </div>
                <div class="detail__item">
                  <span class="detail__label">Số lượng</span>：
                  <span class="detail__value">{{ item.guige }}</span>
                </div>
                <div class="detail__close" @click="shouqiClick(item)">
                  <span>Cất đi</span>
                  <i class="cubeic-select"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </mescroll-vue>
    </div>
    <!-- 评价 -->
    <zui-popup
      :visible.sync="isPopup"
      position="center"
      @closed="onCommentClosed"
    >
      <div class="dialog-container">
        <div class="o-dialog__header">
          <span>Đánh giá đơn hàng</span>
          <span @click="isPopup = false">Hủy bỏ</span>
        </div>
        <div class="o-dialog__order" v-if="commentOrder.goods">
          <img :src="commentOrder.goods.thumb | imgPath" />
          <p class="ellipsis">{{ commentOrder.goods.goods_name }}</p>
          <p>Số lượng：{{ commentOrder.number }}</p>
        </div>
        <div class="o-dialog__comment border-1px--top-bottom">
          <cube-textarea
            v-model="commentValue"
            :maxlength="120"
            indicator="indicator"
            placeholder="Vui lòng nhập nhận xét"
          ></cube-textarea>
        </div>
        <div class="o-dialog__submit" @click="handleSubmitCommnet">Đánh giá</div>
      </div>
    </zui-popup>
  </div>
</template>
<script src="./my-order.js"></script>
<style lang="stylus" scoped src="./my-order.styl"></style>
