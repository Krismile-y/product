import Index from '_views/index/index.vue';
import UserInfo from '_views/user-info/user-info.vue';
import Kefu from '_views/kefu/kefu.vue';
import ProductDetail from '_views/product-detail/product-detail.vue';
import ShoppingCart from '_views/shopping-cart/shopping-cart.vue';
import AddressEdit from '_views/address-edit/address-edit.vue';
export default [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/login',
    children: [
      {
        path: 'home/:home_user_id?',
        name: 'Home',
        meta: {
          // title: '商城', 
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '_views/home/home.vue'),
        children: [
          {
            path: 'product-detail/:id/:user_id?',
            name: 'ProductDetail_home',
            component: ProductDetail,
            children: [
              {
                path: 'user-info',
                component: UserInfo,
              },
            ],
          },
        ],
      },
      {
        path: 'shopping-cart',
        name: 'ShoppingCart',
        meta: {
          // title: '购物车',
        },
        component: ShoppingCart,
      },
      // 分类
      {
        path: '/category',
        name: 'Category',
        meta: {
          title: '零售',
        },
        component: () =>
          import(/* webpackChunkName: "category" */ '_views/category/category.vue'),
        children: [
          {
            path: 'product-detail/:id/:user_id?',
            name: 'ProductDetail_category',
            component: ProductDetail,
            children: [
              {
                path: 'user-info',
                component: UserInfo,
              },
            ],
          },
        ],
      },
      {
        path: 'personal',
        name: 'Personal',
        meta: {
          // title: '我的',
        },
        component: () =>
          import(/* webpackChunkName: "personal" */ '_views/personal/personal.vue'),
        children: [
          // 订单
          {
            path: 'my-order/:type',
            component: () =>
              import(/* webpackChunkName: "my-order" */ '_views/my-order/my-order.vue'),
          },
          // 二维码
          {
            path: 'share',
            component: () =>
              import(/* webpackChunkName: "personal" */ '_views/share/share.vue'),
          },
          {
            path: 'service',
            component: () =>
              import(/* webpackChunkName: "personal" */ '_views/service/service.vue'),
          },
          // 地址管理
          {
            path: 'address',
            name: 'Address',
            component: () =>
              import(/* webpackChunkName: "address" */ '_views/address/address.vue'),
            children: [
              {
                path: 'address-edit',
                component: AddressEdit,
              },
            ],
          },
          // 我的vip
          {
            path: 'member',
            name: 'Member',
            component: () =>
              import(/* webpackChunkName: "address" */ '_views/member/myMember.vue'),
          },
          // 个人信息
          {
            path: 'user-info',
            component: UserInfo,
          },
          {
            path: 'kefu',
            component: Kefu,
          },

        ],
      },
    ],
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () =>
      import(/* webpackChunkName: "delivery" */ '_views/delivery/index.vue'),
  },
  // 门店入驻,门店批发,签到
  {
    path: '/storeCheckIn',
    name: 'storeCheckIn',
    component: () =>
      import(/* webpackChunkName: "delivery" */ '_views/storeCheckIn/storeCheckIn.vue'),
  },
  {
    path: '/storeWholesale',
    name: 'storeWholesale',
    component: () =>
      import(/* webpackChunkName: "delivery" */ '_views/storeWholesale/storeWholesale.vue'),
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () =>
      import(/* webpackChunkName: "delivery" */ '_views/signIn/signIn.vue'),
  },
  // 开通会员页面
  {
    path: '/dredge',
    name: 'Dredge',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/member/dredge.vue'),
  },
  // 客服
  {
    path: '/kefu',
    name: 'Kefu',
    component: () => import(/* webpackChunkName: "address" */ '_views/kefu/kefu.vue'),
  },
  // 银行卡信息页面
  {
    path: '/bankCard',
    name: 'BankCard',
    component: () => import(/* webpackChunkName: "address" */ '_views/bankCard/bankCard.vue'),
  },
  // 添加银行卡界面
  {
    path: '/addBankCard',
    name: 'AddBankCard',
    component: () => import(/* webpackChunkName: "address" */ '_views/addBankCard/addBankCard.vue')
  },
  // 修改银行卡信息界面
  {
    path: '/updateBankCard',
    name: 'UpdateBankCard',
    component: () => import(/* webpackChunkName: "address" */ '_views/updateBankCard/updateBankCard.vue'),
  },
  // 修改提现密码界面
  {
    path: '/updateTiXianPass',
    name: 'UpdateTiXianPass',
    component: () => import(/* webpackChunkName: "address" */ '_views/tixian/updateTiXianPass.vue')
  },
  // 修改密码界面
  {
    path: '/updatePassword',
    name: 'UpdatePassword',
    component: () => import(/* webpackChunkName: "address" */ '_views/user-info/updatePassword/updatePassword.vue')
  },
  // 上传头像界面
  {
    path: '/uploadHeadImg',
    name: 'UploadHeadImg',
    component: () => import(/* webpackChunkName: "address" */ '_views/uploadHeadImg/uploadHeadImg.vue')
  },
  // 账号实名界面
  {
    path: '/userShiMing',
    name: 'UserShiMing',
    component: () => import(/* webpackChunkName: "address" */ '_views/userShiMing/userShiMing.vue')
  },
  // 消息通知界面
  {
    path: '/messageTongzhi',
    name: 'MessageTongzhi',
    component: () => import(/* webpackChunkName: "address" */ '_views/messageTongzhi/messageTongzhi.vue')
  },
  // 充值记录界面
  {
    path: '/chongzhiRecord',
    name: 'ChongzhiRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/chongzhiRecord/chongzhiRecord.vue')
  },
  // 会员记录
  {
    path: '/record',
    name: 'Record',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/member/record.vue'),
  },
  // 分销记录
  {
    path: '/distribution',
    name: 'Distribution',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/distribution/index.vue'),
  },
  // 提现页面
  {
    path: '/withdrawDeposit',
    name: 'WithdrawDeposit',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/distribution/withdrawDeposit/index.vue'),
  },
  // 提现记录
  {
    path: '/tx/record/:type',
    name: 'TxRecord',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/distribution/record/index.vue'),
  },
  // 我要提现界面
  {
    path: '/tixian',
    name: 'Tixian',
    component: () => import(/* webpackChunkName: "address" */ '_views/tixian/withdrawal.vue')
    // component: () => import(/* webpackChunkName: "address" */ '_views/tixian/tixian.vue')
  },
  {
    path: '/zhanneiMessage',
    name: 'ZhanneiMessage',
    component: () => import(/* webpackChunkName: "address" */ '_views/zhanneiMessage/zhanneiMessage.vue')
  },
  // 提现记录界面
  {
    path: '/tixianRecord',
    name: 'TixianRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/tixian/tixianRecord.vue')
  },
  // 忘记密码界面
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: () => import(/* webpackChunkName: "address" */ '_views/forgetPassword/forgetPassword.vue')
  },
  // 余额记录
  {
    path: '/yueRecord',
    name: 'YueRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/personal/account/yueRecord.vue')
  },
  {
    path: '/accountAuthentication',
    name: 'accountAuthentication',
    component: () => import(/* webpackChunkName: "address" */ '_views/accountAuthentication/accountAuthentication.vue')
  },
  // 可提余额记录
  {
    path: '/carryRecord',
    name: 'CarryRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/personal/account/carryRecord.vue')
  },
  {
    path: '/integralRecord',
    name: 'IntegralRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/personal/account/integralRecord.vue')
  },
  // 多宝记录
  {
    path: '/duobao',
    name: 'Duobao',
    component: () => import(/* webpackChunkName: "address" */ '_views/duobao/duobao.vue')
  },
  // 返佣记录界面
  {
    path: '/fanyongRecord',
    name: 'FanyongRecord',
    component: () => import(/* webpackChunkName: "address" */ '_views/personal/account/fanyongRecord.vue')
  },
  // 我的下线：一级
  {
    path: '/myTeam',
    name: 'MyTeam',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/distribution/myTeam/myTeam.vue'),
  },
  //我的下线：二级
  {
    path: '/twoLevelTeam/:id',
    name: 'TwoLevelTeam',
    component: () =>
      import(/* webpackChunkName: "address" */ '_views/distribution/myTeam/twoLevelTeam.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '_views/search/search.vue'),
    children: [
      {
        path: 'product-detail/:id/:user_id?',
        name: 'ProductDetail_search',
        component: ProductDetail,
        children: [
          {
            path: 'user-info',
            component: UserInfo,
          },
        ],
      },
    ],
  },
  {
    path: '/goods-list/:type_id',
    name: 'GoodsList',
    component: () =>
      import(/* webpackChunkName: "goods-list" */ '_views/goods-list/goods-list.vue'),
    children: [
      {
        path: 'product-detail/:id/:user_id?',
        name: 'ProductDetail_goods-list',
        component: ProductDetail,
        children: [
          {
            path: 'user-info',
            component: UserInfo,
          },
        ],
      },
    ],
  },
  {
    path: '/grade-list/:type_id',
    name: 'GradeList',
    children: [
      {
        path: 'product-detail/:id/:user_id?',
        name: 'ProductDetail_goods-list',
        component: ProductDetail,
        children: [
          {
            path: 'user-info',
            component: UserInfo,
          },
        ],
      },
    ],
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/gradeList/gradeList.vue'),
  },
  // 手机
  {
    path: '/place-order/:fromName?',
    name: 'PlaceOrder',
    component: () =>
      import(/* webpackChunkName: "place-order" */ '_views/place-order/place-order.vue'),
    children: [
      {
        path: 'address-edit',
        component: AddressEdit,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/login/login.vue'),
  },
  {
    path: '/treaty',
    name: 'Treaty',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/treaty/treaty.vue'),
  },
  {
    path: '/code',
    name: 'Code',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/login/code/code.vue'),
  },
  // 关于我们
  {
    path: '/shop',
    name: 'Shop',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/about/about.vue'),
  },
  // 服务中心界面
  {
    path: '/fuwuCenter',
    name: 'FuwuCenter',
    component: () => import(/* webpackChunkName: "login" */ '_views/fuwuCenter/fuwuCenter.vue')
  },
  // 积分兑换界面
  {
    path: '/carryDuiHuan',
    name: 'CarryDuiHuan',
    component: () => import(/* webpackChunkName: "login" */ '_views/carryDuiHuan/carryDuiHuan.vue')
  },
  // 安全保障界面
  {
    path: '/safety',
    name: 'Safety',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/safety.vue')
  },
  // 会员等级
  {
    path: '/grade',
    name: 'Grade',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/grade.vue')
  },
  // 公司介绍
  {
    path: '/company',
    name: 'Company',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/company.vue')
  },
  // 提现说明
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/withdraw.vue')
  },
  // 团队奖励
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/team.vue')
  },
  // 营业执照
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/business.vue')
  },
  // 营业执照
  {
    path: '/guide',
    name: 'Guide',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/guide.vue')
  },
  // 营业执照
  {
    path: '/membership',
    name: 'Membership',
    component: () => import(/* webpackChunkName: "login" */ '_views/about/membership.vue')
  },
  // 邀请好友
  {
    path: '/inviteFriends',
    name: 'InviteFriends',
    component: () => import(/* webpackChunkName: "login" */ '_views/inviteFriends/inviteFriends.vue')
  },
  // 注册页面
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '_views/register/register.vue')
  },
  {
    path: '/dicgo',
    name: 'Dicgo',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/dicgo/dicgo.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/help/help.vue'),
  },

  // 修改手机号码
  {
    path: '/changePhone',
    name: 'ChangePhone',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/user-info/changePhone/changePhone.vue'),
  },
  // 我的门店
  {
    path: '/myShop',
    name: 'MyShop',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/myShop/myShop.vue'),
  },
  // 我的黔豆property
  {
    path: '/property/:type',
    name: 'Property',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/personal/property/property.vue'),
  },

  // 评价
  {
    path: '/comment',
    name: 'Comment',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/my-order/comment/comment.vue'),
  },
  // 我的账户
  {
    path: '/account',
    name: 'Account',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/personal/account/account.vue'),
  },
  // 后台操作可提余额记录
  {
    path: '/htCarryRecord',
    name: 'HtCarryRecord',
    component: () => import(/* webpackChunkName: "login" */ '_views/personal/account/htCarryRecord.vue')
  },
  // 后台操作积分记录
  {
    path: '/htIntegralRecord',
    name: 'HtIntegralRecord',
    component: () => import(/* webpackChunkName: "login" */ '_views/personal/account/htIntegralRecord.vue')
  },
  // 后台操作多宝记录
  {
    path: '/htDuobao',
    name: 'HtDuobao',
    component: () => import(/* webpackChunkName: "login" */ '_views/duobao/htDuobao.vue')
  },
  // 充值界面
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import(/* webpackChunkName: "login" */ '_views/recharge/recharge.vue')
  },
  {
    path: '/rechargeHome',
    name: 'RechargeHome',
    component: () => import(/* webpackChunkName: "login" */ '_views/recharge/rechargeHome.vue')
  },
  
  // 充值记录界面
  {
    path: '/rechargeRecord',
    name: 'RechargeRecord',
    component: () => import(/* webpackChunkName: "login" */ '_views/recharge/rechargeRecord.vue')
  },
  // 分享海报
  {
    path: '/poster',
    name: 'Poster',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/poster/poster.vue'),
  },
  // 寄售
  {
    path: '/deposit',
    name: 'Deposit',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/deposit/deposit.vue'),
  },
  // 分享海报页面
  {
    path: '/posterShare',
    name: 'PosterShare',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/poster/share/share.vue'),
  },

  // 线下服务店
  {
    path: '/offline-shop',
    name: 'OfflineShop',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/offline-shop/offline-shop.vue'),
  },

  // 旅游入黔详情页
  {
    path: '/detailPage',
    name: 'DetailPage',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/detailPage/detailPage.vue'),
  },
  // 旅游入黔购买
  {
    path: '/pay',
    name: 'Pay',
    component: () =>
      import(/* webpackChunkName: "login" */ '_views/pay/pay.vue'),
    children: [
      {
        path: 'address-edit',
        component: AddressEdit,
      },
    ],
  },

  {
    path: '*',
    redirect: '/home',
  },
];
