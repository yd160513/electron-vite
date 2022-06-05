import { createRouter, createWebHashHistory } from 'vue-router'

import blobApplication from './../components/blobApplication/index.vue'
import uploadFile from './../components/uploadFile/index.vue'
import bell from './../components/bell/index.vue'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'blobApplication'
    }
  },
  {
    name: 'blobApplication',
    path: '/blobApplication',
    component: blobApplication,
  },
  {
    name: 'uploadFile',
    path: '/uploadFile',
    component: uploadFile,
  },
  {
    name: 'bell',
    path: '/bell',
    component: bell,
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router