<template>
	<view class="content"  >
		
		<!-- <navs></navs> -->
		
		<view class="top">
			<view class="shang">
				<view class="left dis">
					<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" mode=""></image>
				</view>
				<view class="center">
					<view class="one">用户名：{{info.user_name}}</view>
					<view class="two">我的推荐码:{{info.id}}</view>
				</view>
				<view class="right dis" style="color: #000;">
					<view class="shiming dis" >{{info.is_real_name==0?'未实名':'已实名'}}</view>
					<!-- <image   @click="show = true" src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" mode=""></image> -->
				</view>
			</view>
			<view class="xia " style="">
				
				<view class="boxs">
					<view class="item disc">
						<view class="tit">￥{{info.money_approve}}</view>
						<view class="de">可提现</view>
						
						
					</view>
					<view class="item disc">
						<view class="tit">￥{{today}}</view>
						<view class="de">每日收益</view>
					</view>
					<view class="item disc">
						<view class="tit">￥{{info.money_balance}}</view>
						<view class="de">总收益</view>
					</view>
				</view>
				
				<view class="boxs">
					<view class="item disc">
						<view class="tit">{{info.money_green}}</view>
						<view class="de">绿币</view>
					</view>
					<view class="item disc">
						<view class="tit">0.00</view>
						<view class="de">碳票</view>
					</view>
					<view class="item disc">
						<view class="tit">{{info.money_integral}}</view>
						<view class="de">积分</view>
					</view>
				</view>
				
			</view>
		</view>
		
	
		
		
		
		<view class="box" style="margin-top: 340upx;">
			<view class="title">
				<view class="shu"></view>
				活动内容
				</view>
			<view class="msg">
				<view class="item disc" @tap="go('invite')">
					<image src="../../static/myimg/fenxiang.png"></image>
					分享邀请
				</view>
				<view class="item disc" @tap="go('msg')">
					<image src="../../static/myimg/xiaoxi.png"></image>
					消息中心
				</view>
				<view class="item disc" @tap="go('myGroup')">
					<image src="../../static/myimg/wode.png"></image>
					我的团队
				</view>
				<view class="item disc">
				<image src="../../static/myimg/jinru.png"></image>
					进入官网
				</view>
				<view class="item disc"  @tap="go('test')">
					<image src="../../static/myimg/jinrong.png"></image>
					充值
				</view>
				<view class="item disc" @tap="go('terrace')">
					<image src="../../static/myimg/pingtai.png"></image>
					平台攻略
				</view>
				
				<view class="item disc"  @tap="go('myShop')">
					<image src="../../static/myimg/shangpin.png"></image>
					我的商品
				</view>
				<view class="item disc"  @tap="go('setting')">
					<image src="../../static/myimg/shezhi2.png"></image>
					设置
				</view>
			</view>
		</view>
		<!--  -->
		<view class="box" >
			<view class="title">
				<view class="shu"></view>
				资金管理
				</view>
			<view class="list" >
				<view class="item" @tap="go('record')">
					<view class="left">投资记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list" >
				<view class="item" @tap="go('income')">
					<view class="left">收益记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list" >
				<view class="item" @tap="go('twithdrawal')">
					<view class="left">提现记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list" >
				<view class="item" @tap="go('withdrawal')">
					<view class="left">提现申请</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list" >
				<view class="item" @tap="go('certificate')">
					<view class="left">股权证书</view>
					<view class="right">></view>
				</view>
			</view>
		</view>
		
		<!-- 遮罩层 -->
		<u-overlay :show="show" @click="show = false">
				<view class="warp">
					<view class="rect" @tap.stop>
						
						<image   @click="show = true" src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" mode=""></image>
						
					</view>
				</view>
			</u-overlay>
		
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				info:{},
				today:"",
			};
		},
		onShow() {
			if(uni.getStorageSync('name') == 'my'){
				this.$store.state.one=true
				this.$store.state.two=true
				this.$store.state.three=true
				this.$store.state.four=false
			}
		},
		onLoad() {
		  console.log(uni.getStorageSync('user_info'))	
		 this.info=	uni.getStorageSync('user_info')
		  //用户今日收益	
		  let data={
			  "is_whole":"1"
		  }
		  this.$fn.request('income',"GET",data).then(res=>{
			  console.log(res.data.data.today,'用户今日收益')
			  this.today=res.data.data.today
		  })
				
		 //用户二维码
		  this.$fn.request('qrcode',"GET",{}).then(res=>{
		  			  console.log(res.data.data.qrcode,'用户二维码')
		  })
		},
		methods:{
			go(name){
				console.log(name)
				uni.navigateTo({
					url:`/pages/${name}/${name}`
				})
			},
			queding(){
				this.show=false
			}
		}
	}
</script>

<style lang="less" scoped src='./my.less'>

</style>
