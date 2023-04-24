<template>
	<view class="safe">
		<view class="item">
			<view class="left dis" >手机号</view>
			<view class="right dis">
				<input type="text" placeholder="请输入手机号">
			</view>
		</view>
		
		<view class="item">
			<view class="left dis" >身份证号</view>
			<view class="right dis">
				<input type="text" placeholder="请输入身份证号">
			</view>
		</view>
		
		<view class="item">
			<view class="left dis" >新密码</view>
			<view class="right dis">
				<input type="text" placeholder="新密码">
			</view>
		</view>
		
		<view class="item">
			<view class="left dis" >验证码</view>
			<view class="right dis">
				<input type="text" placeholder="请输入验证码">
			</view>
			<view class="yanzheng"></view>
		</view>
		
		<view style="width: 100%;position: fixed;left: 0;bottom: 80upx;" class="dis">
			<view class="in dis">
				确认
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			};
		},
		methods:{
			go(index){
				
					uni.navigateTo({
						url:'/pages/revisePassword/revisePassword?type='+index
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
			background-color: rebeccapurple;
			position: absolute;
			right: 0;
			top: 0;
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
