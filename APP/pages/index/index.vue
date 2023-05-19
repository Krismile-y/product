<template>
	<view class="content" style="padding-bottom: 200upx; background-color: #F4F4F6;">
		<!-- 	<navs></navs>	 -->
        <down ref='down'></down>
		
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
			<u-notice-bar :text="text1" bgColor='#54d27e' color='#fff' ></u-notice-bar>
		</view>


		<!-- 八个标题 -->
		<view class="eight" style="margin-top: 24upx;">
      <view class="item disc" @tap="guanwang()">
        <view class="img-box">
          <image src="../../static/newIndex/guanwang.png"></image>
        </view>
      	<view class="title">进入官网</view>
      </view>
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
      	 <down title='检查更新' ref='down'></down>				
      </view>
      <!--  #endif -->
      <!-- #ifdef H5 -->
      <view class="item disc" @tap='down'>
      	<view class="img-box">
      	  <image src="../../static/newIndex/xiazai.png"></image>
      	</view>
               <a :href="phoneDown" style="color: black;">
      			 <view class="title">APP下载</view>
      		 </a>
      </view>
      <!--  #endif -->
      <view class="item disc" @tap="goHome('msg')" style="position: relative;">
		 <u-badge :value="newMSG" max="999" type="danger" style="color: #fff;position: absolute;top: -10upx;right: 30upx;background-color:red" />
        <view class="img-box">
          <image src="../../static/newIndex/xiaoxi.png"></image>
        </view>
      	<view class="title">官方消息</view>
      </view>
			<view class="item disc">
        <view class="img-box">
          <image src="../../static/newIndex/icon_topic_active.png"></image>
        </view>
				<view class="title">我的社区</view>
			</view>
			
			
			
			<view class="item disc" @tap="goHome('myGroup')">
        <view class="img-box">
          <image src="../../static/newIndex/icon_shop_active.png"></image>
        </view>
				<view class="title">积分商城</view>
			</view>
			<view class="item disc">
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
		<view class="news" @tap='xinshou'>
			<view class="news-title">
			  <text>新手体验</text>
        <image src="../../static/newIndex/icon-right.png" mode=""></image>
			</view>
      <view class="little-text">
        祝你快速入门
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
	
    <view class="news gongyi">
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
		

		<!--  -->
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
		<view class=" dis" v-for="(value,key,i) in posterList"
			:class="{poster:posterList.length==nowNum?false:true}" v-show="true">
			<view class="box disc">
				<view style="width: 100%;height: 100%;" class="disc" v-for="(item,index) in posterList"
					v-show="index==nowNum?true:false">
					<image :src="item.img" mode="" style="width: 100%;height: 700upx;border-radius: 20upx;"></image>
					<image src="../../static/index/guanbi.png" mode=""
						style="width: 60upx;height: 60upx;margin-top: 30upx;" @tap='close'></image>
				</view>
			</view>
		</view>

		<view class="bottom-box">
		  <helang-tab-bar-bulge :fixed-bottom="true"></helang-tab-bar-bulge>
		</view>
	</view>
</template>

<script src='./index.js'>


</script>

<style lang="less" scoped src='./index.less'>

</style>