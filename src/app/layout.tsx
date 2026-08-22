import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyWeb Agency | Ingeniería de Adquisición para Aging in Place",
  description: "Escala tu empresa de remodelación y Aging in Place. Te enviamos leads exclusivos y confirmados de dueños de casa que necesitan adaptaciones de accesibilidad hoy mismo.",
  keywords: ["Aging in place leads", "remodelación accesibilidad", "home improvement leads", "SkyWeb Agency", "CRM para contratistas", "captación de clientes remodelación"],
  openGraph: {
    title: "SkyWeb Agency | Ingeniería de Adquisición B2B",
    description: "Deja de comprar leads genéricos. Adquiere citas confirmadas con dueños de casa para proyectos de Aging in Place.",
    url: "https://skywebagency.com",
    siteName: "SkyWeb Agency",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
