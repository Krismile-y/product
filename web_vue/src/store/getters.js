export default {
  token: state => state.user.token,
  userInfo: state => state.common.userInfo,
  wechatUrl: state => state.common.wechatUrl,
  include: state => state.keepAlive.include,
};
