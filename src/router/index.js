import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 设置进度条
NProgress.configure({ showSpinner: false });

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { enShowLayout: true } // 不显示layout
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }
  ]
});

// 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start();
  // to.matched.some(res => res.meta.requireLogin)
  // 判断是否需要登录权限
  next();
});

router.afterEach(transition => {
  NProgress.done();
});

export default router;
