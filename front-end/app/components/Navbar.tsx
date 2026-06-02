'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 flex items-center h-16 gap-4">
      <div className="flex items-center gap-2.5 mr-6">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-base shrink-0">K</div>
        <div className="leading-tight">
          <div className="font-bold text-sm text-gray-700">Kadjo Ariel</div>
          <div className="text-xs text-gray-500">Full Stack Developer</div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1 flex-1">
        <a href="#hero" className="nav-link flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 no-underline">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Accueil
        </a>
        <a href="#about" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 no-underline transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          À Propos
        </a>
        <a href="#skills" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 no-underline transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Compétences
        </a>
        <a href="#projects" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 no-underline transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Projets
        </a>
        <a href="#formation" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 no-underline transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Formation
        </a>
        <a href="#contact" className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 no-underline transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Contact
        </a>
      </div>
      <a href="#contact" className="ml-auto flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-xl no-underline transition-colors whitespace-nowrap">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Me Contacter
      </a>
    </nav>
  );
}
