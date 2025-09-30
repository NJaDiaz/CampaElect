"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const noticias = {
  "pedido-informe": {
    titulo: "El presidente dijo NO al pedido de informe elevado por Daniel Orlando",
    fecha: "06 Agosto del 2025",
    contenido: `El presidente del Honorable Consejo Deliberante no puso a consideración el pedido de informe solicitado por Daniel Orlando al actual intendente de Potrero de Los funes.
La localidad continua sin una fecha electoral, sin detalles de organización, costos ni origen de fondos, esto refleja una falta de respuesta hacia la democracia que tenemos en nuestro Pais.
A continuación dejamos un fragmento de Radio Dimensión en donde participo el candidato Daniel Orlando`,
    imagenes: ["/informate/hcd.webp"],
    embed: "https://embed.screenapp.io/app/#/shared/bIMwsfJ47b?embed=true",
  },
};

export default function NoticiaDetalle({ params }) {
  // ✅ Usar React.use() para desempaquetar params
  const actualParams = React.use(params);
  const { slug } = actualParams;

  const noticia = noticias[slug];

  if (!noticia)
    return <p className="text-center py-20 text-gray-500">Cargando noticia...</p>;

  return (
    <main className="max-w-5xl pt-32 mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-orange-500 text-center md:text-left relative"
      >
        {noticia.titulo}
  <div className="w-40 h-1 mx-auto my-10 bg-[#ff6e1c] rounded"></div>
      </motion.h1>

      <p className="text-gray-500 text-center md:text-left">{noticia.fecha}</p>

      <div className="space-y-8">
        {noticia.imagenes.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg"
          >
            <Image
              src={img}
              alt={`Imagen ${i + 1}`}
              width={800}
              height={500}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          {noticia.contenido}
        </motion.p>

        {noticia.embed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-video rounded-lg overflow-hidden"
          >
            <iframe
              src={noticia.embed}
              title="Video Embed"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </motion.div>
        )}
      </div>
    </main>
  );
}