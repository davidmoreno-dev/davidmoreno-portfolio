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

export const metadata = {
  title: "Dave | Frontend Developer",
  description: "Portfolio personal de Dave, frontend developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${plusJakartaSans.variable} ${interTight.variable}`}>
        <Preloader />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
