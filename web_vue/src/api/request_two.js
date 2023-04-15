import axios from 'axios';
import store from '@/store';
import Toast from '_com/toast';
import PageLoading from '_com/page-loading';
import ToastBounce from '_com/toast-bounce';

// 请求异常
function requestException(message = '500: 服务器错误') {
  PageLoading.hide();
  Toast.hide();
  ToastBounce(message);
  return Promise.reject(message);
}

const whiteList = [0];
const reLogin = [401];
const resCode = [400];
const authCode = [200];
const ajax = axios.create({
  baseURL: 'https://api.btcexvip.top/index.php/',
  timeout: 6000,
});

// 请求 拦截器
ajax.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token')
    config.headers['token'] = token;
    return config;
  },
  error => {
    console.log('请求拦截器', error);
  },
);

// 响应 拦截器
ajax.interceptors.response.use(
  response => {
    const { data } = response;
    return response
    // const code = data.code;
    // if (whiteList.includes(code)) {
    //   return data.data;
    // } else if (reLogin.includes(code)) {
    //   // 重新登录   //上线记得解开注释
    //   store.dispatch('logoutAct');
    // } else if (resCode.includes(code)) {
    //   return data;
    // } else if (authCode.includes(code)) {
    //   return data;
    // } else {
    //   return requestException(data.msg);
    // }
  },
  error => {
    // 手动Hủy bỏ请求
    if (axios.isCancel(error)) {
      return Promise.reject(error.message);
    }
    if (error.response) {
      // 服务器已响应，但服务器响应的状态码不在 2xx 范围内
      const { status } = error.response;
      switch (status) {
        case 400:
          error.message = error.response.data.message;
          break;
        case 401:
          // error.message = '登录过期，重新登录';
          ToastBounce('登录过期');
          store.dispatch('logoutAct');
          break;
        case 403:
          // error.message = '403：登录过期，请重新登录';
          error.message = '403：拒绝访问';
          break;
        case 404:
          error.message = '404：网络请求不存在';
          break;
        // 自定义错误
        case 422:
          error.message = error.response.data.message || '422：自定义错误';
          break;
        case 500:
          error.message = '500：服务器异常';
          break;
        default:
          error.message = status + ':未知错误';
      }
    } else {
      // 服务器未响应(超时，断网，请求不存在（404）)
      console.log('Error', error.message);
    }
    // return requestException(error.message, status);
  },
);
export default ajax;
