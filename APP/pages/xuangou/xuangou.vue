<template>
  <view class="rengou">
    <airel-floatball  />
    <!-- 商品详情图片 -->
    <image class="detailsImg" :src="head_img" mode=""></image>
    <view class="project-title">
      项目投入金额选择
    </view>
    <!-- 内容选择 -->
    <view class="check-box">
     <!-- <view class="check-num">
        <view class="check-title">
          数量：
        </view>
        <u-number-box 
            v-model="value"
            integer
            :min="1"
        ></u-number-box>
      </view> -->
      <view class="check-day">
        <text class="check-title">选购金额：</text>
        <text class="check-title">请选择</text>
      </view>
      <!-- 因为现在距离够了，不用收起列表，所以常态展开 -->
      <view class="list-item" v-for="(item,index) in moneyData" :key="index" @tap="checkItem(index)" :class="{'checked-list':checked==index}">
        <view class="item-text">
          项目名称：{{goodsName}}
        </view>
        <view class="item-money">
          认购金额：<text>￥{{item.money}}</text>
        </view>
        <view class="img-right">
          <image :src="checked==index? checkedImg: defaultImg" mode=""></image>
        </view>
      </view>
    </view>
    <view class="opcity-bottom">
      
    </view>
    <view class="bottom-fixd" :class="{'fixed': fixedType}">
      <view class="bottom-text">
        <text class="qitou">订单价格：</text>
        <text class="orange">￥{{zhifuMoney}}</text>
        <text class="orange small">.00</text>
      </view>
      <view class="bottom-btn" @tap="go">
        下一步
      </view>
    </view>
  </view>
</template>

<script>
  import defaultImg from "../../static/common/Round shape.png"
  import checkedImg from "../../static/common/icon_Selected2.png"
  export default {
    data() {
      return {
        value: 1,
        fixedType:true,
        moneyData: [],
        zhifuMoney: 0, //需要支付的金额 个数*天数
        checked: 0, //默认选择0
        defaultImg,
        checkedImg,
        head_img: '',
        gid: '',
        goodsName: ''
      };
    },
    onLoad(option) {
      this.head_img = option.img
      this.gid = option.id
      this.goodsName = option.pName
      this.getJiage(this.gid)
    },
    // watch: {
    //   value: {
    //     handler(newVal) {
    //       console.log(newVal);
    //       this.zhifuMoney = this.payMoney(this.dayID[this.checked].withdrawable_money)
    //     },
    //   }
    // },
    mounted() {
      
    },
    methods: {
      // 获取认购价格，用于起投金额
      getJiage(id) {
        let params = {
          gid:id
        }
        this.$fn.request('goods/goods_money', 'GET',params).then(res => {
        	console.log(res,'金额列表')
          if(res.data.code == 1) {
            this.moneyData=res.data.data.data
            this.zhifuMoney = this.payMoney(this.moneyData[0].money) 
          }
        }) 
      },
      go() {
        let obj = {
          gid: this.gid, //货物id
          mid: this.moneyData[this.checked].id, //选择价位的id
          money: this.zhifuMoney, //价位价格
          headImg: this.head_img //商品图片
        }
        let strObj = JSON.stringify(obj)
        uni.navigateTo({
          url:`/pages/rengou/rengou?obj=${strObj}`
        })
      },
      checkItem(index) {
        this.checked = index;
        this.zhifuMoney = this.payMoney(this.moneyData[index].money) 
      },
      payMoney(money) {
        return parseInt(money)
      }
    }
  }
</script>

<style lang="less">
.rengou {
  width: 100%;
  .detailsImg {
    width: 750rpx;
  }
  .project-title {
    width:100%;
    margin: 24rpx 0;
    text-indent: 40rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #272727;
  }
  .check-box {
    width: 702rpx;
    margin: 24rpx auto;
    border-radius: 16rpx;
    overflow: hidden;
    background-color: #fff;
    .check-num,.check-day {
      width: 702rpx;
      height: 103rpx;
      box-sizing: border-box;
      padding: 0 16rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:1upx solid #E5E5E5 ;
      .check-title {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
    }
    .list-item {
      width: 670rpx;
      height: 140rpx;
      background: #F9F9F9;
      border-radius: 8rpx;
      box-sizing: border-box;
      margin: 16rpx auto;
      padding: 16rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 8rpx;
      position: relative;
      .item-text {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #505050;
      }
      .item-money {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #505050;
        text {
          font-size: 38rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 600;
          color: #FF5A00;
        }
      }
      .img-right {
        width: 32rpx;
        height: 32rpx;
        position: absolute;
        top: 16rpx;
        right: 16rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .checked-list {
      background: #F4FFFA;
      border-radius: 8rpx;
      border: 1rpx solid #02AD70;
    }
  }
  .opcity-bottom {
    width: 100vw;
    height: 180rpx;
  }
  .bottom-fixd {
    width: 100vw;
    height: 180rpx;
    background-color: #fff;
    box-sizing: border-box;
    padding: 22rpx 30rpx 0 48rpx;
    position: relative;
    .bottom-text {
      height: 80rpx;
      vertical-align: baseline;
      .qitou {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      .orange {
        font-size: 48rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #FF5A00;
      }
      .small {
        font-size: 24rpx;
        font-weight: 400;
      }
    }
    .bottom-btn {
      width: 240rpx;
      height: 80rpx;
      background: #FF7700 linear-gradient(90deg, #FE6700 0%, #FE3E2E 100%);
      border-radius: 40rpx;
      color: #fff;
      position: absolute;
      top: 16rpx;
      right: 30rpx;
      text-align: center;
      line-height: 80rpx;
    }
  }
  .fixed {
    position: fixed;
    bottom: 0%;
    left: 0%;
  }
  
}
</style>
