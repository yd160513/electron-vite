<template>
  <div @click="add">{{ count }}</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { useStore } from '../../store/gvuex'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)

function add() {
  store.commit('ADD')
}
</script>