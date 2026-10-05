<script setup lang="ts">
import { onMounted, ref } from 'vue'
import bannerCongreso from '@/assets/congreso/2026/banner-lanzamientov2.webp'
import { links, pub } from '@/services/site'

interface Slide {
  image: string
  link: string
  alt: string
}

const slides: Slide[] = [
  {
    image: bannerCongreso,
    link: '/congreso',
    alt: 'IV Congreso Internacional para la prevención de los ahogamientos, 24 al 26 de agosto de 2026',
  },
  {
    image: pub('/img/slides/02.webp'),
    link: links.donate,
    alt: 'Seguridad, bienestar y mejores oportunidades para la población infantil. Donar',
  },
  {
    image: pub('/img/slides/03.webp'),
    link: '/talleres',
    alt: 'Talleres y cursos en Primeros Auxilios y RCP. Quiero inscribirme',
  },
]

const INTERVAL = 7000
const current = ref(0)
const paused = ref(false)
const autoplay = ref(true)
let touchX = 0

const isExternal = (url: string) => url.startsWith('http')

const goTo = (i: number) => (current.value = (i + slides.length) % slides.length)
const next = () => goTo(current.value + 1)
const prev = () => goTo(current.value - 1)

const onTouchStart = (e: TouchEvent) => (touchX = e.touches[0]?.clientX ?? 0)
const onTouchEnd = (e: TouchEvent) => {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX
  if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
}

// El avance automático lo dispara el final de la barra de progreso (CSS), así pausar es trivial.
onMounted(() => (autoplay.value = !matchMedia('(prefers-reduced-motion: reduce)').matches))
</script>

<template>
  <section
    class="group/slider relative overflow-hidden rounded-[2rem] bg-plum-900 shadow-2xl shadow-plum-900/20"
    aria-roledescription="carrusel"
    aria-label="Campañas destacadas"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
    @keydown.left="prev"
    @keydown.right="next"
  >
    <div class="relative aspect-[2/1]">
      <div
        v-for="(slide, i) in slides"
        :key="slide.image"
        :class="[
          'absolute inset-0 transition-all duration-700 ease-out',
          i === current
            ? 'z-10 scale-100 opacity-100'
            : 'pointer-events-none z-0 scale-105 opacity-0',
        ]"
        :aria-hidden="i !== current"
      >
        <component
          :is="isExternal(slide.link) ? 'a' : 'RouterLink'"
          v-bind="
            isExternal(slide.link)
              ? { href: slide.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: slide.link }
          "
          :tabindex="i === current ? 0 : -1"
          class="block size-full"
        >
          <!-- Fondo difuminado para que el banner nunca se recorte -->
          <img
            :src="slide.image"
            alt=""
            class="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl"
          />
          <img
            :src="slide.image"
            :alt="slide.alt"
            :loading="i === 0 ? 'eager' : 'lazy'"
            :fetchpriority="i === 0 ? 'high' : 'auto'"
            class="relative size-full object-contain"
          />
        </component>
      </div>
    </div>

    <button
      v-for="dir in ['prev', 'next'] as const"
      :key="dir"
      type="button"
      :aria-label="dir === 'prev' ? 'Anterior' : 'Siguiente'"
      :class="[
        'absolute top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl text-plum-800 opacity-0 shadow-lg transition group-hover/slider:opacity-100 hover:scale-110 hover:bg-white focus-visible:opacity-100 sm:grid',
        dir === 'prev' ? 'left-4' : 'right-4',
      ]"
      @click="dir === 'prev' ? prev() : next()"
    >
      <i :class="['mdi', dir === 'prev' ? 'mdi-chevron-left' : 'mdi-chevron-right']" />
    </button>

    <div class="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-5">
      <button
        v-for="(slide, i) in slides"
        :key="slide.image"
        type="button"
        :aria-label="`Ir a la diapositiva ${i + 1}`"
        :aria-current="i === current"
        class="relative h-1.5 overflow-hidden rounded-full bg-white/40 transition-all duration-300"
        :class="i === current ? 'w-12' : 'w-5 hover:bg-white/70'"
        @click="goTo(i)"
      >
        <span
          v-if="i === current && autoplay"
          :key="`p-${current}`"
          class="progress absolute inset-0 origin-left bg-white"
          :style="{
            animationDuration: `${INTERVAL}ms`,
            animationPlayState: paused ? 'paused' : 'running',
          }"
          @animationend="next"
        />
      </button>
    </div>
  </section>
</template>

<style scoped>
.progress {
  animation: progress linear forwards;
}
@keyframes progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
