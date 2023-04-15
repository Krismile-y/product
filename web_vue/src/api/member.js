import request from './request';

// 获取会员说明
export function getVipExplain_api() {
  return request.post('/api/getVipExplain');
}

// 获取会员选项
export function getVip_api(params) {
  return request.post('/api/getVip', params);
}

// 支付会员
export function payVip_api(params) {
  return request.post('/api/payVip', params);
}
// 会员记录
export function getVipRecord_api(params) {
  return request.post('/api/getVipRecord', params);
}
