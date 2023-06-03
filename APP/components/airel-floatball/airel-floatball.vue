<template>
	<view>
    <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
    <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<movable-area class="movable-area">
			<movable-view class="movable-view" :x="x()" :y="y()" direction="all" :inertia="true">
				<a :href="herf()" v-if="info.is_real_name == '2'">
					<image src="../../static/c/erji.png"></image>
				</a>
        <image src="../../static/c/erji.png" v-else @tap="dianjiTubiao"></image>
			</movable-view>
		</movable-area>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				// x: 0,		//x坐标
				// y: 320,		//y坐标
        info: uni.getStorageSync('user_info')
			}
		},
		methods:{
			herf(){
          return uni.getStorageSync('kefu')
			},
      dianjiTubiao() {
        this.$refs.error.showTips({
          msg: '请完成实名认证',
          duration: 2000
        })
      },
			x(){
				return uni.getStorageSync('x')
			},
			y(){
				return uni.getStorageSync('y')
			}
		}
	}
</script>
 
<style lang="scss">
	$all_width: 96rpx;
	$all_height:96rpx;
 
	.movable-area {
		height: 100vh;
		width: 750rpx;
		top: 0;
		position: fixed;
    z-index: 99999 !important;
		pointer-events: none;		//此处要加，鼠标事件可以渗透
		.movable-view {
			width: $all_width;
			height: $all_height;
			pointer-events: auto;	//恢复鼠标事件
			image {
				width: $all_width;
				height: $all_height;
			}
		}
	}
</style>
