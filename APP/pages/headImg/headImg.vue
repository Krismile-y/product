<template>
	<view class="headImg">
		<view><airel-floatball  /></view>
	
   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
   <view class="img-items">
      <view class="item-box" v-for="(item,index) in itemData" :key="index" @tap="clickItem(index)">
        <image class="headimg-img" :src="item.url" mode="widthFix"></image>
        <view class="checked-img"  v-show="nowImg==index">
          <image src="../../static/common/check-square-fill.png" mode="widthFix"></image>
        </view>
      </view>
   </view>
    <view class="btn-submit" @tap="commit" v-show="btnType">
      保存图片
    </view>
    <view class="btn-submit" v-show="!btnType">
      正在保存
    </view>
	</view>
</template>

<script>
	// import FormData from 'form-data'
	import md5 from 'js-md5';
	import defaultImg from "../../common/user.webp"
	export default {
		data() {
			return {
				itemData: [],
        btnType: true,
        checked: false,
        nowImg: -1, //默认不选择图片
			};
		},
		
		onLoad() {
			this.getImgs()
		},

		methods: {
      // 获取所有图片
      getImgs() {
        this.$fn.request('user/sculpture', 'POST', {}).then((res)=> {
          if(res.data.code == 1) {
            this.itemData = res.data.data
          }
        })
      },
      // 保存图片
      commit() {
        this.btnType = false
        if(this.nowImg == -1) {
          this.$refs.error.showTips({
            msg: '请选择头像后保存',
            duration: 1500
          })
          this.btnType = true
        }else {
          // 发起请求
          let params = {
            head_img: ''
          }
          params.head_img = this.itemData[this.nowImg].image
          this.$fn.request('user/head_edit', 'POST', params).then((res)=> {
            if(res.data.code == 1) {
              // this.itemData = res.data.data
              this.$refs.success.showTips({
                msg: '更换头像成功！',
                duration: 1500
              })
              setTimeout(()=> {
                uni.navigateTo({
                  url:"/pages/safe/safe"
                })
                this.btnType = true
              },1500)
            }else {
              this.$refs.error.showTips({
                msg: res.data.msg,
                duration: 1500
              })
              this.btnType = true
            }
          })
        }
      },
      // 选择图片
      clickItem(index) {
        console.log(index);
        this.nowImg = index
      }
		}
	}
</script>

<style lang="less">
	.headImg {
		width: 100%;
		.img-items {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item-box {
        width: 22%;
        margin: 10rpx 0 0;
        position: relative;
        .headimg-img {
          width: 100%;
        }
        .checked-img {
          position: absolute;
          top: 0%;
          right: 0%;
          z-index: 66;
          width: 50rpx;
          height: 50rpx;
          background-color: #fff;
          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .btn-submit {
      width: 686rpx;
      height: 76rpx;
      background-color: #02AE71;
      color: #fff;
      font-size: 32rpx;
      font-weight: 500;
      text-align: center;
      line-height: 76rpx;
      border-radius: 58rpx 58rpx 58rpx 58rpx;
      position: fixed;
      bottom: 200rpx;
      left: 50%;
      transform: translate(-50%,0);
    }
	}
</style>