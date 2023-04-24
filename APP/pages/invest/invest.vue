<template>
	<view class="content">

		<!-- 弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" round='60'>
				<view class="popup">
					<scroll-view scroll-y="true" style="width: 100%;height: 100%;overflow: hidden;">
						<view class="investDetail">

							<view class="tops">
								<image
									src="https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
									mode=""></image>
							</view>



							<view class="li" style=" font-weight: 580;">
								项目规模：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_1}}</text>万元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								每日分红：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_2}}</text>万元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								投资周期：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_agent_3}}</text>万元
								</view>
							</view>
							<view class="li" style="font-weight: 600;">
								分红方式：到期还本还息
							</view>

							<view class="li" style=" font-weight: 580;font-size: 32upx;">
								担保机构：{{detail.warrant}}
							</view>
							<view class="li"
								style="border-bottom: 1upx dashed #ccc;height: 30upx;margin-bottom: 20upx;">

							</view>
							<view class="li"
								style="color: #484848;font-weight: 510;padding-left: 20upx;margin-top: 0upx;">

								起投金额：

							</view>



							<view class="li" style="color: #484848;font-weight: 510;">

								<image src="../../static/logo.png" mode=""></image>
								<text style="font-size: 68upx; color: #000;">

									{{detail.goods_money}}
								</text>

								<view class="pos dis">
									<view class="btn dis" @tap="lijirengou()">
										马上认购
									</view>
								</view>
							</view>

							<view class="tops">
								<image
									src="https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
									mode=""></image>
							</view>

						</view>
					</scroll-view>
				</view>
			</u-popup>

		</view>
		<!--  -->






		<view class="top">
			<view class="xia " style="">

			</view>
		</view>

		<!-- 标题栏 -->
		<scroll-view scroll-x="true" style="width: 100%;height: 90upx;white-space: nowrap;margin-top: 100upx;">
			<view class="item " v-for="(item,index) in list" :key="index" @tap="bian(index,item.id)">
				<view class="box disc">
					<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
					<view class="line" v-show="currentIndex==index?true:false"></view>
				</view>
			</view>
		</scroll-view>

		<!-- 单个产品 -->
		<view class="items" v-for="(item,index) in goods_list">
			<image src="../../static/index/swiper.png"></image>
			<view class="tit">{{item.goods_name}}</view>
			<view class="buy">
				<view class="left">最低投资：{{item.goods_money}}元</view>
				<view class="right">
					<view class="pay dis" @tap="go(item.id)">认购</view>
				</view>
			</view>
		</view>

		<view>
			<u-popup :show="zhifu" @close="zhifuclose" @open="zhifuopen">
				<view class="box">

					<!-- 支付框框 -->
					<view class="zhifu" v-show="showIndex==2?true:false">
						<view class="zhifuItem ">
							<u-radio-group v-model="value" placement='column' iconPlacement="right">
								<view class="radioBox ">
									<view class="left">微信</view>
									<view class="right">
										<u-radio activeColor="red" label="" @change='danxuan'></u-radio>
									</view>

								</view>
								<view class="radioBox ">
									<view class="left">支付宝{{value}}</view>
									<view class="right">
										<u-radio activeColor="red" label="" style="" @change='danxuan'></u-radio>
									</view>
								</view>
							</u-radio-group>
						</view>
					</view>


					<view class="day" v-show="showIndex==1?true:false">
						<uni-section title="天数" type="line" padding>
							<uni-number-box @change="changeDay" />
						</uni-section>
					</view>

					<view class="number" v-show="showIndex==0?true:false">
						<uni-section title="数量" type="line" padding>
							<uni-number-box @change="changeNumber" />
						</uni-section>
					</view>

					<view class="next dis" v-show="showIndex>=3?false:true">
						<view class="shangyibu" @tap='shang'>上一步</view>
						<view class="xiayibu " style="margin-left: 30upx;" @tap="next">下一步</view>
						<view class="queding"  style="margin-left: 30upx;" @tap="pay" >确定</view>
					</view>
				</view>
			</u-popup>
			<!-- <u-button @click="zhifu = true">打开</u-button> -->
		</view>

		<bottom></bottom>

	</view>
</template>

<script src='./invest.js'>

</script>

<style lang="less" src='./invest.less' scoped>

</style>