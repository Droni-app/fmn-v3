<script setup lang="ts">
import MediaSplit from '@/components/MediaSplit.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatCounter from '@/components/StatCounter.vue'
import { pub, whatsappMessage } from '@/services/site'
import imgCada48h from '@/assets/asalvo/cada-48h.webp'
import imgOpes from '@/assets/asalvo/opes.webp'
import imgDesahogate from '@/assets/asalvo/desahogate.webp'

const valores = [
  { label: 'Concientizar', icon: 'mdi-bullhorn-outline', color: 'from-ocean-500 to-ocean-700' },
  { label: 'Prevenir', icon: 'mdi-shield-check-outline', color: 'from-cyan-400 to-ocean-500' },
  { label: 'Rescatar', icon: 'mdi-lifebuoy', color: 'from-teal-400 to-cyan-600' },
]

const cursos = [
  {
    title: 'Curso de operación de piscinas y estructuras similares',
    text: 'Programa de capacitación enfocado en la Ley 1209 de 2008, que tiene como objetivo ayudar a administradores y trabajadores del sector acuático a garantizar condiciones óptimas para el buen funcionamiento de estos espacios, velando por la prevención de accidentes y la salud de los usuarios.',
    image: imgOpes,
  },
  {
    title: 'Taller de salvamento acuático – Actualización',
    text: 'Capacitación de actualización para salvavidas, socorristas y personal de seguridad acuática. Refuerza técnicas de rescate, primeros auxilios acuáticos y uso de equipos especializados.',
    image: pub('/img/talleres/v2/CAP08.webp'),
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <header class="relative isolate flex min-h-[70vh] items-end overflow-hidden md:min-h-[80vh]">
      <img
        :src="pub('/img/banners/BANNER-AHOGAMIENTO.webp')"
        alt=""
        fetchpriority="high"
        class="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-900 via-ocean-900/40 to-transparent"
      />
      <div class="container-page pb-16 text-center text-white md:pb-24">
        <p class="eyebrow mb-4 animate-fade-up justify-center text-ocean-400!">ASALVO</p>
        <h1
          class="mx-auto max-w-4xl animate-fade-up font-display text-3xl font-extrabold [animation-delay:100ms] sm:text-5xl lg:text-6xl"
        >
          El ahogamiento es un evento rápido y silencioso
        </h1>
      </div>
    </header>

    <!-- Cifra -->
    <section class="bg-ocean-900 py-16 text-center text-white md:py-24">
      <div class="container-page">
        <p
          class="font-display text-xs font-bold tracking-[0.2em] text-ocean-400 uppercase sm:text-sm"
        >
          Cifras de ahogamiento Colombia · Enero – Julio 2025
        </p>
        <StatCounter
          :value="406"
          class="mt-4 block font-display text-7xl leading-none font-black text-white md:text-9xl"
        />
        <p class="mx-auto mt-4 max-w-2xl text-xl font-semibold text-white/80 md:text-2xl">
          personas han perdido la vida por ahogamiento en el territorio nacional
        </p>
      </div>
    </section>
    <img
      :src="pub('/img/ahogamientoAsalvo/CIFRAS-Y-CONTEXTO.webp')"
      alt="Cifras y contexto del ahogamiento en Colombia"
      loading="lazy"
      class="w-full"
    />

    <!-- Mapa Flourish -->
    <section class="section-y container-page">
      <SectionHeading
        eyebrow="Enero – Junio 2025"
        title="Impacto sociodemográfico – Muertes por ahogamiento en Colombia"
      />
      <div class="card overflow-hidden p-2">
        <iframe
          src="https://flo.uri.sh/visualisation/24511098/embed"
          title="Mapa de muertes por ahogamiento en Colombia"
          loading="lazy"
          class="h-[520px] w-full rounded-[1.25rem] md:h-[680px]"
        />
      </div>
    </section>

    <!-- Cita -->
    <section class="bg-white py-16 md:py-24">
      <figure v-reveal class="container-page max-w-4xl text-center">
        <i class="mdi mdi-format-quote-open text-6xl text-ocean-400" />
        <blockquote
          class="font-display text-xl leading-relaxed font-medium text-plum-800 italic md:text-3xl"
        >
          Mi Mariana se fue al cielo antes de tiempo. Con la fuerza de mi corazón, transformó mi
          dolor en esperanza de vida para que los niños que viven en la tierra no cierren sus ojos
          dentro del agua. Es mi misión, es su legado, es el regalo que mi hija me dejó.
        </blockquote>
        <figcaption class="mt-6 font-semibold text-brand-600">
          Hortensia Espitaleta · Directora de la Fundación Mariana Novoa
        </figcaption>
      </figure>
    </section>

    <!-- Qué es ASALVO + valores -->
    <section
      class="relative isolate overflow-hidden bg-gradient-to-br from-ocean-700 to-ocean-500 py-16 text-white md:py-24"
    >
      <div
        class="absolute -top-20 -right-20 -z-10 size-96 animate-float rounded-full bg-white/10 blur-3xl"
      />
      <div class="container-page">
        <p v-reveal class="mx-auto max-w-4xl text-center text-xl leading-relaxed md:text-2xl">
          <strong>ASALVO</strong> es una marca conjunta de la Fundación Mariana Novoa que tiene como
          propósito disminuir las cifras de personas ahogadas en el país, generando conciencia a
          través de los diferentes métodos de prevención, la importancia de la supervisión visual
          permanente y el conocimiento e implementación de medidas de seguridad en piscinas bajo la
          normatividad de la Ley 1209 de 2008.
        </p>
        <div class="mt-14 grid gap-6 sm:grid-cols-3">
          <div
            v-for="(v, i) in valores"
            :key="v.label"
            v-reveal="i * 120"
            class="rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
          >
            <span
              :class="[
                'mx-auto mb-4 grid size-20 place-items-center rounded-full bg-gradient-to-br text-4xl shadow-lg',
                v.color,
              ]"
            >
              <i :class="['mdi', v.icon]" />
            </span>
            <h3 class="text-2xl font-bold">{{ v.label }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section-y container-page grid gap-10">
      <img
        v-reveal
        :src="imgCada48h"
        alt="Cada 48 horas"
        loading="lazy"
        class="w-full rounded-[2rem] shadow-xl"
      />
      <img
        v-reveal
        :src="pub('/img/ahogamientoAsalvo/5-TIPS.webp')"
        alt="5 tips responsables para prevenir el ahogamiento"
        loading="lazy"
        class="mx-auto w-full max-w-4xl rounded-[2rem] shadow-xl"
      />
    </section>

    <!-- Cursos -->
    <section
      v-for="(c, i) in cursos"
      :key="c.title"
      :class="['section-y', i % 2 === 0 && 'bg-white']"
    >
      <div class="container-page">
        <MediaSplit
          :image="c.image"
          :alt="c.title"
          :title="c.title"
          eyebrow="Capacítate"
          :reverse="i % 2 === 1"
        >
          <p class="prose-body">{{ c.text }}</p>
          <a
            :href="whatsappMessage(`Hola, quiero inscribirme en: ${c.title}`)"
            target="_blank"
            rel="noopener"
            class="btn mt-8 bg-ocean-600 text-white shadow-lg shadow-ocean-600/30 hover:bg-ocean-700"
          >
            ¡Inscríbete! <i class="mdi mdi-arrow-right" />
          </a>
        </MediaSplit>
      </div>
    </section>

    <!-- Podcast -->
    <section class="container-page pb-16 md:pb-24">
      <div
        v-reveal:zoom
        class="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum-700 to-brand-500 p-6 text-white shadow-2xl sm:p-10 md:grid-cols-2 lg:p-14"
      >
        <div class="text-center md:text-left">
          <img
            :src="imgDesahogate"
            alt="Desahógate"
            loading="lazy"
            class="mx-auto mb-6 w-64 md:mx-0"
          />
          <h2 class="font-display text-3xl font-extrabold md:text-4xl">
            El podcast que salvará tu vida
          </h2>
          <a
            href="https://www.asalvo.org/"
            target="_blank"
            rel="noopener"
            class="btn btn-light mt-8"
          >
            <i class="mdi mdi-podcast" /> Escuchar Desahógate
          </a>
        </div>
        <iframe
          class="aspect-video w-full rounded-2xl"
          src="https://widget.spreaker.com/player?show_id=4069766&theme=dark&playlist=show&playlist-continuous=true"
          title="Desahógate – Podcast"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>
