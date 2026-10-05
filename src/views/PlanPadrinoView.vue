<script setup lang="ts">
import CtaBand from '@/components/CtaBand.vue'
import YoutubeLite from '@/components/YoutubeLite.vue'
import { pub, whatsappMessage } from '@/services/site'

const apadrinar = whatsappMessage('Hola, quiero apadrinar a un niño o niña')
</script>

<template>
  <div>
    <h1 class="sr-only">Plan Padrino</h1>
    <img
      :src="pub('/img/planPadrino/BANNER-PLAN-PADRINO.webp')"
      alt="Plan Padrino"
      fetchpriority="high"
      class="w-full"
    />

    <section class="section-y container-page">
      <div class="grid items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div v-reveal:left class="text-center lg:text-left">
          <p class="eyebrow mb-3 justify-center lg:justify-start">
            <span class="h-0.5 w-6 rounded-full bg-current" />Plan Padrino
          </p>
          <h2 class="heading mb-6">Acompaña el crecimiento de un niño o niña</h2>
          <p class="prose-body">
            El <strong class="text-plum-700">Plan Padrino</strong> de la Fundación Mariana Novoa es
            un programa de participación ciudadana con el objetivo de acompañar y apoyar a un niño,
            niña o adolescente de la organización en su proceso de formación artística, deportiva y
            acompañamiento psicosocial. La persona que realice la vinculación para ser Madrina o
            Padrino, hace un aporte mensual, trimestral, semestral o anual para garantizar un apoyo
            continuo y efectivo durante sus jornadas pedagógicas.
          </p>
          <div
            class="mt-8 rounded-3xl bg-gradient-to-r from-plum-600 to-brand-500 p-8 text-white shadow-xl shadow-plum-600/20"
          >
            <p class="font-display text-xl leading-snug font-bold md:text-2xl">
              Ayúdanos a transformar.
              <span class="block text-sun-300">
                ¡Juntos podemos brindar mejores oportunidades a la población infantil!
              </span>
            </p>
          </div>
        </div>
        <YoutubeLite
          v-reveal:right
          id="_uaAE75eh9E"
          title="Plan Padrino"
          vertical
          class="mx-auto w-full max-w-xs"
        />
      </div>
    </section>

    <section class="container-page grid gap-8 pb-8">
      <img
        v-reveal
        :src="pub('/img/planPadrino/como-ser-parte.webp')"
        alt="Cómo ser parte del Plan Padrino"
        loading="lazy"
        class="w-full rounded-[2rem] shadow-lg"
      />
      <img
        v-reveal
        :src="pub('/img/planPadrino/BENEFICIOS.webp')"
        alt="Beneficios del Plan Padrino"
        loading="lazy"
        class="w-full rounded-[2rem] shadow-lg"
      />
    </section>

    <CtaBand eyebrow="Únete hoy" title="¡Sé parte del cambio!">
      <a
        :href="apadrinar"
        target="_blank"
        rel="noopener"
        class="btn btn-light group px-10! py-4! text-lg!"
      >
        <i class="mdi mdi-whatsapp text-2xl text-emerald-500 transition group-hover:rotate-12" />
        Quiero apadrinar
      </a>
    </CtaBand>
  </div>
</template>
