(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invite-invite"],{"17d1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return a}));var a={airelFloatball:i("e60e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"invite disc"},[i("v-uni-view",[i("airel-floatball")],1),i("v-uni-view",{staticClass:"newBox disc"},[i("v-uni-image",{attrs:{src:t.code}}),i("v-uni-view",{staticClass:"dis tuijianma"},[t._v("我的推荐码")]),i("v-uni-view",{staticClass:"dis id",staticStyle:{"font-size":"56upx"}},[t._v(t._s(t.info.id))])],1),i("v-uni-view",{staticClass:"two"},[i("v-uni-view",{staticClass:"itemONE dis"},[i("a",{attrs:{href:t.code}},[t._v("保存图片")])]),i("v-uni-view",{staticClass:"itemTWO dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.xin.apply(void 0,arguments)}}},[t._v("复制二维码链接")])],1)],1)},d=[]},"2a68":function(t,e,i){"use strict";i.r(e);var a=i("885e"),n=i.n(a);for(var d in a)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(d);e["default"]=n.a},4293:function(t,e,i){"use strict";i.r(e);var a=i("17d1"),n=i("2a68");for(var d in n)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(d);i("8651");var o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2f8d57ee",null,!1,a["a"],void 0);e["default"]=r.exports},8651:function(t,e,i){"use strict";var a=i("f9e4"),n=i.n(a);n.a},"885e":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0f01")),d={components:{backgroundPage:n.default},data:function(){return{info:{},code:"",title:"",qr_url:""}},onLoad:function(){var t=this;this.info=uni.getStorageSync("user_info"),this.$fn.request("qrcode","GET",{}).then((function(e){console.log(e.data.data.qr_url,"复制二维码链接地址"),t.qr_url=e.data.data.qr_url,console.log(e.data.data.qrcode,"用户二维码"),t.code=e.data.data.qrcode,t.title='<view class="wdtjm">我的推荐码:</view><br />\n            <view class="numberCode">'.concat(t.info.id,"</view>")})),console.log(this.info.id)},methods:{xin:function(){this.info=uni.getStorageSync("user_info"),console.log(this.info.id);var t=this.info.id;uni.setStorageSync("code",t),uni.setClipboardData({data:this.qr_url,success:function(){uni.showToast({title:"复制成功"})}})},fenxiang:function(){}}};e.default=d},bb74:function(t,e,i){var a=i("24fb"),n=i("1de5"),d=i("cf6a");e=a(!1);var o=n(d);e.push([t.i,".two[data-v-2f8d57ee]{width:%?622?%;height:%?100?%;margin-top:%?60?%;display:flex;justify-content:space-around}.two .itemONE[data-v-2f8d57ee]{width:%?220?%;height:%?100?%;background:#e2e2e8;border-radius:%?100?%}.two .itemTWO[data-v-2f8d57ee]{width:%?378?%;height:%?100?%;background:linear-gradient(270deg,#05d7aa,#04d381);border-radius:%?100?%}.newBox[data-v-2f8d57ee]{width:%?622?%;height:%?800?%;background:#fff;box-shadow:%?0?% %?6?% %?16?% %?0?% rgba(208,241,230,.2);border-radius:%?32?%}.newBox uni-image[data-v-2f8d57ee]{width:%?400?%;height:%?400?%;background:#d8d8d8;border-radius:%?24?%}.newBox .tuijianma[data-v-2f8d57ee]{width:100%;height:%?83?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#a1a1a1;margin-top:%?30?%}.newBox .id[data-v-2f8d57ee]{width:100%;height:%?80?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333}.invite[data-v-2f8d57ee]{width:100%;background-image:url("+o+");background-size:100% %?674?%;background-position:0 100% ;height:100vh;background-repeat:no-repeat}.invite .id[data-v-2f8d57ee]{width:50%;font-size:%?36?%}.invite[data-v-2f8d57ee] .help-title{top:5%;line-height:%?80?%;text-align:center}.invite[data-v-2f8d57ee] .help-title .wdtjm{font-size:16px;font-weight:500}.invite .invite-content[data-v-2f8d57ee]{width:100%;height:100%}.invite .invite-content .code-img[data-v-2f8d57ee]{width:100%;display:flex;justify-content:center}.invite .invite-content .code-img uni-image[data-v-2f8d57ee]{width:50%;height:%?360?%;margin:%?120?% auto %?40?%}.invite .btn[data-v-2f8d57ee]{color:#fff;width:80%;height:%?90?%;margin-top:%?30?%;background-color:#4bc93e;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);border-radius:%?30?%}",""]),t.exports=e},cf6a:function(t,e,i){t.exports=i.p+"static/img/background.67f7f5d6.png"},f9e4:function(t,e,i){var a=i("bb74");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4dbebaa7",a,!0,{sourceMap:!1,shadowMode:!1})}}]);