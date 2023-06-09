
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import bottom from './components/bottom/bottom.vue'
import tops from './components/tops/tops.vue'
import navs from './components/navs/navs.vue'
// import request from './common/http.js'

import Tips from '@/uni_modules/bluestar-Tips/components/bluestar-Tips/bluestar-Tips.vue'
Vue.component('Tips',Tips)

import fn from './common/fn.js'
import store from './store/index.js'
import dragButton from "@/components/drag-button/drag-button.vue"; //拖动按钮
Vue.component('dragButton',dragButton)
Vue.prototype.$store = store
// Vue.prototype.$url = getApp().globalData.baseUrl
// Vue.prototype.$url1 = getApp().globalData.baseUrl
Vue.prototype.$lastUrl ='http://gw.tzhreefvg.top/'//官网
// Vue.prototype.$request =request
Vue.prototype.$fn =fn
Vue.component('bottom',bottom)
Vue.component('tops',tops)
Vue.component('navs',navs)
Vue.use(uView);
Vue.config.productionTip = false
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
App.mpType = 'app'

const app = new Vue({
    ...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif