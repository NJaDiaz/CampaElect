"use client";

import { FaShareAlt } from "react-icons/fa";

export default function BotonCompartir({ title, slug }) {
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/informate/${slug}`;

    const shareData = {
      title: title,
      text: `Leé la noticia: "${title}"`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Noticia compartida con éxito!");
      } catch (err) {
        console.error("Error al compartir:", err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition"
    >
      <FaShareAlt />
      Compartir
    </button>
  );
}