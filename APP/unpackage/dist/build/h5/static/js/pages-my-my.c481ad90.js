(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0919":function(t,i,e){"use strict";e.r(i);var a=e("1054"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},1054:function(t,i,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("0dd2")),o={components:{"helang-tab-bar-bulge":n.default},data:function(){return{show:!1,info:{},today:"",out:0,zhuangtai:"",shousuoType:!1,jiluList:[{name:"安全保障",url:"../../static/newMy/anquanbaozhang.png",go:"safe"},{name:"银行卡绑定",url:"../../static/newMy/yinhangka.png",go:"bankcard"},{name:"实名认证",url:"../../static/newMy/shiming.png",go:"revisePassword"},{name:"设置",url:"../../static/newMy/shezhi.png",go:"setting"}],huodongList:[{name:"投资明细",url:"../../static/newMy/touzi.png",go:"record"},{name:"收益明细",url:"../../static/newMy/shouyi.png",go:"income"},{name:"提现明细",url:"../../static/newMy/tixian.png",go:"twithdrawal"},{name:"积分明细",url:"../../static/newMy/jifen.png",go:"jifenminxi"},{name:"绿币明细",url:"../../static/newMy/lvbi.png",go:"lvbi"},{name:"碳票明细",url:"../../static/newMy/tanpiao.png",go:"tanpiao"},{name:"碳汇明细",url:"../../static/newMy/tanhui.png",go:"tanhui"},{name:"公益明细",url:"../../static/newMy/gongyi.png",go:"gongyiDetail"}]}},onBackPress:function(t){if(0==this.out?(this.out++,uni.showToast({duration:1e3,title:"再按一次退出程序",icon:"none"})):this.out>=1&&(plus.runtime.quit(),"android"===plus.os.name.toLowerCase()&&plus.runtime.quit(),uni.removeStorageSync("token")),"backbutton"===t.from)return this.overlayShow=!0,!0},onShow:function(){var t={is_whole:"1"};this.$fn.request("user","GET",t).then((function(t){uni.setStorageSync("user_info",t.data.data)})),this.out=0,"my"==uni.getStorageSync("name")&&(this.$store.state.one=!0,this.$store.state.two=!0,this.$store.state.three=!0,this.$store.state.four=!1)},onLoad:function(){var t=this;console.log(uni.getStorageSync("user_info")),this.info=uni.getStorageSync("user_info"),console.log(this.info.is_real_name,"用户状态");var i=this.info.is_real_name;0==i?this.zhuangtai="未实名":1==i?this.zhuangtai="提交申请":2==i?this.zhuangtai="通过申请":3==i&&(this.zhuangtai="拒绝申请");var e={is_whole:"1"};this.$fn.request("income","GET",e).then((function(i){t.today=i.data.data.today})),this.$fn.request("qrcode","GET",{}).then((function(t){}))},methods:{shousuo:function(){this.shousuoType=!this.shousuoType},go:function(t,i){if("guanwnag"!=t)return"revisePassword"==t?(console.log("999"),void uni.navigateTo({url:"/pages/revisePassword/revisePassword?type=1"})):void uni.navigateTo({url:"/pages/".concat(t,"/").concat(t)});uni.navigateTo({url:"/pages/webview/webview?url=http://gw.tzhreefvg.top/"})},goDetails:function(t){1==t?uni.navigateTo({url:"/pages/tanhui/tanhuiDetails"}):2==t?uni.navigateTo({url:"/pages/tanpiao/tanpiaoDetails"}):uni.navigateTo({url:"/pages/lvbi/lvbiDetails"})},queding:function(){this.show=!1},goIndex:function(){uni.navigateTo({url:"/pages/webview/webview?url=http://gw.tzhreefvg.top/"})}}};i.default=o},"10f1":function(t,i,e){"use strict";e.r(i);var a=e("5a73"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"19fb":function(t,i,e){t.exports=e.p+"static/img/tuoyuan1.1eadee5f.png"},"33e2":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={airelFloatball:e("5664").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content",staticStyle:{"padding-bottom":"0"}},[a("airel-floatball"),a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"topBox"},[a("v-uni-view",{staticClass:"t "},[a("v-uni-view",{staticClass:"left dis"},[a("v-uni-image",{attrs:{src:t.info.head_img,alt:""}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"user"},[a("v-uni-view",{staticClass:"username"},[t._v(t._s(t.info.user_name))]),a("v-uni-view",{staticClass:"shiming dis"},[a("v-uni-image",{staticStyle:{width:"20upx",height:"20upx","margin-right":"10upx"},attrs:{src:e("3e55"),mode:""}}),t._v(t._s(t.zhuangtai))],1)],1),a("v-uni-view",{staticClass:"code"},[t._v("我的推荐码:"+t._s(t.info.agent_id))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"zongshouyi"},[a("v-uni-view",{staticClass:"one disc"},[a("v-uni-view",{staticStyle:{color:"#fff"}},[t._v("总收益")]),a("v-uni-view",{staticStyle:{"font-weight":"600","font-size":"42upx",color:"#fff"}},[t._v(t._s(t.info.money_balance))])],1),a("v-uni-view",{staticClass:"two disc"},[a("v-uni-view",{staticClass:"t",staticStyle:{width:"100%",height:"60%",display:"flex"}},[a("v-uni-view",{staticClass:"twoItem disc"},[a("v-uni-view",[t._v("每日收益")]),a("v-uni-view",[t._v(t._s(t.today))])],1),a("v-uni-view",{staticClass:"twoItem disc"},[a("v-uni-view",[t._v("可提现金额")]),a("v-uni-view",[t._v(t._s(t.info.money_approve))])],1)],1),a("v-uni-view",{staticClass:"last dis",staticStyle:{"margin-top":"-30upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("withdrawal")}}},[t._v("提现申请")])],1)],1),a("v-uni-view",{staticClass:"three"},[a("v-uni-view",{staticClass:"threeItem",staticStyle:{"background-image":"url('../../static/newMy/three.png')"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(1)}}},[a("v-uni-view",{staticStyle:{"padding-left":"20upx","padding-top":"10upx"}},[t._v("我的碳汇")]),a("v-uni-view",{staticStyle:{"padding-left":"20upx"}},[t._v(t._s(t.info.money_converge))])],1),a("v-uni-view",{staticClass:"threeItem",staticStyle:{"background-image":"url('../../static/newMy/two.png')"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(2)}}},[a("v-uni-view",{staticStyle:{"padding-left":"20upx","padding-top":"10upx"}},[t._v("我的碳票")]),a("v-uni-view",{staticStyle:{"padding-left":"20upx"}},[t._v(t._s(t.info.money_vote))])],1),a("v-uni-view",{staticClass:"threeItem",staticStyle:{"background-image":"url('../../static/newMy/lvbibg.png')"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(3)}}},[a("v-uni-view",{staticStyle:{"padding-left":"20upx","padding-top":"10upx"}},[t._v("我的绿币")]),a("v-uni-view",{staticStyle:{"padding-left":"20upx"}},[t._v(t._s(t.info.money_green))])],1)],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"shu"}),a("v-uni-view",{staticClass:"tt"},[t._v("个人中心")]),a("v-uni-view",{staticClass:"zhankaiImg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shousuo.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e("402e"),mode:""}})],1)],1),a("v-uni-view",{staticClass:"huodongBox dis",class:{huodongBox1:t.shousuoType}},t._l(t.huodongList,(function(i){return a("v-uni-view",{staticClass:"huodongItem disc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go(i.go)}}},[a("v-uni-view",{staticClass:"yuan dis"},[a("v-uni-image",{attrs:{src:i.url,mode:""}})],1),a("v-uni-view",{staticStyle:{"margin-top":"10upx"}},[t._v(t._s(i.name))])],1)})),1),t._l(t.jiluList,(function(i,n){return a("v-uni-view",{staticClass:"money"},[a("v-uni-view",{staticClass:"moneyItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go(i.go,n)}}},[a("v-uni-image",{attrs:{src:i.url,mode:""}}),t._v(t._s(i.name)),a("v-uni-view",{staticClass:"pos dis"},[a("v-uni-image",{attrs:{src:e("eb4f"),mode:""}})],1)],1)],1)})),a("helang-tab-bar-bulge")],2)},o=[]},"3e55":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAHtJREFUKFNtz8ENgmAMhuH3Mx5YgUXYQg6EI3EOmADmMBzFg27hIowAB2NJTSXmj9+lbfKkaUXEzArgGmMt6em9fsAdOMX8kFSmoAfaAIOkLgVH4BzgIun1AWaWAQ2QA4cAb2AGRgcTUH1vSerNwQL4ln9ZHfi6/ZtE2Qa1nCincJBwXgAAAABJRU5ErkJggg=="},"402e":function(t,i){t.exports="data:image/png;base64,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"},"4a83":function(t,i,e){var a=e("a0f8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("49d2816e",a,!0,{sourceMap:!1,shadowMode:!1})},5664:function(t,i,e){"use strict";e.r(i);var a=e("cff7"),n=e("10f1");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("f1b2");var s,A=e("f0c5"),u=Object(A["a"])(n["default"],a["b"],a["c"],!1,null,"d45bc18c",null,!1,a["a"],s);i["default"]=u.exports},"5a73":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,a=i.clientY-this.start.y,n=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height,A=40;this.left=e<0?0:e>n-A?n-A:e,this.top=a<o?o:a>s?s:a}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var a=this.safeArea.width-20,n=t.changedTouches[0].clientX;n>.5*a?(this.isleft=!1,this.left=a-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=a},"5e9d":function(t,i,e){t.exports=e.p+"static/img/bg.84f24563.png"},"7e60":function(t,i,e){"use strict";var a=e("4a83"),n=e.n(a);n.a},"7ff1":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},a0f8:function(t,i,e){var a=e("24fb"),n=e("1de5"),o=e("5e9d"),s=e("19fb"),A=e("aac5");i=a(!1);var u=n(o),g=n(s),r=n(A);i.push([t.i,".content[data-v-29d96886]{background-color:#f7f8fa}.top[data-v-29d96886]{width:100%;height:%?300?%;background-image:url("+u+");background-repeat:no-repeat;background-size:100% 100%;position:relative;margin-top:0}.top .topBox[data-v-29d96886]{position:absolute;width:100%;height:%?96?%;top:%?36?%;left:0}.top .topBox .t[data-v-29d96886]{width:%?683?%;height:%?96?%;margin:%?0?% auto;display:flex}.top .topBox .t .left[data-v-29d96886]{width:96uupx;height:100%}.top .topBox .t .left uni-image[data-v-29d96886]{width:%?96?%;height:%?96?%;border-radius:50%}.top .topBox .t .right[data-v-29d96886]{height:100%;box-sizing:border-box;padding-left:%?36?%}.top .topBox .t .right .user[data-v-29d96886]{display:flex}.top .topBox .t .right .user .username[data-v-29d96886]{overflow-wrap:break-word;color:#272727;font-size:%?36?%;font-family:PingFangSC-Medium;font-weight:600;text-align:left;white-space:nowrap}.top .topBox .t .right .user .shiming[data-v-29d96886]{overflow-wrap:break-word;color:#fff;font-size:%?2?%;font-weight:400;text-align:left;white-space:nowrap;background-color:red;margin-left:%?20?%;background-color:#1ac286;padding:%?1?%;padding-left:%?8?%;padding-right:%?8?%;border-radius:%?6?%}.top .topBox .t .right .code[data-v-29d96886]{overflow-wrap:break-word;color:#ccc;font-size:%?30?%;font-weight:NaN;text-align:left;white-space:nowrap;margin-top:%?10?%}.zongshouyi[data-v-29d96886]{height:%?444?%;width:%?684?%;margin:0 auto;margin-top:%?-140?%;border:%?1?% solid #ccc;border-radius:%?30?%;background-color:#e5f7f1}.zongshouyi .one[data-v-29d96886]{width:100%;height:40%;background-image:url("+g+");background-repeat:no-repeat;background-size:100% auto;border-radius:0 0 26% 26%}.zongshouyi .two[data-v-29d96886]{background-image:url("+r+");background-repeat:no-repeat;background-size:100% 100%;border-radius:30% 30% 0 0 ;width:100%;height:60%}.zongshouyi .two .twoItem[data-v-29d96886]{width:50%;height:80%}.zongshouyi .two .last[data-v-29d96886]{width:80%;height:%?80?%;background-color:#07c07e;border-radius:%?30?%;color:#fff}.three[data-v-29d96886]{font-size:%?30?%;font-weight:550;width:%?684?%;height:%?112?%;margin:%?24?% auto;display:flex;justify-content:space-around}.three .threeItem[data-v-29d96886]{width:%?220?%;height:100%;background-repeat:no-repeat;background-size:100% auto}.title[data-v-29d96886]{width:%?684?%;margin:0 auto;height:%?54?%;display:flex;align-items:center;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:600;color:#272727;line-height:%?40?%}.title .shu[data-v-29d96886]{width:%?10?%;height:%?24?%;background:#02ad70;border-radius:%?5?%;margin-right:%?12?%}.title .tt[data-v-29d96886]{flex:1}.title .zhankaiImg[data-v-29d96886]{width:%?50?%;height:%?50?%}.title .zhankaiImg uni-image[data-v-29d96886]{width:100%;height:100%}.huodongBox[data-v-29d96886]{margin:%?30?% auto 0;width:%?684?%;height:0;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;transition:all .7s ease 0s}.huodongBox .huodongItem[data-v-29d96886]{height:%?180?%;width:%?161?%;margin-left:%?5?%;margin-top:%?10?%}.huodongBox .huodongItem .yuan[data-v-29d96886]{width:%?107?%;height:%?107?%;background-color:#fff;border-radius:50%;margin-bottom:%?10?%}.huodongBox .huodongItem .yuan uni-image[data-v-29d96886]{width:%?67?%;height:%?67?%}.huodongBox1[data-v-29d96886]{height:%?382?%}.money[data-v-29d96886]{width:100%;height:%?104?%;background-color:#fff;position:relative}.money .moneyItem[data-v-29d96886]{width:90%;height:100%;border-bottom:%?1?% solid #ccc;margin:0 auto;display:flex;align-items:center}.money .moneyItem uni-image[data-v-29d96886]{width:%?56?%;height:%?56?%;margin-right:%?20?%}.money .moneyItem .pos[data-v-29d96886]{width:%?100?%;height:100%;position:absolute;right:0;top:0}.money .moneyItem .pos uni-image[data-v-29d96886]{width:%?36?%;height:%?36?%}",""]),t.exports=i},a380:function(t,i,e){var a=e("7ff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("74a34bff",a,!0,{sourceMap:!1,shadowMode:!1})},aac5:function(t,i){t.exports="data:image/png;base64,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"},bee3:function(t,i,e){"use strict";e.r(i);var a=e("33e2"),n=e("0919");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("7e60");var s,A=e("f0c5"),u=Object(A["a"])(n["default"],a["b"],a["c"],!1,null,"29d96886",null,!1,a["a"],s);i["default"]=u.exports},cff7:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},eb4f:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANFJREFUOE+lkjEOglAQRGcTSDTxIvZ2djZ6ALXyBGrDXzgExV+0wANoZWuvvd7CUygFrKEwMQb8QbbdzNvMzBJaDrXUoxKQJMkUQDcIgoPrQCVARJYAtqo6YebzL0itBRE5AhgVRTEIw/BeB6kFpGnay7LsBuAJYGiMeVRBfoYYx3Hf9/2rqp6YedEYUAqstTMiKu2sjTG7b4izxlaA0oLneVcAzS28Q1TVJxE1D7FVjdbaFRFt8jwfR1F0afxIIjJX1Q4z7/96ZZfoc++s0QV7Ab/ZVxFbeEO0AAAAAElFTkSuQmCC"},f1b2:function(t,i,e){"use strict";var a=e("a380"),n=e.n(a);n.a}}]);