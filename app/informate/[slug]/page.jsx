import { noticias } from "@/app/data/noticias";
import NoticiaCliente from "./NoticiaCliente"; 

export async function generateMetadata({ params }) {
  const noticia = noticias[params.slug];
  if (!noticia) {
    return {
      title: "Noticia no encontrada",
    };
  }

  return {
    title: noticia.titulo,
    description: noticia.contenido[0].substring(0, 160),
  };
}

export default function NoticiaPage({ params }) {
  return <NoticiaCliente params={params} />;
}