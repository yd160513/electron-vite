<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { useMouse } from "../utils/mouse";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { x, y } = useMouse();

    console.log(x, y);
    return {}
  },
});
</script>

<style></style>
