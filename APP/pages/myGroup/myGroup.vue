<template>
	<view>
		<view class="three">
			
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
			 
		</view>
		
		<!--  -->
		<view class="titleCenter dis">我的推荐人:{{agent_info.user_name}}</view>
		<view class="tits">
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
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			// 我的团队信息
			let data={
				"lv":'1',
				"page":"1",
				"limit":"10"
			}
			this.$fn.request('user_team',"GET",data).then(res=>{
				console.log(res.data.data,'我的团队信息')
				this.agent_info=res.data.data.agent_info,
				this.below_agent_info=res.data.data.below_agent_info
			})
				
		},
		data() {
			return {
				currentIndex:0,
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				agent_info:[],//我的推荐人
                below_agent_info:[],//我自己的信息，或者我下级的信息
			};
		},
		
		methods:{
			bian(index){
				this.currentIndex=index
			}
		}
	}
</script>

<style lang="less">
	.threes {
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
.box{
	width: 90%;
	margin:  auto;
}	
.titleCenter{
	width: 90%;
	margin: 0 auto;
	margin-top: 20upx;
}	
.three{
	width: 90%;
	height: 300upx;
	border-radius: 20upx;
	margin: 0 auto;
	color: #fff;
	font-weight: 600;
	background-image:url('https://img2.baidu.com/it/u=2153006192,2110258112&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500') ;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	.title{
		
	}
	.num{
		margin-top: 1upx;
	}
	.one{
		width: 100%;
		height: 150upx;		
	}
	.two{
		width: 100%;
		height: 150upx;	
		display: flex;
		.item{			
			width: 50%;
			height: 100%;
		}
	}
}
.tits{
		width: 80%;
		height: 55upx;
		display: flex;
		color: red;
		margin: 0 auto;
		border-radius: 10upx;
		border: 1upx solid red;
		margin-top: 20upx;
		.title{		
			width: 50%;
			height: 100%;
		}
	}
	.color{
		background-color: red;
		color: #fff;
	}
</style>
