import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const title = "Xentra CRM | El único CRM que te dice qué cliente necesita tu servicio primero";
const description =
  "Xentra te trae los leads, inspecciona con el Fall Risk Score, cotiza en un clic y cierra y cobra. El sistema completo para empresas de aging in place. Un producto de SkyWeb Agency.";

export const metadata: Metadata = {
  metadataBase: new URL("https://xentracrm.com"),
  title,
  description,
  keywords: [
    "CRM aging in place",
    "Fall Risk Score",
    "leads aging in place",
    "CRM para contratistas",
    "Xentra CRM",
    "SkyWeb Agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://xentracrm.com",
    siteName: "Xentra CRM",
    locale: "es_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
