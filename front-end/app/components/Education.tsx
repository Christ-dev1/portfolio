export default function Education() {
  return (
    <section id="formation" className="py-20 px-24 bg-gray-100">
      <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
        Formation
      </span>
      <h2 className="text-4xl font-extrabold text-gray-700 mb-2">
        Parcours de Formation
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Mon parcours académique et professionnel.
      </p>

      <div className="flex justify-center gap-16 bg-white rounded-2xl p-6 mb-12 shadow-sm">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-blue-500 leading-none">4+</span>
          <span className="text-sm text-gray-500 font-medium">Formations</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-pink-500 leading-none">2</span>
          <span className="text-sm text-gray-500 font-medium">En cours</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-emerald-500 leading-none">10+</span>
          <span className="text-sm text-gray-500 font-medium">Technologies</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-orange-500 leading-none">100%</span>
          <span className="text-sm text-gray-500 font-medium">Motivation</span>
        </div>
      </div>

      <div className="relative flex flex-col gap-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 z-0"></div>

        <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-6 relative z-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-semibold text-gray-500">2025 – 2026</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">En cours</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-700 mb-0.5">
              Développement Full Stack
            </h3>
            <div className="text-sm font-medium text-blue-600 mb-2">
              Programme WECODE
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Formation intensive en développement web moderne avec Laravel, Vue.js, React et méthodologie Agile
            </p>
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }}
            ></div>
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white justify-self-center shrink-0"></div>
          <div className="invisible"></div>
        </div>

        <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-6 relative z-10">
          <div className="invisible"></div>
          <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white justify-self-center shrink-0"></div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg,#ec4899,#a855f7)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-semibold text-gray-500">2025</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">En cours</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-700 mb-0.5">
              Licence 1
            </h3>
            <div className="text-sm font-medium text-blue-600 mb-2">
              Université Virtuelle de Côte d&apos;Ivoire
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Cursus universitaire en cours - Formation académique fondamentale
            </p>
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-6 relative z-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-semibold text-gray-500">2024 – 2025</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">Complété</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-700 mb-0.5">
              Formation en Cybersécurité Digitale
            </h3>
            <div className="text-sm font-medium text-blue-600 mb-2">
              ITworx Academy (Kodal)
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Formation spécialisée en sécurité informatique et protection des systèmes
            </p>
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }}
            ></div>
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white justify-self-center shrink-0"></div>
          <div className="invisible"></div>
        </div>
      </div>
    </section>
  );
}
