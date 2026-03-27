export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://davidmoreno.dev/sitemap.xml",
  };
}
