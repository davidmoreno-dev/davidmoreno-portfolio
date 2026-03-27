import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "./utility/blog-data.mjs";
import { routeSlugs } from "./utility/route-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createPrefixedPath = (language, slugPath) => {
  if (language === "es") {
    return !slugPath || slugPath === "/" ? "/" : slugPath;
  }

  if (!slugPath || slugPath === "/") {
    return `/${language}`;
  }

  return `/${language}${slugPath}`;
};

const routeTranslations = Object.fromEntries(
  Object.entries(routeSlugs).map(([routeKey, translations]) => [
    routeKey,
    Object.fromEntries(
      Object.entries(translations).map(([language, slugPath]) => [
        language,
        createPrefixedPath(language, slugPath),
      ])
    ),
  ])
);

const buildLegacyPageRedirects = () => {
  const redirects = [];

  for (const [routeKey, translations] of Object.entries(routeSlugs)) {
    if (routeKey === "home") {
      continue;
    }

    const spanishSource = translations.es;

    for (const [language, sourcePath] of Object.entries(translations)) {
      const destination = routeTranslations[routeKey]?.[language];

      if (!destination || sourcePath === destination) {
        continue;
      }

      if (language !== "es" && sourcePath === spanishSource) {
        continue;
      }

      redirects.push({
        source: sourcePath,
        destination,
        permanent: true,
      });
    }
  }

  return redirects;
};

const buildLegacyBlogRedirects = () =>
  blogPosts.flatMap((post) =>
    Object.entries(post.translations)
      .map(([language, translation]) => ({
        source: `${routeSlugs.blog[language]}/${translation.slug}`,
        destination: `${routeTranslations.blog[language]}/${translation.slug}`,
        permanent: true,
      }))
      .filter(({ source, destination }) => source !== destination)
      .filter(({ source }, index, redirects) =>
        redirects.findIndex((item) => item.source === source) === index
      )
  );

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },
      { source: "/ca/sobre-mi", destination: "/ca/sobremi", permanent: true },
      { source: "/about", destination: "/sobre-mi", permanent: true },
      { source: "/works", destination: "/proyectos", permanent: true },
      { source: "/work-single", destination: "/proyecto", permanent: true },
      { source: "/blog-single", destination: "/blog", permanent: true },
      ...buildLegacyPageRedirects(),
      ...buildLegacyBlogRedirects(),
    ];
  },
};

export default nextConfig;
