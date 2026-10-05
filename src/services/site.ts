/** Datos de contacto y enlaces compartidos por todo el sitio. */

/** Resuelve una ruta de `public/` respetando el `base` de Vite (p. ej. GitHub Pages). */
export const pub = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')

export const contact = {
  phones: [
    { label: '+57 316 428 4175', href: 'tel:+573164284175' },
    { label: '+57 322 863 4379', href: 'tel:+573228634379' },
  ],
  email: 'informacion@mariananovoa.org',
  address: 'Km 5 vía antigua al Guavio, Altos de Serrezuela, Bogotá',
  mapsUrl: 'https://www.google.com/maps/search/Fundaci%C3%B3n+Mariana+Novoa',
  whatsapp: 'https://wa.me/573164284175',
}

export const links = {
  donate: 'https://checkout.wompi.co/l/VPOS_2DN3Dr',
  donateOnline:
    'https://donaronline.org/fundacion-mariana-novoa/red-de-amigos-fundacion-mariana-novoa',
}

export const whatsappMessage = (text: string) =>
  `${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const socials = [
  {
    label: 'WhatsApp',
    href: contact.whatsapp,
    icon: 'mdi-whatsapp',
    hover: 'hover:bg-emerald-500',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/fundacionmariananovoa/',
    icon: 'mdi-facebook',
    hover: 'hover:bg-blue-600',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fundacionmariananovoa/',
    icon: 'mdi-instagram',
    hover: 'hover:bg-pink-600',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/Fmariananovoa',
    icon: 'mdi-twitter',
    hover: 'hover:bg-sky-500',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCSnmLVrx0OchVn_7Cutkruw',
    icon: 'mdi-youtube',
    hover: 'hover:bg-red-600',
  },
]

export interface NavLink {
  name: string
  link: string
  icon?: string
}
export interface NavGroup {
  name: string
  children: NavLink[]
}
export type NavItem = NavLink | NavGroup

export const menu: NavItem[] = [
  {
    name: 'Nosotros',
    children: [
      { name: 'Quiénes somos', link: '/#nosotros', icon: 'mdi-heart-outline' },
      { name: 'Equipo', link: '/#equipo', icon: 'mdi-account-group-outline' },
      { name: 'Noticias', link: '/noticias', icon: 'mdi-newspaper-variant-outline' },
      { name: 'Transparencia', link: '/transparencia', icon: 'mdi-file-document-outline' },
    ],
  },
  {
    name: 'Proyectos',
    children: [
      { name: 'Todos los proyectos', link: '/ejes', icon: 'mdi-view-grid-outline' },
      { name: 'Eje preventivo', link: '/ejes/preventivo', icon: 'mdi-shield-check-outline' },
      { name: 'Eje social', link: '/ejes/social', icon: 'mdi-hand-heart-outline' },
      { name: 'Plan Padrino', link: '/plan-padrino', icon: 'mdi-account-heart-outline' },
      { name: 'ASALVO · Ahogamiento', link: '/asalvo', icon: 'mdi-lifebuoy' },
    ],
  },
  { name: 'Talleres', link: '/talleres' },
  { name: 'Congreso', link: '/congreso' },
  { name: 'Voluntariado', link: '/voluntariado' },
  { name: 'Tienda', link: '/tienda' },
  { name: 'Contacto', link: '/contacto' },
]
