<template>
	<view>
		<view class="box">
			<!-- <view class="title">
				<view class="shu"></view>
				安全与服务
				</view> -->
			<view class="msg">
				<view class="item disc" @tap="go('safe')">
					<image src="../../static/myimg/zhanghu.png" mode=""></image>
					账户安全
				</view>
				<view class="item disc" @tap="go('ensure')">
					<image src="../../static/myimg/baozhang.png" mode=""></image>
					安全保障
				</view>
				<view class="item disc">
					<image src="../../static/myimg/kefu.png" mode=""></image>
					我的客服
				</view>
				<view class="item disc" @tap="go('help')">
					<image src="../../static/myimg/fankui.png" mode=""></image>
					反馈与帮助
				</view>
				<view class="item disc">
					<image src="../../static/myimg/jiancha.png" mode=""></image>
					检查更新
				</view>
				<view class="item disc" @tap="go('about')">
					<image src="../../static/myimg/guanyu.png" mode=""></image>
					关于我们
				</view>
			</view>
		</view>
		
		<view class="bottom dis">
			<view class="in dis" @tap="tuichu">
				退出登录
			</view>
		</view>
	
	 <view>
	     
			   <drag-button
			       style="margin-bottom: 100upx;"
			       :isDock="true"
			       :existTabBar="true"
			       @btnClick="btnClick"
			       @btnTouchstart="btnTouchstart"
			       @btnTouchend="btnTouchend" />
		 
		<!-- <a href="">
			 <drag-button
			     style="margin-bottom: 100upx;"
			     :isDock="true"
			     :existTabBar="true"
			      />
		 </a> -->
		   
	    </view>
	</view>
</template>

<script>
	import x from '../../components/airel-floatball/airel-floatball.vue'
	export default {
		
		data() {
			return {
				
			};
		},
		methods:{
			btnClick(){
				console.log('btnClick')
				window.location = ('https://www.baidu.com')
			},
			btnTouchstart(){
				console.log('btnTouchstart')
			},
			btnTouchend(){
				console.log('btnTouchend')
				
			},
			go(name){
				console.log(name)
				uni.navigateTo({
					url:`/pages/${name}/${name}`
				})
			},
			tuichu(){
				uni.removeStorageSync('token');
				// uni.removeStorageSync('address');
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less" src='./setting.less'>

</style>
