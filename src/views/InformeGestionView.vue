<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { pub } from '@/services/site'
import { informesGestion, type SlideTone } from '@/services/informesGestion'

const props = defineProps<{ year: string }>()

const informe = computed(() => informesGestion[props.year]!)
const pdfUrl = computed(() => pub(informe.value.pdf))
const pdfName = computed(() => `informe-gestion-fundacion-mariana-novoa-${informe.value.anio}.pdf`)
const otrosAnios = computed(() => Object.keys(informesGestion).filter((a) => a !== props.year))

/** Portada + diapositivas de contenido + cierre. */
const totalSlides = computed(() => informe.value.slides.length + 2)
const pad = (n: number) => String(n).padStart(2, '0')

const tones: Record<
  SlideTone,
  { bg: string; accent: string; muted: string; chip: string; line: string }
> = {
  plum: {
    bg: 'bg-plum-800 text-white',
    accent: 'text-sun-300',
    muted: 'text-white/75',
    chip: 'bg-white/10 ring-white/15',
    line: 'border-white/15',
  },
  brand: {
    bg: 'bg-gradient-to-br from-brand-500 to-plum-600 text-white',
    accent: 'text-white',
    muted: 'text-white/80',
    chip: 'bg-white/15 ring-white/20',
    line: 'border-white/20',
  },
  ocean: {
    bg: 'bg-gradient-to-br from-ocean-900 to-ocean-700 text-white',
    accent: 'text-ocean-400',
    muted: 'text-white/75',
    chip: 'bg-white/10 ring-white/15',
    line: 'border-white/15',
  },
  sun: {
    bg: 'bg-sun-300 text-plum-900',
    accent: 'text-plum-700',
    muted: 'text-plum-900/75',
    chip: 'bg-white/50 ring-plum-900/10',
    line: 'border-plum-900/15',
  },
  light: {
    bg: 'bg-white text-ink',
    accent: 'text-brand-600',
    muted: 'text-ink/70',
    chip: 'bg-brand-50 ring-brand-100',
    line: 'border-plum-100',
  },
}

/* Indicador de diapositiva activa */
const slideEls = ref<HTMLElement[]>([])
const active = ref(0)
let observer: IntersectionObserver | undefined

const observe = () => {
  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = Number((e.target as HTMLElement).dataset.index)
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  slideEls.value.forEach((el) => observer!.observe(el))
}

const goTo = (i: number) =>
  slideEls.value[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })

onMounted(observe)
watch(
  () => props.year,
  () => {
    active.value = 0
    requestAnimationFrame(observe)
  },
)
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="bg-cream pb-16">
    <!-- Navegación de diapositivas -->
    <nav
      aria-label="Diapositivas del informe"
      class="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
    >
      <button
        v-for="i in totalSlides"
        :key="i"
        type="button"
        :aria-label="`Ir a la diapositiva ${i}`"
        :aria-current="active === i - 1"
        class="size-2.5 rounded-full ring-1 ring-plum-900/20 transition-all"
        :class="active === i - 1 ? 'h-6 bg-brand-500' : 'bg-white hover:bg-plum-200'"
        @click="goTo(i - 1)"
      />
    </nav>

    <div class="container-page space-y-6 pt-6 md:space-y-8 md:pt-10">
      <!-- 01 · Portada -->
      <section
        :ref="(el) => (slideEls[0] = el as HTMLElement)"
        data-index="0"
        class="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum-700 via-plum-600 to-brand-500 text-white shadow-2xl shadow-plum-900/20"
      >
        <div
          class="absolute -top-24 -left-24 -z-10 size-72 animate-float rounded-full bg-white/15 blur-2xl"
        />
        <div
          class="absolute -right-16 -bottom-16 -z-10 size-96 animate-float rounded-full bg-sun-300/25 blur-3xl [animation-delay:-4s]"
        />
        <div
          class="grid min-h-[min(80vh,52rem)] items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-16"
        >
          <div>
            <RouterLink
              to="/transparencia"
              class="flex w-fit items-center gap-1 text-sm font-semibold text-white/75 hover:text-white"
            >
              <i class="mdi mdi-arrow-left" /> Transparencia
            </RouterLink>
            <p
              class="mt-6 inline-flex rounded-full bg-white/15 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.2em] uppercase ring-1 ring-white/30 sm:text-sm"
            >
              Informe de gestión anual
            </p>
            <h1
              class="mt-4 animate-fade-up font-display text-7xl leading-none font-black tracking-tight sm:text-8xl lg:text-9xl"
            >
              {{ informe.anio }}
            </h1>
            <p
              class="mt-4 animate-fade-up font-display text-2xl leading-tight font-bold [animation-delay:100ms] sm:text-3xl"
            >
              {{ informe.titulo }}
            </p>
            <p class="mt-5 max-w-xl animate-fade-up text-lg text-white/85 [animation-delay:200ms]">
              {{ informe.resumen }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a :href="pdfUrl" :download="pdfName" class="btn bg-white text-plum-800 hover:bg-brand-50">
                <i class="mdi mdi-download text-xl" /> Descargar PDF
              </a>
              <button
                type="button"
                class="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
                @click="goTo(1)"
              >
                Ver presentación <i class="mdi mdi-arrow-down" />
              </button>
            </div>
            <p class="mt-4 text-sm text-white/65">PDF · {{ informe.paginas }} páginas</p>
          </div>
          <img
            :src="informe.portada"
            :alt="`Portada del Informe de Gestión Anual ${informe.anio}`"
            fetchpriority="high"
            :class="[
              'mx-auto w-full rounded-2xl shadow-2xl ring-4 ring-white/20 lg:rotate-2',
              informe.portadaHorizontal ? 'max-w-xl' : 'max-w-sm',
            ]"
          />
        </div>
        <span class="absolute right-6 bottom-5 font-display text-sm font-bold text-white/60">
          {{ pad(1) }} / {{ pad(totalSlides) }}
        </span>
      </section>

      <!-- Diapositivas de contenido -->
      <section
        v-for="(slide, i) in informe.slides"
        :key="`${informe.anio}-${i}`"
        :ref="(el) => (slideEls[i + 1] = el as HTMLElement)"
        :data-index="i + 1"
        :class="[
          'relative overflow-hidden rounded-[2rem] shadow-xl shadow-plum-900/10',
          tones[slide.tono].bg,
          slide.tono === 'light' && 'ring-1 ring-plum-900/5',
        ]"
      >
        <div class="grid min-h-[min(70vh,44rem)] items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <!-- Columna izquierda: titular -->
          <div v-reveal>
            <p
              :class="[
                'font-display text-xs font-bold tracking-[0.2em] uppercase sm:text-sm',
                tones[slide.tono].accent,
              ]"
            >
              {{ slide.eyebrow }}
            </p>
            <h2 class="mt-3 font-display text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
              {{ slide.titulo }}
            </h2>
            <p v-if="slide.texto" :class="['mt-5 text-lg leading-relaxed', tones[slide.tono].muted]">
              {{ slide.texto }}
            </p>
            <div v-if="slide.destacado" class="mt-8">
              <p
                :class="[
                  'font-display text-7xl leading-none font-black tracking-tight sm:text-8xl',
                  tones[slide.tono].accent,
                ]"
              >
                {{ slide.destacado.valor }}
              </p>
              <p class="mt-2 max-w-sm font-display text-lg font-bold">
                {{ slide.destacado.etiqueta }}
              </p>
            </div>
          </div>

          <!-- Columna derecha: detalle -->
          <div v-reveal="150" class="space-y-6">
            <blockquote
              v-if="slide.cita"
              :class="['rounded-3xl p-6 ring-1 sm:p-8', tones[slide.tono].chip]"
            >
              <i :class="['mdi mdi-format-quote-open text-5xl leading-none', tones[slide.tono].accent]" />
              <p class="mt-2 font-display text-xl leading-snug font-semibold sm:text-2xl">
                {{ slide.cita.texto }}
              </p>
              <footer :class="['mt-4 text-sm font-semibold', tones[slide.tono].muted]">
                — {{ slide.cita.autor }}
              </footer>
            </blockquote>

            <ul v-if="slide.items" :class="['divide-y border-y', tones[slide.tono].line]">
              <li
                v-for="item in slide.items"
                :key="item.texto"
                :class="['flex items-center gap-4 py-4', tones[slide.tono].line]"
              >
                <span
                  v-if="item.valor"
                  :class="[
                    'w-16 shrink-0 font-display text-3xl font-black tabular-nums',
                    tones[slide.tono].accent,
                  ]"
                >
                  {{ item.valor }}
                </span>
                <i
                  v-else
                  :class="['mdi mdi-check-circle shrink-0 text-2xl', tones[slide.tono].accent]"
                />
                <span class="leading-snug font-medium">{{ item.texto }}</span>
              </li>
            </ul>

            <div v-if="slide.cifras" class="grid grid-cols-2 gap-4">
              <div
                v-for="cifra in slide.cifras"
                :key="cifra.etiqueta"
                :class="['rounded-3xl p-5 ring-1 last:odd:col-span-2 sm:p-6', tones[slide.tono].chip]"
              >
                <p
                  :class="[
                    'font-display text-4xl font-black tracking-tight sm:text-5xl',
                    tones[slide.tono].accent,
                  ]"
                >
                  {{ cifra.valor }}
                </p>
                <p :class="['mt-1 text-sm leading-snug font-semibold', tones[slide.tono].muted]">
                  {{ cifra.etiqueta }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <span
          :class="['absolute right-6 bottom-5 font-display text-sm font-bold opacity-60']"
        >
          {{ pad(i + 2) }} / {{ pad(totalSlides) }}
        </span>
      </section>

      <!-- Cierre -->
      <section
        :ref="(el) => (slideEls[totalSlides - 1] = el as HTMLElement)"
        :data-index="totalSlides - 1"
        class="relative overflow-hidden rounded-[2rem] bg-plum-900 text-white shadow-2xl shadow-plum-900/20"
      >
        <div class="flex min-h-[min(50vh,30rem)] flex-col items-center justify-center p-6 text-center sm:p-10 lg:p-16">
          <i class="mdi mdi-file-pdf-box text-6xl text-brand-400" />
          <h2 class="mt-4 max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
            Consulta el informe completo {{ informe.anio }}
          </h2>
          <p class="mt-3 max-w-xl text-white/75">
            Esta presentación resume los datos más relevantes. Descarga el documento original para
            conocer el detalle de cada proyecto, actividad y aliado.
          </p>
          <a :href="pdfUrl" :download="pdfName" class="btn btn-primary mt-8">
            <i class="mdi mdi-download text-xl" /> Descargar PDF · {{ informe.paginas }} páginas
          </a>
          <div class="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <RouterLink
              v-for="anio in otrosAnios"
              :key="anio"
              :to="`/transparencia/gestion/${anio}`"
              class="rounded-full px-4 py-2 font-semibold ring-1 ring-white/25 transition hover:bg-white/10"
            >
              Ver informe {{ anio }} <i class="mdi mdi-arrow-right" />
            </RouterLink>
            <RouterLink
              to="/transparencia"
              class="rounded-full px-4 py-2 font-semibold ring-1 ring-white/25 transition hover:bg-white/10"
            >
              Volver a Transparencia
            </RouterLink>
          </div>
        </div>
        <span class="absolute right-6 bottom-5 font-display text-sm font-bold text-white/60">
          {{ pad(totalSlides) }} / {{ pad(totalSlides) }}
        </span>
      </section>
    </div>
  </div>
</template>
