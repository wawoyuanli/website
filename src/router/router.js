import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /**主页路由 */
    {
      path: '/',
      name: 'home',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/index.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/views/support/index.vue'),

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/index.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/privacy/index.vue'),
    },
    {
      path: '/tos',
      name: 'tos',
      component: () => import('@/views/tos/index.vue'),
    },
    {
      path: '/faq',
      component: () => import('@/views/faq/index.vue')
    }
  ]
})
