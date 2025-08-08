// components/AdminNoticias.jsx

import React, { useState } from 'react';

const AdminNoticias = () => {
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState('');
  const [fecha, setFecha] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagenesAdicionales, setImagenesAdicionales] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noticiaData = {
      titulo,
      imagen,
      fecha,
      subtitulo,
      contenido,
      imagenesAdicionales: imagenesAdicionales.map(img => URL.createObjectURL(img)), // Convertir las imágenes a URLs
    };

    try {
      const response = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticiaData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Noticia agregada con éxito!');
        // Limpiar formulario
        setTitulo('');
        setImagen('');
        setFecha('');
        setSubtitulo('');
        setContenido('');
        setImagenesAdicionales([]);
      } else {
        alert('Error al agregar noticia: ' + data.error);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Error en el servidor.');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Administrar Noticias</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Imagen Principal</label>
          <input
            type="file"
            onChange={(e) => setImagen(URL.createObjectURL(e.target.files[0]))}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Subtítulo</label>
          <input
            type="text"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Contenido</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="6"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Agregar Imágenes Adicionales</label>
          <input
            type="file"
            onChange={(e) => setImagenesAdicionales([...imagenesAdicionales, e.target.files[0]])}
            multiple
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Guardar Noticia
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminNoticias;
