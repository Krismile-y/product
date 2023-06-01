<template>
	<view>
		<!-- 系统通知 -->
		
		
		   <view>
		   	 <airel-floatball  />
		   </view>
		   <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   	<view v-show="id==0?true:false">
		   		<view class="xitongtongzhi" v-for="(item,index) in xitongtongzhi" :key="index">
		   			<view class="title dis">
		   				系统通知
		   			</view>
		   			<view v-html="item.content" class="detail"></view>
		   			<view style="width: 100%;display: flex;align-items: center;justify-content: right;">
		   				{{item.create_time}}
		   			</view>
		   		</view>
		   	</view>
		   	
		   	<!-- 最新活动 -->
		   	<view v-show="id==1?true:false">
		   		<view class="xitongtongzhi" v-for="(item,index) in zuixinhuodong" :key="index">
		   			<view class="title dis">
		   				最新活动
		   			</view>
		   			<view class="detail" v-html="item.content">
		   				<!-- {{item.content}} -->
		   			</view>
		   			<view style="width: 100%;display: flex;align-items: center;justify-content: right;">
		   				{{item.create_time}}
		   			</view>
		   		</view>
		   		
		   	</view>
		   	
		   	<!-- 平台公告 -->
		   	<view v-show="id==2?true:false">
		   		<view class="xitongtongzhi" v-for="(item,index) in pingtaigonggao" :key="index">
		   			<view class="title dis">
		   				平台公告
		   			</view>
		   			<view class="detail" v-html="item.content">
		   				<!-- {{item.content}} -->
		   			</view>
		   			<view style="width: 100%;display: flex;align-items: center;justify-content: right;">
		   				{{item.create_time}}
		   			</view>
		   		</view>
		   	
		   	</view>
		   	
		   	<!-- 站内信 -->
		   	<view v-show="id==3?true:false">
		   		
		   		<view class="xitongtongzhi" v-for="(item,index) in zhanneixin" :key="index">
		   			<view class="title dis">
		   				站内信
		   			</view>
		   			<view class="detail" v-html="item.content">
		   				<!-- {{item.content}} -->
		   			</view>
		   			<view style="width: 100%;display: flex;align-items: center;justify-content: right;">
		   				{{item.create_time}}
		   			</view>
		   		</view>
		   		
		   	</view>
		 
		
   
		
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.id=options.id
			
		},
		onShow() {
			console.log('这里')
			this.$fn.request('notice','GET',{'type':'4'}).then(res=>{
				console.log(res.data.data,'系统通知')
				this.xitongtongzhi=res.data.data
			})
			
			this.$fn.request('notice','GET',{'type':'5'}).then(res=>{
				console.log(res.data.data,'最新活动')
				this.zuixinhuodong=res.data.data
			})
			
			this.$fn.request('notice','GET',{'type':'6'}).then(res=>{
				console.log(res.data.data,'平台公告')
				this.pingtaigonggao=res.data.data
			})
			
			this.$fn.request('notice','GET',{'type':'7'}).then(res=>{
				console.log(res.data.data,'站内信')
				this.zhanneixin=res.data.data
			})
		},
		data() {
			return {
				id:'',
				xitongtongzhi:[],
				zuixinhuodong:[],
				pingtaigonggao:[],
				zhanneixin:[]
			};
		}
	}
</script>

<style lang="less" src='./msgCenter.less'>

</style>
