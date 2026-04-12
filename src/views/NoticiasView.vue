<script setup lang="ts">
import { noticias } from '@/services/noticias'
</script>

<template>
  <section>
    <header class="bg-rose-100 dark:bg-gray-800 py-16">
      <h1 class="font-extrabold text-center text-5xl text-rose-500 dark:text-rose-400">Noticias</h1>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div v-for="noticia in noticias" :key="noticia.slug" class="grid grid-cols-1 lg:grid-cols-2 mb-12 rounded-xl shadow-lg overflow-hidden">
        <div class="p-8 flex flex-col justify-center bg-white dark:bg-gray-900">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{{ noticia.name }}</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">{{ noticia.description }}</p>
          <a
            :href="noticia.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 w-fit px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300"
          >
            <i class="mdi mdi-open-in-new" />
            Leer más
          </a>
        </div>
        <img :src="noticia.picture" :alt="noticia.name" class="w-full h-72 lg:h-auto object-cover" />
      </div>
    </div>
  </section>
</template>
