<template>
  <a :href="`#${props.to}`"></a>
</template>

<script lang="ts" setup>

const props = defineProps({
  to: {
    type: String,
    require: true
  }
})
</script>

<style scoped>
</style>
