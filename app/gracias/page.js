// app/gracias/page.js

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Gracias() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <main className="flex items-center justify-center min-h-screen bg-orange-50 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 md:p-16 rounded-2xl shadow-lg max-w-2xl"
      >
        <div className="flex justify-center mb-6">
          <FaHeart className="text-orange-500 text-5xl animate-pulse" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          ¡Muchas gracias por sumarte!
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Tu participación es muy importante para nosotros. Juntos vamos a seguir trabajando por el futuro de Potrero.
        </p>
        
        <p className="text-sm text-gray-500">
          En unos segundos serás redirigido a la página principal...
        </p>
      </motion.div>
    </main>
  );
}