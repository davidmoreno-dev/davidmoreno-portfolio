import "@css/bootstrap.min.css";
import "@css/coloring.css";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

import { Inter_Tight, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import Preloader from "@/layouts/Preloader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const siteUrl = "https://davidmoreno.dev";
const siteTitle = "David Moreno | Frontend Developer";
const siteDescription =
  "Portfolio de David Moreno, frontend developer especializado en interfaces web, WordPress, e-commerce, rendimiento y experiencia de usuario.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | David Moreno",
  },
  description: siteDescription,
  keywords: [
    "David Moreno",
    "Frontend Developer",
    "Frontend Developer Barcelona",
    "Desarrollador Frontend",
    "WordPress Developer",
    "WooCommerce",
    "Core Web Vitals",
    "Portfolio Frontend",
  ],
  authors: [{ name: "David Moreno", url: siteUrl }],
  creator: "David Moreno",
  publisher: "David Moreno",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "David Moreno Portfolio",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-14X2X69C86"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-14X2X69C86');
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${interTight.variable}`}>
        <Preloader />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
