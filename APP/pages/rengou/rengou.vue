<template>
  <view class="rengou">
    <airel-floatball  />
    <!-- 商品详情图片 -->
    <image class="detailsImg" :src="head_img" mode=""></image>
    <view class="project-title">
      项目名称
    </view>
    <!-- 内容选择 -->
    <view class="check-box">
      <view class="check-num">
        <view class="check-title">
          数量：
        </view>
        <u-number-box 
            v-model="value"
            integer
            :min="1"
        ></u-number-box>
      </view>
      <view class="check-day">
        <text class="check-title">选择天数：</text>
        <text class="check-title">请选择</text>
      </view>
      <!-- 因为现在距离够了，不用收起列表，所以常态展开 -->
      <view class="list-item" v-for="(item,index) in dayID" :key="index" @tap="checkItem(index)" :class="{'checked-list':checked==index}">
        <view class="item-text">
          项目名称：{{item.goods_name}}
        </view>
        <view class="item-text">
          项目对应天数：{{item.project_day}}天
        </view>
        <view class="item-text">
          项目收益：￥{{item.income}}
        </view>
        <view class="item-text">
          项目总收益：￥{{item.total_red_money}}
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
        去支付
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
        dayID: [],
        zhifuMoney: 0, //需要支付的金额 个数*天数
        checked: -1, //默认选择0
        defaultImg,
        checkedImg,
        head_img: '',
        gid: '',
        mid: '',  //价格的下标
        chushiJine: 0  //记录金额
      };
    },
    onLoad(option) {
      let obj = JSON.parse(option.obj)
      console.log(obj,'父级传值');
      this.head_img = obj.headImg
      this.gid = obj.gid
      this.mid = obj.mid
      this.zhifuMoney = obj.money
      this.chushiJine = obj.money
      let goods_day={
      	'gid':this.gid,
        'mid': this.mid
      }
      this.$fn.request('goods/goods_day', 'GET',goods_day).then(res => {
      	// console.log(res,'产品天数接口')
      	this.dayID=res.data.data.data
      	console.log(this.dayID,'产品天数接口')
      })
    },
    watch: {
      value: {
        handler(newVal) {
          console.log(newVal);
          this.zhifuMoney = this.payMoney(this.chushiJine*newVal)
        },
      }
    },
    mounted() {
      
    },
    methods: {
      go() {
        if(this.checked == -1) {
          uni.showToast({
            title:'请选择天数',
            icon:'error'
          })
          return
        }
        let obj = {
          gid: this.gid, //货物id
          num: this.value, //购买数量
          did: this.dayID[this.checked].id, //天数id
          cid: '0', //优惠券id
          money: this.zhifuMoney,
          mid: this.mid
        }
        let strObj = JSON.stringify(obj)
        uni.navigateTo({
          url:`/pages/fukuan/fukuan?obj=${strObj}`
        })
      },
      checkItem(index) {
        this.checked = index;
        // this.zhifuMoney = this.payMoney(this.dayID[this.checked].withdrawable_money)
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
      height: 240rpx;
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
