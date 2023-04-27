<template>
	<view>

		<view class="tits">
			<view class="title dis" @tap="bian(0)" :class="{color:currentIndex==0?true:false}">
				团队详细
			</view>
			<view class="title dis" @tap="bian(1)" :class="{color:currentIndex==1?true:false}" v-show="fanyongShow">
				返佣记录
			</view>
		</view>

		<!--团队  -->
		<view class="box" v-show="currentIndex==0?true:false && fanyongShow">
			<view class="team-list" v-for="(item,index) in last" :key="index">
				<view class="team-card">
					<view class="image-box">
						<view class="img">

						</view>
						<!-- 人员信息 -->
						<view class="message">
							<view class="people-name">
								<!-- {{below_agent_info.user_name}} -->
								{{item.user_name}}
							</view>
							<view class="people-phone">
								<!-- {{below_agent_info.phone}} -->
								{{item.phone}}
							</view>
						</view>
					</view>
					<view class="level-box">
						会员等级：1级代理
					</view>
					<view class="screen-btn" @tap='chakan(item)'>
						查看
					</view>
				</view>
			</view>
		</view>


		<view class="box" v-show="currentIndex==1?true:false">
			<view class="show disc">
				<view class="price">{{priceTotal}}￥</view>
				<view class="title">返佣记录</view>
			</view>

			<view class="picker-view" @click="changeYear">
				{{dateText}}
			</view>

			<view class="" style="margin-top: 10upx;">
				<uni-table ref="table" border stripe emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center">来源</uni-th>
						<uni-th align="center">获得金额</uni-th>
						<uni-th align="center">操作/时间</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="(item,index) in tableData" :key="index">
						<uni-td align="center">{{item.money_type_text}}</uni-td>
						<uni-td align="center">{{item.money_amount}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>

					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box" v-if="showPagination"><uni-pagination show-icon :page-size="pageSize"
						:current="pageCurrent" :total="total" @change="change" /></view>
			</view>

			<!-- 	<view class="daiding dis">
				<uni-load-more status="more" :content-text="contentText" />
			</view> -->
			<!-- 年月选择弹框 -->
			<template>
				<view>
					<u-datetime-picker :show="show" v-model="value1" mode="year-month" @confirm="pickerConfirm"
						@close="pickerClose" @cancel="pickerCancel"></u-datetime-picker>
				</view>
			</template>





		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				lv:1,//当前等级
				agent_info: [], //我的推荐人
				below_agent_info: [],
				currentIndex: 0,
				nowShow: true,
				res: '2023年3月投资小计',
				page: '', //页码
				tableData: [], //表格数据
				show: false,
				value1: Number(new Date()),
				dateText: '请选择年月',
				priceTotal: '0.00',
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				showPagination: false, //总数据小于单页展示数据，不显示分页条
                last:[],//第一层
				fanyongShow:true,
			};
		},
		onLoad() {
			// 我的团队查询下一级信息
			let info=uni.getStorageSync('user_info')
			
			let data = {
				"uid": info.id,
				"page": this.lv,
				"limit": "10"
			}
			this.$fn.request('user_list_team', "GET", data).then(res => {
				console.log(res.data.data.data, '我的团队信息')
				this.last=res.data.data.data
				this.agent_info = res.data.data.agent_info,
					this.below_agent_info = res.data.data.below_agent_info
			})
		},
		watch: {
			dateText(newVal, oldVal) {
				// 通过监听页码选择变化发起请求
				//提现记录接口
				this.pageCurrent = 1
				this.total = 0
				this.getData('1', newVal)
			}
		},
		methods: {
			chakan(item){
				console.log(item)
				let data = {
					"uid": item.id,
					"page": '1',
					"limit": "10"
				}
				this.$fn.request('user_list_team', "GET", data).then(res => {
					console.log(res.data.data, '我的团队信息')
					
					console.log(res.data.data)
					this.last=res.data.data.data
					if(this.last.total==0){
						this.fanyongShow=false
						 // this.last=res.data.data.data
						console.log(res.data.data.data)
						
					}
				})
				// console.log(this.lv)
				// this.myGroup(item.id)
				// console.log(item.id,'id')
			},
			myGroup(id){
				let data = {
					"uid": id,
					"page": '1',
					"limit": "10"
				}
				this.$fn.request('user_list_team', "GET", data).then(res => {
					console.log(res.data.data, '我的团队信息')
					this.agent_info = res.data.data.agent_info,
					this.below_agent_info = res.data.data.below_agent_info
					console.log(res.data.data)
					this.last=res.data.data
					if(this.last.total==0){
						this.fanyongShow=false
						 // this.last=res.data.data.data
						console.log(res.data.data.data)
						
					}
				})
			},
			bian(index) {
				this.currentIndex = index
				if (index == 0) {
					// 我的团队信息
					
				}
			},
			changeYear() {
				this.show = true
			},
			// 获取数据
			getData(page, time) {
				let params = {
					'page': '1',
					'limit': "10",
					// 'time':"2023-04"
				}
				params.time = time
				params.page = page
				params.limit = this.pageSize
				const that = this
				this.$fn.request('/log/rebate', "GET", params).then(res => {
					let data = res.data.data
					that.priceTotal = data.count_money
					that.tableData = data.data
					console.log(data);
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
			// 年份选择确认
			pickerConfirm(e) {
				// 更改展示的年月
				let date = new Date(e.value)
				console.log(date)
				let month = date.getMonth() + 1 > 10 ? (date.getMonth() + 1) + '' : '0' + (date.getMonth() + 1)
				let year = date.getFullYear()
				this.dateText = year + '-' + month
				this.show = false
			},
			pickerClose() {
				this.show = false
			},
			pickerCancel() {
				this.show = false
			}
		}
	};
</script>

<style lang="less">
	.box {
		width: 90%;
		margin: 30upx auto;

		.daiding {
			width: 100%;
			height: 90upx;
			border: 1upx solid #cccccc;
			margin-top: 10upx;
		}

		.show {
			border: 1upx solid #cccccc;
			width: 100%;
			height: 180upx;
			font-size: 36upx;

			.title {
				margin-top: 10upx;
			}
		}

		.three {
			width: 100%;
			margin-top: 10upx;
			height: 40upx;
			display: flex;

			.threeItem {
				height: 100%;
				flex: 1;
				color: #999;
			}
		}

		.inputs {
			width: 100%;
			height: 60upx;
			position: relative;
			border: 1upx solid #cccccc;

			input {
				width: 80%;
				height: 100%;
				margin: 0 auto;
			}

			.pos {
				width: 100upx;
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;

				image {
					width: 20upx;
					height: 20upx;
				}
			}
		}

		.picker-view {
			width: 100%;
			height: 60upx;
			box-sizing: border-box;
			margin-top: 20upx;
			padding: 0 0 0 20upx;
			border: 1upx solid #cccccc;
			line-height: 60upx;
			color: #0c0c0c;
		}
	}

	.tits {
		width: 80%;
		height: 55upx;
		display: flex;
		color: red;
		margin: 0 auto;
		border-radius: 10upx;
		border: 1upx solid red;
		margin-top: 20upx;

		.title {
			width: 50%;
			height: 100%;
		}
	}

	.color {
		background-color: red;
		color: #fff;
	}

	.box {
		width: 90%;
		margin: auto;

		.team-card {
			width: 100%;
			height: 260upx;
			box-sizing: border-box;
			padding: 16upx;
			background-image: url('https://img2.baidu.com/it/u=2153006192,2110258112&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			margin: 20upx 0;
			border-radius: 25upx;
			display: flex;
			flex-direction: column;
			position: relative;

			.image-box {
				width: 100%;
				height: 140upx;
				display: flex;

				.img {
					width: 140upx;
					height: 140upx;
					padding: 0;
					margin: 0;
					background-image: url('https://tanzhonghefazhan.liuguofei.cn/static/avatar.png');
					background-repeat: no-repeat;
					background-size: 100% 100%;
				}

				.message {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					box-sizing: border-box;
					padding: 0 0 0 10upx;

					.people-name {
						color: #fff;
						font-size: 20px;
					}

					.people-phone {
						color: #fff;
					}
				}
			}

			.level-box {
				flex: 1;
				line-height: 88upx;
				font-size: 20px;
				color: #fff;
			}

			.screen-btn {
				position: absolute;
				bottom: 24upx;
				right: 18upx;
				box-sizing: border-box;
				padding: 6upx;
				color: #fff;
				background-color: red;
				border-radius: 5px;
			}
		}
	}
</style>