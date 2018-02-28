import Vue from 'vue'
import Router from 'vue-router'
import MyPage from '@/components/MyPage'// vue中@指src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPage',
      component: MyPage
    }
  ]
})
