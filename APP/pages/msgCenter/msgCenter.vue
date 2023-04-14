<template>
	<view>
		
		<view v-show="id==0?true:false">
			
		</view>
		
		<view v-show="id==1?true:false">
			
		</view>
		
		<view v-show="id==2?true:false">
			
		</view>
		
		<view v-show="id==3?true:false">
			<view class="zhanneixin">
				<view class="item">
					<view class="left dis">
						<image src="../../static/my/xia.png" mode=""></image>
					</view>
					<view class="right disc">
						<view class="title">认购赠送</view>
						<view class="detail">是是是三生三世是是是是是是三生三世是是是是是是三生三世是是是是是是三生三世是是是</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.id=options.id
		},
		data() {
			return {
				id:''
			};
		}
	}
</script>

<style lang="less">
.zhanneixin{
	.item{
		width: 100%;
		height: 300upx;
		display: flex;
		border-bottom: 1upx solid #cccccc;
		.left{
			width: 30%;
			height: 100%;
			image{
				width: 80upx;
				height: 80upx;
			}
		}
		.right{
			width: 70%;
			height: 100%;
			.title{
				text-align: center;
				color: red;
			}
			.detail{
				margin-top: 10upx;
			}
		}
	}
}
</style>
