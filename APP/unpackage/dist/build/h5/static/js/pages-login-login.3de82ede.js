(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"80e4":function(t,e,i){"use strict";var n=i("88f9"),a=i.n(n);a.a},"88f9":function(t,e,i){var n=i("e3c3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3351bc3f",n,!0,{sourceMap:!1,shadowMode:!1})},"8a8e":function(t,e,i){"use strict";i.r(e);var n=i("b33d"),a=i("b3a3");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("80e4");var s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"63777866",null,!1,n["a"],void 0);e["default"]=u.exports},9679:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{out:0,res:{name:"type1",title:"登录"},phone:"",pwd:"",captcha:"",value:!1,herf:""}},onBackPress:function(t){if(0==this.out?(this.out++,uni.showToast({duration:1e3,title:"再按一次退出程序",icon:"none"})):this.out>=1&&("android"===plus.os.name.toLowerCase()&&plus.runtime.quit(),uni.removeStorageSync("token")),"backbutton"===t.from)return this.overlayShow=!0,!0},onLoad:function(){this.$fn.request("verify","GET",{}).then((function(t){}))},onShow:function(){this.herf=this.$url+"verify",this.value=uni.getStorageSync("remember"),uni.getStorageSync("pwd")&&uni.getStorageSync("phone")&&(this.pwd=uni.getStorageSync("pwd"),this.phone=uni.getStorageSync("phone")),(1==uni.getStorageSync("remember")||0==uni.getStorageSync("remember"))&&this.value},methods:{yanzheng:function(){var t=this;uni.request({url:this.$url+"verify",data:{},success:function(e){console.log(e);var i;i=new Date,t.herf=t.$url+"verify?time="+i}})},change:function(t){console.log("change",t),uni.setStorageSync("remember",t),this.value=t,1==t?(uni.setStorageSync("pwd",this.pwd),uni.setStorageSync("phome",this.phone)):(uni.removeStorageSync("pwd"),uni.removeStorageSync("phone"))},go:function(){uni.navigateTo({url:"/pages/logon/logon"})},forgetPwd:function(){uni.navigateTo({url:"/pages/forgetPwd/forgetPwd"})},login:function(){var t=this;if(console.log(this.phone.length),11===this.phone.length)if(this.pwd.length<8)uni.showToast({duration:1e3,icon:"error",title:"密码必须大于8位"});else{var e={phone:this.phone,pwd:this.pwd,captcha:this.captcha};this.$fn.request("login","POST",e).then((function(e){if(1==e.data.code){uni.setStorageSync("gengxin",!0),uni.setStorageSync("token",e.data.data.token),uni.setStorageSync("name","index"),1==t.value&&(console.log(t.pwd),uni.setStorageSync("pwd",t.pwd),uni.setStorageSync("phone",t.phone)),setTimeout((function(){uni.navigateTo({url:"/pages/index/index"})}),1e3);t.$fn.request("user","GET",{is_whole:"1"}).then((function(t){console.log(t.data.data,"用户信息"),uni.setStorageSync("user_info",t.data.data)}))}else 1!==e.data.code&&(console.log(e.data.msg),uni.showToast({duration:1e3,icon:"error",title:e.data.msg,success:function(){this.pwd="",this.phone=""}}))}))}else uni.showToast({duration:1e3,icon:"error",title:"手机号必须是11位"})}}};e.default=n},b33d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uInput:i("03e7").default,uSwitch:i("0443").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"xinhezi"},[n("v-uni-view",{staticClass:"newTop disc"},[n("v-uni-image",{staticStyle:{"border-radius":"50%"},attrs:{src:i("fa3b"),mode:""}}),n("v-uni-view",{staticClass:"font"},[t._v("绿色中国")])],1),n("v-uni-view",{staticClass:"newInput"},[n("v-uni-view",{staticClass:"newInputItem"},[n("v-uni-view",{staticClass:"inputName "},[t._v("手机号")]),n("u-input",{attrs:{type:"number",placeholder:"请输入手机号",border:"true"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"newInputItem"},[n("v-uni-view",{staticClass:"inputName "},[t._v("密码")]),n("u-input",{attrs:{type:"password","password-icon":"true",pattern:"[0-9]{8,}",placeholder:"请输入密码",border:"true"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),n("v-uni-view",{staticClass:"newInputItem"},[n("v-uni-view",{staticClass:"inputName "},[t._v("验证码")]),n("u-input",{staticStyle:{height:"100%",width:"270upx","padding-left":"20upx"},attrs:{type:"text",placeholder:"请输入验证码",border:"true"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-image",{staticStyle:{width:"270upx",height:"100%"},attrs:{src:t.herf,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yanzheng.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"two"},[n("v-uni-view",{staticClass:" jizhu"},[n("u-switch",{staticStyle:{"margin-right":"20upx",width:"100upx",height:"40upx"},attrs:{activeColor:"#02AE71"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v("记住密码")],1),n("v-uni-view",{staticClass:"wangji dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go()}}},[t._v("去注册")])],1)],1),n("v-uni-view",{staticClass:"xinBtn dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"last"},[n("v-uni-view",{staticClass:"wangjimima dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forgetPwd.apply(void 0,arguments)}}},[t._v("忘记密码?找回密码")])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"inputBox"},[n("v-uni-view",{staticClass:"inputs"},[n("v-uni-view",{staticClass:"title"},[t._v("手机号")]),n("u-input",{attrs:{type:"number",placeholder:"请输入手机号",border:"true"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"inputs"},[n("v-uni-view",{staticClass:"title"},[t._v("密码")]),n("u-input",{attrs:{type:"password","password-icon":"true",pattern:"[0-9]{8,}",placeholder:"请输入密码",border:"true"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),n("v-uni-view",{staticClass:"yanzheng"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-input",{staticStyle:{"padding-left":"30upx"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}})],1),n("v-uni-image",{staticStyle:{width:"50%",height:"100%"},attrs:{src:t.herf,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yanzheng.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"xuanxiang",staticStyle:{"margin-top":"110upx"}},[n("v-uni-view",{staticClass:"left "},[t._v("记住密码"),n("u-switch",{staticStyle:{"margin-left":"20upx"},attrs:{activeColor:"#02AE71"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("v-uni-view",{staticClass:"right "})],1),n("v-uni-view",{staticClass:"in dis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"xuanxiang",staticStyle:{"margin-top":"50upx"}},[n("v-uni-view",{staticClass:"left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go()}}},[t._v("注册")]),n("v-uni-view",{staticClass:"right ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forgetPwd.apply(void 0,arguments)}}},[t._v("忘记密码?")])],1)],1)],1)},o=[]},b3a3:function(t,e,i){"use strict";i.r(e);var n=i("9679"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cf6a:function(t,e,i){t.exports=i.p+"static/img/background.67f7f5d6.png"},e3c3:function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("b109"),s=i("cf6a");e=n(!1);var u=a(o),r=a(s);e.push([t.i,".inputBox[data-v-63777866]{width:90%;margin:%?60?% auto;height:%?600?%}.inputBox .yanzheng[data-v-63777866]{width:100%;display:flex;height:%?90?%;margin-top:%?30?%}.inputBox .yanzheng .left[data-v-63777866]{width:50%;height:100%;display:flex;align-items:center}.inputBox .yanzheng .left uni-input[data-v-63777866]{width:100%;height:100%}.inputBox .yanzheng .right[data-v-63777866]{width:50%;height:100%;border:%?1?% solid #ccc;border-radius:%?20?%}.inputBox .inputs[data-v-63777866]{width:100%;height:%?130?%;border:%?1?% solid #ccc;border-radius:%?20?%;margin-top:%?30?%}.inputBox .inputs .title[data-v-63777866]{width:100%;font-size:%?28?%;height:%?50?%;display:flex;align-items:center;box-sizing:border-box;padding-left:%?20?%}.inputBox .inputs uni-input[data-v-63777866]{width:90%;height:%?80?%}.inputBox .xuanxiang[data-v-63777866]{width:100%;height:%?60?%;display:flex;font-size:%?28?%;box-sizing:border-box;font-size:%?36?%}.inputBox .xuanxiang .left[data-v-63777866]{width:50%;height:100%;display:flex;align-items:center;padding-left:%?30?%}.inputBox .xuanxiang .right[data-v-63777866]{width:50%;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:right;padding-right:%?30?%}.inputBox .in[data-v-63777866]{width:100%;height:%?130?%;margin-top:%?30?%;background-image:url("+u+");background-repeat:no-repeat;background-size:100% 100%;color:#fff;font-size:%?40?%;border-radius:%?20?%}.newTop[data-v-63777866]{width:100%;height:%?400?%;background-repeat:no-repeat;background-image:url("+r+");background-size:100% %?674?%;background-position:0 100%\n}.newTop uni-image[data-v-63777866]{width:%?125?%;height:%?128?%;background:#3c9e64;margin-bottom:%?30?%}.newTop .font[data-v-63777866]{font-size:%?40?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:560;color:#272727;letter-spacing:%?6?%}.newInput[data-v-63777866]{margin:0 auto;width:%?686?%}.newInput .newInputItem[data-v-63777866]{width:100%;height:%?90?%;border-bottom:%?1?% solid #e5e5e5;display:flex;align-items:center}.newInput .newInputItem .inputName[data-v-63777866]{font-family:PingFangSC-Regular,PingFang SC;width:%?140?%;height:100%;display:flex;align-items:center;justify-content:left}.newInput .newInputItem uni-input[data-v-63777866]{height:100% ;width:%?546?%}.newInput .two[data-v-63777866]{width:100%;height:%?90?%;display:flex;align-items:center;position:relative}.newInput .two .jizhu[data-v-63777866]{display:flex;align-items:center}.newInput .two .wangji[data-v-63777866]{position:absolute;width:%?160?%;height:100%;right:0;top:0}.xinBtn[data-v-63777866]{width:%?686?%;height:%?80?%;background:#02ae71;border-radius:%?100?%;margin:0 auto;margin-top:%?30?%;color:#fff}.last[data-v-63777866]{width:100%;height:%?90?%;display:flex;align-items:center;position:relative}.last .jizhu[data-v-63777866]{display:flex;align-items:center}.last .wangjimima[data-v-63777866]{position:absolute;width:%?360?%;height:100%;right:0;top:0;color:#8e8e8e}.xinhezi[data-v-63777866]{background-color:#fff;width:100%;height:100vh;background-repeat:no-repeat;background-image:url("+r+");background-size:100% %?674?%;background-position:0 100%\n}",""]),t.exports=e},fa3b:function(t,e,i){t.exports=i.p+"static/img/logo.e6a6a75a.jpg"}}]);