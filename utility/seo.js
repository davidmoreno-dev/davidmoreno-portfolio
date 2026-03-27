import {
  SUPPORTED_LANGUAGES,
  getPathForBlogPost,
  getPathForRoute,
} from "./routes";

export const siteUrl = "https://davidmoreno.dev";

const localizedContent = {
  home: {
    es: {
      title: "David Moreno | Frontend Developer",
      description:
        "Portfolio de David Moreno, frontend developer especializado en interfaces web, WordPress, e-commerce, rendimiento y experiencia de usuario.",
    },
    ca: {
      title: "David Moreno | Frontend Developer",
      description:
        "Portfolio de David Moreno, frontend developer especialitzat en interfícies web, WordPress, e-commerce, rendiment i experiència d'usuari.",
    },
    en: {
      title: "David Moreno | Frontend Developer",
      description:
        "Portfolio of David Moreno, frontend developer specialized in web interfaces, WordPress, e-commerce, performance and user experience.",
    },
    sv: {
      title: "David Moreno | Frontend Developer",
      description:
        "Portfolio för David Moreno, frontendutvecklare specialiserad på webbgränssnitt, WordPress, e-handel, prestanda och användarupplevelse.",
    },
  },
  about: {
    es: {
      title: "Sobre mí | David Moreno",
      description:
        "Conoce el perfil de David Moreno, frontend developer con experiencia en WordPress, WooCommerce, PHP, rendimiento y desarrollo web a medida.",
    },
    ca: {
      title: "Sobre mi | David Moreno",
      description:
        "Coneix el perfil de David Moreno, frontend developer amb experiència en WordPress, WooCommerce, PHP, rendiment i desenvolupament web a mida.",
    },
    en: {
      title: "About Me | David Moreno",
      description:
        "Learn more about David Moreno, a frontend developer with experience in WordPress, WooCommerce, PHP, performance and custom web development.",
    },
    sv: {
      title: "Om mig | David Moreno",
      description:
        "Lär känna David Moreno, frontendutvecklare med erfarenhet av WordPress, WooCommerce, PHP, prestanda och skräddarsydd webbutveckling.",
    },
  },
  services: {
    es: {
      title: "Servicios | David Moreno",
      description:
        "Servicios de frontend, WordPress a medida, WooCommerce, Gutenberg, optimización y mantenimiento evolutivo.",
    },
    ca: {
      title: "Serveis | David Moreno",
      description:
        "Serveis de frontend, WordPress a mida, WooCommerce, Gutenberg, optimització i manteniment evolutiu.",
    },
    en: {
      title: "Services | David Moreno",
      description:
        "Frontend, custom WordPress, WooCommerce, Gutenberg, optimization and ongoing maintenance services.",
    },
    sv: {
      title: "Tjänster | David Moreno",
      description:
        "Tjänster inom frontend, skräddarsydd WordPress, WooCommerce, Gutenberg, optimering och löpande underhåll.",
    },
  },
  projects: {
    es: {
      title: "Proyectos | David Moreno",
      description:
        "Selección de proyectos web donde David Moreno ha trabajado en frontend, experiencia de usuario, rendimiento y desarrollo a medida.",
    },
    ca: {
      title: "Projectes | David Moreno",
      description:
        "Selecció de projectes web on David Moreno ha treballat en frontend, experiència d'usuari, rendiment i desenvolupament a mida.",
    },
    en: {
      title: "Projects | David Moreno",
      description:
        "A selection of web projects where David Moreno has worked on frontend, user experience, performance and custom development.",
    },
    sv: {
      title: "Projekt | David Moreno",
      description:
        "Ett urval webbprojekt där David Moreno arbetat med frontend, användarupplevelse, prestanda och skräddarsydd utveckling.",
    },
  },
  contact: {
    es: {
      title: "Contacto | David Moreno",
      description:
        "Página de contacto de David Moreno para oportunidades laborales, colaboraciones freelance y proyectos frontend.",
    },
    ca: {
      title: "Contacte | David Moreno",
      description:
        "Pàgina de contacte de David Moreno per a oportunitats laborals, col·laboracions freelance i projectes frontend.",
    },
    en: {
      title: "Contact | David Moreno",
      description:
        "Contact page for David Moreno regarding job opportunities, freelance collaborations and frontend projects.",
    },
    sv: {
      title: "Kontakt | David Moreno",
      description:
        "Kontaktsida för David Moreno för jobbmöjligheter, frilanssamarbeten och frontendprojekt.",
    },
  },
  blog: {
    es: {
      title: "Blog | David Moreno",
      description:
        "Artículos sobre frontend, maquetación responsive, accesibilidad y rendimiento web escritos por David Moreno.",
    },
    ca: {
      title: "Blog | David Moreno",
      description:
        "Articles sobre frontend, maquetació responsive, accessibilitat i rendiment web escrits per David Moreno.",
    },
    en: {
      title: "Blog | David Moreno",
      description:
        "Articles about frontend, responsive layout, accessibility and web performance written by David Moreno.",
    },
    sv: {
      title: "Blogg | David Moreno",
      description:
        "Artiklar om frontend, responsiv layout, tillgänglighet och webbprestanda skrivna av David Moreno.",
    },
  },
};

const pageKeyMap = {
  home: { routeKey: "home", language: "es" },
  homeEs: { routeKey: "home", language: "es" },
  homeCa: { routeKey: "home", language: "ca" },
  homeEn: { routeKey: "home", language: "en" },
  homeSv: { routeKey: "home", language: "sv" },
  sobreMiEs: { routeKey: "about", language: "es" },
  sobreMiCa: { routeKey: "about", language: "ca" },
  sobreMiEn: { routeKey: "about", language: "en" },
  sobreMiSv: { routeKey: "about", language: "sv" },
  serviciosEs: { routeKey: "services", language: "es" },
  serviciosCa: { routeKey: "services", language: "ca" },
  serviciosEn: { routeKey: "services", language: "en" },
  serviciosSv: { routeKey: "services", language: "sv" },
  proyectosEs: { routeKey: "projects", language: "es" },
  proyectosCa: { routeKey: "projects", language: "ca" },
  proyectosEn: { routeKey: "projects", language: "en" },
  proyectosSv: { routeKey: "projects", language: "sv" },
  contactoEs: { routeKey: "contact", language: "es" },
  contactoCa: { routeKey: "contact", language: "ca" },
  contactoEn: { routeKey: "contact", language: "en" },
  contactoSv: { routeKey: "contact", language: "sv" },
  blogEs: { routeKey: "blog", language: "es" },
  blogCa: { routeKey: "blog", language: "ca" },
  blogEn: { routeKey: "blog", language: "en" },
  blogSv: { routeKey: "blog", language: "sv" },
};

const routeContentKeys = {
  home: "home",
  about: "about",
  services: "services",
  projects: "projects",
  contact: "contact",
  blog: "blog",
};

const getAbsoluteUrl = (path) => `${siteUrl}${path}`;

const buildAlternates = (routeKey) => [
  ...SUPPORTED_LANGUAGES.map((language) => ({
    hrefLang: language,
    path: getPathForRoute(routeKey, language),
  })),
  { hrefLang: "x-default", path: getPathForRoute(routeKey, "es") },
];

const getUniqueAlternates = (alternates = []) => {
  const seen = new Set();

  return alternates.filter((item) => {
    const key = `${item.hrefLang}-${item.path}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const pageSeo = Object.fromEntries(
  Object.entries(pageKeyMap).map(([pageKey, { routeKey, language }]) => {
    const contentKey = routeContentKeys[routeKey];
    const page = localizedContent[contentKey][language];

    return [
      pageKey,
      {
        title: page.title,
        description: page.description,
        path: getPathForRoute(routeKey, language),
        alternates: buildAlternates(routeKey),
      },
    ];
  })
);

pageSeo.proyectoEs = {
  title: "Proyecto | David Moreno",
  description:
    "Ficha de proyecto dentro del portfolio de David Moreno, con enfoque en frontend, maquetación y desarrollo web.",
  path: "/proyecto",
  alternates: [],
};

export function SeoHead({ pageKey }) {
  const page = pageSeo[pageKey];

  if (!page) {
    return null;
  }

  const canonical = getAbsoluteUrl(page.path);
  const alternates = getUniqueAlternates(page.alternates);

  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={canonical} />
      {alternates.map((alternate) => (
        <link
          key={`${alternate.hrefLang}-${alternate.path}`}
          rel="alternate"
          hrefLang={alternate.hrefLang}
          href={getAbsoluteUrl(alternate.path)}
        />
      ))}
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </>
  );
}

export function buildBlogMetadata({ postId, language, title, description }) {
  const canonicalPath = getPathForBlogPost(postId, language);
  const languageAlternates = Object.fromEntries(
    [
      ...SUPPORTED_LANGUAGES.map((item) => [item, getAbsoluteUrl(getPathForBlogPost(postId, item))]),
      ["x-default", getAbsoluteUrl(getPathForBlogPost(postId, "es"))],
    ]
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(canonicalPath),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
