(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-greenPage-greenPage"],{"0e9d":function(t,e,n){"use strict";var i=n("f55b"),o=n.n(i);o.a},"10f1":function(t,e,n){"use strict";n.r(e);var i=n("5a73"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2bc4":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"main"},[n("a",{attrs:{href:t.$store.state.kefu}},[n("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},a=[]},5664:function(t,e,n){"use strict";n.r(e);var i=n("2bc4"),o=n("10f1");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0e9d");var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"30882704",null,!1,i["a"],r);e["default"]=s.exports},"59cf":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},"5a73":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],n=t.currentTarget;this.start.x=e.clientX-n.offsetLeft,this.start.y=e.clientY-n.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],n=e.clientX-this.start.x,i=e.clientY-this.start.y,o=this.safeArea.width,a=this.safeArea.top,r=this.safeArea.height,u=40;this.left=n<0?0:n>o-u?o-u:n,this.top=i<a?a:i>r?r:i}},touchend:function(t){var e=this;if(this.sunction){var n=this.time;this.transition="left ".concat(n,"ms");var i=this.safeArea.width,o=t.changedTouches[0].clientX;o>.5*i?(this.isleft=!1,this.left=i-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),n)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=i},6171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{info:""}},onLoad:function(){this.info=uni.getStorageSync("gongyijinzhan")}};e.default=i},"73c9":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={airelFloatball:n("5664").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{domProps:{innerHTML:t._s(t.info)}},[n("airel-floatball")],1)},a=[]},c9a2:function(t,e,n){"use strict";n.r(e);var i=n("73c9"),o=n("e654");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"84dfc2d8",null,!1,i["a"],r);e["default"]=s.exports},e654:function(t,e,n){"use strict";n.r(e);var i=n("6171"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f55b:function(t,e,n){var i=n("59cf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3ffa4ba2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);