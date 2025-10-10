# OSOM - Premium Craftsman Développeur Web Valais

## 📅 DERNIÈRES MODIFICATIONS (9 Octobre 2025)

### 🎯 SESSION EN COURS - Performance Mobile Optimization

**OBJECTIF: PageSpeed Mobile 90+**

**État actuel:**
- PageSpeed Mobile: 63/100 (avant optimisations)
- FCP: 4.0s (cible < 1.8s)
- LCP: 6.6s (cible < 2.5s)
- Render blocking: 750ms économie identifiée

**Actions réalisées:**

#### 1. **Suppression Calendly Widget - Gain 780ms**
**Commit**: `902b0af` + `fb43ba4`

**Problème**: Widget Calendly bloquait render 780ms (third-party)

**Solution appliquée:**
- Scripts Calendly CSS + JS supprimés du layout.tsx
- DNS prefetch/preconnect assets.calendly.com retirés
- Références UI Calendly nettoyées (ContactMobile, etc.)
- 1321 lignes code mort supprimées
- Variables env CALENDLY_URL supprimées

**Gain attendu:**
- -780ms render blocking
- -2 requêtes DNS
- Contact simplifié: Tel direct + WhatsApp + Email

#### 2. **Beast Mode Pong - Gaming Section Agence**
**Commit**: `0d69cb8` + `f748813`

**Features:**
- 3 phases difficulté progressive (Vitesse, Rétrécissement, Chaos)
- Anti-scroll system (zero latence pendant jeu)
- ESC pour quitter, disclaimers sans emojis
- Isolation canvas (wheel/touch events bloqués)

**Impact UX:**
- Expérience gaming premium sans friction
- Scroll body bloqué pendant jeu actif
- Position restaurée après quit

#### 3. **Hero Mobile Optimisé**
**Commit**: `0b905cd`

**Optimisation:**
- Phare interactif SVG supprimé mobile (lg:hidden)
- Desktop garde version interactive avec loupe FPS
- Hero mobile ultra minimaliste: Typo + CTAs uniquement
- Performance mobile améliorée (moins SVG à render)

**Prochaines étapes identifiées:**
- [ ] Critical CSS inline pour réduire FCP
- [ ] Preload hero image avec priority hint
- [ ] Defer non-critical CSS
- [ ] Optimiser fonts loading strategy
- [ ] Cible finale: PageSpeed Mobile 90+

---

## 📅 SESSION 8 OCTOBRE 2025

### ✅ SESSION COMPLÉTÉE - Hero Performance + Audit SEO Réel

#### 1. **Hero Performance Editorial "VOYAGE"**
**Commit**: `d504e2f` - "Integration hero VOYAGE editorial + update pricing Performance"

**Objectif**: Storytelling partenariat 6-12 mois avec design magazine mode

**Design magazine éditorial**:
- Asymétrique 7/5 colonnes
- Typography proportionnée (10vw max, réduit de 18vw)
- Grid magazine subtil (opacity 0.015)
- Accents géométriques purple/20
- Rythme visuel avec phases 01/02/03 (text-6xl)
- Offset 20% droite pour tension éditoriale

**Storytelling**: Votre projet AUJOURD'HUI → [flèche élégante] → SOMMET DIGITAL

**Structure phases**:
- 01 - Fondations solides
- 02 - Momentum digital
- 03 - Performance peak

**Pages modifiées**:
- `/services/performance/page.tsx`: Hero complet remplacé (lignes 19-145)
- `/services/page.tsx`: Prix Performance mis à jour (27K/48K CHF)

---

#### 2. **Audit SEO Réel - Transformation Complète**
**Fichiers créés/modifiés**:
- `/src/app/api/seo-audit/route.ts` (NOUVEAU - 325 lignes)
- `/src/components/tools/SEOAuditTool.tsx` (API call réel remplace simulation)
- `/src/app/outils/page.tsx` (texte adapté pour API réelle)
- `package.json` (cheerio installé)

**Fonctionnalités réelles implémentées**:

**Google PageSpeed Insights API**:
- Scores mobile/desktop performance réels
- Extraction recommendations Lighthouse (FCP, LCP, CLS)
- Cache 1h (revalidate: 3600)
- Graceful degradation si API key manquante

**Scraping HTML avec Cheerio**:
- Meta tags: title, description (+ OpenGraph fallback)
- Structure Hn: H1, H2, H3 counts + extraction texte
- Images: total, avec/sans ALT, liste 5 premiers sans ALT
- Technical: canonical, viewport, lang tag, HTTPS

**Scoring algorithm réel**:
- Title optimal (50-60 chars): 20 points
- Description optimale (120-160 chars): 20 points
- Structure H1 (exactement 1): 15 points
- Images ALT optimization: 15 points
- Performance mobile/desktop (90+): 20 points
- Technical (HTTPS, canonical, viewport, lang): 10 points
- **Total**: 100 points

**Recommendations personnalisées**:
- Title trop long/court → suggestion précise
- Description inadéquate → guidance optimale
- H1 manquant/multiple → règle SEO
- Images sans ALT → quantité + exemples
- Performance mobile critique → actions concrètes
- Recommendations Lighthouse intégrées

**Test validation (https://osom.ch)**:
```
Score: 63/100
Title: 62 caractères (légèrement long)
Description: 139 caractères ✅ optimal
H1: 0 (problème détecté)
Images: 2/2 avec ALT ✅
Technical: HTTPS ✅, Canonical ✅, Viewport ✅, Lang ✅
Recommendations:
- Raccourcir le titre (optimal: 50-60 caractères)
- Utiliser exactement 1 balise H1 par page
```

**Lead magnet professionnel**: Audit gratuit → capture email → recommendations détaillées

---

### ✅ SESSION PRÉCÉDENTE (7 Octobre 2025) - Optimisations UX & Typographie

#### 1. **Refonte Affichage Pricing (Approche Douce)**
**Commit**: `64197fa` - "Refonte affichage pricing: approche douce avec prix mensuels"

**Objectif**: Réduire friction psychologique en mettant en avant les montants mensuels

**Pages modifiées**:
- `/services/page.tsx`: Prix mensuel en text-3xl, total en text-xs
- `/services/essentiel`: 1,667/1,500 CHF/mois (5xl) → Total petit (xs)
- `/services/performance`: 1,667/1,500 CHF/mois (5xl) → Total petit (xs)
- `/services/sur-mesure`: "Dès 2,000 CHF/mois" (5xl-6xl), exemples avec coût mensuel (3xl)
- `/premium-b2b`: 3,000/2,500/2,000 CHF/mois (3xl) → Setup petit (xs)

**Avant → Après**:
```
AVANT (intimidant):
[5,000 CHF] ← gros
= 1,667 CHF/mois ← petit

APRÈS (approche douce):
[1,667 CHF/mois] ← GROS
Total: 5,000 CHF ← petit gris
```

**Psychologie appliquée**: Prix mensuel moins intimidant, montant mensuel = engagement accessible, total discret mais présent (transparence)

---

#### 2. **UX Optimization: Réorganisation Sections Services**
**Commit**: `791a5c8` - "UX Optimization: Réorganisation sections services"

**Nouvel ordre psychologique**: Hook → Valeur → Confiance → Qualification → Prix → Action

**Ordre AVANT (suboptimal)**:
1. Hero
2. What's Included
3. Perfect For ← trop tôt (visiteur pas convaincu)
4. Process/Partenariat ← arrive après qualification
5. Prix
6. CTA

**Ordre APRÈS (optimisé)**:
1. 🎯 Hero (hook émotionnel)
2. 💎 What's Included (valeur concrète)
3. 🔧 Process/Partenariat (confiance, rassurance)
4. 🎯 Perfect For (qualification après conviction)
5. 💰 Prix (après démonstration valeur)
6. 🚀 CTA Final

**Pages modifiées**:
- **Essentiel**: Déplacé "Process" en position 3 (avant "Perfect For")
- **Performance**: Déplacé "Le Partenariat Performance" en position 3 (avant "Perfect For")
- **Sur Mesure**: ✅ Déjà optimal (Garanties en position 3)

---

#### 3. **Typography Fix: Correction Titres avec Multiples Majuscules**
**Commit**: `c690ce5` - "Typography Fix: Correction titres avec multiples majuscules"

**Règle appliquée**: Convention française - ❌ Titre Avec Majuscules → ✅ Titre avec majuscules

**65+ titres corrigés dans 23 fichiers**:

**Process/Étapes**:
- Étape 1: Diagnostic → Étape 1 : Diagnostic
- Étape 2: Stratégie → Étape 2 : Stratégie

**Sections génériques**:
- Défi Initial → Défi initial
- Résultats Mesurés → Résultats mesurés
- Votre Parcours Growth → Votre parcours growth
- Contexte Initial → Contexte initial

**SEO/Audit**:
- Audit SEO Gratuit & Automatisé → Audit SEO gratuit & automatisé
- Balises Méta → Balises méta
- Structure Titres → Structure des titres
- Optimisation Images → Optimisation des images

**Analytics/Business**:
- Analytics Dashboard → Analytics dashboard
- Insights Business → Insights business
- Solutions Techniques → Solutions techniques

**Avant/Après**:
- AVANT / APRÈS → Avant / Après
- DANS 30 JOURS → Dans 30 jours
- VERSION 1 / VERSION 2 → Version 1 / Version 2

**Exceptions conservées (correctes)**:
✅ Noms propres (H-Séchement, LMDI, OSOM)
✅ Acronymes (SEO, ROI, CTR, API, CRM)
✅ Produits (B2B Technique Premium, E-commerce Premium)
✅ Outils (Google Analytics, Meta Pixel)

---

#### 4. **Audit Coordonnées de Contact**

**Vérification complète réalisée**:

**Téléphone officiel**: +41 79 128 95 49 ✅
- Formats trouvés (tous corrects):
  - `+41791289549` (format tel:)
  - `+41 79 128 95 49` (format affiché)
  - `079 128 95 49` (format local)
  - `41791289549` (WhatsApp)

**Email officiel**: hello@osom.ch ✅
- Présent dans Footer, ContactMobile, CityPageTemplate, mentions-legales

**CTAs Contact**: ~30+ liens `/contact` vérifiés ✅
- Présents sur: Header, Homepage, Services (tous), Premium B2B, Outils, Blog, Agence

---

## 🎯 POSITIONNEMENT STRATÉGIQUE ACTUALISÉ (Octobre 2025)

### Qui est OSOM?
**Pas une agence volume. Un craftsman digital premium.**

- **Identité**: OSOM (la marque/agence) opéré par un craftsman solo avec collaborateurs occasionnels
- **Focus**: 3-5 **grands projets/an** avec accompagnement 6-12 mois (pas 50 petits sites)
- **Expertise**: Projets complexes sur mesure (25-60 pages, API, dashboards, SEO stratégique)
- **Localisation**: Valais, Suisse - Expertise SEO local hyper-ciblé

### Modèle Business Craftsman

**IMPORTANT - Pricing mensuel = partenariat, pas projet + support:**

Les projets Performance/Sur Mesure sont facturés mensuellement parce que c'est un **partenariat continu**, pas un site livré puis un support vendu séparément.

Exemple concret:
- **H-Sechement**: 24,000 CHF sur 6 mois = **4,000 CHF/mois** (dev + SEO + dashboard + support premium TOUT COMPRIS chaque mois)
- **Maîtrise Cathédrale**: 12,000 CHF sur 4 mois = **3,000 CHF/mois** (site + calendrier + SEO + formation TOUT COMPRIS)

Ce n'est PAS "18,000 CHF projet + 1,800 CHF/mois support optionnel". C'est **18,000 CHF ÷ 12 mois = 1,500 CHF/mois partenariat total**.

---

## 📦 PACKAGES CRAFTSMAN (MODÈLE ACTUALISÉ)

### 1. Essentiel (5,000 - 9,000 CHF)
**Durée**: 3-6 mois
**Pricing mensuel**:
- 3 mois = 5,000 CHF total = **1,667 CHF/mois**
- 6 mois = 9,000 CHF total = **1,500 CHF/mois** (POPULAIRE)

**Pour**: Professionnels, artisans, PME, cabinets
**Inclus**: 15-25 pages sur mesure, design responsive premium, SEO de base, accompagnement dev actif chaque mois, formation 2h, CMS simple
**Message clé**: Le paiement mensuel = votre développeur actif chaque mois (pas un site livré puis abandonné)

**UX Flow optimisé**:
1. Hero (hook)
2. What's Included (valeur)
3. **Process** (confiance)
4. Perfect For (qualification)
5. Prix (conviction)
6. CTA

---

### 2. Performance (27,000 - 48,000 CHF)
**Durée**: 6-12 mois
**Pricing mensuel**:
- 6 mois = 27,000 CHF total = **4,500 CHF/mois**
- 12 mois = 48,000 CHF total = **4,000 CHF/mois** (MEILLEUR PRIX)

**Pour**: PME B2B, e-commerce premium, SaaS/tech startup, institutions culturelles
**Inclus**: 30-60 pages complexes, API & integrations (CRM, paiements, calendriers), Dashboard personnalisé, SEO stratégique mensuel continu, Support premium 48h, Partenariat actif (dev + SEO + optimisations chaque mois)
**Message clé**: Partenariat mensuel actif = dev + SEO + support TOUT inclus chaque mois
**Exemples**: H-Sechement (B2B technique), Maîtrise Cathédrale (culturel)

**UX Flow optimisé**:
1. Hero (hook)
2. What's Included (valeur)
3. **Le Partenariat Performance** (confiance)
4. Perfect For (qualification)
5. Prix (conviction)
6. CTA

---

### 3. Sur Mesure (20,000 - 100,000+ CHF)
**Durée**: 12-24 mois
**Pricing mensuel**: Dès 2,000 CHF/mois (devis personnalisé selon ambitions)

**Pour**: Finance/Banque privée, Corporate international, E-commerce scaling, Startup série A+
**Inclus**: Architecture entreprise complète, Consultant dédié, SEO domination locale, Support 24/7 avec SLA, Analytics & ROI avancés, Garanties contractuelles (performance 90+ PageSpeed, top 5 SEO mois 6)
**Message clé**: Conquête digitale long terme avec garanties contractuelles
**Exemples**: Nowssen (finance), projets corporate multilingues

**UX Flow optimisé** (déjà optimal):
1. Hero (hook)
2. What's Included (valeur)
3. **Garanties Contractuelles** (confiance)
4. Perfect For (qualification)
5. Prix (conviction)
6. CTA

---

### 4. Optimisation Continue (1,500 - 4,000 CHF/mois)
**Durée**: 6-12 mois recommandé
**Pour**: Sites existants à transformer en machines de conversion
**3 tiers**:
- **Essential** (1,500 CHF/mois): SEO local base, analytics, 1 session/mois
- **Growth** (2,500 CHF/mois): SEO stratégique, dashboard, A/B tests, 2 sessions/mois (POPULAIRE)
- **Performance** (4,000 CHF/mois): SEO agressif, dashboard custom, consultant dédié, garantie résultats

---

## 🏆 PROJETS RÉELS OSOM

### H-Sechement (B2B Technique)
- **Package**: Performance (24,000 CHF sur 6 mois = 4,000 CHF/mois)
- **Livrables**: Migration Next.js, Dashboard performance personnalisé, SEO technique Arc Lémanique
- **Résultats**: Performance 65 → 95+ PageSpeed, Position #2 Google "entreprise assèchement arc lémanique", +150% visibilité, 1,287 impressions/mois

### Maîtrise Cathédrale Sion (Institution Culturelle)
- **Package**: Performance (12,000 CHF sur 4 mois = 3,000 CHF/mois)
- **Livrables**: Site 18 pages + système événements, Intégration calendrier 2025-2026, SEO local culturel Sion/Valais
- **Impact**: Crédibilité institutionnelle renforcée, Communication événements centralisée, Partenariats culturels valorisés

### LMDI (E-commerce Premium)
- **Package**: Optimisation Continue Growth
- **Focus**: SEO e-commerce + optimisation technique continue
- **Résultats**: 315 clics organiques/mois, CTR 3.45% (excellent e-commerce), 9,133 impressions/mois

### JDWaeber (Portfolio Musical) - EN DÉVELOPPEMENT
- **Package**: Essentiel
- **Localisation**: ~/JDW-Portfolio-2025/ (repo Git actif)
- **Status**: Développement en cours, migration prévue après déploiement

### ❌ EXCLUS - Projets personnels non-OSOM:
- **Paroisse Nendaz**: Projet personnel Camilo, NE PAS utiliser comme référence OSOM

---

## 🛠️ STACK TECHNIQUE

### Core
- **Next.js 15** App Router
- **TypeScript** + **Tailwind CSS**
- **Framer Motion** (animations)
- **Vercel** (déploiement automatique)

### Performance
- **Images**: WebP, AVIF formats, optimisations automatiques
- **Bundle**: optimizePackageImports (framer-motion, lucide-react)
- **Caching**: Compression activée, headers optimisés
- **PageSpeed**: Garantie 90+ score, < 2s loading

### Features Craftsman
- **CMS Headless**: Autonomie clients post-formation
- **API Integrations**: Google Calendar, CRM, Analytics (custom)
- **Dashboards**: Analytics temps réel personnalisés par métier
- **SEO Local**: Hyper-local Valais (Sion, Sierre, Martigny, etc.)
- **SEO Audit Tool**: Google PageSpeed Insights + Cheerio scraping réel (lead magnet)

---

## 📊 ARCHITECTURE SITE OSOM

### Pages Actives
- **Homepage**: Hero phare interactif (HeroSwissOSOMHybrid.tsx) - SIGNATURE DESIGN À CONSERVER
- **Services**: Page hub + 3 pages packages détaillées
  - `/services` - Overview packages (prix mensuel en avant)
  - `/services/essentiel` - Package Essentiel (UX flow optimisé)
  - `/services/performance` - Package Performance (UX flow optimisé)
  - `/services/sur-mesure` - Package Sur Mesure (UX flow optimal)
  - `/services/optimisation-continue` - 3 tiers optimisation
- **Réalisations**: Portfolio projets (H-Sechement, LMDI, Maîtrise Cathédrale)
- **Premium B2B**: Landing page packages B2B (prix mensuel en avant)
- **Agence**: À propos OSOM craftsman
- **Contact**: Formulaire + CTA audit gratuit
- **Outils**: SEO Audit gratuit + Calculateur ROI
- **SEO Local**: Valais (hub principal), Lausanne, Genève, Fribourg, Neuchâtel

### Navigation
**Navbar craftsman premium (Header.tsx)**:
- Logo OSOM | **Services ▼** | Portfolio | Agence | **Audit gratuit** | Contact
- Dropdown Services: 3 packages (Essentiel, Performance POPULAIRE, Sur Mesure ELITE, Optimisation) + Ressources (Audit SEO, ROI Calculator)
- Design: font-light, espacement ml-auto mr-8 space-x-12, CTAs subtils
- NO EMOJIS (explicitement demandé par utilisateur)
- **Prix supprimés du navbar** (navbar décombré, descriptions uniquement)

---

## 🎯 RÈGLES OBLIGATOIRES

### Design & UX
- **NO EMOJIS**: Interdit dans l'ensemble du site (demande explicite utilisateur)
- **Phare interactif**: Hero homepage SIGNATURE - NE JAMAIS MODIFIER sans validation
- **Font**: Cera PRO (primary), Inter (fallback)
- **Spacing**: Navigation aérée, CTAs fins et élégants
- **Mobile-first**: Responsive total, touch-friendly
- **Typographie**: Convention française - pas de Majuscules Multiples (sauf noms propres, acronymes, produits)

### Pricing UX
- **Approche douce**: Prix mensuel EN GROS (text-3xl à text-6xl), total EN PETIT (text-xs, gris)
- **Psychologie**: Montant mensuel moins intimidant que total
- **Transparence**: Total toujours visible mais discret
- **Cohérence**: Appliqué sur TOUTES les pages pricing (services, premium-b2b, optimisation-continue)

### UX Flow Services
- **Ordre optimal**: Hero → Valeur → Confiance → Qualification → Prix → Action
- **Logique**: Démontrer valeur et rassurer AVANT de qualifier et montrer prix
- **Consistance**: Appliqué sur les 3 pages packages (Essentiel, Performance, Sur Mesure)

### Contenu
- **Anonymat clients**: Sauf projets OSOM réels validés (H-Sechement, LMDI, Maîtrise Cathédrale)
- **Devise**: Tous montants en CHF uniquement
- **Langue**: Français ONLY (Phase 1) - Multilingue planifié 2026
- **Metrics**: Données GA4 vérifiées uniquement, pas de KPIs fantaisistes

### Validation Process
1. **WebFetch FIRST**: Vérifier site live avant analyse
2. **Cross-check code**: Grep/Read pour confirmer état
3. **No assumptions**: Toujours vérifier avant affirmer
4. **Build sans erreur**: Obligatoire avant commit

---

## 🚀 COMMANDES ESSENTIELLES

```bash
npm run dev          # Serveur développement (port 3004)
npm run build        # Build production (vérifier 0 erreurs)
npm run lint         # Vérification code
git add -A && git commit -m "message" && git push  # Déploiement auto Vercel
```

---

## 📂 STRUCTURE PROJET

### Repositories
- **osom-webproject-2025**: Site principal production (ce repo)
- **JDW-Portfolio-2025**: Projet client en développement
- **WORKSPACE-OSOM**: Tous projets clients OSOM
  - `/CLIENTS-ACTIFS/H-SECHEMENT`
  - `/CLIENTS-ACTIFS/LMDI`
  - `/CLIENTS-ACTIFS/MAITRISE-CATHEDRALE`
  - `/CLIENTS-ACTIFS/JDW-PORTFOLIO`

### Data Files
- `/data/packages-craftsman.json`: Définitions packages complets
- `/data/case-studies/h-sechement.json`: Case study H-Sechement
- `/data/case-studies/lmdi.json`: Case study LMDI
- `/data/case-studies/maitrise-cathedrale.json`: Case study Maîtrise Cathédrale
- `/data/swissCities.ts`: SEO local Suisse (Valais focus)

### Key Components
- **Header.tsx**: Navbar craftsman premium (ml-auto spacing, dropdown packages, prix supprimés)
- **HeroSwissOSOMHybrid.tsx**: Hero phare interactif SIGNATURE
- **ScrollProgressIndicator**: Toutes pages sauf contact
- **CityPageTemplate**: Template SEO local réutilisable

---

## 💰 STRATÉGIE ACQUISITION 400K CHF

### Clients Actuels (10 clients qualité)
**Tier 1 - Premium B2B (upselling immédiat)**:
- H-SECHEMENT: 600 → 3,000 CHF/mois target
- LMDI: 800 → 2,500 CHF/mois target

**Tier 2 - Business Premium**:
- DR-BOURDIN-SION: 2K/mois
- CABINET-AVOCAT-TEST: 2K/mois
- MAITRISE-CATHEDRALE: 1.5K/mois
- JDW-PORTFOLIO: 1.5K/mois

**Tier 3 - Professional**:
- ARTISANE-LUMIERE (CTR 14.47% exceptionnel)
- DR-DELHASSE
- CHANDOLINE

### Plan Acquisition 2026
**Phase 1**: Repricing clients actuels → +49K/an
**Phase 2**: 5 nouveaux clients premium (2 B2B Technique, 2 E-commerce, 1 Pro) → +156K/an
**Total Année 1**: +205,200 CHF/an

### Canaux
1. **LinkedIn Sales Navigator**: 10 contacts/jour ciblés
2. **Google Ads**: 500 CHF/mois → landing /premium-b2b
3. **Email direct**: 5 emails personnalisés/jour
4. **Références clients**: Programme parrainage

---

## 🔧 PROBLÈMES CONNUS & SOLUTIONS

### ✅ Résolus
- Images WebP: -84% taille (commit b8f4808)
- FOUC Google Fonts: display: swap
- Navbar craftsman: espacement optimisé (commit 7ced075)
- Paroisse Nendaz removed: projet personnel exclu (commit da0381a)
- Pricing UX: Approche douce mensuelle appliquée (commit 64197fa)
- UX Flow: Ordre sections optimisé (commit 791a5c8)
- Typographie: Majuscules multiples corrigées (commit c690ce5)
- Hero Performance: Design magazine éditorial VOYAGE (commit d504e2f)
- Audit SEO: API réelle Google PageSpeed + Cheerio scraping (commit d504e2f)

### 🎯 Priorités Actuelles
- [ ] Configurer GOOGLE_PAGESPEED_API_KEY pour scores performance réels
- [ ] Ajouter génération PDF rapport audit (phase 2)
- [ ] Finaliser case study JDWaeber (après déploiement projet)
- [ ] Enrichir portfolio: 5+ case studies avec GA4 data
- [ ] Blog activation: Réactiver menu + articles existants

---

## 📝 NOTES IMPORTANTES

### Hero "Phare" - SIGNATURE DESIGN
Le phare interactif (lighthouse) sur homepage est LA signature visuelle OSOM. Labels services actualisés:
- CONCEPTION (Architecture × UX)
- DÉVELOPPEMENT (Next.js × Performance)
- SEO LOCAL (Positions × Conversions)
- OPTIMISATION (Analytics × A/B Tests)

**NE JAMAIS modifier sans validation explicite utilisateur.**

### Pricing Philosophy
Le modèle craftsman OSOM est unique:
- **Essentiel**: Site livré + accompagnement mensuel actif
- **Performance/Sur Mesure**: Partenariat mensuel tout compris (modèle innovant)

Cette distinction est CRUCIALE pour le positionnement premium et doit être communiquée clairement sur toutes les pages packages.

**Approche douce**: Montant mensuel EN AVANT, total EN BAS (psychologie conversion)

### UX Flow Philosophy
**Hook → Valeur → Confiance → Qualification → Prix → Action**

Cette séquence suit le parcours mental du visiteur:
1. Être intrigué (Hero)
2. Comprendre la valeur (What's Included)
3. Avoir confiance (Process/Partenariat/Garanties)
4. Se reconnaître ("C'est pour moi")
5. Accepter le prix (après conviction)
6. Passer à l'action (CTA)

### SEO Local Strategy
- **Valais**: Hub principal (H-Sechement case study)
- **Sion**: SUPPRIMÉ et remplacé par Valais (décision stratégique)
- **Autres villes**: Lausanne, Genève, Fribourg, Neuchâtel (contenu générique)

### Contact
**Email**: hello@osom.ch
**Téléphone**: +41 79 128 95 49
**Adresse**: Rue de Clodevis 13, 1er étage, 1967 Bramois, Valais

---

*Dernière mise à jour: 8 Octobre 2025 - Hero Performance VOYAGE + Audit SEO réel API (Google PageSpeed + Cheerio)*
