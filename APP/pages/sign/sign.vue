<template>
	<view>
		<view class="calendar-content" v-if="showCalendar">
			<view>
				<!-- 插入模式 -->
				<uni-calendar class="uni-calendar--hook" :selected="info.selected" :startDate="nowDate" :endDate="nowDate" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
			</view>
			<!-- <uni-section class="hideOnPc" title="弹出模式" type="line"></uni-section> -->
			<!-- <view class="example-body hideOnPc">
				<button class="calendar-button" type="button" @click="open">打开日历</button>
			</view> -->
		</view>
		
		
		<view class="bottom dis">
			<view class="in dis" @click="signSubmit">
				立即签到
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
	export default {
		components: {},
		data() {
			return {
				showCalendar: false,
        dateObj: null, //日历点击获取的事件对象
        nowDate: null,
        dateList: [], //已签到日期列表
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				}
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
        this.dateObj = e
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
              uni.showToast({
                icon: 'success',
                title: '签到成功',
                success: ()=> {
                  this.info.selected.push({
                  	date: this.nowDate,
                  	info: '已签到'
                  })
                }
              })
            } else {
              uni.showToast({
                icon:'error',
                title: res.data.msg
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
