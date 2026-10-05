<script setup lang="ts">
/** Número que cuenta desde 0 cuando entra en pantalla. */
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<{ value: number; prefix?: string; suffix?: string }>(), {
  prefix: '',
  suffix: '',
})

const el = useTemplateRef<HTMLElement>('el')
const current = ref(0)
const format = (n: number) => n.toLocaleString('es-CO')
let observer: IntersectionObserver | undefined

const animate = () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    current.value = props.value
    return
  }
  const start = performance.now()
  const duration = 1800
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    current.value = Math.round(props.value * (1 - Math.pow(1 - t, 4)))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    animate()
    observer?.disconnect()
  })
  if (el.value) observer.observe(el.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <span ref="el" class="tabular-nums" :aria-label="`${prefix}${format(value)}${suffix}`">
    <span aria-hidden="true">{{ prefix }}{{ format(current) }}{{ suffix }}</span>
  </span>
</template>
