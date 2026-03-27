# David Moreno Portfolio

Portfolio personal de David Moreno como Frontend Developer, construido sobre una plantilla de Envato y adaptado a una versión única centrada en el modelo `07`.

El proyecto está pensado para presentar experiencia en frontend, WordPress, e-commerce y rendimiento, con enfoque en recruiters, empresas y colaboraciones freelance seleccionadas.

## Stack

- Next.js 16
- React 18
- CSS global heredado de la plantilla + personalizaciones propias
- Sistema simple de multiidioma gestionado en cliente

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Qué se ha hecho sobre la plantilla

- Se eliminó la estructura multipágina original de la plantilla para quedarse solo con la variante visual basada en `07`.
- Se renombraron rutas y referencias para quitar numeraciones tipo `07_about` y dejar una estructura limpia.
- Se sustituyó el naming de plantilla por marca personal de David Moreno.
- Se reescribió el copy para reflejar un perfil de Frontend Developer orientado a empresa, manteniendo apertura a proyectos freelance bien alineados.
- Se añadieron proyectos reales con enlaces externos clicables cuando existe URL.
- Se ocultó el blog del menú principal, aunque la sección sigue existiendo en el proyecto.
- Se mejoró el comportamiento responsive en móvil en varios bloques clave.
- Se corrigió la carga de tipografías usando `next/font` para evitar inconsistencias entre desktop y mobile.
- Se limpió parte del residuo heredado de la plantilla, incluyendo carpetas vacías y variantes no usadas.

## Idiomas

El portfolio está preparado en 4 idiomas:

- Español
- Catalán
- Inglés
- Sueco

El idioma se gestiona desde el selector de la interfaz y se guarda en `localStorage`.

### Rutas principales por idioma

- Inicio: `/`
- Sobre mí: `/sobre-mi`, `/about-me`, `/om-mig`
- Servicios: `/servicios`, `/serveis`, `/services`, `/tjanster`
- Proyectos: `/proyectos`, `/projectes`, `/projects`, `/projekt`
- Contacto: `/contacto`, `/contacte`, `/contact`, `/kontakt`
- Blog: `/blog` y `/blogg` para sueco

La lógica de traducción de rutas está centralizada en [utility/routes.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/utility/routes.js).

## Estructura importante del proyecto

### Layout y navegación

- [app/layout.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/layout.js): layout raíz y carga de tipografías
- [layouts/DaveLayout.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/layouts/DaveLayout.js): wrapper principal de páginas
- [layouts/Header.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/layouts/Header.js): cabecera y menú
- [layouts/Footer.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/layouts/Footer.js): footer y accesos sociales en mobile
- [utility/data.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/utility/data.js): items del menú principal

### Páginas principales

- [app/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/page.js): home
- [app/sobre-mi/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/sobre-mi/page.js): versión española de sobre mí
- [app/servicios/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/servicios/page.js): versión española de servicios
- [app/proyectos/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/proyectos/page.js): listado completo de proyectos
- [app/contacto/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/contacto/page.js): contacto

### Componentes clave

- [components/Breadcrumb.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/Breadcrumb.js): hero superior con título y badge `Available for Work`
- [components/About.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/About.js): bloque de presentación y contadores
- [components/Works.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/Works.js): proyectos destacados de la home
- [components/ContactForm.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/ContactForm.js): formulario de contacto
- [components/LanguageProvider.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/LanguageProvider.js): estado global de idioma
- [components/LanguageSelector.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/LanguageSelector.js): selector de idioma

## Proyectos

Hay dos niveles de gestión:

- Destacados de la home en [components/Works.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/components/Works.js)
- Listado completo en [app/proyectos/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/proyectos/page.js)

Cada proyecto puede tener:

- `title`
- `category`
- `image`
- `year`
- `url`

Si `url` existe, la tarjeta del proyecto se vuelve clicable y se abre en una pestaña nueva. Si `url` está vacío, la tarjeta no tiene enlace.

## Blog

El blog sigue presente en el proyecto, pero está oculto del menú principal por decisión temporal.

- Base de datos de posts: [utility/blog.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/utility/blog.js)
- Listado: [app/blog/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/blog/page.js)
- Rutas dinámicas de artículos: [app/blog/[slug]/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/blog/[slug]/page.js) y [app/blogg/[slug]/page.js](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/blogg/[slug]/page.js)

Cada entrada tiene slug propio por idioma para mejorar estructura y SEO.

## Contacto

El formulario de contacto está preparado para abrir el cliente de correo del usuario con un mensaje dirigido a:

- `info@davidmoreno.dev`

No hay backend de envío real por ahora; el formulario funciona vía `mailto`.

## Estilos y responsive

Las personalizaciones principales están en:

- [app/globals.css](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/app/globals.css)
- [public/css/style.css](/Users/dvdmrnjcbssn/workspace/davidmoreno-portfolio/public/css/style.css)

`style.css` contiene gran parte del CSS heredado de la plantilla.
`globals.css` concentra los ajustes propios hechos durante la personalización.

## Notas importantes

- El proyecto conserva dependencias heredadas de la plantilla que no necesariamente se usan todas en la versión actual.
- Existe un warning de Next relacionado con múltiples `package-lock.json`, pero no impide compilar.
- Algunas decisiones de contenido, imágenes finales o textos del blog todavía pueden evolucionar.

## Estado actual

El proyecto está funcional, compila correctamente y está preparado para seguir refinándose como portfolio personal en producción.
