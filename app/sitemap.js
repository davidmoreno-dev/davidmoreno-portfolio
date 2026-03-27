import { blogPosts } from "@/utility/blog";
import {
  SUPPORTED_LANGUAGES,
  getPathForBlogPost,
  getPathForRoute,
  routeTranslations,
} from "@/utility/routes";

const siteUrl = "https://davidmoreno.dev";

export default function sitemap() {
  const staticPaths = [
    ...Object.values(routeTranslations).flatMap((translations) =>
      Object.values(translations)
    ),
    "/proyecto",
  ];

  const uniqueStaticPaths = [...new Set(staticPaths)];

  const staticEntries = uniqueStaticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === getPathForRoute("home", "es") ||
      path === getPathForRoute("home", "ca") ||
      path === getPathForRoute("home", "en") ||
      path === getPathForRoute("home", "sv")
        ? "weekly"
        : "monthly",
    priority: path === getPathForRoute("home", "es") ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.flatMap((post) =>
    SUPPORTED_LANGUAGES.map((language) => ({
      url: `${siteUrl}${getPathForBlogPost(post.id, language)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
