<template>
  <view class="fukuan">
    <airel-floatball  />
    <!-- 付款 -->
    <view class="header">
      <view class="head-money">
        ￥{{dataObj.money}}
      </view>
      <view class="head-ps">
        待支付金额
      </view>
    </view>
    <view class="fangshi">
      <view class="fangshi-title">
        支付方式
      </view>
      <view class="yu_e" @tap="payCheck(1)" style="border-bottom: 1rpx solid #E5E5E5;">
        <image class="zhifuImg" src="../../static/common/yu_e.png" mode=""></image>
        <view class="zhifuName">
          余额支付
        </view>
        <view class="littleImg">
          <image :src="checkedNum==1?checkedImg:defaultImg" mode=""></image>
        </view>
      </view>
      <view class="weixin" style="border-bottom: 1rpx solid #E5E5E5;" @tap="payCheck(2)">
        <image class="zhifuImg" src="../../static/common/weixin.png" mode=""></image>
        <view class="zhifuName">
          微信支付
        </view>
        <view class="littleImg">
          <image :src="checkedNum==2?checkedImg:defaultImg" mode=""></image>
        </view>
      </view>
      <view class="yu_e" @tap="payCheck(3)">
        <image class="zhifuImg" src="../../static/common/card.png" mode=""></image>
        <view class="zhifuName">
          银行卡支付
        </view>
        <view class="littleImg">
          <image :src="checkedNum==3?checkedImg:defaultImg" mode=""></image>
        </view>
      </view>
    </view>
    <view class="bottom-fixd">
      <view class="bot-btn" @tap="pay">
        确认支付
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
        dataStr: '',
        dataObj: {},
        defaultImg,
        checkedImg,
        checkedNum: 0 ,//选中
        mid: '',
        backpageId: ''  //支付完成后返回到的页面
      };
    },
    onLoad(option) {
      this.backpageId = this.$store.state.scrollIndex
      this.dataStr = option.obj
      console.log(this.dataStr);
      this.getPayList()
    },
    mounted() {
      this.dataObj = JSON.parse(this.dataStr)
      console.log(this.dataObj);
    },
    methods: {
      // 获取支付方式列表
      getPayList() {
        this.$fn.request('pay/list', 'GET',{}).then(res => {
        	console.log(res,'支付列表')
        })
      },
      payCheck(num) {
        this.checkedNum = num
      },
      pay() {
        // 选择支付方式提示
        if(this.checkedNum == 0) {
          uni.showToast({
            title:'请选择支付方式',
            icon:'error'
          })
          return
        }
        this.dataObj.pid = this.checkedNum
        this.$fn.request('/pay/order', 'POST',this.dataObj).then(res => {
        	if(res.data.code == 1){
        		uni.showToast({
        			title:'购买成功',
        			duration:1000,
        			icon:"success"
        		})
            setTimeout(()=> {
              uni.navigateTo({
                url:`/pages/invest/invest?id=${this.backpageId}`
              },2000)
            })
        	}else{
        		uni.showToast({
        			title:res.data.msg,
        			duration:1000,
        			icon:"error"
        		})
        	}
        }) 
      }
    }
  }
</script>

<style lang="less">
.fukuan {
  width: 100%;
  .header {
    width: 100%;
    // height: 402rpx;
    .head-money {
      width: 100%;
      margin-top: 160rpx;
      text-align: center;
      font-size: 64rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #272727;
      line-height: 90rpx;
    }
    .head-ps {
      width: 100%;
      text-align: center;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #505050;
      line-height: 40rpx;
    }
  }
  .fangshi {
    width: 702rpx;
    height: 404rpx;
    margin: 112rpx auto;
    background: #FFFFFF;
    border-radius: 16rpx;
    box-sizing: border-box;
    padding: 24rpx 32rpx;
    .fangshi-title {
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 550;
      color: #272727;
    }
    .weixin,.yu_e {
      width: 100%;
      height: 112rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .zhifuImg {
        width: 36rpx;
        height: 36rpx;
        margin-right: 18rpx;
      }
      .zhifuName {
        flex: 1;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
      .littleImg {
        width: 32rpx;
        height: 32rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bottom-fixd {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 180rpx;
    background: #FFFFFF;
    .bot-btn {
      width: 686rpx;
      height: 80rpx;
      background: #FF7700 linear-gradient(90deg, #FE6700 0%, #FE3E2E 100%);
      border-radius: 40rpx;
      margin: 16rpx auto 0;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 550;
      color: #FFFFFF;
      line-height: 80rpx;
      text-align: center;
    }
  }
}
</style>
