<template>
	<view class="myGroup-page-box">
    <backgroundPage :title="title">
      <view class="myGroup-page">
        <view class="tits">
          <view class="title dis" @tap="bian(0)" :class="{color:false}">
            {{`团队详情(${mblv})`}}
          </view>
        </view>

        <!--团队  -->
        <view class="u-page">
          <view class="people-item" v-for="(item,index) in last" @tap="chakan(item)">
            <image :src="item.head_img" mode=""></image>
            <view class="people-name">
              {{item.user_name}}
            </view>
          </view>
          
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
    </backgroundPage>
  </view>
</template>

<script>
  import backgroundPage from "../../components/background-page/background.vue";
	export default {
    components: {backgroundPage},
		data() {
			return {
				lv:1,//当前等级
        mblv: '一级会员',
        title: '我的团队',
				agent_info: [], //我的推荐人
				below_agent_info: [],
        userInfo: {},
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
		onLoad(option) {
      this.userInfo =uni.getStorageSync('user_info')
      this.title = `<view class="wdtjm">我的团队</view><br />
          <view class="numberCode">${this.userInfo.user_name}</view>`
      console.log(this.userInfo,'userInfo');
      this.chakan(this.userInfo)
      if(option.index) {
        this.currentIndex = option.index
      } else {
        console.log(option.index,' console.log(option.index);');
      }
		},
		
		methods: {
			chakan(item){
				console.log(item)
        if(this.lv>3) {
          return
        }
        this.memberLv()
				let data = {
					"uid": item.id,
					"page": '1',
					"limit": "10"
				}
				this.$fn.request('user_list_team', "GET", data).then(res => {
					// console.log(res.data.data, '我的团队信息')
					
					// console.log(res.data.data)
					this.last=res.data.data.data
          this.lv++
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
					"uid": this.lv,
					"page": '1',
					"limit": "10"
				}
				this.$fn.request('user_team', "GET", data).then(res => {
					console.log(res.data.data.agent_info, '我的团队信息')
					this.last=res.data.data.data
					this.agent_info = res.data.data.agent_info,
					this.below_agent_info = res.data.data.below_agent_info
				})
			},
      memberLv() {
        if(this.lv == 1) {
          this.mblv = '一级会员'
        }else if (this.lv == 2) {
          this.mblv = '二级会员'
        }else {
          this.mblv = '三级会员'
        }
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
.myGroup-page {
  width: 100%;
  height: 100%;
}


</style>