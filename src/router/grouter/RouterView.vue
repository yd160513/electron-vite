<template>
  <component :is="comp"></component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from './index.js'

const router = useRouter()

const comp = computed(() => {
  const route = router.routes.find((route: any) => route.path === router.current.value)
  return route ? route.component : null
})

</script>

<style scoped>
</style>
