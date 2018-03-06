import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Carousel from '../components/carousel.vue'
import Shop from '../components/shop.vue'
import BBS from '../components/bbs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/bbs',
      name: 'BBS',
      component: BBS
    },
    {
      path: '/',   //默认页
      redirect: '/home'
    },
    {
      path:'/*',
      redirect:'/home' //重定向
    }
  ]
})
