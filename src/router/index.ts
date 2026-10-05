import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

const SITE = 'Fundación Mariana Novoa'
const DEFAULT_DESCRIPTION =
  'Fundación Mariana Novoa - Prevención de accidentes infantiles, primeros auxilios y proyecto social en Bogotá, Colombia.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      meta: { description: DEFAULT_DESCRIPTION },
    },
    {
      path: '/asalvo',
      component: () => import('@/views/AsalvoView.vue'),
      meta: {
        title: 'ASALVO · Prevención del ahogamiento',
        description:
          'ASALVO: prevención del ahogamiento, cifras en Colombia, curso de operación de piscinas y salvamento acuático.',
      },
    },
    {
      path: '/congreso',
      component: () => import('@/views/CongresoView.vue'),
      meta: {
        title: 'IV Congreso Internacional para la Prevención de los Ahogamientos',
        description:
          'IV Congreso Internacional para la prevención de los ahogamientos. 24 al 26 de agosto de 2026, Piscilago Colsubsidio.',
      },
    },
    {
      path: '/contacto',
      component: () => import('@/views/ContactoView.vue'),
      meta: {
        title: 'Contacto',
        description: 'Escríbenos sobre talleres, voluntariado, donaciones o la tienda solidaria.',
      },
    },
    {
      path: '/donar',
      component: () => import('@/views/DonarView.vue'),
      meta: {
        title: 'Donar',
        description:
          'Apoya a 120 niños, niñas y adolescentes de Altos de Serrezuela con tu donación.',
      },
    },
    {
      path: '/ejes',
      component: () => import('@/views/EjesView.vue'),
      meta: { title: 'Nuestros proyectos' },
    },
    {
      path: '/plan-padrino',
      component: () => import('@/views/PlanPadrinoView.vue'),
      meta: {
        title: 'Plan Padrino',
        description: 'Sé Madrina o Padrino y acompaña la formación de un niño o niña.',
      },
    },
    {
      path: '/ejes/preventivo',
      component: () => import('@/views/EjesPreventivView.vue'),
      meta: {
        title: 'Eje preventivo',
        description: 'Talleres de primeros auxilios, RCP y prevención de accidentes infantiles.',
      },
    },
    {
      path: '/ejes/social',
      component: () => import('@/views/EjesSocialView.vue'),
      meta: {
        title: 'Eje social',
        description:
          'Proyecto social en Altos de Serrezuela: arte, deporte y acompañamiento psicosocial.',
      },
    },
    {
      path: '/noticias',
      component: () => import('@/views/NoticiasView.vue'),
      meta: { title: 'Noticias' },
    },
    {
      path: '/talleres',
      component: () => import('@/views/TalleresView.vue'),
      meta: {
        title: 'Talleres y cursos',
        description:
          'Talleres de primeros auxilios, RCP, salvamento acuático y crianza respetuosa.',
      },
    },
    {
      path: '/tienda',
      component: () => import('@/views/TiendaView.vue'),
      meta: {
        title: 'Tienda solidaria',
        description: 'Con cada compra apoyas el proyecto social de la fundación.',
      },
    },
    {
      path: '/transparencia',
      component: () => import('@/views/TransparenciaView.vue'),
      meta: { title: 'Transparencia', description: 'Estados financieros e información legal.' },
    },
    {
      path: '/voluntariado',
      component: () => import('@/views/VoluntariadoView.vue'),
      meta: {
        title: 'Voluntariado',
        description: 'Voluntariado presencial y corporativo en Altos de Serrezuela.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: 'Página no encontrada' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${SITE}` : SITE
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to.meta.description ?? DEFAULT_DESCRIPTION)
})

export default router
