# SYSTÈME D'ICÔNES OSOM - Documentation Technique

## 📋 Composant IconeOSOM

### Installation & Import
```tsx
import IconeOSOM from '@/components/IconeOSOM'
```

### Usage basique
```tsx
<IconeOSOM 
  type="lightning" 
  size={32} 
  color="yellow" 
  ariaLabel="Site rapide" 
  withAnimation 
/>
```

## 🎨 Palette Couleurs OSOM
- **yellow** : #FFE000 (Yellow-400) - Actions principales, CTA
- **green** : #00BFA6 (Green-400) - Succès, validations
- **purple** : #9C27B0 (Purple-400) - Premium, stratégie
- **cyan** : Cyan-400 - Données, analyses
- **pink** : Pink-400/500 - Tracking, métriques
- **red** : Red-400 - Problèmes, alertes
- **gray** : Gray-400 - Texte secondaire
- **white** : White - Contraste maximum

## 🔧 Types d'Icônes Disponibles

### Business & Strategy
- `business-growth` - Croissance business
- `target` - Ciblage, objectifs
- `consultation` - Conseil, discussion
- `rocket` - Lancement, performance
- `trophy` - Réussite, récompense

### Performance & Technical
- `lightning` - Rapidité, performance
- `clock` - Temps, délais
- `gauge` - Mesure, performance
- `shield` - Sécurité, protection
- `chart` - Graphiques, données

### Communication & Tools
- `phone` - Contact téléphonique
- `message` - Messages, chat
- `email` - Email, contact
- `document` - Documents, guides
- `search` - Recherche, SEO

### Status & Feedback
- `check` - Validation, succès
- `cross` - Erreur, problème
- `warning` - Attention, alerte
- `info` - Information
- `star` - Qualité, excellence

### Design & Interface
- `palette` - Design, créativité
- `monitor` - Desktop, écrans
- `mobile` - Mobile, responsive
- `code` - Développement
- `tools` - Outils, paramètres

### Secteurs Métiers
- `medical` - Santé, médical
- `engineering` - Ingénierie, technique
- `retail` - Commerce, vente
- `industry` - Industrie, production
- `legal` - Juridique, droit

## ⚡ Animations & Interactions

### Props d'Animation
```tsx
withAnimation={true} // Active les micro-animations hover
```

### Classes CSS Personnalisées
```css
.icon-scale { transform: scale(1.1) on hover }
.icon-rotate { transform: rotate(5deg) on hover }
.icon-breathe { animation: pulse 3s infinite }
.icon-hover { animation: pulse 0.6s on hover }
.icon-glow { animation: brightness 0.8s on hover }
```

## ♿ Accessibilité

### Attributs Obligatoires
```tsx
ariaLabel="Description claire de l'icône" // OBLIGATOIRE
role="img" // Automatique dans le composant
```

### Bonnes Pratiques
- Toujours fournir un `ariaLabel` descriptif
- Éviter les descriptions redondantes avec le texte visible
- Utiliser un langage clair et concis
- Tester avec des lecteurs d'écran

## 📱 Responsive & Performance

### Tailles Recommandées
- **Mobile** : 16-24px pour les icônes inline
- **Tablet** : 24-32px pour les icônes de section
- **Desktop** : 32-48px pour les icônes hero

### Performance
- SVG inline optimisés
- Aucune requête réseau supplémentaire
- Bundle size minimal
- Compatible tous navigateurs

## 🔄 Réutilisation Inter-Pages

### Consistency Check
Avant d'utiliser sur d'autres pages :
1. Vérifier la cohérence de la palette couleurs
2. Maintenir les tailles proportionnelles
3. Respecter les conventions d'accessibilité
4. Documenter les nouveaux usages

### Page Types & Couleurs
- **Création Sites Web** : Yellow-400 (thème principal)
- **SEO & Marketing** : Cyan-400
- **Programmation & IA** : Purple-400
- **Paid Media & Growth** : Yellow-400
- **Marketing Automation & CRM** : Green-400
- **Tracking & Data** : Pink-400/500

## 🚀 Exemples d'Intégration

### Hero Section
```tsx
<div className="w-24 h-24 rounded-full bg-yellow-400/20 flex items-center justify-center">
  <IconeOSOM 
    type="business-growth" 
    size={48} 
    color="yellow" 
    withAnimation 
    ariaLabel="Croissance d'entreprise" 
  />
</div>
```

### Liste de Features
```tsx
<div className="flex items-center space-x-3">
  <IconeOSOM type="check" size={20} color="green" ariaLabel="Fonctionnalité disponible" />
  <span>Fonctionnalité premium incluse</span>
</div>
```

### Navigation Secteurs
```tsx
<div className="inline-flex items-center space-x-2 hover:bg-teal-400/10 transition-colors">
  <IconeOSOM 
    type="medical" 
    size={20} 
    color="cyan" 
    ariaLabel="Secteur médical" 
    withAnimation 
  />
  <span>Cabinets médicaux</span>
</div>
```

## 📊 Métriques de Qualité

### Performance Cible
- Temps de rendu < 16ms
- Bundle impact < 2kb
- Zero CLS (Cumulative Layout Shift)
- Accessibilité AA compliant

### Tests Requis
- [ ] Contraste couleurs ≥ 4.5:1
- [ ] Navigation clavier fonctionnelle
- [ ] Lecteurs d'écran compatibles
- [ ] Responsive sur tous devices
- [ ] Animations respectent prefers-reduced-motion

---

## 🎯 NEXT STEPS

### Application Prochaines Pages
1. `/services/seo-content-marketing` - Thème Cyan-400
2. `/services/programmation-ia` - Thème Purple-400
3. `/services/paid-media-growth` - Thème Yellow-400
4. `/services/marketing-automation-crm` - Thème Green-400
5. `/services/tracking-data` - Thème Pink-400/500

### Évolutions Futures
- Ajout d'icônes sectorielles spécifiques
- Animations plus sophistiquées
- Mode sombre/clair
- Icônes personnalisées par client

**Status** : ✅ Système opérationnel - Prêt pour déploiement