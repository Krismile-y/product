(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-community-community"],{"094e":function(t,a,e){t.exports=e.p+"static/img/bg.a30e626c.png"},"10f1":function(t,a,e){"use strict";e.r(a);var i=e("5a73"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"19fb":function(t,a,e){t.exports=e.p+"static/img/tuoyuan1.1eadee5f.png"},2617:function(t,a,e){t.exports=e.p+"static/img/heisebg.e11014d0.jpg"},"4b78":function(t,a,e){"use strict";e.r(a);var i=e("4bc1"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"4bc1":function(t,a,e){"use strict";var i=e("4ea4");e("99af"),e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("d960")),n=i(e("99f8")),s=i(e("0dd2")),r={components:{"helang-tab-bar-bulge":s.default},data:function(){return{getPeopleNumstate:!1,currentIndex:0,tableData:[],showPagination:!1,pageSize:3,money_team:"",peopleData:{subordinate:"",purchased:""},pageCurrent:1,total:0,info:{},out:0,moneyColor:null,payImg:o.default,paymentImg:n.default,today:"",huodongList:[{name:"收益介绍",url:"../../static/c/shouyijieshao.png",go:"shouyijieshao"},{name:"团队详情",url:"../../static/c/tuanduixiangqing.png",go:"myGroup"},{name:"团队收益",url:"../../static/c/shouyijilu.png",go:"fanyong"},{name:"提现记录",url:"../../static/c/tixian.png",go:"twithdrawal"}]}},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.getPeopleNum(),t.getPeopleNumstate}),50)},onBackPress:function(t){if(0==this.out?(this.out++,this.$refs.success.showTips({msg:"在按一次退出程序",duration:2e3})):this.out>=1&&(plus.runtime.quit(),"android"===plus.os.name.toLowerCase()&&plus.runtime.quit(),uni.removeStorageSync("token")),"backbutton"===t.from)return this.overlayShow=!0,!0},onShow:function(){this.getPeopleNum(),this.out=0,this.info=uni.getStorageSync("user_info"),console.log(this.info,"用户信息"),this.money_team=this.info.money_team,"community"==uni.getStorageSync("name")&&(this.$store.state.one=!0,this.$store.state.two=!1,this.$store.state.three=!0,this.$store.state.four=!0)},onLoad:function(){this.getData()},methods:{bian:function(t){this.currentIndex=t},chakan:function(){uni.navigateTo({url:"/pages/shop/shop"}),uni.setStorageSync("name","shop")},getPeopleNum:function(){var t=this;this.$fn.request("subordinate","POST").then((function(a){console.log(a),t.peopleData=[],1==a.data.code&&setTimeout((function(){t.peopleData=a.data.data,t.getPeopleNumstate=!0,uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}),1e3)}))},getData:function(t,a){var e={page:"1",limit:"3"};e.page=1,e.limit=this.pageSize;var i=this;this.$fn.request("/log/rebate","GET",e).then((function(t){var a=t.data.data;i.priceTotal=a.count_money,i.tableData=a.data,console.log(a),i.tableData.forEach((function(t){t.money_amount>=0?(t.money_amount="+".concat(t.money_amount),i.moneyColor=!0):(t.money_amount="-".concat(Math.abs(t.money_amount)),i.moneyColor=!1)})),i.total=a.total,i.total<=i.pageSize?i.showPagination=!1:i.showPagination=!0}))},change:function(t){this.$refs.table.clearSelection(),this.getData(t.current,this.dateText)},go:function(t,a){console.log(t),"twithdrawal"==t?uni.navigateTo({url:"/pages/".concat(t,"/").concat(t,"?type=2")}):uni.navigateTo({url:"/pages/".concat(t,"/").concat(t,"?index=").concat(a)})}}};a.default=r},"4ff6":function(t,a,e){var i=e("e212");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("2a649b7d",i,!0,{sourceMap:!1,shadowMode:!1})},5664:function(t,a,e){"use strict";e.r(a);var i=e("cff7"),o=e("10f1");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("f1b2");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"d45bc18c",null,!1,i["a"],s);a["default"]=c.exports},"5a73":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,a=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return a}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var a=t.touches[0],e=t.currentTarget;this.start.x=a.clientX-e.offsetLeft,this.start.y=a.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var a=t.touches[0],e=a.clientX-this.start.x,i=a.clientY-this.start.y,o=this.safeArea.width,n=this.safeArea.top,s=this.safeArea.height,r=40;this.left=e<0?0:e>o-r?o-r:e,this.top=i<n?n:i>s?s:i}},touchend:function(t){var a=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var i=this.safeArea.width-20,o=t.changedTouches[0].clientX;o>.5*i?(this.isleft=!1,this.left=i-50):(this.isleft=!0,this.left=3),setTimeout((function(){a.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};a.default=i},6969:function(t,a,e){t.exports=e.p+"static/img/jintie.4566bfee.png"},"7ff1":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=a},"99f8":function(t,a,e){t.exports=e.p+"static/img/payment.8458281e.png"},a380:function(t,a,e){var i=e("7ff1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("74a34bff",i,!0,{sourceMap:!1,shadowMode:!1})},a461:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var i={airelFloatball:e("5664").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticStyle:{"padding-bottom":"0upx","padding-top":"70upx","background-color":"#f7f8fa","min-height":"100vh"}},[e("airel-floatball"),e("Tips",{ref:"success",attrs:{position:"center",backgroundColor:"#dbf1e1",color:"#07c07e",size:"30"}}),e("Tips",{ref:"error",attrs:{position:"center",backgroundColor:"red",color:"#fff",size:"30"}}),e("v-uni-view",{staticClass:"zongshouyi"},[e("v-uni-view",{staticClass:"one disc"},[e("v-uni-view",{staticStyle:{color:"#fff"}},[t._v("团队可提现金额")]),e("v-uni-view",{staticStyle:{"font-weight":"600","font-size":"42upx",color:"#fff"}},[t._v(t._s(parseInt(t.info.money_team)+parseInt(t.info.money_hire)))])],1),e("v-uni-view",{staticClass:"two disc"},[e("v-uni-view",{staticClass:"t",staticStyle:{width:"100%",height:"60%",display:"flex"}},[e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("下级人数")]),e("v-uni-view",[t._v(t._s(t.peopleData.subordinate))])],1),e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("已购人数")]),e("v-uni-view",[t._v(t._s(t.peopleData.purchased))])],1)],1),e("v-uni-view",{staticClass:"last dis",staticStyle:{"margin-top":"-30upx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("tuanduitixian")}}},[t._v("团队提现")])],1)],1),e("v-uni-view",{staticClass:"title",staticStyle:{"margin-top":"30upx"}},[e("v-uni-view",{staticClass:"shu"}),t._v("团队活动中心")],1),e("v-uni-view",{staticClass:"huodongBox dis"},t._l(t.huodongList,(function(a){return e("v-uni-view",{staticClass:"huodongItem disc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go(a.go)}}},[e("v-uni-view",{staticClass:"yuan dis"},[e("v-uni-image",{attrs:{src:a.url,mode:""}})],1),e("v-uni-view",{staticStyle:{"margin-top":"0upx"}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"jintie",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("group")}}},[e("v-uni-view",{staticStyle:{"font-weight":"600","padding-top":"30upx","font-size":"34upx"}},[t._v("团队津贴")]),e("v-uni-view",{staticStyle:{"font-size":"28upx"}},[t._v("超多津贴")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"av"},[e("v-uni-view",{staticClass:"left",staticStyle:{position:"relative"}},[e("v-uni-view",{staticStyle:{"font-size":"42upx","font-weight":"600",display:"flex","align-items":"center",position:"absolute",left:"0",top:"0"}},[t._v(t._s(t.info.user_name))]),e("v-uni-view",{staticClass:"chakan",staticStyle:{padding:"10upx","background-color":"greenyellow",color:"#fff","font-size":"36upx","border-radius":"20upx",position:"absolute",right:"120upx",top:"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chakan.apply(void 0,arguments)}}},[t._v("提现")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"right dis"},[e("v-uni-image",{attrs:{src:"https://img1.baidu.com/it/u=208183464,243900895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465",mode:""}})],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"newTop "},[e("v-uni-view",{staticStyle:{"font-weight":"700","font-size":"40upx","margin-bottom":"20upx"}},[t._v("团队收益")]),e("v-uni-view",{staticStyle:{"font-size":"50upx","font-family":"inherit","font-weight":"700","letter-spacing":"0upx"}},[t._v(t._s(t.money_team))]),e("v-uni-view",{staticStyle:{"margin-top":"60upx","font-size":"30upx","font-weight":"700"}},[t._v("我的推荐码")]),e("v-uni-view",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.info.id))])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"team-box"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("myGroup",0)}}},[e("v-uni-view",{staticClass:"left"},[t._v("团队详情")]),e("v-uni-view",{staticClass:"right"},[t._v(">")])],1)],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("fanyong",1)}}},[e("v-uni-view",{staticClass:"left"},[t._v("返佣记录")]),e("v-uni-view",{staticClass:"right"},[t._v(">")])],1)],1),e("v-uni-view",{staticClass:"overview"},[t._v("返佣记录概览")]),e("v-uni-view",{staticStyle:{"margin-top":"10upx"}},t._l(t.tableData,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item-box"},[e("v-uni-view",{staticClass:"item-icon"},[e("v-uni-image",{attrs:{src:t.moneyColor?t.payImg:t.paymentImg,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"item-content"},[e("v-uni-view",{staticClass:"item-source"},[t._v(t._s(a.money_type_text))]),e("v-uni-view",{staticClass:"item-time"},[t._v(t._s(a.create_time))])],1),e("v-uni-view",{staticClass:"item-money",style:t.moneyColor?{color:"#54C869"}:{color:"#EF8080"}},[t._v(t._s(a.money_amount))])],1)})),1)],1),e("v-uni-view",{staticClass:"bottom-box"},[e("helang-tab-bar-bulge",{attrs:{"fixed-bottom":!0}})],1)],1)},n=[]},aac5:function(t,a){t.exports="data:image/png;base64,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"},cff7:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.blur.apply(void 0,arguments)},touchstart:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchstart.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchmove.apply(void 0,arguments)},touchend:function(a){arguments[0]=a=t.$handleEvent(a),t.touchend.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},n=[]},d960:function(t,a,e){t.exports=e.p+"static/img/pay.fd367dad.png"},e212:function(t,a,e){var i=e("24fb"),o=e("1de5"),n=e("094e"),s=e("2617"),r=e("19fb"),c=e("aac5"),u=e("6969");a=i(!1);var d=o(n),l=o(s),g=o(r),h=o(c),f=o(u);a.push([t.i,".boxs[data-v-26c3aaea]{width:95%;margin:%?30?% auto;background-color:#fff}.boxs .title[data-v-26c3aaea]{width:100%;height:%?40?%;display:flex;border-bottom:%?1?% solid #ccc;align-items:center;font-size:%?28?%;font-weight:600;padding-bottom:%?5?%;padding-top:%?5?%}.boxs .title .shu[data-v-26c3aaea]{width:%?8?%;height:85%;margin-right:%?10?%;background-color:#498cdb}.boxs .msg[data-v-26c3aaea]{width:100%;padding-bottom:%?20?%;padding-top:%?10?%;display:flex;justify-content:start;flex-wrap:wrap}.boxs .msg .item[data-v-26c3aaea]{height:%?160?%;width:%?150?%;font-size:%?28?%;margin-left:%?20?%}.boxs .msg .item uni-image[data-v-26c3aaea]{width:%?70?%;height:%?70?%;margin-bottom:%?10?%}.threes[data-v-26c3aaea]{width:100%;margin-top:%?0?%;height:%?40?%;display:flex}.threes .threeItem[data-v-26c3aaea]{height:100%;flex:1;color:#999}.box[data-v-26c3aaea]{width:90%;margin:auto}.titleCenter[data-v-26c3aaea]{width:90%;margin:0 auto;margin-top:%?20?%}.three[data-v-26c3aaea]{width:90%;height:%?300?%;border-radius:%?20?%;margin:0 auto;color:#fff;font-weight:600;background-image:url(https://img2.baidu.com/it/u=2153006192,2110258112&fm=253&fmt=auto&app=138&f=JPEG?h=500&w=800);background-size:100% 100%;background-repeat:no-repeat}.three .num[data-v-26c3aaea]{margin-top:%?1?%}.three .one[data-v-26c3aaea]{width:100%;height:%?150?%}.three .two[data-v-26c3aaea]{width:100%;height:%?150?%;display:flex}.three .two .item[data-v-26c3aaea]{width:50%;height:100%}.tits[data-v-26c3aaea]{width:80%;height:%?55?%;display:flex;color:red;margin:0 auto;border-radius:%?10?%;border:%?1?% solid red;margin-top:%?20?%}.tits .title[data-v-26c3aaea]{width:50%;height:100%}.color[data-v-26c3aaea]{background-color:red;color:#fff}.tops .center[data-v-26c3aaea]{margin:0 auto;width:82%;height:%?264?%;position:relative}.tops .center .x[data-v-26c3aaea]{width:100%;height:100%;position:absolute;left:0;top:100px;border-radius:%?20?%;background-image:url("+d+");background-repeat:no-repeat;background-size:auto 100%}.top[data-v-26c3aaea]{width:100%;height:%?400?%;background-color:#4bc93e;background-image:linear-gradient(90deg,rgba(85,255,0,0),#aaff7f);border-bottom-left-radius:5.4em 5.4em}.top .shang[data-v-26c3aaea]{width:90%;margin:%?0?% auto;height:%?200?%;padding-top:%?10?%;display:flex;padding-top:%?30?%}.top .shang .left[data-v-26c3aaea]{width:30%;height:100%}.top .shang .left uni-image[data-v-26c3aaea]{width:70%;height:70%;border-radius:%?20?%}.top .shang .center[data-v-26c3aaea]{width:70%;height:100%;color:#fff;font-size:%?36?%;font-weight:600}.top .shang .center .one[data-v-26c3aaea]{margin-top:20px;margin-bottom:10px;width:%?300?%;display:flex;padding-left:%?60?%}.top .shang .center .two[data-v-26c3aaea]{width:%?300?%;display:flex;padding-left:%?60?%}.top .shang .right[data-v-26c3aaea]{width:30%;height:100%;display:flex;justify-content:right;align-items:center}.top .shang .right uni-image[data-v-26c3aaea]{width:%?90?%;height:%?90?%;margin-right:%?20?%}.top .xia[data-v-26c3aaea]{width:90%;margin:%?0?% auto;height:%?412?%;border-radius:%?20?%;background-image:url("+d+");background-repeat:no-repeat;background-size:100% 100%}.top .xia .boxsss[data-v-26c3aaea]{display:flex;flex-wrap:wrap;margin-top:0;height:%?206?%}.top .xia .boxsss .item[data-v-26c3aaea]{height:100%;width:33%}.top .xia .boxsss .item .tit[data-v-26c3aaea]{color:#000;font-weight:600;font-size:%?40?%}.top .xia .boxsss .item .de[data-v-26c3aaea]{margin-top:%?16?%;color:#000;font-weight:6800;font-family:SimHei;font-size:%?36?%}.av[data-v-26c3aaea]{width:90%;height:%?120?%;display:flex;box-sizing:border-box;position:relative;margin:0 auto}.av .left[data-v-26c3aaea]{width:100%;height:100%;display:flex;justify-content:center;flex-direction:column}.av .right[data-v-26c3aaea]{position:absolute;right:0;top:0;width:%?110?%;height:100%}.av .right uni-image[data-v-26c3aaea]{width:%?110?%;height:%?110?%;border-radius:%?10?%}.newTop[data-v-26c3aaea]{width:90%;border-radius:%?30?%;height:%?380?%;margin:%?60?% auto;background-image:url("+l+");background-size:100% auto;color:#fff;display:flex;flex-direction:column;justify-content:center;padding-left:%?30?%;font-size:%?36?%;box-sizing:border-box}.newTop uni-view[data-v-26c3aaea]{margin-top:%?10?%;padding-left:%?30?%}.list[data-v-26c3aaea]{width:98%;margin:0 auto;font-size:18px}.list .item[data-v-26c3aaea]{height:%?70?%;width:100%;display:flex;box-sizing:border-box;position:relative}.list .item .left[data-v-26c3aaea]{width:50%;height:100%;display:flex;align-items:center;padding-left:%?20?%}.list .item .right[data-v-26c3aaea]{width:10%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;right:0;top:0}.overview[data-v-26c3aaea]{width:98%;margin:0 auto %?10?%;box-sizing:border-box;padding-left:%?16?%;color:#ccc}.item-box[data-v-26c3aaea]{width:100%;height:%?100?%;margin:%?20?% 0 0;display:flex;box-sizing:border-box;padding:0 %?20?%}.item-box .item-icon[data-v-26c3aaea]{width:%?100?%;height:100%}.item-box .item-icon uni-image[data-v-26c3aaea]{width:100%;height:100%}.item-box .item-content[data-v-26c3aaea]{flex:1;display:flex;flex-direction:column;justify-content:space-around;box-sizing:border-box;padding:0 %?10?%}.item-box .item-content .item-source[data-v-26c3aaea]{font-size:18px;color:#000;font-weight:600}.item-box .item-content .item-time[data-v-26c3aaea]{font-size:14px;color:#999}.item-box .item-money[data-v-26c3aaea]{width:%?200?%;line-height:%?100?%;text-align:right;font-size:16px;font-weight:600;word-spacing:.02em}.zongshouyi[data-v-26c3aaea]{height:%?444?%;width:%?684?%;margin:0 auto;margin-top:%?0?%;border:%?1?% solid #ccc;border-radius:%?30?%;background-color:#e5f7f1}.zongshouyi .one[data-v-26c3aaea]{width:100%;height:40%;background-image:url("+g+");background-repeat:no-repeat;background-size:100% auto;border-radius:0 0 26% 26%}.zongshouyi .two[data-v-26c3aaea]{background-image:url("+h+");background-repeat:no-repeat;background-size:100% 100%;border-radius:30% 30% 0 0 ;width:100%;height:60%}.zongshouyi .two .twoItem[data-v-26c3aaea]{width:50%;height:80%}.zongshouyi .two .last[data-v-26c3aaea]{width:80%;height:%?80?%;background-color:#07c07e;border-radius:%?30?%;color:#fff}.title[data-v-26c3aaea]{width:%?684?%;margin:0 auto;height:%?54?%;display:flex;align-items:center}.title .shu[data-v-26c3aaea]{background-color:#07c07e;width:%?12?%;height:90%;margin-right:%?20?%}.huodongBox[data-v-26c3aaea]{margin:%?30?% auto;width:%?684?%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.huodongBox .huodongItem[data-v-26c3aaea]{height:%?180?%;width:%?161?%;margin-left:%?5?%;margin-top:%?10?%}.huodongBox .huodongItem .yuan[data-v-26c3aaea]{width:%?107?%;height:%?107?%;background-color:#fff;border-radius:50%;margin-bottom:%?10?%}.huodongBox .huodongItem .yuan uni-image[data-v-26c3aaea]{width:%?67?%;height:%?67?%}.jintie[data-v-26c3aaea]{width:%?686?%;height:%?160?%;background-image:url("+f+");background-size:100% 100%;background-repeat:no-repeat;margin:0 auto;color:#fff}.jintie uni-view[data-v-26c3aaea]{margin-left:%?30?%}",""]),t.exports=a},e9d7:function(t,a,e){"use strict";var i=e("4ff6"),o=e.n(i);o.a},ee69:function(t,a,e){"use strict";e.r(a);var i=e("a461"),o=e("4b78");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("e9d7");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"26c3aaea",null,!1,i["a"],s);a["default"]=c.exports},f1b2:function(t,a,e){"use strict";var i=e("a380"),o=e.n(i);o.a}}]);