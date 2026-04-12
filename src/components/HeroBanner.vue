<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  subtitle?: string
  backgroundImage?: string
}>()

const bgStyle = computed(() =>
  props.backgroundImage
    ? { backgroundImage: `url('${props.backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {},
)
</script>

<template>
  <section
    class="hero relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden"
    :style="bgStyle"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-[#ff6c86]/80 via-[#ff4d6d]/70 to-[#ff8fa3]/60" />
    <div class="container relative mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] md:min-h-[500px] flex items-center">
      <div class="w-full max-w-4xl py-16">
        <h1 v-if="title" class="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in-delay">
          {{ subtitle }}
        </p>
        <div v-if="$slots.default" class="mt-8">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.8s ease-out; }
.animate-fade-in-delay { animation: fadeIn 0.8s ease-out 0.2s both; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
