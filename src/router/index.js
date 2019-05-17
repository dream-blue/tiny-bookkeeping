import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Out from '@/components/Out'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Referring from '@/components/Referring'
import GetList from '@/components/GetList'
import GetDetail from '@/components/GetDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/logout',
      name: 'Out',
      component: Out
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/refer',
      name: 'Referring',
      meta: {
        requireAuth:true
      },
      component: Referring
    },
     {
      path: '/get_list',
      name: 'GetList',
      component: GetList
    },
     {
      path: '/get_detail',
      name: 'GetDetail',
       meta: {
        requireAuth:true
      },
      component: GetDetail
    },
  ]
})
