"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const noticias = {
  "pedido-informe": {
    titulo: "El presidente dijo NO al pedido de informe elevado por Daniel Orlando",
    fecha: "06 Agosto del 2025",
    contenido: [
      "El presidente del Honorable Consejo Deliberante no puso a consideración el pedido de informe solicitado por Daniel Orlando al actual intendente de Potrero de Los funes.",
      "La localidad continua sin una fecha electoral, sin detalles de organización, costos ni origen de fondos, esto refleja una falta de respuesta hacia la democracia que tenemos en nuestro Pais.",
      "A continuación dejamos un fragmento de Radio Dimensión en donde participo el candidato Daniel Orlando"
    ],
    imagenes: ["/informate/hcd.webp"],
    embed: "https://embed.screenapp.io/app/#/shared/bIMwsfJ47b?embed=true",
  },
  "presentacion-candidatos-potrero-activo": {
    titulo: "Presentación de los candidatos a concejales de Potrero Activo",
    fecha: "23 Septiembre del 2025",
    contenido: [
        "En un encuentro cargado de entusiasmo y compromiso, Potrero Activo presentó oficialmente a los candidatos que integran su lista para el Concejo Deliberante. El espacio, que viene creciendo con propuestas enfocadas en el desarrollo local, la participación ciudadana y la transparencia, dio a conocer a los vecinos los nombres de quienes lo representarán en las próximas elecciones.",
        "Encabezando la lista se encuentra Marcelo de la Reta, quien ocupará el primer lugar como candidato a concejal titular. Lo acompañan Navila Bustos como segunda candidata y Carlos Lucero como tercero, completando un equipo con fuerte presencia en la comunidad y una marcada vocación de servicio.",
        "Como suplentes fueron presentados Emilce Miranda (primera suplente), Gustavo Amaya (segundo suplente) y Mariana Cadelago (tercera suplente), quienes se suman al proyecto aportando su compromiso y experiencia en distintos ámbitos sociales y vecinales.",
        "Durante la presentación, los referentes de Potrero Activo destacaron la importancia de construir una alternativa plural, cercana a la gente y enfocada en el bienestar de todos los vecinos.",
        "Con esta presentación, Potrero Activo reafirma su voluntad de ser parte del futuro político y social del municipio, llevando adelante una propuesta basada en la participación, la honestidad y el trabajo conjunto."
    ],
    imagenes: ["/informate/candidatos2.jpg"],
  },
  "presentacion-campana-potrero-activo": {
    titulo: "Presentación de la Campaña Potrero Activo y proyecto de trabajo 2025-2029",
    fecha: "09 Octubre del 2025",
    imagenes: ["/informate/nota.webp"],
    contenido: [
        "Este viernes 10 de octubre, el espacio Potrero Activo llevará a cabo la presentación oficial de su campaña y plan de trabajo 2025–2029, en un encuentro abierto a toda la comunidad.",
        "Durante el evento, los integrantes del equipo compartirán los principales ejes de su propuesta para los próximos años, orientada al crecimiento sostenible del municipio, la mejora de los servicios y la participación activa de los vecinos en las decisiones locales.",
        "El plan contempla acciones concretas en materia de infraestructura, medio ambiente, desarrollo social, deporte y turismo, buscando consolidar un modelo de gestión moderna, transparente y cercana a la gente. La jornada contará con la presencia del equipo de trabajo y con vecinos, instituciones y referentes locales que acompañan el proyecto.",
        "Con esta presentación, Potrero Activo continúa fortaleciendo su compromiso con el desarrollo de Potrero de los Funes, reafirmando su voluntad de trabajar por una comunidad más participativa, inclusiva y con futuro."
    ],
  },
  "nota-consejo-deliberante": {
    titulo: "Nota al consejo deliberante",
    fecha: "05 Agosto 2025",
    imagenes: ["/informate/nota.webp"],
    contenido: [
      "Daniel Orlando presentó un pedido de informe al Consejo Deliberante en busca de claridad y respuesta para el pueblo, ya que se acerca la fecha de elecciones y no hay certeza alguna de que esto suceda."
    ],
  },
};

export default function NoticiaDetalle({ params }) {
  // --- APLICANDO LA CORRECCIÓN AQUÍ ---
  const actualParams = React.use(params);
  const { slug } = actualParams;

  const noticia = noticias[slug];
  // ------------------------------------

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
              alt={`Imagen ${i + 1}`}
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
      </div>
    </main>
  );
}