(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-safe-safe"],{"024a":function(i,t,a){var n=a("24fb");t=n(!1),t.push([i.i,".safe[data-v-9b3a1c3c]{width:100%;height:100vh;background-color:#f1f1f1}.safe .item[data-v-9b3a1c3c]{width:100%;height:%?90?%;background-color:#fff;display:flex;align-items:center;box-sizing:border-box;position:relative}.safe .item .right[data-v-9b3a1c3c]{position:absolute;top:0;right:%?30?%;width:%?150?%;height:100%;color:#999}.safe .item uni-image[data-v-9b3a1c3c]{width:%?40?%;height:%?40?%;padding-left:%?30?%;margin-right:%?15?%}",""]),i.exports=t},1238:function(i,t,a){"use strict";a.r(t);var n=a("5e25"),e=a("ec9c");for(var s in e)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(s);a("8181");var o=a("f0c5"),c=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"9b3a1c3c",null,!1,n["a"],void 0);t["default"]=c.exports},"5e25":function(i,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return e})),a.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"safe"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-image",{attrs:{src:a("db84"),mode:""}}),i._v("手机号"),n("v-uni-view",{staticClass:"right dis"},[i._v(i._s(i.info.phone))])],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0upx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go(1)}}},[n("v-uni-image",{attrs:{src:a("afb1"),mode:""}}),i._v("实名制"),n("v-uni-view",{staticClass:"right dis"},[i._v(i._s(i.shiming))])],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0upx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go(2)}}},[n("v-uni-image",{attrs:{src:a("7dbc"),mode:""}}),i._v("修改登录密码"),n("v-uni-view",{staticClass:"right dis"},[i._v(">")])],1)],1)},e=[]},"7dbc":function(i,t,a){i.exports=a.p+"static/img/xiugai.261144aa.png"},8181:function(i,t,a){"use strict";var n=a("b733"),e=a.n(n);e.a},afb1:function(i,t,a){i.exports=a.p+"static/img/shimingzhi.bd5b432e.png"},b733:function(i,t,a){var n=a("024a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("733f308c",n,!0,{sourceMap:!1,shadowMode:!1})},baba:function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{info:{},shiming:""}},onLoad:function(){this.info=uni.getStorageSync("user_info"),0==this.info.is_real_name?this.shiming="未实名":this.shiming="已实名"},methods:{go:function(i){uni.navigateTo({url:"/pages/revisePassword/revisePassword?type="+i})}}};t.default=n},db84:function(i,t,a){i.exports=a.p+"static/img/phone.d6244c69.png"},ec9c:function(i,t,a){"use strict";a.r(t);var n=a("baba"),e=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return n[i]}))}(s);t["default"]=e.a}}]);