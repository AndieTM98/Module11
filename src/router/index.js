import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteGenerator from '../views/QuoteGenerator.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id(\\d+)?/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:id(\\d+)?/quote-generator',
    name: 'quote-generator',
    component: () => import('../views/QuoteGenerator.vue')
  },
  {
    path: '/:id(\\d+)?/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router

