import React from "react";

const ConocenosSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
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

        {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/images/Dani.jpg"
              alt="Daniel Orlando"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Daniel Orlando
            </p>
            <p className="text-sm text-gray-600">Candidato a Intendente</p>
          </div>

          <div className="text-center">
            <img
              src="/images/Daniel.jpg"
              alt="María González"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              María González
            </p>
            <p className="text-sm text-gray-600">Directora</p>
          </div>

          <div className="text-center">
            <img
              src="/images/Daniel.jpg"
              alt="Pedro López"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Pedro López
            </p>
            <p className="text-sm text-gray-600">Técnico</p>
          </div>

          <div className="text-center">
            <img
              src="/images/Daniel.jpg"
              alt="Laura Martínez"
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Laura Martínez
            </p>
            <p className="text-sm text-gray-600">Asesora</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ConocenosSection;
