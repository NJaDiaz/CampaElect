"use client";

import React, { useEffect, useState } from "react";
import NewsSection from "./components/NoticiaCard"; 

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
   
    const fetchNews = async () => {
      
      const fetchedNews = [
        {
          id: 1,
          title: "Noticia 1",
          description: "Una descripción corta de la noticia.",
          image: "/path/to/image1.jpg",
        },
        {
          id: 2,
          title: "Noticia 2",
          description: "Otra descripción corta de una noticia.",
          image: "/path/to/image2.jpg",
        },
      ];
      setNews(fetchedNews);
    };

    fetchNews();
  }, []);

  return <NewsSection news={news} />;
};

export default NewsPage;
