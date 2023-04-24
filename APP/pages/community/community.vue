<template>
	<view style="padding-bottom: 220upx;">
		
		<!-- <view class="tops">
			<view class="center">
				<view class="x dis" @tap="go('group')">
					
				</view>
			</view>
		</view> -->
		
		<view class="top">
			<view class="shang">
				<view class="left dis">
					<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" mode=""></image>
				</view>
				<view class="center">
					<view class="one">我的推荐人:mmm	</view>
					<view class="two">	我的推荐码：mr.Li</view>
				</view>
				
			</view>
			<view class="xia " style="">
				
				<view class="boxsss">
					<view class="item disc">
						<view class="tit">0.00￥</view>
						<view class="de">可提现</view>
						
						
					</view>
					<view class="item disc">
						<view class="tit">0.00￥</view>
						<view class="de">每日收益</view>
					</view>
					<view class="item disc">
						<view class="tit">0.00￥</view>
						<view class="de">总收益</view>
					</view>
				</view>
				
				<view class="boxsss">
					<view class="item disc">
						<view class="tit">0.00</view>
						<view class="de">绿币</view>
					</view>
					<view class="item disc">
						<view class="tit">0.00</view>
						<view class="de">碳票</view>
					</view>
					<view class="item disc">
						<view class="tit">0.00</view>
						<view class="de">积分</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<!-- <view class="boxs"  @tap="go('group')"  style="0upx;">
			<view class="title">
				<view class="shu"></view>
				团队津贴
				</view>
			<view class="msg">
				<image src="../../static/my/test.png" mode="" style="width: 95%;height: 260upx;margin: 0 auto;"></image>
			</view>
		</view> -->
		
		<!--  -->
		<view class="three" style="margin-top: 370upx;">
			
			 <view class="one disc">
				 <view class="title">共计获得团队津贴</view>
				 <view class="num">0.00￥</view>
			 </view>
			 
			 <view class="two">
				 <view class="item disc">
					 <view class="title">共计直推人数</view>
					 <view class="num">0人</view>
				 </view>
				 <view class="item disc">
					 <view class="title">共计完成任务</view>
					 <view class="num">0个</view>
				 </view>
			 </view>
			 
		</view>
		
		<!--  -->
		<!-- <view class="titleCenter dis">我的推荐人:某某某</view> -->
		<view class="tits">
			<view class="title dis" @tap="bian(0)" :class="{color:currentIndex==0?true:false}">
				团队详细
			</view>
			<view class="title dis"@tap="bian(1)" :class="{color:currentIndex==1?true:false}">
				收益记录
			</view>
		</view>
		
		<view class="box">
			<view class="threes">
				<view class="threeItem dis">操作/时间</view>
				<view class="threeItem dis">投资金额</view>
				<view class="threeItem dis">2023记录</view>
			</view>
			<view class="" style="margin-top: -30upx;width: 100%;">
				<uni-section title=""  >
					<view class="example-body">
						<uni-combox :border="true" :candidates="candidates" placeholder="请选择日期"></uni-combox>
					</view>
				</uni-section>
			</view>
		</view>
		
		<bottom num='1'></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0,
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
			};
		},
		onShow() {
			if(uni.getStorageSync('name') == 'community'){
				this.$store.state.one=true
				this.$store.state.two=false
				this.$store.state.three=true
				this.$store.state.four=true
			}
		},
		methods:{
			bian(index){
				this.currentIndex=index
			}
		}
	}
</script>

<style lang="less" src='./community.less'>

</style>
