import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './cube-ui';
import 'amfe-flexible';
import './components';

import './assets/stylus/index.styl';
import './assets/iconfont/iconfont.css';
import message from './components/message/message';
// 引入银行卡信息模块
import getBankcardinfo from 'bankcardinfo';
Vue.prototype.$getBankcardinfo = getBankcardinfo;
// 引入复制内容库
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 引入繁体简体文件
import zh_tran from "./libs/langs"
Vue.prototype.$zh_tran = zh_tran

Vue.use(message); // 全局提示框
Vue.prototype.message = message;

import Mui from 'vue-awesome-mui';
// import mui from './mui.js';
// Vue.prototype.mui = mui;
Vue.use(Mui);

// import Vconsole from 'vconsole';
// new Vconsole();

import MescrollVue from 'mescroll.js/mescroll.vue';
Vue.component('MescrollVue', MescrollVue);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

mui.init({
  keyEventBind: {
    backbutton: true, // 关闭back按键监听
  },
});
// 首页返回键处理
// 处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
  // 首次按键，提示‘再按一次退出应用’
  if (!first) {
    first = new Date().getTime(); // 记录第一次按下回退键的时间
    // mui.toast('再按一次退出应用') // 给出提示
    history.go(-1); // 回退到上一页面
    setTimeout(function() {
      // 1s中后清除
      first = null;
    }, 1000);
  } else {
    if (new Date().getTime() - first < 1000) {
      // 如果两次按下的时间小于1s，
      plus.runtime.quit(); // 那么就退出app
    }
  }
};
