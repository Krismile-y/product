<template>
	<view style="padding-bottom: 220upx;padding-top: 70upx;">
		
		<view class="av">
					<view class="left" style="position: relative;">
					<!-- 	<view style="font-weight: 700;font-family: inherit;font-size: 42upx;">{{info.user_name}}</view> -->
						<view style="font-size: 42upx; font-weight: 600;display: flex;align-items: center;position: absolute;left: 0;top: 0;">
                         {{info.user_name}}
						 
						 </view>
						 <view class="chakan" @tap="chakan"
						 style=" padding: 10upx; background-color: greenyellow;color: #fff; font-size: 36upx;border-radius: 20upx;position: absolute;right: 120upx;top: 0;">
						 提现</view>
					</view>
					<view class="right dis">
						<image src="https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" mode=""></image>
					</view>
				</view>
				<view class="newTop ">
					<view style="font-weight: 700;font-size: 40upx;margin-bottom: 20upx;">团队收益</view>
				    <view style="font-size: 50upx;font-family: inherit;font-weight: 700;letter-spacing: 0upx;">￥1,000.20</view>
					<view style="margin-top: 60upx;font-size: 30upx;font-weight: 700;">我的推荐码</view>
					<view style="font-weight: 700;">{{info.id}}</view>
					
					<!--   -->
				</view>
		<!-- <view class="newTop ">
			<view>可提现：0.00</view>
		    <view>每日收益：0.00</view>
			<view>总收益：0.00</view>
			<view>绿币：0.00</view>
			<view>碳票：0.00</view>
			<view>积分：0.00</view>
		</view> -->
		
    <view class="team-box">
      <!-- <myGroup ref="myGroup" /> -->
      <view class="list" >
      	<view class="item" @tap="go('myGroup',0)">
      		<view class="left">团队详情</view>
      		<view class="right">></view>
      	</view>
      </view>
      <view class="list" >
      	<view class="item" @tap="go('myGroup',1)">
      		<view class="left">返佣记录</view>
      		<view class="right">></view>
      	</view>
      </view>
      <view class="overview">
        返佣记录概览
      </view>
      <view class="" style="margin-top: 10upx;">
      	<view class="item-box" v-for="(item,index) in tableData" :key="index">
          <!-- 图标 -->
      	  <view class="item-icon">
      	    <image :src="moneyColor? payImg: paymentImg" mode="widthFix"></image>
      	  </view>
          <!-- 中间内容 -->
          <view class="item-content">
            <view class="item-source">
              {{item.money_type_text}}
            </view>
            <view class="item-time">
              {{item.create_time}}
            </view>
          </view>
          <!-- 金额 -->
          <view class="item-money" :style="moneyColor? {color:'#54C869'}: {color:'#EF8080'}">
            {{item.money_amount}}
          </view>
      	</view>
      </view>
    </view>
		
		<bottom num='1'></bottom>
	</view>
</template>

<script>
  import payImg from '../../static/common/pay.png';
  import paymentImg from '../../static/common/payment.png';
	export default {
		data() {
			return {
				currentIndex:0,
        tableData: [], //表格数据
        showPagination: false, //总数据小于单页展示数据，不显示分页条
        // 每页数据量
        pageSize: 3,
        // 当前页
        pageCurrent: 1,
        // 数据总量
        total: 0,
				info:{},
				out:0,
        moneyColor: null,
        payImg,
        paymentImg,
			};
		},
		onBackPress(event) {
			if(this.out == 0){
				this.out++
				uni.showToast({
					duration:1000,
					title:'再按一次退出程序',
					icon:"none"
				})
			}else if(this.out>=1){
				if (plus.os.name.toLowerCase() === 'android') {
					 plus.runtime.quit();
				}
				uni.removeStorageSync('token')
			}
			
		    if (event.from === 'backbutton') {
		          this.overlayShow = true;
				
		            return true;
		        }else{		
					// return false
				}
		        
		  },
		onShow() {
			this.out=0
			this.info=uni.getStorageSync('user_info')
			if(uni.getStorageSync('name') == 'community'){
				this.$store.state.one=true
				this.$store.state.two=false
				this.$store.state.three=true
				this.$store.state.four=true
			}
		},
    onLoad() {
      this.getData()
    },
		methods:{
			bian(index){
				this.currentIndex=index
			},
			chakan(){
				uni.navigateTo({
					url:'/pages/shop/shop'
				})
				uni.setStorageSync('name','shop')
			},
      getData(page, time) {
      	let params = {
      		'page': '1',
      		'limit': "3",
      		// 'time':"2023-04"
      	}
      	// params.time = time
      	params.page = page
      	params.limit = this.pageSize
      	const that = this
      	this.$fn.request('/log/rebate', "GET", params).then(res => {
      		let data = res.data.data
      		that.priceTotal = data.count_money
      		that.tableData = data.data
      		console.log(data);
          that.tableData.forEach((item)=> {
            if(item.money_amount>=0){
              item.money_amount = `+￥${item.money_amount}`
              that.moneyColor = true
            }else {
              item.money_amount = `-￥${Math.abs(item.money_amount)}`
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
      go(name,currentIndex){
      	console.log(name)
      	uni.navigateTo({
      		url:`/pages/${name}/${name}?index=${currentIndex}`
      	})
      },
		}
	}
</script>

<style lang="less" src='./community.less' scoped>

</style>
