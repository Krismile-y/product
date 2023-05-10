<template>
	<view class="safe">
		<view class="item">
			<view class="left dis" >手机号</view>
			<view class="right dis">
				<input type="text" placeholder="请输入手机号" v-model="phone">
			</view>
		</view>
		
		<view class="item">
			<view class="left dis">身份证号</view>
			<view class="right dis">
				<input type="text" placeholder="请输入身份证号"  v-model="sfz">
			</view>
		</view>
			<view class="item">
			<view class="left dis" >新密码</view>
			<view class="right dis">
				<input type="text" placeholder="新密码" v-model="pwd">
			</view>
		</view>
		
		<view class="item">
			<view class="left dis" >验证码</view>
			<view class="right dis">
				<input type="text" placeholder="请输入验证码" v-model="captcha">
			</view>
			<view class="yanzheng" style="">
				<image :src="herf" mode="" style="width: 100%;height: 100%;" @tap='change()'></image>
			</view>
		</view>
		
		<view style="width: 100%;position: fixed;left: 0;bottom: 80upx;" class="dis">
			<view class="in dis" @tap="xiugai">
				确认
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			captcha:'',
			pwd:'',
			phone:"",
			sfz:"",
			herf:"",//验证码
			};
		},
		onShow(){
			this.herf=this.$url+'verify'
		},
		methods:{
			change(){//刷新验证码
			console.log(1)
			
				this.$fn.request('verify','GET',{}).then(res=>{
					let times = 0;
					times = new Date()
					this.herf=this.$url+'verify?time='+times
				})
			},
			go(index){
				
					uni.navigateTo({
						url:'/pages/revisePassword/revisePassword?type='+index
					})
				
			},
			xiugai(){
				let data={
					'phone':this.phone,
					'pwd':this.pwd,
					'captcha':this.captcha,
					'sfz':this.sfz
				}
				this.$fn.request('forget','POST',data).then(res=>{
					console.log(res.data.msg)
					if(res.data.code == 1){
						uni.showToast({
							title:res.data.msg,
							icon:'success',
							duration:1000
						})
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'error',
							duration:1000
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
.safe{
	width: 100%;
	height: 100vh;
	// background-color: #f1f1f1;
	.item{
		width: 95%;
		height: 100upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1upx solid #ccc;
		margin: 0 auto;
		
		position: relative;
		.left{
			width: 40%;
			height: 100%;
			display: flex;
			align-items: center;
			// border-right: 1upx solid #ccc;
		}
		.right{
			width: 60%;
			height: 100%;
			color: #999;
			input{
				width: 100%;
				height: 100%;
				padding-left: 20upx;
			}
		}
		.yanzheng{
			width: 30%;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}

.in{
		width: 95%;
		height: 130upx;
		margin-top: 30upx;
	// 	background-color: #4bc93e;
	// 	// background-image: linear-gradient(to left bottom, red 60%, green 10%) ;
 //  //       background-image: linear-gradient(to left bottom,'#abe345', '#4bc93e');
 
 //    background-image: linear-gradient(to right, rgba(85, 255, 0, 0.0), rgba(170, 255, 127, 1.0));
        background-image: url('../../static/common/btn.png');
        background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-size: 40upx;
		border-radius: 20upx;
	}
</style>
