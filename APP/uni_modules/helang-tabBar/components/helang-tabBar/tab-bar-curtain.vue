<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar" :class="{'fixed':fixedBottom}">
			<view class="h-flex-x h-flex-5">
				<view class="item h-flex-x h-flex-center"
					:class="{
						'active':current == index
					}"
					v-for="(item,index) in  tabList" 
					:key="index" 
					@tap="change(index)"
				>
					
					<view>
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
				current:4,
				tabList:[
					{
						"icon":"home",
						"text":"首页"
					},
					{
						"icon":"chat",
						"text":"消息"
					},
					{
						"icon":"paperplane",
						"text":"发布"
					},
					{
						"icon":"gift",
						"text":"福利"
					},
					{
						"icon":"person",
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
			}
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
		overflow: hidden;
		
		&:before{
			content: '';
			display: block;
			position: absolute;
			top: -100%;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-image: linear-gradient(to bottom, #ffdcd4, #fff8f7);
			background-color: red;
			transition: transform 0.35s ease 0s;
			transform:translateY(0);
		}
		
		> view{
			position: relative;
			z-index: 2;
		}

		
		&.active{
			color: #313151;
			
			/deep/ .uni-icons{
				color: #313151 !important;
			}
			
			&:before{
				transform:translateY(100rpx);
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
