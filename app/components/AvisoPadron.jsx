"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AvisoPadron() {
  const [isVisible, setIsVisible] = useState(true);


  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('avisoPadronCerrado', 'true');
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 w-full max-w-xs sm:max-w-sm"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="bg-white rounded-lg shadow-2xl p-3 border border-gray-200 relative">
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-md hover:bg-red-100 transition-colors"
              aria-label="Cerrar aviso"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <p className="font-semibold text-blue-900 mb-1 text-base sm:text-lg">
              Elecciones 2025
            </p>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">
              Consultá el padrón electoral de Potrero de los Funes.
            </p>

            <Link
              href="https://www.periodicojudicial.gov.ar/padron-de-electores-ya-se-puede-consultar-en-el-sitio-web-de-la-justicia-electoral-provincial/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-orange-600 text-white font-bold py-2 px-3 text-sm sm:text-base rounded-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
            >
              Conocer el padrón
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}