<script setup lang="ts">
import HeroSlider from '@/components/HeroSlider.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatCounter from '@/components/StatCounter.vue'
import YoutubeLite from '@/components/YoutubeLite.vue'
import { links, pub } from '@/services/site'

import imgSocialfoto from '@/assets/home/socialfoto.webp'
import imgCasaFundacion from '@/assets/home/casaFundacion.webp'
import imgOds from '@/assets/home/ods.webp'
import imgMarianita from '@/assets/home/marianita.webp'
import imgImpacto from '@/assets/home/impacto.webp'
import imgBannerFiltro from '@/assets/home/banner-filtro.webp'
import imgPreventivo from '@/assets/ejes/ejepreventivo01.webp'
import imgSocial from '@/assets/ejes/padrino.webp'

import fotoHortensia from '@/assets/home/equipo/FOTO-HORTENSIA-ESPITALETA.webp'
import fotoLina from '@/assets/home/equipo/FOTO-LINA-VILLAMIL.webp'
import fotoOlga from '@/assets/home/equipo/FOTO-OLGA-BAQUERO.webp'
import fotoCarol from '@/assets/home/equipo/FOTO-CAROL-CALDERON.webp'
import fotoCristian from '@/assets/home/equipo/FOTO-CRISTIAN-SOLANO.webp'
import fotoSantiago from '@/assets/home/equipo/FOTO-SANTIAGO-SALGADO.webp'
import fotoSteven from '@/assets/home/equipo/FOTO-STEVEN-RATIVA.webp'
import fotoWendy from '@/assets/home/equipo/FOTO-WENDY-IMBRETH.webp'

const equipo = [
  { nombre: 'Hortensia Espitaleta', cargo: 'Directora', foto: fotoHortensia },
  { nombre: 'Lina Villamil', cargo: 'Coordinadora General', foto: fotoLina },
  { nombre: 'Olga Lucía Baquero', cargo: 'Directora Científica', foto: fotoOlga },
  { nombre: 'Carol Calderón', cargo: 'Coordinadora Programa Social', foto: fotoCarol },
  { nombre: 'Cristian Solano', cargo: 'Área Contable y Administrativa', foto: fotoCristian },
  {
    nombre: 'Santiago Salgado',
    cargo: 'Entrenador "Tras las Huellas de Diego"',
    foto: fotoSantiago,
  },
  { nombre: 'Steven Rátiva', cargo: 'Coordinador de Comunicaciones', foto: fotoSteven },
  { nombre: 'Wendy Imbreth', cargo: 'Docente de Artes', foto: fotoWendy },
]

const pilares = [
  {
    icon: 'mdi-star-four-points-outline',
    titulo: 'Propósito superior',
    texto:
      'Honrar la memoria de Mariana Novoa al contribuir a una sociedad consciente y con mayor atención a la población infantil para promover líderes que construyan un mejor país.',
  },
  {
    icon: 'mdi-compass-outline',
    titulo: 'Misión',
    texto:
      'Promover la importancia de la prevención, seguridad y desarrollo integral de niños y niñas en los diferentes espacios de interacción social, buscando contribuir de manera eficaz a la protección de la vida, disminución del riesgo y la generación de nuevas oportunidades.',
  },
  {
    icon: 'mdi-telescope',
    titulo: 'Visión',
    texto:
      'En el 2030 la Fundación Mariana Novoa será una organización reconocida a nivel nacional e internacional, siendo un referente en seguridad y prevención de accidentalidad infantil con más de 20.000 personas capacitadas en Primeros Auxilios y RCP.',
  },
]

const impacto = [
  { valor: 8047, texto: 'personas capacitadas', periodo: '2007 – 2025' },
  { valor: 1320, texto: 'niños, niñas y adolescentes atendidos', periodo: '2014 – mayo 2025' },
  { valor: 770, texto: 'familias atendidas', periodo: '2014 – mayo 2025' },
  { valor: 60, texto: 'adultos mayores atendidos', periodo: '2022 – mayo 2025' },
  {
    valor: 2365,
    texto: 'talleres de arte para niños, niñas y adolescentes',
    periodo: '2014 – mayo 2025',
  },
  { valor: 711, texto: 'entrenamientos de running y atletismo', periodo: '2019 – mayo 2025' },
  { valor: 720, texto: 'voluntarios en actividades de la fundación', periodo: '2014 – mayo 2025' },
  { valor: 121, texto: 'voluntariados corporativos', periodo: '2014 – mayo 2025' },
]

const valores = [
  { nombre: 'Amor por la primera infancia', icon: 'mdi-heart-outline' },
  { nombre: 'Generamos conciencia', icon: 'mdi-lightbulb-on-outline' },
  { nombre: 'Ayudamos a salvar vidas', icon: 'mdi-lifebuoy' },
  { nombre: 'Tenacidad', icon: 'mdi-arm-flex-outline' },
  { nombre: 'Integridad', icon: 'mdi-shield-star-outline' },
  { nombre: 'Trabajo en equipo', icon: 'mdi-account-group-outline' },
  { nombre: 'Transformación', icon: 'mdi-butterfly-outline' },
]

const ejes = [
  {
    to: '/ejes/preventivo',
    image: imgPreventivo,
    tag: 'Eje preventivo',
    titulo: 'Capacitamos para salvar vidas',
    texto: 'Talleres de primeros auxilios, RCP, salvamento acuático y prevención de accidentes.',
  },
  {
    to: '/ejes/social',
    image: imgSocial,
    tag: 'Eje social',
    titulo: 'Transformamos vidas en comunidad',
    texto: 'Arte, deporte y acompañamiento psicosocial para 120 niños, niñas y adolescentes.',
  },
]

const talleres = [
  {
    image: pub('/img/talleres/taller01-herramientas-de-crianza-basadas-en-el-respeto.webp'),
    title: 'Herramientas de crianza basadas en el respeto',
  },
  {
    image: pub('/img/talleres/taller02-primeros-auxilios-y-rcp.webp'),
    title: 'Primeros auxilios y RCP',
  },
  {
    image: pub('/img/talleres/taller03-operaciones-de-estructuras-similares.webp'),
    title: 'Operación de piscinas y estructuras similares',
  },
  { image: pub('/img/talleres/taller04-salvamento-acuatico.webp'), title: 'Salvamento acuático' },
  {
    image: pub('/img/talleres/taller05-primeros-auxilios-psicologicos.webp'),
    title: 'Primeros auxilios psicológicos',
  },
]

const aliadosModules = import.meta.glob<string>('../assets/home/aliados/*.webp', {
  eager: true,
  import: 'default',
})
const aliados = Object.keys(aliadosModules)
  .sort()
  .map((k) => aliadosModules[k]!)
</script>

<template>
  <div class="overflow-x-clip">
    <!-- Hero -->
    <section class="relative isolate">
      <div
        class="absolute top-10 -left-32 -z-10 size-96 animate-float rounded-full bg-brand-200/60 blur-3xl"
      />
      <div
        class="absolute top-40 -right-20 -z-10 size-[28rem] animate-float rounded-full bg-plum-200/60 blur-3xl [animation-delay:-4s]"
      />

      <div
        class="container-page grid items-center gap-12 pt-8 pb-16 md:pt-12 lg:grid-cols-[1.05fr_1fr] lg:pb-24"
      >
        <div class="text-center lg:text-left">
          <p class="eyebrow mb-5 animate-fade-up justify-center lg:justify-start">
            <span class="h-0.5 w-6 rounded-full bg-current" />Desde 2007 · Bogotá, Colombia
          </p>
          <h1
            class="animate-fade-up font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-plum-800 [animation-delay:100ms] sm:text-5xl xl:text-6xl"
          >
            Prevenimos accidentes infantiles y
            <span class="text-gradient">transformamos vidas</span>
          </h1>
          <p class="lead mx-auto mt-6 max-w-xl animate-fade-up [animation-delay:200ms] lg:mx-0">
            Honramos la memoria de Mariana capacitando a familias, cuidadores e instituciones, y
            acompañando a niños, niñas y adolescentes de Altos de Serrezuela.
          </p>
          <div
            class="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:300ms] lg:justify-start"
          >
            <a :href="links.donate" target="_blank" rel="noopener" class="btn btn-primary">
              <i class="mdi mdi-heart" /> Donar ahora
            </a>
            <RouterLink to="/ejes" class="btn btn-outline">
              Conocer programas <i class="mdi mdi-arrow-right" />
            </RouterLink>
          </div>
        </div>

        <div
          class="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:250ms] lg:max-w-none"
        >
          <div
            class="absolute inset-4 -z-10 rotate-6 rounded-[3rem] bg-gradient-to-br from-brand-400 to-plum-500"
          />
          <img
            :src="imgSocialfoto"
            alt="Hortensia Espitaleta, directora de la Fundación Mariana Novoa"
            fetchpriority="high"
            class="aspect-square w-full rounded-[3rem] object-cover shadow-2xl"
          />
          <div
            class="card absolute -bottom-6 -left-2 flex animate-float items-center gap-3 px-5 py-4 [animation-duration:7s] sm:-left-8"
          >
            <span
              class="grid size-12 place-items-center rounded-2xl bg-brand-100 text-2xl text-brand-600"
            >
              <i class="mdi mdi-medical-bag" />
            </span>
            <span>
              <strong class="block font-display text-2xl text-plum-800">+8.000</strong>
              <span class="text-sm text-ink/60">personas capacitadas</span>
            </span>
          </div>
          <div
            class="card absolute -top-4 -right-2 flex animate-float items-center gap-3 px-5 py-4 [animation-delay:-3s] [animation-duration:9s] sm:-right-6"
          >
            <span
              class="grid size-12 place-items-center rounded-2xl bg-sun-200 text-2xl text-plum-800"
            >
              <i class="mdi mdi-human-child" />
            </span>
            <span>
              <strong class="block font-display text-2xl text-plum-800">120</strong>
              <span class="text-sm text-ink/60">niños en el proyecto social</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Campañas -->
    <section class="container-page pb-16 md:pb-24" aria-label="Campañas">
      <HeroSlider v-reveal:zoom />
    </section>

    <!-- Quiénes somos -->
    <section id="nosotros" class="section-y bg-white">
      <div class="container-page">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div v-reveal:left>
            <p class="eyebrow mb-3">
              <span class="h-0.5 w-6 rounded-full bg-current" />Quiénes somos
            </p>
            <h2 class="heading mb-6">Una historia de amor convertida en prevención</h2>
            <div class="prose-body">
              <p>
                La Fundación Mariana Novoa es una organización sin ánimo de lucro fundada en el año
                2007 con el propósito de honrar la memoria de Mariana, hija de Hortensia Espitaleta,
                quien falleció por ahogamiento al caer en una piscina en su primer día de clases en
                un jardín infantil.
              </p>
              <p>
                Con más de <strong class="text-plum-700">18 años de trayectoria</strong>, lidera la
                bandera de la prevención de accidentes infantiles en Colombia. Desde 2014 genera un
                impacto social directo en comunidades vulnerables como Altos de Serrezuela en
                Bogotá, con talleres de arte, deporte y acompañamiento psicosocial.
              </p>
            </div>
          </div>
          <div v-reveal:right class="grid gap-5 sm:grid-cols-2">
            <YoutubeLite id="CEqVym8y8oE" title="Fundación Mariana Novoa" class="sm:col-span-2" />
            <YoutubeLite
              id="Q6D11e4UKRQ"
              title="Fundación Mariana Novoa – Historia"
              class="sm:col-span-2"
            />
          </div>
        </div>

        <div class="mt-16 grid gap-6 md:grid-cols-3">
          <article
            v-for="(p, i) in pilares"
            :key="p.titulo"
            v-reveal="i * 120"
            class="card card-hover relative overflow-hidden p-8"
          >
            <span
              class="mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-plum-500 text-3xl text-white shadow-lg shadow-brand-500/30"
            >
              <i :class="['mdi', p.icon]" />
            </span>
            <h3 class="mb-3 text-xl font-bold text-plum-800">{{ p.titulo }}</h3>
            <p class="leading-relaxed text-ink/70">{{ p.texto }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Impacto -->
    <section class="relative isolate overflow-hidden bg-plum-800 py-20 text-white md:py-28">
      <div
        class="absolute -top-32 left-1/3 -z-10 size-[30rem] animate-float rounded-full bg-brand-500/30 blur-3xl"
      />
      <div class="container-page">
        <SectionHeading
          light
          eyebrow="Nuestro impacto"
          title="Más de 18 años de compromiso con la vida y la seguridad"
        />
        <div class="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          <div
            v-for="(item, i) in impacto"
            :key="item.texto"
            v-reveal="(i % 4) * 100"
            class="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 md:p-7"
          >
            <StatCounter
              :value="item.valor"
              class="block font-display text-3xl font-extrabold text-sun-300 md:text-5xl"
            />
            <p class="mt-2 font-semibold text-white md:text-lg">{{ item.texto }}</p>
            <p class="mt-1 text-sm text-white/55">{{ item.periodo }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ejes -->
    <section class="section-y container-page">
      <SectionHeading
        eyebrow="Lo que hacemos"
        title="Dos ejes, un mismo propósito"
        subtitle="Prevención para proteger la vida y acompañamiento social para abrir nuevas oportunidades."
      />
      <div class="grid gap-6 md:grid-cols-2">
        <RouterLink
          v-for="(eje, i) in ejes"
          :key="eje.to"
          v-reveal="i * 150"
          :to="eje.to"
          class="group relative isolate flex min-h-[22rem] items-end overflow-hidden rounded-[2rem] p-8 text-white shadow-xl md:min-h-[28rem]"
        >
          <img
            :src="eje.image"
            :alt="eje.tag"
            loading="lazy"
            class="absolute inset-0 -z-10 size-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-plum-900/95 via-plum-900/40 to-transparent"
          />
          <div>
            <span class="chip bg-white/20 text-white backdrop-blur">{{ eje.tag }}</span>
            <h3 class="mt-4 text-2xl font-extrabold md:text-3xl">{{ eje.titulo }}</h3>
            <p class="mt-2 max-w-md text-white/85">{{ eje.texto }}</p>
            <span
              class="mt-5 inline-flex items-center gap-2 font-display font-semibold text-sun-300"
            >
              Conocer más
              <i class="mdi mdi-arrow-right transition-transform group-hover:translate-x-1.5" />
            </span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Talleres -->
    <section class="section-y bg-brand-50/60">
      <div class="container-page">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Capacitaciones"
            title="Generamos cultura de prevención, seguridad y cuidado"
            class="mb-0!"
          />
          <RouterLink v-reveal to="/talleres" class="btn btn-plum shrink-0">
            Ver todos los talleres <i class="mdi mdi-arrow-right" />
          </RouterLink>
        </div>
        <div
          class="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5"
        >
          <RouterLink
            v-for="(taller, i) in talleres"
            :key="taller.title"
            v-reveal="i * 80"
            to="/talleres"
            class="group relative w-[75%] shrink-0 snap-center overflow-hidden rounded-3xl shadow-lg sm:w-auto"
          >
            <img
              :src="taller.image"
              :alt="taller.title"
              loading="lazy"
              class="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-end bg-gradient-to-t from-plum-900/90 via-plum-900/10 to-transparent p-5"
            >
              <p class="font-display leading-snug font-bold text-white">{{ taller.title }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Altos de Serrezuela -->
    <section class="section-y container-page">
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div v-reveal:left>
          <p class="eyebrow mb-3"><span class="h-0.5 w-6 rounded-full bg-current" />Nuestra casa</p>
          <h2 class="heading mb-6">Altos de Serrezuela</h2>
          <p class="prose-body">
            Altos de Serrezuela es un sector poblado de la localidad de Usaquén, zona rural de
            Bogotá, de origen informal y fundado en el año 1967. A pesar de las limitaciones en
            infraestructura y servicios públicos, es una comunidad resiliente con fuerte presencia
            de población infantil y adulta mayor.
          </p>
        </div>
        <img
          v-reveal:zoom
          :src="imgCasaFundacion"
          alt="Casa de la Fundación Mariana Novoa en Altos de Serrezuela"
          loading="lazy"
          class="w-full rounded-[2rem] shadow-2xl"
        />
      </div>
      <div class="mt-16 grid gap-8">
        <img
          v-reveal
          :src="imgOds"
          alt="Impactamos en 12 Objetivos de Desarrollo Sostenible"
          loading="lazy"
          class="w-full"
        />
        <img
          v-reveal
          :src="imgImpacto"
          alt="Objetivos de Desarrollo Sostenible en los que impactamos"
          loading="lazy"
          class="mx-auto w-full max-w-4xl"
        />
      </div>
    </section>

    <!-- Valores -->
    <section class="section-y bg-white">
      <div class="container-page grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <img
          v-reveal:left
          :src="imgMarianita"
          alt="Ilustración de Marianita"
          loading="lazy"
          class="mx-auto w-48 sm:w-64 lg:w-80"
        />
        <div>
          <SectionHeading align="left" eyebrow="Lo que nos mueve" title="Nuestros valores" />
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="(valor, i) in valores"
              :key="valor.nombre"
              v-reveal="i * 70"
              class="flex items-center gap-3 rounded-full bg-cream py-2 pr-6 pl-2 font-display font-semibold text-plum-800 ring-1 ring-plum-100 transition duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-brand-500/30 md:text-lg"
            >
              <span
                class="grid size-10 place-items-center rounded-full bg-white text-xl text-brand-500 shadow-sm"
              >
                <i :class="['mdi', valor.icon]" />
              </span>
              {{ valor.nombre }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section id="equipo" class="section-y container-page">
      <SectionHeading eyebrow="Las personas detrás" title="Equipo de trabajo" />
      <div class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        <figure
          v-for="(miembro, i) in equipo"
          :key="miembro.nombre"
          v-reveal="(i % 4) * 100"
          class="group text-center"
        >
          <img
            :src="miembro.foto"
            :alt="miembro.nombre"
            loading="lazy"
            class="mx-auto aspect-square w-full max-w-56 object-contain transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
          />
          <figcaption class="mt-4">
            <p class="font-display font-bold text-plum-800 md:text-lg">{{ miembro.nombre }}</p>
            <p class="mt-1 text-sm text-ink/60">{{ miembro.cargo }}</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Proyecto social -->
    <section class="container-page pb-16 md:pb-24">
      <div
        v-reveal:zoom
        class="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-20 text-center shadow-2xl md:py-28"
      >
        <img
          :src="imgBannerFiltro"
          alt=""
          loading="lazy"
          class="absolute inset-0 -z-10 size-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-br from-plum-900/85 to-brand-600/70" />
        <p class="eyebrow mb-4 justify-center text-sun-300!">Proyecto social</p>
        <h2
          class="mx-auto max-w-4xl font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        >
          En Altos de Serrezuela apoyamos a
          <span class="text-sun-300">120 niños, niñas y adolescentes</span>
        </h2>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <RouterLink to="/ejes/social" class="btn btn-light">Conoce el proyecto</RouterLink>
          <RouterLink to="/plan-padrino" class="btn btn-ghost">Apadrina a un niño</RouterLink>
        </div>
      </div>
    </section>

    <!-- Aliados -->
    <section class="bg-white py-16 md:py-20">
      <div class="container-page">
        <SectionHeading eyebrow="Gracias" title="Aliados institucionales" />
      </div>
      <div
        class="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul
          class="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused] md:gap-16"
        >
          <li
            v-for="(src, i) in [...aliados, ...aliados]"
            :key="i"
            :aria-hidden="i >= aliados.length"
          >
            <img
              :src="src"
              :alt="i < aliados.length ? `Aliado ${i + 1}` : ''"
              loading="lazy"
              class="h-16 w-32 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-20 md:w-40"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
