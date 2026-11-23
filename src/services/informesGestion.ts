import portada2024 from '@/assets/transparencia/gestion/portada-2024.webp'
import portada2025 from '@/assets/transparencia/gestion/portada-2025.webp'

export type SlideTone = 'plum' | 'brand' | 'light' | 'sun' | 'ocean'

export interface Cifra {
  valor: string
  etiqueta: string
}

export interface Slide {
  tono: SlideTone
  eyebrow: string
  titulo: string
  texto?: string
  /** Cifra protagonista de la diapositiva. */
  destacado?: Cifra
  /** Cifras secundarias en rejilla. */
  cifras?: Cifra[]
  /** Lista de puntos (con valor opcional a la derecha). */
  items?: { texto: string; valor?: string }[]
  /** Cita textual del informe. */
  cita?: { texto: string; autor: string }
}

export interface InformeGestion {
  anio: string
  titulo: string
  resumen: string
  pdf: string
  paginas: number
  portada: string
  /** La portada de 2024 es horizontal; la de 2025, vertical. */
  portadaHorizontal: boolean
  slides: Slide[]
}

export const informesGestion: Record<string, InformeGestion> = {
  '2024': {
    anio: '2024',
    titulo: 'Fortaleciendo una cultura preventiva en Colombia y en el mundo',
    resumen:
      'Un año retador y revelador: 18 años de trayectoria, 602 personas capacitadas, el II Congreso Internacional para la Prevención de los Ahogamientos y 135 beneficiarios en Altos de Serrezuela.',
    pdf: '/docs/InformeGestionAnual2024.pdf',
    paginas: 46,
    portada: portada2024,
    portadaHorizontal: true,
    slides: [
      {
        tono: 'plum',
        eyebrow: 'Mensaje de nuestra directora',
        titulo: 'Más de 18 años generando conciencia, capacitando y transformando',
        texto:
          'Durante 2024 orientamos nuestras iniciativas en tres líneas: posicionarnos como referente en seguridad y prevención de accidentes, generar espacios con impacto social y fortalecer la sostenibilidad institucional.',
        cita: {
          texto:
            'La prevención es tarea de todos. Y juntos, podemos hacer que ninguna vida más se pierda por falta de información, de formación o de oportunidades.',
          autor: 'Hortensia Espitaleta, directora',
        },
        cifras: [
          { valor: '8.028', etiqueta: 'personas capacitadas entre 2007 y 2024' },
          { valor: '12', etiqueta: 'Objetivos de Desarrollo Sostenible impactados' },
        ],
      },
      {
        tono: 'ocean',
        eyebrow: 'Eje preventivo · Contexto',
        titulo: 'Cifras de mortalidad por ahogamiento en Colombia',
        texto:
          'Según el Instituto Nacional de Medicina Legal y Ciencias Forenses, los cuerpos de aguas abiertas siguen siendo los más peligrosos. En promedio, cada 11 horas muere una persona ahogada en el país.',
        destacado: { valor: '683', etiqueta: 'personas perdieron la vida por ahogamiento en 2024' },
        items: [
          { texto: 'Niñas y niños de 0 a 14 años', valor: '155' },
          { texto: 'Personas de 15 a 30 años', valor: '232' },
          { texto: 'Personas de 31 años o más', valor: '296' },
        ],
      },
      {
        tono: 'light',
        eyebrow: 'Seguridad infantil',
        titulo: '¿Qué está pasando con la seguridad infantil?',
        texto:
          'El Observatorio de Salud de Bogotá reportó accidentes domésticos en menores de 11 años. Las principales causas: caídas de su propia altura, caídas de altura, quemaduras, elementos contundentes y cortopunzantes.',
        destacado: { valor: '7.307', etiqueta: 'accidentes domésticos de niños menores de 11 años en Bogotá' },
      },
      {
        tono: 'sun',
        eyebrow: 'Capacitaciones',
        titulo: 'Personas preparadas para actuar',
        destacado: { valor: '602', etiqueta: 'personas se capacitaron con la Fundación en 2024' },
        items: [
          { texto: 'II Congreso Internacional para la Prevención de los Ahogamientos', valor: '221' },
          { texto: 'Taller de Primeros Auxilios y RCP para Au Pair', valor: '204' },
          { texto: 'Encuentro y Certificación Internacional de Educación Acuática – Armenia', valor: '65' },
          { texto: 'Curso de Operaciones de Piscinas y Estructuras Similares (OPES)', valor: '62' },
          { texto: 'Taller privado de Primeros Auxilios y RCP', valor: '25' },
          { texto: 'Taller internacional virtual de Primeros Auxilios y RCP para niñeras – México', valor: '25' },
        ],
      },
      {
        tono: 'ocean',
        eyebrow: 'II Congreso Internacional',
        titulo: 'Por primera vez, un congreso presencial',
        texto:
          'Del 22 al 23 de julio de 2024 en Bogotá, con el apoyo de ACOLAP, reunimos a entidades públicas y privadas, organismos de cooperación, expertos y personas del sector acuático para discutir esta problemática de salud pública.',
        destacado: { valor: '221', etiqueta: 'asistentes' },
        cifras: [
          { valor: '+60', etiqueta: 'empresas e instituciones' },
          { valor: '18', etiqueta: 'conferencistas e invitados' },
          { valor: '+12', etiqueta: 'horas de agenda académica' },
          { valor: '45', etiqueta: 'asistentes al taller de salvamento acuático' },
        ],
      },
      {
        tono: 'brand',
        eyebrow: 'Eje social · Transfórmate',
        titulo: 'Programa social Altos de Serrezuela',
        texto:
          'Desde 2014 acompañamos a niñas, niños y adolescentes, y desde 2022 a personas mayores, con arte, deporte y acompañamiento psicosocial. Lomitas (51 %), Serrezuela (23 %) y Aurora Alta y Baja (21 %) concentran la población atendida.',
        destacado: { valor: '135', etiqueta: 'beneficiarios de 73 familias' },
        items: [
          { texto: '¿Quién soy yo? Estimulación temprana (3 a 6 años) · 94 talleres', valor: '33' },
          { texto: '¿Quién soy yo? Un ser que sueña, imagina y construye (7 a 11 años) · 93 talleres', valor: '36' },
          { texto: 'Soy yo (12 a 15 años) · 93 talleres', valor: '21' },
          { texto: 'Tras las Huellas de Diego (8 a 17 años) · 132 sesiones', valor: '26' },
          { texto: 'Mis mejores años, adulto mayor · 95 talleres', valor: '19' },
        ],
      },
      {
        tono: 'light',
        eyebrow: 'Tras las Huellas de Diego',
        titulo: 'Running y atletismo para crecer',
        texto:
          'Proyecto en memoria de Diego Pardo. Además de 132 sesiones de entrenamiento, los deportistas compitieron en carreras como Árboles para mi País y Corre Mi Tierra, con varios primeros puestos.',
        cifras: [
          { valor: '7', etiqueta: 'eventos deportivos' },
          { valor: '6', etiqueta: 'podios' },
          { valor: '132', etiqueta: 'sesiones de entrenamiento' },
        ],
      },
      {
        tono: 'plum',
        eyebrow: 'Compromiso social',
        titulo: 'Una comunidad que se construye en equipo',
        texto:
          'Almuerzos comunitarios mensuales por el ODS 2 Hambre Cero, voluntariados de empresas como Medtronic, Banco Itaú, Oracle, Hotel W y Sodexo, y el Reconocimiento en Nota de Estilo del Concejo de Bogotá.',
        cifras: [
          { valor: '11', etiqueta: 'almuerzos comunitarios' },
          { valor: '+2.200', etiqueta: 'platos servidos en el año' },
          { valor: '442', etiqueta: 'voluntarios de empresas' },
          { valor: '100', etiqueta: 'voluntarios individuales y de servicio social' },
        ],
      },
    ],
  },
  '2025': {
    anio: '2025',
    titulo: 'El reto de salvar vidas y transformar comunidades',
    resumen:
      'Un año de grandes retos: 313 personas capacitadas, el III Congreso Internacional para la Prevención de los Ahogamientos, 110 beneficiarios en Altos de Serrezuela y más de 300 voluntarios.',
    pdf: '/docs/InformeGestionAnual2025.pdf',
    paginas: 51,
    portada: portada2025,
    portadaHorizontal: false,
    slides: [
      {
        tono: 'plum',
        eyebrow: 'Mensaje de nuestra directora',
        titulo: 'Educar es proteger',
        texto:
          'El 2025 nos dejó lecciones profundas. Las cifras de ahogamiento nos recordaron que el exceso de confianza y la falta de información siguen siendo nuestros mayores adversarios. Nuestra hoja de ruta: innovar en la forma en que educamos y consolidar una red de aliados cada vez más fuerte.',
        cita: {
          texto:
            'Seguiremos trabajando con la misma pasión del primer día, convencidos de que educar es proteger y proteger es la forma más pura de transformar nuestra sociedad.',
          autor: 'Hortensia Espitaleta, directora',
        },
      },
      {
        tono: 'ocean',
        eyebrow: 'Eje preventivo · Contexto',
        titulo: 'La crisis silenciosa del ahogamiento',
        texto:
          'Antioquia, Nariño y Cundinamarca encabezan los 10 departamentos con más casos. El domingo es el día de mayor riesgo, y agosto, julio, noviembre y enero concentran la mayoría de las muertes. Ríos, mares, arroyos, humedales y lagos siguen siendo los escenarios más peligrosos.',
        destacado: { valor: '744', etiqueta: 'personas perdieron la vida por ahogamiento en 2025' },
        cifras: [
          { valor: '82 %', etiqueta: 'hombres (610 casos)' },
          { valor: '18 %', etiqueta: 'mujeres (134 casos)' },
        ],
      },
      {
        tono: 'sun',
        eyebrow: 'Multiplicadores de prevención',
        titulo: 'Formando entornos seguros',
        destacado: { valor: '313', etiqueta: 'personas capacitadas en 2025' },
        items: [
          { texto: '10 talleres de Primeros Auxilios y RCP para Au Pairs / Bro Pairs', valor: '159' },
          { texto: '3 talleres privados de Primeros Auxilios y RCP para padres', valor: '42' },
          { texto: '3 talleres de Salvamento Acuático', valor: '51' },
          { texto: '1 certificación internacional de Educadores de Natación', valor: '34' },
          { texto: '2 cursos de Operación de Piscinas y Estructuras Similares', valor: '27' },
        ],
      },
      {
        tono: 'ocean',
        eyebrow: 'III Congreso Internacional',
        titulo: 'El silencio de las profundidades: ahogamiento y supervivencia',
        texto:
          'El 28 y 29 de julio de 2025, en alianza con ACOLAP y con el apoyo de Compensar y Cotelco, el congreso se consolidó como plataforma técnica para expertos, entidades de gobierno y líderes de la industria recreativa. El 30 de julio se realizó el taller de salvamento acuático.',
        destacado: { valor: '164', etiqueta: 'asistentes' },
        cifras: [
          { valor: '73', etiqueta: 'empresas e instituciones' },
          { valor: '20', etiqueta: 'conferencistas e invitados' },
          { valor: '+16', etiqueta: 'horas de agenda académica' },
          { valor: '80', etiqueta: 'asistentes al taller de salvamento acuático' },
        ],
      },
      {
        tono: 'light',
        eyebrow: 'Incidencia y cooperación',
        titulo: 'Nuestra voz en espacios nacionales e internacionales',
        items: [
          { texto: 'Taller Regional para América Latina y el Caribe sobre Prevención de los Ahogamientos (OMS, OPS y Ministerio de Salud) en Bogotá' },
          { texto: 'Socialización del proyecto de resolución sobre calidad del agua en piscinas y estructuras similares' },
          { texto: 'Primer Encuentro Internacional de Educación Acuática, Natación y Seguridad en Quito, Ecuador' },
          { texto: 'Certificación Internacional para Educadores de Natación para Bebés y Niños en Cartagena' },
          { texto: 'Campañas de sensibilización en temporadas vacacionales para familias, empresas y sector turístico' },
        ],
      },
      {
        tono: 'brand',
        eyebrow: 'Eje social · Altos de Serrezuela',
        titulo: 'Tejiendo bienestar y oportunidades',
        texto:
          'Un acompañamiento intergeneracional con arte, deporte y trabajo social. Lomitas (36 %) y Serrezuela (32 %) concentran la mayoría de los beneficiarios, seguidos de La Aurora Alta (14 %), La Aurora Baja y La Capilla (9 % cada una).',
        destacado: { valor: '110', etiqueta: 'beneficiarios del programa' },
        items: [
          { texto: '¿Quién soy? Un ser que sueña, imagina y construye (4 a 6 años)', valor: '27' },
          { texto: '¿Quién soy? Un ser que sueña, imagina y construye (7 a 10 años)', valor: '27' },
          { texto: '¿Quién soy? Un ser que sueña, imagina y construye (11 a 14 años)', valor: '18' },
          { texto: 'Tras las Huellas de Diego (8 a 17 años)', valor: '19' },
          { texto: 'Mis mejores años, adulto mayor', valor: '19' },
        ],
      },
      {
        tono: 'light',
        eyebrow: 'Arte y deporte',
        titulo: 'Un 2025 de resultados extraordinarios',
        texto:
          'Las personas mayores presentaron la exposición “Vuelos del alma” en el Jardín Botánico de Bogotá. En atletismo, Tras las Huellas de Diego logró primeros lugares en la Carrera Verde (juvenil femenina) y la Carrera Rancho MX de Cajicá (juvenil masculina), y un tercer lugar en el Pionono Trail Urbano de Sopó.',
        cifras: [
          { valor: '4', etiqueta: 'eventos deportivos' },
          { valor: '3', etiqueta: 'podios' },
          { valor: '1', etiqueta: 'exposición artística en el Jardín Botánico' },
        ],
      },
      {
        tono: 'plum',
        eyebrow: 'Alianzas con propósito',
        titulo: 'Voluntariado y seguridad alimentaria',
        texto:
          'Gracias a empresas, instituciones y donantes, dimos continuidad a las ollas comunitarias y ampliamos la cobertura alimentaria para niñas, niños, adolescentes, personas mayores y sus familias.',
        cifras: [
          { valor: '+300', etiqueta: 'voluntarios' },
          { valor: '11', etiqueta: 'ollas comunitarias' },
          { valor: '1.980', etiqueta: 'personas beneficiadas' },
        ],
      },
    ],
  },
}

export const aniosInformesGestion = Object.keys(informesGestion).sort().reverse()
