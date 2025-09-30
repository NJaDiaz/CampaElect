import React from "react";

const PropuestaSection = () => {
  return (
    <section id="propuesta" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">

        <div className="w-full md:w-1/2 lg:w-1/2 text-center lg:text-left">
          <h1 className="md:text-4xl text-xl font-bold text-gray-800 mb-6 max-w-2xl mx-auto lg:mx-0">
            Tenemos prioridad con el vecino para llevar nuevamente Potrero de los Funes a lo más alto
          </h1>
          <p className="md:text-lg text-md text-gray-700 mb-8">
            En nuestra misión por mejorar y enriquecer la calidad de vida de los vecinos de Potrero de los Funes, nos comprometemos a trabajar juntos, priorizando la participación ciudadana, el desarrollo sostenible y el respeto por nuestro entorno natural. 
            Implementar programas de desarrollo turístico que respeten el medio ambiente, queremos mejorar la infraestructura local con un enfoque en movilidad y accesibilidad.
            También fomentar iniciativas culturales y deportivas para fortalecer la comunidad.
          </p>
          <p className="md:text-lg text-md text-gray-700 mb-8">
            Conoce en detalle todas y cada una de nuestras propuestas para que te sientas parte de nosotros.
          </p>

          <div className="mt-8">
            <a
              href="/propuestas"
              className="bg-[#FF6B00] text-white font-medium py-3 px-6 rounded-md hover:bg-[#FFA500] transition-colors duration-300"
            >
              Nuestras Propuestas
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-5/12 mt-12 md:mt-0">
          <img
            src="/images/somos.jpg"
            alt="Propuesta"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PropuestaSection;
