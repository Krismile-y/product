import request from './request';
// 等待支付订单数
export function getAwaitPayOrderCount_api() {
  return request.post('/api/getStatus');
}
// 客服
export function webSetDetail_api() {
  return request.post('/api/webSetDetail');
}

// 购物车总数量
export function getCartCount_api(params) {
  return request.post('/api/countCar', params);
}

// 购物车列表addCart_api
export function getCartList_api(params) {
  return request.post('/api/shoppingCarList', params);
}

// 减少购物车数量
export function decreaseCart_api(params) {
  return request.post('/api/updateCar', params);
}

// 加入购物车
export function addCart_api(params) {
  return request.post('/api/addShoppingCar', params);
}

// 删除购物车
// export function delCart_api(id) {
//   return request.post(`/api/delShoppingCar/${id}`);
// }
export function delCart_api(params) {
  return request.post('/api/delShoppingCar', params);
}

// 获取订单列表
export function getOrderList_api(params, cancelToken) {
  return request.post('/api/myOrderList', params, {
    cancelToken,
  });
}

// Hủy bỏ订单
export function cacelOrder_api(id) {
  return request.post('/api/cancelOrder', { id });
}
// 待支付 - 支付订单
export function payOrderById_api(params) {
  return request.post('/api/payOrderById', params);
}

// 确认收货
export function takeGoods_api(id) {
  return request.post('api/sureReceipt', { id });
}

// 商品评论列表
export function getComments_api(params) {
  return request.post('/api/commentList', params);
}

// 订单评论
export function addComments_api(params) {
  return request.post('/api/addComment', params);
}

// 获取可退款订单
export function afterSaleList_api(params) {
  return request.post('/api/afterSaleList', params);
}

// 订单退货
export function saleApply_api(params) {
  return request.post('/api/saleApply', params);
}

export function delivery_api(orderSn) {
  return request.post('/api/queryOrder?order_sn=' + orderSn);
}

// 购物车计算运费
export function countPostpage_api(params) {
  return request.post('/api/countPostpage', params);
}

// 我的寄售
export function jishouList_api(params) {
  return request.post('/api/jishouList', params);
}

// 购物车检测
export function checkCar_api(params) {
  return request.post('/api/checkCar', params);
}

// 购买推广大使
export function extensionPay_api(params) {
  return request.post('/api/extensionPay', params);
}
