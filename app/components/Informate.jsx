"use client";
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BotonCompartir from "./BotonCompartir";

const novedades = [
  {
    titulo: "Presentación de la Campaña Potrero Activo y proyecto de trabajo 2025-2029",
    descripcion:
      "El día 10 se realizara la presentación de la campaña Potrero Activo y el plan de trabajo",
    fecha: "05 Agosto 2025",
    imagen: "/informate/plan.jpg",
    slug: "presentacion-campana-potrero-activo", 
    detalle: [
        "Este viernes 10 de octubre, el espacio Potrero Activo llevará a cabo la presentación oficial de su campaña y plan de trabajo 2025–2029, en un encuentro abierto a toda la comunidad.",
        "Durante el evento, los integrantes del equipo compartirán los principales ejes de su propuesta para los próximos años, orientada al crecimiento sostenible del municipio, la mejora de los servicios y la participación activa de los vecinos en las decisiones locales.",
        "El plan contempla acciones concretas en materia de infraestructura, medio ambiente, desarrollo social, deporte y turismo, buscando consolidar un modelo de gestión moderna, transparente y cercana a la gente. La jornada contará con la presencia del equipo de trabajo y con vecinos, instituciones y referentes locales que acompañan el proyecto.",
        "Con esta actividad, Potrero Activo continúa fortaleciendo su compromiso con el desarrollo de Potrero de los Funes, reafirmando su voluntad de trabajar por una comunidad más participativa, inclusiva y con futuro."
    ],
    tipo: "modal",
  },
  {
    titulo: "Presentación de candidatos a concejales",
    descripcion:
      "Se presento la lista y nombres de candidatos a concejales de Potrero Activo para las elecciones",
    fecha: "23 Septiembre 2025",
    imagen: "/informate/candidatos.jpg",
    slug: "presentacion-candidatos-potrero-activo",
    tipo: "pagina",
  },
  {
    titulo: "No pusieron a consideración el pedido de informe",
    descripcion:
      "El Presidente del HCD no puso a consideración el pedido de informe solicitado por Daniel Orlando",
    fecha: "06 Agosto 2025",
    imagen: "/informate/hcd.webp",
    slug: "pedido-informe",
    tipo: "pagina",
  },
  {
    titulo: "Nota al consejo deliberante",
    descripcion:
      "Daniel Orlando presentó una nota al consejo deliberante esperando pronta respuesta.",
    fecha: "05 Agosto 2025",
    imagen: "/informate/nota.webp",
    slug: "nota-consejo-deliberante",
    detalle: [
      "Daniel Orlando presentó un pedido de informe al Consejo Deliberante en busca de claridad y respuesta para el pueblo, ya que se acerca la fecha de elecciones y no hay certeza alguna de que esto suceda."
    ],
    tipo: "modal",
  },
  
];


export default function Informate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  
  const [visibleCount, setVisibleCount] = useState(3); 

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 768) { 
        setVisibleCount(6);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount(); 
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []); 

  const abrirModal = (item) => {
    setModalData(item);
    setModalOpen(true);
  };

  const mostrarMas = () => {
    setVisibleCount(novedades.length); 
  };

  return (
    <>
      <motion.section 
              id="informate" className="bg-white py-20 px-6 md:px-12 space-y-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
        <h2 className="text-4xl font-extrabold text-orange-600 text-center">Informate</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {novedades.slice(0, visibleCount).map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900">{item.titulo}</h3>
                <p className="text-gray-700 flex-grow">{item.descripcion}</p>
                <p className="text-sm text-gray-500 pt-2">{item.fecha}</p>

                {item.tipo === "pagina" ? (
                  <Link
                    href={`/informate/${item.slug}`}
                    className="text-orange-600 font-medium hover:underline mt-auto"
                  >
                    Ver más →
                  </Link>
                ) : (
                  <button
                    onClick={() => abrirModal(item)}
                    className="text-orange-600 font-medium hover:underline mt-auto text-left"
                  >
                    Ver más →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        
        {visibleCount < novedades.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={mostrarMas}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver más noticias
            </motion.button>
          </div>
        )}
      </motion.section>

      
      {modalOpen && modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md md:max-w-3xl p-6 shadow-xl relative flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 md:w-1/2">
              <Image
                src={modalData.imagen}
                alt={modalData.titulo}
                width={600}
                height={400}
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">{modalData.titulo}</h3>
              <div className="space-y-4 overflow-y-auto max-h-[50vh] pr-2 text-gray-700">
                {modalData.detalle.map((parrafo, index) => (
                  <p key={index}>{parrafo}</p>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto pt-4">
                <p className="text-sm text-gray-500">{modalData.fecha}</p>
                <BotonCompartir title={modalData.titulo} slug={modalData.slug} />
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-orange-500 text-4xl hover:text-red-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}