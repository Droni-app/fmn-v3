<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-4xl md:text-5xl font-bold">Decreto 2150 de 2017</h1>
      </div>
    </section>

    <!-- Estados Financieros -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-10">Estados Financieros</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="doc in documentos" :key="doc.periodo" :class="['bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-t-4 hover:shadow-xl transition-shadow duration-300', doc.color ?? 'border-purple-600']">
            <h3 :class="['text-2xl font-bold mb-4', doc.textColor ?? 'text-purple-700 dark:text-purple-400']">{{ doc.periodo }}</h3>
            <a :href="doc.href" target="_blank" :class="['inline-block font-bold py-2 px-6 rounded-lg transition-colors duration-300 text-white', doc.btnColor ?? 'bg-purple-600 hover:bg-purple-700']">
              Descargar documento
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Representantes -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8">REPRESENTANTES LEGALES</h2>
        <div class="space-y-4">
          <div v-for="r in representantes" :key="r.cargo" class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">{{ r.cargo }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ r.nombre }}<br /><span class="text-sm text-gray-500">{{ r.id }}</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Junta Directiva -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8">ÓRGANO DE ADMINISTRACIÓN</h2>
        <div class="space-y-3">
          <div v-for="m in junta" :key="m.nombre" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border-l-4 border-purple-600">
            <p class="text-gray-700 dark:text-gray-300">
              <strong>{{ m.nombre }}</strong> – {{ m.cargo }}<br />
              <span class="text-sm text-gray-500">{{ m.id }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Revisores Fiscales -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8">REVISORES FISCALES</h2>
        <div class="space-y-4">
          <div v-for="r in revisores" :key="r.cargo" class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">{{ r.cargo }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ r.nombre }}<br /><span class="text-sm text-gray-500">{{ r.id }}</span></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const documentos = [
  { periodo: '2017-2018', href: '/docs/3c20496e74044673a13f767dc83872a3.pdf' },
  { periodo: '2018-2019', href: '/docs/0c3f35b675c8709b8bedb781541b3b71.pdf' },
  { periodo: '2021-2022', href: '/docs/bf6630c16150ed8c224d74dd251a24e3.pdf' },
  { periodo: '2022-2023', href: '/docs/aaebcef6ccf1cb492948c385a153159d.pdf' },
  { periodo: '2023-2024', href: '/docs/38ba0d1431f512d810480f3dbaac18ad.pdf' },
  { periodo: 'INFORME 2023', href: '/docs/aff91116e9189a0ab6fb60f25d0d2e5f.pdf', color: 'border-pink-600', textColor: 'text-pink-700 dark:text-pink-400', btnColor: 'bg-pink-600 hover:bg-pink-700' },
]

const representantes = [
  { cargo: 'Director Ejecutivo', nombre: 'Hortensia María Espitaleta Vergara', id: 'C.C. No. 52.046.573' },
  { cargo: 'Presidente', nombre: 'Yesid Alfredo Novoa González', id: 'C.C. No. 79.465.566' },
  { cargo: 'Vicepresidente', nombre: 'Hortensia María Espitaleta Vergara', id: 'C.C. No. 52.046.573' },
]

const junta = [
  { nombre: 'Yesid Alfredo Novoa González', cargo: 'Miembro Junta Directiva', id: 'C.C. No. 79.465.566' },
  { nombre: 'Hortensia María Espitaleta Vergara', cargo: 'Miembro Junta Directiva', id: 'C.C. No. 52.046.573' },
  { nombre: 'José Jair Murcia Cumbe', cargo: 'Miembro Junta Directiva', id: 'C.C. No. 79.573.345' },
  { nombre: 'Mercedes Vergara de Espitaleta', cargo: 'Miembro Junta Directiva', id: 'C.C. No. 33.114.135' },
  { nombre: 'Vanessa Espitaleta Vergara', cargo: 'Miembro Junta Directiva', id: 'C.C. No. 52.422.624' },
]

const revisores = [
  { cargo: 'Revisor Fiscal Principal', nombre: 'Hernando Vargas Cotrino', id: 'C.C. No. 19.384.901 · T.P. No. 108080-T' },
  { cargo: 'Revisor Fiscal Suplente', nombre: 'Arnulfo De Jesús Mercado Fuentes', id: 'C.C. No. 11.171.576 · T.P. No. 106191-T' },
]
</script>
