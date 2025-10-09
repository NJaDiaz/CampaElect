import React from "react";
import { motion } from "framer-motion";


const ConocenosSection = () => {
  return (
    <motion.section
      className="bg-[#F9F9F9] py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 max-w-3xl mx-auto">
          Trabajo, esfuerzo y dedicación para construir juntos un futuro mejor
        </h2>

        <p className="text-lg text-center text-gray-700 mb-8">
          Durante 12 años de gestiones anteriores hemos trabajado incansablemente para transformar a Potrero de los Funes en el lugar que todos soñamos. Nuestro compromiso con el progreso, la participación ciudadana y el bienestar de los vecinos ha sido nuestro motor en cada paso del camino.
          <br />
          Queremos que las nuevas generaciones conozcan nuestro trabajo y que quienes ya nos conocen recuerden los momentos clave que hemos vivido juntos.
        </p>

        <div className="mb-8">
          <a
            href="/conocenos"
            className="bg-[#FF6B00] text-white font-medium py-3 px-6 rounded-md hover:bg-[#FFA500] transition-colors duration-300"
          >
            Conócenos
          </a>
        </div>

        <div className="my-16">
          <div className="text-center">
            <img
              src="/images/perfil.webp"
              alt="Daniel Orlando"
              className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-xl font-semibold text-gray-800">
              Daniel Orlando
            </p>
            <p className="text-sm text-gray-600">Candidato a Intendente</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div className="text-center">
            <img
              src="/equipo/concejal1.jpeg"
              alt="Marcelo de la Reta"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Marcelo de la Reta
            </p>
            <p className="text-sm text-gray-600">Concejal Titular 1er término</p>
          </div>

          <div className="text-center">
            <img
              src="/equipo/Concejal2.jpeg"
              alt="Navila Bustos"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Navila Bustos
            </p>
            <p className="text-sm text-gray-600">Concejal Titular 2do término</p>
          </div>

          <div className="text-center">
            <img
              src="/equipo/Concejal3.jpeg"
              alt="Carlos Lucero"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Carlos Lucero
            </p>
            <p className="text-sm text-gray-600">Concejal Titular 3er término</p>
          </div>

          <div className="text-center">
            <img
              src="/equipo/Concejal_S1.jpeg"
              alt="Emilce Miranda"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Emilce Miranda
            </p>
            <p className="text-sm text-gray-600">Concejal 1er Suplente</p>
          </div>

          <div className="text-center">
            <img
              src="/equipo/Concejal_S2.jpeg"
              alt="Gustavo Amaya"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Gustavo Amaya
            </p>
            <p className="text-sm text-gray-600">Concejal 2do Suplente</p>
          </div>

          <div className="text-center">
            <img
              src="/equipo/Concejal_S3.jpeg"
              alt="Mariana Cadelago"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Mariana Cadelago
            </p>
            <p className="text-sm text-gray-600">Concejal 3er Suplente</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConocenosSection;
