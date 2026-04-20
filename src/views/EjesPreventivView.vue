<script setup lang="ts">
import { talleres } from '@/services/talleres'
import imgEje01 from '@/assets/ejes/ejepreventivo01.webp'
import imgEje02 from '@/assets/ejes/ejepreventivo02.webp'
import imgEje03 from '@/assets/ejes/ejepreventivo03.webp'
import imgContenido from '@/assets/ejes/contenido-programatico.png'
import img8000Personas from '@/assets/ejes/8000-personas.webp'
</script>

<template>
  <section>
    <header>
      <img
        src="/img/banners/eje-preventivov2.webp"
        alt="Eje Preventivo"
        class="w-full h-auto object-cover"
      />
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

      <div class="container mx-auto">
        <img
          :src="img8000Personas"
          alt="8000 Personas capacitadas"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="container mx-auto px-4 py-12">
        <h3 class="text-center font-extrabold text-4xl text-gray-800 dark:text-gray-100 mb-8">
          Talleres
        </h3>
        <div
          class="my-16 rounded-2xl bg-rose-50 dark:bg-gray-800 border border-rose-100 dark:border-gray-700 px-8 py-10 text-center max-w-3xl mx-auto shadow-sm"
        >
          <p
            class="text-rose-600 dark:text-rose-400 font-bold text-xl mb-4 tracking-wide uppercase"
          >
            Capacítate, actúa y protege.
          </p>
          <p class="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            Cada minuto puede hacer la diferencia en una emergencia. Por eso hemos creado un
            portafolio de talleres y cursos diseñados para que aprendas de manera práctica y
            sencilla a prevenir accidentes, actuar en situaciones de riesgo y proteger vidas.
            Conviértete en el primer eslabón de la cadena preventiva y promueve una cultura de
            seguridad en tu entorno.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="taller in talleres"
            :key="taller.slug"
            class="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <img
              :src="`/img/talleres/v2/${taller.slug}.png`"
              :alt="taller.name"
              class="w-full object-cover"
            />
            <div class="flex flex-col flex-1 p-5 gap-3">
              <h4 class="text-base font-bold text-gray-800 dark:text-gray-100 leading-snug">
                {{ taller.name }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {{ taller.description }}
              </p>
              <div class="flex flex-col gap-1 text-sm mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                <span class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i class="mdi mdi-clock-outline text-rose-500" />
                  {{ taller.duration }}
                </span>
                <span class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i class="mdi mdi-map-marker-outline text-rose-500" />
                  {{ taller.modality }}
                </span>
                <span v-if="taller.certification" class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i class="mdi mdi-certificate-outline text-rose-500" />
                  {{ taller.certification }}
                </span>
                <ul v-if="taller.extra" class="mt-1 flex flex-col gap-1">
                  <li
                    v-for="item in taller.extra"
                    :key="item"
                    class="flex items-start gap-2 text-rose-600 dark:text-rose-400 text-xs font-medium"
                  >
                    <i class="mdi mdi-gift-outline mt-0.5" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink
            to="/talleres"
            class="inline-flex items-center gap-2 px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300"
          >
            <i class="mdi mdi-plus text-xl" />
            Más información
          </RouterLink>
        </div>
      </div>
      <img src="/img/talleres/v2/CULTURA-PREVENTIVA.png" alt="Cultura Preventiva" class="w-full h-auto" />
    </article>
  </section>
</template>
