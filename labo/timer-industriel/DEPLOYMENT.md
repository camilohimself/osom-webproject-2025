# Déploiement Timer Industriel - Netlify

## Configuration automatique

Le timer industriel est configuré pour déploiement automatique sur Netlify.

## Étapes de déploiement

### 1. Nouveau site Netlify

1. **Connecter à GitHub** : https://netlify.com/
2. **New site from Git** → GitHub
3. **Sélectionner** : `camilohimself/osom-webproject-2025`
4. **Branch** : `main`
5. **Build settings** :
   ```
   Base directory: labo/timer-industriel
   Build command: npm install && npm run build  
   Publish directory: labo/timer-industriel/out
   ```

### 2. Variables d'environnement

Aucune variable nécessaire pour la version demo.

### 3. Custom domain (optionnel)

- **Site settings** → **Domain management**
- **Add custom domain** : `timer.osom.ch`
- **DNS configuration** : CNAME vers netlify

## URLs finales

- **Site principal** : `https://osom-webproject-2025.netlify.app/`
- **Timer industriel** : `https://[nom-choisi].netlify.app/`

## QR Codes pour démonstration

Les codes QR suivants sont préconfigurés :

- `METAL_CUT_01` - Découpe Métal - Poste 1
- `WELD_ASM_02` - Soudure Assemblage - Poste 2  
- `QC_STATION_03` - Contrôle Qualité - Station 3
- `MAINT_PREV_01` - Maintenance Préventive
- `BREAK_TIME_01` - Pause Officielle
- `WORKSHOP_MISC` - Atelier - Divers

## Features activées

- ✅ PWA installable mobile
- ✅ Scanner QR codes caméra
- ✅ Timer avec localStorage
- ✅ Interface industrielle responsive
- ✅ Export statique optimisé

## Support navigateurs

- Chrome/Safari mobile (recommandé)
- Support caméra requis pour QR scanner
- LocalStorage pour persistance données