<template>
	<view class="invite disc">
    <backgroundPage :title="title">
      <view class="invite-content">
        <view class="code-img">
          <image :src="code"></image>
        </view>
        <!-- <view class="btn dis" @tap="fenxiang">立即分享</view> -->
		<!-- #ifdef H5-->
        <view class="bottom dis zbottom">
			
        	<view class="in dis" >
				<a :href="code" style="color: #fff;">
				下载二维码
				</a>
        		
        	</view>	
        </view>
		<!-- #endif -->	
		
		<!-- #ifdef APP-->
		<view class="bottom dis zbottom">
			<view class="in dis" @tap="fenxiang">
				下载二维码
			</view>
		</view>
		<!-- #endif -->	
		
      </view>
    </backgroundPage>
		
	</view>
</template>

<script>
  import backgroundPage from "../../components/background-page/background.vue";
	export default {
    components: {backgroundPage},
		data() {
			return {
				info:{},
				code:"",
        title: '',
			};
		},
		onLoad() {
			this.info=uni.getStorageSync('user_info')
			this.$fn.request('qrcode',"GET",{}).then(res=>{
				console.log(res.data.data.qrcode,'用户二维码')
				this.code=res.data.data.qrcode
        this.title = `<view class="wdtjm">我的推荐码:</view><br />
            <view class="numberCode">${this.info.id}</view>`
			})
		},
		methods:{
			
			fenxiang(){
				// #ifdef APP-PLUS 
				  uni.downloadFile({
				    url: this.code,
				    success: res => {
				      if (res.statusCode === 200) {
				        uni.saveImageToPhotosAlbum({
				          filePath: res.tempFilePath,
				          success: () => {
				            uni.showToast({
				              title: '保存相册成功'
				            })
				          },
				          fail: () => {
				            uni.showToast({
				              title: '保存失败',
				              icon: 'none'
				            })
				          }
				        })
				      } else {
				        uni.showToast({
				          title: '下载失败',
				          icon: 'none'
				        })
				      }
				    },
				    fail: () => {
				      uni.showToast({
				        title: '下载失败',
				        icon: 'none'
				      })
				    }
				  })
				//#endif
			}
		}
	}
</script>

<style lang="less">
.invite{
	width: 100%;
	// // background-image:url('https://pic.616pic.com/bg_w1180/00/20/57/zkoqzSOdaL.jpg') ;
	// background-repeat: no-repeat;
	// background-size: 100% 100%;
	.id{
		width: 50%;
		// color: #fff;
		font-size: 36upx;
	}
  /deep/ .help-title {
    top: 5%;
    line-height: 80upx;
    text-align: center;
    .wdtjm {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .invite-content {
    width: 100%;
    height: 100%;
    .code-img {
      width: 100%;
      display: flex;
      justify-content: center;
      image{
      	width: 50%;
      	height:360upx;
      	margin: 120upx auto 40upx;
      }
    }
    
  }
	
	.btn{
		color: #fff;
		width: 80%;
		height: 90upx;
		margin-top: 30upx;
		background-color: #4bc93e;
		background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
		border-radius: 30upx;
	}
}
</style>
