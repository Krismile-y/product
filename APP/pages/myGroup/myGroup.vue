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
    <view class="u-page" v-show="currentIndex==0?true:false && fanyongShow">
      <!-- <view class="team-ps">
        --点击下方人员可查看他的下级--
      </view> -->
      <u-list>
        <u-list-item
          v-for="(item, index) in last"
          :key="index"
        >
          <u-cell :title="`${item.user_name} ${item.phone}\n一级代理`" @tap='chakan(item)'>
            <u-avatar
              slot="icon"
              shape="square"
              size="35"
              :src="item.url"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
          </u-cell>
        </u-list-item>
      </u-list>
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
        urls: [
          'https://cdn.uviewui.com/uview/album/1.jpg',
          'https://cdn.uviewui.com/uview/album/2.jpg',
          'https://cdn.uviewui.com/uview/album/3.jpg',
          'https://cdn.uviewui.com/uview/album/4.jpg',
          'https://cdn.uviewui.com/uview/album/5.jpg',
          'https://cdn.uviewui.com/uview/album/6.jpg',
          'https://cdn.uviewui.com/uview/album/7.jpg',
          'https://cdn.uviewui.com/uview/album/8.jpg',
          'https://cdn.uviewui.com/uview/album/9.jpg',
          'https://cdn.uviewui.com/uview/album/10.jpg',
        ],
			};
		},
		onLoad(option) {
			this.myGroup()
      if(option.index) {
        this.currentIndex = option.index
      } else {
        console.log(option.index,' console.log(option.index);');
      }
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
					// console.log(res.data.data, '我的团队信息')
					
					// console.log(res.data.data)
					this.last=res.data.data.data
					console.log(this.last.length,'目标')
					if(this.last.length == 0){
						this.fanyongShow=false
						 // this.last=res.data.data.data
						// console.log(res.data.data.data)
						
					}
				})
				// console.log(this.lv)
				// this.myGroup(item.id)
				// console.log(item.id,'id')
			},
			myGroup(){
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
				  this.last.forEach((item)=> {
				    item.url = this.urls[uni.$u.random(0, this.urls.length - 1)]
				  })
					this.agent_info = res.data.data.agent_info,
						this.below_agent_info = res.data.data.below_agent_info
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

<style lang="less" src='./myGroup.less'>

</style>