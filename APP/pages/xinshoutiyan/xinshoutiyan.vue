<template>
	<view class="content" style="min-height: 120vh; padding-bottom: 100upx;">
       <!-- 客服 -->
				<view class="">
				  <airel-floatball  />
				</view>
				<!-- 单个产品 -->
				<view class="items" v-for="(item,index) in goods_list">
					<image :src="item.head_img"></image>
					<view class="tit">{{item.goods_name}}</view>
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
  onLoad() {
    this.pankong()
  },
  methods: {
    pankong() {
      if(this.goods_list.length == 0) {
        this.kong = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .items{
  	width: 702rpx;
    height: 520rpx;
  	margin: 0 auto;
  	padding-bottom: 10upx;
  	margin-bottom: 20upx;
    background: #FFFFFF;
    border-radius: 16rpx;
    overflow: hidden;
  	image{
  		width: 100%;
  		height: 339rpx;
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