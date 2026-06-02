export default function About() {
  return (
    <section id="about" className="py-20 px-24">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <img src="/57 copie(1).png" alt="Kadjo Blin Ariel" className="w-full h-full object-cover object-top"/>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-600">À Propos</span>
          <h2 className="text-4xl font-extrabold text-gray-700 mb-2">Kadjo Blin Ariel Christ Ebenezer</h2>
          <p className="text-gray-500 text-sm mb-4">Développeur Full Stack Junior passionné</p>
          <p className="text-gray-500 text-sm leading-7 mb-4">Développeur web full stack junior, j'ai acquis une expérience pratique à travers la réalisation de projets académiques et personnels. J'ai développé des applications web ainsi que des API en utilisant des technologies comme Laravel, Vue.js et React.</p>
          <p className="text-gray-500 text-sm leading-7 mb-6">Curieux, rigoureux et motivé, je suis constamment en quête d'apprentissages et d'amélioration. Je souhaite aujourd'hui mettre mes compétences en pratique et évoluer au sein d'un environnement professionnel encadré.</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Localisation</div><div className="text-sm font-semibold text-gray-700 mt-0.5">Port Bouët, Côte d'Ivoire</div></div>
            <div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Disponibilité</div><div className="text-sm font-semibold text-green-600 mt-0.5">✓ Disponible</div></div>
            <div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">LinkedIn</div><div className="text-xs font-semibold text-gray-700 mt-0.5">linkedin.com/in/blin-kado</div></div>
            <div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Langues</div><div className="text-sm font-semibold text-gray-700 mt-0.5">Français · Anglais</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
