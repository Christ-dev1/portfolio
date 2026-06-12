export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-dot-bg min-h-[calc(100vh-64px)] relative overflow-hidden flex flex-col md:flex-row items-start gap-10 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 pt-16 pb-10 md:pb-0" style={{ background: 'linear-gradient(135deg, #0f1b4d 0%, #1a2a72 40%, #1e3a8a 70%, #1d4ed8 100%)' }}>
        <div className="flex-1 pt-10 relative z-10 w-full">
          <div className="text-4xl md:text-5xl font-extrabold text-white leading-tight ha1">Kadjo Blin Ariel</div>
          <div className="text-4xl md:text-5xl font-extrabold text-blue-300 leading-tight mb-4 ha2">Christ Ebenezer</div>
          <div className="text-lg font-semibold text-white mb-5 ha3">Développeur Full Stack Junior</div>
          <p className="text-sm font-light text-white/75 leading-relaxed max-w-lg mb-7 ha4">
            Passionné par le développement web moderne, spécialisé en Laravel, Vue.js et React. J'aime créer des applications web élégantes et performantes qui résolvent des problèmes réels.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 ha5">
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">Laravel</span>
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">Vue.js</span>
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">React</span>
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">TypeScript</span>
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">MySQL</span>
            <span className="px-3.5 py-1.5 border border-white/20 rounded-md text-xs font-medium text-white bg-white/[0.06]">MongoDB</span>
          </div>
          <div className="flex gap-3 flex-wrap mb-10 ha5">
            <a href="/CV - Kadjo Blin Ariel Christ Ebenezer.pdf" download="/CV - Kadjo Blin Ariel Christ Ebenezer.pdf" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl no-underline transition-all hover:-translate-y-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Télécharger mon CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/[0.06] hover:bg-white/[0.12] font-semibold text-sm px-6 py-3 rounded-xl no-underline transition-all hover:-translate-y-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Me contacter
            </a>
          </div>
          <div className="flex items-center gap-2.5 ha5">
            <span className="text-xs text-white/75 mr-1">Suivez-moi :</span>
            <a href="https://github.com/votre-username" target="_blank" className="w-9 h-9 rounded-full border border-white/25 bg-white/[0.06] flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/50 transition-all no-underline" rel="noreferrer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/blin-kadjo-592881338/" target="_blank" className="w-9 h-9 rounded-full border border-white/25 bg-white/[0.06] flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/50 transition-all no-underline" rel="noreferrer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a  href="https://wa.me/qr/YBX2MV6BR4TKE1" target="_blank" className="w-9 h-9 rounded-full border border-white/25 bg-white/[0.06] flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/50 transition-all no-underline"rel="noreferrer">
     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4L21 21l-4.1-1.6A8.5 8.5 0 1 1 21 11.5z"/>
    <path d="M16 13c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5s0-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3 .9 3.5 1 3.7a9.5 9.5 0 0 0 4 3.5c.6.3 1 .5 1.4.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.2-.3-.3-.6-.5z"/>
  </svg>
</a>
          </div>
        </div>

        
      </section>

      {/* Bande contacts */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-7 flex flex-col sm:flex-row justify-around gap-6 sm:gap-4" style={{ background: '#1a2a72' }}>
        <div className="flex items-center gap-4 animate-on-scroll anim-fade-up anim-delay-1">
          <div className="w-11 h-11 rounded-xl border border-white/20 bg-white/[0.06] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <div className="text-xs text-white/60 mb-0.5">Téléphone</div>
            <div className="text-sm font-semibold text-white">+225 01 50 50 58 60 / 07 01 71 07 06</div>
          </div>
        </div>
        <div className="flex items-center gap-4 animate-on-scroll anim-fade-up anim-delay-2">
          <div className="w-11 h-11 rounded-xl border border-white/20 bg-white/[0.06] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <div className="text-xs text-white/60 mb-0.5">Email</div>
            <div className="text-sm font-semibold text-white">christ.kadjo@epiech.eu</div>
          </div>
        </div>
        <div className="flex items-center gap-4 animate-on-scroll anim-fade-up anim-delay-3">
          <div className="w-11 h-11 rounded-xl border border-white/20 bg-white/[0.06] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div className="text-xs text-white/60 mb-0.5">Localisation</div>
            <div className="text-sm font-semibold text-white">Port Bouët, Côte d'Ivoire</div>
          </div>
        </div>
      </div>
    </>
  );
}
