(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lvbi-lvbiDetails"],{1861:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".lvbiDetails[data-v-bd5c35c0]{width:100%;height:100vh}.lvbiDetails uni-image[data-v-bd5c35c0]{width:100%;height:%?500?%}",""]),t.exports=e},"2bc0":function(t,e,i){"use strict";i.r(e);var n=i("402e"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},3576:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},"402e":function(t,e){},"6eef":function(t,e,i){var n=i("3576");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("20cdfd45",n,!0,{sourceMap:!1,shadowMode:!1})},"72b3":function(t,e,i){"use strict";i.r(e);var n=i("f1ae"),a=i("2bc0");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d16c");var s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"bd5c35c0",null,!1,n["a"],void 0);e["default"]=u.exports},"9a8e":function(t,e,i){var n=i("1861");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f82ff490",n,!0,{sourceMap:!1,shadowMode:!1})},"9d9a":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],i=t.currentTarget;this.start.x=e.clientX-i.offsetLeft,this.start.y=e.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],i=e.clientX-this.start.x,n=e.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height;this.left=i<0?0:i>a-40?a-40:i,this.top=n<o?o:n>s?s:n}},touchend:function(t){var e=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=n},b1e2:function(t,e,i){"use strict";var n=i("6eef"),a=i.n(n);a.a},d16c:function(t,e,i){"use strict";var n=i("9a8e"),a=i.n(n);a.a},d25b:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},a=[]},e60e:function(t,e,i){"use strict";i.r(e);var n=i("d25b"),a=i("fa47");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b1e2");var s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],void 0);e["default"]=u.exports},ef67:function(t,e,i){t.exports=i.p+"static/img/senlin.4672bf22.jpg"},f1ae:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={airelFloatball:i("e60e").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"lvbiDetails"},[e("airel-floatball"),e("v-uni-image",{attrs:{src:i("ef67"),mode:""}})],1)},o=[]},fa47:function(t,e,i){"use strict";i.r(e);var n=i("9d9a"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);