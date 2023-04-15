<template>
  <zui-view>
    <div class="flex-column default-bg">
      <div class="flex-scroll" ref="scrollWrapper">
        <Header :title="headerTitle"></Header>
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
              <div class="cell-box layer">
                <div class="cell">
                  <div class="label">phương thức thanh toán</div>
                  <div class="value" @click="showPaymentPicker">
                    {{ paymentPicker.content }}
                  </div>
                  <i class="cubeic-arrow"></i>
                </div>
              </div>
            </template>
          </div>
        </cube-scroll>
      </div>
      <div class="footer-bar" :class="{ hidden: visibleFooterBar }">
        <div class="total">
          <span class="money-code-new">{{ tour.price }} <span class="money-code"></span></span>
        </div>
        <cube-button inline @click="handleSubmit" class="cube-button"
          >xác nhận thanh toán</cube-button
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
<script src="./pay.js"></script>
<style lang="stylus" scoped src="./pay.styl"></style>
