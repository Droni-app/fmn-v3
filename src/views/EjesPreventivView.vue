<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import TallerCard from '@/components/TallerCard.vue'
import { talleres } from '@/services/talleres'
import { pub } from '@/services/site'
import imgEje01 from '@/assets/ejes/ejepreventivo01.webp'
import imgEje02 from '@/assets/ejes/ejepreventivo02.webp'
import imgEje03 from '@/assets/ejes/ejepreventivo03.webp'
import imgContenido from '@/assets/ejes/contenido-programatico.webp'
import img8000Personas from '@/assets/ejes/8000-personas.webp'

const galeria = [imgEje01, imgEje03, imgEje02]
</script>

<template>
  <div>
    <h1 class="sr-only">Eje preventivo</h1>
    <img
      :src="pub('/img/banners/eje-preventivov2.webp')"
      alt="Eje preventivo"
      fetchpriority="high"
      class="w-full"
    />

    <section class="section-y container-page">
      <div class="grid gap-4 sm:grid-cols-3">
        <img
          v-for="(src, i) in galeria"
          :key="src"
          v-reveal="i * 120"
          :src="src"
          alt="Actividades del eje preventivo"
          loading="lazy"
          class="aspect-[3/2] w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
      <img
        v-reveal
        :src="imgContenido"
        alt="Contenido programático"
        loading="lazy"
        class="mx-auto mt-16 w-full max-w-4xl"
      />
    </section>

    <img
      v-reveal
      :src="img8000Personas"
      alt="Más de 8.000 personas capacitadas"
      loading="lazy"
      class="w-full"
    />

    <section class="section-y container-page">
      <SectionHeading
        eyebrow="Capacítate, actúa y protege"
        title="Talleres"
        subtitle="Un portafolio de talleres y cursos para que aprendas a prevenir accidentes, actuar en situaciones de riesgo y proteger vidas. Conviértete en el primer eslabón de la cadena preventiva."
      />
      <div class="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TallerCard
          v-for="(taller, i) in talleres"
          :key="taller.slug"
          v-reveal="(i % 3) * 100"
          :taller="taller"
        />
      </div>
      <div class="mt-12 text-center">
        <RouterLink to="/talleres" class="btn btn-primary">
          Más información e inscripciones <i class="mdi mdi-arrow-right" />
        </RouterLink>
      </div>
    </section>

    <img
      v-reveal
      :src="pub('/img/talleres/v2/CULTURA-PREVENTIVA.webp')"
      alt="Cultura preventiva"
      loading="lazy"
      class="w-full"
    />
  </div>
</template>
