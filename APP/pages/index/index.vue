<template>
	<view class="content" >
		<!-- 	<navs></navs>	 -->
      
		<view class="tops disc" style="background-color: #54d27e;height: 400upx;">
			<view style="padding-top: 106upx;color: #ffffff;letter-spacing: 8upx;font-size: 46upx;font-weight: 600;">绿色中国
			</view>

			<view style="width: 100%;height: 100%;" class="disc">

				<swiper :autoplay="true" :interval="3000" :duration="1000"
					style="width: 82%;height: 240upx; position: absolute;top: 200upx;margin: 0 auto;">
					<!-- <swiper-item style="width: 100%;height: 200upx;" v-for="(item,index) in banner" :key="index">
						<image   :src="item.img" mode="" style="width: 100%;height: 100%;border-radius: 20upx;"></image>
					</swiper-item>	 -->
					<swiper-item style="width: 100%;height: 200upx;" v-for="(item,index) in banner">
						<image :src="item.img" mode=""
							style="width: 100%;height: 100%;border-radius: 20upx;"></image>
					</swiper-item>
					<!-- <swiper-item style="width: 100%;height: 200upx;">
						<image src="../../static/index/swiper2.png" mode=""
							style="width: 100%;height: 100%;border-radius: 20upx;"></image>
					</swiper-item> -->
				</swiper>

			</view>
		</view>

		<!-- 轮播 -->



		<!-- 八个标题 -->
		<view class="eight" style="margin-top: 100upx;">
			<view class="item disc">
				<image src="../../static/newIndex/pingtai.png"></image>
				<view class="title">平台攻略</view>
			</view>
			<view class="item disc">
				<image src="../../static/newIndex/qiandao.png" @tap="goHome('sign')"></image>
				<view class="title">签到</view>
			</view>
			<view class="item disc">
				<image src="../../static/myimg/xiaoxi.png"></image>
				<view class="title">官方消息</view>
			</view>
			<view class="item disc">
				<image src="../../static/newIndex/fenxiang.png"></image>
				<view class="title">分享赚钱</view>
			</view>
			<view class="item disc">
				<image src="../../static/myimg/wode.png"></image>
				<view class="title">我的团队</view>
			</view>
			<view class="item disc">
				<image src="../../static/newIndex/shouyi.png"></image>
				<view class="title">我的收益</view>
			</view>
			<view class="item disc">
				<image src="../../static/newIndex/xiazia.png"></image>
				<view class="title">APP下载</view>
			</view>
			<view class="item disc">
				<image src="../../static/newIndex/guanwang.png"></image>
				<view class="title">进入官网</view>
			</view>
			<!-- 加个签到  + 得积分 -->
		</view>

		<!-- 滚动通知 -->
		<view>
			<u-notice-bar :text="text1" bgColor='#54d27e' color='#fff'></u-notice-bar>
		</view>

		<!-- 视屏 -->
		<!-- 	<view class="video dis" style="width: 98%;margin: 30upx auto;">
			<video src="" style="width: 100%;"></video>
		</view> -->

       

		<!-- 新手 -->
		<view class="news dis" @tap='xinshou'>
			新手体验
			<!-- <image src="../../static/index/xinshou.png" mode=""></image> -->
		</view>

		<!-- 快捷 -->
		<view class="kuaijie">
			<view class="shu"></view>
			快捷选择专区
		</view>
		<view class="zhuanqu disc" @tap="huanbao()">
			<view style="width: 100%; margin: 0 auto; display: flex;justify-content: space-between;">
				<image src="https://p7.itc.cn/q_70/images01/20210705/0d6cce1353d7486591420067518b1a36.jpeg" mode="">
				</image>
				<image
					src="https://img2.baidu.com/it/u=1308583920,2982159146&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=667"
					mode="" style="margin-left: 0upx;"></image>
			</view>
		</view>

		<!-- 轮播 -->
		<swiper :autoplay="true" :interval="3000" :duration="1000" class="swiper" :circular='true'>
			<swiper-item class="swiperItem">
				<view class="item dis">
					<image
						src="https://img2.baidu.com/it/u=2468362699,2612376962&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
						mode=""></image>
				</view>
				<view class="item disc" style="width: 40%;">
					<view class="tit">Overlay 遮罩层</view>
					<view class="de">创建一个遮罩层，用于强调特定的页面元素，</view>
				</view>
				<view class="item dis" style="width: 30%;">
					<view class="btn dis" @tap="business">查看详情</view>
				</view>
			</swiper-item>

		</swiper>

		<!-- xinwen -->
		<view class="kuaijie">
			<view class="shu"></view>
			热门新闻
		</view>
		<view class="xinwen" @tap="xinwen(index)" v-for="(item,index) in article" :key="index">
			<view class="left" v-html="item.content">
				<!-- {{item.content}} -->
			</view>
			<view class="right dis">
				<image src="../../static/my/jilu.png" mode=""></image>
			</view>
		</view>

		<!--  -->
		<view class="kuaijie">
			<view class="shu"></view>
			新闻阅读专区
		</view>
		<view class="zhengce" @tap="newsList">
			<image src="../../static/index/zhengce.jpg" mode=""></image>
		</view>
		<!--  -->

		<!-- 海报 -->
		<view class=" dis" v-for="(value,key,i) in posterList"
			:class="{poster:posterList.one.length==nowNum?false:true}" v-show="">
			<view class="box disc">
				<view style="width: 100%;height: 100%;" class="disc" v-for="(item,index) in value"
					v-show="index==nowNum?true:false">
					<image :src="item.src" mode="" style="width: 100%;height: 700upx;border-radius: 20upx;"></image>
					<image src="../../static/index/close.png" mode=""
						style="width: 60upx;height: 60upx;margin-top: 30upx;" @tap='close'></image>
				</view>
			</view>
		</view>

		<bottom :num='obj'></bottom>
	</view>
</template>

<script src='./index.js'>


</script>

<style lang="less" scoped src='./index.less'>

</style>
