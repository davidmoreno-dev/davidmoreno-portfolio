import "@css/bootstrap.min.css";
import "@css/coloring.css";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Dave | Frontend Developer",
  description: "Portfolio personal de Dave, frontend developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Preloader />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
