<template>
  <view>
	  
	 
	     <view>
	     	<airel-floatball  />
	     </view>
	      <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	     		 <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
	         <view class="box">
	           <view class="head-box">
	             <view class="picker-view" @tap="changeYear">
	               <view class="picker-p">
	                 {{dateText}}
	               </view>
	               <view class="down-img">
	                 <image src="../../static/common/down.png" mode="widthFix"></image>
	               </view>
	             </view>
	             <view class="head-content">
	               <view class="head-title">
	                 碳票总数
	               </view>
	               <view class="price">{{priceTotal}}</view>
	             </view>
	           </view>
	     
	           
	           <view class="" style="margin-top: 20upx;">
	             <scroll-list ref="list" :option="option" @load="load" @refresh="refresh">
	               <uni-card :title="item.mark" :extra="item.money+''" v-for="(item,index) in tableData" :key="index">
	                 <text class="uni-body">{{item.create_time}}</text>
	               </uni-card>
	             </scroll-list>
	           </view>
	           <template>
	             <view>
	               <u-datetime-picker 
                 :show="show" 
                 v-model="value1" 
                 mode="year-month" 
                 :minDate="startDate"
                 :maxDate="nowDate"
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
  let defaultOption = {
    page: 1, // 分页
    size: 10, // 分页大小
    auto: false, // 自动加载
    height: null, // 组件高度
    disabled: false, // 禁用
    background: '', // 背景颜色属性
    emptyImage: '', // 空数据提示图片
    offsetBottom: 0, // 底部高度补偿
    pullDownSpeed: 0.5, // 下拉速率
    lowerThreshold: 40, // 距离底部上拉加载距离
    refresherThreshold: 80, // 距离顶部下拉刷新距离
    refreshDelayed: 800, // 刷新延迟
    refreshFinishDelayed: 800, // 刷新完成后的延迟
    safeArea: false, // 是否开启安全区域适配
    emptyTextColor: '#82848a', // 空提示文字颜色
    loadTextColor: '#82848a', // 上拉加载文字颜色
    loadIconColor: '#82848a', // 上拉加载图标颜色
    refresherTextColor: '#82848a', // 下拉刷新文字颜色
    refresherIconColor: '#82848a', // 下拉刷新图标颜色
    emptyText: '暂无列表~', // 空数据提示文字
    loadingText: '正在加载中~', // 加载中文字
    loadFailText: '加载失败啦~', // 加载失败文字
    noMoreText: '没有更多啦~', // 没有更多文字
    refreshingText: '正在刷新~', // 正在刷新文字
    refreshFailText: '刷新失败~', // 刷新失败文字
    refreshSuccessText: '刷新成功~', // 刷新成功文字
    pulldownText: '下拉刷新~', // 下拉中的文字
    pulldownFinishText: '松开刷新~' // 下拉完成的文字
  }
  let timestamp = new Date('2018-08-01 00:00:00').getTime();
  export default {
    data() {
      return {
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
        option: defaultOption,
        nowDate:'', //当前月作为可选的最后一月
        startDate:timestamp, //开始时间限制
      };
    },
    onLoad() {
      this.init()
    },
    // onReady() {
    // 	// 微信小程序需要用此写法
    // 	this.$refs.datetimePicker.setFormatter(this.formatter)
    // },
    watch: {
      dateText(newVal, oldVal) {
        // 通过监听页码选择变化发起请求
        //提现记录接口
        this.pageCurrent = 1
        this.total = 0
        this.tableData = []
        this.load('1')
      }
    },
    methods: {
      changeYear() {
        this.show = true
      },
      // 初始化页面，默认展示本月数据
      init() {
        let date = new Date()
        let month = date.getMonth() + 1 > 10 ? (date.getMonth() + 1) + '' : '0' + (date.getMonth() + 1)
        let year = date.getFullYear()
        this.dateText = year + '-' + month
        this.nowDate = date.getTime()
      },
      // 获取数据
      async getData(params) {
        let data = await this.$fn.request('log/list', "GET", params).then(res => {
          let list = null
          list = res.data.data
          return list
        })
        return data
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
      },
      // 加载数据
      async load(page) {
        let list = []; //用于暂存列表数据
        let data = null;  //请求获得的数据
        let params = {
          'page': '1',
          'limit': "10",
          'type': '3',
          // 'time':"2023-04"
        }
        params.time = this.dateText
        params.page = page
        params.limit = this.pageSize
        // debugger
        let promiseObj = await this.getData(params).then(res=> {
          data = res
        })
        for(let item of Object.keys(data.data)) {
          if(item == 'count_money') {
            this.priceTotal = data.data[item]
			console.log(this.priceTotal)
          }else {
            list.push(data.data[item])
          }
        }
        this.pageCurrent = data.current_page
        this.total = data.total
        this.tableData = [...this.tableData, ...list];
        // 加载成功  参数对象{list: 当前列表,total: 数据总长度(后端查询的total)}
        this.$refs.list.loadSuccess({
          list: this.tableData,
          total: this.total
        });
        // 加载失败
        // this.$refs.list.loadFail()
      },
      // 刷新刷剧
      refresh(paging) {
        console.log(paging);
        this.pageCurrent = 1
        this.total = 0
        this.tableData = []
        this.load('1')
        this.$refs.list.refreshSuccess({
          list: this.tableData,
          total: this.total
        });
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

      .head-content {
        flex: 1;
        display: flex;
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
