<template>
	<view class="content" style="padding-bottom: 0;">
		<airel-floatball />
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<!-- 头部 -->
		<view class="top">
			<view class="topBox">
				<view class="t ">
					<view class="left dis">
						<image :src="info.head_img" alt="" />
					</view>
					<view class="right">
						<view class="user">
							<view class="username">{{info.user_name}}</view>
							<view class="shiming dis">
								<image src="../../static/newMy/icon_people.png" mode=""
									style="width: 20upx;height: 20upx;margin-right: 10upx;"></image>
								{{zhuangtai}}
							</view>
						</view>
						<view class="code">
							我的推荐码:{{info.id}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 总收益 -->
		<view class="zongshouyi">
			<view class="one disc">
				<view style="color: #fff;">总收益</view>
				<view style="font-weight: 600;font-size: 42upx;color: #fff;">{{info.money_balance}}</view>
			</view>
			<view class="two disc">
				<view class="t" style="width: 100%;height: 60%;display: flex;">
					<view class="twoItem disc">
						<view>每日收益</view>
						<view>{{today}}</view>
					</view>
					<view class="twoItem disc">
						<view>可提现金额</view>
						<view>{{info.money_approve}}</view>
					</view>
				</view>
				<view class="last dis" style="margin-top: -30upx;" @tap="go('withdrawal')">
					提现申请
				</view>
			</view>

		</view>

		<!-- 三个-->
		<view class="three">
			<view class="threeItem" style="background-image: url('../../static/newMy/three.png');" @tap="goDetails(1)">
				<view style="padding-left: 20upx;padding-top: 10upx;">我的碳汇</view>
				<view style="padding-left: 20upx;">{{info.money_converge}}</view>
			</view>
			<view class="threeItem" style="background-image: url('../../static/newMy/two.png');" @tap="goDetails(2)">
				<view style="padding-left: 20upx;padding-top: 10upx;">我的碳票</view>
				<view style="padding-left: 20upx;">{{info.money_vote}}</view>
			</view>
			<view class="threeItem" style="background-image: url('../../static/newMy/lvbibg.png');" @tap="goDetails(3)">
				<view style="padding-left: 20upx;padding-top: 10upx;">我的绿币</view>
				<view style="padding-left: 20upx;">{{info.money_green}}</view>
			</view>
		</view>

		<!-- 活动标题 -->
		<view class="title">
			<view class="shu"></view>
			<view class="tt">
				个人中心
			</view>
		</view>
		<view class="money" @tap="shousuo">
			<view class="moneyItem">
				<image src="../../static/newMy/gerenmingxi.png" mode=""></image>
				个人明细
				<view class="pos dis">
					<image src="../../static/newMy/youjiantou.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="huodongBox dis" :class="{'huodongBox1': shousuoType}">
			<view class="huodongItem disc" v-for="item in huodongList" @tap="go(item.go,)">
				<view class="yuan dis">
					<image :src="item.url" mode=""></image>
				</view>
				<view style="margin-top: 10upx;">{{item.name}}</view>
			</view>
		</view>


		<!-- 个人中心 -->
		<!-- <view class="title" style="margin-bottom: 30upx;">
			<view class="shu"></view>
			个人中心
		</view> -->

		<view class="money" v-for="(item,index) in jiluList">
			<view class="moneyItem" @tap="go(item.go,index)">
				<image :src="item.url" mode=""></image>
				{{item.name}}
				<view class="pos dis">
					<image src="../../static/newMy/youjiantou.png" mode=""></image>
				</view>
			</view>
		</view>

		<helang-tab-bar-bulge></helang-tab-bar-bulge>
	</view>
</template>

<script>
	import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
	export default {
		components: {
			"helang-tab-bar-bulge": tabBarBulge,
		},
		data() {
			return {
				show: false,
				info: {},
				today: "",
				out: 0,
				zhuangtai: "",
				shousuoType: false, //false 收缩状态，true展开
				jiluList: [
					// {
					//   name:"个人明细",
					//   url:'../../static/newMy/anquanbaozhang.png',
					//   go:'eight',
					// },
					{
						name: "个人信息",
						url: '../../static/newMy/anquanbaozhang.png',
						go: 'safe',
					},
					{
						name: "银行卡绑定",
						url: '../../static/newMy/yinhangka.png',
						go: 'bankcard',
					},
					{
						name: "实名认证",
						url: '../../static/newMy/shiming.png',
						go: 'revisePassword',
					},
					{
						name: "设置",
						url: '../../static/newMy/shezhi.png',
						go: 'setting',
					},
				],
				huodongList: [{
						name: '投资明细',
						url: '../../static/newMy/touzi.png',
						go: 'record'
					},
					{
						name: '收益明细',
						url: '../../static/newMy/shouyi.png',
						go: 'income'
					},
					{
						name: '提现明细',
						url: '../../static/newMy/tixian.png',
						go: 'twithdrawal'
					},
					{
						name: '积分明细',
						url: '../../static/newMy/jifen.png',
						go: 'jifenminxi',
					},
					{
						name: '绿币明细',
						url: '../../static/newMy/lvbi.png',
						go: 'lvbi'
					},
					{
						name: '碳票明细',
						url: '../../static/newMy/tanpiao.png',
						go: 'tanpiao'
					},
					{
						name: '碳汇明细',
						url: '../../static/newMy/tanhui.png',
						go: 'tanhui'
					},
					{
						name: '公益明细',
						url: '../../static/newMy/gongyi.png',
						go: 'gongyiDetail'
					},
				]
			};
		},

		// mounted(){
		//   // #ifdef APP-PLUS
		// let currentWebview = this.$mp.page.$getAppWebview(); //获取当前页面的webview对象
		//    currentWebview.setStyle({ popGesture: 'none' });
		// // #endif
		// },
		onPullDownRefresh() {
		  this.info=''
		  this.zhuangtai=''
           // 用户信息
           let info = {
           	"is_whole": "1"
           }
           this.$fn.request('user', 'GET', info).then(res => {
           	// console.log(res.data.data,'用户信息')
           	if(res.data.code == 1){
				this.today = ''
				this.info=[]
				setTimeout(()=>{
					this.info = res.data.data
					this.meirishouyi()
					uni.setStorageSync('user_info', res.data.data)
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
					this.info=uni.getStorageSync('user_info')
					let z = this.info.is_real_name
					if (z == 0) {
						this.zhuangtai = '未实名'
					} else if (z == 1) {
						this.zhuangtai = '提交申请'
					} else if (z == 2) {
						this.zhuangtai = '已实名'
					} else if (z == 3) {
						this.zhuangtai = '拒绝申请'
					}
				},1000)
				console.log(this.info)
			}
           })
		},
		onBackPress(event) {
			if (this.out == 0) {
				this.out++

				this.$refs.success.showTips({
					msg: '再按一次退出程序',
					duration: 2000
				})
			} else if (this.out >= 1) {
				plus.runtime.quit();
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
			this.$store.commit('pageOutfn', 1) // 控制重复点击参数
			// 用户信息
			let info = {
				"is_whole": "1"
			}
			this.$fn.request('user', 'GET', info).then(res => {
				// console.log(res.data.data,'用户信息')
				uni.setStorageSync('user_info', res.data.data)
				this.info = res.data.data
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
			console.log(this.info.is_real_name, '用户状态')
			let z = this.info.is_real_name
			if (z == 0) {
				this.zhuangtai = '未实名'
			} else if (z == 1) {
				this.zhuangtai = '提交申请'
			} else if (z == 2) {
				this.zhuangtai = '已实名'
			} else if (z == 3) {
				this.zhuangtai = '拒绝申请'
			}
			//用户今日收益	
			let data = {
				"is_whole": "1"
			}
			this.$fn.request('income', "GET", data).then(res => {
				// console.log(res.data, '用户今日收益')
				this.today = res.data.data.today
			})

			//用户二维码
			this.$fn.request('qrcode', "GET", {}).then(res => {
				// console.log(res.data.data.qrcode,'用户二维码')
			})
		},
		methods: {
		   meirishouyi(){
			   let data = {
			   	"is_whole": "1"
			   }
			   this.$fn.request('income', "GET", data).then(res => {
			   	// console.log(res.data, '用户今日收益')
			   	this.today = res.data.data.today
			   })
		   },
			shousuo() {
				this.shousuoType = !this.shousuoType
			},
			go(name, index) {
				if (name == 'guanwnag') {
					uni.navigateTo({
						url: '/pages/webview/webview?url=http://gw.tzhreefvg.top/'
					})
					return
				}
        if(name == 'revisePassword'){
					console.log('999')
				uni.navigateTo({
					url:'/pages/revisePassword/revisePassword?type=1'
				})
				 return	
				}else if(name == 'twithdrawal'){
          // 这个是个人提现的进入
          uni.navigateTo({
          	url: `/pages/${name}/${name}?type=1`
          })
        }else{
					uni.navigateTo({
						url: `/pages/${name}/${name}`
					})
				}


			},
			// 三个票详情入口
			goDetails(i) {
				if (i == 1) {
					uni.navigateTo({
						url: '/pages/tanhui/tanhuiDetails'
					})
				} else if (i == 2) {
					uni.navigateTo({
						url: '/pages/tanpiao/tanpiaoDetails'
					})
				} else {
					uni.navigateTo({
						url: '/pages/lvbi/lvbiDetails'
					})
				}
			},
			queding() {
				this.show = false
			},
			goIndex() {
				uni.navigateTo({
					url: '/pages/webview/webview?url=http://gw.tzhreefvg.top/'
				})
				//  // #ifdef APP-PLUS
				// uni.navigateTo({
				//   url: '/pages/webview/webview?url=http://gw.tzhreefvg.top/'
				// })
				// // #endif

				// // #ifdef H5
				// window.location = ('http://gw.tzhreefvg.top/')
				// // #endif

			}
		}
	}
</script>

<!-- <style lang="less" scoped src='./my.less'>

</style> -->

<style lang="less" scoped src='./new.less'>

</style>