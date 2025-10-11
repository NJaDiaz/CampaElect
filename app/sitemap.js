import { noticias } from "./data/noticias"; 

export default function sitemap() {
  const baseUrl = "https://potreroactivo.online";
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = [
    { url: baseUrl, lastModified: today, priority: 1.0 },
    { url: `${baseUrl}/propuestas`, lastModified: today, priority: 0.9 },
    { url: `${baseUrl}/conocenos`, lastModified: today, priority: 0.9 },
    { url: `${baseUrl}/unete`, lastModified: today, priority: 0.8 },
    { url: `${baseUrl}/galeria`, lastModified: today, priority: 0.7 },
  ];

  const noticiasUrls = Object.entries(noticias).map(([slug, noticia]) => ({
    url: `${baseUrl}/informate/${slug}`,
    lastModified: noticia.fecha || today,
    priority: 0.7,
  }));

  return [...staticUrls, ...noticiasUrls];
}
