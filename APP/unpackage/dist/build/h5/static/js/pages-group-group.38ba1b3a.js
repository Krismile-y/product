(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-group-group"],{"10f1":function(t,i,e){"use strict";e.r(i);var a=e("5a73"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},1839:function(t,i,e){"use strict";e.r(i);var a=e("af95"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"19fb":function(t,i,e){t.exports=e.p+"static/img/tuoyuan1.1eadee5f.png"},"255e":function(t,i,e){"use strict";var a=e("a73f"),n=e.n(a);n.a},5664:function(t,i,e){"use strict";e.r(i);var a=e("cff7"),n=e("10f1");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("f1b2");var A,r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d45bc18c",null,!1,a["a"],A);i["default"]=s.exports},"5a73":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"airel-floatball",props:{mainImg:{type:String,default:"../../static/c/erji.png"},x:{type:Number,default:uni.getStorageSync("x")},y:{type:Number,default:uni.getStorageSync("y")},sunction:{type:Boolean,default:!0},time:{type:Number,default:300}},data:function(){return{top:void 0,left:void 0,start:{x:0,y:0},moveFlag:!0,safeArea:{},transition:"",isleft:!0}},computed:{styleBall:function(){this.x;var t=this.y,i=(this.left,this.top,{left:(void 0===this.left&this.x>0?this.x:this.left)+"px",top:(void 0===this.top&this.y>0?t:this.top)+"px",transition:this.transition});return i}},methods:{blur:function(){console.log("blur")},focus:function(){console.log("focus")},tap:function(){console.log("tap")},doNothing:function(){},touchstart:function(t){var i=t.touches[0],e=t.currentTarget;this.start.x=i.clientX-e.offsetLeft,this.start.y=i.clientY-e.offsetTop},touchmove:function(t){if(this.moveable()){var i=t.touches[0],e=i.clientX-this.start.x,a=i.clientY-this.start.y,n=this.safeArea.width,o=this.safeArea.top,A=this.safeArea.height,r=40;this.left=e<0?0:e>n-r?n-r:e,this.top=a<o?o:a>A?A:a}},touchend:function(t){var i=this;if(this.sunction){var e=this.time;this.transition="left ".concat(e,"ms");var a=this.safeArea.width-20,n=t.changedTouches[0].clientX;n>.5*a?(this.isleft=!1,this.left=a-50):(this.isleft=!0,this.left=3),setTimeout((function(){i.transition=""}),e)}},moveable:function(){return!0}},mounted:function(){var t=uni.getSystemInfoSync();this.safeArea={left:0,right:t.windowWidth-20,top:t.windowTop,bottom:t.windowBottom,height:t.windowHeight,width:t.windowWidth}}};i.default=a},6969:function(t,i,e){t.exports=e.p+"static/img/jintie.4566bfee.png"},"7ff1":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-d45bc18c]{width:100%;height:100%}uni-image[data-v-d45bc18c]{width:%?40?%;height:%?40?%;z-index:99;margin:%?20?%}.box[data-v-d45bc18c]{position:fixed;width:%?160?%;height:%?160?%;border-radius:50%;outline:none}.menu[data-v-d45bc18c]{color:#fff;position:fixed;width:%?80?%;height:%?80?%;border-radius:50%;background-color:rgba(0,0,0,.8)}',""]),t.exports=i},a380:function(t,i,e){var a=e("7ff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("74a34bff",a,!0,{sourceMap:!1,shadowMode:!1})},a73f:function(t,i,e){var a=e("e0c9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("e8981478",a,!0,{sourceMap:!1,shadowMode:!1})},aac5:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAB+CAYAAACQ5VJSAAAAAXNSR0IArs4c6QAACYxJREFUeF7t2ktvW3kZx/Hf8z++5OI69yZpUkRZIEQXSGg2s6tgx37mJSAEK14JqxkhXsLMnh2ou9mMkFgUEAuKSNwkzc1xHCe+nP+DjsWMZgNtMnl6Id9K0bFT+zk+nzz6KnFiu4NuV6adJNuR2U5235HyrmQ7TUs745P+7oMHDwbiHwIIIIDAVODFixdz9eXW9tDzQ8kfSmk7mT2U+8Nc3Xc9tM7lmb/Cq/r/E1XRTbZrbh2Td7KsY+adZKkz02h1Fs1OcUcAAQTed4Gu+9LVqL+VPW+521aSb7lsy823lH1bVUSlZUn2v671deL6elamgVwvXN4xWUfme660l9z3svJeSsVes3HvxYpZ7/UG8igEEEDg9gSO3dvD0fmDnMvNpLSZzTZNeVNumy7fMtmWTA/kmruNs95eXF/z1ZjpwqU9c9tz+Z5c+1bYvmcduPlBLv2gsPKgO7t88Nhs9JpjeRgCCNxBgWfujcXLk/XSi/VU2Lq5rVvSupe+IdOGyTbdfNOkTXfNv0miNx7Xa1xc9XZE9VbDgcsPTLYv00t3HSr7Yaqll17q0JNellf58DsLC10ze9VbHNc4PQ9FAIE3LeDu9q+zs8ViJq1Z1n0rtJYn+b6SrZlpTa77Lq+iuS6p+lh61Y/nb/oavjrfuxzXa5m4NDbZoar4mlfHI0lHMh3LdKSsYyU/slLHbo2jotc73tjYuLjWSXgwAghcS2B/f3++bLdXzEerXmhF2VaVtCLXqlwrklZl1W1bk2nN5Wsm1a91knf0wf83cb2Rr9mlXMfyfOKmU3OdyNKJPJ+apZOc86lMJ5Z0YqVOx2OdJjvvftH+4uxj+7i80Tl5EgLvmcBn/lnxYe/Dhez3Fut1LXmhJc9alms5pbTknpdlaUmel920bK4lWVqWVRH12ffscm/t5d7tuN6c0c10nrOfydQ1WfXnbF3P+cykrlefczuzpJ5n66Wk3tjL81Rab1JYrzZOvf17f+99YB+Mb/4SeCYCrxb40r+sb5x/vz2p53at9HYuvF234l7Oalvytme13XzBXIsuLVpKC5re9sXqmJItuOveu/qj96sF3t4jiOvbs3fJr0ypl+V9c+/LrC+p7/+57Z77kvWt+rznfjLrl7JBSnYhzwPlNJCXg2E5GTRq8xc+Ox5MdDJ4ZI+u3t5lceabCDz35zM1Lc/ZZX1uNLmYbxa1OVkxp5TnZGkuZ58v5HPZvSVLLa+O8pZZasmro7UkTW+7WSvJWq7clmyGMN7kK/Ltn0Ncv73huzihlKl6y+PKpwG3y+pY3TdLl1XUfXpbly5dSTY086Gyj8zS0OWj6kOWhjb9nA2zypGlNDSlsU8mk1ykcVIxdh9PrFaMfeyTVPNx4bVxlk/K4dUkN+pl3b3M3iwbs172Ly7yjM+Wk1Yu59UuXx4d5fbquBxqmCf6ro8k/6FU/VLSnz59qsMnh/6RPpre/+YvK6tfelTB+Fyf29rTNXvy5En1NbC/SNaQrKZ/WlPN1DuqF/dXV9OFekWtn4oruyxa8/NpdGlFsmExNivSaFwUzZlaktVKm9TzxOpWt5pPyrpZvZZV1lOZ61ar1Vy57jk3k4qGuzc9WUOemyZrVB/uualUHa0pedOkGXfNmmmmipx7npVpxqrb8tnqWN2Xq/rRuXgXF4nXdHMB4npzO56JAAII/FcB4spyIIAAAgECxDUAlZEIIIAAcWUHEEAAgQAB4hqAykgEEECAuLIDCCCAQIAAcQ1AZSQCCCBAXNkBBBBAIECAuAagMhIBBBAgruwAAgggECBAXANQGYkAAggQV3YAAQQQCBAgrgGojEQAAQSIKzuAAAIIBAgQ1wBURiKAAALElR1AAAEEAgSIawAqIxFAAAHiyg4ggAACAQLENQCVkQgggABxZQcQQACBAAHiGoDKSAQQQIC4sgMIIIBAgABxDUBlJAIIIEBc2QEEEEAgQIC4BqAyEgEEECCu7AACCCAQIEBcA1AZiQACCBBXdgABBBAIECCuAaiMRAABBIgrO4AAAggECBDXAFRGIoAAAsSVHUAAAQQCBIhrACojEUAAAeLKDiCAAAIBAsQ1AJWRCCCAAHFlBxBAAIEAAeIagMpIBBBAgLiyAwgggECAAHENQGUkAgggQFzZAQQQQCBAgLgGoDISAQQQIK7sAAIIIBAgQFwDUBmJAAIIEFd2AAEEEAgQIK4BqIxEAAEEiCs7gAACCAQIENcAVEYigAACxJUdQAABBAIEiGsAKiMRQAAB4soOIIAAAgECxDUAlZEIIIAAcWUHEEAAgQAB4hqAykgEEECAuLIDCCCAQIAAcQ1AZSQCCCBAXNkBBBBAIECAuAagMhIBBBAgruwAAgggECBAXANQGYkAAggQV3YAAQQQCBAgrgGojEQAAQSIKzuAAAIIBAgQ1wBURiKAAALElR1AAAEEAgSIawAqIxFAAAHiyg4ggAACAQLENQCVkQgggABxZQcQQACBAAHiGoDKSAQQQIC4sgMIIIBAgABxDUBlJAIIIEBc2QEEEEAgQIC4BqAyEgEEECCu7AACCCAQIEBcA1AZiQACCBBXdgABBBAIECCuAaiMRAABBIgrO4AAAggECBDXAFRGIoAAAsSVHUAAAQQCBIhrACojEUAAAeLKDiCAAAIBAsQ1AJWRCCCAAHFlBxBAAIEAAeIagMpIBBBAgLiyAwgggECAAHENQGUkAgggQFzZAQQQQCBAgLgGoDISAQQQIK7sAAIIIBAgQFwDUBmJAAIIEFd2AAEEEAgQIK4BqIxEAAEEiCs7gAACCAQIENcAVEYigAACxJUdQAABBAIEiGsAKiMRQAAB4soOIIAAAgECxDUAlZEIIIAAcWUHEEAAgQAB4hqAykgEEECAuLIDCCCAQIAAcQ1AZSQCCCBAXNkBBBBAIECAuAagMhIBBBAgruwAAgggECBAXANQGYkAAggQV3YAAQQQCBCw3cuzK5OaAbMZiQACCNxJAZeG1rk6+6tcP7iTAlw0AgggECFg+lsV10/k+mXEfGYigAACd1LA9Kntjvo/srL8k6R0JxG4aAQQQOB2BbIXxY+tmtkZnH0i47vX2/VlGgII3EkB16dbcwu/msb12bNnjcXvbf9e0k/vJAYXjQACCNyOwB+6/9j92ePHj0fTuH4d2Efbv5HpF7xFcDvKTEEAgTsjkOX6bff57q+rsFZX/XVcvyKYvgeby59L+om7HvFnWndmObhQBBC4hsD0z61MzyX90VPxu+1G68/ffPq/AXC0QX65hM2aAAAAAElFTkSuQmCC"},af95:function(t,i,e){"use strict";e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{dataObj:{},list:[],btnType:"0"}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;this.$fn.request("welfare/allowance","GET",{}).then((function(i){1==i.data.code&&(t.dataObj=i.data.data,t.list=i.data.data.list)}))},linquSet:function(t){var i="";return"0"==t.status?(this.btnType="0",i="(".concat(this.dataObj.people,"/").concat(t.number,")领取")):"1"==t.status?(this.btnType="1",i="可领取"):"2"==t.status?(this.btnType="2",i="已升级"):(this.btnType="2",i="已领取"),i},linquClick:function(t){var i=this,e={iid:t.id};"1"==t.status&&this.$fn.request("welfare/received","POST",e).then((function(t){1==t.data.code&&(i.$refs.success.showTips({msg:"领取成功",duration:2e3}),i.getData())}))}}};i.default=a},cfef:function(t,i,e){"use strict";e.r(i);var a=e("fd5b"),n=e("1839");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("255e");var A,r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2f818843",null,!1,a["a"],A);i["default"]=s.exports},cff7:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("a",{attrs:{href:t.$store.state.kefu}},[e("v-uni-view",{staticClass:"box dis",staticStyle:{"z-index":"999"},style:t.styleBall,attrs:{tabindex:"1"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.blur.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.show.apply(void 0,arguments)}}},[e("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"0%"},attrs:{src:t.mainImg}})],1)],1)])},o=[]},e0c9:function(t,i,e){var a=e("24fb"),n=e("1de5"),o=e("19fb"),A=e("aac5"),r=e("6969");i=a(!1);var s=n(o),u=n(A),c=n(r);i.push([t.i,".zongshouyi[data-v-2f818843]{height:%?300?%;width:%?684?%;margin:0 auto;margin-top:%?0?%;border:%?1?% solid #ccc;border-radius:%?30?%;background-color:#e5f7f1}.zongshouyi .one[data-v-2f818843]{width:100%;height:40%;background-image:url("+s+");background-repeat:no-repeat;background-size:100% auto;border-radius:0 0 26% 26%}.zongshouyi .two[data-v-2f818843]{background-image:url("+u+");background-repeat:no-repeat;background-size:100% 100%;border-radius:30% 30% 0 0 ;width:100%;height:60%}.zongshouyi .two .twoItem[data-v-2f818843]{width:50%;height:80%}.zongshouyi .two .last[data-v-2f818843]{width:80%;height:%?80?%;background-color:#07c07e;border-radius:%?30?%;color:#fff}.item[data-v-2f818843]{width:90%;height:%?160?%;margin:%?20?% auto;box-sizing:border-box;padding:%?10?% %?20?%;display:flex;flex-direction:column;align-items:center;background-image:url("+c+");background-size:100% 100%;background-repeat:no-repeat;position:relative}.item .font[data-v-2f818843]{width:100%;text-align:center}.item .btn[data-v-2f818843]{margin-top:%?30?%;background-color:#07c07e;color:#fff;border-radius:%?15?%;box-sizing:border-box;padding:%?10?% %?20?% %?15?%;position:absolute;bottom:%?15?%;right:%?15?%}.item .gray[data-v-2f818843]{margin-top:%?30?%;background-color:#8e8e8e;color:#fff;border-radius:%?15?%;box-sizing:border-box;padding:%?10?% %?20?% %?15?%;position:absolute;bottom:%?15?%;right:%?15?%}.item .pink[data-v-2f818843]{margin-top:%?30?%;background-color:#07c07e;color:#fff;border-radius:%?15?%;box-sizing:border-box;padding:%?10?% %?20?% %?15?%;position:absolute;bottom:%?15?%;right:%?15?%;-webkit-filter:brightness(110%);filter:brightness(110%);box-shadow:0 0 5px #fff,0 0 %?10?% #fff,0 0 %?15?% #fff,0 0 %?10?% #fff,0 0 %?10?% #fff,0 0 %?40?% #fff,0 0 %?10?% #fff,0 0 %?15?% #fff}",""]),t.exports=i},f1b2:function(t,i,e){"use strict";var a=e("a380"),n=e.n(a);n.a},fd5b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={airelFloatball:e("5664").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("airel-floatball"),e("Tips",{ref:"success",attrs:{position:"center",backgroundColor:"#dbf1e1",color:"#07c07e",size:"30"}}),e("Tips",{ref:"error",attrs:{position:"center",backgroundColor:"red",color:"#fff",size:"30"}}),e("v-uni-view",{staticClass:"zongshouyi"},[e("v-uni-view",{staticClass:"one disc"},[e("v-uni-view",{staticStyle:{color:"#fff"}},[t._v("共计获得津贴")]),e("v-uni-view",{staticStyle:{"font-weight":"600","font-size":"42upx",color:"#fff"}},[t._v(t._s(t.dataObj.allowance))])],1),e("v-uni-view",{staticClass:"two disc"},[e("v-uni-view",{staticClass:"t",staticStyle:{width:"100%",height:"60%",display:"flex"}},[e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("共计直推人数")]),e("v-uni-view",[t._v(t._s(t.dataObj.people))])],1),e("v-uni-view",{staticClass:"twoItem disc"},[e("v-uni-view",[t._v("共计完成任务")]),e("v-uni-view",[t._v(t._s(t.dataObj.task))])],1)],1)],1)],1),e("v-uni-view",{staticStyle:{"margin-top":"30upx"}},t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"item"},[e("v-uni-view",{staticClass:"font "},[t._v(t._s(i.title))]),e("v-uni-view",{class:{gray:"2"==t.btnType,btn:"0"==t.btnType,pink:"1"==t.btnType},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.linquClick(i)}}},[t._v(t._s(t.linquSet(i)))])],1)})),1)],1)},o=[]}}]);