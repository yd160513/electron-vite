<template>
  {{ msg }}
  <upload-file></upload-file>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import uploadFile from './uploadFile/index.vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },

  components: {
    uploadFile
  },

  setup() {
    return {}
  }
})

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
