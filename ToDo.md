# ToDo

Documento vivo con posibles mejoras para el sitio de la Fundacion Mariana Novoa.

## Prioridad alta

- [ ] Definir una propuesta de valor clara en el hero inicial con un CTA principal y uno secundario. Ejemplo: `Donar ahora` y `Conocer programas`.
- [ ] Unificar el objetivo principal del sitio. Decidir si la prioridad es donaciones, inscripciones a talleres, visibilidad institucional o captacion de voluntarios.
- [ ] Mejorar la navegacion mobile. Revisar menu, jerarquia de enlaces y facilidad para llegar a `Donar`, `Contacto`, `Talleres` y `Voluntariado`.
- [ ] Crear una pagina 404 visual dentro de la app, no solo el fallback tecnico de GitHub Pages.
- [ ] Agregar estados vacios, de carga y de error en vistas que dependan de servicios o contenido dinamico.
- [ ] Revisar todas las imagenes grandes y reemplazar las mas pesadas por versiones optimizadas o formatos modernos con menor peso.
- [ ] Implementar lazy loading real para imagenes fuera del primer viewport.
- [ ] Auditar accesibilidad basica con Lighthouse y corregir contraste, foco visible, orden de tabulacion y textos alternativos.
- [ ] Revisar que todos los botones y enlaces tengan texto claro orientado a conversion.
- [ ] Agregar metadatos SEO por ruta: `title`, `description`, Open Graph y Twitter Cards.

## Contenido y conversion

- [ ] Redactar mensajes mas directos para cada seccion del home, evitando bloques demasiado largos de texto institucional.
- [ ] Convertir las secciones largas en bloques mas escaneables con subtitulos, bullets e indicadores visuales.
- [ ] Agregar testimonios, casos reales o historias de impacto para aumentar confianza.
- [ ] Incluir cifras destacadas verificables: personas capacitadas, beneficiarios, talleres realizados, aliados activos, anos de trayectoria.
- [ ] Crear una seccion `Como ayudar` con rutas claras para donar, ser voluntario, aliarse y difundir.
- [ ] Mejorar la pagina de donaciones con montos sugeridos, destino del aporte y preguntas frecuentes.
- [ ] Agregar una pagina o bloque de `Preguntas frecuentes` sobre talleres, voluntariado, donaciones y proyecto social.
- [ ] Actualizar y mantener un calendario visible de eventos, convocatorias y talleres.
- [ ] Fortalecer la pagina de transparencia con informes, estados financieros, impacto anual y documentos descargables.
- [ ] Crear versiones resumidas de contenido clave para lectura rapida en movil.

## UX y diseno

- [ ] Revisar consistencia visual entre vistas: espaciados, alturas de titulos, estilos de botones, tarjetas y banners.
- [ ] Definir una escala tipografica mas consistente para encabezados, subtitulos y texto corrido.
- [ ] Unificar la paleta de color para que refleje mejor la identidad de la fundacion y reduzca variaciones entre secciones.
- [ ] Mejorar el sistema de componentes reutilizables para cards, banners, CTA, galerias y bloques de contenido.
- [ ] Agregar indicadores visuales de pagina activa en la navegacion.
- [ ] Ajustar el contraste del modo oscuro y decidir si realmente aporta al sitio o si conviene simplificarlo.
- [ ] Mejorar la experiencia de scroll con anclas internas en paginas largas.
- [ ] Agregar migas de pan en vistas secundarias si la arquitectura sigue creciendo.
- [ ] Revisar el tono de fotografias, recortes y relaciones de aspecto para evitar inconsistencias visuales.
- [ ] Crear una libreria ligera de patrones UI para mantener coherencia en futuras secciones.

## Rendimiento

- [ ] Medir Core Web Vitals reales: LCP, CLS e INP.
- [ ] Priorizar la optimizacion de las imagenes mas pesadas que hoy impactan el bundle final.
- [ ] Evaluar si algunos assets deben servirse desde CDN o almacenarse con una estrategia mas ligera.
- [ ] Precargar solo recursos criticos; evitar sobrecargar el `index.html` con recursos no esenciales.
- [ ] Revisar si todos los videos embebidos deben cargar inmediatamente o si conviene usar placeholders hasta la interaccion.
- [ ] Separar mejor el contenido critico del home para acelerar el render inicial.
- [ ] Verificar el peso de cada vista y mantener lazy loading por ruta.
- [ ] Agregar compresion y cache headers adecuados si luego se migra a un hosting con mas control que GitHub Pages.

## Accesibilidad

- [ ] Validar jerarquia correcta de encabezados `h1` a `h3` en todas las vistas.
- [ ] Asegurar textos alternativos descriptivos en imagenes institucionales, de impacto y de equipo.
- [ ] Revisar accesibilidad de sliders, carruseles y menus para teclado y lectores de pantalla.
- [ ] Agregar `aria-label` donde el contexto visual no sea suficiente.
- [ ] Validar foco visible en botones, enlaces y formularios.
- [ ] Revisar contraste de textos sobre imagenes y overlays.
- [ ] Asegurar que iframes de video tengan contexto y titulos unicos.
- [ ] Agregar enlaces de salto al contenido principal para mejorar navegacion por teclado.

## SEO y descubrimiento

- [ ] Definir keywords por seccion: prevencion infantil, primeros auxilios, fundacion, voluntariado, talleres, donaciones.
- [ ] Generar `sitemap.xml` automaticamente.
- [ ] Revisar y ampliar `robots.txt` segun la estrategia de indexacion.
- [ ] Implementar datos estructurados para organizacion, eventos y articulos cuando aplique.
- [ ] Optimizar slugs, metadescripciones y encabezados por pagina.
- [ ] Crear una estrategia de contenido para noticias y recursos educativos.
- [ ] Añadir URLs canonicas si aparecen contenidos similares o duplicados.
- [ ] Preparar imagenes Open Graph propias por seccion clave.

## Analitica y medicion

- [ ] Integrar analitica web respetuosa con privacidad o Google Analytics si es requisito del proyecto.
- [ ] Medir clics en CTA importantes: donar, contacto, talleres, voluntariado, transparencia.
- [ ] Definir embudos simples: visita -> interes -> contacto o donacion.
- [ ] Medir reproducciones de video, scroll profundo y formularios enviados.
- [ ] Crear un tablero basico mensual con metricas de adquisicion y conversion.

## Formularios e integraciones

- [ ] Revisar si la pagina de contacto tiene validaciones, mensajes de exito y manejo de errores claros.
- [ ] Integrar un backend o servicio de formularios confiable si todavia no existe.
- [ ] Proteger formularios contra spam con validacion server-side o herramientas como Turnstile/reCAPTCHA.
- [ ] Conectar formularios con correo, CRM o una hoja de seguimiento para el equipo.
- [ ] Estandarizar formularios de inscripcion a talleres, voluntariado y contacto institucional.

## Contenido dinamico y administracion

- [ ] Evaluar si noticias, talleres y tienda deben salir de un CMS en lugar de estar definidos manualmente.
- [ ] Centralizar el contenido editable en archivos estructurados o un headless CMS.
- [ ] Definir un flujo simple para que el equipo actualice noticias sin tocar codigo.
- [ ] Versionar mejor banners, campañas y contenido estacional.
- [ ] Crear un calendario editorial para noticias y campañas.

## Arquitectura tecnica

- [ ] Tipar mejor los datos de servicios, noticias, talleres y tienda con interfaces compartidas.
- [ ] Separar mas claramente componentes presentacionales de logica de negocio.
- [ ] Crear utilidades para SEO, tracking, formateo y manejo de errores.
- [ ] Agregar rutas con `name` y metadatos para facilitar breadcrumbs, SEO y analitica.
- [ ] Implementar una estrategia comun para carga de contenido asincrono.
- [ ] Reducir duplicacion de estilos en vistas largas.
- [ ] Evaluar composables reutilizables para viewport, scroll, tracking y tema si siguen creciendo las necesidades.

## Calidad y mantenimiento

- [ ] Agregar tests unitarios para componentes clave y utilidades.
- [ ] Agregar tests de integracion para navegacion principal y flujos criticos.
- [ ] Agregar pruebas E2E para home, contacto, donacion y rutas principales.
- [ ] Configurar CI para lint, type-check y tests en cada pull request.
- [ ] Revisar dependencias periodicamente y mantener una politica de actualizacion.
- [ ] Documentar decisiones tecnicas importantes del proyecto.
- [ ] Crear convenciones para nombres de assets, componentes y vistas.

## Seguridad y confianza

- [ ] Revisar enlaces externos y abrirlos con configuracion segura cuando corresponda.
- [ ] Validar cualquier entrada de usuario antes de enviarla a servicios externos.
- [ ] Publicar politica de privacidad y tratamiento de datos si el sitio recolecta informacion personal.
- [ ] Agregar aviso de cookies si luego se integran herramientas que lo requieran.
- [ ] Mostrar informacion institucional que aumente confianza: NIT, ubicacion, contacto oficial, certificaciones, aliados.

## Futuro deseable

- [ ] Version en ingles si la fundacion busca aliados o visibilidad internacional.
- [ ] Buscador interno para noticias, talleres o recursos.
- [ ] Biblioteca de recursos descargables para familias, colegios y cuidadores.
- [ ] Landing pages especificas para campañas, eventos o convocatorias.
- [ ] Integracion con pasarela de pagos mas completa si la estrategia de recaudo crece.
- [ ] Area administrativa simple para gestionar contenidos recurrentes.

## Siguiente recorte recomendado

Si hubiera que priorizar solo el primer bloque de trabajo, recomendaria este orden:

1. Optimizar imagenes y rendimiento del home.
2. Mejorar SEO por ruta y metadatos sociales.
3. Reforzar conversion en `Donar`, `Contacto` y `Voluntariado`.
4. Auditar accesibilidad basica.
5. Definir una estrategia para contenido dinamico de noticias y talleres.
