"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      
      <div className="flex items-center h-16 px-4 sm:px-6 md:px-8 gap-4">
        
        {/* LOGO */}
        <div className="flex items-center gap-2.5 mr-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-base shrink-0">
            K
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-sm text-gray-700">Kadjo Ariel</div>
            <div className="text-xs text-gray-500">Full Stack Developer</div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          
          {/* ACTIF */}
          <a href="#hero" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-white bg-blue-600">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Accueil
          </a>

          {/* AUTRES */}
          {[
            ["#about", "À Propos"],
            ["#skills", "Compétences"],
            ["#projects", "Projets"],
            ["#formation", "Formation"],
            ["#contact", "Contact"],
          ].map(([href, label], i) => (
            <a
              key={i}
              href={href}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
            >
              {/* 👉 tu peux remettre tes SVG ici si tu veux */}
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex ml-auto items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-xl transition whitespace-nowrap"
        >
          Me Contacter
        </a>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden w-10 h-10 flex items-center justify-center border rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            
            <a href="#hero" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
              Accueil
            </a>

            {[
              ["#about", "À Propos"],
              ["#skills", "Compétences"],
              ["#projects", "Projets"],
              ["#formation", "Formation"],
              ["#contact", "Contact"],
            ].map(([href, label], i) => (
              <a
                key={i}
                href={href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold"
            >
              Me Contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}