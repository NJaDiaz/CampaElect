
"use client";

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <main className="pt-24 bg-[#ff6e1c] w-full mx-auto">
      <motion.section
        className="relative bg-gradient-to-b from-[#ff6e1c] via-[#ff8e4c] to-[#f7924b] text-white pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center md:justify-between">
          
          <div className="flex flex-col items-center md:items-center md:w-1/2">
            <motion.img
              src="/images/Daniel2025.webp"
              alt="Candidato a Potrero de los Funes Daniel Orlando"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover object-[95%_center] shadow-lg border-4 border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.h1 
              className="text-xl font-semibold my-4 text-center"
              variants={itemVariants}
            >
              Daniel Orlando. <br /> Candidato a intendente de Potrero de los Funes 2025.
            </motion.h1>
            <motion.div 
              className="mt-4 flex gap-6"
              variants={itemVariants}
            >
              <a href="https://www.instagram.com/potrero.activo" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-300 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/daniel.orlando.35175" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-300 transition duration-300">
                <FaFacebook />
              </a>
            </motion.div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
            <motion.img
              src="/images/logo.png"
              alt="Logo Campaña"
              className="w-40 h-40 md:w-56 md:h-52 mx-auto mb-3"
              variants={itemVariants}
            />
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mt-6 md:mt-0"
              variants={itemVariants}
            >
              El futuro está en nuestras manos
            </motion.h2>
            <motion.p 
              className="text-xl mt-6"
              variants={itemVariants}
            >
              "Juntos podemos volver a Potrero más justo, inclusivo y sostenible."
            </motion.p>

            <motion.div 
              className="my-8 flex justify-center md:justify-start gap-6"
              variants={itemVariants}
            >
              <a href="/unete" className="bg-[#FF6B00] hover:bg-[#FFA500] text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
                Únete a la Campaña
              </a>
              <a href="/galeria" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#FF6B00] py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
                Ver Galería
              </a>
            </motion.div>
          </div>

        </div>
      </motion.section>
    </main>
  );
};

export default Hero;