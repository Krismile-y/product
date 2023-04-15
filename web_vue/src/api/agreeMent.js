import request from './request';

//寄售协议
export function getAgree_api() {
  return request.post('/api/getAgreement');
}
