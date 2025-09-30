"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const novedades = [
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
    detalle:
      "Daniel Orlando presentó un pedido de informe al Consejo Deliberante en busca de claridad y respuesta para el pueblo, ya que se acerca la fecha de elecciones y no hay certeza alguna de que esto suceda.",
    tipo: "modal",
  },
];

export default function Informate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const abrirModal = (item) => {
    setModalData(item);
    setModalOpen(true);
  };

  return (
    <>
      {/* contenido normal */}
      <section id="informate" className="bg-white py-20 px-6 md:px-12 space-y-12">
        <h2 className="text-4xl font-extrabold text-orange-600 text-center">Informate</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {novedades.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={600}
                height={400}
                className="w-full h-36 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-blue-900">{item.titulo}</h3>
                <p className="text-gray-700">{item.descripcion}</p>
                <p className="text-sm text-gray-500">{item.fecha}</p>

                {item.tipo === "pagina" ? (
                  <Link
                    href={`/informate/${item.slug}`}
                    className="text-orange-600 font-medium hover:underline"
                  >
                    Ver más →
                  </Link>
                ) : (
                  <button
                    onClick={() => abrirModal(item)}
                    className="text-orange-600 font-medium hover:underline"
                  >
                    Ver más →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg w-full max-w-md md:max-w-3xl p-6 shadow-xl relative flex flex-col md:flex-row gap-6">
  
  {/* Imagen */}
  <div className="flex-shrink-0 md:w-1/2">
    <Image
      src={modalData.imagen}
      alt={modalData.titulo}
      width={600}
      height={400}
      className="rounded-md w-full h-auto object-cover"
    />
  </div>

  {/* Texto */}
  <div className="flex-1 space-y-4">
    <h3 className="text-2xl font-bold text-blue-900">{modalData.titulo}</h3>
    <p className="text-gray-700">{modalData.detalle}</p>
    <p className="text-sm text-gray-500">{modalData.fecha}</p>
  </div>

  {/* Botón cerrar */}
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
