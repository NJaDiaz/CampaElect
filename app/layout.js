import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CookiesBanner from "./components/CookiesBanner";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Potrero Activo | Daniel Orlando 2025',
    template: '%s | Potrero Activo',
  },
  description: 'Conocé el equipo, las propuestas y el plan de trabajo de Potrero Activo, la lista encabezada por Daniel Orlando para el futuro de Potrero de los Funes, San Luis.',
  keywords: ['Potrero Activo', 'Daniel Orlando', 'Potrero de los Funes', 'elecciones Potrero', 'San Luis'],

  alternates: {
    canonical: 'https://potreroactivo.online/',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> 
        <main>{children}</main>
        < CookiesBanner />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
