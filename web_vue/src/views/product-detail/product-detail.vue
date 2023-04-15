<template>
  <zui-view animation-type="scale" :loading="false">
    <div class="product-detail-page" v-show="true">
      <div class="main-content mescroll-touch" ref="scroll">
        <van-icon
          name="arrow-left"
          class="arrow-left"
          @click="$router.go(-1)"
        />

        <!-- 轮播图 -->
		
        <zui-slide
          :data="product.imglistall"
          style="height: 360px;"
        ></zui-slide>
        <!-- <img class="product-banner" :src="product.big_thumb" /> -->
        <div class="product-name">{{ product.goods_name }}</div>
        <div class="product-row product-price">
          <span class="money-codes" v-if="tip == 4"
            > {{ formaterMoney(product.pf_price) }}₫</span
          >
          <span style="color: #D89E63;font-weight: 700;font-size: 0px;" v-else-if="product.is_exchange == 2"
            >{{ formaterMoney(product.sell_price) }}Duobao vàng</span
          >
          <span class="money-codes" v-else>
             {{ formaterMoney(product.sell_price) }}₫
            <span style="font-size: 0px;color: red;" v-if="product.is_exchange >= 3">（vip{{ product.is_exchange | vipDengji }}）</span>
          </span>
<!--          <span class="money-codes" v-if="tip == 1 && Number(product.vip_price)"-->
<!--            ><span style="font-size:0px">₫</span>{{ product.vip_price-->
<!--            }}<span style="font-size: 0px">(vip价)</span></span-->
<!--          >-->
          <span class="sold-out">Đã bán {{ product.sold_number }}</span>
        </div>
        <!--        <div class="member" v-if="product.is_vip && (Number(product.vip_sell_price))"><span class="member-one">会员</span><span class="member-title">一级经销商</span>可享受<span class="member-price"> ₫ {{ product.vip_sell_price }} </span>的价格</div>&ndash;&gt;-->
        <!--        <div class="space-box">-->
        <!--          <div-->
        <!--            @click="handleShowSpec('spec')"-->
        <!--            class="product-row product-spec border-0px&#45;&#45;bottom"-->
        <!--          >-->
        <!--            <span class="label">规格</span>-->
        <!--            <i class="iconfont iconxiaojiantou"></i>-->
        <!--          </div>-->
        <!--        </div>-->

        <!-- tab -->
        <!--        <cube-tab-bar-->
        <!--          show-slider-->
        <!--          class="cube-tab-bar__custom border-0px&#45;&#45;bottom"-->
        <!--          v-model="tabIndex"-->
        <!--        >-->
        <!--          <cube-tab-->
        <!--            v-for="(item, index) in tabData"-->
        <!--            :label="index"-->
        <!--            :key="index"-->
        <!--            >{{ item }}</cube-tab-->
        <!--          >-->
        <!--        </cube-tab-bar>-->
        <div class="cube-tab-bar-list">
          <div class="cube-tab-item" @click="tabIndex = 0" style="min-width: 100px;min-height: 30px">
            <span style="margin-right:88px; display: inline-block; background-color: red; color: aliceblue;min-width: 72px;min-height: 30px; line-height: 30px;" v-if="tabIndex === 0">Chi tiết Details</span>
            <span style="margin-right:88px; display: inline-block; min-width: 100px;min-height: 30px; line-height: 30px;" v-else>Chi tiết Details</span>
            <!-- <img
              src="../../assets/images/details_active.png"
              v-if="tabIndex === 0"
            />
            <img src="../../assets/images/details.png" v-else /> -->
          </div>
          <div class="cube-tab-item comment-icon" @click="tabIndex = 1" style="min-width: 72px;">
            <!-- <img src="../../assets/images/comment.png" v-if="tabIndex === 0" />
            <img src="../../assets/images/comment_active.png" v-else /> -->
            <span style=" display: inline-block; background-color: red; color: aliceblue;min-width: 144px;min-height: 30px; line-height: 30px;" v-if="tabIndex === 1">Bình luận COMMENT</span>
            <span style=" display: inline-block; min-width: 144px;min-height: 30px; line-height: 30px;" v-else>Bình luận COMMENT</span>
          </div>
        </div>
        <!-- 详情 -->
        <div
          class="product-info"
          v-show="tabIndex == 0"
          v-html="product.desc"
        ></div>
        <!-- 评论 -->
        <div v-show="tabIndex == 1">
          <div v-if="comments.length > 0">
            <ul class="conment-list">
              <template>
                <li
                  class="comment-item border-0px--bottom"
                  v-for="item in comments"
                  :key="item.id"
                >
				
				<!-- 问题在这里 -->
                 <div class="comment-user" v-if=''>
                   <img
                      v-if="item.user.head_img"
                      class="user-avatar"
                      :src="item.user.head_img | imgPath"
                    />
					
                    <img
                      v-else
                      class="user-avatar"
                      :src="item.user.headimgurl"
                    />
                    <div class="user-right">
                      <div class="name">{{ item.user.nickname }}</div>
                      <div class="time">{{ item.create_time }}</div>
                    </div>
                  </div> -->
				<!-- 
				  <!-- 问题结束 -->
                  <p class="comment-content">{{ item.content }}</p>

                  <div class="comment-img-list" v-if="item.img.length">
                    <div
                      class="img-item"
                      v-for="(v, idx) in item.img"
                      :key="idx"
                    >
                      <img :src="v.thumb | imgPath" />
                    </div>
                  </div>
                </li>
              </template>
            </ul>
            <load-more ref="loadMore" :is-more="isMore"></load-more>
          </div>
          <div v-else class="no-comment">miễn bình luận</div>
        </div>
      </div>
      <div class="footer-bar" :class="{ hidden: visiblePopup }">
        <div class="footer-bar-item" @click="$router.push('/home')">
          <div class="iconfont iconhuidaoshouye" style="font-size: 0px"></div>
          <div class="footer-bar-title">Trang đầu</div>
        </div>
        <div class="footer-bar-item" @click="service">
          <div class="iconfont iconkefukefu" style="font-size: 0px"></div>
          <div class="footer-bar-title">Dịch vụ khách hàng</div>
        </div>

        <!--这个是可以加入购物车的   v-if="product.plate_id > 0"    v-else-->
        <div class="button-lists">
          <div class="button" @click="handleShowSpec('cart')">
            <div class="iconfont iconjiarugouwuche"></div>
            <div class="button-title">Thêm vào giỏ hàng</div>
          </div>
          <div class="button" @click="handleShowSpec('buy')">
            <div class="iconfont iconzhijiegoumai"></div>
            <div class="button-title">Mua trực tiếp</div>
          </div>
        </div>
        <!--这个是没有购物车，直接购买的   秒杀-->
<!--        <div class="buy-btn" @click="handleShowSpec('buy')">-->
<!--          <h2>{{ product.plate_id }}</h2>-->
<!--          <div class="iconfont iconzhijiegoumai"></div>-->
<!--          <div class="button-title">-->
<!--            {{ tip == 2 ? '立即兑购' : '直接购买' }}-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <!-- 购物车图标 -->
      <shop-cart-icon ref="cartIcon" :is-active="cartActive"></shop-cart-icon>
      <!-- 分享 -->
      <!--      <div-->
      <!--        class="share-dialog"-->
      <!--        v-show="visibleShare"-->
      <!--        @click="visibleShare = false"-->
      <!--      >-->
      <!--        <img :src="product.big_thumb" />-->
      <!--        <p>点击右上角分享</p>-->
      <!--      </div>-->
      <!-- 规格弹层 -->
      <zui-popup :visible.sync="visiblePopup" position="bottom">
        <div class="popup-body">
          <div class="popup-product">
            <div class="product-cover">
              <img :src="selectedImg" />
              <div class="select-goods" ref="selectGoods">
                <img class="inner" ref="inner" :src="selectedImg" />
              </div>
            </div>
            <div class="product-right">
              <div>
                <!--  多多宝金商品显示规格价格  -->
                <p style="color: #d89e63;font-size: 0px;font-weight: 700;" v-if="product.is_exchange === 2">
                  {{ product.sell_price }}<span style="font-size: 0px;margin-right: 0px;"></span>Duobao vàng
                </p>
                <p class="money-code-new" v-else>
                  {{ product.sell_price }}<span class="money-code" style="font-size: 0px"></span>
                </p>
              </div>

              <!--              <p class="money-code" v-if="tip == 4">{{ Number(product.pf_price)}}</p>-->
              <!--              <p class="money-code" v-else-if="tip == 2">{{ Number(product.exchange_score) }}</p>-->
              <!--              <p class="money-code" v-else>{{ product.is_vip && Number(product.vip_sell_price) ? product.vip_sell_price : nowPrice}}</p>-->
              <p class="p-text">Trong kho:{{ stock }}</p>
              <template v-if="isSpec">
                <p
                  class="p-text select"
                  v-if="selectedSpec.length == product.arrt.length"
                >
                  Dã chọn:
                  <template v-for="item in selectedSpec">
                    <span class="select-spec" :key="item.id"
                      >“{{ item.item }}”</span
                    >
                  </template>
                </p>
                <p class="p-text" v-else>
                  Chọn
                  <template v-for="(item, index) in product.arrt">
                    <span
                      class="spec"
                      :key="item.id"
                      v-if="!selectedIndex.includes(index)"
                      >{{ item.name }}</span
                    >
                  </template>
                </p>
              </template>
            </div>
          </div>
          <!-- 规格列表 -->
          <div class="popup-content mescroll-touch">
            <div class="popup-spec" v-if="isSpec">
              <dl v-for="(item, index) in product.arrt" :key="item.id">
                <!-- <dt class="title">{{ item.name }}11</dt> -->
                <dd class="spec-list">
                  <div
                    class="spec-item"
                    checked
                    v-trigger
                    :class="{ active: val.isActive, 'not-click': val.notClick }"
                    :key="val.id"
                    v-for="(val, idx) in item.pid"
                    @click="handleClickSpecItem(index, idx)"
                  >
                  {{ val.item }} 
                  </div>
                </dd>
              </dl>
            </div>
            <div class="popup-number">
              <div class="title">Số lượng</div>
              <number-control
                :count="quantity"
                @plus="onPlus"
                @minus="--quantity"
              ></number-control>
            </div>
          </div>
        </div>
        <div class="popup-footer footer-btn">
          <cube-button @click="handleSubmit" inline class="cube-button"
            >Xác nhận</cube-button
          >
        </div>
      </zui-popup>
    </div>
  </zui-view>
</template>
<script src="./product-detail.js">


</script>
<!-- <script src="../../mixins/SKUMixin.js"></script> -->
<style lang="stylus" scoped src="./product-detail.styl"></style>
