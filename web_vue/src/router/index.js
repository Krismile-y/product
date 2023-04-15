import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';

Vue.use(Router);
const router = new Router({
  routes: routes,
  base: process.env.BASE_URL,
});

const witheList = [
  'Login',
  'Code',
  'Home',
  'PosterShare',
  'Category',
  'ProductDetail_goods-list',
  'Shop',
  'GoodsList',
  'ProductDetail_home',
  'ProductDetail_category',
  'GradeList',
  'Dicgo',
];

router.beforeEach((to, from, next) => {
  const toName = to.name;
  const token = sessionStorage.getItem('token');
  // 没有token
  console.log("to:",to)
  if (!token && !witheList.includes(toName) && to.path == 'treaty') {
    console.log('没有token');
    // localStorage.setItem('redirect', JSON.stringify(to));
    // return next('/login');
  }
  // 有token
  if (token && !witheList.includes(toName)) {
    console.log('有token');
    return next();
  }
  console.log('正常跳转');
  next();
});

export default router;
