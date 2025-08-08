import Image from "next/image";
import Link from "next/link";

export default function Conocenos() {
  return (
    <main className="bg-white text-black w-full mx-auto pt-20">

      {/* Hero */}
      <section className="text-center px-10 space-y-6 mb-12">
        <h1 className="md:text-5xl text-3xl font-extrabold text-orange-600">Conocenos</h1>
        <p className="md:text-lg text-md max-w-3xl mx-auto text-gray-700">
          Más de 12 años de trabajo, compromiso y desarrollo para Potrero. Te contamos quiénes somos, qué hicimos y qué soñamos.
        </p>
      </section>

      {/* Trayectoria */}
      <section className="bg-orange-50 py-16 px-6 md:px-28 space-y-6 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-orange-600">Nuestra Trayectoria</h2>
        <p className="text-gray-800 text-md md:text-lg">
          A lo largo de los últimos 12 años, llevamos adelante una gestión comprometida con cada rincón de Potrero. Obras, cultura, educación y desarrollo local nos definen.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 list-disc list-inside">
          <li>Mejoras integrales en caminos y servicios públicos.</li>
          <li>Fomento sostenido al turismo local y regional.</li>
          <li>Apoyo constante al sistema educativo y escuelas.</li>
          <li>Más de 100 eventos culturales y sociales realizados.</li>
          <li>Impulso al emprendedurismo y comercios locales.</li>
        </ul>
      </section>

      {/* Libro PDF */}
      <section className="justify-end text-center md:text-right space-y-6 px-10 md:px-24 py-12">
        <h2 className="text-3xl font-bold text-orange-600">Nuestra Historia en Detalle</h2>
        <p className="text-gray-700 text-lg">
          En este libro de 3 capítulos documentamos en profundidad la evolución de Potrero y los logros alcanzados.
        </p>
        <div className="flex flex-col md:justify-end md:flex-row gap-4">
          <Link
            href="https://drive.google.com/file/d/ID_DEL_TOMO_1/view"
            target="_blank"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow text-center transition"
          >
            📘 Capítulo 1
          </Link>
          <Link
            href="https://drive.google.com/file/d/ID_DEL_TOMO_2/view"
            target="_blank"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow text-center transition"
          >
            📙 Capítulo 2
          </Link>
          <Link
            href="https://drive.google.com/file/d/ID_DEL_TOMO_3/view"
            target="_blank"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow text-center transition"
          >
            📗 Capítulo 3
          </Link>
        </div>
      </section>

      {/* Candidato */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/Perfil.webp"
          alt="Candidato"
          width={320}
          height={320}
          className="rounded-full object-cover shadow-xl"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-900">La cara visible del proyecto</h2>
          <p className="text-gray-700 text-lg">
            Nuestro candidato ha sido una figura clave en cada una de las gestiones anteriores. Su compromiso con la comunidad, su cercanía con los vecinos y su visión para el futuro lo posicionan como el líder ideal para seguir haciendo crecer Potrero.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-orange-600 text-white py-16 px-6 md:mx-14 md:mt-5 md:px-28 text-center space-y-4 md:rounded-xl shadow-md">
        <h3 className="text-2xl font-bold">Seguimos trabajando por Potrero</h3>
        <p className="text-lg max-w-xl mx-auto">
          Gracias por acompañarnos durante todos estos años. Queremos seguir avanzando con vos, con más energía y compromiso que nunca.
        </p>
      </section>
    </main>
  );
}
