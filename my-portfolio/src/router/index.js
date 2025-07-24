import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '@/components/HomeSection.vue'
import Test from '@/components/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSection,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    }
  ],
})

export default router
