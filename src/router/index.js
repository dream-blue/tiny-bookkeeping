import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Input from '@/components/Input'
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
      path: '/index',
      name: 'Index',
      component: Index
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
      path: '/input',
      name: 'Input',
      component: Input
    },
     {
      path: '/get_list',
      name: 'GetList',
      component: GetList
    },
     {
      path: '/get_detail',
      name: 'GetDetail',
      component: GetDetail
    },
  ]
})
