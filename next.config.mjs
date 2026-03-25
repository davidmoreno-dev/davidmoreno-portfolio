/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-me", permanent: true },
      { source: "/works", destination: "/projects", permanent: true },
      { source: "/work-single", destination: "/proyecto", permanent: true },
      { source: "/blog-single", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
