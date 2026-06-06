'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation du titre
    const header = headerRef.current;
    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(40px)';
      header.style.transition = 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)';

      const headerIO = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
          headerIO.disconnect();
        }
      }, { threshold: 0.1 });
      headerIO.observe(header);
    }

    // Animation des cartes + skill bars
    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    if (!cards) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';

          entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
            const htmlBar = bar as HTMLElement;
            if (htmlBar.style.width === '0px' || htmlBar.style.width === '0%' || htmlBar.style.width === '') {
              setTimeout(() => {
                htmlBar.style.width = (htmlBar.getAttribute('data-width') ?? '0') + '%';
              }, 200);
            }
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">

      <div ref={headerRef} className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">Expertise</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mt-3 mb-2">Compétences Techniques</h2>
        <div className="w-12 h-0.5 bg-blue-600 rounded mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={sectionRef}>
        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm skill-card">
          <div className="flex items-center gap-2 font-bold text-gray-700 mb-6"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>Frontend</div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>React.js</span><span className="text-gray-500 text-xs">60%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="85"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Vue.js</span><span className="text-gray-500 text-xs">80%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="80"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>TypeScript</span><span className="text-gray-500 text-xs">75%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="75"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Tailwind CSS</span><span className="text-gray-500 text-xs">90%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="90"></div></div></div>
          <div><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>JavaScript</span><span className="text-gray-500 text-xs">85%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="85"></div></div></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm skill-card">
          <div className="flex items-center gap-2 font-bold text-gray-700 mb-6"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>Backend</div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Laravel</span><span className="text-gray-500 text-xs">85%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="85"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>PHP</span><span className="text-gray-500 text-xs">80%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="80"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Nest.js</span><span className="text-gray-500 text-xs">70%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="70"></div></div></div>
          <div><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>API REST </span><span className="text-gray-500 text-xs">90%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="85"></div></div></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm skill-card">
          <div className="flex items-center gap-2 font-bold text-gray-700 mb-6"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>Base de données</div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>MySQL</span><span className="text-gray-500 text-xs">80%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="80"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>MongoDB</span><span className="text-gray-500 text-xs">60%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000" style={{width:0}} data-width="75"></div></div></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm skill-card">
          <div className="flex items-center gap-2 font-bold text-gray-700 mb-6"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>Outils &amp; DevOps</div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Git/GitHub</span><span className="text-gray-500 text-xs">85%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-pink-500 transition-all duration-1000" style={{width:0}} data-width="85"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>VS Code</span><span className="text-gray-500 text-xs">90%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-pink-500 transition-all duration-1000" style={{width:0}} data-width="90"></div></div></div>
          <div className="mb-4"><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Postman</span><span className="text-gray-500 text-xs">80%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-pink-500 transition-all duration-1000" style={{width:0}} data-width="80"></div></div></div>
          <div><div className="flex justify-between text-sm text-gray-700 mb-1.5"><span>Trello</span><span className="text-gray-500 text-xs">75%</span></div><div className="h-1.5 rounded-full bg-[#e5e9f5] overflow-hidden"><div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-pink-500 transition-all duration-1000" style={{width:0}} data-width="75"></div></div></div>
        </div>
      </div>
    </section>
  );
}