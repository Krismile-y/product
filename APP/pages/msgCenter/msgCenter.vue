<template>
	<view>
		<!-- 系统通知 -->
		<view v-show="id==0?true:false">
			<view class="xitongtongzhi" v-for="item in 4">
				<view class="title dis">
					系统通知
				</view>
				<view class="detail">
					4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰
				</view>
			</view>
		</view>
		
		<!-- 最新活动 -->
		<view v-show="id==1?true:false">
			<view class="zuixinhuodong disc" >
				<view class="title">最新活动</view>
				<view class="detail">
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。				
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
				</view>
				<image src="https://ossweb-img.qq.com/images/lol/web201310/newbie/lb_01.jpg" mode=""></image>
			</view>
		</view>
		
		<!-- 平台公告 -->
		<view v-show="id==2?true:false">
			<view class="pingtaigonggao" v-show="false">
				<view class="item">
					<view class="left dis">
						<image src="../../static/myimg/zhongyao.jpg" mode=""></image>
					</view>
					<view class="right disc">
						<view class="title">认购赠送</view>
						<view class="detail">
							4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰				
						</view>
					</view>
				</view>
			</view>
			<view class="zhanneixin" v-show="false">
				<view class="item" >
					<view class="left dis">
						<image  style="border-radius: 50%;" src="https://img0.baidu.com/it/u=726620871,4203188840&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" mode=""></image>
					</view>
					<view class="right disc">
						<view class="title">认购赠送</view>
						<view class="detail">
							4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰				
						</view>
					</view>
				</view>
			</view>
			
			<view class="zuixinhuodong disc" >
				<view class="title">最新活动</view>
				<view class="detail">
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。				
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
					精彩游戏的同时，当然少不了同样精彩的活动，我们为新手玩家准备了丰富的成长礼包。
					当你的召唤师等级达到5/10/15/20级时，将分别获得一份新手礼包，内含游戏双倍BUFF卡，以及各种珍贵的符文。
				</view>
				<image src="https://img0.baidu.com/it/u=1248114325,1357136430&fm=253&fmt=auto&app=138&f=JPEG?w=780&h=446" mode=""></image>
			</view>
		</view>
		
		<!-- 站内信 -->
		<view v-show="id==3?true:false">
			<view class="zhanneixin" v-for="item in 2">
				<view class="item" style="width: 90%;margin: 30upx auto;">
					<view class="left dis">
						<image  style="border-radius: 20upx;" src="https://img0.baidu.com/it/u=726620871,4203188840&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" mode=""></image>
					</view>
					<view class="right disc">
						<view class="title">认购赠送</view>
						<view class="detail" style="text-indent: 60upx;">
							4月14日，我国成功完成陆基中段反导拦截技术试验。陆基中段反导是如何实现一击命中的?军事专家刘晓峰				
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.id=options.id
		},
		data() {
			return {
				id:''
			};
		}
	}
</script>

<style lang="less" src='./msgCenter.less'>

</style>
