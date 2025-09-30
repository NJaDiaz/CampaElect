"use client";

import React, { useContext } from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CookieConsentContext } from "@/context/CookieConsentContext";

const Footer = () => {
  const { setConsented } = useContext(CookieConsentContext);

  const handleReopenBanner = () => {
    localStorage.removeItem("mi_consentimiento_cookie");
    setConsented(null);
    window.location.reload();
  };

  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LOGO */}
          <div className="flex flex-col items-center text-center">
            <a href="/">
              <img className="w-52 h-auto" src="/images/LogoNav.png" alt="Logo de Campaña" />
            </a>
            <p className="mt-4 text-lg">Juntos por el progreso de Potrero de los Funes</p>
          </div>

          {/* CONTACTO */}
          <div className="text-center">
            <p className="font-semibold text-lg">Contáctanos</p>
            <div className="flex items-center justify-center mt-2">
              <FaPhoneAlt className="text-orange-500 text-xl mr-2" />
              <span>+54 9 123 456 789</span>
            </div>
            <div className="flex items-center justify-center mt-2">
              <FaMapMarkerAlt className="text-orange-500 text-xl mr-2" />
              <span>Potrero de los Funes</span>
            </div>
            <p className="font-semibold md:mt-3 mt-2 text-lg">Síguenos</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-3xl hover:text-yellow-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-3xl hover:text-yellow-500 transition duration-300">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold text-lg">Enlaces Rápidos</p>
            <ul className="mt-4 font-thin space-y-2">
              <li>
                <a href="/#propuesta" className="text-orange-500 hover:text-yellow-500 transition duration-300">
                  Nuestras Propuestas
                </a>
              </li>
              <li>
                <a href="/conocenos" className="text-orange-500 hover:text-yellow-500 transition duration-300">
                  Conócenos
                </a>
              </li>
              <li>
                <a href="/unete" className="text-orange-500 hover:text-yellow-500 transition duration-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="text-sm text-gray-500 hover:underline">Política de Cookies</a>
              </li>
              <li>
                <button onClick={handleReopenBanner} className="text-sm text-gray-500 hover:underline">
                  Cambiar consentimiento de cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-700">&copy; 2025 Potrero Activo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
