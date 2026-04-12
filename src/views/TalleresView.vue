<script setup lang="ts">
import { talleres } from '@/services/talleres'
</script>

<template>
  <section>
    <header class="bg-rose-100 dark:bg-gray-800 py-16">
      <h1 class="font-extrabold text-center text-5xl text-rose-500 dark:text-rose-400">TALLERES</h1>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div v-for="taller in talleres" :key="taller.slug" class="grid grid-cols-1 lg:grid-cols-2 mb-12 rounded-xl shadow-lg overflow-hidden">
        <img :src="`/img/talleres/${taller.slug}.jpg`" :alt="taller.name" class="w-full h-72 lg:h-auto object-cover" />
        <div class="p-8 flex flex-col justify-center bg-white dark:bg-gray-900">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{{ taller.name }}</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">{{ taller.description }}</p>
          <RouterLink to="/contacto" class="inline-flex items-center gap-2 w-fit px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300">
            <i class="mdi mdi-pencil-plus" />
            Quiero inscribirme
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
