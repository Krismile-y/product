<template>
	<view>

		<view class="box">
      <view class="head-box">
        <view class="picker-view" @click="changeYear">
          <view class="picker-p">
            {{dateText}}
          </view>
          <view class="down-img">
            <image src="../../static/common/down.png" mode="widthFix"></image>
          </view>
        </view>
        <view class="head-content">
          <view class="head-title">
            返佣总金额
          </view>
          <view class="price">{{priceTotal}}￥</view>
        </view>
      </view>
      
      

			<view class="" style="margin-top: 20upx;">
        <view class="noneData" v-show="tableData.length==0">
          暂无数据
        </view>
				<uni-card :title="item.money_type_text" :extra="item.money_amount" v-for="(item,index) in tableData" :key="index">
          <text class="uni-body">{{item.create_time}}</text>
        </uni-card>
				<view class="uni-pagination-box" v-if="showPagination"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
			</view>

		<!-- 	<view class="daiding dis">
				<uni-load-more status="more" :content-text="contentText" />
			</view> -->
      <!-- 年月选择弹框 -->
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





		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: '2023年3月投资小计',
				page: '',  //页码
				tableData: [], //表格数据
				show: false,
				value1: Number(new Date()),
				dateText: '',
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
      this.init()
    },
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
      // 初始化页面，默认展示本月数据
      init() {
        let date = new Date()
        let month = date.getMonth()+1 > 10 ? (date.getMonth()+1) + '' : '0' + (date.getMonth()+1) 
        let year = date.getFullYear()
        this.dateText = year + '-' + month
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
			  this.$fn.request('/log/rebate',"GET",params).then(res=>{
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
		}
	};
</script>

<style lang="less">
	.box {
		width: 90%;
		margin: 30upx auto;
    .head-box {
      width: 100%;
      height: 160upx;
      border-radius: 40upx;
      border: 1px solid #ccc;
      box-shadow: #ccc 4upx 4upx 4upx 4upx;
      background-color: #eee;
      display: flex;
      .picker-view {
        width: 40%;
        box-sizing: border-box;
        height: 100%;
        padding: 0 30upx;
        display: flex;
        .picker-p {
          width: 90%;
          height: 100%;
          line-height: 160upx;
          font-size: 22px;
          font-weight: 600;
        }
        .down-img {
          flex: 1;
          display: grid;
          place-items: center;
          image {
            width: 100%;
          }
        }
      }
      .head-content{
        flex: 1;
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 30upx 20upx;
        .head-title {
          text-align: center;
          width: 100%;
          height: 1.5em;
          line-height: 1.5em;
        }
        .price {
          font-size: 20px;
          width: 100%;
          text-align: center;
        }
      }
    }
    .noneData {
      margin-top: 40upx;
      font-size: 18px;
      color: #ccc;
      width: 100%;
      text-align: center;
    }
    /deep/ .uni-card {
      margin: 30upx 0 !important;
      border-radius: 20upx;
    }
    
    /deep/ .uni-card__header-extra-text {
        font-size: 18px !important;
        color: #111 !important;
      }
  }
</style>
