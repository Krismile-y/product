<template>
	<view>
		
		
		<scroll-view scroll-x="true" style="width: 100%;height: 90upx;white-space: nowrap;margin-top: 50upx;">
			<view class="item " v-for="(item,index) in list" :key="index" @tap="bian(index,item.id)">
				<view class="boxs disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="box disc" @tap="go()">
			<view class="shang">
				<image src="../../static/common/gou.png"  ></image>
				<view class="shangRight disc">
					<view class="biaoti">
						<view class="gr dis">标签内容</view>
						<view class="gDetail">
							撒就代扣代缴睡觉睡觉代理商
						</view>
					</view>
					<view class="line"></view>
					
					<view class="detail">
						是是是是是是所所所所所所所所所所是是是少时诵诗书是是是是是是所所所所所所所所所所是是是少时诵诗书
					</view>
				</view>
			</view>
			
			<view class="title">是是是是是是所所所所所所所所所所是是是少时诵诗书是是是是是是所所所所所所所所</view>
			
			<image src="../../common/zuixinzhengce.png" mode="" class="bigImage"></image>
			
			<view class="time">发送时间：2022.12.22 12:1</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:'',
				list:[
					{type_name:"公益项目"},
					{type_name:"捐赠记录"}
				],
			};
		},
		onLoad() {
			let data ={
				
			}
			this.$fn.request('welfare/list','GET',data).then(res=>{
				console.log(res)
			})
		},
		methods:{
			bian(index){
				this.currentIndex = index
			},
			go(){
				uni.navigateTo({
					url:'/pages/greenDetail/greenDetail'
				})
			}
		}
	}
</script>

<style lang="less" scoped src='./green.less'>

</style>
