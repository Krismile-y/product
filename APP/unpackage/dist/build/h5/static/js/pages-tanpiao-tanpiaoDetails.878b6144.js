(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tanpiao-tanpiaoDetails"],{"0540":function(t,i,e){"use strict";var n=e("1ddc"),a=e.n(n);a.a},"06dd":function(t,i,e){"use strict";e.r(i);var n=e("9705"),a=e("68c4");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("3e79");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"27ea7229",null,!1,n["a"],void 0);i["default"]=r.exports},"1ddc":function(t,i,e){var n=e("28b9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("59e4bd16",n,!0,{sourceMap:!1,shadowMode:!1})},"1f0c":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},a=[]},"28b9":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},"3e79":function(t,i,e){"use strict";var n=e("cd29"),a=e.n(n);a.a},"68c4":function(t,i,e){"use strict";e.r(i);var n=e("d60f"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},9705:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={airelFloatball:e("e60e").default},a=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"tanpiaoDetails"},[i("v-uni-view",{},[i("airel-floatball")],1),i("v-uni-image",{attrs:{src:e("ef67"),mode:""}}),i("v-uni-view",{staticClass:"tp"},[this._v("“碳票”就是林地林木碳减排量收益权的凭证，相当于一片森林的固碳释氧功能作为资产交易的“身份证”。形象地说，一片林子每年吸收多少吨二氧化碳、释放多少吨氧气，经第三方机构监测核算、专家审查、林业和相关部门审定，最终制发具有收益权的凭证。该凭证被赋予交易、质押、兑现、抵消等权能。")])],1)},o=[]},"9d9a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,n=i.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height;this.left=e<0?0:e>a-40?a-40:e,this.top=n<o?o:n>s?s:n}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var n=this.safeArea.width-20,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=n},bbc7:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tanpiaoDetails[data-v-27ea7229]{width:100%;height:100vh}.tanpiaoDetails uni-image[data-v-27ea7229]{width:100%;height:%?500?%}.tanpiaoDetails .tp[data-v-27ea7229]{width:100%;box-sizing:border-box;padding:0 %?32?%;text-indent:2em;font-size:%?36?%;line-height:%?60?%}",""]),t.exports=i},cd29:function(t,i,e){var n=e("bbc7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("afcd832e",n,!0,{sourceMap:!1,shadowMode:!1})},d60f:function(t,i){},e60e:function(t,i,e){"use strict";e.r(i);var n=e("1f0c"),a=e("fa47");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("0540");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d45bc18c",null,!1,n["a"],void 0);i["default"]=r.exports},ef67:function(t,i,e){t.exports=e.p+"static/img/senlin.4672bf22.jpg"},fa47:function(t,i,e){"use strict";e.r(i);var n=e("9d9a"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);