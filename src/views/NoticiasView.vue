<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import { noticias } from '@/services/noticias'

const [destacada, ...resto] = noticias
</script>

<template>
  <div>
    <PageHero
      eyebrow="Lo que está pasando"
      title="Noticias"
      subtitle="Historias, visitas y logros de nuestra comunidad."
    />

    <section class="section-y container-page space-y-10">
      <a
        v-if="destacada"
        v-reveal
        :href="destacada.link"
        target="_blank"
        rel="noopener noreferrer"
        class="card card-hover group grid overflow-hidden lg:grid-cols-2"
      >
        <div class="overflow-hidden">
          <img
            :src="destacada.picture"
            :alt="destacada.name"
            class="aspect-video size-full object-cover transition duration-700 group-hover:scale-105 lg:aspect-auto"
          />
        </div>
        <div class="flex flex-col justify-center p-8 lg:p-12">
          <span class="chip w-fit bg-brand-50 text-brand-600">Destacada</span>
          <h2 class="mt-4 text-2xl font-extrabold text-plum-800 md:text-3xl">
            {{ destacada.name }}
          </h2>
          <p class="mt-4 leading-relaxed text-ink/70 md:text-lg">{{ destacada.description }}</p>
          <span
            class="mt-6 inline-flex items-center gap-2 font-display font-semibold text-brand-600"
          >
            Leer más
            <i class="mdi mdi-arrow-right transition-transform group-hover:translate-x-1.5" />
          </span>
        </div>
      </a>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(noticia, i) in resto"
          :key="noticia.slug"
          v-reveal="(i % 3) * 100"
          :href="noticia.link"
          target="_blank"
          rel="noopener noreferrer"
          class="card card-hover group flex flex-col overflow-hidden"
        >
          <div class="overflow-hidden">
            <img
              :src="noticia.picture"
              :alt="noticia.name"
              loading="lazy"
              class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h2 class="text-lg leading-snug font-bold text-plum-800">{{ noticia.name }}</h2>
            <p class="mt-3 line-clamp-3 text-ink/70">{{ noticia.description }}</p>
            <span
              class="mt-auto inline-flex items-center gap-2 pt-5 font-display font-semibold text-brand-600"
            >
              Leer más
              <i class="mdi mdi-arrow-right transition-transform group-hover:translate-x-1.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
