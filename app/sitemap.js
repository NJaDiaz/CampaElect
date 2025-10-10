import { noticias } from "./data/noticias"; 
export default function sitemap() {
  const baseUrl = "https://www.potreroactivo.online";

 
  const noticiasUrls = Object.keys(noticias).map(slug => {
    return {
      url: `${baseUrl}/informate/${slug}`,
      lastModified: new Date(),
    };
  });

  
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/propuestas`, lastModified: new Date() },
    { url: `${baseUrl}/conocenos`, lastModified: new Date() },
    { url: `${baseUrl}/unete`, lastModified: new Date() },
    { url: `${baseUrl}/galeria`, lastModified: new Date() },
   
  ];

  return [...staticUrls, ...noticiasUrls];
}