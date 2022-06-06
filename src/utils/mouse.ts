import { ref, onMounted, onUnmounted } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
    console.log('update', x.value, y.value)
  }

  onMounted(() => window.addEventListener('mousemove', update))

  onUnmounted(() => window.removeEventListener('mousemove', update))

  return {
    x,
    y
  }
}