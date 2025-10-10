"use client";

import React from "react";
import { motion } from "framer-motion";

const PropuestaSection = () => {
  return (
    <motion.section
      id="propuesta"
      className="bg-white py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="lg:text-3xl text-xl font-bold text-gray-800 mb-6 max-w-2xl mx-auto lg:mx-0">
              Potrero de los Funes una comunidad que crece y se proyecta
            </h1>
            <h2 className="lg:text-xl text-gray-800 mb-2 font-semibold max-w-2xl mx-auto lg:mx-0">
              ¿Quiénes somos y qué es Potrero hoy?
            </h2>
            <p className="lg:text-lg text-md text-gray-700 mb-8">
              Potrero de los Funes es mucho más que un destino turístico reconocido por su lago, su circuito internacional y su entorno natural único.
              Es, ante todo, una comunidad cercana y humana, donde cada decisión de gobierno tiene un impacto directo en la vida cotidiana de los vecinos.
              Con una identidad marcada por la convivencia entre tradición, naturaleza y modernidad, Potrero combina el espíritu de pueblo con la proyección de ciudad en crecimiento.
            </p>
          </div>

          <div className="hidden lg:block lg:w-5/12 mt-12 md:mt-0">
            <img
              src="/images/somos.jpg"
              alt="Propuesta"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-full mt-3 text-center lg:text-justify">
          <h2 className="md:text-xl text-gray-800 font-semibold mb-2">
            ¿Dónde estamos parados?
          </h2>
          <p className="md:text-lg text-md text-gray-700 mb-8">
            Hoy enfrentamos una realidad con dos caras. Por un lado el orgullo de ser un municipio con un enorme potencial turístico, cultural y económico.
            Por otro, la preocupación de convivir con servicios que muchas veces resultan desordenados, falta de planificación en áreas claves y espacios públicos que requieren urgente recuperación y puesta en valor.
            Reconocer estas falencias no es debilidad: es el primer paso para transformarlas en oportunidades.
          </p>

          <h2 className="md:text-xl text-gray-800 font-semibold mb-2">
            ¿Hacia dónde vamos?
          </h2>
          <p className="md:text-lg text-md text-gray-700 mb-8">
            La meta es clara: construir un Potrero de los Funes ordenado, seguro, con servicios de calidad, moderno y transparente, que acompañe el crecimiento de la ciudad y se consolide como motor turístico, cultural y económico de San Luis.
            Una ciudad donde los vecinos tengan respuestas rápidas y claras, donde cada peso invertido se note en la calle y donde los turistas encuentren una experiencia de primer nivel que los invite a volver.
          </p>

          <h2 className="md:text-xl text-gray-800 font-semibold mb-2">
            Un plan que se mide y mejora
          </h2>
          <p className="md:text-lg text-md text-gray-700 mb-8">
            Este Plan de Trabajo reúne propuestas realistas y alcanzables, con objetivos, plazos, presupuestos y metodologías claras.
            No son promesas al aire, son compromisos de gestión que podrán medirse, evaluarse y mejorarse en el tiempo.
            Está pensado con el vecino en el centro, pero también con la seriedad que requieren los inversores, proveedores y equipos que acompañarán cada proyecto.
          </p>

          <p className="md:text-lg text-md text-gray-700 mb-8">
            Conocé en detalle todas y cada una de nuestras propuestas para que te sientas parte de nosotros.
          </p>

          <div className="mt-8 items-center text-center">
            <a
              href="/Propuestas"
              className="bg-[#FF6B00] text-white font-medium py-3 px-6 rounded-md hover:bg-[#FFA500] transition-colors duration-300"
            >
              Nuestras Propuestas
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PropuestaSection;
