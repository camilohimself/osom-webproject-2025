# OSOM WebProject 2025 - Guide Technique

## 🚨 STATUS CRITIQUE ACTUEL
**Site local** : ✅ localhost:3001 fonctionnel
**Production** : ❌ Vercel/Netlify DOWN (Erreur 500)
**Cause** : Next.js 15.4.1 incompatible déploiement
**Urgence** : CRITIQUE - Sites clients inaccessibles

## 🛡️ RÈGLES OBLIGATOIRES

### Validation Process
- **WebFetch FIRST** : Vérifier site live avant toute analyse
- **Cross-check code** : Grep/Read pour confirmer état
- **No assumptions** : Toujours vérifier avant affirmer

### Politique Contenu
- **Anonymat** : "Client PME", "Entreprise locale" (jamais noms réels)
- **Devise** : Tous montants en CHF
- **Design** : NO emojis, interface clean uniquement
- **KPI** : Suppression métriques non-vérifiables

### Lifting Methodology
1. DIAGNOSTIC → SUPPRESSION → CONDENSATION
2. KPI unique par page
3. Target : -40% lignes code
4. Build sans erreur obligatoire

## 📊 ARCHITECTURE SITE

### Pages Actives
- Homepage + 6 services + agence + contact + outils + légales
- Gaming : Pong desktop + Tic-Tac-Toe mobile
- Progress bars : Toutes pages sauf contact

### Stack Technique
- Next.js 15 + TypeScript + Tailwind + Framer Motion
- Responsive mobile-first avec hooks `useMediaQuery`
- Components : ServicePageMobile, ContactMobile, GaugeChart automotive

### KPI Réels Utilisés
- Culture Peinture : 688 vs 49 conversions
- Artisane Lumière : 68.6% vs 44.6% engagement
- Données GA4 vérifiées sur 200+ jours

## 🎯 COMMANDES ESSENTIELLES
```bash
npm run dev          # Serveur développement (port 3001)
npm run build        # Build production
npm run lint         # Vérification code
```

## 📝 REPOS DISTINCTS
- `osom-webproject-2025` : Site principal production
- `osom-lab` : R&D Camilo (expérimentations)

## 🔧 PROBLÈMES CONNUS
1. **FOUC Google Fonts** : ✅ Résolu avec `display: swap`
2. **CTA pollution visuelle** : ✅ Corrigé overflow
3. **Gauge needles** : ✅ Style automotive appliqué
4. **Déploiement** : ❌ CRITIQUE - Next.js 15 config requise

## 💡 DONNÉES IMPORTANTES
**Contact** : +41 79 128 95 49 | hello@osom.ch
**Adresse** : Rue de Clodevis 13, 1967 Bramois
**Build status** : 47 pages générées localement
**Performance** : Mobile-first optimized

## 🎯 INSIGHTS MARKETING CRITIQUES

### Personas Validés OSOM
**Georges Bonvin - "Le PME Sceptique"** (45 ans, Directeur construction)
- Frein : "Mon neveu peut faire un site pour 500.-"
- Déclencher : ROI concret, cas clients similaires
- Besoin : Crédibilité digitale face concurrents romands

**Marie Dubuis - "L'Artiste Ambitieuse"** (32 ans, Violoniste/Directrice artistique)
- Budget serré mais vision claire
- Déclencher : Portfolio culturel, process rapide
- Besoin : Paraître établie pour subventions

**Dr. Sarah Meier - "La Professionnelle Exigeante"** (38 ans, Médecin spécialiste)
- Habituée premium (Mercedes, Rolex discrète)
- Déclencher : Process clair, réactivité, références premium
- Besoin : Site qui reflète standing sans ostentation

### Stratégie Swiss-Credible Validée
- **PROBLÈME IDENTIFIÉ** : KPIs "américains" (688, ROI 14x, 99.3%) contreproductifs en Suisse
- **INSIGHT** : Digital suisse "encore au moyen âge" - méfiance des gros chiffres
- **SOLUTION** : Adoucissement pour crédibilité locale + case studies verrouillés
- **APPROCHE** : Portfolio AVANT promesses, montrer vs raconter

### Campagne Acquisition Testée
- **Budget** : 100 CHF/semaine Meta Ads
- **Ciblage** : CEO PME VALAIS (30-55 ans, Services/B2B/Retail)
- **Objectifs** : 25-30 leads, 8-12 consultations, ROI 300%+
- **14 Punchlines** : "Prouvez-nous impossible" → "Timer final"
- **Timing** : Séquentiel 14 jours + timer 48h urgence

### Psychologie Conversion CRO
**Scan-Decide-Act (60 sec max)** :
- Hero 5 sec : Métrique choc + urgence
- Social proof visuel immédiat
- CTA final : "2 places restantes" + friction zéro
- Mobile-first radical : Touch-friendly + loading < 2sec

### Formule OSOM Validée
**DONNÉES + CRÉATIVITÉ + HUMOUR = 140x Results**
- Transparence totale + portfolio accessible
- Solution universelle : Méfiance agences + besoin crédibilité + peur prix
- Focus cas d'usage réels vs métriques fantaisistes

### Pricing Strategy Swiss
- **OSOM Web Formula** : 4,500 CHF (vs initial 1,500 CHF)
- **Délai** : 45 jours ouvrés (transparence process)
- **Positionnement** : Premium accessible, pas luxury inaccessible

## 🚀 OPPORTUNITÉS STRATÉGIQUES IDENTIFIÉES

### 1. OFFRES SEGMENTÉES PAR PERSONA

**Package "Georges" - PME Pragmatique** (2,500 CHF)
- Site vitrine + GA4 setup
- 1 case study concurrent local inclus
- Formation équipe interne (2h)
- Message : "Votre concurrent a déjà commencé"

**Package "Marie" - Créatif Budget** (1,800 CHF)
- Portfolio optimisé subventions
- SEO local culturel Valais
- Template newsletter inclus
- Message : "Portfolio qui impressionne les jurys"

**Package "Sarah" - Premium Discret** (6,500 CHF)
- Design haut de gamme
- Rédaction copywriting premium
- Maintenance 6 mois incluse
- Message : "Excellence sans ostentation"

### 2. STRATÉGIE ACQUISITION MULTI-CANAL

**Canal 1 : Meta Ads Localisé**
- Ciblage géographique : Sion, Sierre, Martigny
- Créatifs adaptés : "Votre concurrent sierrois a déjà..."
- Budget test : 300 CHF/mois

**Canal 2 : LinkedIn ABM**
- Ciblage : Dirigeants 100+ employés Valais
- Content : Case studies anonymisés
- Approche : Soft outreach + valeur ajoutée

**Canal 3 : Réseau Local**
- Partenariats comptables/notaires
- Événements Chambre Commerce
- Recommandations cross-business

### 3. MESSAGING ANTI-AGENCE DIFFÉRENCIANT

**Pain Points Agences Traditionnelles** :
- "Promesses sans preuves" → **OSOM : Portfolio vérifiable**
- "Facturations cachées" → **OSOM : Prix fixe transparent**
- "Délais élastiques" → **OSOM : 45 jours garantis**
- "Jargon technique" → **OSOM : Langage business**

**Positionnement Unique** :
"La seule agence du Valais qui prouve avant de promettre"

### 4. PRODUCT LADDER ÉVOLUTIF

**Entrée de gamme** : Audit gratuit (Lead magnet)
**Niveau 1** : Site vitrine (2,500 CHF)
**Niveau 2** : Site + SEO (4,500 CHF)
**Niveau 3** : Écosystème complet (8,000 CHF)
**Premium** : Consulting stratégique (1,500 CHF/jour)

### 5. CONTENT MARKETING LOCALISÉ

**Blog Topics Valaisans** :
- "Pourquoi les PME valaisannes résistent au digital"
- "Case study : Comment [Secteur] cartonne avec 688 leads"
- "Digital en Valais : Stop aux excuses, place aux résultats"

**SEO Local** :
- "Agence web Sion"
- "Marketing digital Valais"
- "Site internet PME Sierre"

### 6. OBJECTIONS HANDLING SYSTEMATIQUE

**"C'est trop cher"** → ROI Calculator personnalisé
**"On n'a pas le temps"** → Process clés en main démontré
**"Notre secteur est différent"** → Case study secteur similaire
**"Mon neveu peut le faire"** → Comparatif amateur vs pro

### 7. RETENTION & UPSELL

**Phase 1** : Site livré → Newsletter mensuelle résultats
**Phase 2** : 3 mois → Audit performance gratuit
**Phase 3** : 6 mois → Proposition optimisations
**Phase 4** : 12 mois → Évolution/refonte

**Upsell naturels** :
- Formation équipe interne
- Gestion réseaux sociaux
- Optimisations continues
- Sites additionnels (multilingue)

---
*Dernière mise à jour : 19 Sept 2025*