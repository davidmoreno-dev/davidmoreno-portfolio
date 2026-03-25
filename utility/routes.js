import { blogPosts } from "./blog";

export const routeTranslations = {
  home: { es: "/", ca: "/", en: "/", sv: "/" },
  about: { es: "/sobre-mi", ca: "/sobre-mi", en: "/about-me", sv: "/om-mig" },
  services: { es: "/servicios", ca: "/serveis", en: "/services", sv: "/tjanster" },
  projects: { es: "/proyectos", ca: "/projectes", en: "/projects", sv: "/projekt" },
  blog: { es: "/blog", ca: "/blog", en: "/blog", sv: "/blogg" },
  contact: { es: "/contacto", ca: "/contacte", en: "/contact", sv: "/kontakt" },
};

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

export const getPathForRoute = (routeKey, language) =>
  routeTranslations[routeKey]?.[language] ?? "/";

export const getBlogBasePath = (language) => getPathForRoute("blog", language);

export const getPathForBlogPost = (postId, language) => {
  const post = blogPosts.find((item) => item.id === postId);

  if (!post) {
    return getBlogBasePath(language);
  }

  return `${getBlogBasePath(language)}/${post.translations[language].slug}`;
};

export const getLanguageFromPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);

  for (const [routeKey, translations] of Object.entries(routeTranslations)) {
    if (routeKey === "home" || routeKey === "blog") {
      continue;
    }

    const matchingLanguages = Object.entries(translations)
      .filter(([, translatedPath]) => normalizedPath === translatedPath)
      .map(([language]) => language);

    if (matchingLanguages.length === 1) {
      return matchingLanguages[0];
    }

    if (matchingLanguages.length > 1) {
      return null;
    }
  }

  if (normalizedPath.startsWith("/blogg/")) {
    return "sv";
  }

  if (normalizedPath === "/blogg") {
    return "sv";
  }

  const blogPost = getBlogPostFromPath(normalizedPath);
  return blogPost?.language ?? null;
};

export const getBlogPostFromPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length !== 2) {
    return null;
  }

  const [base, slug] = segments;

  if (base !== "blog" && base !== "blogg") {
    return null;
  }

  for (const post of blogPosts) {
    for (const [language, translation] of Object.entries(post.translations)) {
      if (translation.slug === slug) {
        return { id: post.id, language };
      }
    }
  }

  return null;
};

export const translatePath = (pathname, targetLanguage) => {
  const normalizedPath = normalizePath(pathname);

  for (const [routeKey, translations] of Object.entries(routeTranslations)) {
    for (const translatedPath of Object.values(translations)) {
      if (normalizedPath === translatedPath) {
        return getPathForRoute(routeKey, targetLanguage);
      }
    }
  }

  const blogPost = getBlogPostFromPath(normalizedPath);

  if (blogPost) {
    return getPathForBlogPost(blogPost.id, targetLanguage);
  }

  return pathname;
};
