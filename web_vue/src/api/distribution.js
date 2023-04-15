import request from './request';

// 我的下线
export function getTeam_api(params) {
  return request.post('/api/getTeam', params);
}

// 分销订单
export function fxOrder_api() {
  return request.post('/api/fxOrder');
}

// 账户记录
export function yjRecord_api(params) {
  return request.post('/api/yjRecord', params);
}

// 提现记录
export function cashRecord_api(params) {
  return request.post('/api/cashRecord', params);
}
