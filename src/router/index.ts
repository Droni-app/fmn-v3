import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/asalvo', component: () => import('@/views/AsalvoView.vue') },
    { path: '/congreso', component: () => import('@/views/CongresoView.vue') },
    { path: '/contacto', component: () => import('@/views/ContactoView.vue') },
    { path: '/donar', component: () => import('@/views/DonarView.vue') },
    { path: '/ejes', component: () => import('@/views/EjesView.vue') },
    { path: '/ejes/preventivo', component: () => import('@/views/EjesPreventivView.vue') },
    { path: '/ejes/social', component: () => import('@/views/EjesSocialView.vue') },
    { path: '/noticias', component: () => import('@/views/NoticiasView.vue') },
    { path: '/talleres', component: () => import('@/views/TalleresView.vue') },
    { path: '/tienda', component: () => import('@/views/TiendaView.vue') },
    { path: '/transparencia', component: () => import('@/views/TransparenciaView.vue') },
    { path: '/voluntariado', component: () => import('@/views/VoluntariadoView.vue') },
  ],
})

export default router
