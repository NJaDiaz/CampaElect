"use client";

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFB347] to-[#FF6B00] text-white pb-12">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center md:justify-between">
        
        <div className="flex flex-col items-center md:items-center md:w-1/2">
          <img
            src="/images/Daniel2025.webp"
            alt="Candidato"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover object-[95%_center] shadow-lg border-4 border-white"
          />
          <h1 className="text-xl font-semibold my-4 text-center md:text-left">
            Daniel Orlando. Candidato a intendente 2025.
          </h1>
          <div className="mt-4 flex gap-6">
            <a
              href="https://www.instagram.com/potrero.activo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-yellow-300 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-yellow-300 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <img
            src="/images/logo.png"
            alt="Logo Campaña"
            className="w-40 h-40 md:w-56 md:h-52 mx-auto mb-3"
          />
          <h2 className="text-4xl md:text-5xl font-bold mt-6 md:mt-0">
            El futuro está en nuestras manos
          </h2>
          <p className="text-xl mt-6">
            "Juntos podemos volver a Potrero más justo, inclusivo y sostenible."
          </p>

          <div className="my-8 flex justify-center md:justify-start gap-6">
            <a
              href="/unete"
              className="bg-[#FF6B00] hover:bg-[#FFA500] text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300"
            >
              Únete a la Campaña
            </a>
            <a
              href="/galeria"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#FF6B00] py-2 px-6 rounded-md text-lg font-semibold transition duration-300"
            >
              Ver Galería
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
