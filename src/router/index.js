import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brewery from '../views/Brewery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // can destructure this but being quick for now
  {
    path: '/brewery/:id',
    name: 'Brewery',
    component: Brewery
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
