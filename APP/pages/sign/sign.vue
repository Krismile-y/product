<template>
	<view class="sign">
    <view class="">
      <airel-floatball  />
    </view>
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<view class="calendar-content" v-if="showCalendar">
			<view>
				<!-- 插入模式 -->
				<uni-calendar class="uni-calendar--hook" :selected="info.selected" :startDate="nowDate" :endDate="nowDate" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
			</view>
			<!-- <uni-section class="hideOnPc" title="弹出模式" type="line"></uni-section> -->
			<!-- <view class="example-body hideOnPc">
				<button class="calendar-button" type="button" @tap="open">打开日历</button>
			</view> -->
		</view>
		<view class="jifenminxi">
      <!-- 积分明细 -->
		  <view class="totaljifem">
        <!-- 总积分 -->
		    总积分:{{totaljifen}}
		  </view>
      <view class="jifen-table" @tap="gominxi">
        查看签到详情>>>
      </view>
		</view>
		
		<view class="bottom dis">
			<view class="in dis" @tap="go">
				使用积分
			</view>
		</view>
		
	</view>
</template>

<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
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
	export default {
		components: {},
		data() {
			return {
				showCalendar: false,
        dateObj: null, //日历点击获取的事件对象
        nowDate: null,
        dateList: [], //已签到日期列表
        totaljifen: 0,
        userInfo:{},
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
        dataList: [], //用于积分明细渲染
        // 每页数据量
        pageSize: 10,
        // 当前页
        pageCurrent: 1,
        // 数据总量
        total: 0,
        showPagination: false,  //总数据小于单页展示数据，不显示分页条
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
		},
    onLoad() {
      this.getDateList()
      this.initNowDay()
    },
		methods: {
      initNowDay() {
        // 获取当天日期
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        console.log(day);
        this.nowDate = year + '-' + month + '-' + day
      },
      gominxi() {
        uni.navigateTo({
          url:'/pages/jifenminxi/jifenminxi'
        })
      },
      go() {
        uni.setStorageSync('current','shop')
        this.$store.state.current = 'shop'
        uni.navigateTo({
          url:'/pages/shop/shop'
        })
      },
      // 获取用户信息，刷新总积分
      getuserMsg() {
        let params = {
          is_whole: 1
        }
        this.$fn.request('user', "GET", params).then(res => {
          console.log(res,'个人信息');
          this.userInfo = res.data.data
          this.totaljifen = this.userInfo.money_integral
          console.log(this.totaljifen);
        })
      },
      getDateList() {
        // 获取签到列表
        const that = this;
        this.$fn.request('/my_sign',"GET").then((res)=> {
          console.log(res,'签到列表');
          if(res.data.data.length > 0) {
            let data = res.data.data
            data.forEach((item,index) => {
              that.info.selected.push({
              	date: item,
              	info: '已签到'
              })
            })
          }
        })
      },
			open() {
				this.$refs.calendar.open()
			},
			close(){
				console.log('弹窗关闭');
			},
			change(e) {
				// 模拟动态打卡
        // this.dateObj = e
        this.signSubmit()
			},
			confirm(e) {
				console.log('confirm 返回:', e)
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
      signSubmit() {
        console.log(this.dateObj);
        if(this.dateObj) {
          this.info.selected.push({
          	date: this.nowDate,
          	info: '已签到'
          })
        }else {
          this.$fn.request('/sign',"GET").then((res)=> {
            if(res.data.code == 1) {
              // 接口成功
              this.getuserMsg()
              this.totaljifen = this.userInfo.money_integral
			  
			  this.$refs.success.showTips({
			      msg: '签到成功',
			      duration: 2000
			    })
			  this.info.selected.push({
			  	date: this.nowDate,
			  	info: '已签到'
			  })
              // uni.showToast({
              //   icon: 'success',
              //   title: '签到成功',
              //   success: ()=> {
              //     this.info.selected.push({
              //     	date: this.nowDate,
              //     	info: '已签到'
              //     })
              //   }
              // })
            } else {
				this.$refs.error.showTips({
				msg: res.data.msg,
				duration: 2000
					})
             
            }
          })
          
        }
      }
		}
	}
</script>

<style lang="less" src='./sign.less'>

</style>
