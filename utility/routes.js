import { blogPosts } from "./blog-data.mjs";
import {
  SUPPORTED_LANGUAGES,
  routeSlugs,
} from "./route-data.mjs";

export { SUPPORTED_LANGUAGES, routeSlugs };

export const legacyRouteTranslations = routeSlugs;

const createPrefixedPath = (language, slugPath) => {
  if (language === "es") {
    return !slugPath || slugPath === "/" ? "/" : slugPath;
  }

  if (!slugPath || slugPath === "/") {
    return `/${language}`;
  }

  return `/${language}${slugPath}`;
};

export const routeTranslations = Object.fromEntries(
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

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const stripLanguagePrefix = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (!segments.length) {
    return "/";
  }

  if (SUPPORTED_LANGUAGES.includes(segments[0])) {
    const remaining = segments.slice(1);
    return remaining.length ? `/${remaining.join("/")}` : "/";
  }

  return normalizedPath;
};

const getRouteKeyFromPath = (pathname) => {
  const strippedPath = stripLanguagePrefix(pathname);

  for (const [routeKey, translations] of Object.entries(routeSlugs)) {
    if (Object.values(translations).includes(strippedPath)) {
      return routeKey;
    }
  }

  return null;
};

export const getPathForRoute = (routeKey, language) =>
  routeTranslations[routeKey]?.[language] ?? routeTranslations.home.es;

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
  const segments = normalizedPath.split("/").filter(Boolean);

  if (!segments.length) {
    return "es";
  }

  if (SUPPORTED_LANGUAGES.includes(segments[0])) {
    return segments[0];
  }

  const routeKey = getRouteKeyFromPath(normalizedPath);

  if (routeKey) {
    const matchingLanguages = Object.entries(routeSlugs[routeKey])
      .filter(([, translatedPath]) => translatedPath === normalizedPath)
      .map(([language]) => language);

    if (!matchingLanguages.length) {
      return "es";
    }

    return matchingLanguages.length === 1 ? matchingLanguages[0] : "es";
  }

  const blogPost = getBlogPostFromPath(normalizedPath);
  return blogPost?.language ?? "es";
};

export const getBlogPostFromPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length === 3 && SUPPORTED_LANGUAGES.includes(segments[0])) {
    const [language, base, slug] = segments;
    const expectedBase = routeSlugs.blog[language].replace("/", "");

    if (base !== expectedBase) {
      return null;
    }

    const post = blogPosts.find((item) => item.translations[language]?.slug === slug);

    if (!post) {
      return null;
    }

    return { id: post.id, language };
  }

  if (segments.length === 2) {
    const [base, slug] = segments;

    for (const post of blogPosts) {
      for (const [language, translation] of Object.entries(post.translations)) {
        const expectedBase = routeSlugs.blog[language].replace("/", "");

        if (base === expectedBase && translation.slug === slug) {
          return { id: post.id, language };
        }
      }
    }
  }

  return null;
};

export const translatePath = (pathname, targetLanguage) => {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === "/") {
    return getPathForRoute("home", targetLanguage);
  }

  const routeKey = getRouteKeyFromPath(normalizedPath);

  if (routeKey) {
    return getPathForRoute(routeKey, targetLanguage);
  }

  const blogPost = getBlogPostFromPath(normalizedPath);

  if (blogPost) {
    return getPathForBlogPost(blogPost.id, targetLanguage);
  }

  return normalizedPath;
};
