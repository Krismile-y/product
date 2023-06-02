<template>
	<view class="projectDetails" ref="projectDetails">


		<view>
			<airel-floatball />
		</view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<!-- 项目详情 -->
		<!-- 商品详情图片 -->
		<image class="detailsImg" :src="detail.head_img" mode="widthFix"></image>
		<!-- 商品信息 -->
		<view class="project-content">
			<view class="project-title">
				{{detail.goods_name}}
			</view>
			<view class="items">
				<view class="item-left">
					项目规模
				</view>
				<view class="item-right">
					<text class="orange">{{detail.project_scale}}</text>万元
				</view>
			</view>
			<view class="items">
				<view class="item-left">
					每日分红
				</view>
				<view class="item-right">
					<text class="orange">{{detail.day_red}}</text>元
				</view>
			</view>
			<view class="items">
				<view class="item-left">
					投资周期
				</view>
				<view class="item-right">
					<text class="orange">{{detail.period}}</text>天
				</view>
			</view>
			<view class="items">
				<view class="item-left">
					分红方式
				</view>
				<view class="item-right">
					到期还息
				</view>
			</view>
			<view class="items" style="border-bottom: 0px;">
				<view class="item-left">
					担保机构
				</view>
				<view class="item-right">
					{{detail.warrant}}
				</view>
			</view>
		</view>
		<view class="bottom-img" @click="previewImage">
			<image src="./shouyi8000.png" mode="widthFix"></image>

			<view class="disc" style="display: none;">

				<image src="./shouyi8000.png" mode="" style="width: 730upx;height: 107upx;"></image>
				<view style="display: none;" class="da">
					<!-- 第一排 -->
					<view style="" class="nightBOX ">
						<view class="nightItem dis" style="width: 110rpx;">选购金额</wview>
						<view class="nightItem dis" style="width: 84rpx;">日收益</view>
						<view class="nightItem dis" style="width: 82rpx;">天数</view>
						<view class="dis nightItem" style="" v-for="(value,key) in biaoge.cnt"> {{key}}天</view>
					</view>
					<!-- 第二排 -->
					<view style="display: none;" class="nightBOXTWO ">
						<view class="nightItem dis" style="width: 110rpx;">{{parseInt(moneyData[0].money)}}</view>
						<view class="nightItem dis" style="width: 84rpx;">{{biaoge.income_day}}</view>
						
						<view class="nightList">
							<view class="shang">
								<view class="list dis" style="width: 82rpx;">可提现</view>
								<view class="dis list" style="" v-for="(value,key) in biaoge.withdraw_cash"> {{value}}</view>
								
							</view>
							
							<view class="shang">
								<view class="list dis" style="width: 82rpx;">总收益</view>
								<view class="dis list" style="" v-for="(value,key) in biaoge.cnt"> {{value}}</view>
							</view>
						</view>
					</view>
        </view>
			</view>

      </view>
		</view>
		<view class="opcity-bottom">
			<!-- 用于支撑fixed的空白盒子 -->
		</view>
		<view class="bottom-fixd" :class="{'fixed': fixedType}">
			<view class="bottom-text">
				<text class="qitou">认购金额：</text>
				<text class="orange">￥{{parseInt(moneyData[0].money)}}</text>
				<text class="orange small">.00</text>
			</view>
			<view class="bottom-btn" @tap="go(detail.id)">
				马上认购
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				detail: {},
				fixedType: true,
				biaoge: [],
				moneyData: [{
					money: 0
				}],
			};
		},
		onLoad(option) {



			// 产品详情
			this.id = option.id
			let goods_one = {
				"id": this.id
			}
			this.$fn.request('goods/goods_one', 'GET', goods_one).then(res => {
				// console.log(res.data.data,'产品详情')
				this.detail = res.data.data
			})
			this.getJiage(this.id)
		},
		mounted() {

		},
		methods: {
			// 获取认购价格，用于起投金额
			getJiage(id) {
				let params = {
					gid: id
				}
				this.$fn.request('goods/goods_money', 'GET', params).then(res => {
					// console.log(res,'金额列表')
					if (res.data.code == 1) {
						this.moneyData = res.data.data.data
						this.$fn.request('goods/income', 'GET', {
							money: parseInt(this.moneyData[0].money)
						}).then(res => {
							console.log(res.data.data, 'ssss')
							this.biaoge = res.data.data
						})
					}
				})
			},
			go(detailId) {
				let obj = {
					gid: this.id, //货物id
					mid: this.moneyData[0].id, //选择价位的id
					money: this.moneyData[0].money, //价位价格
					headImg: this.detail.head_img //商品图片
				}
				let strObj = JSON.stringify(obj)
				uni.navigateTo({
					url: `/pages/rengou/rengou?obj=${strObj}`
				})
			},
			// 加个列表图片预览
			previewImage() {
				return
				uni.previewImage({
					urls: [this.detail.bottom_img] // 这里填写需要预览的图片地址列表
				})
			}
		}
	}
</script>

<style lang="less" src='./css.less' scoped>

</style>