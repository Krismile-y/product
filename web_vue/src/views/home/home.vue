<template>
  <zui-view animation-type="scale" :loading="false">
    <div class="home-page default-bg" id="homePage">
      <!-- 头部搜索条 -->
      <router-link tag="div" to="/search" class="top-serarch">
        <div class="search-content">
          <span>Tìm kiếm sản phẩm bạn muốn</span>
          <i class="iconsuosou1-copy iconfont"></i>
        </div>
      </router-link>
      <div class="flex-scroll" id="homeToTopWrap">
        <mescroll-vue
          ref="mescroll"
          :down="mescrollDown"
          :up="mescrollUp"
          @init="mescrollInit"
        >
          <!-- 轮播图 -->
          <zui-slide
            :data="bannerList"
            style="height: 180px; margin: 0 10px;"
            class="banner"
          ></zui-slide>

          <!-- 公告 -->
          <div class="inform">
            <NoticeBar
              :text="notice"
              left-icon="volume-o"
              class="notice"
              background="#F7F7F7"
              color="#666666"
            ></NoticeBar>
          </div>
          <!-- 焦点图 -->
          <div class="icon-list">
            <router-link to="/Kefu" class="icon-item">
              <img src="../../assets/images/fuwucenter.png" style="border-radius: 50%;"/>
              <div class="icon-text">Dịch vụ cskh</div>
            </router-link>
            <router-link to="/category" class="icon-item">
              <img src="../../assets/images/wzapp.png" />
              <div class="icon-text">Sản phẩm</div>
            </router-link>
            <router-link :to="'/goods-list/' + TG" class="icon-item">
              <img src="../../assets/images/wytg.png" />
              <div class="icon-text">Vip</div>
            </router-link>
            <!--                        <router-link :to="'/goods-list/' + PF" class="icon-item">-->
            <!--                            <img src="../../assets/images/huo.png">-->
            <!--                            <div class="icon-text">云店批发</div>-->
            <!--                        </router-link>-->
            <!-- <router-link to="" class="icon-item" @click.native="handleClick()">
              <img src="../../assets/images/home1.png" />
              <div class="icon-text">云店批发</div>
            </router-link> -->
            <router-link :to="'/goods-list/' + QB" class="icon-item">
              <img src="../../assets/images/rjxz.png" />
              <div class="icon-text">Giỏ hàng</div>
            </router-link>
          </div>

         <!-- <div class="icon-list" style="padding-top: 0">
            <router-link to="/dicgo" class="icon-item">
              <img src="../../assets/images/wzapp.png" />
              <div class="icon-text">điểm danh</div>
            </router-link>
            <router-link to="/inviteFriends" class="icon-item">
              <img src="../../assets/images/wzapp.png" />
              <div class="icon-text">mời bb</div>
            </router-link>
            <router-link to="/shop" class="icon-item">
              <img src="../../assets/images/gywm.png" />
              <div class="icon-text">pt liên hệ</div>
            </router-link>
            <router-link to="/carryDuiHuan" class="icon-item">
              <img src="../../assets/images/jifenduihuan.png" />
              <div class="icon-text">vấn đề xảy ra</div>
            </router-link>
          </div> -->
          <div class="container">
      <div class="row">
        <div class="scroll_box">
          <ul>
           <router-link
                tag="li" 
                :to="$route.fullPath + '/product-detail/' + item.id"
                :key="item.id"
                v-for="item in hotList.list">
            <img
                :src="'https://api.btcexvip.top/' + item.big_thumb"
              />
              <div class="info">
                <div class="hotFood"><span>Giảm Giá</span></div>
                <p class="foodName"><span>{{item.goods_name}}</span></p>
                <p class="food-price">{{formaterMoney(item.sell_price)}}₫</p>
              </div>
          </router-link>
            
            
          </ul>
        </div>
      </div>
    </div>
          <!-- 商品列表 -->
          <product-list :data-list="goodsList"></product-list>
        </mescroll-vue>
      </div>
    </div>
  </zui-view>
</template>
<script src="./home.js">
</script>
<style lang="stylus" scoped>
.hotFood {
  position absolute
  opacity 0.8
  width 70px
  height 18px
  background-color black
  text-align center
  color #fff
  top -30px
}
.hotFood span{
  line-height 18px
}
.scroll_box {
  /* 不想看到超出盒子范围的图片，因此需要overflow：hidden；进行隐藏 */
  overflow: hidden;
  width: 300px;
  height: 160px;
  margin: 5px auto;
}
.scroll_box ul {
  display: flex;
  width: 960px;
  height: 50px;
  animation: scroll 15s infinite linear;
}
.scroll_box ul li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  list-style: none;
  margin: 0 5px;
  border-radius: 15px;
}
.scroll_box ul li img {
  width: 80px;
  height: 110px;
}
.scroll_box ul li .info {
  align-items: center;
  position: absolute;
  height: 60px;
  width: 80px;
  left: 0px;
  bottom: 15px;
  border-radius: 15px;
  top:105px
}
.scroll_box ul li .info img {
  width: 40px;
  margin: 0 10px;
  border: 1px solid #939292;
}
.scroll_box ul li .info .foodName {
  margin: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.scroll_box ul li .food-price{
  font-size 18px
  color red !important;
}
.scroll_box:hover ul {
  /* 当鼠标放在图片上的时候能够暂停动画 */
  animation-play-state: paused;
}
.scroll_box ul li:hover {
  box-shadow: 0 -1px 10px 0 rgb(0 0 0 / 11%); /* 盒子阴影 */
  cursor: pointer;
} /* 展示作者信息 */
.scroll_box ul li:hover .info {
  display: flex;
} /* 动画 */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-450px);
  }
}
.kefu 
  width 60px
  height 50px
  position fixed
  z-index 999
  top 190px
  right 15px
  color #7e8c8d
.kefu img
  width 80%
  border-radius 50%
.red-packet
    position fixed
    top: 0
    left 0
    background: rgba(0, 0, 0, .4);
    width 100%
    height 100%
    z-index 999
.qrcode-box
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    flex-direction column
    color #fff
.icon-list
    display flex
    align-items center
    justify-content space-around
    flex-wrap: wrap;
    background #ffffff
    padding 12px 0
.icon-item
    display flex
    align-items center
    flex-direction column
.icon-item img
    width 46px
    height 46px
.icon-text
    margin-top 6px
    font-size 12px
.van-icon
    margin-top 20px
    font-size 25px

.red-packet img
    width 200px
    height 200px
    margin-bottom 20px

.home-page
    position relative
    display flex
    flex-direction column
    height 100%
    overflow hidden
    /*background-image url("../../assets/images/banner_bg.png")*/
    /*background-size 100% 365px*/
    & >>>
    .icon-list
        /*padding 6px 0 10px*/

    .icon-item
        padding 5px 0

    .mescroll-totop
        position absolute

.top-serarch
    padding 6px 15px
    background #ffffff
    .search-content
        display flex
        align-items center
        justify-content center
        height 34px
        color #ccc
        border 1px solid #E5E5E5
        border-radius 17px

        .iconfont
            font-size 18px
            margin-left 4PX

        &::after
            border-radius 34px

.slide-wrapper
    height 200px

.notice
    height: 26px
    flex 1
.inform
    display flex
    align-items center
    background #ffffff !important
    padding-top 12px
    .text
        border-right 1px solid #E5E5E5
        padding-right 10px
    .hot, .dot
        font-size 18px
        font-weight 700
    .hot
        color #f3293d
#box
    width 100%
    height 32px
    overflow hidden
    display flex
    align-items center
    padding 0 0 0 10px

ul
    padding 0 0 0 15px

.anim
    transition all 0.5s
    margin-top -50px

#con1 li
    list-style none
    line-height 32px
    height 30px
    text-align center
</style>
