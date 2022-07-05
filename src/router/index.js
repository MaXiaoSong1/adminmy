import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
