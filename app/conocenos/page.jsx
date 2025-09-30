"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Conocenos() {
  return (
    <main className="bg-white pt-40 w-full mx-auto text-black overflow-x-hidden">
      
      {/* Hero */}
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
          Conócenos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:text-lg text-base max-w-2xl mx-auto text-gray-700 leading-relaxed"
        >
          Más de 12 años de trabajo, compromiso y desarrollo para Potrero.
          Te contamos quiénes somos, qué hicimos y qué soñamos.
        </motion.p>
      </motion.section>

      {/* Trayectoria */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-orange-50 py-16 px-6 md:px-16 lg:px-36 space-y-6 rounded-2xl shadow-md container mx-auto"
      >
        <h2 className="text-3xl font-bold text-orange-600">Nuestra Trayectoria</h2>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          A lo largo de los últimos 12 años, llevamos adelante una gestión
          comprometida con cada rincón de Potrero. Obras, cultura, educación
          y desarrollo local nos definen.
        </p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800"
        >
          {[
            "Mejoras integrales en caminos y servicios públicos.",
            "Fomento sostenido al turismo local y regional.",
            "Apoyo constante al sistema educativo y escuelas.",
            "Más de 100 eventos culturales y sociales realizados.",
            "Impulso al emprendedurismo y comercios locales.",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-start gap-2"
            >
              <span className="text-orange-600 font-bold">✔</span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Libro PDF */}
     <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="text-center md:text-right space-y-6 px-6 md:px-24 py-16 container mx-auto max-w-7xl"
>
  <h2 className="text-3xl font-bold text-orange-600">
    Nuestra Historia en Detalle
  </h2>
  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl md:ml-auto">
    En este libro de 3 capítulos documentamos en profundidad la evolución
    de Potrero y los logros alcanzados.
  </p>

  {/* Contenedor scrollable con snap */}
  <div className="flex flex-row justify-start md:justify-end gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
    {[
      { label: "📘 Capítulo 1", url: "https://drive.google.com/file/d/ID_DEL_TOMO_1/view" },
      { label: "📙 Capítulo 2", url: "https://drive.google.com/file/d/ID_DEL_TOMO_2/view" },
      { label: "📗 Capítulo 3", url: "https://drive.google.com/file/d/ID_DEL_TOMO_3/view" },
    ].map((link, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="shrink-0 snap-start"
      >
        <Link
          href={link.url}
          target="_blank"
          className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition block whitespace-nowrap"
        >
          {link.label}
        </Link>
      </motion.div>
    ))}
  </div>
</motion.section>



      {/* Candidato */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16 px-6 md:px-36 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-10 container mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/Perfil.webp"
            alt="Candidato"
            width={320}
            height={320}
            className="rounded-full object-cover shadow-xl border-4 border-orange-600"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-4 max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-blue-900">
            La cara visible del proyecto
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Nuestro candidato ha sido una figura clave en cada una de las
            gestiones anteriores. Su compromiso con la comunidad, su cercanía
            con los vecinos y su visión para el futuro lo posicionan como el
            líder ideal para seguir haciendo crecer Potrero.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 px-6 md:px-28 text-center space-y-6 md:rounded-2xl shadow-lg container mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold">
          Seguimos trabajando por Potrero
        </h3>
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Gracias por acompañarnos durante todos estos años. Queremos seguir
          avanzando con vos, con más energía y compromiso que nunca.
        </p>
      </motion.section>
    </main>
  );
}

