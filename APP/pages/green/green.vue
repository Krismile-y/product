<template>
	<view>
		
		
		<scroll-view scroll-x="true" style="width: 100%;height: 90upx;white-space: nowrap;margin-top: 50upx;">
			<view class="item " v-for="(item,index) in list" :key="index" @tap="bian(index,item.id)">
				<view class="boxs disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="box disc" @tap="go(item.id)" v-for="(item,index) in greenList" :key="index" v-show="currentIndex==0?true:false">
			<view class="shang">
				<image :src="item.img_path"  ></image>
				<view class="shangRight disc">
					<view class="biaoti">
						<view class="gr dis">标签内容</view>
						<view class="gDetail">
							{{item.title}}
						</view>
					</view>
					<view class="line"></view>
					
					<view class="detail" v-html="item.content">
						
					</view>
				</view>
			</view>
			
			<view class="title">{{item.title}}</view>
			
			<image :src="item.img_path" mode="" class="bigImage"></image>
			
			<view class="time">{{item.initiate_time}}</view>
		</view>
		
		<!-- <u-empty text="此分类暂时没有数据" mode="order" v-show="kong"></u-empty> -->
		
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
				greenList:[],// 绿色公益列表
				page:0,//当前页数
				juanzengjilu:[],//捐赠记录
				kong:false,
			};
		},
		onReachBottom(){
				console.log('已触底')
		    },
		
		onLoad() {
			let data ={
				
			}
			// 文章列表
			this.$fn.request('welfare/list','GET',data).then(res=>{
				console.log(res.data.data.data)
				this.greenList=res.data.data.data
			})
			
			// 捐献记录
			this.$fn.request('welfare/donate_log','GET',{}).then(res=>{
				console.log(res.data.data.total,'捐献记录')			
				this.juanxianjilu=res.data.data
				if(res.data.data.total == 0){
					this.kong=true
				}else{
					this.kong=false
				}
			})
		},
		methods:{
			bian(index){
				this.currentIndex = index
			},
			go(id){
				uni.navigateTo({
					url:'/pages/greenDetail/greenDetail?id=' + id
				})
			}
		}
	}
</script>

<style lang="less" scoped src='./green.less'>

</style>
