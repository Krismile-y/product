(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certificate-certificate"],{"11f8":function(t,a,e){"use strict";e.r(a);var n=e("99c5"),i=e("8d9b0");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("a9be");var r=e("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"a4840280",null,!1,n["a"],void 0);a["default"]=c.exports},1610:function(t,a,e){t.exports=e.p+"static/img/tanpiao.a3848d86.jpg"},"40af":function(t,a,e){var n=e("24fb"),i=e("1de5"),o=e("1610");a=n(!1);var r=i(o);a.push([t.i,"uni-image[data-v-a4840280]{width:100%}.box[data-v-a4840280]{width:100%;height:%?1020?%;background-image:url("+r+");background-repeat:no-repeat;background-size:100% 100%}",""]),t.exports=a},"5a9e":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{herf:"",name:"",link:""}},onLoad:function(){var t=this;this.$fn.request("thigh_image","GET",{}).then((function(a){t.name=a.data.data.name,t.herf=a.data.data.thigh,t.link=t.$url+"thigh_down?name="+t.name,console.log(t.link,"下载链接")}))},methods:{down:function(){}}};a.default=n},"7cb4":function(t,a,e){var n=e("40af");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("8cea6e64",n,!0,{sourceMap:!1,shadowMode:!1})},"8d9b0":function(t,a,e){"use strict";e.r(a);var n=e("5a9e"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"99c5":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-image",{staticStyle:{height:"960upx",width:"100%"},attrs:{src:t.herf,mode:""}}),e("v-uni-view",{staticClass:"bottom dis",staticStyle:{bottom:"0"}},[e("v-uni-view",{staticClass:"in dis",on:{click:function(a){arguments[0]=a=t.$handleEvent(a)}}},[e("a",{staticStyle:{color:"#fff"},attrs:{href:t.link}},[t._v("点击下载")])])],1)],1)},i=[]},a9be:function(t,a,e){"use strict";var n=e("7cb4"),i=e.n(n);i.a}}]);