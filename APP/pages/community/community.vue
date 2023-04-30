<template>
	<view style="padding-bottom: 220upx;padding-top: 70upx;">
		
		<view class="av">
					<view class="left" style="">
						<view style="font-weight: 700;font-family: inherit;font-size: 42upx;">{{info.user_name}}</view>
						<view style="font-size: 42upx; font-weight: 600;display: flex;align-items: center;">我的积分：{{info.money_integral}} 

						 <view class="chakan" @tap="chakan"  style="padding: 10upx; background-color: greenyellow;color: #fff; font-size: 36upx;border-radius: 20upx;">查看</view>
						 </view>
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
      <myGroup />
      
    </view>
		
		<!--  -->
		<!-- <view class="three" style="margin-top: 60upx;">
			
			 <view class="one disc">
				 <view class="title">共计获得团队津贴</view>
				 <view class="num">0.00￥</view>
			 </view>
			 
			 <view class="two">
				 <view class="item disc">
					 <view class="title">共计直推人数</view>
					 <view class="num">0人</view>
				 </view>
				 <view class="item disc">
					 <view class="title">共计完成任务</view>
					 <view class="num">0个</view>
				 </view>
			 </view>
			 
		</view> -->
		
		<!--  -->
		<!-- <view class="titleCenter dis">我的推荐人:某某某</view> -->
		<!-- <view class="tits">
			<view class="title dis" @tap="bian(0)" :class="{color:currentIndex==0?true:false}">
				团队详细
			</view>
			<view class="title dis"@tap="bian(1)" :class="{color:currentIndex==1?true:false}">
				收益记录
			</view>
		</view>
		
		<view class="box">
			<view class="threes">
				<view class="threeItem dis">操作/时间</view>
				<view class="threeItem dis">投资金额</view>
				<view class="threeItem dis">2023记录</view>
			</view>
			<view class="" style="margin-top: -30upx;width: 100%;">
				<uni-section title=""  >
					<view class="example-body">
						<uni-combox :border="true" :candidates="candidates" placeholder="请选择日期"></uni-combox>
					</view>
				</uni-section>
			</view>
		</view> -->
		
		<bottom num='1'></bottom>
	</view>
</template>

<script>
  import myGroup from "../myGroup/myGroup.vue"
	export default {
    components: {myGroup},
		data() {
			return {
				currentIndex:0,
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				info:{},
				out:0,
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
			this.info=uni.getStorageSync('user_info')
			if(uni.getStorageSync('name') == 'community'){
				this.$store.state.one=true
				this.$store.state.two=false
				this.$store.state.three=true
				this.$store.state.four=true
			}
		},
		methods:{
			bian(index){
				this.currentIndex=index
			},
			chakan(){
				uni.navigateTo({
					url:'/pages/shop/shop'
				})
			}
		}
	}
</script>

<style lang="less" src='./community.less'>

</style>
