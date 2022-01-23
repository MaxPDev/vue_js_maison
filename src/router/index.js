import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cuisine',
    name: 'cuisine',
    component: () => import('../views/Cuisine.vue')
  },
  {
    path: '/chambre',
    name: 'chambre',
    component: () => import('../views/Chambre.vue')
  },
  {
    path: '/grenier',
    name: 'grenier',
    component: () => import('../views/Grenier.vue')
  },
  {
    path: '/salon',
    name: 'salon',
    component: () => import('../views/Salon.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
