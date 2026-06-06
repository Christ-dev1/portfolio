"use client";

import { useEffect, useRef, useState } from "react";
import { getProjects, Project } from "../lib/projects";

const COLORS = [
  { bg: "bg-blue-50", icon: "bg-blue-500", dot: "text-blue-500", btn: "from-blue-500 to-blue-700" },
  { bg: "bg-pink-50", icon: "linear-gradient(135deg,#ec4899,#a855f7)", dot: "text-pink-500", btn: "linear-gradient(135deg,#ec4899,#a855f7)" },
  { bg: "bg-green-50", icon: "bg-green-500", dot: "text-green-500", btn: "from-green-500 to-green-700" },
  { bg: "bg-orange-50", icon: "linear-gradient(135deg,#f97316,#ef4444)", dot: "text-orange-500", btn: "linear-gradient(135deg,#f97316,#ef4444)" },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(Array.isArray(data) ? data : (data as any).data ?? []);
    });
  }, []);

  // Observer le header dès le montage
  useEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)';

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Observer les cartes une fois les projets chargés
  useEffect(() => {
    if (!gridRef.current || projects.length === 0) return;

    const cards = gridRef.current.querySelectorAll('.project-card');
    const observers: IntersectionObserver[] = [];

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      const col = i % 3;
      const delay = col * 100;

      el.style.opacity = '0';
      el.style.transform = 'translateY(48px)';
      el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.disconnect();
        }
      }, { threshold: 0.1 });

      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, [projects]);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">

      <div ref={headerRef} className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">Projets</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mt-3 mb-2">Projets Réalisés</h2>
        <div className="w-12 h-0.5 bg-blue-600 rounded mx-auto mb-3"></div>
        <p className="text-gray-500 text-sm max-w-md mx-auto">Découvrez une sélection de mes projets réalisés en développement web full-stack</p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project: Project, index: number) => {
          const color = COLORS[index % COLORS.length];
          const techs = project.technologies?.split(",").map((t) => t.trim()) ?? [];
          const features = project.key_features?.split(/\r?\n/).filter(Boolean) ?? [];
          const num = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              className="project-card rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`${color.bg} p-5 sm:p-6 pb-4 min-h-[140px] sm:min-h-[160px] flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white ${color.icon.startsWith("bg-") ? color.icon : ""}`}
                    style={!color.icon.startsWith("bg-") ? { background: color.icon } : {}}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-400">#{num}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{project.description}</p>
              </div>

              <div className="p-5 sm:p-6 pt-4 border-t border-gray-100 flex flex-col flex-1">
                <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">Technologies utilisées</div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {techs.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">{tech}</span>
                  ))}
                </div>
                {features.length > 0 && (
                  <>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">Fonctionnalités clés</div>
                    <ul className="mb-5 space-y-1 flex-1">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className={`${color.dot} mt-1 text-[8px]`}>●</span>{feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                  <a href={project.github_url ?? "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2 rounded-lg text-xs font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors">Code source</a>
                  <a href={project.demo_url ?? "#"} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center py-2 rounded-lg text-xs font-semibold text-white hover:opacity-90 transition ${color.btn.startsWith("from-") ? `bg-gradient-to-r ${color.btn}` : ""}`}
                    style={!color.btn.startsWith("from-") ? { background: color.btn } : {}}>
                    Voir la démo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}