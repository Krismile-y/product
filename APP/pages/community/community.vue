<template>
	<view style="padding-bottom: 0upx;padding-top: 70upx;background-color: #f7f8fa;min-height: 100vh;">
		
		
		   <view >
		   	<airel-floatball />
		   </view>
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   <view class="zongshouyi">
		   	<view class="one disc">
		   		<view style="color: #fff;">团队可提现金额</view>
		   		<view style="font-weight: 600;font-size: 42upx;color: #fff;" v-show="nightSHOW">{{totalmoney }}</view>
		   	</view>
		   	<view class="two disc">
		   		<view class="t" style="width: 100%;height: 60%;display: flex;">
		   			<view class="twoItem disc">
		   				<view>下级人数</view>
		   				<view>{{peopleData.subordinate}}</view>
		   			</view>
		   			<view class="twoItem disc">
		   				<view>已购人数</view>
		   				<view>{{peopleData.purchased}}</view>
		   			</view>
		   			<!-- <view class="twoItem disc">
		   				<view>返佣金额</view>
		   				<view>{{info.money_hire}}</view>
		   			</view> -->
		   		</view>
		   		<view class="last dis" style="margin-top: -30upx;" @tap="go('tuanduitixian')">
		   			团队提现
		   		</view>
		   	</view>
		   
		   </view>
		   
		   <!-- 活动标题 -->
		   <view class="title" style="margin-top: 30upx;">
		   	<view class="shu"></view>
		   	团队活动中心
		   </view>
		   <view class="huodongBox dis">
		   	<view class="huodongItem disc" v-for="item in huodongList" @tap="go(item.go)">
		   		<view class="yuan dis">
		   			<image :src="item.url" mode=""></image>
		   		</view>
		   		<view style="margin-top: 0upx;">{{item.name}}</view>
		   	</view>
		   </view>
		   
		   <!-- 团队津贴 -->
		   <view class="jintie" @tap="go('group')"></view>
		   
		   <view class="bottom-box">
		   	<helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
		   </view>
		  
		
		
	</view>
</template>

<script>
	import payImg from '../../static/common/pay.png';
	import paymentImg from '../../static/common/payment.png';
	import tabBarBulge from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-bulge";
	export default {
		components: {
			"helang-tab-bar-bulge": tabBarBulge,
		},
		data() {
			return {
				nightSHOW:true,
				getPeopleNumstate:false,
				totalmoney: 0, //团队总可提现金额
				currentIndex: 0,
				tableData: [], //表格数据
				showPagination: false, //总数据小于单页展示数据，不显示分页条
				// 每页数据量
				pageSize: 3,
				// 团队收益
				money_team: '',
				peopleData: {
					subordinate: '', //下级人数
					purchased: '', //购买人数
				},
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				info: {},
				out: 0,
				moneyColor: null,
				payImg,
				paymentImg,
				today: "",
				huodongList: [{
						name: '收益介绍',
						url: '../../static/c/shouyijieshao.png',
						go: 'shouyijieshao'
					},
					{
						name: '团队详情',
						url: '../../static/c/tuanduixiangqing.png',
						go: 'myGroup'
					},
					{
						name: '团队收益',
						url: '../../static/c/shouyijilu.png',
						go: 'fanyong'
					},
					{
						name: '提现记录',
						url: '../../static/c/tixian.png',
						go: 'twithdrawal',
					},

				]
			};
		},
		onPullDownRefresh() { //下拉转圈圈刷新
		   this.nightSHOW=false
			setTimeout(() => {
				this.getPeopleNum()
				this.zongTiXian()
				
				if(this.getPeopleNumstate == true){
					// this.$refs.success.showTips({
					// 	msg: '已刷新',
					// 	duration: 2000
					// })
				}
			}, 10)
		},
		onBackPress(event) {
			if (this.out == 0) {
				this.out++

				this.$refs.success.showTips({
					msg: '在按一次退出程序',
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
			this.getPeopleNum()
      this.getuserMsg()
      // this.getuserMsg().then(()=> {
        
      // })
			this.out = 0
			this.money_team = this.info.money_team
			if (uni.getStorageSync('name') == 'community') {
				this.$store.state.one = true
				this.$store.state.two = false
				this.$store.state.three = true
				this.$store.state.four = true
			}
		},
		onLoad() {
			this.getData()
           this.getuserMsg().then(()=> {
             
           })
		},
		methods: {
			bian(index) {
				this.currentIndex = index
			},
			chakan() {
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
				uni.setStorageSync('name', 'shop')
			},
      // 获取用户信息
      async getuserMsg() {
        let params = {
          is_whole: 1
        }
        await this.$fn.request('user', "GET", params).then(res => {
          console.log(res, '个人信息');
          this.info = res.data.data
          uni.setStorageSync('user_info', res.data.data)
          this.zongTiXian()
        })
      },
      // 团队可提现金额保留两位小数
      zongTiXian() {
        let newNum = parseFloat(this.info.money_team)+parseFloat(this.info.money_hire)
        this.totalmoney = newNum.toFixed(2)
      },
			// 下级人数接口
			getPeopleNum() {
				this.$fn.request('subordinate', "POST").then(res => {
					console.log(res);
					this.peopleData=[]
					if (res.data.code == 1) {				
						setTimeout(()=>{
							this.peopleData = res.data.data
							this.getPeopleNumstate=true
							this.nightSHOW=!false
							uni.hideNavigationBarLoading();
							uni.stopPullDownRefresh();
						},1000)
					}
				})
			},
			getData(page, time) {
				let params = {
					'page': '1',
					'limit': "3",
					// 'time':"2023-04"
				}
				// params.time = time
				params.page = 1
				params.limit = this.pageSize
				const that = this
				this.$fn.request('/log/rebate', "GET", params).then(res => {
					let data = res.data.data
					that.priceTotal = data.count_money
					that.tableData = data.data
					console.log(data);
					that.tableData.forEach((item) => {
						if (item.money_amount >= 0) {
							item.money_amount = `+${item.money_amount}`
							that.moneyColor = true
						} else {
							item.money_amount = `-${Math.abs(item.money_amount)}`
							that.moneyColor = false
						}
					})
					that.total = data.total
					// 判断分页条是否展示
					if (that.total <= that.pageSize) {
						that.showPagination = false
					} else {
						that.showPagination = true
					}
				})
			},
			// 分页触发
			change(e) {
				// this.selectedIndexs.length = 0
				this.$refs.table.clearSelection()
				this.getData(e.current, this.dateText)
			},
			go(name, currentIndex) {
				console.log(name)
        // 跳转到团队提现记录
        if(name == 'tuanduitixian') {
          if(this.info.is_real_name == 2) {
            // 已实名，跳转到团队提现页面
            uni.navigateTo({
            	url: `/pages/${name}/${name}?type=2`
            })
          }else {
            // 未实名或已提交
            this.$refs.error.showTips({
              msg: '请完成实名认证',
              duration: 2000
            })
          }
          
        }else if(name == 'twithdrawal') {
          // 跳转到团队提现记录
          uni.navigateTo({
          	url: `/pages/${name}/${name}?type=2`
          })
        }else {
          uni.navigateTo({
          	url: `/pages/${name}/${name}?index=${currentIndex}`
          })
        }
      }
		}
	}
</script>

<style lang="less" src='./community.less' scoped>

</style>