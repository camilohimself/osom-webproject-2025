# Guide Migration GA4 V1 → V2 OSOM

## 📊 Stratégie Migration Progressive

### Phase 1 - Préparation (À faire MAINTENANT)

#### 1. Audit GA4 V1 Actuel
```bash
# Actions à faire sur votre compte GA4 actuel
1. Noter votre GA4 Measurement ID actuel (format: G-XXXXXXXXXX)
2. Exporter les données importantes :
   - Audiences personnalisées
   - Objectifs/Conversions configurés
   - Événements personnalisés
   - Rapports personnalisés
```

#### 2. Création Nouveau GA4 V2 (Développement)
```bash
# Dans Google Analytics
1. Créer nouvelle propriété GA4 "OSOM V2 - DEV"
2. Noter nouveau Measurement ID (G-YYYYYYYYYY)
3. Garder SÉPARÉMENT du V1 pendant développement
```

### Phase 2 - Implémentation Dual Tracking (EN COURS)

#### Code Integration Next.js
```typescript
// src/lib/analytics.ts
export const GA_TRACKING_ID_V1 = 'G-XXXXXXXXXX' // V1 Actuel
export const GA_TRACKING_ID_V2 = 'G-YYYYYYYYYY' // V2 Nouveau

// Dual tracking pendant transition
export const trackEvent = (action: string, category: string, data?: any) => {
  // Track sur V1 ET V2 simultanément
  gtag('event', action, {
    event_category: category,
    ...data
  })
}
```

### Phase 3 - Migration Données (Après mise en ligne V2)

#### Checklist Migration
- [ ] Export segments V1 → Import V2
- [ ] Reconfiguration objectifs conversion
- [ ] Test événements personnalisés
- [ ] Migration dashboards Looker Studio
- [ ] Formation équipe nouveau dashboard

### Phase 4 - Switch Final (DNS Basculement)

#### Actions Post-Migration
1. **Redirection 301** : V1 → V2 pour toutes pages
2. **GSC Update** : Nouveau sitemap submission
3. **Monitoring 7 jours** : Comparaison données V1/V2
4. **Désactivation V1** : Après validation complète

## 🎯 Lead Capture Events Tracking

### Événements à Migrer
```typescript
// SEO Audit Tool
'seo_audit_started' → GA4 V2
'seo_audit_completed' → GA4 V2
'seo_audit_lead_captured' → GA4 V2

// ROI Calculator
'roi_calculation_started' → GA4 V2
'roi_calculation_completed' → GA4 V2
'roi_calculator_lead_captured' → GA4 V2
```

## 📋 Timeline Migration

| Semaine | Action | Responsable |
|---------|--------|-------------|
| S1 | Audit V1 + Création V2 | Camilo |
| S2 | Implémentation dual tracking | Claude |
| S3 | Tests + Validation données | Camilo + Claude |
| S4 | Switch DNS + Migration finale | Camilo |

## ⚠️ Points Attention

1. **Période transition** : Données V1/V2 différentes normalement
2. **Historical data** : V1 reste accessible 3 mois post-migration
3. **Backup complet** : Export données V1 avant switch final
4. **Team training** : Nouvelle interface GA4 V2

---

**Status actuel** : Phase 1 - Préparation
**Prochaine étape** : Audit V1 + Création V2 Dev

*Document mis à jour le 23 juillet 2025*