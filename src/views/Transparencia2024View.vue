<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import { pub } from '@/services/site'

const pdfPath = '/docs/38ba0d1431f512d810480f3dbaac18ad.pdf'
const pdfUrl = pub(pdfPath)

const resultados = [
  {
    cifra: '97',
    titulo: 'niñas, niños y adolescentes',
    detalle: 'vinculados al programa social de Altos de Serrezuela.',
  },
  {
    cifra: '30',
    titulo: 'menores en Cartagena',
    detalle: 'participaron en el programa preventivo Saber Nadar.',
  },
  {
    cifra: '7',
    titulo: 'almuerzos comunitarios',
    detalle: 'realizados junto a la comunidad de Altos de Serrezuela.',
  },
  {
    cifra: '364',
    titulo: 'horas de voluntariado',
    detalle: 'aportadas por MTS en una jornada de restauración de la sede.',
  },
]

const contenidos = [
  {
    paginas: '01–13 y 29',
    titulo: 'Certificaciones y transparencia',
    detalle:
      'Certificaciones sobre antecedentes y caducidad de contratos, cargos directivos, remuneración voluntaria y cumplimiento tributario.',
  },
  {
    paginas: '14–28 y 60–70',
    titulo: 'Historia y representación legal',
    detalle:
      'Acta extraordinaria y reformas estatutarias, junto con certificados de existencia y representación de la Cámara de Comercio.',
  },
  {
    paginas: '30–54',
    titulo: 'Informe anual de gestión 2023',
    detalle:
      'Resultados de los ejes preventivo y social, proyectos, campañas, actividades comunitarias y trabajo con aliados.',
  },
  {
    paginas: '55–59',
    titulo: 'Gobierno y aprobación de resultados',
    detalle:
      'Acta del Consejo de Fundadores de marzo de 2024 y aprobación unánime de los estados financieros de 2023.',
  },
  {
    paginas: '71–73',
    titulo: 'Reinversión de excedentes',
    detalle:
      'Informe de ejecución de recursos destinados a fortalecer el proyecto de intervención artística.',
  },
  {
    paginas: '74–85',
    titulo: 'Notas y estados financieros',
    detalle:
      'Políticas contables, notas comparativas 2023–2022 y estados de situación financiera, resultados, flujos de efectivo y cambios en el patrimonio.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Transparencia · 2024"
      title="Una gestión abierta, una historia compartida"
      subtitle="Conoce el trabajo, las decisiones y la información financiera de la Fundación Mariana Novoa."
      tone="plum"
    />

    <section class="section-y container-page">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">
          Expediente institucional · 2024
        </p>
        <h2 class="mt-3 font-display text-3xl font-extrabold text-plum-800 sm:text-4xl">
          Cuidar, prevenir y transformar
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70">
          Este expediente reúne certificaciones legales, actas, información financiera y la memoria
          de gestión de 2023. La presentación resume sus principales avances y te orienta para
          encontrar cada documento en el archivo original.
        </p>
      </div>

      <div
        class="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border border-plum-100 bg-white p-5 shadow-sm sm:flex-row sm:p-6"
      >
        <div class="flex items-center gap-4">
          <span
            class="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-3xl text-brand-600"
            aria-hidden="true"
          >
            <i class="mdi mdi-file-pdf-box" />
          </span>
          <div>
            <p class="font-display text-lg font-bold text-plum-800">Expediente institucional</p>
            <p class="text-sm text-ink/60">PDF · 85 páginas · 2024</p>
          </div>
        </div>
        <a
          :href="pdfUrl"
          download="transparencia-fundacion-mariana-novoa-2024.pdf"
          class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-bold text-white transition hover:bg-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
        >
          <i class="mdi mdi-download text-xl" aria-hidden="true" />
          Descargar PDF
        </a>
      </div>

      <div class="mx-auto mt-3 max-w-3xl text-center">
        <p class="text-sm leading-6 text-ink/55">
          El expediente se publicó en 2024; el informe anual incluido presenta la gestión realizada
          durante 2023.
        </p>
      </div>
    </section>

    <section class="section-y bg-white">
      <div class="container-page">
        <div class="max-w-2xl">
          <p class="text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">La huella del año</p>
          <h2 class="mt-3 font-display text-3xl font-extrabold text-plum-800 sm:text-4xl">
            Presencia que se convierte en oportunidades
          </h2>
          <p class="mt-4 leading-7 text-ink/70">
            La memoria cuenta un trabajo que conecta la prevención de accidentes con el bienestar
            cotidiano de niñas, niños, adolescentes y familias.
          </p>
        </div>

        <div class="mt-9 grid overflow-hidden rounded-2xl border border-plum-100 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="resultado in resultados"
            :key="resultado.cifra"
            class="border-b border-plum-100 p-6 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <p class="font-display text-4xl font-extrabold text-brand-600">{{ resultado.cifra }}</p>
            <h3 class="mt-2 font-bold text-plum-800">{{ resultado.titulo }}</h3>
            <p class="mt-2 text-sm leading-6 text-ink/65">{{ resultado.detalle }}</p>
          </article>
        </div>
        <p class="mt-3 text-sm text-ink/55">
          Cifras reportadas en el informe anual de 2023; corresponden a programas y actividades
          diferentes.
        </p>
      </div>
    </section>

    <section class="section-y container-page">
      <div class="max-w-2xl">
        <p class="text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">Dos ejes de trabajo</p>
        <h2 class="mt-3 font-display text-3xl font-extrabold text-plum-800 sm:text-4xl">
          Prevenir riesgos, fortalecer comunidad
        </h2>
      </div>

      <div class="mt-9 grid gap-10 border-t border-plum-100 pt-8 lg:grid-cols-2 lg:gap-16">
        <article>
          <p class="text-sm font-bold tracking-[0.12em] text-brand-600 uppercase">Eje preventivo</p>
          <h3 class="mt-2 font-display text-2xl font-extrabold text-plum-800">
            Conocimiento que puede salvar vidas
          </h3>
          <p class="mt-4 leading-7 text-ink/70">
            La Fundación analiza las cifras de ahogamiento en Colombia y comparte herramientas para
            reducir accidentes. Desde ASALVO promueve formación en primeros auxilios, RCP y
            operación segura de piscinas y estructuras similares (OPES).
          </p>
          <p class="mt-4 leading-7 text-ink/70">
            En Cartagena, el programa Saber Nadar acercó la enseñanza de la natación a 30 menores
            de Isla de León, en El Pozón, como estrategia de prevención del ahogamiento.
          </p>
        </article>

        <article class="border-t border-plum-100 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p class="text-sm font-bold tracking-[0.12em] text-brand-600 uppercase">Eje social</p>
          <h3 class="mt-2 font-display text-2xl font-extrabold text-plum-800">
            Espacios para crecer y encontrarse
          </h3>
          <p class="mt-4 leading-7 text-ink/70">
            En Altos de Serrezuela, 97 niñas, niños y adolescentes participaron en espacios de arte,
            deporte y acompañamiento psicosocial. El proyecto deportivo “Tras las Huellas de Diego”
            estuvo presente en encuentros atléticos; durante el año, una de sus deportistas obtuvo
            medalla de bronce en los 80 metros planos.
          </p>
          <p class="mt-4 leading-7 text-ink/70">
            La agenda también incluyó siete almuerzos comunitarios y “Mis mejores años”, un espacio
            para personas mayores con actividades artísticas, agroecológicas y de movimiento.
          </p>
        </article>
      </div>
    </section>

    <section class="section-y bg-cream">
      <div class="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p class="text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">Trabajo en alianza</p>
          <h2 class="mt-3 font-display text-3xl font-extrabold text-plum-800">
            Una comunidad que se construye en equipo
          </h2>
          <p class="mt-4 leading-7 text-ink/70">
            El informe registra jornadas de voluntariado con empresas y organizaciones, campañas de
            prevención, actividades culturales y deportivas, apoyo escolar y encuentros para las
            familias.
          </p>
        </div>
        <div class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <article class="border-t-2 border-brand-400 pt-4">
            <h3 class="font-display text-lg font-bold text-plum-800">Voluntariado con propósito</h3>
            <p class="mt-2 text-sm leading-6 text-ink/70">
              Además de la restauración de la sede junto a MTS, el informe destaca actividades con
              Zebra Technologies, Decathlon y Medtronic.
            </p>
          </article>
          <article class="border-t-2 border-brand-400 pt-4">
            <h3 class="font-display text-lg font-bold text-plum-800">Prevención durante todo el año</h3>
            <p class="mt-2 text-sm leading-6 text-ink/70">
              Campañas como “La seguridad no tiene vacaciones” y “Levanto la bandera por nuestra
              seguridad en el agua” llevaron el mensaje preventivo a distintos espacios.
            </p>
          </article>
          <article class="border-t-2 border-brand-400 pt-4">
            <h3 class="font-display text-lg font-bold text-plum-800">Arte, cultura y deporte</h3>
            <p class="mt-2 text-sm leading-6 text-ink/70">
              Talleres, visitas culturales y participación en eventos deportivos acompañaron los
              procesos de niñas, niños y adolescentes.
            </p>
          </article>
          <article class="border-t-2 border-brand-400 pt-4">
            <h3 class="font-display text-lg font-bold text-plum-800">Apoyo a las familias</h3>
            <p class="mt-2 text-sm leading-6 text-ink/70">
              La agenda incluyó encuentros para cuidadores, entrega de útiles y espacios de
              integración con la comunidad.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-y container-page">
      <div class="max-w-2xl">
        <p class="text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">Guía del expediente</p>
        <h2 class="mt-3 font-display text-3xl font-extrabold text-plum-800 sm:text-4xl">
          Lo que encontrarás en las 85 páginas
        </h2>
        <p class="mt-4 leading-7 text-ink/70">
          El archivo reúne gestión social, gobierno institucional y rendición financiera. Esta guía
          resume su contenido en el mismo orden del documento.
        </p>
      </div>

      <ol class="mt-8 divide-y divide-plum-100 border-y border-plum-100">
        <li
          v-for="(item, index) in contenidos"
          :key="item.titulo"
          class="grid gap-2 py-5 sm:grid-cols-[3rem_9rem_1fr] sm:items-start sm:gap-5"
        >
          <span class="font-display text-lg font-extrabold text-brand-500">0{{ index + 1 }}</span>
          <span class="pt-1 text-sm font-semibold text-ink/55">Págs. {{ item.paginas }}</span>
          <div>
            <h3 class="font-display text-lg font-bold text-plum-800">{{ item.titulo }}</h3>
            <p class="mt-1 text-sm leading-6 text-ink/70">{{ item.detalle }}</p>
          </div>
        </li>
      </ol>

      <div class="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-plum-800 p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <p class="text-sm font-bold tracking-[0.12em] text-white/70 uppercase">Consulta el original</p>
          <h2 class="mt-2 font-display text-2xl font-extrabold">El expediente completo, página por página</h2>
          <p class="mt-2 text-sm leading-6 text-white/75">Certificaciones, actas y anexos incluidos en el PDF.</p>
        </div>
        <a
          :href="pdfUrl"
          download="transparencia-fundacion-mariana-novoa-2024.pdf"
          class="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-plum-800 transition hover:bg-brand-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-plum-800 sm:w-auto"
        >
          <i class="mdi mdi-download text-xl" aria-hidden="true" />
          Descargar PDF
        </a>
      </div>
    </section>
  </div>
</template>