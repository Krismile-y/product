(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newsList-newsList"],{"0c3b":function(t,e,n){"use strict";n.r(e);var i=n("6e43"),a=n("1943");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d472");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"ceb8ef84",null,!1,i["a"],void 0);e["default"]=c.exports},1943:function(t,e,n){"use strict";n.r(e);var i=n("a580"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6e43":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.listData,(function(e,i){return n("v-uni-view",{key:i,staticClass:"xinwen",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go(i)}}},[n("v-uni-view",{staticClass:"left"},[t._v(t._s(i+1)+"."+t._s(e.title))]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"right dis"})],1)})),1)},a=[]},9229:function(t,e,n){var i=n("f00a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("53f6dcdc",i,!0,{sourceMap:!1,shadowMode:!1})},a580:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{listData:[{title:"​国家林业和草原局关于印发《国家储备林建设管理办法（试行）》的通知"}]}},onLoad:function(){this.$fn.request("introduction","GET",{tid:"25"}).then((function(t){console.log(t.data.data)}))},methods:{go:function(t){uni.navigateTo({url:"/pages/newsListDetails/newsListDetails?index=".concat(t)})}}};e.default=i},d472:function(t,e,n){"use strict";var i=n("9229"),a=n.n(i);a.a},f00a:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zhuanti[data-v-ceb8ef84]{color:red;padding-top:%?10?%;text-align:center}.xinwen[data-v-ceb8ef84]{width:100%;display:flex}.xinwen .left[data-v-ceb8ef84]{width:95%;height:100%;box-sizing:border-box;text-indent:2em;font-size:%?36?%;margin:%?30?% auto}.xinwen .right[data-v-ceb8ef84]{width:30%;height:100%}.xinwen .right uni-image[data-v-ceb8ef84]{width:%?160?%;height:%?140?%}.zhengce[data-v-ceb8ef84]{width:98%;margin:0 auto;height:%?200?%;position:relative}.zhengce uni-image[data-v-ceb8ef84]{width:100%;height:100%;border-radius:%?20?%;position:absolute;top:0;left:0;z-index:0}.zhengce .zhengce-txt[data-v-ceb8ef84]{width:100%;height:100%;position:absolute;left:0;height:0%;z-index:10;text-align:center;line-height:%?200?%;font-size:44px;color:#fff;letter-spacing:25px;text-indent:25px;font-weight:700}",""]),t.exports=e}}]);