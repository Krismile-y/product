(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"0531":function(t,e,n){"use strict";n.r(e);var a=n("2b1e"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"26c9":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".title[data-v-2d81556c]{margin-top:%?30?%;width:100%;font-weight:600;text-align:center;font-size:%?34?%;color:#000}.author[data-v-2d81556c]{margin-top:%?30?%;width:100%;text-align:center;font-weight:500;color:#000}.detail[data-v-2d81556c]{margin-top:%?30?%;text-indent:%?60?%;color:#000;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}",""]),t.exports=e},"2b1e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{index:"",article:null}},onLoad:function(t){var e=this;this.index=t.id,this.$fn.request("article","GET",{}).then((function(t){console.log(t.data.data,"新闻"),e.article=t.data.data[e.index],console.log(e.article)}))}};e.default=a},"5d9b":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("v-uni-view",{staticClass:"author"},[t._v(t._s(t.article.author))]),n("v-uni-view",{staticClass:"detail",domProps:{innerHTML:t._s(t.article.content)}})],1)},i=[]},"884f":function(t,e,n){var a=n("26c9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7aeae79a",a,!0,{sourceMap:!1,shadowMode:!1})},"95db":function(t,e,n){"use strict";var a=n("884f"),i=n.n(a);i.a},e21e:function(t,e,n){"use strict";n.r(e);var a=n("5d9b"),i=n("0531");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("95db");var r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2d81556c",null,!1,a["a"],void 0);e["default"]=c.exports}}]);