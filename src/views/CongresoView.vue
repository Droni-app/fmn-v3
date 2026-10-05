<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import YoutubeLite from '@/components/YoutubeLite.vue'
import { whatsappMessage } from '@/services/site'
import bannerCongreso from '@/assets/congreso/2026/banner-lanzamientov2.webp'

const packs = [
  {
    name: 'Pack académico y práctico',
    days: '2 días',
    dates: '24 y 25 de agosto de 2026',
    price: '$750.000 COP',
    usd: '206 USD',
    featured: false,
    includes: [
      'Acceso a las jornadas académicas teórico-prácticas durante dos días del evento (24 y 25 de agosto).',
      'Souvenirs.',
      'Refrigerios: alimentación ligera am y pm (24 y 25 de agosto).',
      'Almuerzos (24 y 25 de agosto).',
      'Transporte desde Bogotá: salida el 23 de agosto hacia los Hoteles Colsubsidio y retorno a Bogotá el 25 de agosto.',
      'Transporte interno entre los Hoteles Colsubsidio y Piscilago (24 y 25 de agosto).',
    ],
  },
  {
    name: 'Pack completo',
    days: '3 días',
    dates: '24, 25 y 26 de agosto de 2026',
    price: '$850.000 COP',
    usd: '240 USD',
    featured: true,
    includes: [
      'Agenda académica teórico-práctica (24 y 25 de agosto) + tercer día de taller práctico (26 de agosto).',
      'Souvenirs.',
      'Refrigerios: am (24, 25 y 26 de agosto) y pm (24 y 25 de agosto).',
      'Almuerzos (24, 25 y 26 de agosto).',
      'Transporte desde Bogotá: salida el 23 de agosto hacia los Hoteles Colsubsidio y retorno a Bogotá el 26 de agosto, 4:30 pm.',
      'Transporte interno entre los Hoteles Colsubsidio y Piscilago (24, 25 y 26 de agosto).',
    ],
  },
]

const videos = [
  'XZT3xdEQ6Hs', // lanzamiento 4ta edición — primero
  '9Hyzb3WYT1Y',
  'CzX0EpiXktA',
  'cFveqPbSf34',
  'Wr94esKErdA',
  '4XADq6sINyU',
  'ExmuwZaj2h0',
  '2GKFeAlAV3c',
  '8NcAx5y8oJQ',
  'nEVXSbYkKs0',
  'gtZnQ4c-UgU',
  '4VW-zqIndP4',
  'LfW5ndScdyI',
  'u7dMewqXo3o',
  'XhUGtveUJsg',
  'HfHqWiWXPoI',
  'DmvhE9VqZ-0',
]
</script>

<template>
  <div class="bg-ocean-900">
    <img
      :src="bannerCongreso"
      alt="IV Congreso Internacional para la prevención de los ahogamientos"
      fetchpriority="high"
      class="w-full"
    />

    <section class="relative isolate overflow-hidden text-white">
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-b from-[#2f5fae] via-[#273d98] to-ocean-900"
      />
      <div class="congreso-wave wave-a" />
      <div class="congreso-wave wave-b" />
      <div class="congreso-wave wave-c" />
      <div class="congreso-wave wave-d" />

      <div class="container-page relative max-w-5xl! py-16 text-center md:py-24">
        <p class="animate-fade-up font-display text-7xl font-black tracking-tight sm:text-8xl">
          IV
        </p>
        <h1
          class="mt-3 animate-fade-up font-display text-3xl leading-tight font-extrabold [animation-delay:100ms] sm:text-5xl"
        >
          Congreso Internacional
        </h1>
        <p class="mt-2 text-lg font-medium sm:text-2xl">para la prevención de los</p>
        <p class="mt-1 font-display text-4xl font-bold italic sm:text-6xl">ahogamientos</p>
        <p
          class="mx-auto mt-6 max-w-3xl font-display text-lg leading-tight font-extrabold text-[#f4be56] uppercase sm:text-3xl"
        >
          y la gestión del riesgo en destinos turísticos acuáticos
        </p>

        <div v-reveal class="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div class="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
            <i class="mdi mdi-calendar-heart text-3xl text-[#61d3f3]" />
            <p class="mt-2 font-display text-xl font-extrabold">24 al 26 de agosto</p>
            <p class="text-white/70">2026</p>
          </div>
          <div class="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
            <i class="mdi mdi-map-marker-radius text-3xl text-[#f5c638]" />
            <p class="mt-2 font-display text-xl font-extrabold">Piscilago Colsubsidio</p>
            <p class="text-white/70">Vía Bogotá – Girardot, Km 105</p>
          </div>
          <div class="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
            <i class="mdi mdi-pine-tree text-3xl text-[#a6dbef]" />
            <p class="mt-2 font-display text-xl font-extrabold">Nilo</p>
            <p class="text-white/70">Cundinamarca</p>
          </div>
        </div>

        <div class="mx-auto mt-10 grid max-w-3xl gap-6 text-sm sm:grid-cols-2 sm:text-base">
          <p>
            <span class="text-white/70">Organiza:</span><br /><strong class="text-lg"
              >Fundación Mariana Novoa</strong
            >
          </p>
          <p>
            <span class="text-white/70">En alianza con:</span><br /><strong class="text-lg"
              >Piscilago · Colsubsidio Hoteles</strong
            >
          </p>
        </div>
        <p class="mt-6 text-sm text-white/60">Vigilado Supersubsidio</p>

        <!-- Packs -->
        <div class="mt-16 grid items-start gap-6 text-left md:grid-cols-2">
          <article
            v-for="(pack, i) in packs"
            :key="pack.name"
            v-reveal="i * 150"
            :class="[
              'relative rounded-[2rem] p-6 ring-1 backdrop-blur sm:p-8',
              pack.featured
                ? 'bg-white text-ocean-900 shadow-2xl ring-white md:-mt-4'
                : 'bg-white/10 ring-white/20',
            ]"
          >
            <span
              v-if="pack.featured"
              class="absolute -top-3 right-6 rounded-full bg-[#f4be56] px-4 py-1 font-display text-sm font-bold text-ocean-900"
            >
              Más completo
            </span>
            <p
              :class="[
                'font-display text-sm font-bold tracking-[0.2em] uppercase',
                pack.featured ? 'text-ocean-600' : 'text-[#61d3f3]',
              ]"
            >
              {{ pack.days }}
            </p>
            <h2 class="mt-1 font-display text-2xl font-extrabold sm:text-3xl">{{ pack.name }}</h2>
            <p :class="pack.featured ? 'text-ocean-900/70' : 'text-white/70'">{{ pack.dates }}</p>
            <p class="mt-6 font-display text-3xl font-black sm:text-4xl">
              {{ pack.price }}
              <span
                :class="[
                  'block text-base font-semibold',
                  pack.featured ? 'text-ocean-600' : 'text-[#9dd9ee]',
                ]"
              >
                {{ pack.usd }}
              </span>
            </p>
            <h3 class="mt-6 mb-3 font-bold">¿Qué incluye?</h3>
            <ul class="space-y-3">
              <li v-for="item in pack.includes" :key="item" class="flex gap-3">
                <i
                  :class="[
                    'mdi mdi-check-circle text-xl leading-tight',
                    pack.featured ? 'text-ocean-500' : 'text-[#61d3f3]',
                  ]"
                />
                <span :class="pack.featured ? 'text-ocean-900/80' : 'text-white/85'">{{
                  item
                }}</span>
              </li>
            </ul>
            <a
              :href="
                whatsappMessage(`Hola, quiero inscribirme al Congreso: ${pack.name} (${pack.days})`)
              "
              target="_blank"
              rel="noopener"
              :class="[
                'btn mt-8 w-full',
                pack.featured ? 'bg-ocean-600 text-white hover:bg-ocean-700' : 'btn-light',
              ]"
            >
              <i class="mdi mdi-whatsapp text-xl" /> Inscribirme
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="section-y">
      <div class="container-page">
        <SectionHeading light eyebrow="Congreso Internacional" title="Galería de videos" />
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <YoutubeLite
            v-for="(video, i) in videos"
            :key="video"
            v-reveal="(i % 4) * 80"
            :id="video"
            :title="`Congreso Internacional – video ${i + 1}`"
            vertical
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.congreso-wave {
  position: absolute;
  z-index: -1;
  left: -8%;
  width: 116%;
  border-radius: 9999px;
  background: rgba(13, 48, 136, 0.34);
  animation:
    wave-undulate 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite,
    wave-drift 24s ease-in-out infinite;
  clip-path: polygon(
    0% 56%,
    12.5% 49%,
    25% 56%,
    37.5% 63%,
    50% 56%,
    62.5% 49%,
    75% 56%,
    87.5% 63%,
    100% 56%,
    100% 100%,
    0% 100%
  );
}
.wave-a {
  top: 8%;
  height: 140px;
  animation-duration: 10s, 26s;
}
.wave-b {
  top: 26%;
  height: 170px;
  background: rgba(28, 63, 157, 0.34);
  animation-duration: 13s, 31s;
  animation-direction: reverse, reverse;
}
.wave-c {
  top: 52%;
  height: 190px;
  background: rgba(20, 55, 149, 0.36);
  animation-duration: 11s, 28s;
  animation-delay:
    -3s,
    -4s;
}
.wave-d {
  top: 78%;
  height: 220px;
  background: rgba(15, 44, 120, 0.44);
  animation-duration: 15s, 36s;
  animation-direction: reverse, reverse;
}

@keyframes wave-undulate {
  0%,
  100% {
    clip-path: polygon(
      0% 56%,
      12.5% 49%,
      25% 56%,
      37.5% 63%,
      50% 56%,
      62.5% 49%,
      75% 56%,
      87.5% 63%,
      100% 56%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 62%,
      12.5% 69%,
      25% 62%,
      37.5% 55%,
      50% 62%,
      62.5% 69%,
      75% 62%,
      87.5% 55%,
      100% 62%,
      100% 100%,
      0% 100%
    );
  }
}
@keyframes wave-drift {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-3.2%) translateY(-8px);
  }
}
</style>
