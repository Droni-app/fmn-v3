<script setup lang="ts">
import { talleres } from '@/services/talleres'
import imgEje01 from '@/assets/ejes/ejepreventivo01.webp'
import imgEje02 from '@/assets/ejes/ejepreventivo02.webp'
import imgEje03 from '@/assets/ejes/ejepreventivo03.webp'
import imgContenido from '@/assets/ejes/contenido-programatico.png'
import imgRcp from '@/assets/ejes/taller-rcp.jpg'
</script>

<template>
  <section>
    <header class="bg-cover bg-center" style="background-image: url('/img/banners/eje-preventivo.jpg')">
      <div class="container mx-auto py-36 px-4">
        <h2 class="font-extrabold text-5xl text-amber-400">PROPÓSITO SUPERIOR</h2>
        <h3 class="text-3xl lg:w-2/3 text-white mt-6">
          Honrar la memoria de Mariana al contribuir a una sociedad consciente y con mayor atención en la población infantil.
        </h3>
      </div>
    </header>

    <article>
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row py-4 gap-4">
          <img :src="imgEje01" alt="Eje preventivo" class="lg:w-1/3 object-cover aspect-[3/2]" />
          <img :src="imgEje03" alt="Eje preventivo" class="lg:w-1/3 object-cover aspect-[3/2]" />
          <img :src="imgEje02" alt="Eje preventivo" class="lg:w-1/3 object-cover aspect-[3/2]" />
        </div>
        <img :src="imgContenido" alt="Contenido Programático" class="mx-auto my-10" />
      </div>

      <div class="bg-indigo-500 dark:bg-gray-900">
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex items-center">
            <p class="text-4xl p-12 text-white leading-relaxed text-end">
              DESDE EL 26 DE MAYO DE 2007 AL 11 DE FEBRERO DE 2023 HEMOS CAPACITADO
              <strong>7.044</strong>
              PERSONAS EN PRIMEROS AUXILIOS Y RCP.
            </p>
          </div>
          <div class="lg:w-1/2">
            <img :src="imgRcp" alt="Taller RCP" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <h3 class="text-center font-extrabold text-4xl text-gray-800 dark:text-gray-100 mb-8">Talleres</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="taller in talleres"
            :key="taller.slug"
            class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img :src="`/img/talleres/${taller.slug}.jpg`" :alt="taller.name" class="w-full h-48 object-cover" />
            <div class="p-4 bg-white dark:bg-gray-800">
              <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ taller.name }}</h4>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink to="/talleres" class="inline-flex items-center gap-2 px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300">
            <i class="mdi mdi-plus text-xl" />
            Más información
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>
