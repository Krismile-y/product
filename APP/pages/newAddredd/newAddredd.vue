<template>
	<view>
    <view><airel-floatball  /></view>
	<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<view class="item">
			<view class="left dis">
				收货人
			</view>
			<view class="right dis">
				<input type="text" v-model="user_name">
			</view>
		</view>

		<view class="item">
			<view class="left dis" >
				手机号码
			</view>
			<view class="right dis">
				<input type="number" v-model="phone" maxlength="11">
			</view>
		</view>

		<view class="item">
			<view class="left dis">
				所在地区
			</view>
			<view class="right dis" style="position: relative;">
				
				<pickerAddress @change="change"style="background-color: #f0f0f0;width: 100%;height: 60%;border-radius: 20upx;" class="dis">
				<view style="color: #ccc;">点击选择</view>
				</pickerAddress>
			</view>
		</view>
		
		<view class="item" v-show="diqu==''?false:true">
			<view class="left dis">
				
			</view>
			<view class="right dis" style="position: relative;">
				{{diqu}}
			</view>
		</view>

		<view class="item" style="margin-top: 20upx;">
			<view class="left dis">
				详细地址
			</view>
			<view class="right dis">
				<view class="uni-textarea" style="width: 100%;height: 150upx;background-color: #f0f0f0;border-radius: 20upx;overflow: hidden;">
				<textarea placeholder-style="color:#F76260" placeholder=""  v-model="wenben" />
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
			<!-- <view class="in dis" @tap="address()" style="">
				确认
			</view> -->
			
			<view class="xinBtn dis" @tap="address">
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
				wenben: "",
				value1: false, //滑动选项
				formatter: {},
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				suozaidiqu: '555',
				user_info:{},
				diqu:'',//所在地区
				phone:"",
				user_name:""
			};
		},
		onLoad(options) {
			// 携带过来的修改地址
			// console.log(uni.getStorageSync('exit'))
			
			// this.address()
			// this.user_info=uni.getStorageSync('user_info')
		},
		methods: {
			change(e) {
				console.log(e.data)
				let res = e.data
				this.res=e.data
				 this.diqu = res[0] + res[1] + res[2]
				 // this.wenben=res[0] + res[1] + res[2]
			},
			
			address(){
				// 手机号验证
				let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				console.log(reg_tel.test(this.phone))
				
				// 身份证验证
				let testsfz = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				
				
				if(this.user_name.length==0){
					
					this.$refs.error.showTips({
					msg: '请输入用户名',
					duration: 2000
						})
					return
				}
				if(this.phone.length!==11){
					
					this.$refs.error.showTips({
					msg: '手机号码必须是11位',
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
				
				
				let defalutValue=''
				if(this.value1 == true){
					defalutValue='1'
				}else{
					defalutValue='0'
				}
				
				// console.log(uni.getStorageSync('user_info'))
				if(!this.res){
					
					this.$refs.error.showTips({
					msg: '请选择所在地区',
					duration: 2000
						})
					return
				}
				let data = {
					'address': this.wenben,
					'province': this.res[0],
					'city': this.res[1],
					'county': this.res[2],
					'user_name':this.user_name,
					'phone': this.phone,
					'default':defalutValue
				}
				this.$fn.request('address', "POST", data).then(res => {
					console.log(res.data, '地址')
					if(res.data.code == 1){
						
						this.$refs.success.showTips({
						    msg: '新增地址成功',
						    duration: 2000
						  })

						// setTimeout(()=>{
						// 	uni.navigateBack(1)
						// },1000)
					}else{
						this.$refs.error.showTips({
						msg: res.data.msg,
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