# OSOM WebProject 2025

Agence web digitale spécialisée dans la création de sites internet performants, le SEO et le marketing digital en Valais.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Sanity.io** - CMS headless avec i18n
- **GSAP** - Animations avancées
- **Three.js** - Scène 3D des Alpes
- **React Three Fiber** - Intégration Three.js avec React

## 🎨 Fonctionnalités

### ✅ Terminé
- [x] Configuration environnement (Next.js 14 + TypeScript)
- [x] Architecture multilingue (FR/EN/DE)
- [x] Wireframes et direction artistique
- [x] Intégration Sanity.io avec i18n
- [x] Composants Header/Footer avec navigation
- [x] Homepage avec hero section animée
- [x] Scène 3D des Alpes avec WebGL
- [x] Animations GSAP (ScrollTrigger, Hero, Parallax)
- [x] Système de design avec couleurs OSOM
- [x] Composants UI animés (Button, Logo)

### 🚧 En cours
- [ ] Calculateur ROI/Audit avec serverless
- [ ] Pages Services détaillées
- [ ] Formulaire de contact multi-étapes
- [ ] Micro-interactions et palette cmd+K

### 📋 À faire
- [ ] Tests Playwright E2E
- [ ] Configuration GA4 + GTM
- [ ] Optimisation SEO
- [ ] Déploiement Netlify

## 🎯 Objectifs KPI

- **Leads qualifiés** : ≥ 10/mois
- **CTR moyenne** : ≥ 2%
- **Core Web Vitals** : LCP < 2.5s, INP < 200ms, CLS < 0.1
- **SEO** : Top 10 pour "agence web valais"

## 🏗️ Architecture

```
src/
├── app/                  # Next.js App Router
├── components/
│   ├── animations/       # Composants GSAP
│   ├── layout/          # Header, Footer
│   ├── three/           # Scène 3D
│   └── ui/              # Composants UI
├── lib/                 # Utilitaires
├── dictionaries/        # Traductions i18n
└── styles/             # CSS global
```

## 📱 Design System

### Couleurs OSOM
- **Primary**: #00dbb6 (Teal)
- **Secondary**: #ffdd00 (Yellow)
- **Accent**: #ff0031 (Red)
- **Dark**: #514747
- **Light**: #bcbbbb

### Animations
- Hero avec logo bounce et typewriter
- Scroll animations avec GSAP
- 3D Alpes avec nuages flottants
- Micro-interactions sur les boutons

## 🚀 Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📊 Performance

- **Bundle size**: 380kB (homepage)
- **First Load JS**: 99.4kB shared
- **Build time**: ~2s
- **Static generation**: 4 pages

## 🌍 Multilingual

Support complet FR/EN/DE avec :
- Dictionnaires JSON
- Routing localisé
- Sanity.io i18n
- Métadonnées SEO

## 🎬 Animations

- **GSAP ScrollTrigger** pour les animations au scroll
- **Three.js** pour la scène 3D des Alpes
- **Framer Motion** pour les micro-interactions
- **CSS Animations** pour les transitions

## 📧 Contact

- **Email**: hello@osom.ch
- **Téléphone**: +41 XX XXX XX XX
- **Adresse**: Sion, Valais, Suisse

---

🤖 Généré avec [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>