import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
    path: '/TheInscription',
    name : 'TheInscription',
    component: () => import( './views/TheInscription.vue')
  },
  {
  path: '/TheConnexion',
  name : 'TheConnexion',
  component: () => import( './views/TheConnexion.vue')
  },{
  path: '/TheNewTopic',
  name : 'TheNewTopic',
  component: () => import( './views/TheNewTopic.vue')
  }
  ]
})
