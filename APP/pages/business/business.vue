<template>
	<view style="padding-bottom: 30upx;">
		<view class="top">
			<view><text class="da">12.64</text><text class="xiao">+1.6%</text></view>
			<view class="right dis">
				<view class="yuan dis" @tap="guan">
					?
				</view>
			</view>
		</view>
		
		<!--  -->
		<view class="info">
			<view class="box">
				<view class="title">
					<view class="titleItem dis">买co2/t</view>
					<view class="titleItem dis">成交价格</view>
					<view class="titleItem dis">数量</view>
					<view class="titleItem dis">单价/CNY</view>
				</view>
				
				<view class="itemBox">
					<view class="list" v-for="item in 6">
						<view class="item dis">co2/t</view>
						<view class="item dis">12.13</view>
						<view class="item dis">3354</view>
						<view class="item dis">12.13</view>
					</view>
				</view>
				
			</view>
			
			<view class="box">
				<view class="title">
					<view class="titleItem dis" style="color: red;">买co2/t</view>
					<view class="titleItem dis" style="color: red;">成交价格</view>
					<view class="titleItem dis" style="color: red;">数量</view>
					<view class="titleItem dis" style="color: red;">单价/CNY</view>
				</view>
				
				<view class="itemBox">
					<view class="list" v-for="item in 6">
						<view class="item dis" style="color: red;">co2/t</view>
						<view class="item dis" style="color: red;">12.13</view>
						<view class="item dis" style="color: red;">3354</view>
						<view class="item dis" style="color: red;">12.13</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<!--  -->
		<view class="four">
			<view class="two">
				<view class="twoItem dis">
					卖出
					<view class="pos"></view>
			    </view>
				<view class="twoItem dis" style="color: green;">买入</view>
			</view>
			<view class="twos">
				<view class="twoItems dis">时限12H</view>
				<view class="twoItems dis">限价</view>
			</view>
		</view>
		<!--  -->
		
		<view class="threeMsg">
			<view class="threeItem dis">单价</view>
			<view class="threeItem dis">12.68</view>
			<view class="threeItem dis">CNY</view>
		</view>
		
		<view class="threeMsg">
			<view class="threeItem dis" style="color: #000;">数量</view>
			<view class="threeItem dis">
				<input type="text">
			</view>
			<view class="threeItem dis">co2/t</view>
		</view>
		
		<!--  -->
        <view class="message">
			<view class="left">可用碳排放量</view>
			<view class="right">0 co2/t</view>
		</view>
		<view class="message">
			<view class="left">预计收入</view>
			<view class="right">0 CNY</view>
		</view>
		
		<view class="message">
			<view class="hong dis">查看交易量</view>
			<view class="hong dis">查看碳走势</view>
		</view>
		
		<view class="btn dis">暂未开启</view>
		<view class="wenxin">
			温馨提示：填写的交易单价量及交易故障，完成后不可撤销
		</view>
		
		<!-- 遮罩层 -->
		<u-overlay :show="show" @tap="show = false">
				<view class="warp">
					<view class="rect" @tap.stop>
						<view class="shang dis">温馨提示</view>
						<view class="zhong">
							<view class="" style="margin-top: 10upx;margin-left: 35upx;">
								交易规则
							</view>
							<view class="msg">1.用户需要完成身份认证</view>
							<view class="msg">2.用户需要完成身份认证1.用户需要完成身份认证1.用户需要完成身份认证</view>
							<view class="msg">
								3.用户需要完成身份认证1.用户需要完成身份认证1.用户需要完成身份认证
							</view>
							<view class="msg">
								4.用户需要完成身份认证1.用户需要完成身份认证1.用户需要完成身份认证
							</view>
						</view>
						<view class="xia dis" @tap="queding">确定</view>
					</view>
				</view>
			</u-overlay>
				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			};
		},
		methods:{
			guan(){
				this.show=true
			},
			queding(){
				this.show=false
			}
		}
	}
</script>

<style lang="less" src='./business.less'>

</style>
