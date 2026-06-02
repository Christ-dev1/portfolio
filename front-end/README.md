# Portfolio — Next.js

Portfolio professionnel moderne construit avec **Next.js 14**, **React 18**, **TypeScript** et **Tailwind CSS**.

## 🚀 Fonctionnalités

✅ **Design moderne et responsive** — Desktop, tablette, mobile  
✅ **Navigation intelligente** — Détection de section active et smooth scroll  
✅ **Sections complètes** — Hero, À propos, Compétences, Projets, Formation, Contact  
✅ **Animations fluides** — Barres de compétences animées, hover effects  
✅ **Formulaire de contact** — Validation et feedback utilisateur  
✅ **TypeScript** — Code type-safe  
✅ **Tailwind CSS** — Styling modernes et performants  

## 📁 Structure

```
portfolio/
├── app/
│   ├── components/        # Composants React
│   ├── globals.css        # Styles globaux Tailwind
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── public/                # Ressources statiques
├── tailwind.config.ts     # Config Tailwind
├── next.config.js         # Config Next.js
├── tsconfig.json          # Config TypeScript
└── package.json
```

## 🛠 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Visiter http://localhost:3000
```

## 📦 Build & Déploiement

```bash
# Build de production
npm run build

# Lancer sur la production locale
npm run start
```

### Déploiement recommandé:
- **Vercel** (gratuit, offert par les créateurs de Next.js)
- **Netlify** (gratuit, simple à configurer)
- **GitHub Pages** avec GitHub Actions

## ✏️ Personnalisation

1. **Remplacer le contenu** — Éditez les composants dans `app/components/`
2. **Ajouter votre photo** — Remplacez l'image placeholder dans `Hero.tsx`
3. **Ajouter CV** — Placez `CV.pdf` dans `public/`
4. **Styles personnalisés** — Modifiez `app/globals.css` ou `tailwind.config.ts`
5. **Mettre à jour les réseaux** — Éditez les liens dans `Footer.tsx`

## 🔗 Variables d'environnement (optionnel)

Créez un `.env.local` pour les configurations sensibles:
```env
NEXT_PUBLIC_CONTACT_EMAIL=votre.email@example.com
```

## 📝 TODO / Prochaines étapes

- [ ] Intégrer formulaire avec backend (SendGrid, Resend, etc.)
- [ ] Ajouter Blog/Articles (markdown)
- [ ] Analytics (Vercel Analytics, Google Analytics)
- [ ] Mode sombre (dark mode)
- [ ] Intégration CMS (Sanity, Contentful)

## 📄 Licence

ISC
