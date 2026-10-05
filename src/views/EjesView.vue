<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import imgAsalvoEjes from '@/assets/ejes/asalvo-ejes.webp'
import imgPadrino from '@/assets/ejes/padrino.webp'

const proyectos = [
  {
    to: '/ejes/preventivo',
    image: imgAsalvoEjes,
    tag: 'Eje preventivo',
    title: 'ASALVO – Prevención',
    text: 'Honrar la memoria de Mariana al contribuir a una sociedad consciente y con mayor atención en la población infantil.',
  },
  {
    to: '/ejes/social',
    image: imgPadrino,
    tag: 'Eje social',
    title: 'Proyecto social',
    text: 'Apoyamos la formación y bienestar de 120 niños, niñas y adolescentes de los barrios Altos de Serrezuela, Lomitas, Capilla, Aurora Alta y Aurora Baja en Bogotá.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Proyectos"
      title="Nuestros proyectos"
      subtitle="Dos ejes de trabajo para proteger la vida y abrir nuevas oportunidades a la infancia."
    />
    <section class="section-y container-page grid gap-8 md:grid-cols-2">
      <RouterLink
        v-for="(p, i) in proyectos"
        :key="p.to"
        v-reveal="i * 150"
        :to="p.to"
        class="card card-hover group overflow-hidden"
      >
        <div class="overflow-hidden">
          <img
            :src="p.image"
            :alt="p.title"
            class="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div class="p-8">
          <span class="chip">{{ p.tag }}</span>
          <h2 class="mt-4 text-2xl font-extrabold text-plum-800 md:text-3xl">{{ p.title }}</h2>
          <p class="mt-3 leading-relaxed text-ink/70">{{ p.text }}</p>
          <span
            class="mt-6 inline-flex items-center gap-2 font-display font-semibold text-brand-600"
          >
            Conocer más
            <i class="mdi mdi-arrow-right transition-transform group-hover:translate-x-1.5" />
          </span>
        </div>
      </RouterLink>
    </section>
  </div>
</template>
