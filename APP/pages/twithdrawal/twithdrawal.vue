<template>
	<view>

		<view class="box">
			<view class="show disc">
				<view class="price">{{priceTotal}}￥</view>
				<view class="title">共计项目投资金额</view>
			</view>
      <view class="picker-view" @click="changeYear">
        {{dateText}}
      </view>
			<<!-- view class="three">
				<view class="threeItem dis">操作/时间</view>
				<view class="threeItem dis">投资金额</view>
			</view> -->
      
			<view class="" style="margin-top: -30upx;">
        <uni-table ref="table" border stripe emptyText="暂无更多数据" >
        	<!-- 表头行 -->
        	<uni-tr>
        		<uni-th align="center">操作/时间</uni-th>
        		<uni-th align="center">投资金额</uni-th>
        	</uni-tr>
        	<!-- 表格数据行 -->
        	<uni-tr v-for="(item,index) in tableData" :key="index">
        		<uni-td align="center">{{item.create_time}}</uni-td>
        		<uni-td align="center">{{item.money}}</uni-td>
        	</uni-tr>
        </uni-table>
        <view class="uni-pagination-box" v-if="showPagination"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
			</view>
      <template>
        <view>
          <u-datetime-picker
            :show="show"
            v-model="value1"
            mode="year-month"
            @confirm="pickerConfirm"
            @close="pickerClose"
            @cancel="pickerCancel"
          ></u-datetime-picker>
        </view>
      </template>

		<!-- 	<view class="daiding dis">
				<uni-load-more status="more" :content-text="contentText" />
			</view> -->






		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: '2023年3月投资小计',
				candidates: ['2023-02-01', '2', '3', '4', '5', '6', '7'],
				contentText: {
          contentdown: '查看更多',
          contentrefresh: '加载中',
          contentnomore: '没有更多'
        },
        page: '',  //页码
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
        showPagination: false,  //总数据小于单页展示数据，不显示分页条
			};
		},
		onLoad() {
			
		},
    // onReady() {
    // 	// 微信小程序需要用此写法
    // 	this.$refs.datetimePicker.setFormatter(this.formatter)
    // },
    watch: {
      dateText(newVal,oldVal) {
        // 通过监听页码选择变化发起请求
        //提现记录接口
        this.pageCurrent = 1
        this.total = 0
        this.getData('1',newVal)
      }
    },
		methods: {
      changeYear() {
        this.show = true
      },
      // 获取数据
      getData(page,time) {
        let params={
        	'page': '1',
        	'limit':"10",
        	// 'time':"2023-04"
        }
        params.time = time
        params.page = page
        params.limit = this.pageSize
        const that = this
        this.$fn.request('log/withdrawal',"GET",params).then(res=>{
          let data = res.data.data
          that.priceTotal = data.count_money
          that.tableData = data.data
          console.log(data);
          that.total = data.total
          // 判断分页条是否展示
          if(that.total <= that.pageSize) {
            that.showPagination = false
          }else {
            that.showPagination = true
          }
        })
      },
      // 分页触发
        change(e) {
          // this.selectedIndexs.length = 0
          this.$refs.table.clearSelection()
          this.getData(e.current,this.dateText)
        },
      // 年份选择确认
      pickerConfirm(e) {
        // 更改展示的年月
        let date = new Date(e.value)
        console.log(date)
        let month = date.getMonth()+1 > 10 ? (date.getMonth()+1) + '' : '0' + (date.getMonth()+1) 
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
      // formatter(type, value) {
      //     if (type === 'year') {
      //         return `${value}年`
      //     }
      //     if (type === 'month') {
      //         return `${value}月`
      //     }
      //     if (type === 'day') {
      //         return `${value}日`
      //     }
      //     return value
      // },
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
</style>
