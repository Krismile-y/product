<template>
	<view class="revisePassword">
		
		
		<view  v-show="type==1?true:false">
			<view class="item">
				<view class="shimingLeft">状态</view>
				<view class="shimingRight">实名认证审核中...</view>
			</view>
		</view>
		
		<!--  -->
		<view v-show="type==2?true:false">
			<view class="item">
				<view class="left ">
					旧密码
				</view>
				<view class="right">
					<input type="text" placeholder="旧密码" v-model="jiu">
				</view>
			</view>
			
			<view class="item">
				<view class="left ">
					新密码
				</view>
				<view class="right">
					<input type="text" placeholder="新密码" v-model="xin">
				</view>
			</view>
			
			<view class="item">
				<view class="left ">
					确认密码
				</view>
				<view class="right">
					<input type="text" placeholder="确认密码" v-model="queren">
				</view>
			</view>
			
			<view class="btn dis" @tap="change">
				提交
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options.type)
			this.type=options.type
			
			
		},
		data() {
			return {
				  type:'',
				  xin:'',
				  jiu:"",
				  queren:''	  
			};
		},
		methods:{
			change(){
				// 修改密码接口
				let pwd={
					'past_pwd':this.jiu,
					'pwd':this.xin,
					'upwd':this.queren
				}
				this.$fn.request('pwd', 'POST',pwd).then(res => {
					console.log(res.data.code)
					if(res.data.code == 1){
						uni.showToast({
							duration:1000,
							title:res.data.msg,
							icon:'success'
						})
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}else{
						uni.showToast({
							duration:1000,
							title:res.data.msg,
							icon:'error'
						})
					}
				}) 
			}
		}
	}
</script>

<style lang="less">
.revisePassword{
	
}

.item{
	width: 100%;
	display: flex;
	height: 90upx;
	border-bottom: 1upx solid #e5e5e5;
	.shimingLeft{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 25upx;
	}
	.shimingRight{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: right;
		color: #999;
		padding-left: 25upx;
	}
	.left{
		width: 30%;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 25upx;
	}
	.right{
		width: 70%;
		height: 100%;
		input{
			width: 100%;
			height: 100%;
		}
	}
}
.btn{
	width: 90%;
	height: 90upx;
	background-color: red;
    color: #fff;
	margin: 30upx auto;
	border-radius: 10upx;
}
</style>
