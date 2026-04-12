<script setup lang="ts">
import imgPlanPadrino from '@/assets/donar/planpadrino.webp'
import imgRedAmigos from '@/assets/donar/redamigos.webp'
import imgRopero from '@/assets/donar/ropero.png'

const sections = [
  {
    title: 'Plan padrino',
    description: '¿Quieres ser Madrina o Padrino de uno de nuestros niños? Con un aporte mensual contribuirás con su formación artística, deportiva y acompañamiento psicosocial, brindando mejores oportunidades durante su proceso de crecimiento.',
    cta: '¡Únete, una pequeña ayuda por una gran experiencia a su lado!',
    image: imgPlanPadrino,
    alt: 'Plan Padrino',
    reverse: false,
  },
  {
    title: 'Red de amigos',
    description: '¿Quieres ser parte de una gran red de ayuda para nuestra organización? ¡Apoya nuestro Proyecto Social en Altos de Serrezuela desde $1.000 en adelante!',
    cta: '¡Vincúlate y sé amigo de la Fundación Mariana Novoa!',
    image: imgRedAmigos,
    alt: 'Red de Amigos',
    reverse: true,
  },
  {
    title: 'Ropero',
    description: '¿Tienes ropa o elementos que ya no uses y estén en buen estado? Dónalos y dales una segunda oportunidad.',
    cta: null,
    image: imgRopero,
    alt: 'Ropero',
    reverse: false,
  },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-4xl md:text-5xl font-bold">Formas de Donar</h1>
      </div>
    </section>

    <section
      v-for="(s, i) in sections"
      :key="s.title"
      :class="['py-16 px-4', i % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900']"
    >
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div :class="s.reverse ? 'order-2 md:order-1' : ''">
          <h2 class="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">{{ s.title }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{{ s.description }}</p>
          <p v-if="s.cta" class="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-8">{{ s.cta }}</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://wa.me/573164284175" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Quiero ser parte
            </a>
            <a href="https://donaronline.org/fundacion-mariana-novoa/red-de-amigos-fundacion-mariana-novoa" target="_blank" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Quiero donar
            </a>
          </div>
        </div>
        <div :class="s.reverse ? 'order-1 md:order-2' : ''">
          <img :src="s.image" :alt="s.alt" class="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </section>
  </div>
</template>
