(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addressDetail-addressDetail"],{"064b":function(t,i,e){"use strict";e.r(i);var s=e("3d91"),a=e("605f");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("b36d");var o,c=e("f0c5"),u=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"7c29c776",null,!1,s["a"],o);i["default"]=u.exports},"2f65":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,".item[data-v-7c29c776]{width:95%;height:%?140?%;margin:0 auto;display:flex}.item .left[data-v-7c29c776]{width:30%;height:100%;font-size:%?34?%;font-weight:560}.item .right[data-v-7c29c776]{width:70%;height:100%;position:relative}.item .right .pos[data-v-7c29c776]{width:%?100?%;height:100%;position:absolute;right:0;top:0}.item .right uni-input[data-v-7c29c776]{width:100%;height:60%;background-color:#f0f0f0;border-radius:%?20?%}",""]),t.exports=i},"3d91":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return s}));var s={airelFloatball:e("5664").default,uSwitch:e("2c88").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",[e("airel-floatball")],1),e("v-uni-view",{staticClass:"left dis"},[t._v("收货人")]),e("v-uni-view",{staticClass:"right dis"},[e("v-uni-input",{attrs:{type:"text"},model:{value:t.user_name,callback:function(i){t.user_name=i},expression:"user_name"}})],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left dis"},[t._v("手机号码")]),e("v-uni-view",{staticClass:"right dis"},[e("v-uni-input",{attrs:{type:"text",maxlength:"11"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left dis"},[t._v("所在地区")]),e("v-uni-view",{staticClass:"right dis",staticStyle:{position:"relative"}},[e("pickerAddress",{staticClass:"dis",staticStyle:{"background-color":"#f0f0f0",width:"100%",height:"60%","border-radius":"20upx"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[t._v("选择地点")])],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:""!=t.diqu,expression:"diqu==''?false:true"}],staticClass:"item"},[e("v-uni-view",{staticClass:"left dis"}),e("v-uni-view",{staticClass:"right dis",staticStyle:{position:"relative"}},[t._v(t._s(t.diqu))])],1),e("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"20upx"}},[e("v-uni-view",{staticClass:"left dis"},[t._v("详细地址")]),e("v-uni-view",{staticClass:"right dis"},[e("v-uni-view",{staticClass:"uni-textarea",staticStyle:{width:"100%",height:"200upx","background-color":"#f0f0f0","border-radius":"20upx",overflow:"hidden"}},[e("v-uni-textarea",{attrs:{"placeholder-style":"color:#F76260",placeholder:""},model:{value:t.wenben,callback:function(i){t.wenben=i},expression:"wenben"}})],1)],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left dis",staticStyle:{width:"50%"}},[t._v("设为默认收货地址")]),e("v-uni-view",{staticClass:"right dis",staticStyle:{width:"50%"}},[e("v-uni-view",{staticClass:"pos dis"},[e("u-switch",{attrs:{activeColor:"#5ac725"},model:{value:t.value1,callback:function(i){t.value1=i},expression:"value1"}})],1)],1)],1),e("v-uni-view",{staticClass:"bottom dis"},[e("v-uni-view",{staticClass:"xinBtn dis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Addaddress.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)},n=[]},"605f":function(t,i,e){"use strict";e.r(i);var s=e("99a3"),a=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);i["default"]=a.a},"99a3":function(t,i,e){"use strict";var s=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("caca")),n={components:{pickerAddress:a.default},data:function(){return{wenben:"",value1:"",formatter:{},candidates:["北京","南京","东京","武汉","天津","上海","海口"],suozaidiqu:"555",user_info:{},exit:{},phone:"",user_name:"",address:"",diqu:"",res:"",province:"",city:"",county:"",id:""}},onLoad:function(t){this.user_info=uni.getStorageSync("user_info")},onShow:function(){this.res=uni.getStorageSync("exit"),console.log(this.res),this.id=this.res.id,this.user_name=this.res.username,this.phone=this.res.phone,this.diqu=this.res.province+this.res.city+this.res.county,this.wenben=this.res.address,this.province=this.res.province,this.city=this.res.city,this.county=this.res.county,1==this.res.is_default?this.value1=!0:this.value1=!1},methods:{change:function(t){console.log(t.data);var i=t.data;this.res=t.data,this.diqu=i[0]+i[1]+i[2],this.province=i[0],this.city=i[1],this.county=i[2]},Addaddress:function(){uni.getStorageSync("exit");var t="";t=1==this.value1?"1":"0";var i={address:this.wenben,province:this.province,city:this.city,county:this.county,user_name:this.user_name,phone:this.phone,aid:this.id,default:t};this.$fn.request("edit_address","POST",i).then((function(t){console.log(t.data.msg,"地址"),1==t.data.code?uni.showToast({duration:1e3,icon:"success",title:t.data.msg}):uni.showToast({duration:1e3,icon:"error",title:t.data.msg})}))}}};i.default=n},b36d:function(t,i,e){"use strict";var s=e("d7c3"),a=e.n(s);a.a},d7c3:function(t,i,e){var s=e("2f65");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("2f0d67bc",s,!0,{sourceMap:!1,shadowMode:!1})}}]);