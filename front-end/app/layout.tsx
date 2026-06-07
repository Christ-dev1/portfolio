import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio KBACE",
  description: "Portfolio professionnel — Développeur Fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-700 leading-relaxed">
        {children}
      </body>
    </html>
  );
}
