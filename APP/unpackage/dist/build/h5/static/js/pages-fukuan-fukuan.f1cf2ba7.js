(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fukuan-fukuan"],{"0fbc":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApRJREFUWEfNVz1sUlEU/s5reY8EwutiaGgcIFIIQiSBoOlkXDs5qbs6O+nm4FYnV3923Zy6GieC8EgwrQ0UA0MDsboUUpL3Xum75rzwSMUqFNNe73rPz3fO+c495xJmPNvb20HLstYdx7lFRNcAxIgoxOpCiD6AlhDis6IoHzRN20yn04ezmKZpQsVi8Yqqqk8A3AMQmCY/uh8AeGvb9sba2trXv+n8EUCz2dT6/f4zIcQjACobCQaD0HUdgUAAmqZhYWHBtX18fAzLsjAYDNDr9XB4OA7eJqIXoVDoaTwet04DciqAcrm8rCjKewA3WGlpaQmRSAR+v3+mBJimiW63i4ODA0++5DjO7UKh8G3SwG8ADMPIANgEcFlVVUSjUTfieQ5npN1uw7ZtVt8DsJ7P57dO2voFwCjyMjvndMdiMSwuLs7je6wzHA7RarW8suw5jlM4mYkxAK55r9f7yGln5/F4HERTOToTOCEEms2mB6Kk6/pNjxNjD9VqdUMI8ZjTnkwm/znySWSciXq97paDiJ7ncjnuLLgARq32hdmeSCTmrvm0dDAnGo0Gi9m2bV/lFnUBGIbxGsB9ZjvX/TwP82HUHW/y+fwD4hfONE1uj0AqlZq51eYFyS26s7PD6gO/379M1Wr1jhDiHRNvdXV1Xrtn0tvd3XUJSUR3qVKpvCSihysrKwiHw2cyNK/w/v4+Op0Oz5BXZBhGCcB1jp6zcBGHo+csAPjEAL4DuJTJZODz+S7CP46OjrC15T6IP5gDphBCy2azUBTlQgA4joNarcYcsOQDkF4C6SSU3obSHyLpT7H0YfRfjGMGIXUhYQDSVzIGIXUp9YaA1LXcAyH1Y+KBkPo1OzmTpX1OJxeD8/qe/wRbvOhie4XDtwAAAABJRU5ErkJggg=="},"10f1":function(t,a,i){"use strict";i.r(a);var n=i("5a73"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},"1ae0":function(t,a,i){"use strict";var n=i("f13a"),e=i.n(n);e.a},5664:function(t,a,i){"use strict";i.r(a);var n=i("cff7"),e=i("10f1");for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("f1b2");var s,u=i("f0c5"),f=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"d45bc18c",null,!1,n["a"],s);a["default"]=f.exports},5816:function(t,a,i){"use strict";i.r(a);var n=i("d347"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},"5a73":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,a=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return a}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var a=t.touches[0],i=t.currentTarget;this.start.x=a.clientX-i.offsetLeft,this.start.y=a.clientY-i.offsetTop},touchmove:function(t){if(this.moveable()){var a=t.touches[0],i=a.clientX-this.start.x,n=a.clientY-this.start.y,e=this.safeArea.width,o=this.safeArea.top,s=this.safeArea.height,u=40;this.left=i<0?0:i>e-u?e-u:i,this.top=n<o?o:n>s?s:n}},touchend:function(t){var a=this;if(this.sunction){var i=this.time;this.transition="left ".concat(i,"ms");var n=this.safeArea.width-20,e=t.changedTouches[0].clientX;e>.5*n?(this.isleft=!1,this.left=n-50):(this.isleft=!0,this.left=3),setTimeout((function(){a.transition=""}),i)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};a.default=n},"5b80":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var n={airelFloatball:i("5664").default},e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"fukuan"},[i("airel-floatball"),i("Tips",{ref:"success",attrs:{position:"center",backgroundColor:"#dbf1e1",color:"#07c07e",size:"30"}}),i("Tips",{ref:"error",attrs:{position:"center",backgroundColor:"red",color:"#fff",size:"30"}}),i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"head-money"},[t._v("￥"+t._s(t.dataObj.money))]),i("v-uni-view",{staticClass:"head-ps"},[t._v("待支付金额")])],1),i("v-uni-view",{staticClass:"fangshi"},[i("v-uni-view",{staticClass:"fangshi-title"},[t._v("支付方式")]),t._l(t.payList,(function(a,n){return i("v-uni-view",{key:n,staticClass:"yu_e",staticStyle:{"border-bottom":"1rpx solid #E5E5E5"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payCheck(n)}}},[i("v-uni-image",{staticClass:"zhifuImg",attrs:{src:t.icons[n],mode:""}}),i("v-uni-view",{staticClass:"zhifuName"},[t._v(t._s(a))]),i("v-uni-view",{staticClass:"littleImg"},[i("v-uni-image",{attrs:{src:t.checkedNum==n?t.checkedImg:t.defaultImg,mode:""}})],1)],1)}))],2),i("v-uni-view",{staticClass:"bottom-fixd"},[i("v-uni-view",{staticClass:"bot-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pay.apply(void 0,arguments)}}},[t._v(t._s(t.font))])],1)],1)},o=[]},"7c88":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".fukuan[data-v-77a43576]{width:100%}.fukuan .header[data-v-77a43576]{width:100%}.fukuan .header .head-money[data-v-77a43576]{width:100%;margin-top:%?160?%;text-align:center;font-size:%?64?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:600;color:#272727;line-height:%?90?%}.fukuan .header .head-ps[data-v-77a43576]{width:100%;text-align:center;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#505050;line-height:%?40?%}.fukuan .fangshi[data-v-77a43576]{width:%?702?%;margin:%?112?% auto;background:#fff;border-radius:%?16?%;box-sizing:border-box;padding:%?24?% %?32?%}.fukuan .fangshi .fangshi-title[data-v-77a43576]{font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:550;color:#272727}.fukuan .fangshi .weixin[data-v-77a43576],\n.fukuan .fangshi .yu_e[data-v-77a43576]{width:100%;height:%?112?%;box-sizing:border-box;display:flex;align-items:center}.fukuan .fangshi .weixin .zhifuImg[data-v-77a43576],\n.fukuan .fangshi .yu_e .zhifuImg[data-v-77a43576]{width:%?36?%;height:%?36?%;margin-right:%?18?%}.fukuan .fangshi .weixin .zhifuName[data-v-77a43576],\n.fukuan .fangshi .yu_e .zhifuName[data-v-77a43576]{flex:1;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#272727}.fukuan .fangshi .weixin .littleImg[data-v-77a43576],\n.fukuan .fangshi .yu_e .littleImg[data-v-77a43576]{width:%?32?%;height:%?32?%}.fukuan .fangshi .weixin .littleImg uni-image[data-v-77a43576],\n.fukuan .fangshi .yu_e .littleImg uni-image[data-v-77a43576]{width:100%;height:100%}.fukuan .bottom-fixd[data-v-77a43576]{position:fixed;bottom:0;left:0;width:100%;height:%?180?%;background:#fff}.fukuan .bottom-fixd .bot-btn[data-v-77a43576]{width:%?686?%;height:%?80?%;background:#f70 linear-gradient(90deg,#fe6700,#fe3e2e);border-radius:%?40?%;margin:%?16?% auto 0;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:550;color:#fff;line-height:%?80?%;text-align:center}",""]),t.exports=a},"7ff1":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=a},a25f:function(t,a,i){"use strict";i.r(a);var n=i("5b80"),e=i("5816");for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("1ae0");var s,u=i("f0c5"),f=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"77a43576",null,!1,n["a"],s);a["default"]=f.exports},a380:function(t,a,i){var n=i("7ff1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("74a34bff",n,!0,{sourceMap:!1,shadowMode:!1})},cff7:function(t,a,i){"use strict";var n;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"main"},[i("a",{attrs:{href:t.$store.state.kefu}},[i("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.blur.apply(void 0,arguments)},touchstart:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchstart.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchmove.apply(void 0,arguments)},touchend:function(a){arguments[0]=a=t.$handleEvent(a),t.touchend.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.show.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},d347:function(t,a,i){"use strict";var n=i("4ea4");i("07ac"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("0fbc")),o=n(i("e91d")),s={data:function(){return{icons:["../../static/common/weixin.png","../../static/common/zhifubao.png","../../static/common/card.png","../../static/common/yu_e.png"],dataStr:"",dataObj:{},defaultImg:e.default,checkedImg:o.default,checkedNum:-1,mid:"",payList:[],backpageId:"",font:"确认支付"}},onLoad:function(t){this.backpageId=this.$store.state.scrollIndex,this.dataStr=t.obj,console.log(this.dataStr),this.getPayList()},mounted:function(){this.dataObj=JSON.parse(this.dataStr),console.log(this.dataObj)},methods:{getPayList:function(){var t=this;this.$fn.request("pay/list","GET",{}).then((function(a){console.log(a,"支付列表"),1==a.data.code&&(t.payList=Object.values(a.data.data))}))},payCheck:function(t){this.checkedNum=t},pay:function(){var t=this;-1!=this.checkedNum?(this.font="支付中...",this.dataObj.pid=this.checkedNum,this.$fn.request("/pay/order","POST",this.dataObj).then((function(a){1==a.data.code?(t.$refs.success.showTips({msg:"购买成功",duration:2e3}),t.font="确认支付","xinshou"==t.backpageId?setTimeout((function(){uni.navigateTo({url:"/pages/xinshoutiyan/xinshoutiyan?"})}),3e3):setTimeout((function(){uni.navigateTo({url:"/pages/invest/invest?id=".concat(t.backpageId)})}),3e3)):(t.$refs.error.showTips({msg:a.data.msg,duration:2e3}),t.font="确认支付")}))):this.$refs.error.showTips({msg:"请选择支付方式",duration:2e3})}}};a.default=s},e91d:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9FJREFUWEfFV11MW2UYft5zaEv5ETBsssEY7kcDOnHjn8ACmjA3EpVMAUNConGYlBCq0e3GuGxXg8SsQwcb27Kwi0mwdZsJixc65waBcaMM5cIMUJcgcbg5Yik95ZzPnFNaaEvpR8H0XJ2L93ne53v/vvcj8H49pjiIukqB0UsMLJuAbSB6QoMzNsOAcQINK8RuQHb1orr9Xx5qCmnUY9ohiPojAN4CEBvS3m1gB/CFIkstqG6/txImuIDrTQbBIR4HYAag53TsbyYBsChG+RMc+My5HMfyAnpMKSTqrhCoMEzHPjAGNshkVxWq26f8+QIFXH1/F8msl4At6+Hcw8GA+0ykSrx+cmQpr68A7eT6ofV27iNClvKXRmJRwPUmAzmEm+sV9mDR09JhVMo8NeEVINjMLQAOr2fYV+BqVQ5a1M6CW4C71X5ZQ7WvVrekyNJzaotqAgSb+RyAd1fLskb788pByyFCjylOEPVqe/AOmVX7NQhReDP1RTRuL0HRTYsHb1dkKYVga64RQN2rZuUAJOii8cHOcjRkFGGDIQ4uRYbx2kdepAJWS4LVfBaEBg4+bhMdiXhvWzE+frYCyYZYzM5LOD3eh7axW/hzbmaRh6GTyNo8SEQF3OwhDIuezMCFPbV4Jn6jZvn15M9ovvsV7jv+CUAyxu6QYG3+C0Qb1ipAL4g4mvkKPtxZDpEE2OedMN+9gou/DwWnZuwBCTbzHADDclbbY5MxZp8OqS01OgG2wneQm+Se3n/MPkLV4AUMP54MhXUuK0AkguWFKjQ8XYyjo9/gxK/fBiUqSNoKa+Hb2BTtXg1GZ6awr/+Mb66Dy3AGpCBW1ONyfj0qU7K8sHMTAzD9ZAUD86E6kJKF7vx6xIju21o98b6+DkxL6jrA8akp8C/Crtw61G3JCUB/PnZby6nne3XT85pzvRDlPfnLt9vxQOJahDTMQhH6tqEa/vr0PBzL3I/NxgQfIaYfv0TnbwMoS96B3uIGGES38wn7Q+y91cYb9kVOtQ2DDaJEnRGf7noN9VvzQAtXhkN2oWaoC5dy6pCoN2pE0047Sn44hXscxeofVm0QhRrFtWm70bm7BjFR7jyrdeARJCnzqOjrQN/fExwJDzBZGMUcl9GexDQt5Oo4Xfo1DdvQMd4fjnMVs3AZqb8c13Fm/FO4UdroFXF1cgRv3LkYrnPf61hl4VlI8pLS8X1pIx65HMj+rhUPpdlwBfgtJCoN50p2KKMQk3Mz6J0aDct50JVMY4voUuo5T0TXco+IiD5MPCIi+jRbWl4Re5z61/j/9Dz/D6R9lsgbPsKgAAAAAElFTkSuQmCC"},f13a:function(t,a,i){var n=i("7c88");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("7614141f",n,!0,{sourceMap:!1,shadowMode:!1})},f1b2:function(t,a,i){"use strict";var n=i("a380"),e=i.n(n);e.a}}]);