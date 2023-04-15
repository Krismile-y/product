import request from './request';

// 首页轮播图
export function getHomeBanner_api() {
  return request.get('/api/getAds');
}
// rexiao
export function getHeatGoodsList_api() {
  return request.post('/api/getHeatGoodsList');
}

// 首页商品分类
export function getHomeModule_api() {
  return request.post('/api/getModule');
}
// 会员专区商品接口
export function getVipGoodsList_api () {
  return request.post('/api/goods/vip_goods')
}
// 多宝兑换专区商品接口
export function getDuobaoGoodsList_api () {
  return request.post('/api/goods/duobao_goods')
}

// 首页公告
export function getHomeNotice_api() {
  return request.post('/api/getNotice');
}

// 商品列表
export function getGoodsList_api(params, cancelToken) {
  return request.post('/api/getGoodsList', params, { cancelToken });
}

// 首页商品
export function getHomeGoods_api(params) {
  return request.post('/api/getGoodsList', params);
}

// 商品详情
export function getGoodsById_api(id) {
  return request.post('/api/getGoodsDetail', { id });
}

// 手机列表
export function getMobileList_api(params) {
  return request.post('/api/getMobileList', params);
}

// 手机订单列表
export function getMobileOrder_api(params) {
  return request.post('/api/getOrderList', params);
}

// 手机详情
export function getMobileById_api(id) {
  return request.post('/api/getMobileDetail', { id });
}

// 获取微信 jssdk
export function getWxJSSDK_api(url) {
  return request.post('/api/jssdk', { url });
}

// 手机订单下单
export function placeOrderMobile_api(params) {
  return request.post('/api/addOrder', params);
}

// 购物车下单
export function placeOrderCart_api(params) {
  return request.post('/api/payCarOrder', params);
}

// 商品详情直接下单
export function placeOrder_api(params) {
  return request.post('/api/payOrderSingle', params);
}

// 补齐全款
export function payOrder_api(order_id) {
  return request.post('/api/payOrder', { order_id });
}

export function getCategory_api(params) {
  return request.post('/api/getCategory', { params });
}

// app更行检测
export function getVersion_api(params) {
  return request.get('/api/getVersion', params);
}

// 首页旅游入黔
export function getTour_api(params) {
  return request.post('/api/getTour', params);
}
