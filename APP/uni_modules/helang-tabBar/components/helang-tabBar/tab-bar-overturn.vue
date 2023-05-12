<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar" :class="{'fixed':fixedBottom}">
			<view class="h-flex-x h-flex-5">
				<view class="item h-flex-x h-flex-center"
					v-for="(item,index) in  tabList" 
					:key="index" 
					:class="{
						'active':current == index
					}"
					@tap="change(index)"
				>
					<view>
						<view class="h-flex-x h-flex-center">
							<view class="icon">
								<view>
									<view class="icon-default h-flex-x h-flex-center">
										<uni-icons :type="item.icon" size="52rpx" color="#bebcbc"></uni-icons>
									</view>
									<view class="icon-selected h-flex-x h-flex-center">
										<uni-icons :type="item.iconSelected" size="60rpx" color="#262626"></uni-icons>
									</view>
								</view>
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
		// 翻转
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
				current:2,
				tabList:[
					{
						"icon":"home",
						"iconSelected":"home-filled",
						"text":"首页"
					},
					{
						"icon":"chat",
						"iconSelected":"chat-filled",
						"text":"消息"
					},
					{
						"icon":"gift",
						"iconSelected":"gift-filled",
						"text":"福利"
					},
					{
						"icon":"star",
						"iconSelected":"star-filled",
						"text":"收藏"
					},
					{
						"icon":"person",
						"iconSelected":"person-filled",
						"text":"我的"
					},
				]
			};
		},
		computed:{
			
		},
		methods:{
			change(index){
				if(this.current == index)return;
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
		color: #bebcbc;
		font-size: 20rpx;
		line-height: normal;
		
		.icon{
			position: relative;
			width: 60rpx;
			height: 60rpx;
			margin: 0 auto;
			
			> view{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				transition: 0.5s ease;
			}
			
			.icon-default{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #fff;
			}
			
			.icon-selected{
				background-color: #fff;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				backface-visibility: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				transform-style: preserve-3d;
				transform: rotateY(180deg);
			}
		}
		
		
		&.active{
			color: #262626;
			
			.icon{
				> view{
					transform: rotateY(180deg);
				}
			}
		}
	}
}
</style>
