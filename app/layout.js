import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CookiesBanner from "./components/CookiesBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Potrero Activo 2025",
  description: "Potrero Activo 2025 - Potrero de los Funes, San Luis, Argentina",
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
      </body>
    </html>
  );
}
