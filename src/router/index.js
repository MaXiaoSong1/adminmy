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
    component: () => import('../layout'),
    children: [
      {
        path: '/shou',
        component: () => import('../views/shou')
      },
      {
        path: '/user',
        component: () => import('../views/user')
      },
      {
        path: '/roles',
        component: () => import('../views/roles')
      },
      {
        path: '/menus',
        component: () => import('../views/menus')
      },
      {
        path: '/dicts',
        component: () => import('../views/dicts')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
