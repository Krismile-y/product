<template>
	<view>
		<view class="bottom fix">
			<view class="item disc" @tap="go(0)">
				<image :src="list[0].src" mode="" v-show="$store.state.one"></image>
				<image src="../../static/common/one.png" mode="" v-show="!$store.state.one"></image>
				首页
			</view>
			<view class="item disc" @tap="go(1)">
				<image :src="list[1].src" mode="" v-show="$store.state.two"></image>
				<image src="../../static/common/two.png" mode="" v-show="!$store.state.two"></image>
				社区
			</view>

			<view class="item disc" @tap="go(99)">

				<view class="disc yuan">
					<!-- <image src="../../static/common/renminbi.png" mode=""></image>
					投资 -->
					<!-- <view class="y disc">
						<image src="../../static/common/renminbi.png" mode="" style="height: 40upx;"></image>
						投资
					</view> -->
					<view class="y">
						<image src="../../static/common/jinrong.jpg" mode=""></image>
					</view>
				</view>
			</view>
			<view class="item disc" @tap="go(2)">
				
				<image :src="list[2].src" mode="" v-show="$store.state.three"></image>
				<image src="../../static/common/three.png" mode="" v-show="!$store.state.three"></image>
				商城
			</view>
			<view class="item disc" @tap="go(3)">
				<image :src="list[3].src" mode="" v-show="$store.state.four"></image>
				<image src="../../static/common/four.png" mode="" v-show="!$store.state.four"></image>
				我的
			</view>
		</view>
		
		<!-- 按钮 -->
		<view class="four" v-show="show">
			<view class="list ">
				<view class="items dis"  @tap="four(0)">按钮1</view>
				<view class="items dis" @tap="four(1)">按钮2</view>
				<view class="items dis" @tap="four(2)">按钮3</view>
				<!-- <view class="items dis" @tap="four(2)">按钮3</view>
				<view class="items dis" @tap="four(3)">按钮4</view>
				<view class="items dis" @tap="four(4)">金融</view> -->
			</view>
		</view>
		
	</view>
</template>

<script>
import { vShow } from "vue";
	export default {
		name: "bottom",
		props:{
			now:{
				type:Object,
			}
		},
		data() {
			return {
				num:0,
                show:false,
				one:true,
				indexNum:true,
				communityNum:true,
				list:[
					{
						title:'首页',
						src:'../../static/common/yi.png'
					},
					{
						title:'社区',
						src:'../../static/common/er.png'
					},
					{
						title:'商城',
						src:'../../static/common/san.png'
					},
					{
						title:'我的',
						src:'../../static/common/si.png'
					},
				],
				
				
				active:[
					'../../static/common/one.png',
					'../../static/common/two.png',
					'../../static/common/three.png',
					'../../static/common/four.png',
				]
			};
		},
		methods: {
			four(index){
				
				if(index<4){
					uni.navigateTo({
						url: '/pages/invest/invest?id=' + index
					})
				}
				
				// else if(index==4){
				// 	uni.navigateTo({
				// 		url: '/pages/finance/finance'
				// 	})
				// }
			},
			bibao(){
				let zhuangtai=0
				return function(){
					return zhuangtai++
					console.log(zhuangtai)
				}
			},
			go(index) {
				
				
				if (index == 0) {
					if(uni.getStorageSync('name')=='index'){
						return
					}else{
						uni.setStorageSync('name','index')
						this.$store.state.one=false
						this.$store.state.two=true
						this.$store.state.three=true
						this.$store.state.four=true
						this.indexNum==false
						uni.navigateTo({
							url: '/pages/index/index'
						})
					}
					
					
					
				} else if (index == 1) {
					   
						if(uni.getStorageSync('name')=='community'){
							
							return
						}else{
							uni.setStorageSync('name','community')
							console.log(uni.getStorageSync('name'))
							this.$store.state.one=true
							this.$store.state.two=false
							this.$store.state.three=true
							this.$store.state.four=true
							
							uni.navigateTo({
								url: '/pages/community/community'
							})
						}
					
					
				} else if (index == 99) {
					
					// uni.navigateTo({
					// 	url: '/pages/invest/invest'
					// })
					this.show=!this.show
					uni.removeStorageSync('name')
				} else if (index == 2) {
					
					if(uni.getStorageSync('name')=='shop'){
						
						return
					}else{
						uni.setStorageSync('name','shop')
						this.$store.state.one=true
						this.$store.state.two=true
						this.$store.state.three=false
						this.$store.state.four=true
						uni.navigateTo({
							url: '/pages/shop/shop'
						})
					}
					
					
				}else if (index == 3) {
					if(uni.getStorageSync('name')=='my'){
						return
					}else{
						uni.setStorageSync('name','my')
						this.$store.state.one=true
						this.$store.state.two=true
						this.$store.state.three=true
						this.$store.state.four=false
						uni.navigateTo({
							url: '/pages/my/my'
						})
					}
					
					
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.four{
		width: 100%;
		height: 90upx;
		display: flex;
		position: fixed;
		bottom: 200upx;
		left: 0;
		.list{
			width: 70%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			// justify-content: space-around;
			.items{
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				// background-color: #54d27e;
				color: #fff;
				margin-left: 20upx;
				background-image: url('../../static/common/xiaoanniu.jpg');
				background-repeat: no-repeat;
				background-size: 100% 100%;
				
			}
		}
	}
	.bottom {
		width: 100%;
		height: 90upx;
		display: flex;
		background-color: #fff;
		padding: 10upx 0;
		.item {
			position: relative;
			z-index: 999999;
			flex: 1;
			height: 100%;
			font-size: 28upx;

			.yuan {
				width: 80%;
				height: 250px;
				border-radius: 50%;
				// background-color: greenyellow;

			}

			image {
				width: 30%;
				height: 50%;
				margin-bottom: 5upx;
			}

		}

		.y {
			width: 170upx;
			height: 170upx;
			border-radius: 50%;
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 0upx;
			z-index: 1;
           
			image {
				width: 170upx;
				height: 170upx;
				border-radius: 50%;
			}
		}
	}
</style>
