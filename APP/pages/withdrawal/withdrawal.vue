<template>
	<view class="withdrawal">
		<view class="box">
			
			<view class="container">
				<view class="tits">
					<view class="title dis" @tap="bian(0)" :class="{color:currentIndex==0?true:false}">
						余额提现
					</view>
					<view class="title dis"@tap="bian(1)" :class="{color:currentIndex==1?true:false}">
						佣金提现
					</view>
				</view>
				<!--  -->
				
				<view class="item">
					<view class="left" v-show="currentIndex==0?true:false">可提现余额</view>
					<view class="left "v-show="currentIndex==1?true:false">可提现佣金</view>
					<view class="right ">0.00</view>
				</view>
				
				<view class="item">
					<view class="left ">提现的金额</view>
					<view class="right ">
						<input type="text" placeholder="">
					</view>
				</view>
				
				<view class="item">
					<view class="left ">请选择银行卡</view>
					<view class="right ">
						<view style="color: #999;">点击选择银行卡</view>
					</view>
				</view>
				<view class="tishi">
					温馨提示：请勿绑定本人以外银行卡提现
				</view>
				
				<view class="btns">
					<view class="btn dis">申请提现</view>
					<view class="btn dis">产品复投</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0
			};
		},
		methods:{
			bian(index){
				this.currentIndex=index
			}
		}
	}
</script>

<style lang="less">
.color{
	background-color: red;
	color: #fff;
}	
.withdrawal{
	width: 100%;
	height: 1520upx;
	background-image: url('../../static/my/tixian.jpg');
	background-size: 100% auto;
	position: relative;
	.box{
		width: 100%;
		height: 600upx;
		position: absolute;
		top: 340px;
		left: 0;
		
	}
}
.container{
	width: 90%;
	margin: 0 auto;
	height: 100%;
	.tits{
		width: 80%;
		height: 55upx;
		display: flex;
		color: red;
		margin: 0 auto;
		border-radius: 10upx;
		border: 1upx solid red;
		margin-top: 20upx;
		.title{		
			width: 50%;
			height: 100%;
		}
	}	
	.item{
		width: 80%;
		height: 90upx;
		display: flex;
		align-items: center;
		margin: 0 auto;	
		border-bottom: 1upx solid #cccccc;
		.left{
			width: 40%;
			height: 100%;
			display: flex;
			align-items: center;
			padding-left: 20upx;
		}
		.right{
			width: 60%;
			height: 100%;
			box-sizing: border-box;
			padding-left: 30upx;
			display: flex;
			align-items: center;
			input{
				width: 100%;
				height: 100%;
			}
		}
	}
	.tishi{
			width: 90%;
			text-align: center;
			font-size: 22upx;
			color: red;
			margin: 20upx auto;
	}
	.btns{
	width: 90%;
	height: 90upx;
	font-size: 22upx;
	margin: 20upx auto;	
	display: flex;
	justify-content: space-around;
	.btn{
		width: 48%;
		height: 100%;
		background-color: green;
		color: #fff;
		border-radius: 10upx;
	}
	}
}
</style>
