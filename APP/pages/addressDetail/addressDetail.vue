<template>
	<view>
		   <!-- 这个是编辑地址 -->
		   <view class="item">
		   	<view> <airel-floatball /></view>
		   	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		   	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		   	<view class="left dis">
		   		收货人
		   	</view>
		   	<view class="right dis">
		   		<input type="text" v-model="user_name">
		   	</view>
		   </view>
		   
		   <view class="item">
		   	<view class="left dis">
		   		手机号码
		   	</view>
		   	<view class="right dis">
		   		<input type="text" v-model="phone" maxlength="11">
		   	</view>
		   </view>
		   
		   <view class="item" style="">
		   	<view class="left dis">
		   		所在地区
		   	</view>
		   	<view class="right dis" style="position: relative;">
		   
		   		<pickerAddress @change="change"
		   			style="background-color: #f0f0f0;width: 100%;height: 60%;border-radius: 20upx;" class="dis">
		   			<view>
		   			  {{diqu}}
		   			</view>
		   		</pickerAddress>
		   	</view>
		   </view>
		   
		   <!-- <view class="item" v-show="diqu==''?false:true">
		   	<view class="left dis">
		   
		   	</view>
		   	<view class="right dis" style="">
		   		{{diqu}}
		   	</view>
		   </view> -->
		   
		   <view class="item" style="margin-top: 20upx;">
		   	<view class="left dis">
		   		详细地址
		   	</view>
		   	<view class="right dis">
		   		<view class="uni-textarea"
		   			style="width: 100%;height: 150upx;background-color: #f0f0f0;border-radius: 20upx;overflow: hidden;">
		   			<textarea placeholder-style="color:#F76260" placeholder="" v-model="wenben" />
		   		</view>
		   
		   	</view>
		   </view>
		   
		   <view class="item">
		   	<view class="left dis" style="width: 50%;">
		   		设为默认收货地址
		   	</view>
		   	<view class="right dis" style="width: 50%;">
		   		<view class="pos dis">
		   			<u-switch v-model="value1" activeColor="#02AE71"></u-switch>
		   		</view>
		   	</view>
		   </view>
		   
		   <!-- <view class="bottom dis"> -->
		   <!-- <view class="in dis" @tap="Addaddress" style="">
		   		确认
		   	</view> -->
		   <view class="xinBtn dis" @tap="Addaddress">
		   	确认
		   </view>
		   <!-- </view> -->
		
		
		

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
				wenben: "", //详细地址
				value1: '', //滑动选项
				formatter: {},
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				suozaidiqu: '555',
				user_info: {},
				exit: {},
				phone: '',
				user_name: '',
				address: '',
				diqu: '',
				res: '',
				province: "", //四川省
				city: "", //成都市
				county: "", //成华区
				id: ""
			};
		},
		onLoad(options) {
			// 携带过来的修改地址

			this.user_info = uni.getStorageSync('user_info')
		},
		onShow() {

			this.res = uni.getStorageSync('exit')
			console.log(this.res)
			this.id = this.res.id
            
			this.user_name = this.res.username //用户名
			this.phone = this.res.phone //电话
			this.diqu = this.res.province + this.res.city + this.res.county //用于显示的连续地址
			this.wenben = this.res.address //详细地址
			this.province = this.res.province //省
			this.city = this.res.city //市
			this.county = this.res.county
			if (this.res.is_default == 1) {
				this.value1 = true
			} else {
				this.value1 = false
			}

		},
		methods: {
			change(e) {
				console.log(e.data)
				let res = e.data
				this.res = e.data
				this.diqu = res[0] +'/'+ res[1] +'/'+  res[2]
				this.province = res[0]
				this.city = res[1]
				this.county = res[2]
				 // this.wenben=res[0] + res[1] + res[2]
			},

			Addaddress() {
				// 手机号验证
				let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				console.log(reg_tel.test(this.phone))
				
				// 身份证验证
				let testsfz = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				
				if (this.user_name.length == 0) {
					this.$refs.error.showTips({
						msg: '请输入用户名',
						duration: 2000
					})
					return
				}
				if (this.phone.length !== 11) {
					this.$refs.error.showTips({
						msg: '手机号必须是11位',
						duration: 2000
					})
					return
				}else if(reg_tel.test(this.phone) == false){
					this.$refs.error.showTips({
					msg: '请输入正确的手机号',
					duration: 2000
						})
					return
				}


				// console.log(uni.getStorageSync('user_info'))
				const res = uni.getStorageSync('exit')
				// console.log(this.wenben)
				let defalutValue = ''
				if (this.value1 == true) {
					defalutValue = '1'
				} else {
					defalutValue = '0'
				}
				let data = {
					'address': this.wenben,
					'province': this.province,
					'city': this.city,
					'county': this.county,
					'user_name': this.user_name,
					'phone': this.phone,
					'aid': this.id,
					'default': defalutValue
				}


				this.$fn.request('edit_address', "POST", data).then(res => {
					console.log(res.data.msg, '地址')
					if (res.data.code == 1) {

						this.$refs.success.showTips({
							msg: '修改地址成功',
							duration: 2000
						})
						// setTimeout(()=>{
						// 	uni.navigateTo({
						// 		url:'/pages/address/address'
						// 	})
						// },500)
					} else {
						this.$refs.error.showTips({
							msg: res.data.data,
							duration: 2000
						})
					}
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