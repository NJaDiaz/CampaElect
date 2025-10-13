"use client";

import { useState } from "react";

export default function Unete() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    
    await fetch("https://formsubmit.co/jeronimoorlandoestudiosur@gmail.com", {
      method: "POST",
      body: formData,
    });

    setShowMessage(true);

    form.reset();

    setTimeout(() => {
      window.location.href = "/unete";
    }, 3000);
  };

  return (
    <section className="bg-[#ff6e1c] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Unite a la Campaña
        </h2>

        <p className="text-center text-gray-100 mb-10 max-w-2xl mx-auto">
          Tu participación hace la diferencia. Sumate como voluntario, ayudanos a difundir o colaborá con acciones en tu barrio.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-none">
            <img
              src="/images/campania.jpg"
              alt="Voluntarios en acción"
              className="rounded-lg shadow w-full h-auto object-cover"
            />
          </div>

          <div className="bg-orange-300 p-6 rounded-xl shadow-lg">
            <form action="https://formsubmit.co/jeronimoorlandoestudiosur@gmail.com" method="POST" className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://potreroactivo.online/gracias" />

            <h2 className="font-bold text-black text-xl">Sumate llenando este formulario</h2>
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                className="w-full p-3 rounded bg-white text-gray-700 outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
               placeholder="Correo Electronico"

                className="w-full p-3 rounded bg-white text-gray-700 outline-none"
              />
            </div>

            <div>
               <input
                type="tel"
                name="tel"
                placeholder="Teléfono o WhatsApp"
                required
                className="w-full p-3 rounded bg-white text-gray-700 outline-none"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="consentimiento"
                required
                className="mr-2"
              />
              <label className="text-sm text-gray-900">
                Acepto recibir información y novedades de la campaña.
              </label>
            </div>

              <button
                type="submit"
                className="bg-orange-600 text-white w-full py-3 rounded hover:bg-orange-700 transition"
              >
                Quiero sumarme
              </button>
          </form>
          </div>

           {showMessage && (
            <div className="mt-4 text-green-600 font-semibold">
              ¡Gracias por unirte! Serás redirigido en unos segundos...
            </div>
          )}

          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-white mb-2">
    Podes visitarnos en nuestra sede  </h1>
  <h3 className="text-lg font-semibold text-white mb-2">
    Horarios de atención
  </h3>
  <ul className="text-white space-y-1 mb-4">
    <li>Lunes a Viernes: 9:00 a 13:00 y 16:00 a 20:00</li>
    <li>Sábados: 10:00 a 14:00</li>
  </ul>

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Las+Catalpas+21,+Potrero+de+los+Funes,+San+Luis"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
  >
    Cómo llegar
  </a>
</div>


          
          <div className="mt-6">
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full border-0"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.802008751004!2d-66.23047842633042!3d-33.21928647348189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d4155d9e41984b%3A0x189c86674c2ad860!2sLas%20Catalpas%2021%2C%20D5714%20Potrero%20de%20los%20Funes%2C%20San%20Luis!5e0!3m2!1ses!2sar!4v1754064887176!5m2!1ses!2sar" // reemplaza con tu URL real
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
  <h3 className="text-lg text-center font-semibold text-white mb-2">
    Mirá cómo llegar en este video
  </h3>
  <div className="flex content-center justify-center">
    <div className="w-auto rounded-lg overflow-hidden max-h-[500px]">
      <video
        className="h-full w-full"
        controls
        src="/videos/Sede.mp4"
      >
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  </div>
</div>
    </section>
  );
};

