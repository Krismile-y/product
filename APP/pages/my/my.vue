<template>
	<view class="content">
		<airel-floatball />
		<!-- <navs></navs> -->

		<view class="top">
			<view class="shang">
				<view class="left dis">
					<image
						src="../../common/user.webp"
						mode=""></image>
				</view>
				<view class="center">
					<view class="one">用户名：{{info.user_name}}</view>
					<view class="two">我的推荐码:{{info.id}}</view>
				</view>
				<view class="right dis" style="color: #000;">
					<view class="shiming dis">{{info.is_real_name==0?'未实名':'已实名'}}</view>
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
						<view class="tit">{{info.money_vote}}</view>
						<view class="de">碳票</view>
					</view>
					<view class="item disc">
						<view class="tit">{{info.money_integral}}</view>
						<view class="de">积分</view>
					</view>
				</view>

			</view>
		</view>





		<view class="box" style="margin-top: 280upx;" v-show="false">
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
				<view class="item disc" >
					<image src="../../static/myimg/jinru.png"></image>
					<a href="http://gw.tzhreefvg.top/">进入官网</a>
				</view>
				<view class="item disc" @tap="go('test')">
					<image src="../../static/myimg/jinrong.png"></image>
					充值
				</view>
				<view class="item disc" @tap="go('terrace')">
					<image src="../../static/myimg/pingtai.png"></image>
					平台攻略
				</view>

				<view class="item disc" @tap="go('myShop')">
					<image src="../../static/myimg/shangpin.png"></image>
					我的商品
				</view>
				<view class="item disc" @tap="go('setting')">
					<image src="../../static/myimg/shezhi2.png"></image>
					设置
				</view>
			</view>
		</view>
		<!--  -->
		<view class="box" style="margin-top: 280upx;">
			<view class="title">
				<view class="shu"></view>
				活动内容
			</view>
			<view class="list">
				<view class="item" @tap="go('invite')">
					<view class="left">分享邀请</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('msg')">
					<view class="left">消息中心</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('myGroup')">
					<view class="left">我的团队</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="goIndex()">
					<view class="left">进入官网</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('myShop')">
					<view class="left">我的商城</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('test')">
					<view class="left">充值</view>
					<view class="right">></view>
				</view>
			</view>
			
			<!-- <view class="list">
				<view class="item" @tap="go('terrace')">
					<view class="left">平台攻略</view>
					<view class="right">></view>
				</view>
			</view> -->
			
			<view class="list">
				<view class="item" @tap="go('setting')">
					<view class="left">设置</view>
					<view class="right">></view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="box">
			<view class="title">
				<view class="shu"></view>
				资金管理
			</view>
			<view class="list">
				<view class="item" @tap="go('record')">
					<view class="left">投资记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('income')">
					<view class="left">收益记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('twithdrawal')">
					<view class="left">提现记录</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
				<view class="item" @tap="go('withdrawal')">
					<view class="left">提现申请</view>
					<view class="right">></view>
				</view>
			</view>
			<view class="list">
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

					<image @click="show = true"
						src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
						mode=""></image>

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
				show: false,
				info: {},
				today: "",
				out: 0,
			};
		},
		onBackPress() {
			console.log('上一级返回')
		},
		// mounted(){
		//   // #ifdef APP-PLUS
		// let currentWebview = this.$mp.page.$getAppWebview(); //获取当前页面的webview对象
		//    currentWebview.setStyle({ popGesture: 'none' });
		// // #endif
		// },
		onBackPress(event) {
			if (this.out == 0) {
				this.out++
				uni.showToast({
					duration: 1000,
					title: '再按一次退出程序',
					icon: "none"
				})
			} else if (this.out >= 1) {
				if (plus.os.name.toLowerCase() === 'android') {
					plus.runtime.quit();
				}
				uni.removeStorageSync('token')
			}

			if (event.from === 'backbutton') {
				this.overlayShow = true;

				return true;
			} else {
				// return false
			}

		},

		onShow() {
			// 用户信息
			let info={
				"is_whole":"1"
			}
			this.$fn.request('user','GET',info).then(res=>{
				console.log(res.data.data,'用户信息')
				uni.setStorageSync('user_info',res.data.data)
			})
			
			
			this.out = 0
			if (uni.getStorageSync('name') == 'my') {
				this.$store.state.one = true
				this.$store.state.two = true
				this.$store.state.three = true
				this.$store.state.four = false
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('user_info'))
			this.info = uni.getStorageSync('user_info')
			//用户今日收益	
			let data = {
				"is_whole": "1"
			}
			this.$fn.request('income', "GET", data).then(res => {
				// console.log(res.data, '用户今日收益')
				if(res.data.code == 204){
					uni.showToast({
						title:res.data.msg,
						icon:'none',
						duration:1000,
					})
					setTimeout(()=>{
						uni.removeStorageSync('token');
						uni.navigateTo({
							url:'/pages/login/login'
						})
					},1500)
				}
				this.today = res.data.data.today
			})

			//用户二维码
			this.$fn.request('qrcode', "GET", {}).then(res => {
				// console.log(res.data.data.qrcode,'用户二维码')
			})
		},
		methods: {
			go(name) {
				console.log(name)
				uni.navigateTo({
					url: `/pages/${name}/${name}`
				})
			},
			queding() {
				this.show = false
			},
			goIndex(){
				window.location = ('http://gw.tzhreefvg.top/')
				
			}
		}
	}
</script>

<style lang="less" scoped src='./my.less'>

</style>