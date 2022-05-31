import { createRouter, createWebHashHistory } from 'vue-router'

import blobApplication from './../components/blobApplication/index.vue'
import uploadFile from './../components/uploadFile/index.vue'
import bell from './../components/bell/index.vue'

const router = createRouter({
  routes: [
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
  ],
  history: createWebHashHistory('/')
})

export default router