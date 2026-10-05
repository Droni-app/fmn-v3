<script setup lang="ts">
import MediaSplit from '@/components/MediaSplit.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import YoutubeLite from '@/components/YoutubeLite.vue'
import { pub, whatsappMessage } from '@/services/site'
import imgPresencial from '@/assets/voluntariado/vpresencial.webp'

const modalidades = [
  {
    eyebrow: 'Para personas',
    title: 'Voluntariado presencial',
    text: '¿Te gusta regalar sonrisas y momentos únicos? ¡Sube con nosotros, sé voluntario en la Fundación Mariana Novoa y comparte con nuestros 110 niños en Altos de Serrezuela!',
    image: imgPresencial,
    message: 'Hola, quiero ser voluntario/a presencial',
  },
  {
    eyebrow: 'Para empresas',
    title: 'Voluntariado corporativo',
    text: '¿Quieres apoyar una gran causa que contribuye a una transformación en la sociedad? ¡La responsabilidad social de tu empresa y la Fundación Mariana Novoa pueden trabajar de la mano!',
    image: pub('/img/voluntariado/VOLUNTARIADO-CORP.webp'),
    message: 'Hola, quiero información sobre voluntariado corporativo',
  },
]

const videos = [
  'lhxEtdr_2Ko',
  'YIlrgrF3UcY',
  'VU7XEfiiPpU',
  'Salls67GZII',
  'Cx050LQmT5Q',
  'YD7i9dGPZ8I',
  'T7UtB7aEAYM',
  'HGaZ05ZWpDE',
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Súmate"
      title="Invitación al voluntariado"
      subtitle="Regala tu tiempo y tu talento a los niños, niñas y adultos mayores de Altos de Serrezuela."
      tone="plum"
    />

    <div class="container-page -mt-16 md:-mt-24">
      <YoutubeLite
        v-reveal:zoom
        id="M6ibmG5Glog"
        title="Invitación al voluntariado"
        class="mx-auto max-w-4xl shadow-2xl"
      />
    </div>

    <section
      v-for="(m, i) in modalidades"
      :key="m.title"
      :class="['section-y', i % 2 === 1 && 'bg-white']"
    >
      <div class="container-page">
        <MediaSplit
          :image="m.image"
          :alt="m.title"
          :eyebrow="m.eyebrow"
          :title="m.title"
          :reverse="i % 2 === 1"
        >
          <p class="prose-body">{{ m.text }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="whatsappMessage(m.message)"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp"
            >
              <i class="mdi mdi-whatsapp text-xl" /> Quiero participar
            </a>
            <RouterLink to="/contacto" class="btn btn-outline">Llenar formulario</RouterLink>
          </div>
        </MediaSplit>
      </div>
    </section>

    <section class="section-y bg-plum-900">
      <div class="container-page">
        <SectionHeading light eyebrow="Voluntariado" title="Galería de videos" />
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <YoutubeLite
            v-for="(video, i) in videos"
            :key="video"
            v-reveal="(i % 4) * 80"
            :id="video"
            :title="`Voluntariado – video ${i + 1}`"
            vertical
          />
        </div>
      </div>
    </section>
  </div>
</template>
