import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Search from '@/components/search/Search'
import Login from '@/components/login/Login'
import Strategy from '@/components/strategy/Strategy'
import Travels from '@/components/travels/Travels'
import Answer from '@/components/answer/Answer'
import Friends from '@/components/friends/Friends'
import strategyDetails from '@/components/details/strategy/strategyDetails'
import travelDetails from '@/components/details/travels/travelsDetails'
import answerDetails from '@/components/details/answer/answerDetails'

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
    }, {
      path: '/travels',
      name: 'Travels',
      component: Travels
    }, {
      path: '/answer',
      name: 'Answer',
      component: Answer
    }, {
      path: '/friends',
      name: 'Friends',
      component: Friends
    }, {
      path: '/strategyDetails/:id',
      name: 'strategyDetails',
      component: strategyDetails
    }, {
      path: '/travelDetails/:id',
      name: 'travelDetails',
      component: travelDetails
    }, {
      path: '/answerDetails/:id',
      name: 'answerDetails',
      component: answerDetails
    }
  ]
})
