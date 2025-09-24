# 🚀 OSOM LIFTING METHODOLOGY - CHECKLIST UNIVERSELLE

## 📋 DIAGNOSTIC PHASE (15 min)

### 1. AUDIT INITIAL
```bash
# Lighthouse baseline
npm run build
npx lighthouse http://localhost:3001 --output=json --output-path=./before.json

# Bundle analysis
npm install --save-dev @next/bundle-analyzer
# Ajouter withBundleAnalyzer à next.config.js
ANALYZE=true npm run build
```

### 2. DÉTECTION DÉPENDANCES INUTILISÉES
```bash
# Chercher imports non-utilisés
grep -r "import.*from" src/ | sort | uniq -c | sort -nr

# Vérifier package.json vs usage réel
npm list --depth=0
```

### 3. IDENTIFICATION COMPOSANTS LOURDS
- Charts/graphiques (recharts, chart.js, etc.)
- Animations 3D (@react-three/fiber, three.js)
- Composants interactifs non-critiques
- Third-party widgets (calendly, chat, etc.)

## ⚡ SUPPRESSION PHASE (10 min)

### 1. DÉPENDANCES MORTES
```bash
# Supprimer packages inutilisés
npm uninstall [package-name]

# Nettoyer next.config.js optimizePackageImports
```

### 2. COMPOSANTS FANTÔMES
```bash
# Supprimer dossiers/fichiers non-référencés
rm -rf src/components/unused-folder
```

## 🎯 CONDENSATION PHASE (20 min)

### 1. LAZY LOADING STRATÉGIQUE
```javascript
// Components non-critiques above-the-fold
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
})

// Interactive non-essential
const InteractiveWidget = dynamic(() => import('./Widget'))
```

### 2. DNS OPTIMIZATION
```html
<!-- layout.tsx -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

### 3. THIRD-PARTY DEFER
```html
<!-- Scripts non-critiques -->
<script src="widget.js" defer></script>
<link href="widget.css" rel="stylesheet" media="print" onLoad="this.media='all'" />
```

## 📊 VALIDATION PHASE (10 min)

### 1. BUILD VERIFICATION
```bash
npm run build
# Vérifier : compilation OK, warnings minimaux
```

### 2. LIGHTHOUSE FINAL
```bash
npx lighthouse http://localhost:3001 --output=json --output-path=./after.json

# Comparaison automatique
python3 -c "
import json
avant=json.load(open('before.json'))
apres=json.load(open('after.json'))
print(f'Performance: {avant[\"categories\"][\"performance\"][\"score\"]*100:.0f} → {apres[\"categories\"][\"performance\"][\"score\"]*100:.0f}')
print(f'FCP: {avant[\"audits\"][\"first-contentful-paint\"][\"numericValue\"]/1000:.2f}s → {apres[\"audits\"][\"first-contentful-paint\"][\"numericValue\"]/1000:.2f}s')
print(f'LCP: {avant[\"audits\"][\"largest-contentful-paint\"][\"numericValue\"]/1000:.2f}s → {apres[\"audits\"][\"largest-contentful-paint\"][\"numericValue\"]/1000:.2f}s')
"
```

### 3. VISUAL REGRESSION TEST
- Screenshots avant/après
- Test navigation critique
- Validation animations/interactions

## 🎯 OBJECTIFS CIBLES

### GAINS MINIMUM ACCEPTABLES
- **Performance Score** : +10 points
- **Build Time** : -30%
- **FCP** : -15%
- **Bundle Size** : -20%

### GARANTIES OSOM
- ✅ **Zéro impact visuel**
- ✅ **Même UX/fonctionnalités**
- ✅ **Build successful**
- ✅ **Gains mesurables**

## 🚨 RÈGLES D'OR

### ✅ AUTORISÉ
- Lazy loading composants below-the-fold
- Suppression dépendances 100% inutilisées
- DNS preconnect/prefetch
- Defer scripts non-critiques

### ❌ INTERDIT
- Modifier design/layout
- Supprimer fonctionnalités utilisées
- Casser responsive
- Impact SEO négatif

## 📝 DOCUMENTATION COMMIT

```
🚀 OSOM LIFTING: Performance +X% sans impact visuel

- Lazy loading: [composants]
- Suppression: [dépendances] (-XMB)
- DNS optimization: [services]
- Build: Xs → Ys (-Z%)

Performance: X → Y (+Z points)
FCP: Xs → Ys
LCP: Xs → Ys

🔒 Garantie visuelle: Zéro changement UX
```

## 🔄 RÉPLICATION AUTRES PROJETS

### Pour chaque nouveau projet:
1. **Copier cette checklist** dans le repo
2. **Adapter aux technologies** (Vue/React/Nuxt/Next)
3. **Identifier patterns spécifiques** au projet
4. **Documenter gains** dans README
5. **Créer baseline** performance

### Stack-specific adaptations:
- **Vue/Nuxt** : `defineAsyncComponent` au lieu de `dynamic`
- **React pure** : `React.lazy + Suspense`
- **Vanilla** : Intersection Observer API
- **WordPress** : Plugins lazy loading

---

*Cette méthodologie OSOM garantit des gains performance systématiques avec zéro risque visuel. Reproduction garantie sur tout projet web.*