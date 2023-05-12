<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar h-flex-x h-flex-5" :class="{'fixed':fixedBottom}">
			<view class="item" 
				v-for="(item,index) in  tabList" 
				:key="index" 
				:class="{
					'active':current == index,
					'recover':prevIndex == index
				}"
				@tap="change(index)"
			>
				<view>
					<view class="h-flex-x h-flex-center">
						<uni-icons :type="item.icon" size="60rpx" color="#dbd9f7"></uni-icons>
					</view>
					<view class="h-flex-x h-flex-center">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/uni_modules/helang-tabBar/components/uni-icons/uni-icons";
	
	export default {
		// 翻滚
		name:"helangTabBarRoll",
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
				current:0,
				tabList:[
					{
						"icon":"home-filled",
						"text":"首页"
					},
					{
						"icon":"chat-filled",
						"text":"消息"
					},
					{
						"icon":"cart-filled",
						"text":"购物"
					},
					{
						"icon":"gift-filled",
						"text":"福利"
					},
					{
						"icon":"person-filled",
						"text":"我的"
					},
				]
			};
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
		overflow: hidden;
		
		> view{
			height: 200%;
			
			> view{
				height: 50%;
				color: #0043e3;
				font-size: 30rpx;
			}
		}
		
		&.active{
			&::before{
				content: '';
				display: block;
				position: absolute;
				width: 90rpx;
				height: 90rpx;
				box-sizing: border-box;
				border-color: #0043e3;
				border-style: solid;
				border-width: 2px;
				border-radius: 50%;
				top: 5rpx;
				left: 50%;
				margin-left: -45rpx;
				z-index: 1;
				
				animation:scale 0.3s ease 0s 1 normal;
				animation-fill-mode:forwards;
			}
			&::after{
				content: '';
				display: block;
				background-color: #0043e3;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				position: absolute;
				bottom: 3px;
				left: 50%;
				margin-left: -2px;
				z-index: 2;
				opacity: 0;
				
				animation:fide-in 0.5s ease 0.3s 1 normal;
				animation-fill-mode:forwards;
			}
			
			> view{
				animation:translate 0.4s ease 0.3s 1 normal;
				// transform:translateY(-100rpx);
				animation-fill-mode:forwards;
			}
		}
		
		&.recover{
			> view{
				animation:recover 0.3s ease 0s 1 normal;
			}
		}
	}
}

// 恢复默认
@keyframes recover
{
	from {
		transform:translateY(-100rpx);
	}
	to {
		transform:translateY(0);
	}
}
// 转换移动
@keyframes translate
{
	from {
		transform:translateY(0);
	}
	to {
		transform:translateY(-100rpx);
	}
}
// 圆圈缩放
@keyframes scale
{
	0% {
		transform:scale(0,0);
		opacity: 0;
		border-width: 2px;
	}
	50% {
		opacity: 0.5;
		border-width: 5px;
	}
	100% {
		transform:scale(0.95,0.95);
		opacity: 0;
		border-width: 0px;
	}
}

// 淡入
@keyframes fide-in
{
	from {
		transform:scale(0,0);
		opacity: 0;
	}
	to {
		transform:scale(1,1);
		opacity: 1;
	}
}
</style>
