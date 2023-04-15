// 获取门店
import request from './request';

export function plateList_api(params) {
  return request.post('/api/plateList', params);
}

// 线下服务店
export function businessList_api(params) {
  return request.post('/api/businessList', params);
}
