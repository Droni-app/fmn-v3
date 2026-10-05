<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { pub } from '@/services/site'

const documentos = [
  {
    periodo: 'Informe de gestión 2023',
    href: '/docs/aff91116e9189a0ab6fb60f25d0d2e5f.pdf',
    informe: true,
  },
  { periodo: '2023 – 2024', href: '/docs/38ba0d1431f512d810480f3dbaac18ad.pdf' },
  { periodo: '2022 – 2023', href: '/docs/aaebcef6ccf1cb492948c385a153159d.pdf' },
  { periodo: '2021 – 2022', href: '/docs/bf6630c16150ed8c224d74dd251a24e3.pdf' },
  { periodo: '2018 – 2019', href: '/docs/0c3f35b675c8709b8bedb781541b3b71.pdf' },
  { periodo: '2017 – 2018', href: '/docs/3c20496e74044673a13f767dc83872a3.pdf' },
]

const grupos = [
  {
    titulo: 'Representantes legales',
    personas: [
      {
        cargo: 'Director Ejecutivo',
        nombre: 'Hortensia María Espitaleta Vergara',
        id: 'C.C. No. 52.046.573',
      },
      { cargo: 'Presidente', nombre: 'Yesid Alfredo Novoa González', id: 'C.C. No. 79.465.566' },
      {
        cargo: 'Vicepresidente',
        nombre: 'Hortensia María Espitaleta Vergara',
        id: 'C.C. No. 52.046.573',
      },
    ],
  },
  {
    titulo: 'Órgano de administración',
    personas: [
      {
        cargo: 'Miembro Junta Directiva',
        nombre: 'Yesid Alfredo Novoa González',
        id: 'C.C. No. 79.465.566',
      },
      {
        cargo: 'Miembro Junta Directiva',
        nombre: 'Hortensia María Espitaleta Vergara',
        id: 'C.C. No. 52.046.573',
      },
      {
        cargo: 'Miembro Junta Directiva',
        nombre: 'José Jair Murcia Cumbe',
        id: 'C.C. No. 79.573.345',
      },
      {
        cargo: 'Miembro Junta Directiva',
        nombre: 'Mercedes Vergara de Espitaleta',
        id: 'C.C. No. 33.114.135',
      },
      {
        cargo: 'Miembro Junta Directiva',
        nombre: 'Vanessa Espitaleta Vergara',
        id: 'C.C. No. 52.422.624',
      },
    ],
  },
  {
    titulo: 'Revisores fiscales',
    personas: [
      {
        cargo: 'Revisor Fiscal Principal',
        nombre: 'Hernando Vargas Cotrino',
        id: 'C.C. No. 19.384.901 · T.P. No. 108080-T',
      },
      {
        cargo: 'Revisor Fiscal Suplente',
        nombre: 'Arnulfo De Jesús Mercado Fuentes',
        id: 'C.C. No. 11.171.576 · T.P. No. 106191-T',
      },
    ],
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Decreto 2150 de 2017"
      title="Transparencia"
      subtitle="Información financiera y legal de la Fundación Mariana Novoa."
      tone="plum"
    />

    <section class="section-y container-page">
      <SectionHeading align="left" eyebrow="Documentos" title="Estados financieros" />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(doc, i) in documentos"
          :key="doc.href"
          v-reveal="(i % 3) * 80"
          :href="pub(doc.href)"
          target="_blank"
          rel="noopener"
          :class="[
            'card card-hover group flex items-center gap-4 p-5',
            doc.informe && 'bg-gradient-to-br from-brand-500 to-plum-600 text-white',
          ]"
        >
          <span
            :class="[
              'grid size-14 shrink-0 place-items-center rounded-2xl text-3xl',
              doc.informe ? 'bg-white/20' : 'bg-brand-50 text-brand-500',
            ]"
          >
            <i class="mdi mdi-file-pdf-box" />
          </span>
          <span class="flex-1">
            <span
              :class="['block font-display text-lg font-bold', !doc.informe && 'text-plum-800']"
            >
              {{ doc.periodo }}
            </span>
            <span :class="['text-sm', doc.informe ? 'text-white/80' : 'text-ink/60']"
              >Descargar PDF</span
            >
          </span>
          <i
            class="mdi mdi-download text-2xl opacity-60 transition group-hover:translate-y-0.5 group-hover:opacity-100"
          />
        </a>
      </div>
    </section>

    <section class="section-y bg-white">
      <div class="container-page grid gap-12 lg:grid-cols-3">
        <div v-for="grupo in grupos" :key="grupo.titulo" v-reveal>
          <h2 class="mb-6 font-display text-xl font-extrabold text-plum-800">{{ grupo.titulo }}</h2>
          <ul class="space-y-3">
            <li
              v-for="p in grupo.personas"
              :key="p.cargo + p.nombre"
              class="rounded-2xl border-l-4 border-brand-400 bg-cream p-4"
            >
              <p class="text-xs font-bold tracking-wider text-brand-600 uppercase">{{ p.cargo }}</p>
              <p class="mt-1 font-semibold text-ink">{{ p.nombre }}</p>
              <p class="text-sm text-ink/55">{{ p.id }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
