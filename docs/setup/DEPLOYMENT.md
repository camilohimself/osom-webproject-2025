# Déploiement OSOM WebProject 2025

## 🚀 Déploiement sur Netlify

### 1. Prérequis
- Compte Netlify
- Repo GitHub configuré
- Variables d'environnement

### 2. Configuration Netlify

#### Étapes de déploiement :
1. **Connecter le repo** : `git@github.com:camilohimself/osom-webproject-2025.git`
2. **Build settings** :
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

3. **Variables d'environnement** (à configurer dans Netlify) :
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://osom.ch
```

### 3. Domaine Custom

#### Configuration DNS :
```
Type: CNAME
Name: www
Value: your-netlify-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5 (IP Netlify)
```

#### SSL/TLS :
- Certificat Let's Encrypt automatique
- Force HTTPS activé
- HSTS configuré

### 4. Optimisations

#### Performance :
- **Compression** : Gzip activé
- **Cache** : Assets statiques (1 an)
- **CDN** : Global edge network
- **Image optimization** : Next.js native

#### SEO :
- **Sitemap** : `/sitemap.xml` généré automatiquement
- **Robots.txt** : Configuré pour production
- **Meta tags** : Optimisés par page
- **Schema markup** : Intégré

### 5. Monitoring

#### Analytics :
- Google Analytics 4
- Google Tag Manager
- Core Web Vitals
- Search Console

#### Erreurs :
- Netlify Functions logs
- Next.js error reporting
- Uptime monitoring

## 🔧 Configuration Sanity.io

### 1. Création du projet Sanity
```bash
npx sanity@latest init
```

### 2. Configuration
- Dataset: `production`
- Schema: Déjà configuré dans `/sanity.config.ts`
- CORS: Ajouter le domaine Netlify

### 3. Studio Sanity
- URL: `https://osom.sanity.studio`
- Déploiement: `sanity deploy`

## 📊 KPI et Objectifs

### Métriques cibles :
- **Core Web Vitals** : LCP < 2.5s, INP < 200ms, CLS < 0.1
- **GTmetrix** : Grade A
- **Lighthouse** : Score > 90
- **Uptime** : > 99.9%

### Conversions :
- **Leads** : ≥ 10/mois
- **CTR** : ≥ 2%
- **Bounce rate** : < 60%
- **Session duration** : > 2 minutes

## 🚦 Checklist avant lancement

### Technique :
- [ ] Build réussi sans erreurs
- [ ] Tests E2E passés
- [ ] Lighthouse > 90
- [ ] Formulaires testés
- [ ] Calculateur ROI fonctionnel
- [ ] SSL configuré
- [ ] Redirections 301 en place

### SEO :
- [ ] Sitemap généré
- [ ] Meta descriptions uniques
- [ ] Balises H1-H6 optimisées
- [ ] Schema markup validé
- [ ] Search Console configuré
- [ ] Analytics installé

### UX :
- [ ] Navigation mobile testée
- [ ] Formulaires responsive
- [ ] Animations fluides
- [ ] Temps de chargement < 3s
- [ ] Accessibilité validée

## 🎯 Post-lancement

### Suivi :
1. **Monitoring** : Uptime et performance
2. **Analytics** : Trafic et conversions
3. **A/B testing** : Optimisation continue
4. **Content** : Blog et case studies
5. **SEO** : Backlinks et authority

### Maintenance :
- **Updates** : Dependencies mensuelles
- **Security** : Patches automatiques
- **Backups** : Sanity et code
- **Performance** : Optimisations continues