"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".contact-anim");

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
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

    setIsLoading(true);
    setStatus("Envoi en cours...");

    const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // (optionnel mais recommandé)
  if (data.message.length < 5) {
    setStatus("Le message doit contenir au moins 5 caractères.");
    setIsLoading(false);
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();
      console.log("Laravel error:", err);
      throw new Error("Erreur envoi");
    }

    setStatus("Message envoyé avec succès !");
    form.reset();
    setTimeout(() => setStatus(""), 3000);
  } catch {
    setStatus("Erreur d'envoi. Veuillez ressayer.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div ref={containerRef} className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="contact-anim">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold uppercase px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-2">
            Travaillons Ensemble
          </h2>

          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Vous avez un projet ? N&apos;hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-anim flex flex-col gap-4"
          >
            {[
              ["Nom complet", "text", "name", "Votre nom"],
              ["Email", "email", "email", "votre@email.com"],
              ["Sujet", "text", "subject", "Objet de votre message"],
            ].map(([label, type, name, placeholder], i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-blue-600 outline-none"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre projet..."
                className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-blue-600 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl disabled:opacity-60"
            >
              {isLoading ? "Envoi..." : "Envoyer le message"}
            </button>

            {status && (
              <p className="text-sm text-gray-600">{status}</p>
            )}
          </form>

          {/* INFOS */}
          <div className="contact-anim bg-[#1a2a72] rounded-2xl p-6 flex flex-col gap-6">

            {[
              {
                label: "Téléphone",
                value: "+225 01 50 50 58 60 / 07 01 71 07 06",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                value: "christ.kadjo@epiech.eu",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
              {
                label: "Localisation",
                value: "Port Bouët, Côte d'Ivoire",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "https://www.linkedin.com/in/blin-kadjo-592881338/",
                href: "https://www.linkedin.com/in/blin-kadjo-592881338/",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>

                <div>
                  <div className="text-xs text-white/60">{item.label}</div>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      className="text-sm font-semibold text-white hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-white">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}