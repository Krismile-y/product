(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopDetail-shopDetail"],{"030c":function(t,i,e){var a=e("c337");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("57e96a85",a,!0,{sourceMap:!1,shadowMode:!1})},"0540":function(t,i,e){"use strict";var a=e("1ddc"),n=e.n(a);n.a},"0a79":function(t,i,e){"use strict";e.r(i);var a=e("28ff"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"1ddc":function(t,i,e){var a=e("28b9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("59e4bd16",a,!0,{sourceMap:!1,shadowMode:!1})},"1f0c":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},n=[]},"28b9":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},"28ff":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d401"),e("d3b7"),e("25f0");var a={data:function(){return{item:{},addressID:""}},onLoad:function(t){this.item=uni.getStorageSync("shopDetail"),console.log(this.item),t.id.length>0&&(this.addressID=t.id,console.log(this.addressID,"5.15日"))},methods:{duihuan:function(){var t=this,i="";this.$fn.request("my_address","GET",{default:"1"}).then((function(e){if(console.log(e.data.data.length),t.sub_token=e.data.sub_token,console.log(e.data.data.length,"地址"),1!=e.data.data.length){if(0==e.data.data.length)if(t.addressID.length>0){console.log("选择了地址下单,",t.sub_token);var a={wid:t.item.id.toString(),aid:t.addressID.toString(),sub_token:t.sub_token};t.$fn.request("wares/order","POST",a).then((function(i){if(t.sub_token=i.data.sub_token,1==i.data.code){uni.showToast({duration:1e3,title:"兑换成功"});t.$fn.request("user","GET",{is_whole:"1"}).then((function(i){console.log(i.data.data.money_integral,"用户信息"),t.info.money_integral=i.data.data.money_integral,uni.setStorageSync("user_info",i.data.data)}))}else console.log("失败"),uni.showToast({duration:1e3,title:i.data.msg,icon:"error"})}))}else t.addressID.length<=0&&(console.log(9999),uni.showToast({duration:1e3,title:"您还没选择地址",icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/chooseAddress/chooseAddress"})}),1500))}else{console.log("默认地址下单"),i=e.data.data[0].id,console.log(i);var n={wid:t.item.id,aid:i,sub_token:t.sub_token};t.$fn.request("wares/order","POST",n).then((function(i){if(1==i.data.code){uni.showToast({duration:1e3,title:"兑换成功"});t.$fn.request("user","GET",{is_whole:"1"}).then((function(i){console.log(i.data.data.money_integral,"用户信息"),t.info.money_integral=i.data.data.money_integral,uni.setStorageSync("user_info",i.data.data)}))}else uni.showToast({duration:1e3,title:i.data.msg,icon:"error"})}))}}))}}};i.default=a},"558d":function(t,i,e){"use strict";e.r(i);var a=e("b2b9"),n=e("0a79");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("6167");var s=e("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"62dc4ac7",null,!1,a["a"],void 0);i["default"]=d.exports},6167:function(t,i,e){"use strict";var a=e("030c"),n=e.n(a);n.a},"9d9a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var a={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,a=i.clientY-this.start.y,n=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height;this.left=e<0?0:e>n-40?n-40:e,this.top=a<o?o:a>s?s:a}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var a=this.safeArea.width-20,n=t.changedTouches[0].clientX;n>.5*a?(this.isleft=!1,this.left=a-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=a},b2b9:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={airelFloatball:e("e60e").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"shopDetail"},[e("airel-floatball"),e("v-uni-image",{staticStyle:{width:"750upx",height:"750upx",margin:"0 auto","border-radius":"20upx"},attrs:{src:t.item.head_img,mode:"widthFix"}}),e("v-uni-view",{staticClass:"shopInfo"},[e("v-uni-view",{staticClass:"frist"},[e("v-uni-view",[t._v(t._s(t.item.wares_money))]),e("v-uni-view",{staticStyle:{"font-size":"28upx","margin-left":"10upx","padding-top":"10upx"}},[t._v("积分")])],1),e("v-uni-view",{staticClass:"detail"},[t._v(t._s(t.item.wares_name))]),e("v-uni-view",{staticClass:"lvse dis"},[e("v-uni-view",{staticClass:"zi dis"},[t._v("绿色商品")])],1)],1),e("v-uni-view",{staticClass:"duihuan disc"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"shu"}),t._v("商品介绍")],1),e("v-uni-image",{staticStyle:{width:"686upx",height:"678upx","margin-top":"30upx","border-radius":"20upx"},attrs:{src:t.item.head_img}}),e("v-uni-view",{staticClass:"btn dis"},[e("v-uni-view",{staticClass:"font",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.duihuan.apply(void 0,arguments)}}},[t._v("立即兑换")])],1)],1)],1)},o=[]},c337:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".shopDetail[data-v-62dc4ac7]{background-color:#f7f8fa}.shopInfo[data-v-62dc4ac7]{width:%?718?%;height:%?234?%;background-color:#fff;margin:%?30?% auto;border-radius:%?16?%;box-sizing:border-box}.shopInfo .frist[data-v-62dc4ac7]{display:flex;padding-left:%?20?%;width:100%;height:%?67?%;font-size:%?48?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#ff5a00;line-height:%?67?%}.shopInfo .detail[data-v-62dc4ac7]{font-family:PingFangSC-Medium,PingFang SC;margin-top:%?20?%;color:#505050;font-weight:600;padding-left:%?20?%}.shopInfo .lvse[data-v-62dc4ac7]{width:%?116?%;height:%?48?%;background:#e2fff5;border-radius:%?4?%;margin-left:%?20?%;margin-top:%?30?%}.shopInfo .lvse .zi[data-v-62dc4ac7]{width:%?110?%;height:%?44?%;font-size:%?20?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#02ae71}.duihuan[data-v-62dc4ac7]{width:%?718?%;height:%?712?%;margin:0 auto;background-color:#fff;border-radius:%?16?%}.duihuan .btn[data-v-62dc4ac7]{width:%?686?%;height:%?122?%;margin:%?30?% auto;color:#fff;background-color:#ff791c;border-radius:%?40?%}.duihuan .btn .font[data-v-62dc4ac7]{width:%?116?%;height:%?40?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:%?40?%}.title[data-v-62dc4ac7]{padding-top:%?30?%;width:%?684?%;margin:0 auto;height:%?54?%;display:flex;align-items:center}.title .shu[data-v-62dc4ac7]{background-color:#07c07e;width:%?12?%;height:80%;margin-right:%?20?%}",""]),t.exports=i},e60e:function(t,i,e){"use strict";e.r(i);var a=e("1f0c"),n=e("fa47");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("0540");var s=e("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"d45bc18c",null,!1,a["a"],void 0);i["default"]=d.exports},fa47:function(t,i,e){"use strict";e.r(i);var a=e("9d9a"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a}}]);