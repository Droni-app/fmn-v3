<script setup lang="ts">
import { ref } from 'vue'
import logoFmnW from '@/assets/logo-FMN-w.webp'
import { contact, links, menu, pub, socials, type NavGroup } from '@/services/site'

const showMap = ref(false)
const year = new Date().getFullYear()
const columns = menu.filter((i): i is NavGroup => 'children' in i)
</script>

<template>
  <footer class="relative mt-10 bg-plum-900 text-white/80">
    <svg
      class="absolute -top-px left-0 h-10 w-full text-cream md:h-16"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 0h1440v40c-120 26-240 39-360 39S840 66 720 40 480 1 360 1 120 14 0 40z"
      />
    </svg>

    <div class="container-page pt-24 pb-24 md:pt-32 md:pb-10">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <img
            :src="logoFmnW"
            alt="Fundación Mariana Novoa"
            class="mb-6 h-14 w-auto"
            loading="lazy"
          />
          <p class="max-w-sm leading-relaxed">
            Desde 2007 honramos la memoria de Mariana previniendo accidentes infantiles y
            transformando vidas en Altos de Serrezuela.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              :class="[
                'grid size-11 place-items-center rounded-full bg-white/10 text-xl text-white transition duration-300 hover:-translate-y-1',
                s.hover,
              ]"
            >
              <i :class="['mdi', s.icon]" />
            </a>
          </div>
        </div>

        <nav v-for="col in columns" :key="col.name" :aria-label="col.name">
          <h3 class="mb-4 font-display text-sm font-bold tracking-[0.2em] text-sun-300 uppercase">
            {{ col.name }}
          </h3>
          <ul class="space-y-2.5">
            <li v-for="child in col.children" :key="child.link">
              <RouterLink :to="child.link" class="transition hover:text-white hover:underline">
                {{ child.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div>
          <h3 class="mb-4 font-display text-sm font-bold tracking-[0.2em] text-sun-300 uppercase">
            Contacto
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                :href="contact.mapsUrl"
                target="_blank"
                rel="noopener"
                class="flex gap-3 transition hover:text-white"
              >
                <i class="mdi mdi-map-marker-outline text-xl text-brand-300" />
                {{ contact.address }}
              </a>
            </li>
            <li v-for="p in contact.phones" :key="p.href">
              <a :href="p.href" class="flex gap-3 transition hover:text-white">
                <i class="mdi mdi-phone-outline text-xl text-brand-300" />{{ p.label }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${contact.email}`"
                class="flex gap-3 break-all transition hover:text-white"
              >
                <i class="mdi mdi-email-outline text-xl text-brand-300" />{{ contact.email }}
              </a>
            </li>
          </ul>
          <a :href="links.donate" target="_blank" rel="noopener" class="btn btn-primary mt-6">
            <i class="mdi mdi-heart" /> Donar ahora
          </a>
        </div>
      </div>

      <!-- Mapa: sólo se carga al pedirlo -->
      <div class="mt-12 overflow-hidden rounded-3xl ring-1 ring-white/10">
        <iframe
          v-if="showMap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.0453008931613!2d-74.0177002!3d4.7621236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8f689ac30d49%3A0xa321f5ab00e3614!2sFundaci%C3%B3n%20Mariana%20Novoa!5e0!3m2!1ses!2ses!4v1626981581592!5m2!1ses!2ses"
          class="h-72 w-full border-0"
          allowfullscreen
          title="Mapa Fundación Mariana Novoa"
          loading="lazy"
        />
        <button
          v-else
          type="button"
          class="flex h-28 w-full cursor-pointer items-center justify-center gap-3 bg-white/5 font-display font-semibold text-white transition hover:bg-white/10"
          @click="showMap = true"
        >
          <i class="mdi mdi-map-search-outline text-2xl text-sun-300" />
          Ver ubicación en el mapa
        </button>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row"
      >
        <p>© {{ year }} Fundación Mariana Novoa. Todos los derechos reservados.</p>
        <a
          :href="pub('/politica.pdf')"
          target="_blank"
          class="hover:text-white hover:underline md:mr-24"
        >
          Política de tratamiento de datos
        </a>
      </div>
    </div>
  </footer>
</template>
