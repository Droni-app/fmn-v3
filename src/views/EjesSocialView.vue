<script setup lang="ts">
import imgPadrino from '@/assets/ejes/padrino.webp'
import img01 from '@/assets/ejes/01.jpg'
import img02 from '@/assets/ejes/02.jpg'
import img03 from '@/assets/ejes/03.jpg'
import img04 from '@/assets/ejes/04.jpg'
import img05 from '@/assets/ejes/05.jpg'

const programas = [
  { titulo: '¿QUIÉN SOY YO? ESTIMULACIÓN TEMPRANA Y ADECUADA', descripcion: 'Programa con el propósito de incentivar por medio del arte un proceso de estimulación temprana y adecuada en niños y niñas de 3 a 6 años, con el fin de desarrollar las facultades cognitivas, físicas, emocionales y sociales.', imagen: img01, reverse: false },
  { titulo: '¿QUIÉN SOY YO? UN SER QUE IMAGINA, SUEÑA Y CONSTRUYE', descripcion: 'Programa para promover un proceso de reconocimiento de identidad en niños y niñas de 7 a 11 años, por medio de una intervención artística que fortalezca sus interacciones sociales y promueva el autocuidado.', imagen: img02, reverse: true },
  { titulo: 'SOY YO', descripcion: 'Programa dirigido a niños, niñas y adolescentes de 12 a 15 años, enfocado en la formación en habilidades y construcción de ciudadanía, por medio de una intervención artística que les permita comprender su entorno social y comunitario.', imagen: img03, reverse: false },
  { titulo: 'Tras las Huellas de Diego', descripcion: 'Programa deportivo que incentiva la participación de niños, niñas y adolescentes en la práctica de atletismo y running. Creado por Elena Amézquita en honor a su hijo Diego Pardo y ejecutado por la Fundación para una formación integral.', imagen: img04, reverse: true },
  { titulo: 'Saber nadar', descripcion: 'Programa para incentivar el aprendizaje y práctica de la natación en niños y niñas de la Fundación Mariana Novoa, a través de estrategias pedagógicas que incidan en la interacción y adaptación en cuerpos de agua, promoviendo la prevención de ahogamiento.', imagen: img05, reverse: false },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-5xl text-center">
        <h1 class="text-3xl md:text-5xl font-bold">
          Apoyamos la formación y bienestar de 120 niños, niñas y adolescentes de los barrios Altos de Serrezuela, Lomitas, Capilla, Aurora Alta y Aurora Baja en Bogotá.
        </h1>
      </div>
    </section>

    <!-- Plan Padrino -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">Plan Padrino</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            ¿Quieres ser Madrina o Padrino de uno de nuestros niños? Con un aporte mensual contribuirás con su formación artística, deportiva y acompañamiento psicosocial.
          </p>
          <p class="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-8">¡Únete, una pequeña ayuda por una gran experiencia a su lado!</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://wa.me/573164284175" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Quiero ser parte</a>
            <a href="https://donaronline.org/fundacion-mariana-novoa/red-de-amigos-fundacion-mariana-novoa" target="_blank" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Quiero donar</a>
          </div>
        </div>
        <img :src="imgPadrino" alt="Plan Padrino" class="rounded-lg shadow-xl w-full" />
      </div>
    </section>

    <!-- Programas -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-16">Conoce nuestros programas formativos</h2>
        <div class="space-y-12">
          <div
            v-for="prog in programas"
            :key="prog.titulo"
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            <div class="grid md:grid-cols-2 items-center">
              <div :class="['p-8', prog.reverse ? 'order-2 md:order-1' : '']">
                <h3 class="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">{{ prog.titulo }}</h3>
                <p class="text-gray-700 dark:text-gray-300 text-lg">{{ prog.descripcion }}</p>
              </div>
              <div :class="prog.reverse ? 'order-1 md:order-2' : ''">
                <img :src="prog.imagen" :alt="prog.titulo" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <!-- Video -->
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6">
            <iframe class="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/ZbkHcfdlGg4" title="Proyecto social" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Escríbenos</h2>
        <div class="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a href="tel:+573164284175" class="text-xl hover:text-pink-200 transition-colors">+ 57 316 428 4175</a>
          <a href="tel:+573228634379" class="text-xl hover:text-pink-200 transition-colors">+ 57 322 863 4379</a>
          <a href="mailto:informacion@mariananovoa.org" class="text-xl hover:text-pink-200 transition-colors">informacion@mariananovoa.org</a>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://checkout.wompi.co/l/VPOS_2DN3Dr" target="_blank" class="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300">Quiero donar</a>
          <a href="https://wa.me/573164284175" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">Contactar por WhatsApp</a>
        </div>
      </div>
    </section>
  </div>
</template>
