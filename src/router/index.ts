import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: axios */ '@/views/axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
