<template>
	<view>

		<view class="box">
			<view class="show disc">
				<view class="price">0.00￥</view>
				<view class="title">共计项目投资金额</view>
			</view>

			<view class="three">
				<view class="threeItem dis">操作/时间</view>
				<view class="threeItem dis">投资金额</view>
				<view class="threeItem dis">2023记录</view>
			</view>

			<!-- <view class="inputs" @tap="show = true">
				<input type="text" v-model="res">
				<view class="pos dis">
					<image src="../../static/my/xia.png"></image>
				</view>
			</view> -->

			<view class="" style="margin-top: -30upx;">
				<uni-section title=""  >
					<view class="example-body">
						<uni-combox :border="true" :candidates="candidates" placeholder="请选择日期"></uni-combox>
					</view>
				</uni-section>
			</view>

		<!-- 	<view class="daiding dis">
				<uni-load-more status="more" :content-text="contentText" />
			</view> -->






		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: '2023年3月投资小计',
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				contentText: {
									contentdown: '查看更多',
									contentrefresh: '加载中',
									contentnomore: '没有更多'
								}
			};
		},
		onLoad() {},
		methods: {
			
		}
	};
</script>

<style lang="less">
	.box {
		width: 90%;
		margin: 30upx auto;

		.daiding {
			width: 100%;
			height: 90upx;
			border: 1upx solid #cccccc;
			margin-top: 10upx;
		}

		.show {
			border: 1upx solid #cccccc;
			width: 100%;
			height: 180upx;
			font-size: 36upx;

			.title {
				margin-top: 10upx;
			}
		}

		.three {
			width: 100%;
			margin-top: 10upx;
			height: 40upx;
			display: flex;

			.threeItem {
				height: 100%;
				flex: 1;
				color: #999;
			}
		}

		.inputs {
			width: 100%;
			height: 60upx;
			position: relative;
			border: 1upx solid #cccccc;

			input {
				width: 80%;
				height: 100%;
				margin: 0 auto;
			}

			.pos {
				width: 100upx;
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;

				image {
					width: 20upx;
					height: 20upx;
				}
			}
		}
	}
</style>
