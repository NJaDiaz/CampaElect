"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Conócenos", href: "/conocenos" },
    { label: "Agenda", href: "/#Agenda" },
    { label: "Noticias", href: "/#informate" },
    { label: "Contacto", href: "/unete" },
    { label: "Galeria", href: "/galeria" },

  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/LogoNav.png"
              alt="Logo de Campaña"
              width={208}
              height={52}
              className="object-contain"
            />
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        
        {mounted && (
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-orange-600 transition-colors duration-300"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        )}
      </div>

      
      {mounted && (
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
