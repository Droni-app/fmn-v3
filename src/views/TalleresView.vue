<script setup lang="ts">
import { talleres } from '@/services/talleres'
</script>

<template>
  <section>
    <header class="bg-rose-100 dark:bg-gray-800 py-16">
      <h1 class="font-extrabold text-center text-5xl text-rose-500 dark:text-rose-400">TALLERES</h1>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div
        v-for="taller in talleres"
        :key="taller.slug"
        class="grid grid-cols-1 lg:grid-cols-2 mb-12 rounded-xl shadow-lg overflow-hidden"
      >
        <img
          :src="`/img/talleres/v2/${taller.slug}.png`"
          :alt="taller.name"
          class="w-full h-72 lg:h-auto object-cover"
        />
        <div class="p-8 flex flex-col justify-center bg-white dark:bg-gray-900 gap-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
            {{ taller.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ taller.description }}</p>
          <div class="flex flex-col gap-1.5 text-sm text-gray-700 dark:text-gray-300">
            <span class="flex items-center gap-2">
              <i class="mdi mdi-clock-outline text-rose-500" />
              {{ taller.duration }}
            </span>
            <span class="flex items-center gap-2">
              <i class="mdi mdi-map-marker-outline text-rose-500" />
              {{ taller.modality }}
            </span>
            <span v-if="taller.certification" class="flex items-center gap-2">
              <i class="mdi mdi-certificate-outline text-rose-500" />
              {{ taller.certification }}
            </span>
            <span v-for="item in taller.extra" :key="item" class="flex items-start gap-2 text-rose-600 dark:text-rose-400 font-medium">
              <i class="mdi mdi-gift-outline mt-0.5" />
              {{ item }}
            </span>
          </div>
          <ul v-if="taller.modules" class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
            <li v-for="mod in taller.modules" :key="mod" class="flex items-start gap-2">
              <i class="mdi mdi-check-circle-outline text-rose-400 mt-0.5 shrink-0" />
              {{ mod }}
            </li>
          </ul>
          <RouterLink
            to="/contacto"
            class="inline-flex items-center gap-2 w-fit px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300 mt-2"
          >
            <i class="mdi mdi-pencil-plus" />
            Quiero inscribirme
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
