(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payPassword-payPassword"],{"0f27":function(t,e,i){var n=i("ab7b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("890277d0",n,!0,{sourceMap:!1,shadowMode:!1})},"10f1":function(t,e,i){"use strict";i.r(e);var n=i("5a73"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"16bf":function(t,e,i){"use strict";var n=i("0f27"),a=i.n(n);a.a},"20c2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{xin:"",queren:"",sfz:"",captcha:"",herf:""}},onLoad:function(){this.yanzheng()},methods:{yanzheng:function(){var t=this;uni.request({url:this.$url+"verify",data:{},success:function(e){console.log(e);var i=0;i=new Date,t.herf=t.$url+"verify?time="+i}})},change:function(){var t=this,e=/^(?:[1-9]\d{5})((?:19|20)\d{2})(?:(?:(?:0[1-9])|(?:1[0-2]))(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1])))(?:\d{3}[0-9Xx])$/;if(console.log(this.sfz,"身份证",e.test(this.sfz)),6===this.xin.length)if(6===this.queren.length)if(this.queren===this.xin)if(e.test(this.sfz)){var i={pwd:this.xin,sfz:this.sfz,captcha:this.captcha};this.$fn.request("withdraw_pwd","POST",i).then((function(e){console.log(e.data.code),1==e.data.code?(t.$refs.success.showTips({msg:"修改成功",duration:2e3}),setTimeout((function(){uni.navigateBack()}),2100)):(t.$refs.error.showTips({msg:e.data.msg,duration:2e3}),t.yanzheng())}))}else this.$refs.error.showTips({msg:"请输入正确的身份证号",duration:2e3});else this.$refs.error.showTips({msg:"两次密码不一致",duration:2e3});else this.$refs.error.showTips({msg:"密码必须是6位数字",duration:2e3});else this.$refs.error.showTips({msg:"新密码必须是6位数字",duration:2e3})}}};e.default=n},5664:function(t,e,i){"use strict";i.r(e);var n=i("cff7"),a=i("10f1");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("f1b2");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"d45bc18c",null,!1,n["a"],o);e["default"]=u.exports},"5a73":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],i=t.currentTarget;this.start.x=e.clientX-i.offsetLeft,this.start.y=e.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],i=e.clientX-this.start.x,n=e.clientY-this.start.y,a=this.safeArea.width,s=this.safeArea.top,o=this.safeArea.height,r=40;this.left=i<0?0:i>a-r?a-r:i,this.top=n<s?s:n>o?o:n}},touchend:function(t){var e=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width-20,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=n},"7ff1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},a380:function(t,e,i){var n=i("7ff1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("74a34bff",n,!0,{sourceMap:!1,shadowMode:!1})},ab7b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".payPassword[data-v-e1371cac]{width:100%;height:100vh}.payPassword .editPassword .newInput[data-v-e1371cac]{margin:0 auto;width:%?686?%}.payPassword .editPassword .newInput .newInputItem[data-v-e1371cac]{width:100%;height:%?90?%;border-bottom:%?1?% solid #e5e5e5;display:flex;align-items:center}.payPassword .editPassword .newInput .newInputItem .inputName[data-v-e1371cac]{font-family:PingFangSC-Regular,PingFang SC;width:%?160?%;height:100%;display:flex;align-items:center;justify-content:left}.payPassword .editPassword .newInput .newInputItem uni-input[data-v-e1371cac]{height:100% ;width:%?506?%}.payPassword .editPassword .newInput .two[data-v-e1371cac]{width:100%;height:%?90?%;display:flex;align-items:center;position:relative}.payPassword .editPassword .newInput .two .jizhu[data-v-e1371cac]{display:flex;align-items:center}.payPassword .editPassword .newInput .two .wangji[data-v-e1371cac]{position:absolute;width:%?160?%;height:100%;right:0;top:0}",""]),t.exports=e},ba51:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={airelFloatball:i("5664").default,uInput:i("0755").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"payPassword"},[i("v-uni-view",[i("airel-floatball")],1),i("Tips",{ref:"success",attrs:{position:"center",backgroundColor:"#dbf1e1",color:"#07c07e",size:"30"}}),i("Tips",{ref:"error",attrs:{position:"center",backgroundColor:"red",color:"#fff",size:"30"}}),i("v-uni-view",{staticClass:"editPassword"},[i("v-uni-view",{staticClass:"newInput"},[i("v-uni-view",{staticClass:"newInputItem"},[i("v-uni-view",{staticClass:"inputName "},[t._v("身份证号")]),i("u-input",{attrs:{type:"text",placeholder:"请输入本人身份证号",border:"true"},model:{value:t.sfz,callback:function(e){t.sfz=e},expression:"sfz"}})],1),i("v-uni-view",{staticClass:"newInputItem"},[i("v-uni-view",{staticClass:"inputName "},[t._v("新密码")]),i("u-input",{attrs:{type:"password","password-icon":"true",pattern:"[0-9]{6,}",placeholder:"请输入密码",border:"true"},model:{value:t.xin,callback:function(e){t.xin=e},expression:"xin"}})],1),i("v-uni-view",{staticClass:"newInputItem"},[i("v-uni-view",{staticClass:"inputName "},[t._v("确认密码")]),i("u-input",{attrs:{type:"password","password-icon":"true",pattern:"[0-9]{6,}",placeholder:"再次输入新密码",border:"true"},model:{value:t.queren,callback:function(e){t.queren=e},expression:"queren"}})],1),i("v-uni-view",{staticClass:"newInputItem"},[i("v-uni-view",{staticClass:"inputName "},[t._v("验证码")]),i("u-input",{staticStyle:{height:"100%",width:"266upx"},attrs:{type:"text",placeholder:"请输入验证码",border:"true",maxlength:"4"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),i("v-uni-image",{staticStyle:{width:"270upx",height:"100%"},attrs:{src:t.herf,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yanzheng.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"xinBtn dis",staticStyle:{"margin-top":"90upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._v("设置密码")])],1)],1)],1)},s=[]},cff7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},s=[]},dad2:function(t,e,i){"use strict";i.r(e);var n=i("ba51"),a=i("eb39");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("16bf");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e1371cac",null,!1,n["a"],o);e["default"]=u.exports},eb39:function(t,e,i){"use strict";i.r(e);var n=i("20c2"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f1b2:function(t,e,i){"use strict";var n=i("a380"),a=i.n(n);a.a}}]);