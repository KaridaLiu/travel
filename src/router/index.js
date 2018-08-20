import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Search from '@/components/search/Search'
import Login from '@/components/login/Login'
import Strategy from '@/components/strategy/Strategy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    }
  ]
})
