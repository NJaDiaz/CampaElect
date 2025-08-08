"use client";

import { useState } from "react";
import Image from "next/image";
import galeriaData from "@/data/galeriaData";

const BancoDeImagenes = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="md:text-2xl text-xl font-bold text-center mb-5 text-gray-800">
        Te mostramos algunas imágenes de nuestras diferentes gestiones
      </h2>
       <p className="md:text-lg text-md font-thin text-center mb-10 text-gray-800">
        Momentos que quedaron captados por las camaras, de lo que fue nuestro acompañamiento en todos los años que hemos formado parte del mandato de Potrero de los Funes      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galeriaData.map((img, index) => (
          <div
            key={index}
            className="bg-[#FF6B00] cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            onClick={() => setImagenSeleccionada(img)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={500}
              height={300}
              className="object-cover w-full h-40"
            />
            <div className="bg-[#FF6B00] h-auto p-2 text-center text-sm text-white">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div
            className="bg-[#FF6B00] p-4 rounded-xl shadow-lg max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenSeleccionada.src}
              alt={imagenSeleccionada.caption}
              width={1000}
              height={600}
              className="rounded-md"
            />
            <p className="mt-3 text-center text-gray-800 dark:text-gray-200 font-semibold">
              {imagenSeleccionada.caption}
            </p>
            <button
              className="absolute top-4 right-6 text-2xl text-gray-600 hover:text-red-600"
              onClick={() => setImagenSeleccionada(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BancoDeImagenes;
