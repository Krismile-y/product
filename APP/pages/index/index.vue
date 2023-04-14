<template>
	<view class="content" style="padding-top: 70upx;z-index: 99;">
		<navs></navs>
		<!-- 轮播 -->
		<swiper  :autoplay="true" :interval="3000" :duration="1000"
		style="width: 100%;height: 500upx;">
			<swiper-item style="width: 100%;height: 500upx;">
				<image src="https://img0.baidu.com/it/u=2616180438,3555003891&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500" mode="" style="width: 100%;height: 100%;"></image>
			</swiper-item>
			<swiper-item style="width: 100%;height: 500upx;">
				<image src="https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471" mode="" style="width: 100%;height: 100%;"></image>
			</swiper-item>
			<swiper-item style="width: 100%;height: 500upx;">
				<image src="https://qqpublic.qpic.cn/qq_public/0/0-3212253731-C467FDEB2CECD0A53CFA1BB0503F1D43/0?fmt=jpg&size=107&h=571&w=900&ppv=1.jpg" mode="" style="width: 100%;height: 100%;"></image>
			</swiper-item>
		</swiper>
		
		
		<!-- 八个标题 -->
		<view class="eight">
			<view class="item disc">
				<image src="../../static/index/pingtai.png"></image>
				<view class="title">平台攻略</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/shijie.png"></image>
				<view class="title">安全保障</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/lin.png"></image>
				<view class="title">待定</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/fenxiang.png"></image>
				<view class="title">分享赚钱</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/tuandui.png"></image>
				<view class="title">我的团队</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/shouyui.png"></image>
				<view class="title">我的收益</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/xiazia.png"></image>
				<view class="title">APP下载</view>
			</view>
			<view class="item disc">
				<image src="../../static/index/guanwang.png"></image>
				<view class="title">进入官网</view>
			</view>
		</view>
		
		<!-- 滚动通知 -->
		<view>
		      <u-notice-bar :text="text1" bgColor='#54d27e' color='#fff'></u-notice-bar>
		</view>
		
		<!-- 快捷 -->
		<view class="kuaijie">
			<view class="shu"></view>
			快捷选择专区
		</view>
		<view class="zhuanqu" @tap="huanbao()">
			<image src="https://p7.itc.cn/q_70/images01/20210705/0d6cce1353d7486591420067518b1a36.jpeg" mode=""></image>
			<image src="https://img2.baidu.com/it/u=1308583920,2982159146&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=667" mode=""></image>
		</view>
		
		<!-- 轮播 -->
		<swiper  :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item class="swiperItem">
				<view class="item dis">
					<image src="https://img2.baidu.com/it/u=2468362699,2612376962&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" mode=""></image>
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
		<view class="xinwen" @tap="xinwen">
			<view class="left">
				骆歆不主持LPL季后赛有两种可能，第一种就是在赛前的主持排序中没有骆歆，既然没有骆歆那她不上场就很正常，不过这种可能性不大
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
		<view class=" dis" v-for="(value,key,i) in posterList":class="{poster:posterList.one.length==nowNum?false:true}"  >
			<view class="box disc" >	
				<view style="width: 100%;height: 100%;" class="disc"   v-for="(item,index) in value"  v-show="index==nowNum?true:false">
					<image :src="item.src" mode="" style="width: 100%;height: 700upx;border-radius: 20upx;"></image>
					<image src="../../static/index/close.png" mode="" style="width: 60upx;height: 60upx;margin-top: 30upx;"@tap='close'></image>
				</view>
			</view>
		</view>
		
		<bottom ></bottom>
	</view>
</template>

<script src='./index.js'>
	
	
</script>

<style lang="less" scoped src='./index.less'>
	
</style>
