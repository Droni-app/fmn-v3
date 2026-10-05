<script setup lang="ts">
import CtaBand from '@/components/CtaBand.vue'
import MediaSplit from '@/components/MediaSplit.vue'
import PageHero from '@/components/PageHero.vue'
import { contact, links, pub, whatsappMessage } from '@/services/site'
import imgRopero from '@/assets/donar/ropero.webp'

const sections = [
  {
    eyebrow: 'Apadrina',
    title: 'Plan padrino',
    description:
      '¿Quieres ser Madrina o Padrino de uno de nuestros niños? Con un aporte mensual contribuirás con su formación artística, deportiva y acompañamiento psicosocial, brindando mejores oportunidades durante su proceso de crecimiento.',
    cta: '¡Únete, una pequeña ayuda por una gran experiencia a su lado!',
    image: pub('/img/donar/PP-NINOS.webp'),
    message: 'Hola, quiero ser parte del Plan Padrino',
  },
  {
    eyebrow: 'Súmate',
    title: 'Red de amigos',
    description:
      '¿Quieres ser parte de una gran red de ayuda para nuestra organización? ¡Apoya nuestro Proyecto Social en Altos de Serrezuela desde $1.000 en adelante!',
    cta: '¡Vincúlate y sé amigo de la Fundación Mariana Novoa!',
    image: pub('/img/donar/SIBYL.webp'),
    message: 'Hola, quiero ser parte de la Red de Amigos',
  },
  {
    eyebrow: 'Dona en especie',
    title: 'Ropero',
    description:
      '¿Tienes ropa o elementos que ya no uses y estén en buen estado? Dónalos y dales una segunda oportunidad.',
    cta: null,
    image: imgRopero,
    message: 'Hola, quiero donar ropa o elementos al Ropero',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Tu aporte transforma vidas"
      title="Formas de donar"
      subtitle="Con tu ayuda, 120 niños, niñas y adolescentes de Altos de Serrezuela acceden a arte, deporte y acompañamiento psicosocial."
    >
      <a :href="links.donate" target="_blank" rel="noopener" class="btn btn-light">
        <i class="mdi mdi-heart text-brand-500" /> Donar en línea
      </a>
    </PageHero>

    <section
      v-for="(s, i) in sections"
      :key="s.title"
      :class="['section-y', i % 2 === 1 && 'bg-white']"
    >
      <div class="container-page">
        <MediaSplit
          :image="s.image"
          :alt="s.title"
          :reverse="i % 2 === 1"
          :eyebrow="s.eyebrow"
          :title="s.title"
        >
          <p class="prose-body">{{ s.description }}</p>
          <p v-if="s.cta" class="mt-4 font-display text-lg font-semibold text-brand-600">
            {{ s.cta }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="whatsappMessage(s.message)"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp"
            >
              <i class="mdi mdi-whatsapp text-xl" /> Quiero ser parte
            </a>
            <a :href="links.donateOnline" target="_blank" rel="noopener" class="btn btn-primary">
              <i class="mdi mdi-heart" /> Quiero donar
            </a>
          </div>
        </MediaSplit>
      </div>
    </section>

    <CtaBand
      eyebrow="¿Tienes dudas?"
      title="Hablemos sobre cómo puedes ayudar"
      subtitle="Te contamos el destino de tu aporte y otras formas de vincularte."
    >
      <a :href="contact.whatsapp" target="_blank" rel="noopener" class="btn btn-whatsapp">
        <i class="mdi mdi-whatsapp text-xl" /> Escríbenos
      </a>
      <RouterLink to="/transparencia" class="btn btn-ghost">Ver transparencia</RouterLink>
    </CtaBand>
  </div>
</template>
