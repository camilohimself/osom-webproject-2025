# Stratégie de Tracking GA4 Business-First - OSOM

## 🎯 Objectif

Tracker les événements qui révèlent **quel tunnel convertit le mieux** et **quels CTA génèrent des leads qualifiés**, sans alourdir le site (performance 90+ maintenue).

---

## 📊 ÉVÉNEMENTS BUSINESS CRITIQUES

### 1. CONVERSIONS PRIMAIRES (💰 Revenue Direct)

Ces événements = argent direct. Priorité absolue.

| Événement | Déclencheur | Valeur Business | Tunnel |
|-----------|-------------|-----------------|--------|
| `lead_qualified` | Formulaire contact soumis | Lead qualifié 2,500-4,000 CHF/mois | Contact → Lead |
| `seo_audit_requested` | Audit SEO soumis avec email | Lead qualifié 1,500-2,500 CHF/mois | Outils → Audit → Lead |
| `questionnaire_completed` | Questionnaire complet soumis | Lead ultra-qualifié 4,000+ CHF/mois | Questionnaire → Lead |
| `phone_click` | Clic téléphone (+41 79 128 95 49) | Contact direct immédiat | CTA → Call |
| `whatsapp_click` | Clic WhatsApp | Contact direct immédiat | CTA → WhatsApp |

**Impact**: Ces 5 événements représentent 100% du pipeline leads.

---

### 2. MICRO-CONVERSIONS (🔥 Intent Signals)

Signaux d'intention forte = leads potentiels à nurturer.

| Événement | Déclencheur | Signification | Score Intent |
|-----------|-------------|---------------|--------------|
| `package_viewed` | Visite page /services/essentiel, /performance, /sur-mesure | Considération active | +3 |
| `pricing_revealed` | Scroll jusqu'à section pricing | Intent achat fort | +5 |
| `case_study_viewed` | Visite page réalisations | Recherche de preuve sociale | +2 |
| `calculator_used` | Utilisation calculateur ROI | Évalue coût/bénéfice | +4 |
| `cta_clicked` | Clic sur CTA principal (non-conversion) | Intent mais friction | +2 |
| `email_click` | Clic email hello@osom.ch | Contact moins engagé que phone | +1 |

**Impact**: Permet de scorer les visiteurs et prioriser le follow-up.

---

### 3. ENGAGEMENT QUALITATIF (📈 Journey Insights)

Comprendre le parcours utilisateur pour optimiser le funnel.

| Événement | Déclencheur | Insight | Optimisation |
|-----------|-------------|---------|--------------|
| `scroll_depth` | Scroll 25%, 50%, 75%, 90% | Engagement contenu | Identifier pages faibles |
| `time_on_page` | Temps passé >30s, >60s, >120s | Lecture approfondie | Contenu engageant ou confusion? |
| `navigation_path` | Séquence pages visitées | Tunnel naturel | Optimiser navigation |
| `exit_page` | Page de sortie | Points de friction | Ajouter CTA/clarifier |
| `mobile_cta_bar_used` | Clic barre CTA mobile sticky | Efficacité mobile CTA | A/B test variantes |

---

## 🛤️ TUNNELS DE CONVERSION À MESURER

### Tunnel 1: DISCOVERY → PACKAGE → CONTACT (Principal)

```
Homepage → Services → Package spécifique → Contact → Lead
```

**Événements trackés**:
1. `page_view` (Homepage)
2. `package_card_clicked` (Homepage)
3. `page_view` (/services/performance)
4. `pricing_revealed` (Scroll pricing section)
5. `cta_clicked` ("Démarrer maintenant")
6. `page_view` (/contact)
7. `lead_qualified` (Form submit)

**Métrique clé**: Taux de conversion Homepage → Lead (Target: 2-3%)

---

### Tunnel 2: SEO TOOL → AUDIT → LEAD (Lead Magnet)

```
Google Search → Outils → Audit SEO → Email → Lead notification
```

**Événements trackés**:
1. `page_view` (/outils)
2. `audit_form_started` (URL saisie)
3. `audit_generated` (Résultats affichés)
4. `audit_email_entered` (Email capture)
5. `seo_audit_requested` (Submit)

**Métrique clé**: Taux de conversion Audit → Email (Target: 15-20%)

---

### Tunnel 3: MOBILE STICKY CTA → DIRECT CONTACT (Quick Win)

```
Any page Mobile → Sticky CTA bar → Phone/WhatsApp click
```

**Événements trackés**:
1. `mobile_cta_bar_visible` (Barre affichée)
2. `phone_click` OU `whatsapp_click`

**Métrique clé**: CTR Sticky CTA (Target: 5-8%)

---

### Tunnel 4: REALISATIONS → CASE STUDY → CONTACT (Social Proof)

```
Homepage → Réalisations → Case study → Contact
```

**Événements trackés**:
1. `page_view` (/realisations)
2. `case_study_clicked` (Projet spécifique)
3. `metrics_viewed` (Scroll metrics section)
4. `cta_clicked` ("Résultats similaires")
5. `lead_qualified`

**Métrique clé**: Taux de conversion Réalisations → Lead (Target: 3-5%)

---

## 🎨 CTA À TRACKER (Par ordre de priorité)

### Homepage (6 CTA critiques)

1. **"Démarrer maintenant"** (Hero) → `cta_hero_primary`
2. **Cards packages** (3x: Essentiel, Performance, Sur Mesure) → `package_card_clicked`
3. **"079 128 95 49"** (Mobile direct call) → `phone_click`
4. **"Consultation 30 min gratuite"** (Mobile) → `cta_consultation_mobile`
5. **"Audit gratuit 30 min"** (Desktop CTA section) → `cta_audit_desktop`
6. **"Portfolio projets"** (Desktop CTA section) → `cta_portfolio_desktop`

### Page Outils (2 CTA critiques)

1. **Audit SEO submit** → `seo_audit_requested`
2. **"Stratégie Gratuite"** (Bottom CTA) → `cta_strategie_gratuite`

### Page Services (4 CTA par package)

1. **"Découvrir le package"** (Link vers page dédiée) → `package_discover_clicked`
2. **Prix revealed** (Scroll to pricing) → `pricing_revealed`
3. **"Démarrer maintenant"** (Page package) → `cta_package_start`

### Global (3 CTA toujours présents)

1. **Header "Audit gratuit"** → `header_audit_clicked`
2. **Header "Contact"** → `header_contact_clicked`
3. **Footer email/phone** → `footer_contact_clicked`

**Total CTA trackés**: 18 points de conversion

---

## ⚡ IMPLÉMENTATION OPTIMISÉE (Performance-First)

### Stratégie 1: Tracking Léger avec `data-attributes`

Au lieu de multiplier les événements JS lourds, utiliser **data-attributes** sur les éléments critiques:

```tsx
// ✅ MÉTHODE OPTIMISÉE
<a
  href="/contact"
  data-ga-event="cta_clicked"
  data-ga-category="conversion"
  data-ga-label="hero_primary"
  data-ga-value="high_intent"
>
  Démarrer maintenant
</a>
```

Un seul **Event Listener global** capture tous les clics:

```typescript
// Global Click Tracker (dans AnalyticsScripts.tsx)
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-ga-event]')
  if (target) {
    trackEvent({
      action: target.dataset.gaEvent,
      category: target.dataset.gaCategory,
      label: target.dataset.gaLabel,
      value: target.dataset.gaValue
    })
  }
}, { passive: true }) // passive = performance++
```

**Avantage**:
- 1 seul listener au lieu de 18 listeners = -17 event bindings
- Pas de re-render React
- Performance maintenue

---

### Stratégie 2: Tracking Différé (Après interaction)

Events non-critiques trackés en **idle time**:

```typescript
// Track après que l'utilisateur soit "idle" (pas d'impact UX)
requestIdleCallback(() => {
  trackEvent({
    action: 'page_engaged',
    category: 'engagement',
    label: window.location.pathname
  })
})
```

---

### Stratégie 3: Batching des événements

Grouper plusieurs événements en 1 seul appel API:

```typescript
// Au lieu de 5 appels GA4 individuels...
const eventQueue = []

// Batch send toutes les 5 secondes
setInterval(() => {
  if (eventQueue.length > 0) {
    gtag('event', 'batch_events', {
      events: eventQueue
    })
    eventQueue.length = 0
  }
}, 5000)
```

---

## 📐 CUSTOM DIMENSIONS OSOM

Pour enrichir les événements sans multiplier les events:

| Dimension | Valeurs possibles | Usage |
|-----------|-------------------|-------|
| `user_type` | `first_visit`, `returning`, `high_intent` | Segmenter audience |
| `package_interest` | `essentiel`, `performance`, `sur_mesure` | Quel package attire |
| `business_size` | `solo`, `pme`, `corporate` | Qualifier leads |
| `traffic_source` | `organic`, `direct`, `referral`, `paid` | Attribution ROI |
| `device_category` | `mobile`, `tablet`, `desktop` | Optimisation device |

**Config GA4**:

```javascript
gtag('config', 'G-N5WDPZM7RJ', {
  custom_map: {
    'dimension1': 'user_type',
    'dimension2': 'package_interest',
    'dimension3': 'business_size',
    'dimension4': 'traffic_source',
    'dimension5': 'device_category'
  }
})
```

---

## 🎯 FUNNELS GA4 À CONFIGURER

### Funnel 1: Package Discovery

```
Step 1: Homepage view
Step 2: Package card clicked
Step 3: Package page viewed
Step 4: Pricing revealed (scroll)
Step 5: CTA clicked
Step 6: Contact page viewed
Step 7: Lead submitted
```

**Objectif**: Identifier les étapes de drop-off

---

### Funnel 2: SEO Audit Lead

```
Step 1: /outils viewed
Step 2: Audit form started
Step 3: Results generated
Step 4: Email entered
Step 5: Audit requested (conversion)
```

**Objectif**: Optimiser le taux de capture email (étape critique)

---

### Funnel 3: Mobile Quick Contact

```
Step 1: Any page (mobile)
Step 2: Scroll (sticky CTA visible)
Step 3: CTA clicked
Step 4: Phone/WhatsApp click
```

**Objectif**: Mesurer l'efficacité du sticky CTA mobile

---

## 📊 DASHBOARDS GA4 RECOMMANDÉS

### Dashboard 1: "Conversion Performance"

**Widgets**:
1. Leads total (7 derniers jours vs période précédente)
2. Taux de conversion par tunnel
3. Top 5 CTA performers
4. Leads par source (Organic, Direct, Referral)
5. Leads par package (Essentiel vs Performance vs Sur Mesure)

### Dashboard 2: "User Journey"

**Widgets**:
1. Parcours utilisateurs types (Sankey diagram)
2. Pages de sortie avec bounce rate
3. Temps moyen par étape funnel
4. Scroll depth moyen par page
5. Navigation path analysis

### Dashboard 3: "Mobile vs Desktop"

**Widgets**:
1. Conversions mobile vs desktop
2. CTR sticky CTA mobile
3. Temps de chargement par device
4. Top CTA par device
5. Bounce rate par device

---

## 🚀 PLAN D'IMPLÉMENTATION

### Phase 1: Events Critiques (Semaine 1)

- [ ] Conversions primaires (5 events)
- [ ] CTA homepage (6 events)
- [ ] Audit SEO tool (3 events)
- [ ] Test en local avec GA4 DebugView

### Phase 2: Micro-conversions (Semaine 2)

- [ ] Package viewed (3 events)
- [ ] Pricing revealed (3 events)
- [ ] Calculator used
- [ ] Test funnels GA4

### Phase 3: Engagement (Semaine 3)

- [ ] Scroll depth
- [ ] Time on page
- [ ] Navigation paths
- [ ] Exit pages

### Phase 4: Optimisation (Semaine 4)

- [ ] Dashboards GA4 custom
- [ ] Segments utilisateurs
- [ ] Audiences remarketing
- [ ] A/B tests setup

---

## 🎓 EXEMPLES CONCRETS

### Exemple 1: Tracker Package Card Click (Homepage)

**Avant (lourd)**:
```tsx
<a onClick={() => {
  gtag('event', 'package_clicked', {...})
}}>
  Package Essentiel
</a>
```

**Après (optimisé)**:
```tsx
<a
  href="/services/essentiel"
  data-ga-event="package_card_clicked"
  data-ga-category="navigation"
  data-ga-label="essentiel"
  data-ga-value="3"
>
  Package Essentiel
</a>
```

---

### Exemple 2: Tracker Scroll to Pricing

```typescript
// Intersection Observer = performance++
const pricingSection = document.querySelector('#pricing')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      trackEvent({
        action: 'pricing_revealed',
        category: 'engagement',
        label: window.location.pathname,
        value: 5
      })
      observer.disconnect() // Track une seule fois
    }
  })
}, { threshold: 0.5 })

observer.observe(pricingSection)
```

---

## ✅ CHECKLIST FINAL

**Performance**:
- [ ] Aucun event blocking (tous async/defer)
- [ ] Event listeners en mode `passive`
- [ ] Batching activé pour events non-critiques
- [ ] PageSpeed maintenu 90+

**Business**:
- [ ] 5 conversions primaires trackées
- [ ] 18 CTA critiques trackés
- [ ] 4 funnels configurés dans GA4
- [ ] 3 dashboards créés

**Data Quality**:
- [ ] Events testés en DebugView
- [ ] Custom dimensions configurées
- [ ] Segments créés (First visit, High intent, etc.)
- [ ] Documentation équipe à jour

---

*Stratégie créée le 21 Janvier 2025 - OSOM Digital Craftsman*
