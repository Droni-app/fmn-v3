<script setup lang="ts">
import imgPadrino from '@/assets/ejes/padrino.webp'
import img01 from '@/assets/ejes/01.jpg'
import img02 from '@/assets/ejes/02.jpg'
import img03 from '@/assets/ejes/03.jpg'
import img04 from '@/assets/ejes/04.jpg'
import img05 from '@/assets/ejes/05.jpg'

const programas = [
  {
    titulo: '¿QUIÉN SOY YO? ESTIMULACIÓN TEMPRANA Y ADECUADA',
    descripcion:
      'Programa con el propósito de incentivar por medio del arte un proceso de estimulación temprana y adecuada en niños y niñas de 3 a 6 años, con el fin de desarrollar las facultades cognitivas, físicas, emocionales y sociales.',
    imagen: img01,
    reverse: false,
  },
  {
    titulo: '¿QUIÉN SOY YO? UN SER QUE IMAGINA, SUEÑA Y CONSTRUYE',
    descripcion:
      'Programa para promover un proceso de reconocimiento de identidad en niños y niñas de 7 a 11 años, por medio de una intervención artística que fortalezca sus interacciones sociales y promueva el autocuidado.',
    imagen: img02,
    reverse: true,
  },
  {
    titulo: 'SOY YO',
    descripcion:
      'Programa dirigido a niños, niñas y adolescentes de 12 a 15 años, enfocado en la formación en habilidades y construcción de ciudadanía, por medio de una intervención artística que les permita comprender su entorno social y comunitario.',
    imagen: img03,
    reverse: false,
  },
  {
    titulo: 'Tras las Huellas de Diego',
    descripcion:
      'Programa deportivo que incentiva la participación de niños, niñas y adolescentes en la práctica de atletismo y running. Creado por Elena Amézquita en honor a su hijo Diego Pardo y ejecutado por la Fundación para una formación integral.',
    imagen: img04,
    reverse: true,
  },
  {
    titulo: 'Saber nadar',
    descripcion:
      'Programa para incentivar el aprendizaje y práctica de la natación en niños y niñas de la Fundación Mariana Novoa, a través de estrategias pedagógicas que incidan en la interacción y adaptación en cuerpos de agua, promoviendo la prevención de ahogamiento.',
    imagen: img05,
    reverse: false,
  },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-5xl text-center">
        <h1 class="text-3xl md:text-5xl font-bold">
          Apoyamos la formación y bienestar de 120 niños, niñas y adolescentes de los barrios Altos
          de Serrezuela, Lomitas, Capilla, Aurora Alta y Aurora Baja en Bogotá.
        </h1>
      </div>
    </section>
    <img src="/img/banners/SUMERGETE.png" alt="Ejes sociales" class="w-full h-auto object-cover" />

    <div class="grid grid-cols-1 md:grid-cols-3">
      <img src="/img/ejeSocial/IMAGEN-CUADRADO-01.webp" alt="" class="w-full h-auto object-cover" />
      <img src="/img/ejeSocial/IMAGEN-CUADRADO-02.webp" alt="" class="w-full h-auto object-cover" />
      <img src="/img/ejeSocial/IMAGEN-CUADRADO-03.webp" alt="" class="w-full h-auto object-cover" />
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4 text-white text-center">
      <p class="text-sm md:text-base font-semibold tracking-widest uppercase opacity-80 mb-4">
        Actualmente atendemos a
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
        <div class="flex flex-col items-center">
          <span class="text-6xl md:text-8xl font-extrabold leading-none">100</span>
          <span class="text-lg md:text-xl font-semibold tracking-wide mt-1">Niños</span>
        </div>
        <div class="w-px h-16 bg-white/30 hidden sm:block" />
        <div class="flex flex-col items-center">
          <span class="text-6xl md:text-8xl font-extrabold leading-none">20</span>
          <span class="text-lg md:text-xl font-semibold tracking-wide mt-1">Adultos Mayores</span>
        </div>
      </div>
    </div>

    <!-- ¿Quién soy yo? -->
    <section class="bg-purple-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-4xl px-4 py-16 flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <span class="text-xs font-bold tracking-widest uppercase text-pink-500 dark:text-pink-400">
            Proyecto formativo
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-300 leading-tight">
            ¿Quién soy yo?
          </h2>
          <p class="text-xl font-semibold text-pink-600 dark:text-pink-400">
            Un ser que sueña, imagina y construye
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-purple-400 pl-5">
            El proyecto <strong>¿Quién Soy Yo?</strong> es una propuesta integral de formación
            artística y humana que busca acompañar a niños, niñas y adolescentes en su proceso de
            autodescubrimiento y desarrollo personal. Mediante experiencias artísticas, lúdicas y de
            exploración, promovemos la creatividad, la expresión, el reconocimiento de la identidad y
            la participación activa en su comunidad.
          </p>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-pink-400 pl-5">
            Nuestro enfoque está basado en el <strong>arte como herramienta</strong> para el
            aprendizaje significativo, el fortalecimiento emocional y la construcción de ciudadanía.
          </p>
        </div>
      </div>
      <img
        src="/img/ejeSocial/BANNER-ARTE.png"
        alt="¿Quién soy yo?"
        class="w-full h-auto"
      />
    </section>

    <!-- Tras las Huellas de Diego -->
    <section class="bg-pink-50 dark:bg-gray-900">
      <div class="container mx-auto max-w-4xl px-4 py-16 flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <span class="text-xs font-bold tracking-widest uppercase text-purple-500 dark:text-purple-400">
            Proyecto deportivo
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-300 leading-tight">
            Tras las Huellas de Diego
          </h2>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-pink-400 pl-5">
            <strong>"Tras las Huellas de Diego"</strong> es un proyecto deportivo en memoria de
            Diego Pardo, que busca la vinculación de niños, niñas y adolescentes para una formación
            integral y continúa consolidando hábitos saludables, siendo una alternativa para el
            aprovechamiento del tiempo libre a través de la práctica del running y el atletismo.
            Creado por Elena Amézquita y ejecutado por la Fundación Mariana Novoa.
          </p>
        </div>
      </div>
      <img
        src="/img/ejeSocial/BANNER-THD.png"
        alt="Tras las Huellas de Diego"
        class="w-full h-auto"
      />
    </section>

    <!-- Mis mejores años -->
    <section class="bg-purple-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-4xl px-4 py-16 flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <span class="text-xs font-bold tracking-widest uppercase text-pink-500 dark:text-pink-400">
            Proyecto adulto mayor
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-300 leading-tight">
            Mis mejores años
          </h2>
          <p class="text-xl font-semibold text-pink-600 dark:text-pink-400">
            Un encuentro de adulto mayor
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-purple-400 pl-5">
            <strong>"Mis mejores años, un encuentro de adulto mayor"</strong> es un proyecto diseñado
            para fomentar el bienestar y la inclusión social de los adultos mayores a través de una
            variedad de talleres artísticos y culturales. Estas actividades buscan estimular la
            creatividad, promover la expresión personal y mejorar la calidad de vida de los
            participantes. Al colaborar con organizaciones e instituciones gubernamentales, se busca
            asegurar recursos y apoyo para enriquecer las experiencias de los adultos mayores, creando
            un espacio donde puedan socializar, aprender y disfrutar de su tiempo libre.
          </p>
        </div>
      </div>
      <img
        src="/img/ejeSocial/BANNER-ADULTOMAYOR.png"
        alt="Mis mejores años: Un encuentro de adulto mayor"
        class="w-full h-auto"
      />
    </section>

    <!-- Plan Padrino -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">Plan Padrino</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            ¿Quieres ser Madrina o Padrino de uno de nuestros niños? Con un aporte mensual
            contribuirás con su formación artística, deportiva y acompañamiento psicosocial.
          </p>
          <p class="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-8">
            ¡Únete, una pequeña ayuda por una gran experiencia a su lado!
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="https://wa.me/573164284175"
              target="_blank"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >Quiero ser parte</a
            >
            <a
              href="https://donaronline.org/fundacion-mariana-novoa/red-de-amigos-fundacion-mariana-novoa"
              target="_blank"
              class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >Quiero donar</a
            >
          </div>
        </div>
        <img :src="imgPadrino" alt="Plan Padrino" class="rounded-lg shadow-xl w-full" />
      </div>
    </section>

    <!-- Programas -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-16">
          Conoce nuestros programas formativos
        </h2>
        <div class="space-y-12">
          <div
            v-for="prog in programas"
            :key="prog.titulo"
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            <div class="grid md:grid-cols-2 items-center">
              <div :class="['p-8', prog.reverse ? 'order-2 md:order-1' : '']">
                <h3 class="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                  {{ prog.titulo }}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 text-lg">{{ prog.descripcion }}</p>
              </div>
              <div :class="prog.reverse ? 'order-1 md:order-2' : ''">
                <img :src="prog.imagen" :alt="prog.titulo" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <!-- Video -->
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6">
            <iframe
              class="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/ZbkHcfdlGg4"
              title="Proyecto social"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Escríbenos</h2>
        <div class="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a href="tel:+573164284175" class="text-xl hover:text-pink-200 transition-colors"
            >+ 57 316 428 4175</a
          >
          <a href="tel:+573228634379" class="text-xl hover:text-pink-200 transition-colors"
            >+ 57 322 863 4379</a
          >
          <a
            href="mailto:informacion@mariananovoa.org"
            class="text-xl hover:text-pink-200 transition-colors"
            >informacion@mariananovoa.org</a
          >
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://checkout.wompi.co/l/VPOS_2DN3Dr"
            target="_blank"
            class="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >Quiero donar</a
          >
          <a
            href="https://wa.me/573164284175"
            target="_blank"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >Contactar por WhatsApp</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
