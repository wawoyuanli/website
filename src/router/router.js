import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    /**主页路由 */
    {
      path: '/',
      name: 'home',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/registerInfo',
      name: 'registerInfo',
      component: () => import('@/views/registerInfo/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/views/support/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/privacy/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/tos',
      name: 'tos',
      component: () => import('@/views/tos/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/faq',
      component: () => import('@/views/faq/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/agreement',
      component: () => import('@/views/agreement/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/terms',
      component: () => import('@/views/terms/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/antispam',
      component: () => import('@/views/antispam/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    },
    {
      path: '/resetpwd',
      component: () => import('@/views/resetpwd/index.vue'),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next()
    }
    }
   
  ]
})
