"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Propuestas() {
  const googleDriveEmbedUrl = "https://drive.google.com/file/d/1WBrXq8mzsFsQVZbFu64kqF9XPIoyrffe/preview";
  
  const pdfDownloadPath = "/docs/plan-de-trabajo.pdf"; 

  return (
    <main className="bg-white pt-40 w-full mx-auto text-black overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-6 md:px-12 space-y-6 mb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:text-5xl text-3xl font-extrabold text-orange-600 tracking-tight"
        >
          Nuestro Plan de Trabajo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:text-lg text-base max-w-3xl mx-auto text-gray-700 leading-relaxed"
        >
          Creemos en un futuro planificado, con acciones concretas y objetivos claros.
          Aquí te presentamos nuestra propuesta detallada para seguir haciendo crecer Potrero.
        </motion.p>
      </motion.section>

      
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={googleDriveEmbedUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>
        
        {/* Botón de Descarga */}
        <div className="text-center mt-8">
            <a
                href={pdfDownloadPath}
                download="Plan de Trabajo - Propuesta.pdf"
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition"
            >
                Descargar Propuesta Completa (PDF)
            </a>
        </div>
      </motion.section>

      {/* Sección Futura (sin cambios) */}
      <section className="py-20 text-center container mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Nuestros Ejes de Gestión
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-900 opacity-50">
          <div className="bg-orange-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Turismo y Desarrollo</h3>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Obras y Servicios</h3>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Educación y Cultura</h3>
          </div>
        </div>
      </section>
    </main>
  );
}