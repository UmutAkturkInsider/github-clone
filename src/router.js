import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/github-clone',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory('/github-clone'),
  routes
})

export default router
