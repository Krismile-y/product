import { getToken, setToken, removeToken } from '@/libs/auth';
import router from '@/router';
import { getTokenByCode_api } from '_api/user';
export default {
  state: {
    //上线解开注释
    token: getToken(),
    // token: '9fbb24f66f22bf7dd2092d527be254bda8a0ace8',
  },
  mutations: {
    // 设置tokens
    SET_TOKEN(state, token) {
      state.token = token;
      setToken(token);
    },
    // 清空token
    REMOVE_TOKEN(state) {
      state.token = '';
      removeToken();
    },
  },
  actions: {
    // 登录
    loginAct({ commit }, code) {
      return new Promise(async (resolve, reject) => {
        try {
          const token = await getTokenByCode_api(code);
          commit('SET_TOKEN', token);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    // 退出
    async logoutAct({ commit }) {
      commit('REMOVE_TOKEN');
      let current = router.history.current;
      if (current.name !== 'Login') {
        router.push('/login');
      }
    },
  },
};
