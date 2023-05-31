<template>
	<view class="safe">
		
    <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
    <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
    <view class="safe-box">
      <view class="item item1" @tap="goImgPage">
      	<image src="../../static/common/icon_avatar.png" mode=""></image>
      	头像<view class="head-tips">点击更换头像</view>
      	<view class="right ">
      		<image :src="imgSrc" mode="heightFix"></image>
      	</view>
      </view>
	  
      <view class="item" @tap='x'>
      	<image src="../../static/common/icon_iphone.png" mode=""></image>
      	手机号
      	<view class="right">
      		{{info.phone}}
          <text class="right-jiantou">></text>
      	</view>
      </view>
      
      <view class="item"   @tap="go(1)">
      	<image src="../../static/common/icon_id-card.png" mode=""></image>
      	实名制
      	<view class="right">
      		{{shiming}}
          <text class="right-jiantou">></text>
      	</view>
      </view>
      <view class="item" style="margin-top: 0upx;" @tap="go(2)">
      	<image src="../../static/common/icon_edit.png" mode=""></image>
      	修改登录密码
      	
      	<view class="right">
      		<text class="right-jiantou">></text>
      	</view>
      </view>
      <view class="item" style="margin-top: 0upx;" @tap="goPayPassword()">
      	<image src="../../static/common/repay.png" mode=""></image>
      	提现密码
      	
      	<view class="right">
      		<text class="right-jiantou">></text>
      	</view>
      </view>
      
    </view>
		<view>
			<airel-floatball  />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true,
			  info:{},
			  shiming:"",
        imgSrc: '../../common/user.webp'
			};
		},
    onShow() {
		let info={
			"is_whole":"1"
		}
		this.$fn.request('user','GET',info).then(res=>{
			// console.log(res.data.data,'用户信息')
			uni.setStorageSync('user_info',res.data.data)
			this.info=uni.getStorageSync('user_info')
			 this.imgSrc = this.info.head_img
		})
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
				this.shiming='已实名'
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
			x(){
				return
			},
      goImgPage(){
      		uni.navigateTo({
      			url:'/pages/headImg/headImg'
      		})
      	
      },
      goPayPassword() {
        if(this.info.is_real_name == 2) {
          uni.navigateTo({
          	url:'/pages/payPassword/payPassword'
          })
        }else {
          this.$refs.error.showTips({
            msg: '请完成实名认证',
            duration: 2000
          })
        }
        
      }
		}
	}
</script>

<style lang="less">
.safe{
	width: 100%;
	height: 100vh;
	background: #F7F8FA;
  .safe-box {
    width: 750rpx;
    height: 472rpx;
    background: #FFFFFF;
    .item{
    	width: 100%;
    	height: 102upx;
    	background-color: #ffffff;
    	display: flex;
    	align-items: center;
    	box-sizing: border-box;
      padding:0 32upx;
      border-bottom: 2rpx solid #E5E5E5;
    	position: relative;
      image{
      	width: 40upx;
      	height: 40upx;
        margin-right: 18rpx;
      }
      .head-tips {
        text-indent: .5em;
        color: #bbb;
        flex: 1;
        text-align: right;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #8E8E8E;
      }
    	.right{
        flex: 1;
        text-align: right;
        line-height: 102upx;
        box-sizing: border-box;
        padding-right: 30upx;
    		height: 100%;
    		color: #999;
        position: relative;
        .right-jiantou {
          display: block;
          color: #bbb;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0,-50%) scale(1,1.8);
        }
    	}
    }
    .item1 {
      width: 100%;
      height: 165rpx;
      box-sizing: border-box;
      padding-bottom: 31rpx;
      display: flex;
      align-items: flex-end;
      .right {
        flex: none;
        width: 96rpx;
        height: 96rpx;
        margin-left: 18rpx;
        image{
        	width: 96rpx;
        	height: 96rpx;
          margin-right: 0;
        }
      }
    }
  }
	
}
</style>
