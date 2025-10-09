"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const concejales = [
  { id: 1, nombre: "Marcelo de la Reta", imagen: "/equipo/Concejal.jpeg",
    descripcion: "Elegí potrero para que sea mi hogar hace 18 años, abrí mi comercio y reinvertí construyendo mi casa y dos cabañas, me desempeñé por dos años como secretario legislativo del Honorable Concejo Deliberante. Actualmente estoy en la comisión del club Defensores de Potrero hace 8 años, el cual es mi pasión." 
 },
  { id: 2, nombre: "Navila Bustos", imagen: "/equipo/Concejal2.jpeg",
    descripcion: "Viví desde mi infancia en Potrero, actualmente soy procuradora y en poco tiempo seré abogada. Mi propuesta central es la creación de un Digesto Municipal. Uno de mis ejes fundamentales es la educación para nuestros jóvenees y niños, y un medioambiente cuidado para que Potrero siga siendo un lugar único y seguro para los locales y turistas. Potrero tiene todo para seguir creciendo, pero necesita orden, visión y compromiso. "
   },
  { id: 3, nombre: "Carlos Lucero", imagen: "/equipo/Concejal3.jpeg",
    descripcion: "Tengo 65 años, soy casado, papá de 3 hijos y abuelo de una hermosa nieta. Soy referente del Ente Mixto de Turismo, expositor de Potrero en la FIT(Feria Internacional de Turismo), actualmente soy Presidente de la Asociasión natación Master de la Provincia de San Luis."
   },
  { id: 4, nombre: "Emilce Miranda", imagen: "/equipo/Concejal_S1.jpeg",
    descripcion: "Nacida en San Luis, pero Potrero me cautivo, soy mamá de 3 hijos, 8 de corazón y abuela de 4 nietos. A lo largo de estos años he tenido la posibilidad de trabajar y compartir con vecinos y vecinas de nuestro querido Potrero, eso me permitió conocer de cerca la realidad, las necesidades y también sueños de muchas familias. Creo firmemente en que, con compromiso y solidaridad podemos seguir construyendo entre todos una mejor comunidad."
   },
  { id: 5, nombre: "Gustavo Amaya", imagen: "/equipo/Concejal_S2.jpeg",
    descripcion: "Tengo 42 años, me crie en esta ciudad, la cual vi crecer. Soy hijo de Laura Amaya, enfermera de Potrero y artesana, hoy el nombre del Paseo de los Artesanos lleva su nombre. Estudié hasta llegar a ser profesor. En el año 2020 formé mi banda 'Signos Foklore'. Creo que la cultura es sumamente importante para la identidad de una ciudad por eso mi aporte será desde lo cultural, a través de la presentación de un proyecto para la creación de una Escuela de Arte."
   },
  { id: 6, nombre: "Mariana Cadelago", imagen: "/equipo/Concejal_S3.jpeg",
    descripcion: "Le pregunte a mucha gente que me conoce que me definiera en una sola palabra, y esto fue lo que paso: soy energía, soy luchadora, soy autentica. Soy noble, soy luz, soy creadora y fuerte. Soy puro corazón y muy valiente. Hoy me toca un nuevo desafio, en el cual voy a mejorar día a día para poder seguir emprendiendo, sosteniendo, acompañando, uniendo, guiando y motivando a trabajar en equipo."
   },
];


export default function Conocenos() {
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

      
     <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="py-16 px-6 md:px-24 container mx-auto max-w-7xl space-y-12"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-3xl font-bold text-orange-600 text-center mb-10"
  >
    Nuestra Historia en Detalle
  </motion.h2>

  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
    En estos tomos encontrarás los principales hitos, proyectos y logros
    que Potrero Activo ha impulsado en Potrero de los Funes. Tres capítulos
    que reflejan años de trabajo, compromiso y crecimiento colectivo.
  </p>

  <div className="flex flex-col gap-16">
    {[
      {
        label: "📘 Capítulo 1",
        descripcion:
          "Los inicios: primeras obras, impulso cultural y desarrollo local en Potrero de los Funes.",
        url: "https://drive.google.com/file/d/1DZPR1SindzjpsVvnJweA6n2PWbV8OZAK/view",
        preview: "https://drive.google.com/file/d/1DZPR1SindzjpsVvnJweA6n2PWbV8OZAK/preview",
      },
      {
        label: "📙 Capítulo 2",
        descripcion:
          "Segunda etapa: fortalecimiento institucional, participación vecinal y nuevos proyectos de infraestructura.",
        url: "https://drive.google.com/file/d/1oFTb01myqgIv2XC3qVFTE7hfwGUyexba/view",
        preview: "https://drive.google.com/file/d/1oFTb01myqgIv2XC3qVFTE7hfwGUyexba/preview",
      },
      {
        label: "📗 Capítulo 3",
        descripcion:
          "Tercera etepa: una mirada hacia una gestión participativa y sustentable.",
        url: "https://drive.google.com/file/d/1uoQ_8_yFgmUZFxjmvaFtcMdmDtP8HU5B/view",
        preview: "https://drive.google.com/file/d/1uoQ_8_yFgmUZFxjmvaFtcMdmDtP8HU5B/preview",
      },
    ].map((capitulo, index) => (
      <motion.div
        key={capitulo.label}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col md:flex-row items-center gap-8 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Vista previa del PDF */}
        <div className="w-full md:w-1/2 h-72 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={capitulo.preview}
            className="w-full h-full"
            title={capitulo.label}
            allow="autoplay"
          ></iframe>
        </div>

        {/* Texto y botón */}
        <div
          className={`w-full md:w-1/2 space-y-4 ${
            index % 2 !== 0 ? "md:text-right" : "md:text-left"
          }`}
        >
          <h3 className="text-2xl font-bold text-blue-900">{capitulo.label}</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {capitulo.descripcion}
          </p>
          <Link
            href={capitulo.url}
            target="_blank"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Ver documento completo
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


      
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-36 flex flex-col md:flex-row items-center gap-10 container mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/Perfil.webp"
            alt="Candidato a Intendente"
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

      
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-orange-50 py-20 px-6 md:px-16 rounded-2xl shadow-md container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-16">
          Nuestro Equipo de Concejales
        </h2>
        <div className="space-y-20">
          {concejales.map((concejal, index) => (
            <motion.div
              key={concejal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative shrink-0"
              >
                <Image
                  src={concejal.imagen}
                  alt={`Candidato a Concejal: ${concejal.nombre}`}
                  width={240}
                  height={240}
                  className="rounded-full object-cover shadow-xl border-4 border-blue-900"
                />
              </motion.div>

              
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 !== 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className={`space-y-3 max-w-lg ${
                  index % 2 !== 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  {concejal.nombre}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                   {concejal.descripcion}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 px-6 md:px-28 text-center space-y-6 mt-16 md:rounded-2xl shadow-lg container mx-auto"
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