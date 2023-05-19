<template>
	<view class="myGroup-page-box">
    <airel-floatball  />
    <view class="myGroup-head">
      <view class="myGroup-head-title">
        我的团队
      </view>
      <view class="team-name">
        {{teamName}}
      </view>
    </view>
    
    <view class="team-box">
      <view class="teamLv">
        {{mblv}}
      </view>
      <view class="back" @tap="backTop()" v-if="lv!=1">
        <image src="../../static/myimg/back.png" mode=""></image>
      </view>
        <view class="team-content">
          <!-- <scroll-view scroll-y :style="{ height: viewHeight + 'px' }" @scrolltolower="loadMore"> -->
            <view class="team-content1">
              <view class="items" v-for="(item,index) in list" :key="index" @tap="chakan(item)">
                <view class="item-img">
                  <image :src="item.head_img==''?defaultHeadImg:item.head_img" mode=""></image>
                </view>
                <view class="item-name">
                  {{item.user_name}}
                </view>
                <view class="item-id">
                  ID:{{item.id}}
                </view>
              </view>
            </view>
          <!-- </scroll-view> -->
        </view>
      
    </view>
        <!--团队  -->
        <!-- <view class="u-page">
          <view class="people-item" v-for="(item,index) in last" @tap="chakan(item)">
            <image :src="item.head_img" mode=""></image>
            <view class="people-name">
              {{item.user_name}}
            </view>
          </view>
          
        </view> -->
        <!-- 	<view class="daiding dis">
          <uni-load-more status="more" :content-text="contentText" />
        </view> -->
  </view>
</template>

<script>
  import defaultHeadImg from "../../static/common/logo.png"
	export default {
		data() {
			return {
        userInfo: {
          user_name:'',
        },
				list: [], //团队列表
        lv: 1, //记录会员等级
        mblv: '一级团队',
        defaultHeadImg,
        below_agent_info: {}, //记录我的团队信息
        teamName: '',
        viewHeight: 420,   // scroll-view 的高度
        pageNo: 1,       // 当前页数
        pageSize: 12,    // 每页数据条数
        hasMore: true,    // 是否还有更多数据
        nowItem: {},
        currentPage: 1, //当前页
        lastPage: 0, //最后一页
        oldItem: {}, //记录上一级，用于返回按钮
        backTap: false, //判断是否点击了返回按钮
			};
		},
		onLoad(option) {
      this.userInfo =uni.getStorageSync('user_info')
      this.teamName = this.userInfo.user_name
      this.myGroup()
		},
    onReachBottom() {
      // 当前页不是最后一页，触底发送请求
      if(this.currentPage != this.lastPage) {
        this.chakan(this.nowItem)
      }else {
        uni.showToast({
          title:'没有更多了~',
          icon:"error"
        })
      }
      
    },
		onReady() {
      // 获取 scroll-view 的高度
      const query = uni.createSelectorQuery().in(this);
      query.select('.uni-scroll-view').boundingClientRect((res) => {
        console.log(res);
        // this.viewHeight = res.height;
      }).exec();
    },
		methods: {
			chakan(item){
        // 我的团队查询下一级信息
				console.log(item)
        if(this.lv>3) {
          return
        }
        // 记录第一层下钻,用于返回3返2
        if(this.lv == 1) {
          this.oldItem = item
        }
        if(item.id != this.nowItem.id) {
          this.pageNo = 1
          this.list = []
          // 点击返回，lv重置过了不用++
          if(!this.backTap) {
            this.lv++
          }
          
        }
        this.memberLv()
        this.nowItem = item
				let data = {
					"uid": item.id,
					"page": this.pageNo,
					"limit": this.pageSize
				}
        this.teamName = item.user_name
				this.$fn.request('user_list_team', "GET", data).then(res => {
					console.log(res.data.data, '我的团队列表')
          //记录当前页和最后一页
          this.currentPage = res.data.data.current_page
          this.lastPage = res.data.data.last_page 
					let newList = res.data.data.data
					// console.log(res.data.data)
					this.list=[...this.list,...newList]
          this.pageNo++
          // 重置返回按钮
          this.backTap = false
				})
			},
      // 返回上一级
      backTop() {
        if(this.lv == 2) {
          // 二级返回一级
          this.lv = 1
          this.backTap = true
          this.chakan(this.below_agent_info)
        }else if(this.lv == 3){
          // 三级返回二级
          this.lv = 2
          this.backTap = true
          this.chakan(this.oldItem)
        }
      },
			myGroup(){
				let info=uni.getStorageSync('user_info')
				let data = {
					"lv": this.lv,
					"page": '1',
					"limit": "10"
				}
				this.$fn.request('user_team', "GET", data).then(res => {
					console.log(res, '我的团队信息')
					// this.list=res.data.data.data
					// this.agent_info = res.data.data.agent_info,
					this.below_agent_info = res.data.data.below_agent_info
          this.nowItem = res.data.data.below_agent_info
          this.chakan(this.below_agent_info)
				})
			},
      memberLv() {
        if(this.lv == 1) {
          this.mblv = '一级团队'
        }else if (this.lv == 2) {
          this.mblv = '二级团队'
        }else {
          this.mblv = '三级团队'
        }
      },
      loadMore() {
        if (!this.hasMore) {
          // 如果没有更多数据了，就不再加载
          return;
        }
        // console.log('我到底部了');
        // 如果滚动到底部了，就加载下一页数据
        // this.loadPageData();
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