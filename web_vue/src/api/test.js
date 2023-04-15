import request from './request';

// 获取 token
export function getList_api(params) {
  return request.get('/goods/getList', {
    params,
    baseURL: 'https://api.zhugy.cn/',
  });
}
