<template>
	<view class="myShop-page">
    <backgroundPage :title="title">
      <view class="box">
        <view class="change-address"  @tap="go">
          <view class="add-box">
            <image src="../../static/common/addition.png" mode=""></image>
          </view>
          <view class="add-txt">
            新增或选择收货地址
          </view>
        </view>
        <view class="shop" v-for="item in list" >
          <view class="image-box">
            <image @tap="show=true" :src="item.head_img==''? defaultImg: item.head_img" mode=""></image>
            <!-- :src="item.head_img" -->
          </view>
          <!-- 商品信息 -->
          <view class="msg-connect">
            <view class="msg-no">
              {{item.wares_no}}
            </view>
            <view class="msg-address">
              {{item.address}}
            </view>
          </view>
          <!-- 金额以及下单状态 -->
          <view class="money-status">
            <view class="shop-money">
              {{item.wares_money}}
            </view>
            <view class="shop-status">
              {{item.status_text}}
            </view>
          </view>
          
          <!-- <view class="font">
            <view class="info"></view>
            <view class="info youbian"></view>
          </view>
          <view class="de"></view> -->
          
          
        </view>
      
      </view>
    </backgroundPage>
	</view>
</template>

<script>
  import backgroundPage from "../../components/background-page/background.vue";
  import defaultImg from "../../static/common/jinrong.jpg";
	export default {
    components: {backgroundPage},
		data() {
			return {
				list:[],
        title:'',
        info: {},
        defaultImg,
			};
		},
		onLoad() {
      this.info=uni.getStorageSync('user_info')
      console.log(this.info,'this.info');
      this.title = `<view class="wdtjm">我的积分</view><br />
          <view class="numberCode">${this.info.money_integral}</view>`
			let data={
				
			}
			this.$fn.request('wares/my','GET',data).then(res=>{
				console.log(res.data.data.data)
				this.list=res.data.data.data
			})
		},
    methods: {
      go() {
        uni.navigateTo({
          url:`/pages/address/address`
        })
      }
    }
	}
</script>

<style lang="less" src='./myShop.less'>

</style>
