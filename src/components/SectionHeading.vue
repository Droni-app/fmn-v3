<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    eyebrow?: string
    subtitle?: string
    align?: 'center' | 'left'
    light?: boolean
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div
    v-reveal
    :class="['mb-10 md:mb-14', align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl']"
  >
    <p v-if="eyebrow" :class="['eyebrow mb-3', light && 'text-sun-300!']">
      <span class="h-0.5 w-6 rounded-full bg-current" />{{ eyebrow }}
    </p>
    <h2 :class="['heading', light && 'text-white!']">{{ title }}</h2>
    <p v-if="subtitle" :class="['lead mt-4', light && 'text-white/80!']">{{ subtitle }}</p>
  </div>
</template>
