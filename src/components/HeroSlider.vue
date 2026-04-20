<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import bannerLanzamientov2 from '@/assets/congreso/2026/banner-lanzamientov2.webp'

interface Slide {
  image: string
  link: string
  title?: string
}

const slides: Slide[] = [
  { image: bannerLanzamientov2, link: '/congreso' },
  { image: '/img/slides/02.webp', link: 'https://checkout.wompi.co/l/VPOS_2DN3Dr' },
  { image: '/img/slides/03.png', link: '/' },
]

const isExternal = (url: string) => url.startsWith('http')

const currentSlide = ref(0)
const progress = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let progressTimer: ReturnType<typeof setInterval> | null = null

const goTo = (index: number) => {
  currentSlide.value = index
  progress.value = 0
}
const next = () => goTo((currentSlide.value + 1) % slides.length)
const prev = () => goTo((currentSlide.value - 1 + slides.length) % slides.length)

const startAutoplay = () => {
  autoplayTimer = setInterval(next, 15000)
  progressTimer = setInterval(() => {
    progress.value = Math.min(progress.value + 0.2, 100)
    if (progress.value >= 100) progress.value = 0
  }, 30)
}

onMounted(startAutoplay)
onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  if (progressTimer) clearInterval(progressTimer)
})
</script>

<template>
  <section class="relative w-full overflow-hidden bg-gray-900">
    <!-- Slides -->
    <div class="relative w-full" style="padding-bottom: 43.75%">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <component
          :is="isExternal(slide.link) ? 'a' : 'RouterLink'"
          v-bind="
            isExternal(slide.link)
              ? { href: slide.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: slide.link }
          "
          class="block w-full h-full group"
        >
          <img
            :src="slide.image"
            :alt="slide.title ?? 'Slide'"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            v-if="slide.title"
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end"
          >
            <div class="container mx-auto px-6 pb-10">
              <h2 class="text-3xl md:text-5xl font-bold text-white">{{ slide.title }}</h2>
            </div>
          </div>
        </component>
      </div>
    </div>

    <!-- Arrows -->
    <button
      aria-label="Anterior"
      class="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
      @click="prev"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      aria-label="Siguiente"
      class="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
      @click="next"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :aria-label="`Ir al slide ${i + 1}`"
        class="h-1.5 rounded-full transition-all duration-300"
        :class="i === currentSlide ? 'w-10 bg-white' : 'w-6 bg-white/50 hover:bg-white/75'"
        @click="goTo(i)"
      />
    </div>

    <!-- Progress bar -->
    <div
      class="absolute bottom-0 left-0 h-1 bg-rose-500 z-20 transition-all duration-100 ease-linear"
      :style="{ width: `${progress}%` }"
    />
  </section>
</template>
