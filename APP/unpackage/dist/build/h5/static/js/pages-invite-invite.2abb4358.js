(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invite-invite"],{"0017":function(t,i,e){var a=e("24fb"),n=e("1de5"),o=e("cf6a");i=a(!1);var d=n(o);i.push([t.i,".two[data-v-f27e1a94]{width:%?622?%;height:%?100?%;margin-top:%?60?%;display:flex;justify-content:space-around}.two .itemONE[data-v-f27e1a94]{width:%?220?%;height:%?100?%;background:#e2e2e8;border-radius:%?100?%}.two .itemTWO[data-v-f27e1a94]{width:%?378?%;height:%?100?%;background:linear-gradient(270deg,#05d7aa,#04d381);border-radius:%?100?%}.newBox[data-v-f27e1a94]{width:%?622?%;height:%?800?%;background:#fff;box-shadow:%?0?% %?6?% %?16?% %?0?% rgba(208,241,230,.2);border-radius:%?32?%}.newBox uni-image[data-v-f27e1a94]{width:%?400?%;height:%?400?%;background:#d8d8d8;border-radius:%?24?%}.newBox .tuijianma[data-v-f27e1a94]{width:100%;height:%?83?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#a1a1a1;margin-top:%?30?%}.newBox .id[data-v-f27e1a94]{width:100%;height:%?80?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333}.invite[data-v-f27e1a94]{width:100%;background-image:url("+d+");background-size:100% %?674?%;background-position:0 100%;height:100vh;background-repeat:no-repeat}.invite .id[data-v-f27e1a94]{width:50%;font-size:%?36?%}.invite[data-v-f27e1a94] .help-title{top:5%;line-height:%?80?%;text-align:center}.invite[data-v-f27e1a94] .help-title .wdtjm{font-size:16px;font-weight:500}.invite .invite-content[data-v-f27e1a94]{width:100%;height:100%}.invite .invite-content .code-img[data-v-f27e1a94]{width:100%;display:flex;justify-content:center}.invite .invite-content .code-img uni-image[data-v-f27e1a94]{width:50%;height:%?360?%;margin:%?120?% auto %?40?%}.invite .btn[data-v-f27e1a94]{color:#fff;width:80%;height:%?90?%;margin-top:%?30?%;background-color:#4bc93e;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);border-radius:%?30?%}",""]),t.exports=i},"2a68":function(t,i,e){"use strict";e.r(i);var a=e("885e"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},4293:function(t,i,e){"use strict";e.r(i);var a=e("52c5"),n=e("2a68");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("4985");var d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"f27e1a94",null,!1,a["a"],void 0);i["default"]=r.exports},4985:function(t,i,e){"use strict";var a=e("f4e9"),n=e.n(a);n.a},"52c5":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={airelFloatball:e("e60e").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"invite disc"},[e("v-uni-view",[e("airel-floatball")],1),e("v-uni-view",{staticClass:"newBox disc"},[e("v-uni-image",{attrs:{src:t.code}}),e("v-uni-view",{staticClass:"dis tuijianma"},[t._v("我的推荐码")]),e("v-uni-view",{staticClass:"dis id",staticStyle:{"font-size":"56upx"}},[t._v(t._s(t.info.id))])],1),e("v-uni-view",{staticClass:"two"},[e("v-uni-view",{staticClass:"itemONE dis"},[e("a",{staticStyle:{color:"#000"},attrs:{href:t.code}},[t._v("保存图片")])]),e("v-uni-view",{staticClass:"itemTWO dis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xin.apply(void 0,arguments)}}},[t._v("复制二维码链接")])],1)],1)},o=[]},"885e":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("0f01")),o={components:{backgroundPage:n.default},data:function(){return{info:{},code:"",title:"",qr_url:""}},onLoad:function(){var t=this;this.info=uni.getStorageSync("user_info"),this.$fn.request("qrcode","GET",{}).then((function(i){console.log(i.data.data.qr_url,"复制二维码链接地址"),t.qr_url=i.data.data.qr_url,console.log(i.data.data.qrcode,"用户二维码"),t.code=i.data.data.qrcode,t.title='<view class="wdtjm">我的推荐码:</view><br />\n            <view class="numberCode">'.concat(t.info.id,"</view>")})),console.log(this.info.id)},methods:{xin:function(){this.info=uni.getStorageSync("user_info"),console.log(this.info.id);var t=this.info.id;uni.setStorageSync("code",t),uni.setClipboardData({data:this.qr_url,success:function(){uni.showToast({title:"复制成功"})}})},fenxiang:function(){}}};i.default=o},cf6a:function(t,i,e){t.exports=e.p+"static/img/background.67f7f5d6.png"},f4e9:function(t,i,e){var a=e("0017");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("60175f8a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);