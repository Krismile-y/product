<template>
	<view class="main">
		<view class="search-info">
			<view class="search-item">
				<input type="text" class="search-input" placeholder="请输入关键字搜索" @input="searchList" maxlength="50"
					v-model="searchText" />
			</view>
		</view>
		<view class="card-message">
			<view class="item-mess" v-if="newList.length" v-for="(item,index) in newList" :key="index"
				@tap.stop="showMore(item)">
				<view class="item1">
					<view class="item-left">
						<image class="item-left-icon" :src="img1" v-if="img1"></image>
						<view class="item-left-name">{{item.name}}</view>
					</view>
					<image class="item-right" :src="item.state?'../../static/shangla.png':'../../static/xiala.png' "></image>
				</view>
				<view class="item2" v-if="item.state && item.childs" v-for="(mess,inx) in item.childs" :key="inx"
					@tap.stop="goDetail(mess)">
					<view class="item2-left">
						<image class="item2-left-icon" :src="img2" v-if="img2"></image>
						<view class="item2-left-name">{{mess.name}}</view>
					</view>
					<image class="item2-right" src="../../static/qianjin.png"></image>
				</view>
			</view>
			<view v-if="newList.length==0" class="no-data">暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			//列表数据
			dataList: {
				type: Array,
				default: [],
			},
			//一级标题图标
			img1: {
				type: String,
				default: '../../static/img1.png',
			},
			//二级标题图标
			img2: {
				type: String,
				default: '../../static/img2.png',
			}
		},
		data() {
			return {
				newList: [],
				oldList: [],
				searchText: ''
			}
		},
		mounted() {
			this.newList = this.dataList
			this.newList.forEach(item => {
				item.state = false
			})
			this.oldList = this.newList
		},
		methods: {
			searchList() {
				if (this.searchText) {
					this.newList = this.newList.filter(item => {
						return item.name.indexOf(this.searchText) != -1
					})
				} else {
					this.newList = this.oldList
				}
			},
			showMore(item) {
				item.state = !item.state
				this.newList = JSON.parse(JSON.stringify(this.newList))
			},
			goDetail(item) {
				this.$emit('tapChildItem', item)
			}
		}
	}
</script>

<style lang="scss">
	.main {
		height: auto;

		.search-info {
			width: 100%;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.search-item {
				width: 690rpx;
				height: 76rpx;
				border-radius: 60rpx;
				overflow: hidden;
				background-color: #F4F4F4;

				.search-input {
					width: calc(100% - 48rpx);
					height: 76rpx;
					line-height: 76rpx;
					color: #333333;
					padding-left: 24rpx;
					padding-right: 24rpx;
					font-size: 30rpx;
				}
			}
		}

		.card-message {
			width: 100%;
			height: auto;
			padding-top: 20rpx;
			background-color: #FFFFFF;

			.item-mess {
				height: auto;

				.item1 {
					width: 100%;
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.item-left {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						margin-left: 32rpx;

						.item-left-icon {
							width: 48rpx;
							min-width: 48rpx;
							height: 48rpx;
							margin-right: 16rpx;
						}

						.item-left-name {
							color: #333333;
							font-weight: bold;
							font-size: 30rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
						}
					}

					.item-right {
						width: 32rpx;
						height: 32rpx;
						margin-right: 40rpx;
						min-width: 32rpx;
					}
				}

				.item2 {
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					height: auto;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.item2-left {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						margin-left: 68rpx;

						.item2-left-icon {
							width: 28rpx;
							min-width: 28rpx;
							height: 30rpx;
							margin-right: 16rpx;
						}

						.item2-left-name {
							color: #333333;
							font-size: 30rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
						}
					}

					.item2-right {
						width: 38rpx;
						height: 38rpx;
						margin-right: 46rpx;
						min-width: 12rpx;
					}
				}
			}

			.no-data {
				width: 100%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: rgba(0, 0, 0, 0.3);
			}
		}
	}
</style>
