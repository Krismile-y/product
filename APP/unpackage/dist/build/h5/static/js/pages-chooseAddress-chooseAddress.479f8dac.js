(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chooseAddress-chooseAddress"],{"0e9d":function(t,i,e){"use strict";var n=e("f55b"),a=e.n(n);a.a},"10f1":function(t,i,e){"use strict";e.r(i);var n=e("5a73"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"13b4":function(t,i,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{list:[],currentIndex:9999}},onShow:function(){var t=this;this.$fn.request("my_address","GET",{}).then((function(i){console.log(i.data.data,"地址"),t.list=i.data.data}))},methods:{add:function(){uni.navigateTo({url:"/pages/newAddredd/newAddredd"})},itemtap:function(t,i){this.currentIndex=i,console.log(t.id),uni.showToast({duration:500,title:"已选择地址"}),setTimeout((function(){uni.navigateTo({url:"/pages/shopDetail/shopDetail?id="+t.id})}),500)},del:function(t){var i=this,e={aid:t.id.toString()};this.$fn.request("del_address","POST",e).then((function(t){console.log(t,"删除地址"),i.$fn.request("my_address","POST",{}).then((function(t){i.list=t.data.data,uni.showToast({duration:1e3,icon:"success",title:"删除地址成功"})}))}))},exit:function(t){uni.setStorageSync("exit",t),uni.navigateTo({url:"/pages/addressDetail/addressDetail"})}}};i.default=n},"2bc4":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},"3dea":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".address[data-v-6ccc4312]{width:100%;height:100vh;background-color:#f0f0f0}.item[data-v-6ccc4312]{width:100%;height:%?160?%;display:flex;position:relative;padding-top:%?20?%;padding-bottom:%?20?%}.item .pos[data-v-6ccc4312]{width:%?60?%;height:100%;position:absolute;top:0;right:0}.item .pos uni-image[data-v-6ccc4312]{width:%?40?%;height:%?40?%;margin-top:%?10?%}.item .left[data-v-6ccc4312]{width:30%;height:100%}.item .left uni-image[data-v-6ccc4312]{width:%?90?%;height:%?90?%;border-radius:50%}.item .right[data-v-6ccc4312]{width:60%;height:100%;display:flex;flex-direction:column;justify-content:center}.item .right .title[data-v-6ccc4312]{font-weight:550;display:flex;align-items:center}.item .right .title .phone[data-v-6ccc4312]{margin-left:%?20?%}.item .right .title .moren[data-v-6ccc4312]{color:#4bc93e;border:%?1?% solid #4bc93e;width:%?70?%;font-size:%?28?%;height:%?30?%;margin-left:%?20?%;padding-top:%?10?%;padding-bottom:%?10?%;border-radius:%?10?%}.item .right .detail[data-v-6ccc4312]{color:#999;margin-top:%?5?%;width:88%;font-size:%?28?%}.color[data-v-6ccc4312]{background-color:#fff}.add[data-v-6ccc4312]{width:%?110?%;height:%?110?%;background-color:#4bc93e;color:#fff;font-size:%?28?%;position:fixed;top:55%;right:%?10?%;border-radius:50%}.add .f[data-v-6ccc4312]{width:%?70?%;height:%?70?%;text-align:center}",""]),t.exports=i},4088:function(t,i,e){"use strict";var n=e("521b"),a=e.n(n);a.a},"521b":function(t,i,e){var n=e("3dea");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("e9e99106",n,!0,{sourceMap:!1,shadowMode:!1})},5664:function(t,i,e){"use strict";e.r(i);var n=e("2bc4"),a=e("10f1");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("0e9d");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],s);i["default"]=r.exports},5896:function(t,i){t.exports="data:image/png;base64,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"},"59cf":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},"5a73":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,n=i.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height,c=40;this.left=e<0?0:e>a-c?a-c:e,this.top=n<o?o:n>s?s:n}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var n=this.safeArea.width,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=n},"9f09":function(t,i,e){t.exports=e.p+"static/img/user.de858b7a.webp"},aa6f:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={airelFloatball:e("5664").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"address"},[n("v-uni-view",[n("airel-floatball")],1),n("v-uni-scroll-view",{staticStyle:{width:"100%",height:"calc(100vh - 300upx)","padding-bottom":"160upx"},attrs:{"scroll-y":"true"}},t._l(t.list,(function(i,a){return n("v-uni-view",{key:a,staticClass:"item",class:{color:t.currentIndex==a}},[n("v-uni-view",{staticClass:"pos disc"},[n("v-uni-image",{attrs:{src:e("c27d"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.exit(i)}}}),n("v-uni-image",{attrs:{src:e("5896"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.del(i)}}})],1),n("v-uni-view",{staticClass:"left dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemtap(i,a)}}},[n("v-uni-image",{attrs:{src:e("9f09"),mode:""}})],1),n("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemtap(i,a)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(i.username))]),n("v-uni-view",{staticClass:"phone"},[t._v(t._s(i.phone))]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==i.is_default,expression:"item.is_default==1?true:false"}],staticClass:"moren dis"},[t._v("默认")])],1),n("v-uni-view",{staticClass:"detail"},[t._v(t._s(i.province)+t._s(i.city)+t._s(i.county)+t._s(i.address))])],1)],1)})),1),n("v-uni-view",{staticClass:"bottom dis"},[n("v-uni-view",{staticClass:"xinBtn dis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add.apply(void 0,arguments)}}},[t._v("新增地址")])],1)],1)},o=[]},c27d:function(t,i,e){t.exports=e.p+"static/img/xiugai.261144aa.png"},e5d8:function(t,i,e){"use strict";e.r(i);var n=e("13b4"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},f55b:function(t,i,e){var n=e("59cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3ffa4ba2",n,!0,{sourceMap:!1,shadowMode:!1})},f919:function(t,i,e){"use strict";e.r(i);var n=e("aa6f"),a=e("e5d8");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("4088");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6ccc4312",null,!1,n["a"],s);i["default"]=r.exports}}]);