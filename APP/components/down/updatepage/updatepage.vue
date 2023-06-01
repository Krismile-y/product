
<template>
  <view class="" >
    <!-- <button @tap="upgrade">更新</button> -->
	<view @tap="upgrade" style="font-size: 28upx;">
		<!-- 检查更新 -->
		{{title}}
	</view>
	
    <view class="download">
      <uni-popup ref="popup" type="center">
        <view class="upgrade " style="padding-bottom: 0upx;">
          <!-- <view class="logo">
            <image src="./static/upgrade.png"  style="width: 120upx;height: 120upx;"/>
          </view> -->
          <view class="content " style="height: 240upx;">
            <view class="title dis" style="width: 100%">
              <text>{{upgrading?"正在升级":"发现新版本"+versionStr}}</text>
            </view>
			
            <view class="container " style="margin-top: 30upx;">
              <view class="descriptions" style="height: 60upx;margin-top: 0upx;">
                <text>{{upgrading?"正在为您下载,请耐心等待":"本次版本更新描述内容:"}}</text>
              </view>
			  
              <view class="details" v-if="!upgrading" style="width: 100%;">
				  <!-- <view class="item"  style="width: 100%;height: 20upx;">
				   
				  </view> -->
                <!-- <view class="item"  style="width: 100%;height: 40upx;margin-top: -20upx;">
				  <view style="width: 300upx;margin-right: 50upx;">1.新增了一些功能</view>
                </view> -->
				
					<view class="item"  style="width: 100%;margin-top: 10upx;" >
					  <view style="width: 95%;margin: 0 auto;text-indent: 30upx;">{{vfont}}</view>
					 
					</view>	
				
				
					
              </view>
			  
              <view v-else class="prpgroess">
                <progress
                  :percent="downloadTime"
                  active-mode="forwards"
                  activeColor="red"
                  active
                  stroke-width="4"
                  show-info
                />
              </view>
            </view>
            
			<view v-if="!upgrading" class="btn-group" style="margin-top:10upx;">
              <view class="cancel" @tap="hiddenUppop">
                <text>取消</text>
              </view>
              <view class="confirm" @tap="upgradeEvent">
                <text>确定</text>
              </view>
            </view>
            <view v-else class="btn-group"style="margin-top: 30upx;">
              <view v-if="!isForceUpgrade" class="cancel" @tap="abortDownload">
                <text>取消下载</text>
              </view>
              <view v-if="!isForceUpgrade" class="confirm" @tap="hiddenUpgradeEvent">
                <text>后台下载</text>
              </view>
            </view>
			
          </view>
        </view>
      </uni-popup>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import uniPopup from "./uni-popup/uni-popup.vue";
import uniPopupMessage from "./uni-popup/uni-popup-message.vue";
import uniPopupDialog from "./uni-popup/uni-popup-dialog.vue";
export default {
  props:{
	  title:{
		  type:String
	  }
  },	
  data: () => ({
    // 版本代码
    versionCode: 28,
    // 版本字符串
    versionStr: "",
    // 是否更新
    upgrading: false,
    // 下载时间
    downloadTime: 0,
    // 定时器
    timer: null,
    // 是否强制更新
    isForceUpgrade: false,
    // 下载任务
    downloadTask: null,
    // 下载地址
    downloadUrl: "",
	anzhuo:"",
	ios:"",
	vfont:'先学习',//更新信息
  }),
  // 使用的组件
  components: {
    uniPopup,
    uniPopupMessage,
    uniPopupDialog,
  },
  methods: {
    // 取消更新
    hiddenUppop() {
      this.$refs.popup.close();
    },
    // 检测更新
    upgrade() {
      // TODO:
      // 这里可以使用ajax请求后台
      // 如果有新版本就更新
      // 如果没有新版本就不更新,并弹出提示
	  
	  let hasNewVersion = true;
	  let version=''
	  plus.runtime.getProperty(plus.runtime.appid, (appInfo) => {
	  	// appInfo为当前应用程序的所有信息
	  	// this.globalData.version = appInfo.version
	  	// this.globalData.versionCode = appInfo.versionCode
	  	console.log(JSON.stringify(appInfo));
	  	// 获取版本名称
	  	console.log(appInfo.version, '版本名称e');
	  	version = appInfo.version
	  	// 获取版本号
	  	console.log(appInfo.versionCode);
	  	// 获取当前应用id
	  	console.log(appInfo.appid);
	  });
	  
	  this.$fn.request('v', "GET", {}).then(res => {
	  	console.log(res.data.data)
	  	this.anzhuo = res.data.data.apk
	  	// console.log(res.data.data.ios,'ios')
	  	this.ios = res.data.data.ios
	  	console.log(res.data.data.v,'版本更新')
		this.vfont=res.data.data.renew
		
		if(res.data.data.v !== version){
			this.$refs.popup.open();
		}else{
			uni.showToast({
			  title: "恭喜您的应用是最新版本!",
			  duration: 2000,
			  icon: "none",
			});
		}
	  })
	  
      
      if (hasNewVersion) {
        // this.$refs.popup.open();
      } else {
        // uni.showToast({
        //   title: "恭喜您的应用是最新版本!",
        //   duration: 2000,
        //   icon: "none",
        // });
        // 这是5+sdk调用原生的toast,如果你不喜欢上面的,那么把上面注释或者删除,使用这个,
        // 里面的消息可以自定义
        /**
         * plus.nativeUI.toast("恭喜您的应用是最新版本!");
         */
      }
    },
    // 点击更新
    upgradeEvent() {
      if (!this.upgrading) {
        let versionInfo = this.getVersionAndPlatform();
        console.log(versionInfo.platform);
        // 如果是正式更新需要打开下面这行注释
        // 这里只是做了简单的判断
        // 这里可以更据平台来下载
        // -------------------------
        // if (versionInfo) {
        // -------------------------
        // 注意这里逻辑需要自己去组织一下
        // 如果是iOS
        // 调用第三方程序打开指定的URL
        // -------------------------
		if(versionInfo.platform == 'Android'){
			// plus.runtime.openURL( this.anzhuo, errorCB, identity );
			this.downloadUrl=this.anzhuo
		}else{
			// plus.runtime.openURL( this.ios, errorCB, identity );
			this.downloadUrl=this.ios
		}
        //  plus.runtime.openURL( url, errorCB, identity );
        // -------------------------
        this.upgrading = true;
        // 如果是强制更新
        this.isForceUpgrade = false;
        // 这里是模拟更新
        // this.timer = setInterval(() => {
        //   this.downloadTime++;
        //   if (this.downloadTime >= 100) {
        //     this.downloadTime = 0;
        //     if (this.$refs.popup) {
        //       this.$refs.popup.close();

        //       setTimeout(() => {
        //         this.upgrading = false;
        //       }, 200);
        //     }

        //     clearInterval(this.timer);
        //   }
        // }, 1000);
        // 注意：
        // 支持以下类型安装包：
        // 1. 应用资源安装包（wgt），扩展名为'.wgt'；
        // 2. 应用资源差量升级包（wgtu），扩展名为'.wgtu'；
        //  3. 系统程序安装包（apk），要求使用当前平台支持的安装包格式。
        // 注意：仅支持本地地址，调用此方法前需把安装包从网络地址或其他位置放置到运行时环境可以访问的本地目录。
        // 这是5+sdk install 的地址 : http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.install
        // -----------------------
        // 正式下载请打开这里的注释
        this.downloadApplications();
        // }
        // -----------------------
      }
    },
    // 后台下载
    hiddenUpgradeEvent() {
      this.$refs.popup.close();
    },
    // 检测平台和当前app版本号
    getVersionAndPlatform() {
      // 这里try-catch是因为，当前代码是在浏览器上调试的
      // 由于浏览器不支持所以加了try-catch
			// 你也可以加这个玩意
			// #ifdef APP-PLUS
			
			// #endif
      // 你可以删除
      try {
        // 获取版本号
        let version = plus.runtime.version;
        // 获取当前平台
        // - Android
        // - Ios
        // 两种平台
        let platform = plus.os.name;
        return {
          version: version,
          platform: platform,
        };
      } catch {
        console.error("当前平台不支持5+SDK!");
      }
    },
    // 下载
    downloadApplications() {
      // 建立下载任务
      this.downloadTask = uni.downloadFile({
        // 下载地址
        url: this.downloadUrl,
		 // url: this.anzhuo,
        success: (res) => {
          if (res.statusCode === 200) {
            // 把当前app保存下载
            uni.saveFile({
              tempFilePath: res.tempFilePath,
              success: (resp) => {
                // 保存成功
                var savedFilePath = resp.savedFilePath;
								const installPath =  plus.io.convertLocalFileSystemURL( savedFilePath );
                // 安装
                this.installApplications({
                  filePath: installPath,
                  success: (res) => {
                    console.info(res);
                  },
                  error: (err) => {
                    console.log(err);
                  },
                });
              },
              fail: (err) => {
                // 保存失败
                console.error(err);
              },
            });
          }
        },
      });

      this.downloadTask.onProgressUpdate((res) => {
        // 下载进度
        this.downloadTime = res.progress;
        console.log("下载进度" + res.progress);
        console.log("已经下载的数据长度" + res.totalBytesWritten);
        console.log("预期需要下载的数据总长度" + res.totalBytesExpectedToWrite);
      });
    },
    // 取消下载
    abortDownload() {
      this.downloadTime = 0;
      if (this.$refs.popup) {
        this.$refs.popup.close();
        setTimeout(() => {
          this.upgrading = false;
        }, 200);
      }

      clearInterval(this.timer);
      if (this.downloadTask) {
        this.downloadTask.abort();
      }
    },
    //安装
    installApplications({filePath, success, error}) {
      plus.runtime.install(
        filePath,
        { force: this.isForceUpgrade },
        success,
        error
      );
    },
  },
  computed: {},
  watch: {},

  // vue周期函数--初始化执行完毕
  created() {},
  // vue周期函数--数据更新后
  beforeUpdate() {},

  // 小程序周期函数--监听页面加载
  onLoad(options) {},
  // 小程序周期函数--监听页面初次渲染完成
  onReady() {},
  // 小程序周期函数--监听页面显示
  onShow() {},
  // 小程序周期函数--监听页面隐藏
  onHide() {},
  // 小程序周期函数--监听页面卸载
  onUnload() {},
  // 小程序页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {},
  // 小程序页面上拉触底事件的处理函数
  onReachBottom() {},
  // 小程序用户点击右上角分享
  /* onShareAppMessage() {}, */
  // 小程序页面相关事件处理函数--监听页面滚动
  /* onPageScroll() {}, */
  // 小程序页面相关事件处理函数--tab页点击
  /* onTabItemTap() {} */
};
</script>

<style >
.download .logo {
  width: 208upx;
  
}

.download .upgrade {
  position: relative;
  background: #fff;
  width: 468upx;
 /* min-height: 238upx; */
  border-radius: 20upx;
}
.download .logo image {
  width: 208upx;
  height: 208upx;
  position: absolute;
  top: -40upx;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.download .content {
  padding-top: 40upx;
}
.download .content .title {
  text-align: center;
  font-size: 30upx;
  font-weight: bold;
}

.download .content .container {
  color: #666;
}
.download .content .container .descriptions {
  padding: 0upx 30upx;
  text-align: center;
  font-size: 28upx;
}
.download .content .container .details,
.download .content .prpgroess {
  padding: 16upx 46upx;
  box-sizing: border-box;
  font-size: 24upx;
}
.download .content .prpgroess {
  padding: 16upx 22upx;
  /* margin: 20upx 0; */
}
.download .content .btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.download .content .btn-group view {
  width: 200upx;
  height: 68upx;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 14upx; */
  font-size: 24upx;
  border-radius: 16upx;

}
.download .content .btn-group view:last-child {
  background: #ef5656;
  color: #fff;
}
.btn-group{
	height: 120upx;
}
.download{
	
}
.upgrade{
	min-height: 500upx;
}
</style>
