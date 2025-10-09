"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { hasConsentedCookies } from "@/lib/cookies";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const FacebookVideo = () => {
  const eventos = [
    { fecha: "2025-08-05", titulo: "Nota elevada", descripcion: "Presentación de pedido de informe al Honorable Consejo Deliberante" },
    { fecha: "2025-09-23", titulo: "Presentación candidatos a concejal", descripcion: "Presentación de todos los candidatos a concejal de nuestra lista" },
    { fecha: "2025-10-10", titulo: "Presentación campaña y plan de trabajo", descripcion: "Presentación de la campaña Potrero Activo y plan de trabajo para el año 2025-2029" },
    { fecha: "2025-10-16", titulo: "Reunión abierta", descripcion: "Invitamos a todos los vecinos a participar de una reunión abierta para compartir ideas, inquietudes y propuestas sobre el futuro de Potrero de los Funes." },
    { fecha: "2025-10-23", titulo: "Reunión abierta", descripcion: "Invitamos a todos los vecinos a participar de una reunión abierta para compartir ideas, inquietudes y propuestas sobre el futuro de Potrero de los Funes." },
    { fecha: "2025-10-30", titulo: "Reunión abierta", descripcion: "Invitamos a todos los vecinos a participar de una reunión abierta para compartir ideas, inquietudes y propuestas sobre el futuro de Potrero de los Funes." },

  ];

  const videos = [
    {
      id: 1,
      type: 'facebook',
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1133265048263231%2F&show_text=false&width=267&t=0'
    },
     {
      id: 2,
      type: 'facebook',
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.orlando.35175%2Fvideos%2F670634729414306%2F&show_text=false&width=267&t=0'
    },
    {
      id: 3,
      type: 'facebook',
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.orlando.35175%2Fvideos%2F1110718654373917%2F&show_text=false&width=267&t=0'
    },
    {
      id: 4,
      type: 'facebook',
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.orlando.35175%2Fvideos%2F1450854696189001%2F&show_text=false&width=267&t=0'
    },
    {
      id: 5,
      type: 'facebook',
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.orlando.35175%2Fvideos%2F1095568592664006%2F&show_text=false&width=267&t=0'
    },
    {
      id: 6,
      type: 'local',
      src: '/videos/Sede.mp4' 
    }
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
    <section id="Agenda" className="bg-[#ff6e1c] pt-12 md:pt-28 md:pb-16 px-6">
      <h1 className="text-3xl text-white font-semibold text-center mb-10">
        Conocé a detalle nuestra agenda
      </h1>
      <p className="text-lg text-center text-gray-100 mb-8">
        A continuación, te mostramos los próximos eventos y charlas que formarán parte de nuestra campaña. ¡No te los
        pierdas! Mantente informado y participa en todas las actividades para conocer más sobre nuestra propuesta y visión.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full">
        <div className="md:w-1/2 flex flex-col items-center space-y-6 w-full">
          <div className="bg-white items-center p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4 text-[#FF6B00]">
              Próximos en nuestra agenda
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
              Evento para {fechaSeleccionada.toLocaleDateString("es-ES")}
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

        
        <div className="md:w-1/2 flex flex-col items-center w-full">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-center text-white">
              Miranos nuevamente
            </h2>
          </div>
          <div className="w-full">
            {!mounted ? (
              <p className="text-white text-center bg-[#FF6B00] rounded-lg p-4 shadow-lg">
                Cargando contenido...
              </p>
            ) : consented ? (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full rounded-lg"
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div className="aspect-[9/12] md:aspect-[16/11] bg-transparent rounded-lg flex items-center justify-center">
                      {video.type === 'facebook' && (
                        <iframe
                          src={video.src}
                          width="270"
                          height="500"
                          className="max-w-full max-h-full rounded-lg"
                          style={{ border: "none", overflow: "hidden" }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                      )}
                      
                      {video.type === 'local' && (
                        <video
                          src={video.src}
                          className="w-full h-full"
                          controls
                        >
                          Tu navegador no soporta el tag de video.
                        </video>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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