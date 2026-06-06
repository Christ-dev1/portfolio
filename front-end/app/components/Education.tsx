"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/formations`)
      .then((res) => res.json())
      .then((data) => setFormations(Array.isArray(data) ? data : data.data ?? []))
      .finally(() => setLoading(false));
  }, []);

  const enCours = formations.filter((f) => f.en_cours).length;

  return (
    <section id="formation" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">
      <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
        Formation
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-2">
        Parcours de Formation
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Mon parcours académique et professionnel.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-2xl p-6 mb-12 shadow-sm">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-blue-500 leading-none">{formations.length}+</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium text-center">Formations</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-pink-500 leading-none">{enCours}</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium text-center">En cours</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-emerald-500 leading-none">10+</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium text-center">Technologies</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-orange-500 leading-none">100%</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium text-center">Motivation</span>
        </div>
      </div>

      {/* Timeline */}
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
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 ${color.bg.startsWith("bg-") ? color.bg : ""}`}
                    style={!color.bg.startsWith("bg-") ? { background: color.bg } : {}}
                  >
                    <IconBook />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-semibold text-gray-500">{formatPeriode(formation)}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${formation.en_cours ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {formation.en_cours ? "En cours" : "Complété"}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-700 mb-0.5">{formation.titre}</h3>
                <div className="text-sm font-medium text-blue-600 mb-2">{formation.etablissement}</div>
                {formation.description && (
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{formation.description}</p>
                )}
                {formation.lien && (
                  <a href={formation.lien} target="_blank" rel="noopener noreferrer"
                     className="text-xs text-blue-500 hover:underline mb-4 block">
                    Voir le diplôme →
                  </a>
                )}
                <div className="h-0.5 w-12 rounded-full" style={{ background: color.gradient }}></div>
              </div>
            );

            return (
              <div key={formation.id} className="relative z-10">
                {/* Mobile : cartes empilées */}
                <div className="md:hidden">{card}</div>

                {/* Desktop : timeline alternée */}
                <div className="hidden md:grid md:grid-cols-[1fr_24px_1fr] items-center gap-6">
                  {isLeft ? card : <div />}
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white justify-self-center shrink-0"></div>
                  {isLeft ? <div /> : card}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}