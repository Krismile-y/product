<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar" :class="{'fixed':fixedBottom}">
			<view class="h-flex-x h-flex-5">
				<view class="item h-flex-x h-flex-center"
					v-for="(item,index) in  tabList" 
					:key="index" 
					@tap="change(index)"
				>
					<view v-if="item.bulge" class="bulge" 
						:class="{
							'bulge-active':openBulge,
							'open':openBulge,
							'close':!openBulge
						}"
					>
            <view class="jinrong">
              <!-- 中间圆图 -->
              <image src="@/static/common/jinrong.jpg" mode="" @tap="changeBulge()"></image>
            </view>
            <!-- 五个小图标的视口盒子 -->
						<view class="show-box">
						  <view class="rudder">
						  	<view>
						  		<view class="color-yellow"></view>
						  		<view class="color-orange"></view>
						  		<view class="content">
						  			<view class="h-flex-x h-flex-3">
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan1"  @tap="four(0)">按钮1</view>
						  				</view>
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan2" @tap="four(1)">按钮2</view>
						  				</view>
						  				<view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan3" @tap="four(2)">按钮3</view>
						  				</view>
						          <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan4" @tap="four(3)">按钮4</view>
						          </view>
						          <view style="padding-top: 0rpx;box-sizing: border-box;height: 100%;">
						            <view class="items dis yuan5" @tap="four(4)">按钮5</view>
						          </view>
						  			</view>
						  		</view>
						  	</view>
						  </view>
						</view>
					</view>
					<view v-else :class="{
						'active':$store.state.current == index
					}">
						<view class="h-flex-x h-flex-center" @tap="go(item.name,index)">
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
				current:3,
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
				openBulge:false
			};
		},
		computed:{
			
		},
		methods:{
			change(index){
				if(this.tabList[index].bulge){
					return;
				}
				if(this.current == index){
					return;
				};
				
				this.prevIndex = this.current;
				this.current = index;
				this.openBulge = false;
			},
			// 凸起按钮切换
			changeBulge(){
				this.openBulge = !this.openBulge;
			},
      go(name,index) {
        this.$store.state.current = index
      	uni.navigateTo({
      		url: `/pages/${name}/${name}`
      	})
      },
      four(index){
      	
      	if(index<4){
          this.$store.state.current = 5
      		uni.navigateTo({
      			url: '/pages/invest/invest?id=' + index
      		})
      	}
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
        image {
          width: 170upx;
          height: 170upx;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          top: -70upx;
          left: -2%;
          z-index: 9999;
        }
      }
			.btn{
				width: 80rpx;
				height: 80rpx;
				position: absolute;
				z-index: 2;
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
				width: 500upx;
				height: 250upx;
				position: absolute;
				z-index: 1;
				left: 50%;
				margin-left: -250upx;
				top: 60upx;
				// overflow: hidden;
				
				> view{
					position: absolute;
					z-index: 1;
					width: 100%;
					height: 200%;
					// overflow: hidden;
					top: 0;
					left: 0;
				}
				
				
				.color-yellow,.color-orange,.content{
					position: absolute;
					width: 100%;
					left: 0;
					top: 0;
					height: 50%;
					// overflow: hidden;
					transform-origin:50% 100%;
					transform:rotate(-180deg);
					.items {
            width: 120upx;
            height: 120upx;
            border-radius: 50%;
            // background-color: #54d27e;
            color: #fff;
            background-image: url('@/static/common/xiaoanniu.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: relative;
          }
          .yuan1 {
            top: 130upx;
            left: -60upx;
          }
          
          .yuan2 {
            top: 0;
            left: -100upx;
          }
          .yuan3 {
            top: -60upx;
            left: -60upx;
          }
          .yuan4 {
            top: 0upx;
            left: -30upx;
          }
          
          .yuan5 {
            top: 130upx;
            left: -60upx;
          }
					
					&:before{
						content: '';
						display: block;
						position: absolute;
						width: 100%;
						left: 0;
						top: 0;
						height: 200%;
						border-radius: 50%;
					}
				}
				.color-yellow{
					z-index: 1;
					// transform:rotate(90deg);
					
					&:before{
						background-color: rgba(25, 255, 255, 0);
					}
					
				}
				.color-orange{
					z-index: 2;
					// transform:rotate(45deg);
					
					&:before{
						background-color: rgba(0, 0, 0, 0);
					}
				}
				
				.content{
					z-index: 3;
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
						z-index: 2;
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
        	.color-yellow,.color-orange,.content{
        		transform:rotate(0deg);
        	}
        	.color-yellow{
        		transition: transform 0.3s ease 0s;
        	}
        	.color-orange{
        		transition: transform 0.3s ease 0.05s;
        	}
        	.content{
        		transition: transform 0.3s ease 0.1s;
        	}
        	
        }
      }
		}
		.close{
			.show-box {
        .rudder{
        	.color-yellow,.color-orange,.content{
        		transform:rotate(-180deg);
        	}
        	.color-yellow{
        		transition: transform 0.3s ease 0.1s;
        	}
        	.color-orange{
        		transition: transform 0.3s ease 0.05s;
        	}
        	.content{
        		transition: transform 0.3s ease 0s;
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
