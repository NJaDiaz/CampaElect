"use client";

import Hero from "./components/Hero.jsx";
import Propuesta from './components/Propuesta.jsx';
import Somos from './components/Conocenos.jsx';
import Facebook from './components/Facebook.jsx';
import Informate from "./components/Informate.jsx";

export default function Home() {
  return (
    <main>
      <Hero /> 
      <Propuesta />
      <Somos />
      <Informate />
      <Facebook />
    </main>
  );
}