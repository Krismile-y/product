<template>
	<view>
		
		
		   <view>
		   	<airel-floatball  />
		   </view>
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   <view class="zongshouyi">
		   	<view class="one disc">
		   		<view style="color: #fff;">共计获得津贴</view>
		   		<view style="font-weight: 600;font-size: 42upx;color: #fff;">{{dataObj.allowance}}</view>
		   	</view>
		   	<view class="two disc">
		   		<view class="t" style="width: 100%;height: 60%;display: flex;">
		   			<view class="twoItem disc">
		   				<view>共计直推人数</view>
		   				<view>{{dataObj.purchased}}</view>
		   			</view>
		   			<view class="twoItem disc">
		   				<view>共计完成任务</view>
		   				<view>{{dataObj.task}}</view>
		   			</view>
		   		</view>
		   	</view>
		   	
		   </view>
		   <!-- 领取时间 -->
		   <view class="linquTime">
		     领取时间：每月**日 00:00:00
		   </view>
		   <view style="margin-top: 30upx;">
		   	<view class="item" v-for="(item,index) in list" :key="index">
		   		<view :class="{
		     'gray': btnType == '2',
		     'btn': btnType == '0',
		     'pink': btnType == '1',
		   }" @tap="linquClick(item)">
		     {{linquSet(item)}}
		   </view>
       <view class="item-bottom">
         <image src="../../static/c/peoples.png" mode="widthFix"></image>
         <view class="zhitui">
           直推{{item.number}}人
         </view>
         <image src="../../static/c/items-money.png" mode="widthFix"></image>
         <view class="zhitui">
           直推{{item.reward}}人
         </view>
       </view>
		   	</view>
		   </view>
	
		
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataObj: {},
        list: [],
        btnType: '0', //0 未达成，1 能领取，2 不能领取(超过要求) 3已领取（当月）
			};
		},
    onLoad() {
      this.getData()
    },
    methods: {
      getData() {
        // 新闻接口
        this.$fn.request('welfare/allowance', "GET", {}).then(res => {
        	if(res.data.code ==1 ) {
            this.dataObj = res.data.data
            this.list = res.data.data.list
          }
        })
      },
      linquSet(item) {
        // 未达成。 （/）领取 this.btnType 0
        let linqu = ''
        if( item.status == '0') {
          this.btnType = '0'
          linqu = `(${this.dataObj.people}/${item.number})领取`
        }else if(item.status == '1') {
          // 可领取，按钮发光
          this.btnType = '1'
          linqu = `可领取`
        }else if(item.status == '2'){
          // 超出档位，灰色按钮
          this.btnType = '2'
          linqu = `已升级`
        }else {
          // 当月领取过后，灰色按钮
          this.btnType = '2'
          linqu = `已领取`
        }
        return linqu
      },
      // 点击领取触发
      linquClick(item) {
        let params = {
          iid: item.id
        } 
        if(item.status == '1'){
          this.$fn.request('welfare/received', "POST", params).then(res => {
          	if(res.data.code ==1 ) {
             
			  this.$refs.success.showTips({
			      msg: '领取成功',
			      duration: 2000
			    })
              this.getData()
            }
          })
        }else {
          return
        }
      }
    }
	}
</script>

<style lang="less">
.zongshouyi{
	height: 300upx;
	width: 684upx;
	margin: 0 auto;
	margin-top: 0upx;
	border: 1upx solid #cccccc;
	border-radius: 30upx;
	background-color: #e5f7f1;
	.one{
		width: 100%;
		height: 40%;
		background-image:url('../../static/newMy/tuoyuan1.png') ;
		background-repeat: no-repeat;
		background-size: 100% auto;
		border-radius: 0 0 26% 26%;
	}
	.two{
		background-image:url('../../static/newMy/juxing.png') ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		 border-radius:30% 30% 0 0 ;
		width: 100%;
		height: 60%;
		.twoItem{
			width: 50%;
			height: 80%;
		}
		.last{
			width: 80%;
			height: 80upx;
			background-color: #07c07e;
			border-radius: 30upx;
			color: #fff;
			
		}
	}
	
}

.linquTime {
  width: 100%;
  margin-top: 32rpx;
  text-align: center;
  font-size: 32rpx;
  color: #00988F;
}
.item{
	width: 700rpx;
  height: 121rpx;
	margin: 32upx auto;
  box-sizing: border-box;
  padding: 10upx 20upx;
	display: flex;
  flex-direction: column;
	align-items: center;
	position: relative;
  background-image: url('../../static/c/items-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  .item-bottom {
    width: 100%;
    position: absolute;
    left: 0%;
    bottom: 0%;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 24rpx;
    font-weight: 400;
    color: #00988F;
    image {
      width: 32rpx;
      height: 26rpx;
    }
  }
	.btn{
		background-color: #07c07e;
		color: #fff;
		border-radius: 0 25upx 0 25upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    top: 0;
    right: 0;
	}
  .gray {
    background-color: #8e8e8e;
    color: #fff;
    border-radius: 0 25upx 0 25upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    top: 0;
    right: 0;
  }
  .pink {
    background-color: #07c07e;
    color: #fff;
    border-radius: 0 25upx 0 25upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    top: 0;
    right: 0;
    filter: brightness(110%);
    box-shadow: 0 0 5px #fff, 0 0 10upx #fff, 0 0 15upx #fff, 0 0 10upx #fff,
        0 0 10upx #fff, 0 0 40upx #fff, 0 0 10upx #fff, 0 0 15upx #fff;
  }
}
</style>
