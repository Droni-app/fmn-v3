<script setup lang="ts">
import { onMounted } from 'vue'
import imgCada48h from '@/assets/asalvo/cada-48h.jpg'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://public.flourish.studio/resources/embed.js'
  document.body.appendChild(script)
})
import imgOpes from '@/assets/asalvo/opes.jpg'
import imgDesahogate from '@/assets/asalvo/desahogate.png'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src="/img/banners/BANNER-AHOGAMIENTO.jpg"
        alt="Banner Ahogamiento"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40 flex items-end pb-8 justify-center">
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center px-4">
          EL AHOGAMIENTO ES UN EVENTO RÁPIDO Y SILENCIOSO
        </h1>
      </div>
    </section>

    <!-- Cifras de ahogamiento -->
    <section class="bg-blue-700 dark:bg-blue-900 py-16 px-4 text-white text-center">
      <div class="container mx-auto max-w-4xl flex flex-col gap-6">
        <p class="text-xs font-bold tracking-widest uppercase text-blue-200">
          Cifras de ahogamiento Colombia · Enero – Julio 2025
        </p>
        <p class="text-6xl md:text-8xl font-extrabold leading-none">406</p>
        <p class="text-xl md:text-2xl font-semibold text-blue-100 max-w-2xl mx-auto leading-snug">
          personas han perdido la vida por ahogamiento en el territorio nacional
        </p>
      </div>
    </section>
    <img
      src="/img/ahogamientoAsalvo/CIFRAS-Y-CONTEXTO.jpg"
      alt="Cifras y contexto"
      class="w-full h-auto"
    />

    <!-- Impacto sociodemográfico -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-5xl flex flex-col gap-8">
        <h2
          class="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center leading-snug"
        >
          Impacto Sociodemográfico – Muertes por Ahogamiento en Colombia.<br />Enero – Junio 2025
        </h2>
        <div class="flourish-embed flourish-map" data-src="visualisation/24511098" />
      </div>
    </section>

    <!-- Cita -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <blockquote
            class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed border-l-4 border-blue-500 pl-6"
          >
            "Mi Mariana se fue al cielo antes de tiempo. Con la fuerza de mi corazón, transformó mi
            dolor en esperanza de vida para que los niños que viven en la tierra no cierren sus ojos
            dentro del agua. Es mi misión, es su legado, es el regalo que mi hija me dejó."
          </blockquote>
          <p class="text-lg font-semibold text-purple-700 dark:text-purple-400">
            Hortensia Espitaleta – Directora de la Fundación Mariana Novoa
          </p>
        </div>
      </div>
    </section>

    <!-- Descripción -->
    <section class="py-16 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <p class="text-xl md:text-2xl leading-relaxed">
          <strong>ASALVO</strong> es una marca conjunta de la Fundación Mariana Novoa que tiene como
          propósito disminuir las cifras de personas ahogadas en el país, generando conciencia a
          través de los diferentes métodos de prevención, la importancia de la supervisión visual
          permanente y el conocimiento e implementación de medidas de seguridad en piscinas bajo la
          normatividad de la Ley 1209 de 2008.
        </p>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-4xl md:text-5xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12"
        >
          Valores
        </h2>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="item in [
              {
                color: 'bg-blue-500',
                label: 'Concientizar',
                textColor: 'text-blue-700 dark:text-blue-300',
              },
              {
                color: 'bg-cyan-500',
                label: 'Prevenir',
                textColor: 'text-cyan-700 dark:text-cyan-300',
              },
              {
                color: 'bg-teal-500',
                label: 'Rescatar',
                textColor: 'text-teal-700 dark:text-teal-300',
              },
            ]"
            :key="item.label"
            class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
          >
            <div
              :class="[
                'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4',
                item.color,
              ]"
            >
              <i class="mdi mdi-shield-check text-white text-4xl" />
            </div>
            <h3 :class="['text-2xl font-bold', item.textColor]">{{ item.label }}</h3>
          </div>
        </div>
        <img :src="imgCada48h" alt="Cada 48 horas" class="rounded-lg shadow-xl mx-auto" />
      </div>
    </section>

    <!-- 5 Tips -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-4xl">
        <img
          src="/img/ahogamientoAsalvo/5-TIPS.jpg"
          alt="5 Tips responsables"
          class="w-full h-auto rounded-2xl shadow-md"
        />
      </div>
    </section>

    <!-- OPES -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            CURSO DE OPERACIONES DE PISCINAS Y ESTRUCTURAS SIMILARES
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Programa de capacitación enfocado en la Ley 1209 de 2008, que tiene como objetivo ayudar
            a administradores y trabajadores del sector acuático a garantizar condiciones óptimas
            para el buen funcionamiento de estos espacios, velando por la prevención de accidentes y
            la salud de los usuarios.
          </p>
          <RouterLink
            to="/contacto"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            ¡Inscríbete!
          </RouterLink>
        </div>
        <img :src="imgOpes" alt="Curso OPES" class="rounded-lg shadow-xl w-full" />
      </div>
    </section>

    <!-- Salvamento Acuático -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/img/talleres/v2/CAP08.png"
          alt="Taller de Salvamento Acuático"
          class="rounded-lg shadow-xl w-full"
        />
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            Taller de Salvamento Acuático – Actualización
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Capacitación de actualización para salvavidas, socorristas y personal de seguridad
            acuática. Refuerza técnicas de rescate, primeros auxilios acuáticos y uso de equipos
            especializados.
          </p>
          <RouterLink
            to="/contacto"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            ¡Inscríbete!
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Podcast -->
    <section class="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <iframe
            class="w-full aspect-video"
            src="https://widget.spreaker.com/player?show_id=4069766&theme=dark&playlist=show&playlist-continuous=true"
            title="Desahógate"
            frameborder="0"
          />
        </div>
        <div class="order-1 md:order-2 text-center md:text-left">
          <img
            :src="imgDesahogate"
            alt="Desahógate Podcast"
            class="rounded-lg shadow-xl w-full mb-6"
          />
          <h2 class="text-4xl font-bold mb-4">El Podcast que salvará tu vida</h2>
          <a
            href="https://www.asalvo.org/"
            target="_blank"
            class="inline-block bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >Desahógate</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
