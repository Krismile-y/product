<template>
    <view class="main">
		<a :href="$store.state.kefu">
			<view class="box dis" style="z-index: 999;"
				:style="styleBall"
			    @blur="blur" tabindex="1" @tap="show" 
			    @touchstart.stop="touchstart" @touchmove.stop="touchmove" @touchend="touchend">
			   <a :href="herf()">
				    <image  :src="mainImg"  style="width: 100upx;height: 100upx;border-radius: 0%;"></image>
			   </a>
			</view>
		</a>
    </view>
</template>

<script>
	export default{
		name:"airel-floatball",
		props:{
			mainImg:{
				type:String,
				default:"../../static/c/erji.png"
			},
			// 初始坐标x、y
			x: {
				type: Number,
				default:uni.getStorageSync('x')
			},
			y: {
				type: Number,
				default:uni.getStorageSync('y')
			},
			// 是否开启吸边动画
			sunction:{
				type: Boolean,
				default: true
			},
			// 吸边动画时间
			time:{
				type: Number,
				default: 300
			}
		},
		data(){
			return {
				// 初始坐标为x、y，top、left用于保存坐标
				top: undefined, 
				left:undefined,
				//right:3,
				// 参考methods说明，保存(d1 - s)坐标
                start:{
					x:0,
					y:0
				},
				// 可否移动标志
				moveFlag: true,
				// 安全区域
				safeArea:{},
				// 吸边动画
				transition:'',
				isleft:true,
				
			}
		},
		computed:{
			styleBall(){
				let x = this.x;
				let y = this.y;
				let left = this.left;
				let top = this.top;
				let style = {
					left:2* (this.left === undefined & this.x>0? this.x:this.left)+'upx',
					top: 2*(this.top === undefined & this.y>0? y:this.top)+'upx',
					transition: this.transition
				}
				return style;
			}
		},
		methods:{
			show(){},
            blur: function(){
                console.log('blur');
            },
            focus: function(){
                console.log('focus');
            },
            tap: function(){
                console.log('tap');
            },
			doNothing:function(){},
			herf(){
				return uni.getStorageSync('kefu')
			}
			/*
			// 原理
			// s：开始移动组件坐标 m：现在组件坐标 d：手指变化坐标
			// d1：开始移动手指点击坐标 d2：现在手指坐标
			// m = s + d
			// d = d2 - d1
			// m = d2 - (d1 - s)
			// touchstart 获取(d1 - s)
			// touchmove 获取d2，m = d2 - (d1 - s)，设置界限
			// touchend 设置移动结束时的动作
			*/
            touchstart : function(e){
				let p = e.touches[0];
				let t = e.currentTarget;
				this.start.x= p.clientX - t.offsetLeft;
				this.start.y= p.clientY - t.offsetTop;
			},
			touchmove:function(e){
				if(!this.moveable()){ // 检测可否移动
					return;
				}
				let p = e.touches[0];
				let	x = p.clientX - this.start.x;
				let	y = p.clientY - this.start.y;
				let w = this.safeArea.width;
				let t = this.safeArea.top;
				let h = this.safeArea.height;
				let a = 40; // 悬浮球宽度
				this.left = (x<0)?0:((x>(w-a))?(w-a):x);
				this.top = (y<t)?t:(y>h?h:y);
			},
			touchend:function(e){
				if(!this.sunction) return; // 取消吸边
				let t = this.time;
				this.transition = `left ${t}ms`; // 设置吸边动画
				var w = this.safeArea.width - 20;
				const pageX = e.changedTouches[0].clientX;
				if(pageX > w*0.5){
					this.isleft = false;
					this.left = w-50;
				}
				else{
					this.isleft = true;
					this.left = 3;
				}
				setTimeout(()=>{
					this.transition = ""; // 消除吸边动画
				},t);
			},
			moveable: function(){
				return true;
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync(); //获取信息
			// 设置安全区域
			this.safeArea = {
				left: 0,
				right: res.windowWidth-20,
				top: res.windowTop,
				bottom: res.windowBottom,
				height: res.windowHeight,
				width: res.windowWidth
			}
		}
	}
	
</script>

<style lang="scss">
	.main{
		width: 100%;
		height: 100%;
	}
	image{
		width: 40upx;
		height: 40upx;
		z-index: 99;
		margin: 20upx;
	}
	.box{
		position: fixed;
		//left: 5upx;
		//top: 70%;
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		// background-color: rgba($color: #000000, $alpha: 0.5);
       // transition: left 10ms;
        outline: none; // 去除聚焦时的边框
	}
	.menu{
		color:white;
		position: fixed;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		background-color: rgba($color: #000000, $alpha: 0.8);
	}

</style>