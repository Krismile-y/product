(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"0e51":function(t,e,i){"use strict";i.r(e);var n=i("3dba"),a=i("578e");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4581");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"779c5fcc",null,!1,n["a"],r);e["default"]=c.exports},"10f1":function(t,e,i){"use strict";i.r(e);var n=i("5a73"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3dba":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={airelFloatball:i("5664").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"news-page"},[i("airel-floatball"),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.article.title))]),i("v-uni-view",{staticClass:"author"},[t._v(t._s(t.article.author))]),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:""!=t.article.thumb_url,expression:"article.thumb_url!=''"}],staticClass:"new-img",attrs:{src:t.article.thumb_url,mode:"widthFix"}}),i("v-uni-view",{staticClass:"detail",domProps:{innerHTML:t._s(t.article.content)}})],1)},o=[]},4581:function(t,e,i){"use strict";var n=i("574c"),a=i.n(n);a.a},5664:function(t,e,i){"use strict";i.r(e);var n=i("cff7"),a=i("10f1");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f1b2");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d45bc18c",null,!1,n["a"],r);e["default"]=c.exports},"574c":function(t,e,i){var n=i("f89a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3c3b95c5",n,!0,{sourceMap:!1,shadowMode:!1})},"578e":function(t,e,i){"use strict";i.r(e);var n=i("9fe9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5a73":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],i=t.currentTarget;this.start.x=e.clientX-i.offsetLeft,this.start.y=e.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],i=e.clientX-this.start.x,n=e.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,r=this.safeArea.height,s=40;this.left=i<0?0:i>a-s?a-s:i,this.top=n<o?o:n>r?r:n}},touchend:function(t){var e=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width-20,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=n},"7ff1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},"9fe9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{index:"",article:{title:"",author:"",content:""}}},onLoad:function(t){var e=this;this.index=t.id,this.$fn.request("article","GET",{}).then((function(t){console.log(t.data.data,"新闻"),e.article=t.data.data[e.index],console.log(e.article)}))}};e.default=n},a380:function(t,e,i){var n=i("7ff1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("74a34bff",n,!0,{sourceMap:!1,shadowMode:!1})},cff7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},f1b2:function(t,e,i){"use strict";var n=i("a380"),a=i.n(n);a.a},f89a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".title[data-v-779c5fcc]{margin-top:%?30?%;width:100%;font-weight:600;text-align:center;font-size:%?34?%;color:#000}.author[data-v-779c5fcc]{margin-top:%?30?%;width:100%;text-align:center;font-weight:500;color:#000}.detail[data-v-779c5fcc]{margin-top:%?30?%;text-indent:%?60?%;color:#000;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.news-page[data-v-779c5fcc]{width:95%;margin:0 auto;box-sizing:border-box;padding:0 %?20?%}.news-page .new-img[data-v-779c5fcc]{width:100%}",""]),t.exports=e}}]);