<template>
	<view style="padding-bottom: 60upx">
		<airel-floatball />
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<scroll-view scroll-x="true" style="width: 100%; height: 90upx; white-space: nowrap; margin-top: 50upx">
			<view class="item" v-for="(item, index) in list" :key="index" @tap="bian(index, item.id)">
				<view class="boxs disc">
					<view class="title" :class="{ color: currentIndex == index ? true : false }">{{ item.type_name }}</view>
				</view>
			</view>
		</scroll-view>

		<view class="box disc" @tap="go(item.id)" v-for="(item, index) in greenList" :key="index" v-show="currentIndex == 0 ? true : false">
			<view class="shang">
				<image :src="item.img_path"></image>
				<view class="shangRight disc">
					<view class="biaoti">
						<view class="gr dis">{{ item.labels }}</view>
						<view class="gDetail">
							{{ item.title }}
						</view>
					</view>
					<view class="line"></view>

					<view class="detail" v-html="item.content"></view>
				</view>
			</view>

			<view class="title">{{ item.title }}</view>

			<image :src="item.img_path" mode="widthFix" class="bigImage"></image>

			<!-- <view class="time">{{ item.initiate_time }}</view> -->
		</view>

		<!-- 捐赠记录 -->
		<view class="juanzenjili" v-show="currentIndex == 1 ? true : false" style="margin-bottom: 30upx">
			<view class="juanzen-item" v-for="(item, index) in lastList" :key="index" v-if="lastList">
				<view class="item-img">
					<image :src="item.img_path" mode=""></image>
				</view>
				<view class="item-content">
					<view class="item-title">
						<view class="title-text">
							{{ item.title }}
						</view>
					</view>
					<view class="item-title">
						<view class="title-text">捐赠人：{{ item.user_name }}</view>
					</view>
					<view class="item-money">捐赠金额：￥{{ item.amount }}</view>
					<view class="item-time">捐赠时间：{{ item.create_time }}</view>
				</view>
			</view>
		</view>

		<u-empty text="此分类暂时没有数据" mode="order" v-show="kong && currentIndex == 1"></u-empty>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: '',
			list: [{ type_name: '公益项目' }, { type_name: '捐赠记录' }],
			greenList: [], // 绿色公益列表
			page: 0, //当前页数
			juanxianjilu: [], //捐赠记录
			kong: false,
			lastList: [], //触底数组
			page: 1, //当前页面数
			last_page: '' //接口总页数
		};
	},
	onReachBottom() {
		console.log('已触底');
		if (this.page > this.last_page) {
			return;
		}
		this.x();
	},
	onPullDownRefresh() {
		uni.hideNavigationBarLoading();
		uni.stopPullDownRefresh();
	},
	onShow() {
		this.$fn.request('welfare/donate_log', 'GET', {}).then((res) => {
			console.log(res, '捐献记录');
			this.juanxianjilu = res.data.data.data;
			if (res.data.data.total == 0) {
				this.kong = true;
			} else {
				this.kong = false;
			}
		});
	},
	onLoad() {
		let data = {};
		// 文章列表
		this.$fn.request('welfare/list', 'GET', data).then((res) => {
			console.log(res.data.data.data);
			this.greenList = res.data.data.data;
		});

		// 捐献记录
	},
	methods: {
		bian(index) {
			this.currentIndex = index;
			if (this.currentIndex == 1) {
				this.x();
			}
		},
		go(id) {
			uni.navigateTo({
				url: '/pages/greenDetail/greenDetail?id=' + id
			});
		},
		x() {
			let data = {
				page: this.page.toString(),
				limit: '10',
				time: ''
			};
			this.$fn.request('welfare/donate_log', 'GET', data).then((res) => {
				console.log(res.data.data.total, '捐献记录');
				if (res.data.code == 1) {
					this.juanxianjilu = res.data.data.data;
					this.lastList.push(...res.data.data.data);
					console.log(res.data.data.last_page);
					this.last_page = res.data.data.last_page;
					this.page++;

					if (res.data.data.total == 0 && this.currentIndex == 1) {
						this.kong = true;
					} else {
						this.kong = false;
					}
				}
			});
		}
	}
};
</script>

<style lang="less" scoped src="./green.less"></style>
