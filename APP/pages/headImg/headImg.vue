<template>
  <view class="headImg">
    <image :src="imageSrc" :style="imgStyle" mode="" class="img-head"></image>
    <view class="bottom-btn">
      <view class="bbtn" @tap="chooseImage">
        从相册选择一张
      </view>
      <view class="bbtn">
        拍一张照片
      </view>
    </view>
  </view>
</template>

<script>
  import defaultImg from "../../common/user.webp"
  export default {
    data() {
      return {
        imageSrc:defaultImg,
        imgFile: null,
        imgStyle: {
          width: 0,//屏幕宽度
          height: 0,
        },
      };
    },
    // mounted() {
    //   this.$nextTick(()=> {
    //     this.getScreenWidth()
    //   })
    // },
    onLoad() {
        this.getScreenWidth()
        let info=uni.getStorageSync('user_info')
        this.imageSrc = info.head_img
        console.log(info,'user');
    },
    methods: {
      getScreenWidth() {
            uni.getSystemInfo({
              success: (res) => {
                this.imgStyle.width = res.windowWidth + 'px'
                this.imgStyle.height = res.windowWidth + 'px'
              }
            })
          },
      chooseImage: function() {
      
      			var _this = this;
      			uni.chooseImage({
      			//允许上传的照片数量
      				count: 1,
      				 // sizeType:  original 原图，compressed 压缩图，默认二者都有
      				sizeType: ['compressed'],
      				// sourceType: ['camera','album'], 从相册选择
      				sourceType: ['album'],
              //图片裁剪
              crop:{
                width:this.imgStyle.width,
                height:this.imgStyle.width
              },
      				success: (res) => {
      				//因为有一张图片， 输出下标[0]， 直接输出地址
      					_this.imageSrc = res.tempFilePaths[0];
                console.log(_this.imageSrc,'本地图片',res);
                _this.imgFile = res.tempFiles[0]
                _this.$fn.request('upload', "POST", _this.imgFile).then(res => {
                  uni.showToast({
                    title:'上传成功',
                    icon:"success"
                  })
                })
      					// 上传图片, 做成一个上传对象
      					// uni.uploadFile({
      					    // 需要上传的地址
      						// url: 'www.api.com/api/upload', 
      						  // filePath  需要上传的文件
      						// filePath: _this.imageSrc,
      						//文件上传名称
      						// name: 'file',
      						// formData: {
      						// },
      						//上传头中带着$token
      						//Authorization 请求消息头含有服务器用于验证用户代理身份的凭证
      						// header: {
      						// 	Authorization: _this.$token
      						// },
            //       complete:(res) => {
            //         console.log(res);
            //       },
      						// success: (res) => {
      						//  JSON.parse() 方法将数据转换为 JavaScript 对象
      							// let a=JSON.parse(res.data);
      							//如果状态码为200，将图片地址赋给_this.imageSrc 和	_this.imageSrcUrl
      							// if (a.code == 200) {
                      // console.log('上传成功');
      								// _this.imageSrc = _this.host + a.data;
      								// _this.imageSrcUrl = a.data;
      							// } else {
      							// 弹出框提示错误
      						// 		uni.showToast({
      						// 			title: "上传失败！",
      						// 			icon: "none"
      						// 		})
      						// 	}
      						// },
      					//	fail，加载失败后的回调
      					// 	fail:(res)=>{
      					// 		console.log("fail",res);
      					// 	}
      					// });
      				},
      				fail: (err) => {
      					// #ifdef MP
      					//getSetting 获取用户的当前设置， 判断是否已授权,
      					uni.getSetting({
      						success: (res) => {
      						//用户授权结果，其中 key 为 scope 值，value 为 Boolean 值，表示用户是否允许授权
      							let authStatus = res.authSetting['scope.album'];
      							if (!authStatus) {
      								uni.showModal({
      									title: '授权失败',
      									content: '系统需要从您的相册和相机的权限，请在设置界面打开相关权限',
      									success: (res) => {
      									//确认按钮框
      										if (res.confirm) {
      										//调起客户端小程序设置界面，返回用户设置的操作结果。
      											uni.openSetting()
      										}
      									}
      								})
      							}
      						}
      					})
      					// #endif
      				}
      			})
      		},

    }
  }
</script>

<style lang="less">
.headImg {
  width: 100%;
  height: calc(100vh - 88upx);
  background-color: #ddd;
  position: relative;
  .img-head {
    background-color: #fff;
  }
  .bottom-btn {
    width: 100%;
    position: absolute;
    left: 0%;
    bottom: 0%;
    background-color: #fff;
    .bbtn {
      text-align: center;
      padding: 20upx 0;
      font-size: 16px;
    }
  }
}
</style>
