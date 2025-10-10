"use client"; 
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { noticias } from "@/app/data/noticias";


export default function NoticiaCliente({ params }) {
  const actualParams = React.use(params);
  const { slug } = actualParams;

  const noticia = noticias[slug];

  if (!noticia)
    return <p className="text-center pt-40 text-gray-500">Cargando noticia...</p>;

  return (
    <main className="max-w-5xl pt-32 mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-orange-500 text-center md:text-left relative"
      >
        {noticia.titulo}
        <div className="w-40 h-1 mx-auto md:mx-0 my-10 bg-[#ff6e1c] rounded"></div>
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
              alt={`${noticia.titulo} - Imagen ${i + 1}`}
              width={800}
              height={500}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}

       <div className="space-y-6">
          {noticia.contenido.map((parrafo, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {parrafo}
            </motion.p>
          ))}
      </div>

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
        
        <div className="text-center md:text-left pt-8">
          <Link
            href="/#informate"
            className="text-orange-600 font-medium hover:underline text-lg"
          >
            ← Volver a todas las noticias
          </Link>
        </div>
      </div>
    </main>
  );
}