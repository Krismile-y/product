<template>
  <zui-view>
    <div class="flex-column default-bg">
      <div class="flex-scroll" ref="scrollWrapper">
        <Header :title="headerTitle" :fanhuiFlag="true"></Header>
        <cube-scroll>
          <div class="scroll-content" ref="scrollContent">
            <div class="user-box layer">
              <!-- 地址 -->
              <div
                class="user-container"
                v-if="address.id"
                @click="visibleAddress = true"
              >
                <div class="user-info">
                  <div class="name">{{ address.username }}</div>
                  <div class="phone">{{ address.phone }}</div>
                </div>
                <div class="user-address">
                  {{ address.province }} {{ address.city }} {{ address.county }}
                  {{ address.address }}
                </div>
              </div>

              <div class="add-address" v-else @click="handleJump">
                <i class="cubeic-add"></i>
                <span>Địa chỉ giao hàng mới</span>
              </div>

              <i class="cubeic-arrow"></i>
            </div>
            <template>
              <!-- 其他地方进入 -->
              <!-- 商品 -->
              <div class="goods-box layer">
                <div class="title border-1px--bottom">
                  <div>Tên sản phẩm</div>
                  <div>Số lượng</div>
                  <div v-if="tip == 2">Dubao</div>
                  <div v-else>Phụ thu</div>
                </div>
                <ul class="goods-list">
                  <li
                    class="goods-item"
                    :key="index"
                    v-for="(item,index) in productList"
                  >
                    <div class="name">{{ item.goods_name }}</div>
                    <div class="number">x{{ item.number }}</div>
                    <div class="price" v-if="!duobaoPayFlag">
<!--                      ₫{{-->
<!--                        tip == 2-->
<!--                          ? Number(item.exchange_score) * Number(item.number)-->
<!--                          : tip == 4-->
<!--                          ? item.pf_price-->
<!--                          : item.nowPrice-->
<!--                          ? item.nowPrice-->
<!--                          : item.price-->
<!--                      }}-->
                      {{ item.pf_price ? item.pf_price : item.total_price }}₫
                    </div>
                    <div class="price" v-else>
                      <!--                      ₫{{-->
                      <!--                        tip == 2-->
                      <!--                          ? Number(item.exchange_score) * Number(item.number)-->
                      <!--                          : tip == 4-->
                      <!--                          ? item.pf_price-->
                      <!--                          : item.nowPrice-->
                      <!--                          ? item.nowPrice-->
                      <!--                          : item.price-->
                      <!--                      }}-->
                      {{ item.total_price ? parseInt(item.total_price) : parseInt(item.price) }}Duobao vàng
                    </div>
                  </li>
                </ul>
              </div>
              <div class="cell-box layer">
<!--                <div class="cell border-1px&#45;&#45;bottom">-->
<!--                  <div class="label">运费</div>-->
<!--                  <div class="value" v-if="tip == 2">₫{{ postage_money }}</div>-->
<!--                  <div class="value" v-else>₫{{ postage_money }}</div>-->
<!--                </div>-->

                <div class="cell">
                  <div class="label">Phương thức thanh toán</div>
                  <div class="value" @click="showPaymentPicker">
                    {{ paymentPicker.content }}
                  </div>
                  <i class="cubeic-arrow"></i>
                </div>

                <van-radio-group v-model="radio" v-if="tip == 4">
                  <van-cell-group>
                    <van-cell title="lô hàng" clickable @click="jiShouF(1, '1')">
                      <template #right-icon>
                        <van-radio name="1" />
                      </template>
                    </van-cell>
                    <!-- <van-cell title="邮寄" clickable @click="jiShouF(2,'2')">
                                            <template #right-icon>
                                                <van-radio name="2"/>
                                            </template>
                                        </van-cell> -->
                  </van-cell-group>
                </van-radio-group>
              </div>

<!--              <div class="cell-box layer" v-if="tip == 5">-->
<!--                <div class="cell">-->
<!--                  <div class="label">邮寄方式</div>-->
<!--                  <div class="value" @click="showPaymentPicker"></div>-->
<!--                  <i class="cubeic-arrow"></i>-->
<!--                </div>-->

<!--                <van-radio-group v-model="is_mail">-->
<!--                  <van-cell-group>-->
<!--                    <van-cell title="邮寄" clickable @click="isMail(1, '1')">-->
<!--                      <template #right-icon>-->
<!--                        <van-radio name="1" />-->
<!--                      </template>-->
<!--                    </van-cell>-->
<!--                    <van-cell-->
<!--                      title="到店自提"-->
<!--                      clickable-->
<!--                      @click="isMail(2, '2')"-->
<!--                    >-->
<!--                      <template #right-icon>-->
<!--                        <van-radio name="2" />-->
<!--                      </template>-->
<!--                    </van-cell>-->
<!--                  </van-cell-group>-->
<!--                </van-radio-group>-->
<!--              </div>-->
            </template>
          </div>
        </cube-scroll>
      </div>
      <div class="jishouAgree" v-if="checkAgree == true" @click="closeAgree">
        <div
          class="jishouAgreeContent"
          v-html="jishouAgreeMent"
          v-if="tip == 4"
        ></div>
        <div
          class="jishouAgreeContent"
          v-html="mendianAgreeMent"
          v-if="tip == 3"
        ></div>
      </div>
<!--      <div>-->
<!--        <div class="agree" v-if="jishou == 1 && tip == 4">-->
<!--          <div class="left">-->
<!--            <van-checkbox-->
<!--              v-model="isAgree"-->
<!--              ref="checkboxes"-->
<!--              @click="isAgreeF"-->
<!--            />-->
<!--            <span style="margin-left:1%;width:100%"-->
<!--              >同意-->
<!--              <span style="margin-left:2%">-->
<!--                <span-->
<!--                  >华腾云品-->
<!--                  <span @click="checkAgreeF">《门店寄售协议》</span></span-->
<!--                ></span-->
<!--              ></span-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="agree" v-if="tip == 3">-->
<!--          <div class="left">-->
<!--            <van-checkbox v-model="isShop" ref="checkboxes" @click="isShopF" />-->
<!--            <span style="margin-left:1%;width:100%"-->
<!--              >同意-->
<!--              <span style="margin-left:2%">-->
<!--                <span-->
<!--                  >华腾云品-->
<!--                  <span @click="checkAgreeF">《云店入驻协议》</span></span-->
<!--                ></span-->
<!--              ></span-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="footer-bar" :class="{ hidden: visibleFooterBar }">
        <div class="total">
          <span>Tổng cộng:</span>
          <span style="font-size: 16px;" v-if="duobaoPayFlag">{{ parseInt(totalMoney) }}Duobao vàng</span>
          <span class="money-code-new" v-else>{{ totalMoney }} <span class="money-code"></span></span>
        </div>
        <cube-button inline @click="cancelSubmit">Hủy thanh toán</cube-button>
        <cube-button inline @click="handleSubmit" class="cube-button"
          >Xác nhận thanh toán</cube-button
        >
      </div>
    </div>
    <!-- 地址选择 -->
    <address-list
      :data="addressList"
      :visible.sync="visibleAddress"
      @change="onChangeAddress"
      @close="onClose"
    ></address-list>
  </zui-view>
</template>
<script src="./place-order.js"></script>
<style lang="stylus" scoped src="./place-order.styl"></style>
