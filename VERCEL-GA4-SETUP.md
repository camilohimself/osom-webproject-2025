# Configuration GA4 sur Vercel - OSOM STREAM

## 📋 Variables détectées sur osom.ch

D'après Google Tag Manager, ces IDs sont déjà installés sur le site :
- **Measurement ID** : `G-Q4M6M1J1FJ`
- **GTM Container ID** : `GT-5MXHDSKH`
- **Destination** : G-Q4M6M1J1FJ
- **Stream Name** : OSOM STREAM

---

## 🚀 Configuration Vercel (Production)

### Étape 1 : Aller sur Vercel Dashboard

1. Ouvrir https://vercel.com/dashboard
2. Sélectionner le projet **osom-webproject-2025**
3. Aller dans **Settings** > **Environment Variables**

### Étape 2 : Ajouter les variables GA4

Ajouter ces variables d'environnement pour **Production**, **Preview** et **Development** :

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `NEXT_PUBLIC_GA_ID` | `G-Q4M6M1J1FJ` | Production, Preview, Development |
| `NEXT_PUBLIC_GTM_ID` | `GT-5MXHDSKH` | Production, Preview, Development |

### Étape 3 : Redéployer

Une fois les variables ajoutées :
1. Aller dans **Deployments**
2. Cliquer sur le dernier déploiement
3. Cliquer sur **⋯** (3 points) > **Redeploy**
4. Ou simplement faire un nouveau `git push`

---

## ✅ Vérification Post-Déploiement

### 1. Vérifier dans le code source du site

Ouvrir https://osom.ch et inspecter le code source (`Ctrl+U` ou `Cmd+Option+U`).

Chercher :
```html
<script src="https://www.googletagmanager.com/gtag/js?id=G-Q4M6M1J1FJ"></script>
```

### 2. Vérifier dans Google Tag Assistant

1. Installer l'extension Chrome : [Tag Assistant](https://tagassistant.google.com/)
2. Ouvrir https://osom.ch
3. Vérifier que le tag `G-Q4M6M1J1FJ` se déclenche

### 3. Vérifier dans GA4 Real-Time

1. Ouvrir Google Analytics 4
2. Aller dans **Reports** > **Realtime**
3. Visiter https://osom.ch dans un autre onglet
4. Vérifier qu'un utilisateur actif apparaît

---

## 📊 Événements Trackés Automatiquement

Le setup OSOM track automatiquement :

### Événements GA4 Standard
- ✅ `page_view` - Chaque visite de page
- ✅ `session_start` - Début de session avec attribution
- ✅ `scroll` - Scroll profondeur 25%, 50%, 75%, 90%
- ✅ `click` - Clics sur liens externes

### Événements Custom OSOM
- ✅ `web_vitals` - LCP, FID, CLS (performance)
- ✅ `conversion` - Soumission formulaire contact
- ✅ `lead_generated` - Lead qualifié avec intent score
- ✅ `interactive_element` - Interactions avec éléments premium
- ✅ `attribution_touchpoint` - Multi-touch attribution
- ✅ `ab_test_view` / `ab_test_conversion` - A/B tests

### Custom Dimensions
- `user_type` - Type utilisateur (prospect, client, partenaire)
- `engagement_level` - Niveau engagement (low, medium, high)
- `business_intent` - Intent business (discovery, evaluation, decision)

---

## 🔧 Tracking Avancé Inclus

### 1. Web Vitals (Performance)
```javascript
// Automatic tracking de :
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
```

### 2. Attribution Multi-Touch
```javascript
// Track automatique :
- UTM parameters (source, medium, campaign, content, term)
- Referrer domain
- Landing page
- Touchpoint sequence (10 derniers touchpoints)
```

### 3. Lead Quality Scoring
```javascript
// Intent score automatique basé sur :
- Pages visitées (/contact = +3, /services = +2, /realisations = +1)
- Temps passé sur site
- Scroll depth
- Interactions avec CTAs
```

---

## 🎯 Dashboard GA4 Recommandé

### Créer un Dashboard Custom "OSOM Performance"

**Widgets à ajouter :**

1. **Trafic Temps Réel**
   - Users actifs par ville (Sion, Sierre, Martigny)
   - Pages vues temps réel

2. **Acquisition Sources**
   - Top 5 sources (Google Organic, Direct, Referral, etc.)
   - UTM campaigns performance
   - Landing pages top performers

3. **Engagement**
   - Average engagement time
   - Pages per session
   - Scroll depth distribution

4. **Conversions**
   - Lead generated (total + par source)
   - Form submissions (Contact, Audit, Calculateur ROI)
   - Phone clicks, Email clicks

5. **Performance Technique**
   - Web Vitals scores (LCP, FID, CLS)
   - Page load time distribution
   - Pages avec CLS > 0.1 (problématiques)

6. **Business Intent**
   - Users par niveau d'intent (high/medium/low)
   - Parcours décision (discovery → evaluation → decision)
   - Time to conversion

---

## 🔒 Privacy & GDPR

Le setup actuel respecte :
- ✅ `anonymize_ip: true` - IP anonymisées
- ✅ `allow_google_signals: false` - Pas de tracking cross-device
- ✅ `allow_ad_personalization_signals: false` - Pas de remarketing
- ✅ Cookie consent géré par `useCookieConsent` hook

---

## 📱 Hotjar (Optionnel)

Si tu veux activer Hotjar pour heatmaps et session recordings :

1. Créer compte sur https://www.hotjar.com
2. Récupérer le Hotjar Site ID
3. Ajouter variable Vercel :
   - `NEXT_PUBLIC_HOTJAR_ID` = `XXXXXXX`

---

## 🚨 Troubleshooting

### Le tag ne se déclenche pas ?

1. **Vérifier la console browser** :
   ```javascript
   // Devrait afficher :
   "📊 GA4 loaded successfully"
   "🚀 OSOM Analytics initialized"
   ```

2. **Vérifier que NEXT_PUBLIC_GA_ID est défini** :
   ```bash
   # Dans Vercel Dashboard > Settings > Environment Variables
   # Devrait être : G-Q4M6M1J1FJ
   ```

3. **Vérifier dans Network tab** :
   - Chercher requête vers `https://www.google-analytics.com/g/collect`
   - Si présente = tracking fonctionne

### Double tracking détecté ?

Si Google détecte 2 tags (G-Q4M6M1J1FJ + GT-5MXHDSKH), c'est normal :
- **G-Q4M6M1J1FJ** = Measurement ID (GA4 stream)
- **GT-5MXHDSKH** = GTM Container (peut contenir plusieurs tags)

Le code utilise uniquement `G-Q4M6M1J1FJ` pour éviter le double tracking.

---

## ✅ Checklist Post-Configuration

- [ ] Variables Vercel ajoutées (NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID)
- [ ] Site redéployé après ajout variables
- [ ] Tag visible dans code source (gtag/js?id=G-Q4M6M1J1FJ)
- [ ] Tag Assistant confirme tag actif
- [ ] GA4 Real-Time affiche visiteurs
- [ ] Événements custom se déclenchent (tester formulaire contact)
- [ ] Web Vitals trackés (vérifier dans GA4 > Events > web_vitals)
- [ ] Dashboard custom "OSOM Performance" créé

---

*Configuration réalisée le 9 Octobre 2025 - Stream OSOM (G-Q4M6M1J1FJ)*
