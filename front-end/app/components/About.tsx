"use client";
import { useEffect, useRef } from "react";
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.children;
    const observers: IntersectionObserver[] = [];
    Array.from(items).forEach((el) => {
      const html = el as HTMLElement;
      html.style.opacity = "0";
      html.style.transform = "translateY(40px)";
      html.style.transition =
        "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            html.style.opacity = "1";
            html.style.transform = "translateY(0)";
            io.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      io.observe(html);
      observers.push(io);
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div
        ref={containerRef}
        className="flex justify-center items-center"
      >
        <div className="max-w-2xl w-full">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            À Propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-2">
            KBACE
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Développeur Full Stack Junior
          </p>
          <p className="text-gray-500 text-sm leading-7 mb-4">
            Développeur web full stack junior, j&apos;ai acquis une expérience pratique à travers la réalisation de projets académiques et personnels. J&apos;ai travaillé sur le développement d&apos;applications web et d&apos;API avec Laravel, Flask, Vue.js et React.
          </p>
          <p className="text-gray-500 text-sm leading-7 mb-6">
            Curieux, motivé et engagé dans une démarche constante d&apos;apprentissage, je cherche à renforcer mes compétences et à évoluer au sein d&apos;un environnement professionnel structuré.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Localisation
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-0.5">
                Port Bouët, Côte d&apos;Ivoire
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Disponibilité
              </div>
              <div className="text-sm font-semibold text-green-600 mt-0.5">
                24H/24, 7J/7
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Langues
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-0.5">
                Français · Anglais
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
