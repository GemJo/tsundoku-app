import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../Component/User/Login/LoginView.vue'),
      meta: {
        layout: 'anon',
      },
    },
  ]
})

export default router
