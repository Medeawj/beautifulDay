import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import search from '@/views/search/Search'
import list from '@/views/list/list'

Vue.use(Router)

export default new Router({
  mode: 'hash', 
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,   
    },
    {
      path: '/list',
      name: 'list',
      component: list,    
    },
    {
      path:'/search',
      name:'search',
      component:search,
    },
   
  ]
})
