"use client";

import { useRouter } from "next/router";
import Image from "next/image";

const noticias = {
  "pedido-informe": {
    titulo: "El presidente dijo NO al pedido de informe elevado por Daniel Orlando",
    fecha: "06 Agosto 2025",
    contenido: `El presidente del Honorable Consejo Deliberante no puso a consideración el pedido de informe solicitado por Daniel Orlando al actual intendente de Potrero de Los funes.
    La localidad continua sin una fecha electoral, sin detalles de organización, costos ni origen de fondos, esto refleja una falta de respuesta hacia la democracia que tenemos en nuestro Pais.
    A continuación dejamos un fragmento de Radio Dimensión en donde participo el candidato Daniel Orlando`,
    imagenes: [
      "/informate/hcd.webp",
    ],
        embed: "https://embed.screenapp.io/app/#/shared/bIMwsfJ47b?embed=true",
  },
};

export default function NoticiaDetalle({ params }) {
  const slug = params.slug;
  const noticia = noticias[slug];

  if (!noticia) return <p className="text-center py-20">Cargando noticia...</p>;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8 bg-white">
      <h1 className="text-4xl font-bold text-orange-600">{noticia.titulo}</h1>
      <p className="text-gray-500">{noticia.fecha}</p>

      <div className="space-y-6">
        {noticia.imagenes.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Imagen ${i + 1}`}
            width={800}
            height={500}
            className="rounded-lg w-full object-cover"
          />
        ))}
        <p className="text-lg text-gray-700 leading-relaxed">{noticia.contenido}</p>
        
        {noticia.embed && (
  <div className="w-full h-[960px] rounded-lg overflow-hidden">
    <iframe
      src={noticia.embed}
      width="100%"
      height="980"
      frameBorder="0"
      allowFullScreen
      className="w-full h-full"
    />
  </div>
)}

        
        
        {noticia.video && (
  <video controls className="w-full rounded-lg">
    <source src={noticia.video} type="video/mp4" />
    Tu navegador no soporta el video.
  </video>
)}

{noticia.audio && (
  <audio controls className="w-full mt-4">
    <source src={noticia.audio} type="audio/mpeg" />
    Tu navegador no soporta el audio.
  </audio>
)}

      </div>
    </main>
  );
}
