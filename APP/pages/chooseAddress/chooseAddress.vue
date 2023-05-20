<template>
	<view class="address">
		<view><airel-floatball  /></view>
		<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 300upx);padding-bottom: 160upx;">
			<view class="item" v-for="(item,index) in list" :key="index"  :class="{color:currentIndex==index?true:false}">
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
			<!-- <view class="in dis" @tap="add" >
			   新增地址
			</view> -->
			<view class="xinBtn dis" @tap="add">
				新增地址
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
			    currentIndex:9999,
			};
		},
		onShow() {
			// this.currentIndex=uni.getStorageSync('addressIndex')
			
			this.$fn.request('my_address',"GET",{}).then(r=>{
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
				this.currentIndex=index
				// uni.setStorageSync('addressIndex',index)
				// uni.setStorageSync('address',item)
				console.log(item.id)
				uni.showToast({
					duration:500,
					title:'已选择地址'
				})
				setTimeout(()=>{
					uni.navigateTo({
						url:'/pages/shopDetail/shopDetail?id='+item.id
					})
				},500)
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

<style lang="less" src=''>
.address{
	width: 100%;
	height: 100vh;
	background-color: #f0f0f0;
}
.item{
	width: 100%;
	height: 160upx;
	// background-color: #fff;
	display: flex;
	position: relative;
	padding-top: 20upx;
	padding-bottom: 20upx;
	.pos{
		width: 60upx;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		image{
			width: 40upx;
			height: 40upx;
			margin-top: 10upx;
		}
	}
	.left{
		width: 30%;
		height: 100%;
		image{
			width: 90upx;
			height: 90upx;
			border-radius: 50%;
		}
	}
	.right{
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.title{
			display: flex;
			font-weight: 550;
			display: flex;
			align-items: center;
			.name{
				
			}
			.phone{
				margin-left: 20upx;
			}
			.moren{
				color: #4bc93e;
				border: 1upx solid #4bc93e;
				width: 70upx;
				font-size: 28upx;
				height: 30upx;
				margin-left: 20upx;
				padding-top: 10upx;
				padding-bottom: 10upx;
				border-radius: 10upx;
			}
		}
		.detail{
			color: #999;
			margin-top: 5upx;
			width: 88%;
			font-size: 28upx;
		}
	}
}
.color{
	background-color: #FFF;
}

.add{
	width: 110upx;
	height: 110upx;
	background-color: #4bc93e;
	color: #FFF;
	font-size: 28upx;
	position: fixed;
	top: 55%;
	right: 10upx;
	border-radius: 50%;
	.f{
		width: 70upx;
		height: 70upx;
		text-align: center;
	}
}

	
</style>
