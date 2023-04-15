import request from './request';

export function checkCar_api(params) {
  return request.post('/api/checkCar', params);
}
