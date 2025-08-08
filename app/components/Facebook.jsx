"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { hasConsentedCookies } from "@/lib/cookies";

const FacebookVideo = () => {
  const eventos = [
    { fecha: "2025-08-05", titulo: "Nota elevada", descripcion: "Presentación de pedido de informe al Honorable Consejo Deliberante" },
  ];

  const isEventDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return eventos.some((evento) => evento.fecha === formattedDate);
  };

  const getEventsByDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return eventos.filter((evento) => evento.fecha === formattedDate);
  };

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const [mounted, setMounted] = useState(false);
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsented(hasConsentedCookies());
  }, []);

  return (
    <section className="bg-[#FFB347] pt-12 md:py-16 px-6">
      <h1 className="text-3xl text-white font-semibold text-center mb-10">
        Conocé cada uno de nuestros eventos
      </h1>
      <p className="text-lg text-center text-gray-100 mb-8">
        A continuación, te mostramos los próximos eventos y charlas que formarán parte de nuestra campaña. ¡No te los
        pierdas! Mantente informado y participa en todas las actividades para conocer más sobre nuestra propuesta y visión.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Calendario y eventos */}
        <div className="md:w-1/2 flex flex-col items-center space-y-6 w-full">
          <div className="bg-white p-6 rounded-xl shadow-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4 text-[#FF6B00]">
              Próximos eventos
            </h2>
            <Calendar
              locale="es-ES"
              onChange={setFechaSeleccionada}
              value={fechaSeleccionada}
              tileClassName={({ date }) =>
                isEventDate(date) ? "event-date" : ""
              }
              className="text-black w-full"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
            <h3 className="text-xl text-[#FF6B00] font-semibold text-center mb-4">
              Eventos para {fechaSeleccionada.toLocaleDateString("es-ES")}
            </h3>
            <ul className="space-y-2">
              {getEventsByDate(fechaSeleccionada).length > 0 ? (
                getEventsByDate(fechaSeleccionada).map((evento, index) => (
                  <li key={index} className="p-3 bg-[#FFF7F0] rounded-lg shadow">
                    <h4 className="font-bold text-[#FF6B00]">{evento.titulo}</h4>
                    <p className="text-sm text-gray-700">{evento.descripcion}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-700 text-center">
                  No hay eventos para esta fecha.
                </p>
              )}
            </ul>
          </div>
        </div>

        {/* Video de Facebook */}
        <div className="md:w-1/2 w-full">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-center text-white">
              Miranos nuevamente
            </h2>
            <p className="text-lg mt-3 text-center text-gray-100">
            </p>
          </div>
          <div className="w-full">
            {!mounted ? (
              <p className="text-white text-center bg-[#FF6B00] rounded-lg p-4 shadow-lg">
                Cargando contenido...
              </p>
            ) : consented ? (
              <iframe
                className="w-full p-2 rounded-lg"
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.orlando.35175%2Fvideos%2F1095568592664006%2F&show_text=false&width=267&t=0"
                width="100%"
                height="700"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            ) : (
              <p className="text-white text-center bg-[#FF6B00] rounded-lg p-4 shadow-lg">
                Este contenido requiere que aceptes las cookies.{" "}
                <a href="/politica-cookies" className="underline text-white font-medium">
                  Ver más
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookVideo;
