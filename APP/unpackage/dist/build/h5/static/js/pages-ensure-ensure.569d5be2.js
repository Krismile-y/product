(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ensure-ensure"],{"0540":function(t,i,e){"use strict";var n=e("1ddc"),a=e.n(n);a.a},"1ddc":function(t,i,e){var n=e("28b9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("59e4bd16",n,!0,{sourceMap:!1,shadowMode:!1})},"1f0c":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},a=[]},2603:function(t,i,e){"use strict";var n=e("4bd0"),a=e.n(n);a.a},"28b9":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},"2d5f":function(t,i,e){t.exports=e.p+"static/img/shisiwu.787884ff.jpg"},3646:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-image[data-v-c32033b6]{width:100%}.zhengwen[data-v-c32033b6]{box-sizing:border-box;padding:0 %?12?%;text-indent:2em;text-align:justify}.top-pictrue[data-v-c32033b6]{width:100%;margin-bottom:%?20?%}.remarks[data-v-c32033b6]{color:#7f7f7f;font-size:%?14?%;margin-bottom:%?20?%}",""]),t.exports=i},3855:function(t,i,e){t.exports=e.p+"static/img/shanlin.9d6f07ec.jpg"},"38b6":function(t,i,e){"use strict";e.r(i);var n=e("e14b"),a=e("c078");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("2603");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"c32033b6",null,!1,n["a"],void 0);i["default"]=r.exports},"4bd0":function(t,i,e){var n=e("3646");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("54f8341c",n,!0,{sourceMap:!1,shadowMode:!1})},"8f5b":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={data:function(){return{}}}},"9d9a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,n=i.clientY-this.start.y,a=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height;this.left=e<0?0:e>a-40?a-40:e,this.top=n<o?o:n>s?s:n}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var n=this.safeArea.width-20,a=t.changedTouches[0].clientX;a>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=n},c078:function(t,i,e){"use strict";e.r(i);var n=e("8f5b"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},e14b:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={airelFloatball:e("e60e").default},a=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",[i("airel-floatball"),i("v-uni-image",{staticClass:"top-pictrue",attrs:{src:e("2d5f"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"zhengwen"},[this._v("绿色中国北京3月16日电（融媒体记者耿国彪）3月15日，记者从国家林草局获悉，《“十四五”国家储备林建设实施方案》近日印发。方案明确提出，“十四五”期间，我国将科学布局和实施国家储备林建设，建设国家储备林3600万亩以上，增加蓄积7000万立方米以上，缓解木材供需矛盾，保障我国木材安全，推动国家储备林建设高质量发展。")]),i("v-uni-image",{attrs:{src:e("3855"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"remarks"},[this._v("↑江西省永丰县官山林场大山分场楠木纯林")]),i("v-uni-view",{staticClass:"zhengwen"},[this._v("“十四五”期间，国家储备林建设将以保障国家木材安全和满足人民美好生活对优质生态产品的需求为目标，以培育中短周期工业原料林、长周期大径级用材林为方向，以创新投融资机制为主要途径，在水光热条件较好的重点区域，布局实施重点工程，不断提升森林质量，优化森林结构，增加森林蓄积，增强国内木材供给能力。")]),i("v-uni-view",{staticClass:"zhengwen"},[this._v("《方案》提出，“十四五”期间国家储备林建设范围包括26个省(自治区、直辖市)、新疆生产建设兵团及内蒙古、吉林、长白山、龙江、伊春、大兴安岭6个森工(林业)集团的1849个建设单位。并根据自然条件等因素，将长江以南地区作为重点建设区域，长江以北地区作为适度建设区域。同时，按照建设目标任务，将大力实施集约人工林栽培、现有林改培、中幼林抚育，培育中短周期工业原料林2284万亩以上，长周期大径级用材林1406万亩以上。")]),i("v-uni-view",{staticClass:"zhengwen"},[this._v("《方案》强调，“十四五”国家储备林建设要加强组织领导，建立联合工作机制，采取有力有效措施推动国家储备林建设健康发展。要严格实施管理，编制建设方案，加强项目日常监管，集约人工林栽培和现有林改培地块全部落地上图，不得在国家级公益林范围内开展国家储备林建设。要拓宽融资渠道，采取以奖代补、贷款贴息等方式，统筹使用各类补助资金，加大国家储备林建设投入力度。要完善制度标准，推广良种壮苗，加强乡土树种选育、扩繁和推广应用，优先选择良种壮苗造林。要加强科技支撑，强化示范引领，推进国家储备林示范项目建设。")]),i("v-uni-view",{staticClass:"zhengwen"},[this._v("据介绍，为构建国家木材安全保障体系，2012年我国启动了国家储备林建设工程。工程启动以来，累计落实资金1400多亿元，建设国家储备林9200多万亩，国家开发银行、中国农业发展银行等金融机构为国家储备林建设项目授信3200多亿元，累计发放金融贷款1100多亿元。十年来，国家储备林建设为社会提供就业岗位总数超过360万个，木材产出收入超过1500亿元，依托国家储备林开展的绿色产业实现经济收入近100亿元，围绕国家储备林建设形成的加工企业达2700多家。")]),i("v-uni-view",{staticClass:"zhengwen"},[this._v("为确保国家储备林建设规范运作和持续健康发展，国家林草局还同步出台了《国家储备林建设管理办法(试行)》。")])],1)},o=[]},e60e:function(t,i,e){"use strict";e.r(i);var n=e("1f0c"),a=e("fa47");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("0540");var s=e("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d45bc18c",null,!1,n["a"],void 0);i["default"]=r.exports},fa47:function(t,i,e){"use strict";e.r(i);var n=e("9d9a"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);