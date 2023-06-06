<template>
	<view class="content" style="min-height: 120vh; padding-bottom: 100upx;">
       <!-- 客服 -->
				<view class="">
				  <airel-floatball  />
				</view>
				<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
				<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
				<!-- 单个产品 -->
				<view class="items" v-for="(item,index) in goods_list">
          <view class="img-box">
            <image :src="item.head_img" mode="widthFix"></image>
          </view>
					<view style="display: flex;justify-content: space-between;padding-right: 12rpx;">
            <view class="tit">{{item.goods_name}}</view>
            <view class="tit" style="color: red;">
             限购1次
            </view>
					</view>
          <view class="touzimin">最低投资：</view>
					<view class="buy">
            <view class="left">￥{{item.goods_money}}</view>
						<view class="right" @tap="go(item.id)">
              认购
							<!-- <view class="pay dis" @tap="go(item.id)">认购</view> -->
						</view>
					</view>
				</view>
			<u-empty text="此分类暂时没有数据" mode="order" v-show="kong"></u-empty>
	</view>
</template>

<script>
export default {
  data() {
    return {
      goods_list: [],
      kong: false,
    };
  },
  onBackPress(e) {  
  // 这里可以自定义返回逻辑，比如下面跳转其他页面
    
  	uni.navigateTo({
  		url: '/pages/index/index'
  	});
  	// return true 表示禁止默认返回
  	return true
  }, 
  onLoad() {
    this.getList()
  },
  methods: {
    // 获取产品列表
    getList() {
      let params = {}
      this.$fn.request('goods/experience_list', 'GET',params).then(res => {
      	console.log(res,'新手体验')
      	if (res.data.code == 1) {
          // 请求成功
          this.goods_list = res.data.data.data
          this.pankong()
        }
      })
    },
    pankong() {
      if(this.goods_list.length == 0) {
        this.kong = true
      }
    },
    // 跳转商品详情
    go(id) {
      this.$store.state.scrollIndex = 'xinshou'
      uni.navigateTo({
      	url: `/pages/projectDetails/projectDetails?id=${id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .items{
  	width: 702rpx;
    // height: 520rpx;
  	margin: 0 auto;
  	padding-bottom: 10upx;
  	margin-bottom: 20upx;
    background: #FFFFFF;
    border-radius: 16rpx;
    overflow: hidden;
    .img-box {
      width: 100%;
      image{
      	width: 100%;
      }
    }
  	
  	.tit{
  		font-size: 28rpx;
  		font-family: PingFangSC-Regular, PingFang SC;
  		font-weight: 400;
  		color: #272727;
      text-indent: 16rpx;
      margin: 16rpx 0 10rpx;
  	}
    .touzimin {
      text-indent: 16rpx;
      font-size: 20rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #585858;
    }
  	.buy{
  		display: flex;
  		width: 100%;
  		height: 60upx;
  		font-size: 30upx;
  		box-sizing: border-box;
      padding: 0 12rpx 0 16rpx;
      justify-content: space-between;
  		.left{
  			font-size: 32rpx;
  			font-family: PingFangSC-Medium, PingFang SC;
  			font-weight: 500;
  			color: #FF5A00;
  		}
  		.right{
  			width: 100rpx;
  			height: 44rpx;
  			background: linear-gradient(90deg, #FF791C 0%, #FE3E2E 100%);
  			border-radius: 8rpx;
        color: #fff;
        text-align: center;
        line-height: 44rpx;
  		}
  	}
  }
</style>