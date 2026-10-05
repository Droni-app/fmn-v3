<script setup lang="ts">
import CtaBand from '@/components/CtaBand.vue'
import MediaSplit from '@/components/MediaSplit.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatCounter from '@/components/StatCounter.vue'
import YoutubeLite from '@/components/YoutubeLite.vue'
import { contact, links, pub } from '@/services/site'
import imgPadrino from '@/assets/ejes/padrino.webp'
import img01 from '@/assets/ejes/01.webp'
import img02 from '@/assets/ejes/02.webp'
import img03 from '@/assets/ejes/03.webp'
import img04 from '@/assets/ejes/04.webp'
import img05 from '@/assets/ejes/05.webp'

const cuadros = [1, 2, 3].map((n) => pub(`/img/ejeSocial/IMAGEN-CUADRADO-0${n}.webp`))

const proyectos = [
  {
    tag: 'Proyecto formativo',
    titulo: '¿Quién soy yo?',
    subtitulo: 'Un ser que sueña, imagina y construye',
    parrafos: [
      'El proyecto <strong>¿Quién Soy Yo?</strong> es una propuesta integral de formación artística y humana que busca acompañar a niños, niñas y adolescentes en su proceso de autodescubrimiento y desarrollo personal. Mediante experiencias artísticas, lúdicas y de exploración, promovemos la creatividad, la expresión, el reconocimiento de la identidad y la participación activa en su comunidad.',
      'Nuestro enfoque está basado en el <strong>arte como herramienta</strong> para el aprendizaje significativo, el fortalecimiento emocional y la construcción de ciudadanía.',
    ],
    banner: pub('/img/ejeSocial/BANNER-ARTE.webp'),
  },
  {
    tag: 'Proyecto deportivo',
    titulo: 'Tras las Huellas de Diego',
    parrafos: [
      '<strong>"Tras las Huellas de Diego"</strong> es un proyecto deportivo en memoria de Diego Pardo, que busca la vinculación de niños, niñas y adolescentes para una formación integral y continúa consolidando hábitos saludables, siendo una alternativa para el aprovechamiento del tiempo libre a través de la práctica del running y el atletismo. Creado por Elena Amézquita y ejecutado por la Fundación Mariana Novoa.',
    ],
    banner: pub('/img/ejeSocial/BANNER-THD.webp'),
  },
  {
    tag: 'Proyecto adulto mayor',
    titulo: 'Mis mejores años',
    subtitulo: 'Un encuentro de adulto mayor',
    parrafos: [
      '<strong>"Mis mejores años, un encuentro de adulto mayor"</strong> es un proyecto diseñado para fomentar el bienestar y la inclusión social de los adultos mayores a través de una variedad de talleres artísticos y culturales. Estas actividades buscan estimular la creatividad, promover la expresión personal y mejorar la calidad de vida de los participantes. Al colaborar con organizaciones e instituciones gubernamentales, se busca asegurar recursos y apoyo para enriquecer las experiencias de los adultos mayores, creando un espacio donde puedan socializar, aprender y disfrutar de su tiempo libre.',
    ],
    banner: pub('/img/ejeSocial/BANNER-ADULTOMAYOR.webp'),
  },
]

const programas = [
  {
    titulo: '¿Quién soy yo? Estimulación temprana y adecuada',
    edad: '3 a 6 años',
    descripcion:
      'Programa con el propósito de incentivar por medio del arte un proceso de estimulación temprana y adecuada en niños y niñas de 3 a 6 años, con el fin de desarrollar las facultades cognitivas, físicas, emocionales y sociales.',
    imagen: img01,
  },
  {
    titulo: '¿Quién soy yo? Un ser que imagina, sueña y construye',
    edad: '7 a 11 años',
    descripcion:
      'Programa para promover un proceso de reconocimiento de identidad en niños y niñas de 7 a 11 años, por medio de una intervención artística que fortalezca sus interacciones sociales y promueva el autocuidado.',
    imagen: img02,
  },
  {
    titulo: 'Soy yo',
    edad: '12 a 15 años',
    descripcion:
      'Programa dirigido a niños, niñas y adolescentes de 12 a 15 años, enfocado en la formación en habilidades y construcción de ciudadanía, por medio de una intervención artística que les permita comprender su entorno social y comunitario.',
    imagen: img03,
  },
  {
    titulo: 'Tras las Huellas de Diego',
    edad: 'Deporte',
    descripcion:
      'Programa deportivo que incentiva la participación de niños, niñas y adolescentes en la práctica de atletismo y running. Creado por Elena Amézquita en honor a su hijo Diego Pardo y ejecutado por la Fundación para una formación integral.',
    imagen: img04,
  },
  {
    titulo: 'Saber nadar',
    edad: 'Natación',
    descripcion:
      'Programa para incentivar el aprendizaje y práctica de la natación en niños y niñas de la Fundación Mariana Novoa, a través de estrategias pedagógicas que incidan en la interacción y adaptación en cuerpos de agua, promoviendo la prevención de ahogamiento.',
    imagen: img05,
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Eje social"
      title="Formación y bienestar para 120 niños, niñas y adolescentes"
      subtitle="En los barrios Altos de Serrezuela, Lomitas, Capilla, Aurora Alta y Aurora Baja en Bogotá."
      tone="plum"
    />

    <img
      :src="pub('/img/banners/SUMERGETE.webp')"
      alt="Sumérgete en nuestro proyecto social"
      class="w-full"
    />

    <div class="grid grid-cols-3">
      <img
        v-for="(src, i) in cuadros"
        :key="src"
        v-reveal="i * 120"
        :src="src"
        alt=""
        loading="lazy"
        class="aspect-square w-full object-cover"
      />
    </div>

    <!-- Cifras -->
    <section class="bg-gradient-to-r from-plum-700 to-brand-500 py-14 text-center text-white">
      <p class="font-display text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
        Actualmente atendemos a
      </p>
      <div class="mt-6 flex flex-wrap items-center justify-center gap-10 sm:gap-20">
        <div>
          <StatCounter
            :value="100"
            class="block font-display text-6xl font-extrabold md:text-8xl"
          />
          <span class="text-lg font-semibold md:text-xl">Niños y niñas</span>
        </div>
        <span class="hidden h-20 w-px bg-white/30 sm:block" />
        <div>
          <StatCounter :value="20" class="block font-display text-6xl font-extrabold md:text-8xl" />
          <span class="text-lg font-semibold md:text-xl">Adultos mayores</span>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <section v-for="(p, i) in proyectos" :key="p.titulo" :class="i % 2 === 0 ? 'bg-white' : ''">
      <div class="section-y container-page max-w-4xl!">
        <div v-reveal>
          <span class="chip bg-brand-50 text-brand-600">{{ p.tag }}</span>
          <h2 class="heading mt-4">{{ p.titulo }}</h2>
          <p v-if="p.subtitulo" class="mt-2 font-display text-xl font-semibold text-brand-500">
            {{ p.subtitulo }}
          </p>
        </div>
        <div class="prose-body mt-8 border-l-4 border-brand-300 pl-6">
          <!-- eslint-disable-next-line vue/no-v-html -- contenido estático propio -->
          <p v-for="(texto, j) in p.parrafos" :key="j" v-reveal v-html="texto" />
        </div>
      </div>
      <img :src="p.banner" :alt="p.titulo" loading="lazy" class="w-full" />
    </section>

    <!-- Plan padrino -->
    <section class="section-y container-page">
      <MediaSplit :image="imgPadrino" alt="Plan Padrino" eyebrow="Apadrina" title="Plan Padrino">
        <p class="prose-body">
          ¿Quieres ser Madrina o Padrino de uno de nuestros niños? Con un aporte mensual
          contribuirás con su formación artística, deportiva y acompañamiento psicosocial.
        </p>
        <p class="mt-4 font-display text-lg font-semibold text-brand-600">
          ¡Únete, una pequeña ayuda por una gran experiencia a su lado!
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/plan-padrino" class="btn btn-plum">Conocer el plan</RouterLink>
          <a :href="links.donateOnline" target="_blank" rel="noopener" class="btn btn-primary">
            <i class="mdi mdi-heart" /> Quiero donar
          </a>
        </div>
      </MediaSplit>
    </section>

    <!-- Programas -->
    <section class="section-y bg-white">
      <div class="container-page">
        <SectionHeading eyebrow="Para cada etapa" title="Conoce nuestros programas formativos" />
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(prog, i) in programas"
            :key="prog.titulo"
            v-reveal="(i % 3) * 100"
            class="card card-hover group overflow-hidden"
          >
            <div class="relative overflow-hidden">
              <img
                :src="prog.imagen"
                :alt="prog.titulo"
                loading="lazy"
                class="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span class="chip absolute top-4 left-4 bg-white/90 shadow">{{ prog.edad }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-plum-800">{{ prog.titulo }}</h3>
              <p class="mt-3 leading-relaxed text-ink/70">{{ prog.descripcion }}</p>
            </div>
          </article>
          <YoutubeLite
            v-reveal="200"
            id="ZbkHcfdlGg4"
            title="Proyecto social"
            class="self-center md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>

    <CtaBand
      eyebrow="Escríbenos"
      title="Ayúdanos a seguir transformando vidas"
      :subtitle="`${contact.phones.map((p) => p.label).join(' · ')} · ${contact.email}`"
    >
      <a :href="links.donate" target="_blank" rel="noopener" class="btn btn-light">
        <i class="mdi mdi-heart text-brand-500" /> Quiero donar
      </a>
      <a :href="contact.whatsapp" target="_blank" rel="noopener" class="btn btn-whatsapp">
        <i class="mdi mdi-whatsapp text-xl" /> Contactar por WhatsApp
      </a>
    </CtaBand>
  </div>
</template>
