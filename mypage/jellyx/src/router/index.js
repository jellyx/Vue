import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Gakki from '../components/gakki.vue'
import Shop from '../components/shop.vue'
import Todolist from '../components/todolist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/gakki',
      name: 'gakki',
      component: Gakki
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
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
