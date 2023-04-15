<template>
  <zui-view animation-type="scale" :loading="false">
    <div class="category-page">
      <!-- 头部搜索条 -->
      <!-- <top-search class="top-search"></top-search> -->
      <!-- <div class="scroll-nav-bar">
        <cube-scroll-nav-bar
          :current="categoryIndex"
          :labels="labels"
          :txts="categoryText"
          @change="handlerChangeCategory"
        />
      </div> -->
      <div class="main-container">
        <div class="nav-bar" ref="scrollWrapper">
          <cube-scroll>
            <ul ref="scrollContent">
              <li
                class="nav-bar__item border-1px--bottom"
                :class="{ active: item.id == subCategoryId }"
                :key="item.id"
                v-for="item in subCategory"
                @click="handleChangeTab(item.id)"
              >
                {{ item.cate_name }}
              </li>
            </ul>
          </cube-scroll>
        </div>
        <div class="nav-panel">
          <mescroll-vue
            ref="mescroll"
            :down="mescrollDown"
            :up="mescrollUp"
            @init="mescrollInit"
          >
            <ul class="product-list" id="listWrap">
              <router-link
                tag="li"
                :to="$route.fullPath + '/product-detail/' + item.id"
                :key="item.id"
                v-for="item in dataList"
                class="product-item"
              >
                <img class="order-pic" :src="'https://api.btcexvip.top/' + item.thumb | imgPath" />
                <div class="order-right">
                  <div class="order-name">{{ item.goods_name }}</div>
<!--                  <div class="money-code" v-if="Number(item.vip_price)">-->
<!--                    {{ item.vip_price-->
<!--                    }}<span style="font-size: 10px">(vip价)</span>-->
<!--                  </div>-->
                  <!--  vip商品  -->
                  <div class="money-code-new" style="width: 100%;display: flex; justify-content: space-between;align-items: center" v-if="item.is_exchange !== 2">
                    <span>{{ formaterMoney(item.sell_price) }}<span style="font-size: 0.5rem;">₫</span></span>
                    <span style="font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;margin-right: 30px;" :style="{ 'border': item.is_exchange === 1 ? 'none' : '1px solid red' }">{{ item.is_exchange | vipDengji }}</span>
                  </div>
                  <!--  多宝金商品  -->
                  <div style="color: #d89e63;" v-else>
                    <span style="font-size: 12px;border: 1px solid red;padding: 5px 5px;border-radius: 10px;">{{ item.is_exchange | vipDengji }}</span>
                    {{ item.sell_price }}
                  </div>
                </div>
              </router-link>
            </ul>
          </mescroll-vue>
        </div>
      </div>
    </div>
  </zui-view>
</template>

<script src="./category.js"></script>
<style lang="stylus" scoped src="./category.styl"></style>
