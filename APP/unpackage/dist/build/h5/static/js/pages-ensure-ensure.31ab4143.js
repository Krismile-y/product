(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ensure-ensure"],{"042e":function(t,e,i){"use strict";i.r(e);var n=i("905b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0d44":function(t,e,i){t.exports=i.p+"static/img/shanlin.9d6f07ec.jpg"},"0e26":function(t,e,i){t.exports=i.p+"static/img/shisiwu.787884ff.jpg"},"0e9d":function(t,e,i){"use strict";var n=i("f55b"),a=i.n(n);a.a},"10f1":function(t,e,i){"use strict";i.r(e);var n=i("5a73"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2bc4":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"160upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},"35aa":function(t,e,i){"use strict";var n=i("89cb"),a=i.n(n);a.a},"43ea":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-image[data-v-c32033b6]{width:100%}.zhengwen[data-v-c32033b6]{box-sizing:border-box;padding:0 %?12?%;text-indent:2em;text-align:justify}.top-pictrue[data-v-c32033b6]{width:100%;margin-bottom:%?20?%}.remarks[data-v-c32033b6]{color:#7f7f7f;font-size:%?14?%;margin-bottom:%?20?%}",""]),t.exports=e},5664:function(t,e,i){"use strict";i.r(e);var n=i("2bc4"),a=i("10f1");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0e9d");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30882704",null,!1,n["a"],s);e["default"]=u.exports},"59cf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-30882704]{width:100%;height:100%}uni-image[data-v-30882704]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-30882704]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-30882704]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=e},"5a73":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/setting/wodekefu.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,e=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return e}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var e=t.touches[0],i=t.currentTarget;this.start.x=e.clientX-i.offsetLeft,this.start.y=e.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var e=t.touches[0],i=e.clientX-this.start.x,n=e.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height,r=40;this.left=i<0?0:i>a-r?a-r:i,this.top=n<o?o:n>s?s:n}},touchend:function(t){var e=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){e.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};e.default=n},"6b15":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={airelFloatball:i("5664").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("airel-floatball"),n("v-uni-image",{staticClass:"top-pictrue",attrs:{src:i("0e26"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"zhengwen"},[t._v("绿色中国北京3月16日电（融媒体记者耿国彪）3月15日，记者从国家林草局获悉，《“十四五”国家储备林建设实施方案》近日印发。方案明确提出，“十四五”期间，我国将科学布局和实施国家储备林建设，建设国家储备林3600万亩以上，增加蓄积7000万立方米以上，缓解木材供需矛盾，保障我国木材安全，推动国家储备林建设高质量发展。")]),n("v-uni-image",{attrs:{src:i("0d44"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"remarks"},[t._v("↑江西省永丰县官山林场大山分场楠木纯林")]),n("v-uni-view",{staticClass:"zhengwen"},[t._v("“十四五”期间，国家储备林建设将以保障国家木材安全和满足人民美好生活对优质生态产品的需求为目标，以培育中短周期工业原料林、长周期大径级用材林为方向，以创新投融资机制为主要途径，在水光热条件较好的重点区域，布局实施重点工程，不断提升森林质量，优化森林结构，增加森林蓄积，增强国内木材供给能力。")]),n("v-uni-view",{staticClass:"zhengwen"},[t._v("《方案》提出，“十四五”期间国家储备林建设范围包括26个省(自治区、直辖市)、新疆生产建设兵团及内蒙古、吉林、长白山、龙江、伊春、大兴安岭6个森工(林业)集团的1849个建设单位。并根据自然条件等因素，将长江以南地区作为重点建设区域，长江以北地区作为适度建设区域。同时，按照建设目标任务，将大力实施集约人工林栽培、现有林改培、中幼林抚育，培育中短周期工业原料林2284万亩以上，长周期大径级用材林1406万亩以上。")]),n("v-uni-view",{staticClass:"zhengwen"},[t._v("《方案》强调，“十四五”国家储备林建设要加强组织领导，建立联合工作机制，采取有力有效措施推动国家储备林建设健康发展。要严格实施管理，编制建设方案，加强项目日常监管，集约人工林栽培和现有林改培地块全部落地上图，不得在国家级公益林范围内开展国家储备林建设。要拓宽融资渠道，采取以奖代补、贷款贴息等方式，统筹使用各类补助资金，加大国家储备林建设投入力度。要完善制度标准，推广良种壮苗，加强乡土树种选育、扩繁和推广应用，优先选择良种壮苗造林。要加强科技支撑，强化示范引领，推进国家储备林示范项目建设。")]),n("v-uni-view",{staticClass:"zhengwen"},[t._v("据介绍，为构建国家木材安全保障体系，2012年我国启动了国家储备林建设工程。工程启动以来，累计落实资金1400多亿元，建设国家储备林9200多万亩，国家开发银行、中国农业发展银行等金融机构为国家储备林建设项目授信3200多亿元，累计发放金融贷款1100多亿元。十年来，国家储备林建设为社会提供就业岗位总数超过360万个，木材产出收入超过1500亿元，依托国家储备林开展的绿色产业实现经济收入近100亿元，围绕国家储备林建设形成的加工企业达2700多家。")]),n("v-uni-view",{staticClass:"zhengwen"},[t._v("为确保国家储备林建设规范运作和持续健康发展，国家林草局还同步出台了《国家储备林建设管理办法(试行)》。")])],1)},o=[]},7717:function(t,e,i){"use strict";i.r(e);var n=i("6b15"),a=i("042e");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("35aa");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"c32033b6",null,!1,n["a"],s);e["default"]=u.exports},"89cb":function(t,e,i){var n=i("43ea");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("01907e69",n,!0,{sourceMap:!1,shadowMode:!1})},"905b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}}};e.default=n},f55b:function(t,e,i){var n=i("59cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3ffa4ba2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);