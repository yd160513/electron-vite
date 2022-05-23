import { createRouter, createWebHashHistory } from 'vue-router'

const { a, b } = { a: 1, b: 2 }

const router = createRouter({
  routes: [],
  history: createWebHashHistory('/')
})

export default router