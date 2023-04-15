import request from './request';

// 获取 token
export function getTokenByCode_api(params) {
  return request.post('/api/login', params);
}

// 获取用户信息
// export function getUserInfo_api() {
//   return request.post('/api/getUserInfo');
// }
export function getUserInfo_api(params) {
  return request.post('api/member/getUserInfo', params);
}

// 修改用户信息
export function updateUser_api(params) {
  return request.post('/api/upUser', params);
}

// 修改头像
export function updateAvatar_api(params) {
  return request.post('/api/updateUser', params);
}

// 我的同学（团队）
export function getMyTeam_api(params) {
  return request.post('/api/myTeam', params);
}

// 获取分享图片
export function getShareImg_api() {
  return request.post('/api/sharecode');
}
// 排行榜
export function getRankList_api(params) {
  return request.post('/api/getRankList', params);
}

// 公益金
export function getPublicWelfare_api(params) {
  return request.post('/api/getPublicWelfareList', params);
}

// 获取积分
export function getIntegrals_api(params) {
  return request.post('/api/getRecord', params);
}

// 奖励积分转消费积分
export function changeIntegralType_api(money) {
  return request.post('/api/changeXf', { money });
}
// 奖励积分转赠他人
export function giveGift_api(params) {
  return request.post('/api/giveGift', params);
}
// 积分充值列表
export function getRechargeList_api() {
  return request.post('/api/getRechargeList');
}

// 积分充值
export function payRecharge_api(id) {
  return request.post('/api/payRecharge', { id });
}

// 商学院分类
export function getArticleCategory_api() {
  return request.post('/api/getArticleType');
}

// 商学院文章列表
export function getArticleList_api(params) {
  return request.post('/api/getArticle', params);
}

// 商学院文章详情
export function getArticleDetail_api(id) {
  return request.post('/api/getArticleDetail', { id });
}

// 获取倍率
export function getRate_api() {
  return request.get('/index/common/getWebset');
}

// 摇钱树
export function getMoneyTree_api() {
  return request.post('/api/getMoneyTree');
}

// 偷取金钱
export function stealMoney_api() {
  return request.post('/api/stealMoney');
}

// 偷取列表
export function getRedpackList_api(params) {
  return request.post('/api/redpackList', params);
}

// 偷取列表
export function agent_api(params) {
  return request.post('/api/payAgentRecharge', params);
}

// 获取验证码
export function sendmsg_api(params) {
  return request.post('/api/sendmsg', params);
}

// 微信公众号授权
export function officialLogin_api(params) {
  return request.post('/api/officialLogin', params);
}

// 登录
export function loginUser_api(params) {
  return request.post('/api/loginUser', params);
}

// 验证旧手机号码
export function verifPhone_api(params) {
  return request.post('/api/verifPhone', params);
}

// 修改手机号码
export function updatePhone_api(params) {
  return request.post('/api/updatePhone', params);
}

// 黔宝/分红详情
export function detailUser_api(params) {
  return request.post('/api/detailUser', params);
}

// 门店详情
export function plateDetail_api(params) {
  return request.post('/api/plateDetail', params);
}

// 提现申请
export function addCash_api(params) {
  return request.post('/api/addCash', params);
}

// 分享海报
export function myExtension_api(params) {
  return request.post('/api/myExtension', params);
}

// 获取海报
export function getAds_api(params) {
  return request.get('/api/getAds/position_id/' + params);
}

// 登录协议
export function getAgreement_api() {
  return request.post('/api/getAgreement');
}

// 门店是否过期
export function checkRole_api() {
  return request.post('/api/checkRole');
}
