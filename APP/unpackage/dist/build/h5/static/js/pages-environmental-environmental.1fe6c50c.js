(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-environmental-environmental"],{"0e9d":function(t,e,i){"use strict";var n=i("f55b"),a=i.n(n);a.a},"10f1":function(t,e,i){"use strict";i.r(e);var n=i("5a73"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2bc4":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},"3a39":function(t,e,i){"use strict";i.r(e);var n=i("57c9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5664:function(t,e,i){"use strict";i.r(e);var n=i("2bc4"),a=i("10f1");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0e9d");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],r);e["default"]=u.exports},"57c9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLoad:function(t){this.id=t.id},data:function(){return{id:""}}};e.default=n},"59cf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},"5a73":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],i=t.currentTarget;this.start.x=e.clientX-i.offsetLeft,this.start.y=e.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],i=e.clientX-this.start.x,n=e.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,r=this.safeArea.height,s=40;this.left=i<0?0:i>a-s?a-s:i,this.top=n<o?o:n>r?r:n}},touchend:function(t){var e=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=n},"5f0b":function(t,e,i){var n=i("9eaa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("72c5ed14",n,!0,{sourceMap:!1,shadowMode:!1})},"8bdc":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={airelFloatball:i("5664").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("airel-floatball"),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:0==t.id,expression:"id==0?true:false"}],attrs:{src:i("a29f")}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==t.id,expression:"id==1?true:false"}],attrs:{src:i("b801")}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.id,expression:"id==0?true:false"}],staticStyle:{width:"90%",margin:"30upx auto"}},[t._v("1. 环保产品推荐：我们根据您的消费习惯和需求，为您推荐符合环保要求的产品。这些产品具有环保认证，确保环境友好且无害。"),n("br"),t._v("2. 智能对比：您可以使用我们的智能对比功能比较不同品牌和型号的环保产品，对比内容包括环保认证情况、环保需求等。"),n("br"),t._v("3. 产品评价：您可以查看其他用户对环保产品的评价和反馈，了解他们的使用体验和建议，帮助您做出更明智的购买决策。"),n("br"),t._v("4. 定制服务：如果您需要定制符合您的需求的环保产品，我们可以为您提供专业的定制服务，满足您特定的环保需求。"),n("br"),t._v("5. 产品解析：我们为您提供详细的环保产品解析，包括原材料、制造工艺等，帮助您对产品的环保性能有更深入的了解。")]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.id,expression:"id==1?true:false"}],staticStyle:{width:"90%",margin:"30upx auto"}},[t._v("1. 环境监测服务：我们提供一站式的环境监测服务，包括水质、空气、土壤等多种监测指标。我们的检测项目准确、专业、高效。"),n("br"),t._v("2. 智能检测：您可以使用我们的智能检测功能，通过在网站上上传数据或测量值，我们可以为您提供更准确的监测结果。同时我们也提供周期性监测，帮助您了解污染情况的变化。"),n("br"),t._v("3. 专业报告：我们提供专业的监测报告，包括监测指标、监测结果、评价建议等内容，帮助您及时了解环境污染状况，采取相应措施。"),n("br"),t._v("4. 定制服务：如果您有特殊的监测需求，我们可以为您定制专属的监测服务方案，确保您的监测需求得到最佳满足。"),n("br"),t._v("5. 专家咨询：我们提供专业的环保专家咨询服务，帮助您解决遇到的问题和疑虑。")])],1)},o=[]},"9eaa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-image[data-v-75c276d1]{width:100%}",""]),t.exports=e},a29f:function(t,e,i){t.exports=i.p+"static/img/senlin.4672bf22.jpg"},b801:function(t,e,i){t.exports=i.p+"static/img/ocean.a15f93db.jpg"},dd05:function(t,e,i){"use strict";i.r(e);var n=i("8bdc"),a=i("3a39");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e75f");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"75c276d1",null,!1,n["a"],r);e["default"]=u.exports},e75f:function(t,e,i){"use strict";var n=i("5f0b"),a=i.n(n);a.a},f55b:function(t,e,i){var n=i("59cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3ffa4ba2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);