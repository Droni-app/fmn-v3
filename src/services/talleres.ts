export interface Taller {
  name: string
  slug: string
  description: string
  duration: string
  modality: string
  certification?: string
  extra?: string[]
  modules?: string[]
}

export const talleres: Taller[] = [
  {
    name: 'Sensibilización de Accidentalidad y Ahogamiento',
    slug: 'CAP01',
    description:
      'Espacio de formación diseñado para comunidades, instituciones educativas, empresas y grupos organizados, enfocado en la identificación de riesgos y prevención de accidentes en el hogar, la vía pública y entornos acuáticos. Los participantes aprenden a reconocer señales de alerta y a actuar de manera adecuada frente a situaciones de riesgo, fortaleciendo la cultura de autocuidado.',
    duration: '2 horas',
    modality: 'Presencial o virtual',
  },
  {
    name: 'Taller de Primeros Auxilios y RCP para Au Pair / Bro Pair',
    slug: 'CAP02',
    description:
      'Capacitación especializada para jóvenes participantes de programas de intercambio cultural que trabajan como cuidadores en el exterior. Se enfoca en la prevención de accidentes y la seguridad en el cuidado infantil.',
    duration: '9 horas',
    modality: 'Presencial o virtual',
    certification: 'En español e inglés. Vigencia de 2 años.',
    extra: ['Obsequio: Taller de Disciplina Positiva "Preparando mi maleta para ellos"'],
  },
  {
    name: 'Taller de Primeros Auxilios y RCP para Mamás, Papás y Cuidadores',
    slug: 'CAP03',
    description:
      'Capacitación diseñada para familias y cuidadores, donde brinda herramientas para saber cómo actuar en accidentes comunes en el hogar: caídas, quemaduras, atragantamientos, paro cardiorrespiratorio, entre otros.',
    duration: '4 horas',
    modality: 'Presencial o virtual',
    certification: 'Certificación de participación.',
  },
  {
    name: 'Curso en Primeros Auxilios y RCP – 40 horas',
    slug: 'CAP04',
    description:
      'Curso integral dirigida a jardines infantiles, instituciones educativas y organizaciones que deben cumplir con formación en primeros auxilios para su personal. Con un enfoque preventivo y de fortalecimiento de seguridad, mediante un espacio de capacitación teórico-práctica.',
    duration: '40 horas (intensidad horaria reglamentaria)',
    modality: 'Presencial o virtual',
    certification: 'Certificación de participación.',
  },
  {
    name: 'Taller Privado de Primeros Auxilios y RCP',
    slug: 'CAP05',
    description:
      'Capacitación personalizada domiciliaria para familias o empresas que desean aprender técnicas básicas de atención en emergencias en su propio espacio y horario.',
    duration: '4 horas',
    modality: 'Presencial',
    certification: 'Certificación de participación.',
  },
  {
    name: 'Taller de Primeros Auxilios Psicológicos',
    slug: 'CAP06',
    description:
      'Capacitación diseñada para brindar a los participantes herramientas esenciales de apoyo emocional inmediato a personas que han vivido un evento traumático. Se trabajan habilidades de escucha activa, comunicación asertiva, manejo de situaciones de crisis y activación de redes de apoyo.',
    duration: '4 horas',
    modality: 'Presencial',
    certification: 'Certificación de participación.',
  },
  {
    name: 'Curso de Operación de Piscinas y Estructuras Similares',
    slug: 'CAP07',
    description:
      'Capacitación teórico-práctica dirigida a instituciones, administradores y responsables de piscinas públicas y privadas. Incluye operación, mantenimiento seguro, control de calidad del agua y cumplimiento de la Ley 1209 de 2008 y demás normativas vigentes. Desarrollado en 11 módulos que cubren todos los aspectos de operación y seguridad.',
    duration: '40 horas',
    modality: 'Presencial o virtual',
    certification: 'Certificación de participación. Vigencia de 2 años.',
    modules: [
      'Sensibilización',
      'Matemáticas para Piscinas',
      'Legislación y Normatividad',
      'Dispositivos de Seguridad',
      'Aspectos Constructivos y Tecnológicos',
      'Calidad del Agua',
      'Aspectos Microbiológicos en el Agua',
      'Procedimientos para Toma y Almacenamiento de Muestras',
      'Manipulación de Químicos',
      'Operación de Parques Acuáticos',
      'Práctica',
    ],
  },
  {
    name: 'Taller de Salvamento Acuático – Actualización',
    slug: 'CAP08',
    description:
      'Capacitación de actualización para salvavidas, socorristas y personal de seguridad acuática. Refuerza técnicas de rescate, primeros auxilios acuáticos y uso de equipos especializados.',
    duration: '8 horas',
    modality: 'Presencial',
    certification: 'Certificación de participación. Vigencia de 2 años.',
  },
  {
    name: 'Taller de Disciplina Positiva "Preparando mi maleta para ellos"',
    slug: 'CAP09',
    description:
      'Taller vivencial para padres, educadores y cuidadores que promueve la crianza respetuosa. Se abordan estrategias de comunicación efectiva, establecimiento de límites, resolución de conflictos y construcción de vínculos sanos.',
    duration: '3 horas',
    modality: 'Virtual',
    certification: 'Certificado de participación.',
  },
]
