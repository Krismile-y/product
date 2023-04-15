import request from './request';

// 地址列表
export function getAddressList_api(params) {
  return request.post('/api/getAddrList', params);
}

// 添加地址
export function addAddress_api(params) {
  return request.post('/api/saveAddr', params);
}

// 修改地址
export function editAddress_api(params) {
  return request.post('/api/updateAddr', params);
}

// 删除地址
export function delAddress_api(params) {
  return request.post('/api/delAddr', params);
}
