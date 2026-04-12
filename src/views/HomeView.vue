<script setup lang="ts">
import HeroSlider from '@/components/HeroSlider.vue'

// Imágenes estáticas
import imgSocialfoto from '@/assets/home/socialfoto.webp'
import imgCasaFundacion from '@/assets/home/casaFundacion.webp'
import imgPresentacion from '@/assets/home/presentacion.webp'
import imgOds from '@/assets/home/ods.webp'
import imgMarianita from '@/assets/home/marianita.webp'
import imgImpacto from '@/assets/home/impacto.png'
import imgBannerFiltro from '@/assets/home/banner-filtro.png'

// Equipo – importación individual para que Vite los procese
import fotoHortensia from '@/assets/home/equipo/FOTO-HORTENSIA-ESPITALETA.png'
import fotoLina from '@/assets/home/equipo/FOTO-LINA-VILLAMIL.png'
import fotoOlga from '@/assets/home/equipo/FOTO-OLGA-BAQUERO.png'
import fotoCarol from '@/assets/home/equipo/FOTO-CAROL-CALDERON.png'
import fotoCristian from '@/assets/home/equipo/FOTO-CRISTIAN-SOLANO.png'
import fotoSantiago from '@/assets/home/equipo/FOTO-SANTIAGO-SALGADO.png'
import fotoSteven from '@/assets/home/equipo/FOTO-STEVEN-RATIVA.png'
import fotoWendy from '@/assets/home/equipo/FOTO-WENDY-IMBRETH.png'

const equipo = [
  { nombre: 'Hortensia Espitaleta', cargo: 'Directora', foto: fotoHortensia },
  { nombre: 'Lina Villamil', cargo: 'Coordinadora General', foto: fotoLina },
  { nombre: 'Olga Lucía Baquero', cargo: 'Directora Científica', foto: fotoOlga },
  { nombre: 'Carol Calderón', cargo: 'Coordinadora Programa Social', foto: fotoCarol },
  { nombre: 'Cristian Solano', cargo: 'Área Contable y Administrativa', foto: fotoCristian },
  { nombre: 'Santiago Salgado', cargo: 'Entrenador "Tras las Huellas de Diego"', foto: fotoSantiago },
  { nombre: 'Steven Rátiva', cargo: 'Coordinador de Comunicaciones', foto: fotoSteven },
  { nombre: 'Wendy Imbreth', cargo: 'Docente de Artes', foto: fotoWendy },
]

const valores = [
  'Amor por la Primera Infancia', 'Generamos conciencia', 'Ayudamos a salvar vidas',
  'Tenacidad', 'Integridad', 'Trabajo en equipo', 'Transformación',
]

const talleres = [
  { image: '/img/talleres/taller01-herramientas-de-crianza-basadas-en-el-respeto.jpg', title: 'Herramientas de Crianza Basadas en el Respeto' },
  { image: '/img/talleres/taller02-primeros-auxilios-y-rcp.jpg', title: 'Primeros Auxilios y RCP' },
  { image: '/img/talleres/taller03-operaciones-de-estructuras-similares.jpg', title: 'Operaciones de Estructuras Similares' },
  { image: '/img/talleres/taller04-salvamento-acuatico.jpg', title: 'Salvamento Acuático' },
  { image: '/img/talleres/taller05-primeros-auxilios-psicologicos.jpg', title: 'Primeros Auxilios Psicológicos' },
]

// Aliados – import.meta.glob con paths relativos correctos
const aliadosModules = import.meta.glob<string>('../assets/home/aliados/*.png', { eager: true, import: 'default' })
const aliados = Object.keys(aliadosModules).sort().map(k => aliadosModules[k])
</script>

<template>
  <div>
    <HeroSlider />

    <!-- Quiénes somos -->
    <article class="container mx-auto px-4 py-12 lg:py-16 md:flex items-start gap-12">
      <div class="md:w-1/2">
        <h2 class="text-4xl text-rose-400 py-6 poppins font-bold">¿Quiénes somos?</h2>
        <p class="text-xl mb-4">
          La Fundación Mariana Novoa es una organización sin ánimo de lucro fundada en el año 2007 con el propósito de honrar la memoria de Mariana, hija de Hortensia Espitaleta, quien falleció por ahogamiento al caer en una piscina en su primer día de clases en un jardín infantil. Actualmente cuenta con más de 18 años de trayectoria liderando la bandera de la prevención de accidentes infantiles en Colombia.
        </p>
        <p class="text-xl mb-4">
          Desde el año 2014 genera un impacto social directo en comunidades vulnerables como Altos de Serrezuela en Bogotá, donde atiende a niños, niñas, adolescentes y adultos mayores mediante talleres de arte, deporte y acompañamiento psicosocial.
        </p>
        <h2 class="text-3xl text-rose-400 pt-6 pb-3 poppins font-bold">PROPÓSITO SUPERIOR</h2>
        <p class="text-xl mb-4">Honrar la memoria de Mariana Novoa al contribuir a una sociedad consciente y con mayor atención a la población infantil para promover líderes que construyan un mejor país.</p>
        <h2 class="text-3xl text-rose-400 pt-6 pb-3 poppins font-bold">MISIÓN</h2>
        <p class="text-xl mb-4">Promover la importancia de la prevención, seguridad y desarrollo integral de niños y niñas en los diferentes espacios de interacción social, buscando contribuir de manera eficaz a la protección de la vida, disminución del riesgo y la generación de nuevas oportunidades.</p>
        <h2 class="text-3xl text-rose-400 pt-6 pb-3 poppins font-bold">VISIÓN</h2>
        <p class="text-xl">En el 2030 la Fundación Mariana Novoa será una organización reconocida a nivel nacional e internacional, siendo un referente en seguridad y prevención de accidentalidad infantil con más de 20.000 personas capacitadas en Primeros Auxilios y RCP.</p>
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <img :src="imgSocialfoto" alt="Foto social" class="w-full rounded-lg shadow-lg" />
        <blockquote class="text-sm text-gray-600 dark:text-gray-400 italic mt-4 px-4 border-l-4 border-rose-400">
          Hortensia Espitaleta, madre, publicista, empresaria, conferencista y directora de la Fundación Mariana Novoa.
        </blockquote>
      </div>
    </article>

    <!-- Videos -->
    <div class="container mx-auto px-4 pb-12">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
          <iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/CEqVym8y8oE" title="Fundación Mariana Novoa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
        <div class="flex-1">
          <iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/Q6D11e4UKRQ" title="Fundación Mariana Novoa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </div>

    <!-- Altos de Serrezuela -->
    <article class="container mx-auto px-4 py-12 lg:py-16">
      <h2 class="text-4xl text-rose-400 pb-8 poppins font-bold text-center">ALTOS DE SERREZUELA</h2>
      <img :src="imgCasaFundacion" alt="Casa Fundación Mariana Novoa" class="rounded-lg shadow-lg mb-8 w-full" />
      <p class="text-xl text-center max-w-4xl mx-auto">
        Altos de Serrezuela es un sector poblado de la localidad de Usaquén, zona rural Bogotá, de origen informal y fundado en el año 1967. A pesar de las limitaciones en infraestructura y servicios públicos, es una comunidad resiliente con fuerte presencia de población infantil y adulta mayor.
      </p>
      <img :src="imgPresentacion" alt="Presentación en Altos de Serrezuela" class="rounded-lg shadow-lg mt-8 w-full" />
      <img :src="imgOds" alt="ODS Fundación Mariana Novoa" class="rounded-lg shadow-lg mt-8 w-full" />
    </article>

    <!-- Equipo -->
    <article class="container mx-auto px-4 py-12 lg:py-16">
      <h2 class="text-4xl text-rose-400 pb-10 poppins font-bold text-center">Equipo de trabajo</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="miembro in equipo" :key="miembro.nombre" class="text-center">
          <img :src="miembro.foto" :alt="miembro.nombre" class="w-full aspect-square object-cover rounded-full shadow-lg mb-3" />
          <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">{{ miembro.nombre }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ miembro.cargo }}</p>
        </div>
      </div>
    </article>

    <!-- Valores -->
    <div class="bg-rose-50 dark:bg-gray-800 py-16">
      <h2 class="text-4xl lg:text-5xl text-rose-500 text-center poppins font-bold mb-12">Nuestros Valores</h2>
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-10">
          <img :src="imgMarianita" alt="Valores Fundación Mariana Novoa" class="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md flex-shrink-0" />
          <ul class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <li
              v-for="valor in valores"
              :key="valor"
              class="bg-white dark:bg-gray-700 px-6 py-5 rounded-xl shadow-lg text-center text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-rose-50 dark:hover:bg-gray-600 hover:text-rose-600 dark:hover:text-rose-400"
              :class="valor === 'Transformación' ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto' : ''"
            >
              {{ valor }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Banner prevención -->
    <div class="bg-purple-500 dark:bg-purple-900 py-10">
      <h2 class="container mx-auto px-4 text-2xl md:text-4xl text-white text-center poppins font-bold">
        Generamos cultura de prevención, seguridad y cuidado por medio de talleres
      </h2>
    </div>

    <!-- Capacitaciones -->
    <div class="bg-blue-50 dark:bg-gray-800 py-16">
      <h2 class="text-4xl lg:text-5xl text-rose-400 text-center poppins font-bold mb-12">Conoce nuestras próximas capacitaciones</h2>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="taller in talleres"
            :key="taller.title"
            to="/talleres"
            class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img :src="taller.image" :alt="taller.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p class="text-white font-bold p-6 text-lg">{{ taller.title }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Impacto -->
    <div class="bg-white dark:bg-gray-900 py-16">
      <img :src="imgImpacto" alt="Impacto Fundación Mariana Novoa" class="mx-auto container px-4" />
    </div>

    <!-- Banner Serrezuela -->
    <div class="py-24" :style="{ backgroundImage: `url(${imgBannerFiltro})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <h2 class="container mx-auto px-4 text-3xl md:text-5xl text-amber-200 text-center poppins font-bold mb-10">
        CONTAMOS CON UN PROYECTO SOCIAL EN ALTOS DE SERREZUELA DONDE APOYAMOS A 120 NIÑOS, NIÑAS Y ADOLESCENTES
      </h2>
      <RouterLink to="/ejes/social" class="block mx-auto w-fit bg-amber-300 text-amber-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        Conoce más sobre nuestro proyecto
      </RouterLink>
    </div>

    <!-- Aliados -->
    <div class="bg-white dark:bg-gray-900 py-16">
      <h2 class="container mx-auto px-4 text-4xl lg:text-5xl text-rose-400 text-center poppins font-bold mb-12">
        Aliados Institucionales
      </h2>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          <div v-for="(src, i) in aliados" :key="i" class="flex items-center justify-center p-3 transition-transform hover:scale-110">
            <img :src="src" :alt="`Aliado ${i + 1}`" class="w-full max-w-[130px] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
