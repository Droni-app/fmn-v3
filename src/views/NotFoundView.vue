<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  document.title = 'Página no encontrada | Fundación Mariana Novoa'
})

const displayedPath = computed(
  () =>
    `${route.path}${route.fullPath.includes('?') ? route.fullPath.slice(route.fullPath.indexOf('?')) : ''}`,
)
</script>

<template>
  <main>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-5xl text-center">
        <span
          class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-[0.2em] text-white/90"
        >
          404 · página no encontrada
        </span>
        <h1 id="not-found-title" class="mt-5 text-4xl md:text-5xl font-bold leading-tight">
          La ruta no existe, pero seguimos aquí para ayudarte.
        </h1>
        <p class="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
          Si llegaste desde Google Ads, un enlace antiguo o una URL escrita manualmente, te
          devolvemos a una sección real del sitio con el mismo estilo visual de la fundación.
        </p>
      </div>
    </section>

    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div class="space-y-6">
          <div
            class="bg-purple-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-purple-100 dark:border-gray-700 shadow-lg"
          >
            <h2 class="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              Esta página no se encontró
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              La ruta que intentaste abrir no existe dentro del sitio. Puedes volver a la portada,
              abrir contacto o entrar a una sección útil para seguir navegando sin perderte.
            </p>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <RouterLink
                to="/"
                class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 font-bold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-[1.02]"
              >
                Ir al inicio
              </RouterLink>
              <RouterLink
                to="/contacto"
                class="inline-flex items-center justify-center rounded-xl border-2 border-purple-200 bg-white px-5 py-3 font-bold text-purple-700 transition-all duration-300 hover:border-purple-400 hover:bg-purple-50 dark:border-gray-600 dark:bg-gray-900 dark:text-purple-300 dark:hover:bg-gray-800"
              >
                Abrir contacto
              </RouterLink>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <RouterLink
              to="/donar"
              class="group rounded-2xl bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700 p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <p
                class="text-sm font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300"
              >
                Siguiente paso
              </p>
              <h3 class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Donar</h3>
              <p class="mt-2 text-gray-700 dark:text-gray-300">
                Apoya los programas y proyectos de la fundación.
              </p>
            </RouterLink>

            <RouterLink
              to="/ejes/social"
              class="group rounded-2xl bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <p
                class="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300"
              >
                Explorar
              </p>
              <h3 class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Proyecto social
              </h3>
              <p class="mt-2 text-gray-700 dark:text-gray-300">
                Conoce el trabajo en Altos de Serrezuela.
              </p>
            </RouterLink>
          </div>
        </div>

        <aside class="space-y-5">
          <div
            class="bg-rose-50 dark:bg-gray-800 p-6 rounded-2xl border border-rose-100 dark:border-gray-700 shadow-lg"
          >
            <h3 class="text-2xl font-bold text-rose-500 dark:text-rose-300">Ruta solicitada</h3>
            <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <span class="font-semibold text-gray-900 dark:text-gray-100">{{
                displayedPath
              }}</span>
            </p>
          </div>

          <div
            class="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl border border-purple-100 dark:border-gray-700 shadow-lg"
          >
            <h3 class="text-2xl font-bold text-purple-700 dark:text-purple-400">Enlaces útiles</h3>
            <div class="mt-4 grid gap-3">
              <RouterLink
                to="/talleres"
                class="rounded-xl bg-white dark:bg-gray-900 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 border border-purple-100 dark:border-gray-700 transition-colors hover:border-purple-300 dark:hover:border-purple-500"
              >
                Talleres
              </RouterLink>
              <RouterLink
                to="/voluntariado"
                class="rounded-xl bg-white dark:bg-gray-900 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 border border-purple-100 dark:border-gray-700 transition-colors hover:border-purple-300 dark:hover:border-purple-500"
              >
                Voluntariado
              </RouterLink>
              <RouterLink
                to="/noticias"
                class="rounded-xl bg-white dark:bg-gray-900 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 border border-purple-100 dark:border-gray-700 transition-colors hover:border-purple-300 dark:hover:border-purple-500"
              >
                Noticias
              </RouterLink>
            </div>
          </div>

          <div
            class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white shadow-lg"
          >
            <p class="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
              Mensaje rápido
            </p>
            <p class="mt-3 text-lg leading-relaxed text-white/90">
              Si el enlace venía desde una campaña, revisa la URL final o usa una de las rutas de
              arriba para seguir navegando.
            </p>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
