"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">
          <a href="/"> <img className='w-52 h-auto' src="/images/LogoNav.png" alt="Logo de Campaña" /></a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">
            Conocenos
          </a>
          <a href="#propuestas" className="hover:underline">
            Propuestas
          </a>
          <a href="#nosotros" className="hover:underline">
            Noticias
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#inicio" className="block px-4 py-2 hover:bg-orange-500">
            Conocenos
          </a>
          <a href="#propuestas" className="block px-4 py-2 hover:bg-orange-500">
            Propuestas
          </a>
          <a href="#nosotros" className="block px-4 py-2 hover:bg-orange-500">
            Noticias
          </a>
          <a href="#contacto" className="block px-4 py-2 hover:bg-orange-500">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
