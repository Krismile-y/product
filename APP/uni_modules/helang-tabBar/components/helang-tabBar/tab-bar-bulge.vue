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
						<view class="rudder">
							<view>
								<view class="color-yellow"></view>
								<view class="color-orange"></view>
								<view class="content">
									<view class="h-flex-x h-flex-3">
										<view style="padding-top: 40rpx;">
											<uni-icons type="star" size="42rpx" color="#c66219"></uni-icons>
										</view>
										<view style="padding-bottom: 30rpx;">
											<uni-icons type="paperplane" size="42rpx" color="#c66219"></uni-icons>
										</view>
										<view style="padding-top: 40rpx;">
											<uni-icons type="heart" size="42rpx" color="#c66219"></uni-icons>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-else :class="{
						'active':current == index
					}">
						<view class="h-flex-x h-flex-center" @tap="go(item.name)">
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
      go(name) {
      	uni.navigateTo({
      		url: `/pages/${name}/${name}`
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
			
			// 舵式容器
			.rudder{
				width: 260rpx;
				height: 130rpx;
				position: absolute;
				z-index: 1;
				left: 50%;
				margin-left: -130rpx;
				top: -128rpx;
				overflow: hidden;
				
				> view{
					position: absolute;
					z-index: 1;
					width: 100%;
					height: 200%;
					overflow: hidden;
					top: 0;
					left: 0;
				}
				
				
				.color-yellow,.color-orange,.content{
					position: absolute;
					width: 100%;
					left: 0;
					top: 0;
					height: 50%;
					overflow: hidden;
					transform-origin:50% 100%;
					transform:rotate(-180deg);
					
					
					&:before{
						content: '';
						display: block;
						position: absolute;
						width: 100%;
						left: 0;
						top: 0;
						height: 200%;
						border-radius: 50%;
						border: solid 1px #fff;
					}
				}
				.color-yellow{
					z-index: 1;
					// transform:rotate(90deg);
					
					&:before{
						background-color: #efd200;
					}
					
				}
				.color-orange{
					z-index: 2;
					// transform:rotate(45deg);
					
					&:before{
						background-color: #f04900;
					}
				}
				
				.content{
					z-index: 3;
					// transform:rotate(0deg);
					
					&:before{
						background-color: #fff;
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
		
		.bulge-active{
			.btn{
				> view{
					transform:rotate(180deg);
				}
			}
		}
		
		.open{
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
		.close{
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
