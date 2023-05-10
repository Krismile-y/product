<template>
	<view class="address">
		
		<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 300upx);padding-bottom: 160upx;">
			<view class="item" v-for="(item,index) in list" :key="index"  :class="{color:currentIndex==index?true:false}">
				<view class="pos disc">
					<image src="../../static/common/xiugai.png" mode="" @tap="exit(item)"></image>
					<image src="../../static/common/del.png" mode="" @tap="del(item)"></image>
				</view>
				<view class="left dis" @tap="itemClick(item,index)">
					<image
						src="../../common/user.webp"
						mode=""></image>
				</view>
				<view class="right" @tap="itemClick(item,index)">
					<view class="title">
						<view class="name">{{item.username}}</view>
						<view class="phone">{{item.phone}}</view>
						<view class="moren dis" v-show="currentIndex==index?true:false">默认</view>
					</view>
					<view class="detail">
						{{item.province}}{{item.city}}{{item.county}}{{item.address}}
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom dis">
			<view class="in dis" @tap="add" >
				新增地址 +
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
			    currentIndex:""
			};
		},
		onShow() {
			this.currentIndex=uni.getStorageSync('addressIndex')
			
			this.$fn.request('my_address',"POST",{}).then(r=>{
				// console.log(r.data.data,'地址')	
				this.list=r.data.data
			})
		},
		methods:{
			add(){//新增地址
				uni.navigateTo({
					url:'/pages/newAddredd/newAddredd'
				})
			},
			itemClick(item,index){
				this.currentIndex=index
				uni.setStorageSync('addressIndex',index)
				uni.setStorageSync('address',item)
				// uni.showToast({
				// 	duration:500,
				// 	title:'已设为默认地址'
				// })
			},
			del(item){//删除地址
				let data={
					'aid':item.id.toString()
				}
				this.$fn.request('del_address',"POST",data).then(r=>{
					console.log(r,'删除地址')	
					// this.list=r.data.data
					this.$fn.request('my_address',"POST",{}).then(r=>{
						// console.log(r.data.data,'地址')	
						this.list=r.data.data
					})
				})
			},
			exit(item){//修改地址
				uni.setStorageSync('exit',item)
				uni.navigateTo({
					url:'/pages/addressDetail/addressDetail'
				})
			}
		}
	}
</script>

<style lang="less" src='./address.less'>

</style>
