import { createRouter, createWebHistory } from 'vue-router'

// Utility function to get view filenames
function getViewFilenames() {
  const context = import.meta.glob('../views/creator/*.vue')
  return Object.keys(context).map((key) => key.replace(/^\.\.\/views\/creator\/(.*).vue$/, '$1'))
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/creator',
      name: 'creator',
      component: () => import('../views/CreatorView.vue'),
      children: []
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/404.vue')
    }
  ]
})

const viewFilenames = getViewFilenames()
viewFilenames.forEach((filename) => {
  const subRoute = {
    path: filename.toLowerCase(),
    name: filename.toLowerCase(),
    component: () => import(`../views/creator/${filename}.vue`)
  }
  router.addRoute('creator', subRoute)
})

export default router
