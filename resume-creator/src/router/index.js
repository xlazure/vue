import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/creator',
      name: 'cretor',
      component: () => import('../views/CreatorView.vue'),
      children: [
        {
          path:"/",
          name:"personal-data",
          component: () => import('../views/Creator/PersonalDataView.vue'),
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/404.vue'),
    },
  ]
})

export default router
