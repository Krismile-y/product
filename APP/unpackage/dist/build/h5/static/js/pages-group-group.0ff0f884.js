(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-group-group"],{"07e1":function(t,i,e){var n=e("24fb"),A=e("1de5"),a=e("8844"),o=e("f80a"),s=e("f86f");i=n(!1);var r=A(a),u=A(o),f=A(s);i.push([t.i,".zongshouyi[data-v-81435a08]{height:%?300?%;width:%?684?%;margin:0 auto;margin-top:%?0?%;border:%?1?% solid #ccc;border-radius:%?30?%;background-color:#e5f7f1}.zongshouyi .one[data-v-81435a08]{width:100%;height:40%;background-image:url("+r+");background-repeat:no-repeat;background-size:100% auto;border-radius:0 0 26% 26%}.zongshouyi .two[data-v-81435a08]{background-image:url("+u+");background-repeat:no-repeat;background-size:100% 100%;border-radius:30% 30% 0 0 ;width:100%;height:60%}.zongshouyi .two .twoItem[data-v-81435a08]{width:50%;height:80%}.zongshouyi .two .last[data-v-81435a08]{width:80%;height:%?80?%;background-color:#07c07e;border-radius:%?30?%;color:#fff}.item[data-v-81435a08]{width:90%;height:%?160?%;margin:%?20?% auto;box-sizing:border-box;padding:%?10?% %?20?%;display:flex;flex-direction:column;align-items:center;background-image:url("+f+");background-size:100% 100%;background-repeat:no-repeat;position:relative}.item .font[data-v-81435a08]{width:100%;text-align:center}.item .btn[data-v-81435a08]{margin-top:%?30?%;background-color:#07c07e;color:#fff;border-radius:%?15?%;box-sizing:border-box;padding:%?10?% %?20?% %?15?%;position:absolute;bottom:%?15?%;right:%?15?%}.item .pink[data-v-81435a08]{-webkit-filter:brightness(110%);filter:brightness(110%);box-shadow:0 0 5px #fff,0 0 %?10?% #fff,0 0 %?15?% #fff,0 0 %?10?% #fff,0 0 %?10?% #fff,0 0 %?40?% #fff,0 0 %?10?% #fff,0 0 %?15?% #fff}",""]),t.exports=i},3576:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},4490:function(t,i,e){"use strict";e.d(i,"b",(function(){return A})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={airelFloatball:e("e60e").default},A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("airel-floatball"),e("v-uni-view",{staticClass:"zongshouyi"},[e("v-uni-view",{staticClass:"one disc"},[e("v-uni-view",{staticStyle:{color:"#fff"}},[t._v("共计获得津贴")]),e("v-uni-view",{staticStyle:{"font-weight":"600","font-size":"42upx",color:"#fff"}},[t._v("111")])],1),e("v-uni-view",{staticClass:"two disc"},[e("v-uni-view",{staticClass:"t",staticStyle:{width:"100%",height:"60%",display:"flex"}},[e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("共计直推人数")]),e("v-uni-view",[t._v("666")])],1),e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("共计完成任务")]),e("v-uni-view",[t._v("666")])],1)],1)],1)],1),e("v-uni-view",{staticStyle:{"margin-top":"30upx"}},t._l(4,(function(i){return e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"font "},[t._v("绿色中国宣传直推30人岗位津贴1500元/月")]),e("v-uni-view",{staticClass:"btn pink dis"},[t._v("(18/30)领取")])],1)})),1)],1)},a=[]},"4dbb":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={data:function(){return{}}}},"5c22":function(t,i,e){var n=e("07e1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var A=e("4f06").default;A("789cff4e",n,!0,{sourceMap:!1,shadowMode:!1})},"6eef":function(t,i,e){var n=e("3576");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var A=e("4f06").default;A("20cdfd45",n,!0,{sourceMap:!1,shadowMode:!1})},8844:function(t,i,e){t.exports=e.p+"static/img/tuoyuan1.1eadee5f.png"},"9d9a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,n=i.clientY-this.start.y,A=this.safeArea.width,a=this.safeArea.top,o=this.safeArea.height;this.left=e<0?0:e>A-40?A-40:e,this.top=n<a?a:n>o?o:n}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var n=this.safeArea.width,A=t.changedTouches[0].clientX;A>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=n},a1fb:function(t,i,e){"use strict";e.r(i);var n=e("4490"),A=e("cdb2");for(var a in A)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return A[t]}))}(a);e("d9f6");var o=e("f0c5"),s=Object(o["a"])(A["default"],n["b"],n["c"],!1,null,"81435a08",null,!1,n["a"],void 0);i["default"]=s.exports},b1e2:function(t,i,e){"use strict";var n=e("6eef"),A=e.n(n);A.a},cdb2:function(t,i,e){"use strict";e.r(i);var n=e("4dbb"),A=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=A.a},d25b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return A})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},A=[]},d9f6:function(t,i,e){"use strict";var n=e("5c22"),A=e.n(n);A.a},e60e:function(t,i,e){"use strict";e.r(i);var n=e("d25b"),A=e("fa47");for(var a in A)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return A[t]}))}(a);e("b1e2");var o=e("f0c5"),s=Object(o["a"])(A["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],void 0);i["default"]=s.exports},f80a:function(t,i){t.exports="data:image/png;base64,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"},f86f:function(t,i,e){t.exports=e.p+"static/img/jintie.4566bfee.png"},fa47:function(t,i,e){"use strict";e.r(i);var n=e("9d9a"),A=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=A.a}}]);