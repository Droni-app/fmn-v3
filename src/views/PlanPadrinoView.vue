<template>
  <div>
    <!-- Banner -->
    <img src="/img/planPadrino/BANNER-PLAN-PADRINO.png" alt="Plan Padrino" class="w-full h-auto" />

    <!-- Descripción + Video -->
    <section class="bg-white dark:bg-gray-900 py-16 px-4">
      <div class="container mx-auto max-w-5xl flex flex-col lg:flex-row gap-10 items-center">

        <!-- Texto: 2/3 -->
        <div class="flex flex-col gap-8 lg:w-2/3 text-center lg:text-left">
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            El <strong>Plan Padrino</strong> de la Fundación Mariana Novoa es un programa de
            participación ciudadana con el objetivo de acompañar y apoyar a un niño, niña o
            adolescente de la organización en su proceso de formación artística, deportiva y
            acompañamiento psicosocial. La persona que realice la vinculación para ser Madrina o
            Padrino, hace un aporte mensual, trimestral, semestral o anual para garantizar un apoyo
            continuo y efectivo durante sus jornadas pedagógicas.
          </p>
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-8 py-8 text-white">
            <p class="text-xl md:text-2xl font-bold leading-snug">
              Ayúdanos a transformar.<br />
              <span class="text-pink-200">¡Juntos podemos brindar mejores oportunidades a la población infantil!</span>
            </p>
          </div>
        </div>

        <!-- Video: 1/3 -->
        <div class="lg:w-1/3 w-full max-w-xs mx-auto">
          <iframe
            class="w-full rounded-2xl shadow-xl"
            style="aspect-ratio: 9/16"
            src="https://www.youtube.com/embed/_uaAE75eh9E"
            title="Plan Padrino"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

      </div>
    </section>

    <!-- Cómo ser parte -->
    <section class="bg-white dark:bg-gray-900 py-10 px-4">
      <div class="container mx-auto max-w-4xl">
        <img src="/img/planPadrino/como-ser-parte.jpg" alt="Cómo ser parte" class="w-full h-auto rounded-2xl shadow-md" />
      </div>
    </section>

    <!-- Beneficios -->
    <section class="bg-purple-50 dark:bg-gray-800 py-10 px-4">
      <div class="container mx-auto max-w-4xl">
        <img src="/img/planPadrino/BENEFICIOS.jpg" alt="Beneficios" class="w-full h-auto rounded-2xl shadow-md" />
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 py-20 px-4 text-center">
      <p class="text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">Únete hoy</p>
      <h2 class="text-white font-extrabold text-3xl md:text-4xl mb-10">
        ¡Sé parte del cambio!
      </h2>
      <a
        href="https://api.whatsapp.com/send/?phone=573164284175&text&type=phone_number&app_absent=0"
        target="_blank"
        class="relative inline-flex items-center gap-3 bg-white text-purple-700 font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] group"
      >
        <!-- ping ring -->
        <span class="absolute -inset-1 rounded-full bg-white/30 animate-ping" />
        <i class="mdi mdi-whatsapp text-green-500 text-3xl transition-transform duration-300 group-hover:rotate-12" />
        <span>Quiero apadrinar</span>
      </a>
    </section>
  </div>
</template>
