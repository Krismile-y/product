<template>
	<view class="content" style="min-height: 120vh; padding-bottom: 100upx;">
       <!-- 手写拉起框 -->
     <!-- <view class="myBox"></view> -->

		<!-- 认购弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" round='60' style="z-index: 9999;">
				<view class="popup">
					<scroll-view scroll-y="true" style="width: 100%;height: 100%;overflow: hidden;">
						<view class="investDetail">
                                <view class="back">
									<view class="backBtn dis" @tap="backBtn"><</view>
								</view>
							<view class="tops">
								
								<image
									:src="detail.head_img"
									mode=""></image>
							</view>



							<view class="li" style=" font-weight: 580;">
								项目规模：
								<view class="pos dis">
									<text style="color: red;">{{detail.goods_money}}</text>万元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								每日分红：
								<view class="pos dis">
									<text style="color: red;">{{detail.day_red}}</text>元
								</view>
							</view>
							<view class="li" style=" font-weight: 580;">
								投资周期：
								<view class="pos dis">
									<text style="color: red;">{{detail.period}}</text>天
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

								<text></text>
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
									:src="detail.head_img"
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
						<view class="boxs disc">
							<view class="title" :class="{color:currentIndex==index?true:false}">{{item.type_name}}</view>
							<view class="line" v-show="currentIndex==index?true:false"></view>
						</view>
					</view>
				</scroll-view>
				<!-- 单个产品 -->
				<view class="items" v-for="(item,index) in goods_list">
					<image :src="item.head_img"></image>
					<view class="tit">{{item.goods_name}}</view>
					<view class="buy">
						<view class="left">最低投资：{{item.goods_money}}元</view>
						<view class="right">
							<view class="pay dis" @tap="go(item.id)">认购</view>
						</view>
					</view>
				</view>
			<u-empty text="此分类暂时没有数据" mode="order" v-show="kong"></u-empty>
		
		<view>
			
			<!-- 立即认购拉起框 -->
			<u-popup :show="zhifu" @close="zhifuclose" @open="zhifuopen" round='60' style="z-index: 33;">
				<view class="box" style="margin-top: 60upx;">
					<view class="back">
						<view class="backBtn dis" @tap="lastbackBtn"><</view>
					</view>
					<view class="shuliang" style="margin-top: 30upx;">
						<view style="padding-bottom: 50upx;padding-left: 30upx;margin-top: 0upx;">数量</view>
						<view class="jia">
							<view class="zuo dis" @tap="jian" :class="{baise:xiadan==0?true:false}">-</view>
							<view class="zhong dis">{{xiadan}}</view>
							<view class="zuo dis" @tap="jia">+</view>
						</view>
					</view>
					
					<!-- 选择天数 -->
					<view class="shuliang" @tap='tianshushow=true'>
						<view class="shuliangItem" style="padding-left: 30upx;">选择天数</view>
						<view class="shuliangItem xiangyou" @tap="dayChange = true">
							<image src="../../static/common/xuanze.png" mode=""></image>
						</view>
					</view>
					<!--  -->
          <u-popup :show="dayChange" @close="dayChangeClose" @open="dayChangeOpen" round='60' style="z-index: 44;">
            <view class="tianshuBox" v-show="!false">
              <scroll-view scroll-y="true" style="width: 100%;height: 460upx;margin-top: 60px;">
                <view class="dayChange-title">
                  天数选择
                </view>
                <view class="tianshuItem" v-for="(item,index) in dayID" @tap="rightClick(index,item)" :class="{d:currentDay==index?true:false}">
                  <view class="info">
                    <view>项目名：{{item.goods_name}}</view>						
                    <view>项目对应天数：{{item.project_day}}</view>
                    <view>项目每日收益：{{item.income}}</view>								
                    <view>项目总收益{{item.total_red_money}}</view>
                    
                  </view>
                </view>
              </scroll-view>
              
            </view>
          </u-popup>
					
					<view class="typeItem dis" v-for="(item,index) in type"
					@tap="typeClick(index)"
					:class="{typeColor:typeIndex==index?true:false}">
						{{item}}
					</view>
					<view class="bottom dis">
						<view class="in dis" @tap="pay">
							支付
						</view>
					</view>
					
				</view>
				

			</u-popup>
			<!-- <u-button @click="zhifu = true">打开</u-button> -->
		</view>

		<view class="bottom-box">
		  <helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
		</view>

	</view>
</template>

<script src='./invest.js'>

</script>

<style lang="less" src='./invest.less' scoped>
  
</style>