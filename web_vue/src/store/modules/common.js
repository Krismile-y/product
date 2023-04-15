import { getCartCount_api } from '_api/order';
import { getUserInfo_api } from '../../api/user';
import { isIos } from '@/libs/utils';

export default {
  state: {
    shopCartCount: 0, // 购物车总数
    userInfo: {}, // 用户信息
    wechatUrl: '', // 微信分享签名 url
  },
  mutations: {
    setShopCartCount(state, count) {
      console.log(count);
      state.shopCartCount = count;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setWechatUrl(state, url) {
      if (isIos() && state.wechatUrl !== '') {
        return;
      }
      state.wechatUrl = url;
    },
  },
  actions: {
    async getShopcartCount({ commit }) {
      let token = localStorage.getItem('token');
      let count = await getCartCount_api(token);
      commit('setShopCartCount', count);
    },
    getUserInfo({ commit }) {
      return new Promise(async resolve => {
        let userInfo = await getUserInfo_api();
        commit('setUserInfo', userInfo);
        resolve(userInfo);
      });
    },
  },
};
