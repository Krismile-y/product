(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-safe-safe"],{"0a37":function(i,t,n){var e=n("24fb");t=e(!1),t.push([i.i,".safe[data-v-9b3a1c3c]{width:100%;height:100vh;background-color:#f1f1f1}.safe .item[data-v-9b3a1c3c]{width:100%;height:%?90?%;background-color:#fff;display:flex;align-items:center;box-sizing:border-box;position:relative}.safe .item .right[data-v-9b3a1c3c]{position:absolute;top:0;right:%?30?%;width:%?150?%;height:100%;color:#999}.safe .item uni-image[data-v-9b3a1c3c]{width:%?40?%;height:%?40?%;padding-left:%?30?%;margin-right:%?15?%}",""]),i.exports=t},"168d":function(i,t,n){i.exports=n.p+"static/img/shimingzhi.bd5b432e.png"},"3c6b":function(i,t,n){i.exports=n.p+"static/img/phone.d6244c69.png"},"3f93":function(i,t,n){"use strict";var e;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return e}));var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"safe"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-image",{attrs:{src:n("3c6b"),mode:""}}),i._v("手机号"),e("v-uni-view",{staticClass:"right dis"},[i._v(i._s(i.info.phone))])],1),e("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0upx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go(1)}}},[e("v-uni-image",{attrs:{src:n("168d"),mode:""}}),i._v("实名制"),e("v-uni-view",{staticClass:"right dis"},[i._v(i._s(i.shiming))])],1),e("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0upx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go(2)}}},[e("v-uni-image",{attrs:{src:n("c27d"),mode:""}}),i._v("修改登录密码"),e("v-uni-view",{staticClass:"right dis"},[i._v(">")])],1)],1)},s=[]},"425f":function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{info:{},shiming:""}},onLoad:function(){this.info=uni.getStorageSync("user_info"),0==this.info.is_real_name?this.shiming="未实名":this.shiming="已实名"},methods:{go:function(i){uni.navigateTo({url:"/pages/revisePassword/revisePassword?type="+i})}}};t.default=e},6806:function(i,t,n){"use strict";n.r(t);var e=n("3f93"),a=n("8047");for(var s in a)"default"!==s&&function(i){n.d(t,i,(function(){return a[i]}))}(s);n("98b8");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"9b3a1c3c",null,!1,e["a"],o);t["default"]=r.exports},8047:function(i,t,n){"use strict";n.r(t);var e=n("425f"),a=n.n(e);for(var s in e)"default"!==s&&function(i){n.d(t,i,(function(){return e[i]}))}(s);t["default"]=a.a},"98b8":function(i,t,n){"use strict";var e=n("ec16"),a=n.n(e);a.a},c27d:function(i,t,n){i.exports=n.p+"static/img/xiugai.261144aa.png"},ec16:function(i,t,n){var e=n("0a37");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var a=n("4f06").default;a("33961321",e,!0,{sourceMap:!1,shadowMode:!1})}}]);