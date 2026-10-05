<script setup lang="ts">
/** Bloque de texto + imagen en dos columnas; `reverse` pone la imagen a la izquierda. */
import { computed } from 'vue'

const props = defineProps<{
  image: string
  alt: string
  reverse?: boolean
  eyebrow?: string
  title?: string
}>()
const side = computed(() => (props.reverse ? 'right' : 'left'))
</script>

<template>
  <div class="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
    <div v-reveal:[side] :class="reverse && 'md:order-2'">
      <p v-if="eyebrow" class="eyebrow mb-3">
        <span class="h-0.5 w-6 rounded-full bg-current" />{{ eyebrow }}
      </p>
      <h2 v-if="title" class="heading mb-6">{{ title }}</h2>
      <slot />
    </div>
    <div v-reveal:zoom class="relative" :class="reverse && 'md:order-1'">
      <div
        :class="[
          'absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-300 to-plum-300',
          reverse ? '-translate-x-3 translate-y-3' : 'translate-x-3 translate-y-3',
        ]"
      />
      <img
        :src="image"
        :alt="alt"
        loading="lazy"
        class="w-full rounded-[2rem] object-cover shadow-xl"
      />
    </div>
  </div>
</template>
