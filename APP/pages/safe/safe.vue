<template>
	<view class="safe">
    <view class="safe-box">
      <view class="item" @tap="goImgPage">
      	<image src="../../static/common/phone.png" mode=""></image>
      	头像<text class="head-tips">点击更换头像</text>
      	<view class="right">
      		<image :src="imgSrc" mode="heightFix"></image>
          <text class="right-jiantou">></text>
      	</view>
      </view>
      <view class="item">
      	<image src="../../static/common/phone.png" mode=""></image>
      	手机号
      	<view class="right">
      		{{info.phone}}
          <text class="right-jiantou">></text>
      	</view>
      </view>
      
      <view class="item" style="margin-top: 0upx;"  @tap="go(1)">
      	<image src="../../static/common/shimingzhi.png" mode=""></image>
      	实名制
      	<view class="right">
      		{{shiming}}
          <text class="right-jiantou">></text>
      	</view>
      </view>
      <view class="item" style="margin-top: 0upx;" @tap="go(2)">
      	<image src="../../static/common/xiugai.png" mode=""></image>
      	修改登录密码
      	
      	<view class="right">
      		<text class="right-jiantou">></text>
      	</view>
      </view>
      
    </view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  info:{},
			  shiming:"",
        imgSrc: '../../common/user.webp'
			};
		},
    onShow() {
      this.info=uni.getStorageSync('user_info')
      this.imgSrc = this.info.head_img
    },
		onLoad() {
			this.info=uni.getStorageSync('user_info')
      this.imgSrc = this.info.head_img
			let z = this.info.is_real_name
			if(z == 0){
				this.shiming='未实名'
			}else if( z == 1){
				this.shiming='提交申请'
			}else if( z == 2){
				this.shiming='通过申请'
			}else if( z == 3){
				this.shiming='拒绝申请'
			}
		},
		methods:{
			go(index){
				
					uni.navigateTo({
						url:'/pages/revisePassword/revisePassword?type='+index
					})
				
			},
      goImgPage(){
      		uni.navigateTo({
      			url:'/pages/headImg/headImg'
      		})
      	
      }
		}
	}
</script>

<style lang="less">
.safe{
	width: 100%;
	height: 100vh;
  box-sizing: border-box;
  padding: 40upx 20upx 0;
	background-color: #f1f1f1;
  .safe-box {
    border-radius: 30upx;
    overflow: hidden;
    .item{
    	width: 100%;
    	height: 90upx;
    	background-color: #ffffff;
    	display: flex;
    	align-items: center;
    	box-sizing: border-box;
    	position: relative;
      image{
      	width: 40upx;
      	height: 40upx;
      	padding-left: 30upx;
      	margin-right: 15upx;
      }
      .head-tips {
        text-indent: .5em;
        color: #bbb;
      }
    	.right{
    		position: absolute;
    		top: 0;
    		right: 30upx;
        line-height: 90upx;
    		flex: 1;
    		height: 100%;
        padding-right: 30upx;
    		color: #999;
        .right-jiantou {
          display: block;
          color: #bbb;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0,-50%) scale(1,1.8);
        }
        image{
        	width: 100%;
        	height: 100%;
          margin-right: 0;
          box-sizing: border-box;
          padding: 10upx;
        }
    	}
    }
  }
	
}
</style>
