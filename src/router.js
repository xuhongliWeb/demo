import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: () => import(/* webpackChunkName: "vModel" */ './views/vModel')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import(/* webpackChunkName: "slot" */ './views/slot')
    },
    {
      path: '/provideInject',
      name: 'provideInject',
      component: () => import(/* webpackChunkName: "provideInject" */ './views/provideInject')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import(/* webpackChunkName: "swiper" */ './views/swiper')
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import(/* webpackChunkName: "redirect" */ './views/redirect')
    },
    {
      path: '/async',
      name: 'async',
      component: () => import(/* webpackChunkName: "async" */ './views/async')
    },
  ]
})
