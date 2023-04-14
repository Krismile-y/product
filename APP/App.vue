<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import "uview-ui/index.scss";
	// 设置整个项目的背景色
	page {
		// background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		// font-size: 14px;
		// color: #333;
		// padding: 10px;
	}
	.dis{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.disc{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	*{
	   margin: 0;
	   padding: 0;
	}
	a{
		text-decoration: none;		
	}
	.content{
		padding-bottom: 140upx;
	}
	.fix{
	 position: fixed;
	 left: 0;
	 bottom: 0;
	}
	// 顶部组件
	.tops{
		width: 100%;
		height: 400upx;
		border-bottom-left-radius:  4em 6em;
		background-color:#1fc9c2 ;
		.fanhui{
			width: 100%;
			height: 110upx;
			position: relative;
			image{
				width: 50upx;
				height: 50upx;
				position: absolute;
				top: 30upx;
				left: 20upx;
			}
			.title{
				color: #fff;
			}
		}
		.center{
			width: 100%;
			height: 290upx;
			color: #fff;
			.da{
				font-size: 62upx;
			}
			.xiao{
				font-size: 32upx;
				margin-top: 50upx;
			}
		}
	}
</style>
