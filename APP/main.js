
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import bottom from './components/bottom/bottom.vue'
import tops from './components/tops/tops.vue'
import navs from './components/navs/navs.vue'
Vue.component('bottom',bottom)
Vue.component('tops',tops)
Vue.component('navs',navs)
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
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