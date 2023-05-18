<template>
	<view class="address">
		
		<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 300upx);padding-bottom: 160upx;">
			<view class="item" v-for="(item,index) in list" :key="index"  :class="{color:item.is_default==1?true:false}">
				<view class="pos disc">
					<image src="../../static/common/xiugai.png" mode="" @tap="exit(item)"></image>
					<image src="../../static/common/del.png" mode="" @tap="del(item)"></image>
				</view>
				<view class="left dis" @tap="itemtap(item,index)">
					<image
						src="../../common/user.webp"
						mode=""></image>
				</view>
				<view class="right" @tap="itemtap(item,index)">
					<view class="title">
						<view class="name">{{item.username}}</view>
						<view class="phone">{{item.phone}}</view>
						<view class="moren dis" v-show="item.is_default==1?true:false">默认</view>
					</view>
					<view class="detail">
						{{item.province}}{{item.city}}{{item.county}}{{item.address}}
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- <view class="add dis">
			<view class="f dis">添加地址</view>
		</view> -->
		
		<view class="bottom dis">
			<view class="in dis" @tap="add" >
			   添加地址
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
			    currentIndex:"",
			};
		},
		onBackPress(event) {
		
		// 	if (event.from === 'backbutton') {
				
		
		// 		return true;
		// 	} else {
		// 		// return false
		// 	}
		
		},
		onShow() {
			this.currentIndex=uni.getStorageSync('addressIndex')
			
			this.$fn.request('my_address',"POST",{}).then(r=>{
				console.log(r.data.data,'地址')	
				this.list=r.data.data
				
			})
		},
		methods:{
			add(){//新增地址
				uni.navigateTo({
					url:'/pages/newAddredd/newAddredd'
				})
			},
			itemtap(item,index){
				// this.currentIndex=index
				// uni.setStorageSync('addressIndex',index)
				// uni.setStorageSync('address',item)
				console.log(item.id)
				// uni.showToast({
				// 	duration:500,
				// 	title:'已选择地址'
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
						uni.showToast({
							duration:1000,
							icon:'success',
							title:'删除地址成功'
						})
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
