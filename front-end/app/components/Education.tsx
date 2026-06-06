"use client";

import { useEffect, useRef, useState } from "react";

type Formation = {
  id: number;
  titre: string;
  etablissement: string;
  lieu: string | null;
  date_debut: string;
  date_fin: string | null;
  en_cours: boolean;
  description: string | null;
  diplome: string | null;
  lien: string | null;
};

const COLORS = [
  { bg: "bg-blue-500", gradient: "linear-gradient(90deg,#6366f1,#8b5cf6)" },
  { bg: "linear-gradient(135deg,#ec4899,#a855f7)", gradient: "linear-gradient(90deg,#3b82f6,#8b5cf6)" },
  { bg: "bg-emerald-500", gradient: "linear-gradient(90deg,#6366f1,#8b5cf6)" },
  { bg: "bg-orange-500", gradient: "linear-gradient(90deg,#f97316,#eab308)" },
];

function IconBook() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function formatPeriode(formation: Formation) {
  const debut = new Date(formation.date_debut).getFullYear();
  if (formation.en_cours) return `${debut} – Présent`;
  if (formation.date_fin) return `${debut} – ${new Date(formation.date_fin).getFullYear()}`;
  return `${debut}`;
}

export default function Education() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/formations`)
      .then((res) => res.json())
      .then((data) => setFormations(Array.isArray(data) ? data : data.data ?? []))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".edu-anim");

    const observers: IntersectionObserver[] = [];

    elements.forEach((el) => {
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
  }, [formations]);

  const enCours = formations.filter((f) => f.en_cours).length;

  return (
    <section id="formation" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">
      <div ref={containerRef}>

        {/* HEADER */}
        <div className="edu-anim">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Formation
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-2">
            Parcours de Formation
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Mon parcours académique et professionnel.
          </p>
        </div>

        {/* STATS */}
        <div className="edu-anim grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-2xl p-6 mb-12 shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-blue-500">{formations.length}+</div>
            <div className="text-xs text-gray-500">Formations</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-extrabold text-pink-500">{enCours}</div>
            <div className="text-xs text-gray-500">En cours</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-extrabold text-emerald-500">10+</div>
            <div className="text-xs text-gray-500">Technologies</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-extrabold text-orange-500">100%</div>
            <div className="text-xs text-gray-500">Motivation</div>
          </div>
        </div>

        {/* TIMELINE */}
        {loading ? (
          <div className="text-center text-gray-400 py-10">Chargement...</div>
        ) : (
          <div className="relative flex flex-col gap-8">

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 z-0"></div>

            {formations.map((formation, index) => {
              const color = COLORS[index % COLORS.length];
              const isLeft = index % 2 === 0;

              const card = (
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-white ${
                        color.bg.startsWith("bg-") ? color.bg : ""
                      }`}
                      style={!color.bg.startsWith("bg-") ? { background: color.bg } : {}}
                    >
                      <IconBook />
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-gray-500">{formatPeriode(formation)}</div>
                      <div className="text-xs font-semibold text-gray-500">
                        {formation.en_cours ? "En cours" : "Complété"}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-700">{formation.titre}</h3>
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {formation.etablissement}
                  </div>

                  {formation.description && (
                    <p className="text-xs text-gray-500">{formation.description}</p>
                  )}
                </div>
              );

              return (
                <div
                  key={formation.id}
                  className="edu-anim relative z-10"
                >
                  <div className="md:hidden">{card}</div>

                  <div className="hidden md:grid md:grid-cols-[1fr_24px_1fr] items-center gap-6">
                    {isLeft ? card : <div />}
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white justify-self-center"></div>
                    {isLeft ? <div /> : card}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}