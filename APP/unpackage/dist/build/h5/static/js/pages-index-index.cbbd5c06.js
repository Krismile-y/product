(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1051:function(t,i,e){"use strict";e.r(i);var n=e("9d36"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"22cf":function(t,i,e){"use strict";var n=e("92fc"),a=e.n(n);a.a},"23bb":function(t,i,e){t.exports=e.p+"static/img/shouyi.eafc5ea7.png"},"2a68":function(t,i,e){t.exports=e.p+"static/img/xinshou.3689e09a.png"},"2d63":function(t,i,e){t.exports=e.p+"static/img/ocean.a15f93db.jpg"},"3bd2":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-72a92411], uni-scroll-view[data-v-72a92411], uni-swiper-item[data-v-72a92411]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-72a92411]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-72a92411]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-72a92411]{margin-left:5px;align-items:center}.u-notice__swiper[data-v-72a92411]{height:16px;display:flex;flex-direction:row;align-items:center;flex:1}.u-notice__swiper__item[data-v-72a92411]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.u-notice__swiper__item__text[data-v-72a92411]{font-size:14px;color:#f9ae3d}',""]),t.exports=i},"3cd2":function(t,i,e){t.exports=e.p+"static/img/xiazia.304aef82.png"},"3fdf":function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac1f"),e("00b4");var a=n(e("ef1d")),o={mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],watch:{text:{immediate:!0,handler:function(t,i){uni.$u.test.array(t)||uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle:function(){var t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},vertical:function(){return"horizontal"!=this.mode}},data:function(){return{index:0}},methods:{noticeChange:function(t){this.index=t.detail.current},clickHandler:function(){this.$emit("click",this.index)},close:function(){this.$emit("close")}}};i.default=o},4047:function(t,i,e){"use strict";var n=e("cdc7"),a=e.n(n);a.a},4245:function(t,i,e){"use strict";e.r(i);var n=e("7e8e"),a=e("78c8");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("d8cd");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"72a92411",null,!1,n["a"],void 0);i["default"]=r.exports},"5b46":function(t,i,e){"use strict";e.r(i);var n=e("6778"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},6642:function(t,i){t.exports="data:image/png;base64,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"},6778:function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("c7eb")),o=n(e("1da1"));e("ac1f"),e("00b4"),e("14d9"),e("fb6a");var s=n(e("7f96")),r={name:"u-row-notice",mixins:[uni.$u.mpMixin,uni.$u.mixin,s.default],data:function(){return{animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}},watch:{text:{immediate:!0,handler:function(t,i){this.vue(),uni.$u.test.string(t)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize:function(){this.vue()},speed:function(){this.vue()}},computed:{textStyle:function(){var t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},animationStyle:function(){var t={};return t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t},innerText:function(){for(var t=[],i=this.text.split(""),e=0;e<i.length;e+=20)t.push(i.slice(e,e+20).join(""));return t}},mounted:function(){this.init()},methods:{init:function(){this.vue(),uni.$u.test.string(this.text)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},vue:function(){var t=this;return(0,o.default)((0,a.default)().mark((function i(){var e;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return 0,e=0,i.next=3,uni.$u.sleep();case 3:return i.next=5,t.$uGetRect(".u-notice__content__text");case 5:return e=i.sent.width,i.next=8,t.$uGetRect(".u-notice__content");case 8:i.sent.width,t.animationDuration="".concat(e/uni.$u.getPx(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){t.animationPlayState="running"}),10);case 12:case"end":return i.stop()}}),i)})))()},nvue:function(){return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},loopAnimation:function(t,i){},getNvueRect:function(t){},clickHandler:function(t){this.$emit("click")},close:function(){this.$emit("close")}}};i.default=r},"6bf1":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uNoticeBar:e("b814").default,bottom:e("8c53").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"tops disc",staticStyle:{"background-color":"#54d27e",height:"400upx"}},[n("v-uni-view",{staticStyle:{"padding-top":"106upx",color:"#ffffff","letter-spacing":"8upx","font-size":"46upx","font-weight":"600"}},[t._v("绿色中国")]),n("v-uni-view",{staticClass:"disc",staticStyle:{width:"100%",height:"100%"}},[n("v-uni-swiper",{staticStyle:{width:"82%",height:"240upx",position:"absolute",top:"200upx",margin:"0 auto"},attrs:{autoplay:!0,interval:3e3,duration:1e3}},t._l(t.banner,(function(t,i){return n("v-uni-swiper-item",{staticStyle:{width:"100%",height:"200upx"}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"20upx"},attrs:{src:t.img,mode:""}})],1)})),1)],1)],1),n("v-uni-view",{staticClass:"eight",staticStyle:{"margin-top":"100upx"}},[n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("dbd5")}}),n("v-uni-view",{staticClass:"title"},[t._v("平台攻略")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("aeee")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHome("sign")}}}),n("v-uni-view",{staticClass:"title"},[t._v("签到")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("6642")}}),n("v-uni-view",{staticClass:"title"},[t._v("官方消息")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("8a88")}}),n("v-uni-view",{staticClass:"title"},[t._v("分享赚钱")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("c2e8")}}),n("v-uni-view",{staticClass:"title"},[t._v("我的团队")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("23bb")}}),n("v-uni-view",{staticClass:"title"},[t._v("我的收益")])],1),n("v-uni-view",{staticClass:"item disc"},[n("v-uni-image",{attrs:{src:e("3cd2")}}),n("v-uni-view",{staticClass:"title"},[t._v("APP下载")])],1),n("v-uni-view",{staticClass:"item disc",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("http://gw.tzhreefvg.top/#/")}}},[n("v-uni-image",{attrs:{src:e("98e0")}}),n("v-uni-view",{staticClass:"title"},[t._v("进入官网")])],1)],1),n("v-uni-view",[n("u-notice-bar",{attrs:{text:t.text1,bgColor:"#54d27e",color:"#fff"}})],1),n("v-uni-view",{staticClass:"news dis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xinshou.apply(void 0,arguments)}}},[t._v("新手体验")]),n("v-uni-view",{staticClass:"kuaijie"},[n("v-uni-view",{staticClass:"shu"}),t._v("快捷选择专区")],1),n("v-uni-view",{staticClass:"zhuanqu disc",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.huanbao()}}},[n("v-uni-view",{staticStyle:{width:"100%",margin:"0 auto",display:"flex","justify-content":"space-between"}},[n("v-uni-image",{attrs:{src:"https://p7.itc.cn/q_70/images01/20210705/0d6cce1353d7486591420067518b1a36.jpeg",mode:""}}),n("v-uni-image",{staticStyle:{"margin-left":"0upx"},attrs:{src:"https://img2.baidu.com/it/u=1308583920,2982159146&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=667",mode:""}})],1)],1),n("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0,interval:3e3,duration:1e3,circular:!0}},[n("v-uni-swiper-item",{staticClass:"swiperItem"},[n("v-uni-view",{staticClass:"item dis"},[n("v-uni-image",{attrs:{src:"https://img2.baidu.com/it/u=2468362699,2612376962&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",mode:""}})],1),n("v-uni-view",{staticClass:"item disc",staticStyle:{width:"40%"}},[n("v-uni-view",{staticClass:"tit"},[t._v("Overlay 遮罩层")]),n("v-uni-view",{staticClass:"de"},[t._v("创建一个遮罩层，用于强调特定的页面元素，")])],1),n("v-uni-view",{staticClass:"item dis",staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"btn dis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.business.apply(void 0,arguments)}}},[t._v("查看详情")])],1)],1)],1),n("v-uni-view",{staticClass:"kuaijie"},[n("v-uni-view",{staticClass:"shu"}),t._v("热门新闻")],1),t._l(t.article,(function(i,e){return n("v-uni-view",{key:e,staticClass:"xinwen",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xinwen(e)}}},[n("v-uni-view",{staticClass:"left",domProps:{innerHTML:t._s(i.content)}}),n("v-uni-view",{staticClass:"right dis"},[n("v-uni-image",{attrs:{src:""==i.thumb_url?"../../static/my/jilu.png":i.thumb_url,mode:""}})],1)],1)})),n("v-uni-view",{staticClass:"kuaijie"},[n("v-uni-view",{staticClass:"shu"}),t._v("相关内容")],1),n("v-uni-view",{staticClass:"zhengce",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.newsList.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:e("2d63")}}),n("v-uni-view",{staticClass:"zhengce-txt"},[t._v("政策解读")])],1),t._l(t.posterList,(function(i,a,o){return n("v-uni-view",{directives:[{name:"show",rawName:"v-show"}],staticClass:" dis",class:{poster:t.posterList.one.length!=t.nowNum}},[n("v-uni-view",{staticClass:"box disc"},t._l(i,(function(i,a){return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==t.nowNum,expression:"index==nowNum?true:false"}],staticClass:"disc",staticStyle:{width:"100%",height:"100%"}},[n("v-uni-image",{staticStyle:{width:"100%",height:"700upx","border-radius":"20upx"},attrs:{src:i.src,mode:""}}),n("v-uni-image",{staticStyle:{width:"60upx",height:"60upx","margin-top":"30upx"},attrs:{src:e("f338"),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}})],1)})),1)],1)})),n("bottom",{attrs:{num:t.obj}})],2)},o=[]},"78c8":function(t,i,e){"use strict";e.r(i);var n=e("3fdf"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"7e8e":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uIcon:e("4961").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-notice",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler.apply(void 0,arguments)}}},[t._t("icon",[t.icon?e("v-uni-view",{staticClass:"u-notice__left-icon"},[e("u-icon",{attrs:{name:t.icon,color:t.color,size:"19"}})],1):t._e()]),e("v-uni-swiper",{staticClass:"u-notice__swiper",attrs:{"disable-touch":t.disableTouch,vertical:!t.step,circular:!0,interval:t.duration,autoplay:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.noticeChange.apply(void 0,arguments)}}},t._l(t.text,(function(i,n){return e("v-uni-swiper-item",{key:n,staticClass:"u-notice__swiper__item"},[e("v-uni-text",{staticClass:"u-notice__swiper__item__text u-line-1",style:[t.textStyle]},[t._v(t._s(i))])],1)})),1),["link","closable"].includes(t.mode)?e("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===t.mode?e("u-icon",{attrs:{name:"arrow-right",size:17,color:t.color}}):t._e(),"closable"===t.mode?e("u-icon",{attrs:{name:"close",size:16,color:t.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}}):t._e()],1):t._e()],2)},o=[]},"7f96":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={props:{text:{type:String,default:uni.$u.props.rowNotice.text},icon:{type:String,default:uni.$u.props.rowNotice.icon},mode:{type:String,default:uni.$u.props.rowNotice.mode},color:{type:String,default:uni.$u.props.rowNotice.color},bgColor:{type:String,default:uni.$u.props.rowNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.rowNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.rowNotice.speed}}};i.default=n},8074:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uColumnNotice:e("4245").default,uRowNotice:e("a8b1").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.show?e("v-uni-view",{staticClass:"u-notice-bar",style:[{backgroundColor:t.bgColor},t.$u.addStyle(t.customStyle)]},["column"===t.direction||"row"===t.direction&&t.step?[e("u-column-notice",{attrs:{color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,step:t.step,icon:t.icon,"disable-touch":t.disableTouch,fontSize:t.fontSize,duration:t.duration},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}})]:[e("u-row-notice",{attrs:{color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,fontSize:t.fontSize,speed:t.speed,url:t.url,linkType:t.linkType,icon:t.icon},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}})]],2):t._e()},o=[]},8568:function(t,i,e){"use strict";e.r(i);var n=e("6bf1"),a=e("1051");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("98b7");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0760744d",null,!1,n["a"],void 0);i["default"]=r.exports},"8a88":function(t,i,e){t.exports=e.p+"static/img/fenxiang.e8e94413.png"},"8e06":function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("d0f8")),o={name:"u-notice-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{show:!0}},methods:{click:function(t){this.$emit("click",t),this.url&&this.linkType&&this.openPage()},close:function(){this.show=!1,this.$emit("close")}}};i.default=o},"8f07":function(t,i,e){var n=e("e272");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("39b7e2d8",n,!0,{sourceMap:!1,shadowMode:!1})},"92fc":function(t,i,e){var n=e("d3a3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5bae7966",n,!0,{sourceMap:!1,shadowMode:!1})},"98b7":function(t,i,e){"use strict";var n=e("8f07"),a=e.n(n);a.a},"98e0":function(t,i,e){t.exports=e.p+"static/img/guanwang.d80d24d2.png"},"9d36":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("99af");var n={data:function(){return{out:0,obj:{type:"index",index:0},banner:[],article:[],text1:"",nowNum:0,posterShow:!0,posterList:{one:[{src:"https://img0.baidu.com/it/u=2616180438,3555003891&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"},{src:"https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"},{src:"https://img1.baidu.com/it/u=1821594903,3982007259&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=471"}]}}},onShow:function(){this.out=0,uni.setStorageSync("name","index"),"index"==uni.getStorageSync("name")&&(this.$store.state.one=!1,this.$store.state.two=!0,this.$store.state.three=!0,this.$store.state.four=!0)},onBackPress:function(t){if(0==this.out?(this.out++,uni.showToast({duration:1e3,title:"再按一次退出程序",icon:"none"})):this.out>=1&&("android"===plus.os.name.toLowerCase()&&plus.runtime.quit(),uni.removeStorageSync("token")),"backbutton"===t.from)return this.overlayShow=!0,!0},onLoad:function(){var t=this;this.$fn.request("banner","GET",{type:"1"}).then((function(i){var e=i.data.data;e.forEach((function(i,e){var n=i.img.split("\\"),a=n.join("//");t.banner.push({img:a})}))})),this.$fn.request("article","GET",{}).then((function(i){t.article=i.data.data}));this.$fn.request("notice","GET",{type:"1"}).then((function(i){var e=i.data.data,n=0;setInterval((function(){n<e.length?(t.text1=e[n].content,n++):n=0}),3e3)}))},methods:{xinshou:function(){uni.navigateTo({url:"/pages/invest/invest?id=1"})},goHome:function(t){uni.navigateTo({url:"/pages/".concat(t,"/").concat(t)})},go:function(t){window.location=t},huanbao:function(){uni.navigateTo({url:"/pages/environmental/environmental"})},xinwen:function(t){uni.navigateTo({url:"/pages/news/news?id=".concat(t)})},newsList:function(){uni.navigateTo({url:"/pages/newsList/newsList"})},business:function(){uni.navigateTo({url:"/pages/business/business"})},close:function(){this.nowNum++,this.nowNum>=this.posterList.one.length-1&&(this.posterShow=!1)}}};i.default=n},a470:function(t,i,e){var n=e("3bd2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("b027f8fc",n,!0,{sourceMap:!1,shadowMode:!1})},a8b1:function(t,i,e){"use strict";e.r(i);var n=e("ac97"),a=e("5b46");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("22cf");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"dfa4dfd6",null,!1,n["a"],void 0);i["default"]=r.exports},ac97:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uIcon:e("4961").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-notice",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler.apply(void 0,arguments)}}},[t._t("icon",[t.icon?e("v-uni-view",{staticClass:"u-notice__left-icon"},[e("u-icon",{attrs:{name:t.icon,color:t.color,size:"19"}})],1):t._e()]),e("v-uni-view",{ref:"u-notice__content",staticClass:"u-notice__content"},[e("v-uni-view",{ref:"u-notice__content__text",staticClass:"u-notice__content__text",style:[t.animationStyle]},t._l(t.innerText,(function(i,n){return e("v-uni-text",{key:n,style:[t.textStyle]},[t._v(t._s(i))])})),1)],1),["link","closable"].includes(t.mode)?e("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===t.mode?e("u-icon",{attrs:{name:"arrow-right",size:17,color:t.color}}):t._e(),"closable"===t.mode?e("u-icon",{attrs:{name:"close",size:16,color:t.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}}):t._e()],1):t._e()],2)},o=[]},ad8e:function(t,i,e){"use strict";e.r(i);var n=e("8e06"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},aeee:function(t,i,e){t.exports=e.p+"static/img/qiandao.a57e9b91.png"},b232:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-49d060ea], uni-scroll-view[data-v-49d060ea], uni-swiper-item[data-v-49d060ea]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice-bar[data-v-49d060ea]{overflow:hidden;padding:9px 12px;flex:1}',""]),t.exports=i},b814:function(t,i,e){"use strict";e.r(i);var n=e("8074"),a=e("ad8e");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("4047");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"49d060ea",null,!1,n["a"],void 0);i["default"]=r.exports},c2e8:function(t,i,e){t.exports=e.p+"static/img/wode.c6c952e9.png"},cdc7:function(t,i,e){var n=e("b232");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7553485e",n,!0,{sourceMap:!1,shadowMode:!1})},d0f8:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={props:{text:{type:[Array,String],default:uni.$u.props.noticeBar.text},direction:{type:String,default:uni.$u.props.noticeBar.direction},step:{type:Boolean,default:uni.$u.props.noticeBar.step},icon:{type:String,default:uni.$u.props.noticeBar.icon},mode:{type:String,default:uni.$u.props.noticeBar.mode},color:{type:String,default:uni.$u.props.noticeBar.color},bgColor:{type:String,default:uni.$u.props.noticeBar.bgColor},speed:{type:[String,Number],default:uni.$u.props.noticeBar.speed},fontSize:{type:[String,Number],default:uni.$u.props.noticeBar.fontSize},duration:{type:[String,Number],default:uni.$u.props.noticeBar.duration},disableTouch:{type:Boolean,default:uni.$u.props.noticeBar.disableTouch},url:{type:String,default:uni.$u.props.noticeBar.url},linkType:{type:String,default:uni.$u.props.noticeBar.linkType}}};i.default=n},d3a3:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-dfa4dfd6], uni-scroll-view[data-v-dfa4dfd6], uni-swiper-item[data-v-dfa4dfd6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-dfa4dfd6]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-dfa4dfd6]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-dfa4dfd6]{margin-left:5px;align-items:center}.u-notice__content[data-v-dfa4dfd6]{text-align:right;flex:1;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden}.u-notice__content__text[data-v-dfa4dfd6]{font-size:14px;color:#f9ae3d;padding-left:100%;word-break:keep-all;white-space:nowrap;-webkit-animation:u-loop-animation-data-v-dfa4dfd6 10s linear infinite both;animation:u-loop-animation-data-v-dfa4dfd6 10s linear infinite both;display:flex;flex-direction:row}@-webkit-keyframes u-loop-animation-data-v-dfa4dfd6{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-dfa4dfd6{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=i},d8cd:function(t,i,e){"use strict";var n=e("a470"),a=e.n(n);a.a},dbd5:function(t,i,e){t.exports=e.p+"static/img/pingtai.c79dfa14.png"},e272:function(t,i,e){var n=e("24fb"),a=e("1de5"),o=e("2a68");i=n(!1);var s=a(o);i.push([t.i,".eight[data-v-0760744d]{width:92%;display:flex;flex-wrap:wrap;margin:0 auto}.eight .item[data-v-0760744d]{width:25%;height:%?160?%}.eight .item uni-image[data-v-0760744d]{width:%?70?%;height:%?70?%}.eight .item .title[data-v-0760744d]{margin-top:%?10?%;font-size:%?28?%}.kuaijie[data-v-0760744d]{width:100%;margin-top:%?20?%;display:flex;height:%?60?%;align-items:center;font-weight:600;font-size:%?36?%}.kuaijie .shu[data-v-0760744d]{width:%?8?%;height:80%;background-color:red;margin-left:%?30?%;margin-right:%?20?%;font-size:%?30?%}.zhuanqu[data-v-0760744d]{width:82%;margin:0 auto;margin-top:%?10?%;display:flex;align-items:center;justify-content:space-between}.zhuanqu uni-image[data-v-0760744d]{width:47.8%;height:%?280?%;border-radius:%?30?%}.xinwen[data-v-0760744d]{width:100%;height:%?200?%;display:flex}.xinwen .left[data-v-0760744d]{width:70%;max-width:70%;height:100%;padding-left:%?20?%;text-indent:%?40?%;font-size:%?28?%;letter-spacing:0;line-height:%?48?%;overflow-y:hidden;text-overflow:ellipsis;white-space:normal;word-break:break-all;word-wrap:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4\n  /*规定最多显示两行*/}.xinwen .right[data-v-0760744d]{width:30%;height:100%}.xinwen .right uni-image[data-v-0760744d]{width:%?160?%;height:%?140?%}.zhengce[data-v-0760744d]{width:98%;margin:0 auto;height:%?200?%;position:relative}.zhengce uni-image[data-v-0760744d]{width:100%;height:100%;border-radius:%?20?%;position:absolute;top:0;left:0;z-index:0}.zhengce .zhengce-txt[data-v-0760744d]{width:100%;height:100%;position:absolute;left:0;height:0%;z-index:0;text-align:center;line-height:%?200?%;font-size:44px;color:#fff;letter-spacing:25px;text-indent:25px;font-weight:700}.swiper[data-v-0760744d]{margin-top:%?30?%;width:100%;height:%?200?%}.swiper .swiperItem[data-v-0760744d]{width:100%;height:100%;display:flex}.swiper .swiperItem .item[data-v-0760744d]{width:30%;height:100%}.swiper .swiperItem .item uni-image[data-v-0760744d]{width:90%;height:70%;border-radius:%?15?%}.swiper .swiperItem .item .tit[data-v-0760744d]{width:100%}.swiper .swiperItem .item .de[data-v-0760744d]{color:#afafaf;width:100%}.swiper .swiperItem .item .btn[data-v-0760744d]{border-radius:%?30?%;width:%?160?%;height:%?60?%;background-color:#ffaa7f;color:#fff;font-size:%?28?%}.poster[data-v-0760744d]{z-index:0;background-color:rgba(0,0,0,.3);width:100%;height:100vh;position:fixed;top:0;right:0}.poster .box[data-v-0760744d]{width:%?600?%;height:%?800?%}.news[data-v-0760744d]{width:82%;margin:%?30?% auto;height:%?200?%;background-image:url("+s+");background-size:100% 100%;background-repeat:no-repeat;font-size:%?56?%;font-weight:600;border-radius:%?20?%;color:#fff}.news uni-image[data-v-0760744d]{width:100%;height:100%}",""]),t.exports=i},ef1d:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={props:{text:{type:[Array],default:uni.$u.props.columnNotice.text},icon:{type:String,default:uni.$u.props.columnNotice.icon},mode:{type:String,default:uni.$u.props.columnNotice.mode},color:{type:String,default:uni.$u.props.columnNotice.color},bgColor:{type:String,default:uni.$u.props.columnNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.columnNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.columnNotice.speed},step:{type:Boolean,default:uni.$u.props.columnNotice.step},duration:{type:[String,Number],default:uni.$u.props.columnNotice.duration},disableTouch:{type:Boolean,default:uni.$u.props.columnNotice.disableTouch}}};i.default=n},f338:function(t,i,e){t.exports=e.p+"static/img/close.3a9c7c4b.png"}}]);