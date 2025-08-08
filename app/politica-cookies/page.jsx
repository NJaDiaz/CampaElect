"use client";

export default function PoliticaCookies() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

      <p className="mb-4">
        En esta página web utilizamos cookies propias y de terceros con el fin
        de mejorar tu experiencia, analizar el tráfico y personalizar el
        contenido mostrado. Al continuar navegando, aceptás el uso de cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que los sitios web pueden
        colocar en tu dispositivo para mejorar la funcionalidad, recordar
        preferencias y obtener datos estadísticos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Qué tipos de cookies utilizamos?</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Cookies necesarias:</strong> Esenciales para el correcto
          funcionamiento del sitio.
        </li>
        <li>
          <strong>Cookies de análisis:</strong> Como las de Google Analytics,
          nos ayudan a comprender cómo los visitantes usan nuestro sitio.
        </li>
        <li>
          <strong>Cookies de terceros:</strong> Usamos servicios como Google
          Maps y videos incrustados desde Facebook, los cuales pueden instalar
          cookies en tu dispositivo.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies de terceros</h2>
      <p className="mb-4">
        Este sitio puede incluir contenido incrustado (por ejemplo, mapas,
        videos, botones sociales, etc.) que podrían instalar cookies de
        servicios como:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Facebook (videos y botones)</li>
        <li>Google Maps</li>
        <li>Google Fonts</li>
        <li>Google Analytics</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Consentimiento</h2>
      <p className="mb-4">
        Al ingresar al sitio, se te muestra un banner informando sobre el uso
        de cookies. Podés aceptar o rechazar su uso. Tu decisión será almacenada
        por un período de 365 días.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cómo gestionar las cookies</h2>
      <p className="mb-4">
        Podés configurar tu navegador para aceptar o rechazar cookies, así como
        eliminar aquellas ya almacenadas. Tené en cuenta que bloquear cookies
        esenciales puede afectar la funcionalidad del sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contacto</h2>
      <p>
        Si tenés preguntas sobre nuestra política de cookies, podés contactarnos
        al correo electrónico: <a href="mailto:info@tusitio.com" className="underline text-blue-500">info@tusitio.com</a>
      </p>
    </div>
  );
}
