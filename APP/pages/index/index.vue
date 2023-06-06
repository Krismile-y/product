<template>
	<view class="content" style="background-color: #F4F4F6;">
		
		<scroll-view scroll-y="true" style="width: 100%;height: 100vh;">
			<view>
				<!-- 	<navs></navs>	 -->
					<down ref='down'></down>
				   <!-- <airel-floatball  /> -->
				   
				   <view >
				   	<airel-floatball />
				   </view>
					<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
					<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
					<view class="tops disc" style="height: 400upx;">
						<view class="top-title">
							<view class="top-title-text">
								绿色中国,欢迎您
							</view>
							<view class="signIcon">
								<image src="../../static/newIndex/qiandao.png" @tap="goHome('sign')"></image>
							</view>
						</view>
				
						<view style="width: 100%;height: 100%;" class="disc">
							<!-- 轮播 -->
							<swiper :autoplay="true" :interval="3000" :duration="1000"
								style="width: 88%;height: 228upx; position: absolute;top: 150upx;margin: 0 auto;">
								<!-- <swiper-item style="width: 100%;height: 200upx;" v-for="(item,index) in banner" :key="index">
									<image   :src="item.img" mode="" style="width: 100%;height: 100%;border-radius: 20upx;"></image>
								</swiper-item>	 -->
								<swiper-item style="width: 100%;height: 200upx;" v-for="(item,index) in banner">
									<image :src="item.img" mode="" style="width: 100%;height: 100%;border-radius: 20upx;"></image>
								</swiper-item>
								<!-- <swiper-item style="width: 100%;height: 200upx;">
									<image src="../../static/index/swiper2.png" mode=""
										style="width: 100%;height: 100%;border-radius: 20upx;"></image>
								</swiper-item> -->
							</swiper>
				
						</view>
					</view>
				
					<!-- 滚动通知 -->
					<view class="notice-bar">
						<u-notice-bar :text="text1" bgColor='#54d27e' color='#fff'></u-notice-bar>
					</view>
				
				
					<!-- 八个标题 -->
					<view class="eight" style="margin-top: 24upx;">
						<!-- #ifdef H5-->
						<view class="item disc" >
							<view class="img-box">
								<a :href=" $lastUrl" class="dis"><image style="transform: scale(1.6);" src="../../static/newIndex/newEarth.png"></image></a>
								
							</view>
							<view class="title">
								
								<a :href=" $lastUrl" style="color: #000;">进入官网</a>
								</view>
						</view>
						<!-- #endif -->
						
						<!-- #ifdef APP -->
						<view class="item disc" @tap="guanwang">
							<view class="img-box">
								<image style="transform: scale(1.6);" src="../../static/newIndex/newEarth.png"></image>
							</view>
							<view class="title">
								
								进入官网
								</view>
						</view>
						<!-- #endif -->
						
						<view class="item disc">
							<view class="img-box">
								<image src="../../static/newIndex/guanyuwomen.png" @tap="goHome('about')"></image>
							</view>
							<view class="title">关于我们</view>
						</view>
						<!--  #ifdef APP -->
						<view class="item disc" @tap='check'>
							<view class="img-box">
								<image src="../../static/newIndex/xiazai.png"></image>
							</view>
							<!-- <down title='检查更新' ref='down'></down> -->
							<view class="title ">检查更新</view>
						</view>
						<!--  #endif -->
						<!-- #ifdef H5 -->
						<view class="item disc" @tap='down'>
							<view class="img-box">
								<a :href="phoneDown" class="dis"><image src="../../static/newIndex/xiazai.png"></image></a>
								
							</view>
							<a :href="phoneDown" style="color: black;">
								<view class="title">APP下载</view>
							</a>
						</view>
						<!--  #endif -->
						<view class="item disc" @tap="goHome('msg')" style="position: relative;">
							<u-badge :value="newMSG" max="999" type="danger"
								style="color: #fff;position: absolute;top: -10upx;right: 30upx;background-color:red" />
							<view class="img-box">
								<image src="../../static/newIndex/xiaoxi.png"></image>
							</view>
							<view class="title">官方消息</view>
						</view>
						<view class="item disc" @tap="goHome('community')">
							<view class="img-box">
								<image src="../../static/newIndex/icon_topic_active.png"></image>
							</view>
							<view class="title">我的社区</view>
						</view>
				
				
				
						<view class="item disc" @tap="goHome('shop')">
							<view class="img-box">
								<image src="../../static/newIndex/icon_shop_active.png"></image>
							</view>
							<view class="title">积分商城</view>
						</view>
						<view class="item disc" @tap="goHome('green')">
							<view class="img-box">
								<image src="../../static/newIndex/gongyi.png"></image>
							</view>
							<view class="title">绿色公益</view>
						</view>
						<view class="item disc" @tap="goHome('invite')">
							<view class="img-box">
								<image src="../../static/newIndex/fenxiang.png"></image>
							</view>
							<view class="title">分享邀请</view>
						</view>
				
						<!-- 加个签到  + 得积分 -->
					</view>
				
					<!-- 视屏 -->
					<!-- 	<view class="video dis" style="width: 98%;margin: 30upx auto;">
						<video src="" style="width: 100%;"></video>
					</view> -->
				
				
				
					<!-- 新手 -->
					<view class="news" @tap='xinshou()'>
						<view class="news-title">
							<text>新用户体验</text>
							<image src="../../static/newIndex/icon-right.png" mode=""></image>
						</view>
						<view class="little-text">
							新手的启程之旅
						</view>
					</view>
				
					<!-- 快捷 -->
					<!-- <view class="kuaijie">
						<view class="shu"></view>
						你的专属服务
					</view>
					<view class="zhuanqu disc">
						<view style="width: 100%; margin: 0 auto; display: flex;justify-content: space-between;">
							<image src="../../static/index/zhuanshu1.jpg" mode="" @tap="huanbao(0)">
							</image>
							<image src="../../static/index/zhuanshu2.jpg" mode="" style="margin-left: 0upx;" @tap="huanbao(1)">
							</image>
						</view>
					</view> -->
					<!-- 专属服务 -->
					<view class="zhuanshu">
						<view class="head-bg"></view>
						<view class="zhuanshu-title">
							专属服务
						</view>
						<view class="zhuanshu-content">
				
						</view>
					</view>
				
					<view class="news gongyi" @tap="goHome('green')">
						<view class="news-title">
							<text>绿色公益</text>
							<image src="../../static/newIndex/icon-right.png" mode=""></image>
						</view>
						<view class="little-text">
							让世界充满爱
						</view>
					</view>
					<!-- xinwen -->
					<view class="xinwen-title">
						<view class="shu"></view>
						<view class="xinwen-ttext">
							热门新闻
						</view>
					</view>
					<view class="xinwen-box">
						<view class="xinwen" @tap="xinwen(index)" v-for="(item,index) in article" :key="index">
							<view class="right">
								<image :src="item.thumb_url=='' ? '../../static/my/jilu.png':item.thumb_url" mode=""></image>
							</view>
							<view class="left">
								<view class="news-title-text">
									{{item.title}}
								</view>
								<view class="news-content" v-html="item.content"></view>
								<!-- {{item.content}} -->
							</view>
						</view>
					</view>
				
					<!-- 合作伙伴 -->
				<view class="hezuo-box">
				  <view class="hezuo-box1">
            <view class="hezuo-text">
              <!-- 协办单位 -->
              <image src="../../static/newIndex/xiebantitle.png" mode="widthFix"></image>
            </view>
				  </view>
				</view>
				<view class="jianguan-box">
				  <view class="jianguanbumen">
				    <view class="jianguanbumen1">
				      <!-- 监管部门 -->
              <image src="../../static/newIndex/jianguanbumen.png" mode="widthFix"></image>
				    </view>
				  </view>
				  <view class="bumen-name">
				    <view class="text1" v-for="(item,index) in bumenItems" :key="index" @tap="bumenJump(index)">{{item}}</view>
				  </view>
				</view>
					<!-- <view class="kuaijie">
						<view class="shu"></view>
						相关内容
					</view> -->
					<view class="zhengce" @tap="newsList" style="margin-top: 30upx; display: none;">
						<image src="../../static/common/zuixinzhengce.png" style="height: 300upx;"></image>
						<view class="zhengce-txt">
							<!-- 政策解读 -->
						</view>
					</view>
					<!--  -->
				
					<!-- 海报 -->
					<view class=" dis" v-for="(value,key,i) in posterList" :class="{poster:posterList.length==nowNum?false:true}"
						>
						<view class="box disc">
							<view style="width: 100%;height: 100%;" class="disc" v-for="(item,index) in posterList"
								v-show="index==nowNum?true:false">
								
								<!-- 展示的内容 -->
								<scroll-view scroll-y="true" style="width: 100%;height: 700upx;">
									<view v-html="item.content" v-show="item.is_type==1?true:false"></view>
									<image :src="item.img" mode=""  v-show="item.is_type==0?true:false" style="width: 100%;height: 700upx;border-radius: 20upx;"></image>
								</scroll-view>
								
								<image src="../../static/index/guanbi.png" mode=""
									style="width: 60upx;height: 60upx;margin-top: 30upx;" @tap='close'></image>
							</view>
						</view>
					</view>
				<view class="foot">
				  <view class="foot-text2">
				    Copyright@2008-2020 All rights reserved<br/>国家发展改革委员会&nbsp;&nbsp;|&nbsp;&nbsp;京ICP备05070218号
				  </view>
				  <view class="foot-text2">
				    国新网许可证:1012006051&nbsp;&nbsp;|&nbsp;&nbsp;京ICP证060152号
				  </view>
				  <view class="foot-text2">
				     电信与信息服务业务经营许可证&nbsp;&nbsp;|&nbsp;&nbsp;京ICP备12007936号-3
				  </view>
				  <view class="foot-text2">
				    京公网安备11010502031076号
				  </view>
				</view>
					<view class="bottom-box">
						<helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
					</view>
			</view>
		</scroll-view>
			
		
		
		
	</view>
</template>

<script src='./index.js'>


</script>

<style lang="less" scoped src='./index.less'>

</style>