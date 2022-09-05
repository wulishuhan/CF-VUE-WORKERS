import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/introduce',
    name: 'introduce',
    meta: {
      title: '个人介绍',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/introduce.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
