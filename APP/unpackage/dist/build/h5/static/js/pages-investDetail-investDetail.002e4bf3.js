(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-investDetail-investDetail"],{"10f1":function(t,i,e){"use strict";e.r(i);var a=e("5a73"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"2b3db":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}}};i.default=a},"561c":function(t,i,e){"use strict";var a=e("73d6"),n=e.n(a);n.a},5664:function(t,i,e){"use strict";e.r(i);var a=e("cff7"),n=e("10f1");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("f1b2");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d45bc18c",null,!1,a["a"],s);i["default"]=c.exports},"5a73":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,a=i.clientY-this.start.y,n=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height,r=40;this.left=e<0?0:e>n-r?n-r:e,this.top=a<o?o:a>s?s:a}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var a=this.safeArea.width-20,n=t.changedTouches[0].clientX;n>.5*a?(this.isleft=!1,this.left=a-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=a},"73d6":function(t,i,e){var a=e("9a40");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("d2597298",a,!0,{sourceMap:!1,shadowMode:!1})},"7ff1":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},"812a":function(t,i,e){"use strict";e.r(i);var a=e("977d"),n=e("dbb3");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("561c");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7a6f3c82",null,!1,a["a"],s);i["default"]=c.exports},"977d":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={airelFloatball:e("5664").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"investDetail"},[e("airel-floatball"),e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:"https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",mode:""}})],1),e("Tips",{ref:"success",attrs:{position:"center",backgroundColor:"#dbf1e1",color:"#07c07e",size:"30"}}),e("Tips",{ref:"error",attrs:{position:"center",backgroundColor:"red",color:"#fff",size:"30"}}),e("v-uni-view",{staticClass:"three"},[e("v-uni-view",{staticClass:"item disc"},[e("v-uni-view",{staticClass:"title"},[t._v("项目规模")]),e("v-uni-view",{staticClass:"de"},[e("v-uni-text",[t._v("1000")]),t._v("万元")],1)],1),e("v-uni-view",{staticClass:"item disc"},[e("v-uni-view",{staticClass:"title"},[t._v("每日分红")]),e("v-uni-view",{staticClass:"de"},[e("v-uni-text",[t._v("1000")]),t._v("万元")],1)],1),e("v-uni-view",{staticClass:"item disc"},[e("v-uni-view",{staticClass:"title"},[t._v("投资周期")]),e("v-uni-view",{staticClass:"de"},[e("v-uni-text",[t._v("1000")]),t._v("万元")],1)],1)],1),e("v-uni-view",{staticClass:"li"},[t._v("分红方式：到期还本还息")]),e("v-uni-view",{staticClass:"li"},[t._v("起投金额：298元")]),e("v-uni-view",{staticClass:"li"},[t._v("担保机构：中国人民银行机构承包")]),e("v-uni-image",{staticClass:"two",attrs:{src:"https://img0.baidu.com/it/u=528833255,3463981408&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",mode:""}}),e("v-uni-view",{staticClass:"btn dis"},[t._v("马上认购")])],1)},o=[]},"9a40":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".investDetail[data-v-7a6f3c82]{padding-bottom:%?30?%}.investDetail .top uni-image[data-v-7a6f3c82]{width:100%;height:%?420?%}.investDetail .three[data-v-7a6f3c82]{margin:%?30?% auto;margin-bottom:%?60?%;width:85%;height:%?90?%;display:flex}.investDetail .three .item[data-v-7a6f3c82]{flex:1;height:100%;color:#ccc}.investDetail .three .item .de uni-text[data-v-7a6f3c82]{color:red}.investDetail .li[data-v-7a6f3c82]{width:100%;height:%?90?%;display:flex;align-items:center;padding-left:%?20?%;box-sizing:border-box;font-weight:520;border-bottom:%?1?% solid #dfdfdf;color:#9c9c9c}.investDetail .two[data-v-7a6f3c82]{width:100%;height:%?400?%;margin-top:%?30?%}.investDetail .btn[data-v-7a6f3c82]{margin:%?30?% auto;color:#fff;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);background-color:#54d27e;width:90%;height:%?90?%}",""]),t.exports=i},a380:function(t,i,e){var a=e("7ff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("74a34bff",a,!0,{sourceMap:!1,shadowMode:!1})},cff7:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},dbb3:function(t,i,e){"use strict";e.r(i);var a=e("2b3db"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},f1b2:function(t,i,e){"use strict";var a=e("a380"),n=e.n(a);n.a}}]);