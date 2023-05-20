<template>
	<view class="headImg">
    
    <view class="headImg-box">
      <image :src="imageSrc" mode="" class="img-head"></image>
    </view>
		<view class="bottom-btn">
			<view class="bbtn" @tap="chooseImage()">
				从相册选择一张
			</view>

			<!-- <view class="bbtn">
				拍一张照片
			</view> -->
		</view>
		<view><airel-floatball  /></view>
	</view>
</template>

<script>
	// import FormData from 'form-data'
	import md5 from 'js-md5';
	import defaultImg from "../../common/user.webp"
	export default {
		data() {
			return {
				imageSrc: defaultImg,
				imgFile: null,
				imgStyle: {
					width: 0, //屏幕宽度
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
			let info = uni.getStorageSync('user_info')
			this.imageSrc = info.head_img
			// console.log(info, 'user');
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
					crop: {
						width: this.imgStyle.width,
						height: this.imgStyle.width
					},
					success: (res) => {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						_this.imageSrc = res.tempFilePaths[0];
						// console.log(_this.imageSrc, '本地图片');
						console.log(res.tempFiles[0], '二进制文件流')
						let tokens = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
						let times = Math.round(new Date().getTime() / 1000).toString();
						let keys = '2zn7s4m0uctu';
						let data = {
							'image': res.tempFiles[0], //二进制文件
							'type': res.tempFiles[0].type
						}
						console.log(res.tempFiles,'data里的type')
						uni.uploadFile({
							url: this.$url + 'upload',
							header: {
								'token': tokens,
								'sign': md5(tokens + '&' + keys + '&' + times),
								'time': times
							},

							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: data,
							success: (uploadFileRes) => {
								console.log('上传成功返回--', uploadFileRes.data);
							}
						});

						// uni.request({
						// 	url:'https://api.lszgfreer.top/api/upload',
						// method:'POST',
						// header: {
						// 	// 'Content-Type':'multipart/form-data',
						// 	'token': tokens,
						// 	'sign': md5(tokens + '&' + keys + '&' + times),
						// 	'time': times
						// },
						// data,
						// success: (r) => {
						// 	console.log(r)
						// }
						// })


						// let data = {
						// 	'image': form,
						// 	'type': res.tempFiles[0].type
						// }
						// _this.$fn.request('upload', "POST",data).then(res => {
						// 	// let is_whole = 1
						// 	// _this.$nextTick(()=> {
						// 	//   _this.$fn.request('user', "GET", is_whole).then(res => {
						// 	//     console.log(res,'用户信息');
						// 	//   })
						// 	// })
						// 	console.log(res, '图片接口返回');
						// 	if (res.data.code == 1) {
						// 		uni.showToast({
						// 			title: '上传成功',
						// 			icon: "success"
						// 		})
						// 	} else {
						// 		uni.showToast({
						// 			title: res.data.msg,
						// 			icon: "error"
						// 		})
						// 	}
						// })




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
    box-sizing: border-box;
    padding-top: 98rpx;
    .headImg-box {
      width: 380rpx;
      height: 380rpx;
      background: #D8D8D8;
      border: 1rpx solid #979797;
      margin: 0 auto 128rpx;
      border-radius: 50%;
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

		.bottom-btn {
			width: 750rpx;
			height: 100rpx;
			background: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
      .bbtn {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 100rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
      }
		}
	}
</style>