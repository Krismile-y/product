(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdrawal-withdrawal"],{"0e9d":function(t,a,e){"use strict";var n=e("f55b"),i=e.n(n);i.a},"10f1":function(t,a,e){"use strict";e.r(a);var n=e("5a73"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"1e10":function(t,a,e){"use strict";e.r(a);var n=e("f2a3"),i=e("b32f");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("e200");var r,s=e("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"950a8fdc",null,!1,n["a"],r);a["default"]=d.exports},"2bc4":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.blur.apply(void 0,arguments)},touchstart:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchstart.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchmove.apply(void 0,arguments)},touchend:function(a){arguments[0]=a=t.$handleEvent(a),t.touchend.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},3231:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("0755")),o=n(e("3cd0")),r={name:"u--input",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvInput:i.default}};a.default=r},5131:function(t,a,e){"use strict";e.r(a);var n=e("3231"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},5664:function(t,a,e){"use strict";e.r(a);var n=e("2bc4"),i=e("10f1");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("0e9d");var r,s=e("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],r);a["default"]=d.exports},"59cf":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=a},"5a73":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,a=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return a}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var a=t.touches[0],e=t.currentTarget;this.start.x=a.clientX-e.offsetLeft,this.start.y=a.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var a=t.touches[0],e=a.clientX-this.start.x,n=a.clientY-this.start.y,i=this.safeArea.width,o=this.safeArea.top,r=this.safeArea.height,s=40;this.left=e<0?0:e>i-s?i-s:e,this.top=n<o?o:n>r?r:n}},touchend:function(t){var a=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var n=this.safeArea.width,i=t.changedTouches[0].clientX;i>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){a.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};a.default=n},"7ca8":function(t,a,e){"use strict";e.r(a);var n=e("b334"),i=e("5131");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);var r,s=e("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);a["default"]=d.exports},b32f:function(t,a,e){"use strict";e.r(a);var n=e("d4b3"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},b334:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("uvInput",{attrs:{value:t.value,type:t.type,fixed:t.fixed,disabled:t.disabled,disabledColor:t.disabledColor,clearable:t.clearable,password:t.password,maxlength:t.maxlength,placeholder:t.placeholder,placeholderClass:t.placeholderClass,placeholderStyle:t.placeholderStyle,showWordLimit:t.showWordLimit,confirmType:t.confirmType,confirmHold:t.confirmHold,holdKeyboard:t.holdKeyboard,focus:t.focus,autoBlur:t.autoBlur,disableDefaultPadding:t.disableDefaultPadding,cursor:t.cursor,cursorSpacing:t.cursorSpacing,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,adjustPosition:t.adjustPosition,inputAlign:t.inputAlign,fontSize:t.fontSize,color:t.color,prefixIcon:t.prefixIcon,suffixIcon:t.suffixIcon,suffixIconStyle:t.suffixIconStyle,prefixIconStyle:t.prefixIconStyle,border:t.border,readonly:t.readonly,shape:t.shape,customStyle:t.customStyle,formatter:t.formatter,ignoreCompositionEvent:t.ignoreCompositionEvent},on:{focus:function(a){arguments[0]=a=t.$handleEvent(a),t.$emit("focus")},blur:function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.$emit("blur",a)}.apply(void 0,arguments)},keyboardheightchange:function(a){arguments[0]=a=t.$handleEvent(a),t.$emit("keyboardheightchange")},change:function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.$emit("change",a)}.apply(void 0,arguments)},input:function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.$emit("input",a)}.apply(void 0,arguments)},confirm:function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.$emit("confirm",a)}.apply(void 0,arguments)},clear:function(a){arguments[0]=a=t.$handleEvent(a),t.$emit("clear")},click:function(a){arguments[0]=a=t.$handleEvent(a),t.$emit("click")}}},[t._t("prefix",null,{slot:"prefix"}),t._t("suffix",null,{slot:"suffix"})],2)},o=[]},c7b5:function(t,a,e){var n=e("24fb"),i=e("1de5"),o=e("f3da");a=n(!1);var r=i(o);a.push([t.i,".withdrawal[data-v-950a8fdc]{width:100%}.withdrawal .head-box[data-v-950a8fdc]{width:100%;height:%?344?%;background-image:url("+r+");background-repeat:no-repeat;background-size:100% 100%;box-sizing:border-box;padding:%?67?% 0 0}.withdrawal .head-box .head-text[data-v-950a8fdc]{width:100%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff;opacity:.95;text-align:center}.withdrawal .head-box .head-num[data-v-950a8fdc]{width:100%;text-align:center;font-size:%?56?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#fff;letter-spacing:2px;margin-top:%?24?%}.withdrawal .content-box[data-v-950a8fdc]{width:100%;margin-top:%?-86?%;height:calc(100vh - %?258?%);background:#f7f8fa;border-radius:%?32?% %?32?% %?0?% %?0?%;box-sizing:border-box;padding:%?40?% %?24?% 0}.withdrawal .content-box .content-title[data-v-950a8fdc]{display:flex;align-items:center;margin-bottom:%?36?%;width:100%}.withdrawal .content-box .content-title .shu[data-v-950a8fdc]{width:%?10?%;height:%?24?%;background:#02ad70;border-radius:%?5?%;margin-right:%?12?%}.withdrawal .content-box .content-title .title-text[data-v-950a8fdc]{height:%?40?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#272727;line-height:%?40?%}.withdrawal .content-box .money-num[data-v-950a8fdc] .u-text__value{font-size:%?64?%!important;font-family:PingFangSC-Medium,PingFang SC;font-weight:550;color:#272727}.withdrawal .content-box .money-num[data-v-950a8fdc] .uni-input-input{font-size:%?54?%!important;font-family:PingFangSC-Medium,PingFang SC;font-weight:550;color:#272727}.withdrawal .cardChange[data-v-950a8fdc]{width:100%;height:%?102?%;box-sizing:border-box;border-bottom:%?1?% solid #e5e5e5;display:flex;align-items:center}.withdrawal .cardChange .left[data-v-950a8fdc]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#272727}.withdrawal .cardChange .center[data-v-950a8fdc]{flex:1;text-align:right;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#8e8e8e}.withdrawal .cardChange .cardNumcolor[data-v-950a8fdc]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#272727}.withdrawal .cardChange uni-image[data-v-950a8fdc]{width:%?32?%;height:%?32?%;-webkit-transform:rotate(270deg);transform:rotate(270deg);margin-left:%?10?%}.withdrawal .bottom-fixd[data-v-950a8fdc]{position:fixed;bottom:0;left:0;width:100%;height:%?180?%;background:#fff}.withdrawal .bottom-fixd .bot-btn[data-v-950a8fdc]{width:%?686?%;height:%?80?%;background:#02ae71;border-radius:%?100?%;margin:%?16?% auto 0;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:%?80?%;text-align:center}.withdrawal .popupBox[data-v-950a8fdc]{width:100%;height:%?836?%;background:#f7f8fa;border-radius:%?32?% %?32?% %?0?% %?0?%;box-sizing:border-box;padding:%?24?% %?24?% 0;position:relative;overflow-y:scroll}.withdrawal .popupBox .popupBox-title[data-v-950a8fdc]{width:100%;text-align:center;font-size:%?36?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#272727;margin-bottom:%?24?%}.withdrawal .popupBox .btn-group[data-v-950a8fdc]{width:100%;position:fixed;bottom:%?64?%;left:0;display:flex;justify-content:space-evenly}.withdrawal .popupBox .btn-group .quxiao[data-v-950a8fdc]{width:%?327?%;height:%?80?%;border-radius:%?40?%;border:%?2?% solid #8e8e8e;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#8e8e8e;line-height:%?80?%;text-align:center}.withdrawal .popupBox .btn-group .wancheng[data-v-950a8fdc]{width:%?327?%;height:%?80?%;background:#02ae71;border-radius:%?100?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:%?80?%;text-align:center}.withdrawal .popupBox .card-item[data-v-950a8fdc]{background:linear-gradient(180deg,#34d099 0,#07c07e);margin-bottom:%?20?%;border-radius:%?25?%;width:100%;height:%?200?%;box-sizing:border-box;padding:%?20?% %?40?%;color:#fff;position:relative}.withdrawal .popupBox .card-item .card-name[data-v-950a8fdc]{font-size:16px;margin-bottom:%?10?%}.withdrawal .popupBox .card-item .username[data-v-950a8fdc]{font-size:14px;margin-bottom:%?10?%}.withdrawal .popupBox .card-item .card-number[data-v-950a8fdc]{font-size:18px;margin-bottom:%?10?%}.withdrawal .popupBox .card-item .defaultText[data-v-950a8fdc]{border:%?1?% solid #fff;border-radius:%?12?%;box-sizing:border-box;padding:%?2?% %?8?% %?6?%;color:#fff;position:absolute;font-size:%?20?%;bottom:%?12?%;right:%?12?%}.withdrawal .popupBox .addCard[data-v-950a8fdc]{width:100%;height:%?160?%;background-color:#fff;box-sizing:border-box;padding:%?10?% %?20?%;display:flex;align-items:center;border-radius:%?25?%}.withdrawal .popupBox .addCard uni-image[data-v-950a8fdc]{width:%?80?%;height:%?80?%}.withdrawal .popupBox .addCard .addtext[data-v-950a8fdc]{flex:1;line-height:%?160?%;color:#5e6570;font-size:16px;margin-left:%?20?%}",""]),t.exports=a},c811:function(t,a,e){var n=e("c7b5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1d4a51b0",n,!0,{sourceMap:!1,shadowMode:!1})},d4b3:function(t,a,e){"use strict";e("4160"),e("a434"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{show:!1,addShow:!1,money:0,cardList:[],info:{money_approve:0},nowCard:{},cardText:"请选择",cardTextColor:!1,valiFormData:{u_back_card:"",u_bank_name:"",u_back_user_name:"",is_default:0},rules:{u_back_card:{rules:[{required:!0,errorMessage:"请输入正确的银行卡号"},{pattern:"\\d+",errorMessage:"银行卡号只能输入数字"}]},u_bank_name:{rules:[{required:!0,errorMessage:"开户行不能为空"}]},u_back_user_name:{rules:[{required:!0,errorMessage:"卡用户名不能为空"}]}},sexs:[{text:"否",value:0},{text:"是",value:1}]}},watch:{cardText:function(t){"请选择"!=t&&(this.cardTextColor=!0)}},onLoad:function(){this.init(),this.getuserMsg()},methods:{init:function(){var t=this;this.cardList=[];var a={},e=this;this.$fn.request("my_bank","POST",a).then((function(a){console.log(a,"我的银行卡"),a.data.data.forEach((function(a,n){var i=t.noSpace(a.card);a.card=e.newCardNum(i),e.cardList.push(a),1==a.is_default&&(t.cardText=a.card,t.nowCard=a)}))}))},getuserMsg:function(){var t=this,a={is_whole:1};this.$fn.request("user","GET",a).then((function(a){console.log(a,"个人信息"),t.info=a.data.data}))},checkCard:function(t){console.log(t,"信息"),this.cardText=this.noSpace(t.card),this.cardText=this.newCardNum(this.cardText);var a={name:t.name,card:this.cardText,account_name:t.account_name,default:1,bid:t.id};this.editCard(a)},addCard:function(t){var a=this;this.$fn.request("bank","POST",t).then((function(t){uni.showToast({title:"添加银行卡成功",icon:"success"}),a.init(),a.$forceUpdate(),a.close(),a.closeAgain()}))},editCard:function(t){var a=this;this.$fn.request("edit_bank","POST",t).then((function(t){uni.showToast({title:"修改银行卡成功",icon:"success"}),a.init(),a.close()}))},open:function(){this.show=!0},close:function(){this.show=!1},openAgain:function(){this.addShow=!0},closeAgain:function(){this.addShow=!1},noSpace:function(t){return t.replace(/\s/g,"")},newCardNum:function(t){if(void 0!=t&&""!=t){for(var a=t.toString().split(""),e=0;e<a.length;e++)e%5==0&&a.splice(e,0," ");var n=a.join("");return n}},submitForm:function(t){var a=this,e=/[^\u4e00-\u9fa5]/g;this.$refs[t].validate().then((function(t){var n=a.noSpace(t.u_back_card);if(console.log("success",t,n),n.length<=15||n.length>19)uni.showToast({title:"请检查银行卡号输入是否正确",icon:"error"});else if(e.test(t.u_bank_name)||e.test(t.u_back_user_name))uni.showToast({title:"请检查开户行或卡用户名",icon:"error"});else{var i={name:"",card:"",account_name:"",default:1};i.name=t.u_bank_name,i.card=n,i.account_name=t.u_back_user_name,console.log(i),a.addCard(i)}})).catch((function(t){console.log("err",t)}))},tixian:function(){var t=this;if(0!=this.money)if(this.info.money_approve<this.money)uni.showToast({title:"可提现余额不足",icon:"error"});else{var a={money:this.money,u_bank_name:this.nowCard.name,u_back_card:this.nowCard.card,u_back_user_name:this.nowCard.account_name};console.log(a,"money"),this.$fn.request("withdrawal","POST",a).then((function(a){uni.showToast({title:"申请成功",icon:"success"}),t.init()}))}else uni.showToast({title:"请输入提现金额",icon:"error"})}}};a.default=n},e200:function(t,a,e){"use strict";var n=e("c811"),i=e.n(n);i.a},e294:function(t,a,e){t.exports=e.p+"static/img/xia.433d80df.png"},f2a3:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={airelFloatball:e("5664").default,"u-Input":e("7ca8").default,uPopup:e("a41f").default,uniForms:e("49cb").default,uniFormsItem:e("e6ca").default,uniEasyinput:e("ca56").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"withdrawal"},[n("airel-floatball"),n("v-uni-view",{staticClass:"head-box"},[n("v-uni-view",{staticClass:"head-text"},[t._v("可提现余额")]),n("v-uni-view",{staticClass:"head-num"},[t._v(t._s(t.info.money_approve))])],1),n("v-uni-view",{staticClass:"content-box"},[n("v-uni-view",{staticClass:"content-title"},[n("v-uni-view",{staticClass:"shu"}),n("v-uni-view",{staticClass:"title-text"},[t._v("提现金额")])],1),n("v-uni-view",{staticClass:"money-num"},[n("u--input",{attrs:{placeholder:"请输入提现金额",border:"bottom",clearable:!0},model:{value:t.money,callback:function(a){t.money=a},expression:"money"}})],1),n("v-uni-view",{staticClass:"cardChange",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.open()}}},[n("v-uni-view",{staticClass:"left"},[t._v("银行卡")]),n("v-uni-view",{staticClass:"center",class:{cardNumcolor:t.cardTextColor}},[t._v(t._s(t.cardText))]),n("v-uni-image",{attrs:{src:e("e294"),mode:""}})],1)],1),n("v-uni-view",{staticClass:"bottom-fixd"},[n("v-uni-view",{staticClass:"bot-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tixian.apply(void 0,arguments)}}},[t._v("提交申请")])],1),n("u-popup",{attrs:{show:t.show,mode:"bottom",round:16},on:{close:function(a){arguments[0]=a=t.$handleEvent(a),t.close.apply(void 0,arguments)},open:function(a){arguments[0]=a=t.$handleEvent(a),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"popupBox"},[n("v-uni-view",{staticClass:"popupBox-title"},[t._v("银行卡选择")]),t._l(t.cardList,(function(a,e){return n("v-uni-view",{key:e,staticClass:"card-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkCard(a)}}},[n("v-uni-view",{staticClass:"card-name"},[t._v(t._s(a.name))]),n("v-uni-view",{staticClass:"username"},[t._v(t._s(a.account_name))]),n("v-uni-view",{staticClass:"card-number"},[t._v(t._s(a.card))]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==a.is_default,expression:"(item.is_default==1)"}],staticClass:"defaultText"},[t._v("当前选中")])],1)})),n("v-uni-view",{staticClass:"addCard",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openAgain()}}},[n("v-uni-image",{attrs:{src:e("1f2e"),mode:""}}),n("v-uni-view",{staticClass:"addtext"},[t._v("添加银行卡")])],1)],2)],1),n("u-popup",{attrs:{show:t.addShow,mode:"bottom",round:16},on:{close:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAgain.apply(void 0,arguments)},open:function(a){arguments[0]=a=t.$handleEvent(a),t.openAgain.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"popupBox"},[n("v-uni-view",{staticClass:"popupBox-title"},[t._v("银行卡填写")]),n("uni-forms",{ref:"valiForm",attrs:{rules:t.rules,modelValue:t.valiFormData,"label-width":80}},[n("uni-forms-item",{attrs:{label:"银行卡号",name:"u_back_card",required:!0}},[n("uni-easyinput",{attrs:{type:"text",placeholder:"请输入银行卡号(只能输入数字)"},model:{value:t.valiFormData.u_back_card,callback:function(a){t.$set(t.valiFormData,"u_back_card",a)},expression:"valiFormData.u_back_card"}})],1),n("uni-forms-item",{attrs:{required:!0,name:"u_bank_name",label:"开户行"}},[n("uni-easyinput",{attrs:{type:"text",placeholder:"请输入开户行"},model:{value:t.valiFormData.u_bank_name,callback:function(a){t.$set(t.valiFormData,"u_bank_name",a)},expression:"valiFormData.u_bank_name"}})],1),n("uni-forms-item",{attrs:{required:!0,name:"u_back_user_name",label:"卡用户名"}},[n("uni-easyinput",{attrs:{type:"text",placeholder:"请输入卡用户名"},model:{value:t.valiFormData.u_back_user_name,callback:function(a){t.$set(t.valiFormData,"u_back_user_name",a)},expression:"valiFormData.u_back_user_name"}})],1)],1),n("v-uni-view",{staticClass:"btn-group"},[n("v-uni-view",{staticClass:"quxiao",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAgain.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"wancheng",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm("valiForm")}}},[t._v("填写完成")])],1)],1)],1)],1)},o=[]},f3da:function(t,a,e){t.exports=e.p+"static/img/tixian_head.7b6013a9.png"},f55b:function(t,a,e){var n=e("59cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3ffa4ba2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);