<template>
	<view style="width: 100%;height: 100vh;">
		
			<view>
				<airel-floatball />
			</view>
			<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
			<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>

			<view class="box">
				<!-- <view class="title">
   		<view class="shu"></view>
   		安全与服务
   		</view> -->
				<view class="msg">
					<!-- <view class="item disc" @tap="go('safe')">
   			<image src="../../static/setting/grrenxinxi.png" mode=""></image>
   			个人信息
   		</view> -->
					<view class="item disc">
            <view @tap="jump()" style="width: 100%;height: 100%;color: black;" class="disc" v-if="info.is_real_name == '2'">
            	<image src="../../static/c/erji.png"></image>
              我的客服
            </view>
            <view style="width: 100%;height: 100%;color: black;" class="disc" v-else @tap="dianjiTubiao">
              <image src="../../static/c/erji.png"></image>
              我的客服
            </view>

					</view>
					<view class="item disc" @tap="go('help')">
						<image src="../../static/setting/fankuihebangzhu.png" mode=""></image>
						反馈与帮助
					</view>

					<!--  #ifdef APP -->
					<view class="item disc" @tap="check">
						<image src="../../static/setting/gengxin.png" mode=""></image>
						<!-- 检查更新 -->
						<down title='检查更新' ref='down'></down>
					</view>
					<!--  #endif -->

					<view class="item disc" @tap="go('about')">
						<image src="../../static/setting/guanyuwomen.png" mode=""></image>
						关于我们
					</view>
				</view>
			</view>

			<view class="bottom dis">
				<!-- <view class="in dis" @tap="tuichu">
   		退出登录
   	</view> -->
				<view class="newBtn dis" @tap="tuichu">退出登录</view>
			</view>

			<view>

				<!-- <drag-button style="margin-bottom: 100upx;" :isDock="true" :existTabBar="true" @btntap="btntap"
   		@btnTouchstart="btnTouchstart" @btnTouchend="btnTouchend" /> -->

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
	import down from '../../components/down/updatepage/updatepage.vue'
	export default {
		components: {
			down
		},
		data() {
			return {
				version: "",
        info: uni.getStorageSync('user_info'),
        
			};
		},
		onBackPress(e) {
			console.log(e.from)
			if (e.from == 'backbutton') {

			}
		},
		onShow() {
			// 获取设备信息
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					// console.log(res)
				}
			})


		},
		methods: {
      herf(){
          return uni.getStorageSync('kefu')
      },
      dianjiTubiao() {
        this.$refs.error.showTips({
          msg: '请完成实名认证',
          duration: 2000
        })
      },
      // 跳转我的客服
      jump() {
        uni.navigateTo({
          url:'/pages/kefuPage/kefuPage'
        })
      },
			check() {
				//  #ifdef APP
				this.$refs.down.upgrade() //检查更新
				// #endif
			},
			btntap() {
				console.log('btntap')
				window.location = ('https://www.baidu.com')
			},
			btnTouchstart() {
				console.log('btnTouchstart')
			},
			btnTouchend() {
				console.log('btnTouchend')

			},
			go(name) {
				console.log(name)
				uni.navigateTo({
					url: `/pages/${name}/${name}`
				})
			},
			tuichu() {
				this.$store.state.current = ''
				uni.removeStorageSync('kefu');
				uni.removeStorageSync('token');
				uni.removeStorageSync('address');
				uni.removeStorageSync('current');
				uni.setStorageSync('gengxin', false) //app更新首页显示状态
				// uni.removeStorageSync('address');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less" src='./setting.less'>

</style>