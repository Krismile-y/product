<template>
	<view class="content"  style="padding-top: 70upx;">
		
		<navs></navs>
		
		<view class="top">
			<view class="shang">
				<view class="left dis">
					<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" mode=""></image>
				</view>
				<view class="center">
					<view class="one">姓名：mr.Li</view>
					<view class="two">推荐ID:199875</view>
				</view>
				<view class="right">
					<image src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" mode=""></image>
				</view>
			</view>
			<view class="xia">
				<view class="item disc">
					<view class="tit">0.00￥</view>
					<view class="de">可提现收益</view>
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
		</view>
		
		<!--  -->
		<view class="box"  @tap="go('group')">
			<view class="title">
				<view class="shu"></view>
				团队津贴
				</view>
			<view class="msg">
				<image src="../../static/my/test.png" mode="" style="width: 95%;height: 260upx;margin: 0 auto;"></image>
			</view>
		</view>
		
		<view class="box">
			<view class="title">
				<view class="shu"></view>
				资金管理
				</view>
			<view class="msg">
				<view class="item disc" @tap="go('record')">
					<image src="../../static/my/touzi.png" mode=""></image>
					投资记录
				</view>
				<view class="item disc">
					<image src="../../static/my/shouyi.png" mode=""></image>
					收益记录
				</view>
				<view class="item disc">
					<image src="../../static/my/jilu.png" mode=""></image>
					提现记录
				</view>
				<view class="item disc"  @tap="go('withdrawal')">
					<image src="../../static/my/shenqing.png" mode=""></image>
					提现申请
				</view>
				
			</view>
		</view>
		
		<view class="box">
			<view class="title">
				<view class="shu"></view>
				活动内容
				</view>
			<view class="msg">
				<view class="item disc" @tap="go('invite')">
					<image src="../../static/index/pingtai.png"></image>
					分享邀请
				</view>
				<view class="item disc" @tap="go('msg')">
					<image src="../../static/index/shijie.png"></image>
					消息中心
				</view>
				<view class="item disc" @tap="go('myGroup')">
					<image src="../../static/index/lin.png"></image>
					我的团队
				</view>
				<view class="item disc">
					<image src="../../static/index/fenxiang.png"></image>
					进入官网
				</view>
				<view class="item disc" >
					<image src="../../static/index/tuandui.png"></image>
					待定
				</view>
				<view class="item disc" @tap="go('terrace')">
					<image src="../../static/index/shouyui.png"></image>
					平台攻略
				</view>
				<view class="item disc" @tap="go('mySafe')">
					<image src="../../static/index/xiazia.png"></image>
					安全保障
				</view>
				<view class="item disc"  @tap="go('myShop')">
					<image src="../../static/index/guanwang.png"></image>
					我的商品
				</view>
				
			</view>
		</view>
		
		<view class="box">
			<view class="title">
				<view class="shu"></view>
				安全与服务
				</view>
			<view class="msg">
				<view class="item disc" @tap="go('safe')">
					<image src="../../static/my/touzi.png" mode=""></image>
					账户安全
				</view>
				<view class="item disc" @tap="go('ensure')">
					<image src="../../static/my/shouyi.png" mode=""></image>
					安全保障
				</view>
				<view class="item disc">
					<image src="../../static/my/jilu.png" mode=""></image>
					我的客服
				</view>
				<view class="item disc" @tap="go('help')">
					<image src="../../static/my/shenqing.png" mode=""></image>
					反馈与帮助
				</view>
				<view class="item disc">
					<image src="../../static/my/shenqing.png" mode=""></image>
					检查更新
				</view>
				<view class="item disc" @tap="go('about')">
					<image src="../../static/my/shenqing.png" mode=""></image>
					关于我们
				</view>
			</view>
		</view>
		
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			go(name){
				console.log(name)
				uni.navigateTo({
					url:`/pages/${name}/${name}`
				})
			}
		}
	}
</script>

<style lang="less" scoped src='./my.less'>

</style>
