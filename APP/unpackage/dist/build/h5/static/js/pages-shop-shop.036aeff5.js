(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shop"],{"03c0":function(t,e,i){"use strict";i.r(e);var a=i("a2f5"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},4154:function(t,e,i){var a=i("cd3f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6e8796a2",a,!0,{sourceMap:!1,shadowMode:!1})},"9b2c":function(t,e,i){"use strict";var a=i("4154"),o=i.n(a);o.a},a2f5:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{out:0,item:{},show:!1,list:[],info:{},top:""}},onBackPress:function(t){if(0==this.out?(this.out++,uni.showToast({duration:1e3,title:"再按一次退出程序",icon:"none"})):this.out>=1&&("android"===plus.os.name.toLowerCase()&&plus.runtime.quit(),uni.removeStorageSync("token")),"backbutton"===t.from)return this.overlayShow=!0,!0},onShow:function(){this.out=0,this.info=uni.getStorageSync("user_info"),"shop"==uni.getStorageSync("name")&&(this.$store.state.one=!0,this.$store.state.two=!0,this.$store.state.three=!1,this.$store.state.four=!0)},mounted:function(){uni.pageScrollTo({duration:100,scrollTop:120})},onLoad:function(){var t=this;this.$fn.request("wares/list","GET",{}).then((function(e){console.log(e.data.data.data,"积分兑换商品列表"),204==e.data.code&&(uni.showToast({title:e.data.msg,icon:"none",duration:1e3}),setTimeout((function(){uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"})}),1500)),t.list=e.data.data.data}))},methods:{sign:function(){uni.navigateTo({url:"/pages/sign/sign"})},duihuan:function(){var t=this;console.log(uni.getStorageSync("address"));var e={wid:this.item.id,aid:uni.getStorageSync("address").id};this.$fn.request("wares/order","POST",e).then((function(e){if(1==e.data.code){uni.showToast({duration:1e3,title:"兑换成功"}),t.show=!1,uni.pageScrollTo({duration:100,scrollTop:120});t.$fn.request("user","GET",{is_whole:"1"}).then((function(e){console.log(e.data.data.money_integral,"用户信息"),t.info.money_integral=e.data.data.money_integral,uni.setStorageSync("user_info",e.data.data)}))}else uni.showToast({duration:1e3,title:e.data.msg,icon:"error"})}))},power:function(){},go:function(t){uni.pageScrollTo({duration:100,scrollTop:0}),console.log(t),this.item=t},open:function(){},close:function(){this.show=!1,uni.pageScrollTo({duration:100,scrollTop:120})},address:function(){uni.navigateTo({url:"/pages/address/address"})}}};e.default=a},be91:function(t,e,i){t.exports=i.p+"static/img/heisebg.e11014d0.jpg"},cd3f:function(t,e,i){var a=i("24fb"),o=i("1de5"),n=i("be91");e=a(!1);var s=o(n);e.push([t.i,".item[data-v-a357e1be]{width:85%;height:%?45?%;display:flex;font-weight:600;font-size:%?36?%}.item .left[data-v-a357e1be]{width:50%;height:100%;display:flex;align-items:center;padding-left:%?30?%}.item .right[data-v-a357e1be]{width:50%;height:100%;display:flex;align-items:center;padding-right:%?30?%;justify-content:right}.box[data-v-a357e1be]{width:98%;margin:%?30?% auto;display:flex;align-items:center;flex-wrap:wrap}.box .shop[data-v-a357e1be]{width:48.5%;margin-top:%?20?%}.box .shop uni-image[data-v-a357e1be]{border-radius:%?25?%;width:100%;height:%?300?%}.box .shop .title[data-v-a357e1be]{font-weight:600}.box .shop .detail[data-v-a357e1be]{font-size:%?30?%}.shopDetail[data-v-a357e1be]{background-color:#f3f3f3;width:100%;height:100vh}.shopDetail uni-image[data-v-a357e1be]{width:100%;height:%?500?%}.shopDetail .biaoti[data-v-a357e1be]{width:100%;height:%?70?%;display:flex;box-sizing:border-box;align-items:center;padding-left:%?20?%;margin-top:%?20?%}.shopDetail .biaoti .left[data-v-a357e1be]{width:%?140?%;padding-top:%?10?%;padding-bottom:%?10?%;color:#fff;background-color:red;border-radius:%?10?%;margin-right:%?20?%}.shopDetail .biaoti uni-text[data-v-a357e1be]{font-weight:600}.shopDetail .tishi[data-v-a357e1be]{color:red;font-size:%?28?%;padding-left:%?20?%}.shopDetail .buy[data-v-a357e1be]{width:%?520?%;height:%?70?%;margin:%?30?% auto;background-color:#e6e6e6;font-weight:600}.shopDetail .de[data-v-a357e1be]{width:100%;margin-top:%?20?%;height:%?120?%;background-color:#fff;display:flex;align-items:center;box-sizing:border-box;padding-left:%?20?%}.shopDetail .btn[data-v-a357e1be]{width:%?520?%;height:%?70?%;margin:%?30?% auto;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);background-color:#54d27e;font-weight:600;color:#fff}.popup[data-v-a357e1be]{width:100%;height:%?1130?%}.top[data-v-a357e1be]{width:100%;height:%?400?%;background-color:#4bc93e;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);border-bottom-left-radius:5.4em 5.4em}.top .shang[data-v-a357e1be]{width:90%;margin:%?0?% auto;height:%?200?%;padding-top:%?10?%;display:flex;padding-top:%?30?%}.top .shang .left[data-v-a357e1be]{width:30%;height:100%}.top .shang .left uni-image[data-v-a357e1be]{width:70%;height:70%;border-radius:%?20?%}.top .shang .center[data-v-a357e1be]{width:60%;height:100%;color:#fff;font-size:%?36?%;font-weight:600}.top .shang .center .one[data-v-a357e1be]{margin-top:20px;margin-bottom:10px;padding-left:%?10?%}.top .shang .center .two[data-v-a357e1be]{padding-left:%?10?%}.top .shang .right[data-v-a357e1be]{width:40%;height:100%;display:flex;justify-content:right;align-items:center}.top .shang .right uni-image[data-v-a357e1be]{width:%?90?%;height:%?90?%;margin-right:%?20?%}.top .xia[data-v-a357e1be]{width:90%;margin:%?0?% auto;height:%?206?%;border-radius:%?20?%}.top .xia .boxs[data-v-a357e1be]{width:100%;height:100%;font-size:%?38?%;display:flex}.top .xia .boxs .address[data-v-a357e1be]{width:50%;display:flex;height:100%;position:relative}.top .xia .boxs .address uni-image[data-v-a357e1be]{width:%?100?%;height:%?100?%}.shiming[data-v-a357e1be]{width:%?120?%;height:%?70?%;background-color:#fff;border-radius:%?24?%}.av[data-v-a357e1be]{width:100%;height:%?120?%;display:flex;box-sizing:border-box}.av .left[data-v-a357e1be]{width:70%;height:100%;display:flex;justify-content:center;flex-direction:column;padding-left:%?30?%}.av .right[data-v-a357e1be]{width:30%;height:100%}.av .right uni-image[data-v-a357e1be]{width:%?110?%;height:%?110?%;border-radius:%?10?%}.newTop[data-v-a357e1be]{width:100%;height:%?400?%;background-image:url("+s+");background-size:100% auto;color:#fff;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;padding-left:%?30?%;font-size:%?36?%}.newTop uni-view[data-v-a357e1be]{margin-top:%?10?%}.toAddress[data-v-a357e1be]{width:100%;height:%?120?%;position:absolute;bottom:0;left:0;display:flex}.toAddress .item[data-v-a357e1be]{width:50%;height:100%}.toAddress .item uni-image[data-v-a357e1be]{width:%?80?%;height:%?80?%}",""]),t.exports=e},dc7c:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uPopup:i("f133").default,bottom:i("8c53").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content",staticStyle:{"min-height":"200vh","padding-bottom":"100upx"}},[a("v-uni-view",[a("u-popup",{attrs:{show:t.show,round:"60"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"popup ",staticStyle:{"margin-top":"50px"}},[a("v-uni-scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"shopDetail"},[a("v-uni-view",{staticStyle:{"background-color":"#fff","padding-bottom":"30upx"}},[a("v-uni-image",{attrs:{src:t.item.head_img}}),a("v-uni-view",{staticClass:"biaoti"},[a("v-uni-view",{staticClass:"left dis"},[t._v("绿色商品")]),a("v-uni-text",[t._v("绿色中国冬日暖心水壶")])],1),a("v-uni-view",{staticClass:"tishi"},[t._v("温馨提示：冬季暖心必备，家用小型电水壶")]),a("v-uni-view",{staticClass:"buy dis"},[t._v("您可以使用能量兑换商品")])],1),a("v-uni-view",{staticClass:"de"},[t._v("冬季暖心必备，家用小型电水壶")]),a("v-uni-view",{staticClass:"btn dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.duihuan.apply(void 0,arguments)}}},[t._v("兑换")])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"top",staticStyle:{position:"relative"}},[a("v-uni-view",{staticClass:"toAddress"},[a("v-uni-view",{staticClass:"item disc"},[a("v-uni-view",[t._v("我的积分")]),a("v-uni-view",[t._v(t._s(t.info.money_integral))])],1),a("v-uni-view",{staticClass:"item dis"},[a("v-uni-image",{attrs:{src:i("fd2a"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.address.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"av"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",[t._v("我的 推荐人：mr:li")]),a("v-uni-view",[t._v("我的积分："+t._s(t.info.money_integral))])],1),a("v-uni-view",{staticClass:"right dis"},[a("v-uni-image",{attrs:{src:"https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465",mode:""}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"newTop "},[a("v-uni-view",[t._v("可提现：0.00")]),a("v-uni-view",[t._v("每日收益：0.00")]),a("v-uni-view",[t._v("总收益：0.00")]),a("v-uni-view",[t._v("绿币：0.00")]),a("v-uni-view",[t._v("碳票：0.00")]),a("v-uni-view",[t._v("积分：0.00")])],1),a("v-uni-view",{staticClass:"box",staticStyle:{"margin-top":"60upx"}},t._l(t.list,(function(e){return a("v-uni-view",{staticClass:"shop disc",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go(e)}}},[a("v-uni-image",{attrs:{src:e.head_img,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}}),a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.wares_name))]),a("v-uni-view",{staticClass:"detail"},[t._v(t._s(e.wares_money)+"元")])],1)})),1),a("bottom")],1)},n=[]},f783:function(t,e,i){"use strict";i.r(e);var a=i("dc7c"),o=i("03c0");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("9b2c");var s=i("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"a357e1be",null,!1,a["a"],void 0);e["default"]=d.exports},fd2a:function(t,e,i){t.exports=i.p+"static/img/weizhi.289df278.png"}}]);