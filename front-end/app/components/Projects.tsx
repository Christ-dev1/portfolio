export default function Projects() {
  return (
    <section id="projects" className="py-20 px-24 bg-white">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
          Projets
        </span>
        <h2 className="text-4xl font-extrabold text-gray-700 mt-3 mb-2">
          Projets Réalisés
        </h2>
        <div className="w-12 h-0.5 bg-blue-600 rounded mx-auto mb-3"></div>
        <p className="text-gray-500 text-sm">
          Découvrez une sélection de mes projets réalisés en développement web full-stack
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-blue-50 p-6 pb-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400">#01</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              YOWL – Plateforme Collaborative
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Système de partage de liens avec génération automatique d&apos;aperçus.
            </p>
          </div>

          <div className="p-6 pt-4 border-t border-gray-100">
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Technologies utilisées
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">Laravel</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">MySQL</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">TailwindCSS</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">API REST</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Fonctionnalités clés
            </div>
            <ul className="mb-5 space-y-1">
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-blue-500 mt-1 text-[8px]">●</span>Architecture backend robuste avec Laravel</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-blue-500 mt-1 text-[8px]">●</span>Système de gestion des utilisateurs et permissions</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-blue-500 mt-1 text-[8px]">●</span>Génération automatique d&apos;aperçus de liens</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-blue-500 mt-1 text-[8px]">●</span>API RESTful pour l&apos;intégration frontend</li>
            </ul>

            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 no-underline transition-colors">
               
                Code
              </a>
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 no-underline hover:opacity-90 transition-opacity">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Démo
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-pink-50 p-6 pb-5">
            <div className="flex justify-between items-start mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg,#ec4899,#a855f7)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400">#02</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Post-It App
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Application moderne de gestion de notes avec intégration d&apos;API externe.
            </p>
          </div>

          <div className="p-6 pt-4 border-t border-gray-100">
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Technologies utilisées
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">Vue.js</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">API RESTful</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">TailwindCSS</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Fonctionnalités clés
            </div>
            <ul className="mb-5 space-y-1">
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-pink-500 mt-1 text-[8px]">●</span>CRUD complet pour la gestion de notes</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-pink-500 mt-1 text-[8px]">●</span>Intégration d&apos;API externe sécurisée</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-pink-500 mt-1 text-[8px]">●</span>Interface responsive et accessible</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-pink-500 mt-1 text-[8px]">●</span>State management optimisé</li>
            </ul>

            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 no-underline transition-colors">Code</a>
              <a
                href="#"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white no-underline hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#ec4899,#a855f7)" }}
              >
                Démo
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-green-50 p-6 pb-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400">#03</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Application E-Commerce
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Développement full stack d&apos;une boutique en ligne avec CRUD et interface responsive.
            </p>
          </div>

          <div className="p-6 pt-4 border-t border-gray-100">
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Technologies utilisées
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">PHP</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">Laravel</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">MySQL</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">TailwindCSS</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Fonctionnalités clés
            </div>
            <ul className="mb-5 space-y-1">
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-green-500 mt-1 text-[8px]">●</span>Gestion complète des produits et catégories</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-green-500 mt-1 text-[8px]">●</span>Interface responsive multi-appareils</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-green-500 mt-1 text-[8px]">●</span>Gestion base de données relationnelle</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-green-500 mt-1 text-[8px]">●</span>Système d&apos;authentification sécurisé</li>
            </ul>

            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 no-underline transition-colors">Code</a>
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white no-underline hover:opacity-90 transition-opacity bg-gradient-to-r from-green-500 to-green-700">Démo</a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-orange-50 p-6 pb-5">
            <div className="flex justify-between items-start mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400">#04</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Showtime
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Plateforme de gestion de réservations de tickets d&apos;événements.
            </p>
          </div>

          <div className="p-6 pt-4 border-t border-gray-100">
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Technologies utilisées
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">React.js</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">Laravel</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">MongoDB</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">TailwindCSS</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">
              Fonctionnalités clés
            </div>
            <ul className="mb-5 space-y-1">
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-orange-500 mt-1 text-[8px]">●</span>Gestion des réservations en temps réel</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-orange-500 mt-1 text-[8px]">●</span>API REST performante avec Laravel</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-orange-500 mt-1 text-[8px]">●</span>Base de données MongoDB flexible</li>
              <li className="flex items-start gap-2 text-xs text-gray-700"><span className="text-orange-500 mt-1 text-[8px]">●</span>Interface React.js moderne</li>
            </ul>

            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 no-underline transition-colors">Code</a>
              <a
                href="#"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white no-underline hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}
              >
                Démo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
