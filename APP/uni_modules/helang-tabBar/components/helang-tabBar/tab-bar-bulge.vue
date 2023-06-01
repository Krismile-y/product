<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar" :class="{'fixed':fixedBottom}">
			<view class="h-flex-x h-flex-5">
				<view class="item h-flex-x h-flex-center"
					v-for="(item,index) in  tabList" 
					:key="index" 
					
				>
        <!-- @tap="change(item.name)" -->
					<view v-if="item.bulge" class="bulge" 
						:class="{
							'bulge-active':openBulge,
							'open':openBulge,
							'close':!openBulge
						}"
					>
            <view class="jinrong">
              <!-- 中间圆图 -->
              <view class="image-white">
                
              </view>
              <view class="image-bg">
                <image src="@/static/common/earth.png" mode="" @tap="changeBulge()"></image>
              </view>
            </view>
            <!-- 五个小图标的视口盒子 -->
						<view class="show-box" v-show="kaiguan == 1? true: false">
						  <view class="rudder">
						  	<view>
						  		<view class="content">
						  			<view class="h-flex-x h-flex-3">
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan1"  @tap="four(0)">
                          <image src="../../../../static/newIndex/gabige.png" mode=""></image>
                          <!-- <image src="../../../../static/newIndex/gray_gabige.png" mode=""></image> -->
                        </view>
						  				</view>
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan2" @tap="four(6)">
                          <!-- <image src="../../../../static/newIndex/chuan.png" mode=""></image> -->
                          <image src="../../../../static/newIndex/gray_chuan.png" mode=""></image>
                        </view>
						  				</view>
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan3" @tap="four(1)">
                          <!-- <image src="../../../../static/newIndex/plane.png" mode=""></image> -->
                          <image src="../../../../static/newIndex/gray_plane.png" mode=""></image>
                        </view>
						  				</view>
						          <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan4" @tap="four(3)">
                          <image src="../../../../static/newIndex/nengyuan.png" mode=""></image>
                          <!-- <image src="../../../../static/newIndex/gray_nengyuan.png" mode=""></image> -->
                        </view>
						          </view>
						          <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan5" @tap="four(5)">
                          <!-- <image src="../../../../static/newIndex/lou.png" mode=""></image> -->
                          <image src="../../../../static/newIndex/gray_lou.png" mode=""></image>
                        </view>
						          </view>
                      <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
                        <view class="items dis yuan6" @tap="four(2)">
                          <!-- <image src="../../../../static/newIndex/car.png" mode=""></image> -->
                          <image src="../../../../static/newIndex/gray_car.png" mode=""></image>
                        </view>
                      </view>
                      <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
                        <view class="items dis yuan7" @tap="four(4)">
                          <!-- <image src="../../../../static/newIndex/tree.png" mode=""></image> -->
                          <image src="../../../../static/newIndex/gray_tree.png" mode=""></image>
                        </view>
                      </view>
						  			</view>
						  		</view>
						  	</view>
						  </view>
						</view>
					</view>
					<view v-else :class="{
						'active': (current == item.name)
					}" @tap="go(item.name,index)">
						<view class="h-flex-x h-flex-center">
							<view class="icon">
								<uni-icons :type="item.icon" size="48rpx" color="#b4b3b8"></uni-icons>
							</view>
						</view>
						<view class="h-flex-x h-flex-center">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/uni_modules/helang-tabBar/components/uni-icons/uni-icons";
	
	export default {
		// 凸起舵式切换
		name:"helangTabBarOverturn",
		components: {
			uniIcons
		},
		props:{
			// 固定底部
			fixedBottom:{
				type:Boolean,
				default:true
			}
		},
    
		data() {
			return {
				
				prevIndex:-1,
				current:uni.getStorageSync('current'),
				tabList:[
					{
						"icon":"home",
            "name": "index",
						"text":"首页"
					},
					{
						"icon":"chat",
            "name": "community",
						"text":"社区"
					},
					{
						"bulge":true,
            "name": "",
					},
					{
						"icon":"shop",
            "name": "shop",
						"text":"商城"
					},
					{
						"icon":"person",
            "name": "my",
						"text":"我的"
					},
				],
				openBulge:false,
        kaiguan:2 //1打开2关闭
			};
		},
		onShow() {
		  this.current = uni.getStorageSync('current')
		},
		methods:{
			change(index){
				// if(this.tabList[index].bulge){
				// 	return;
				// }
				// if(this.current == index){
				// 	return;
				// };
				
				// this.prevIndex = this.current;
				// this.current = index;
				// this.openBulge = false;
			},
			// 凸起按钮切换
			changeBulge(){
        if(this.kaiguan == 1) {
          this.openBulge = !this.openBulge;
          setTimeout(()=> {
            this.kaiguan = 2
          },100)
        }else {
          this.kaiguan = 1
          setTimeout(()=> {
            this.openBulge = !this.openBulge;
          },10)
        }
        
			},
      go(name,index) {
        console.log(name,index)
        let nowIndex = this.$store.state.current
        // 防止重复点击发请求
        if(nowIndex == name) {
          return
        }
        let strIndex = name
        uni.setStorageSync('current',strIndex)
        this.$store.state.current = uni.getStorageSync('current')
        console.log(strIndex,'index',nowIndex);
      	uni.navigateTo({
      		url: `/pages/${name}/${name}`
      	})
      },
      four(index){
        this.$store.state.current = 5
        this.$store.state.scrollIndex = index
        uni.setStorageSync('current',5)
        this.current = uni.getStorageSync('current')
        this.changeBulge()
        uni.navigateTo({
          url: '/pages/invest/invest?id=' + index
        })
      },
		}
	}
</script>

<style lang="scss" scoped>
@import "./helang-flex.scss";
@import "./tab-bar.scss";

.helang-tab-bar{
	.item{
		height: 100rpx;
		position: relative;
		color: #b4b3b8;
		font-size: 20rpx;
		line-height: normal;
		
		.bulge{
			width: 100%;
			height: 100%;
			position: relative;
			.jinrong {
        position: relative;
        .image-bg {
          width: 108upx;
          height: 108upx;
          border-radius: 50%;
          background-color: #02AE71;
          position: absolute;
          top: -20upx;
          left: 50%;
          transform: translate(-50%,0);
          display: grid;
          place-items: center;
          image {
            width: 80upx;
            height: 80upx;
            z-index: 1;
          }
        }
        .image-white {
          width: 160upx;
          height: 160upx;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          top: -40upx;
          left: 50%;
          transform: translate(-50%,0);
          z-index: 0;
        }
      }
			.btn{
				width: 80rpx;
				height: 80rpx;
				position: absolute;
				z-index: -2;
				left: 50%;
				margin-left: -40rpx;
				top: -30rpx;
				background-image: linear-gradient(to right, #ec5d0e, #df9f86);
				border-radius: 50%;
				
				transition: transform 0.1s ease 0s;
				transform:scale(1,1);
				
				&:active{
					transform:scale(0.9,0.9);
				}
				
				> view{
					transition: transform 0.2s ease 0s;
					transform:rotate(0deg);
				}
			}
			.show-box {
        z-index: -1;
      width: 100vw;
      height: 310upx;
      position: absolute;
      left: 50%;
      margin-left: -50vw;
      top: -310upx;
      // background-color: #000;
      overflow: hidden;
			// 舵式容器
			.rudder{
				width: 420upx;
				height: 250upx;
				position: absolute;
				z-index: -1;
				left: 50%;
				margin-left: -210upx;
				top: 60upx;
				// overflow: hidden;
				
				> view{
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 200%;
          // background-color: #02AE71;
					// overflow: hidden;
					top: 0;
					left: 0;
				}
				
				
				.content{
					position: absolute;
					width: 100%;
					left: 0;
					top: 0;
					height: 50%;
					// overflow: hidden;
					// transform-origin:50% 100%;
					// transform:rotate(-180deg);
					.items {
            width: 100upx;
            height: 100upx;
            border-radius: 50%;
            color: #fff;
            background-color: #fff;
            position: relative;
            >image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .pink {
            // 
            filter: brightness(110%);
            box-shadow: 0 0 5px #02AE71, 0 0 10upx #02AE71, 0 0 15upx #02AE71, 0 0 10upx #02AE71,
                0 0 10upx #02AE71, 0 0 40upx #02AE71, 0 0 10upx #02AE71, 0 0 15upx #02AE71;
          }
          .yuan1 {
            top: 300upx;
            left: 0upx;
          }
          
          .yuan2 {
            top: 300upx;
            left: -60upx;
          }
          .yuan3 {
            top: 300upx;
            left: -88upx;
          }
          .yuan4 {
            top: 300upx;
            left: -108upx;
          }
          
          .yuan5 {
            top: 300upx;
            left: -160upx;
          }
          .yuan6 {
            top: 300upx;
            left: -190upx;
          }
          .yuan7 {
            top: 300upx;
            left: -280upx;
          }
					
					&:before{
						content: '';
						display: block;
            z-index: -1;
						position: absolute;
						width: 100%;
						left: 0;
						top: 0;
						height: 200%;
						border-radius: 50%;
					}
				}
				// .color-yellow{
				// 	z-index: 1;
					// transform:rotate(90deg);
					
				// 	&:before{
				// 		background-color: rgba(25, 255, 255, 0);
				// 	}
					
				// }
				// .color-orange{
				// 	z-index: 2;
					// transform:rotate(45deg);
					
				// 	&:before{
				// 		background-color: rgba(0, 0, 0, 0);
				// 	}
				// }
				
				.content{
					z-index: -1;
					// transform:rotate(0deg);
					
					&:before{
						background-color: rgba(0, 0, 0, 0);
					}
					
					> view{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: -1;
						padding: 0 15rpx;
						text-align: center;
					}
				}
				
				
			}
		}
    
    }
		
		.bulge-active{
			.btn{
				> view{
					transform:rotate(180deg);
				}
			}
		}
		
		.open{
			.show-box {
        .rudder{
          .content{
            .yuan1 {
              transform: translate(0,-170rpx);
            }
            .yuan1 {
              transition: transform .3s ease 0s ;
            }
            .yuan2 {
              transform: translate(0,-320rpx);
            }
            .yuan2 {
              transition: transform .7s ease 0s ;
            }
            .yuan3 {
              transform: translate(0,-240rpx);
            }
            .yuan3 {
              transition: transform .5s ease 0s ;
            }
            .yuan4 {
              transform: translate(0,-340rpx);
            }
            .yuan4 {
              transition: transform .7s ease 0s ;
            }
            .yuan5 {
              transform: translate(0,-240rpx);
            }
            .yuan5 {
              transition: transform 0.9s ease 0s ;
            }
            .yuan6 {
              transform: translate(0,-330rpx);
            }
            .yuan6 {
              transition: transform 0.9s ease 0s ;
            }
            .yuan7 {
              transform: translate(0,-170rpx);
            }
            .yuan7 {
              transition: transform 0.9s ease 0s ;
            }
          }
        	
        	
        }
      }
		}
		.close{
			.show-box {
        
        .rudder{
        	.content{
        		.yuan1 {
        	    transform: translate(0,170rpx);
        	  }
        	  .yuan1 {
        	    transition: transform .3s ease 0s ;
        	  }
            .yuan2 {
              transform: translate(0,370rpx);
            }
            .yuan2 {
              transition: transform .7s ease 0s ;
            }
            .yuan3 {
              transform: translate(0,240rpx);
            }
            .yuan3 {
              transition: transform .5s ease 0s ;
            }
            .yuan4 {
              transform: translate(0,340rpx);
            }
            .yuan4 {
              transition: transform .7s ease 0s ;
            }
            .yuan5 {
              transform: translate(0,240rpx);
            }
            .yuan5 {
              transition: transform 0.9s ease 0s ;
            }
            .yuan6 {
              transform: translate(0,330rpx);
            }
            .yuan6 {
              transition: transform 0.9s ease 0s ;
            }
            .yuan7 {
              transform: translate(0,170rpx);
            }
            .yuan7 {
              transition: transform 0.9s ease 0s ;
            }
        	}
        	
        }
      }
		}
		
		
		.active{
			color: #c66219;
			
			/deep/ .uni-icons{
				color: #c66219 !important;
			}
		}
	}
}


// 转换移动
@keyframes translate
{
	from {
		transform:translateY(0) scale(1,1);
	}
	to {
		transform:translateY(-20rpx) scale(1.1,1.1);
	}
}
</style>
