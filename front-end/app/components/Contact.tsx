"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

    setIsLoading(true);
    setStatus("Envoi en cours...");

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Le message n'a pas pu etre envoye.");
      }

      setStatus("Message envoyé au backend - merci !");
      setIsLoading(false);
      form.reset();
      setTimeout(() => setStatus(""), 2000);
    } catch {
      setStatus("Erreur d'envoi. Vérifiez que le backend est lancé.");
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-24 bg-white">
      <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
        Contact
      </span>
      <h2 className="text-4xl font-extrabold text-gray-700 mb-2">
        Travaillons Ensemble
      </h2>
      <p className="text-gray-500 text-sm mb-10">
        Vous avez un projet ? N&apos;hésitez pas à me contacter.
      </p>

      <div className="grid grid-cols-2 gap-12 items-start">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Nom complet</label>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Sujet</label>
            <input
              type="text"
              name="subject"
              placeholder="Objet de votre message"
              required
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              rows={5}
              required
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-blue-600 transition-colors resize-y"
            ></textarea>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="self-start inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3 rounded-xl border-none cursor-pointer transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {isLoading ? "Envoi..." : "Envoyer le message"}
            </button>
            {status && <span className="text-sm text-gray-600">{status}</span>}
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Téléphone</div>
              <div className="text-sm font-semibold text-gray-700">+225 01 50 50 58 60</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Email</div>
              <div className="text-sm font-semibold text-gray-700">christ.kadjo@epiech.eu</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Localisation</div>
              <div className="text-sm font-semibold text-gray-700">Port Bouët, Côte d&apos;Ivoire</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">LinkedIn</div>
              <div className="text-sm font-semibold text-gray-700">linkedin.com/in/blin-kado-519b81138</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
