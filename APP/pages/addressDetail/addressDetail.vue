<template>
	<view>
		<view class="item">
			<view class="left dis">
				收货人
			</view>
			<view class="right dis">
				<input type="text">
			</view>
		</view>

		<view class="item">
			<view class="left dis">
				手机号码
			</view>
			<view class="right dis">
				<input type="text">
			</view>
		</view>

		<view class="item">
			<view class="left dis">
				所在地区
			</view>
			<view class="right dis" style="position: relative;">
				
				<pickerAddress @change="change"style="background-color: #f0f0f0;width: 50%;height: 60%;border-radius: 20upx;" class="dis">
				选择地点
				</pickerAddress>
			</view>
		</view>

		<view class="item" style="margin-top: 20upx;">
			<view class="left dis">
				详细地址
			</view>
			<view class="right dis">
				<u--textarea v-model="wenben" placeholder="请输入内容" style="border-radius: 20upx;"></u--textarea>

			</view>
		</view>

		<view class="item">
			<view class="left dis" style="width: 50%;">
				设为默认收货地址
			</view>
			<view class="right dis" style="width: 50%;">
				<view class="pos dis">
					<u-switch v-model="value1" activeColor="#5ac725"></u-switch>
				</view>
			</view>
		</view>

		<view class="bottom dis">
			<view class="in dis" @tap="add" style="">
				确认
			</view>
		</view>

	</view>
</template>

<script>
	import pickerAddress from '@/uni_modules/hu-pickerAddress/components/hu-pickerAddress/hu-pickerAddress.vue'
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				wenben: "",
				value1: "", //滑动选项
				formatter: {},
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				suozaidiqu: '555',
				user_info:{}
			};
		},
		onLoad(options) {
			// 携带过来的修改地址
			console.log(uni.getStorageSync('exit'))
			
			// this.address()
			this.user_info=uni.getStorageSync('user_info')
		},
		methods: {
			change(e) {
				console.log(e.data)
				let res = e.data
				this.wenben = res[0] + res[1] + res[2]

			},
			
			address(){
				// console.log(uni.getStorageSync('user_info'))
				let data = {
					'address': "成华大道",
					'province': "四川省",
					'city': "成都市",
					'county': "成华区",
					'user_name': uni.getStorageSync('user_info').user_name,
					'phone': uni.getStorageSync('user_info').phone,
				}
				this.$fn.request('address', "POST", data).then(res => {
					console.log(res, '地址')
				})
			}
		}
	}
</script>

<style lang="less">
	.item {
		width: 95%;
		height: 140upx;
		margin: 0 auto;
		display: flex;

		.left {
			width: 30%;
			height: 100%;
			font-size: 34upx;
			font-weight: 560;
		}

		.right {
			width: 70%;
			height: 100%;
			position: relative;

			.pos {
				width: 100upx;
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;
			}

			input {
				width: 100%;
				height: 60%;
				background-color: #f0f0f0;
				border-radius: 20upx;
			}
		}
	}
</style>