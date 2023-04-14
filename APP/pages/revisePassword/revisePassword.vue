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
					<input type="text" placeholder="旧密码">
				</view>
			</view>
			
			<view class="item">
				<view class="left ">
					密码
				</view>
				<view class="right">
					<input type="text" placeholder="密码">
				</view>
			</view>
			
			<view class="item">
				<view class="left ">
					确认密码
				</view>
				<view class="right">
					<input type="text" placeholder="确认密码">
				</view>
			</view>
			
			<view class="btn dis">
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
				  type:''	
			};
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
