import request from './request';

//签到
export function sign_api(params) {
  return request.post('/api/signIn', params);
}

//签到列表
export function signList_api(params) {
  return request.post('/api/signInList', params);
}

//签到福利列表
export function signSetList_api(params) {
  return request.post('/api/signSetList', params);
}
