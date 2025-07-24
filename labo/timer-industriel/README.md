# Timer Industriel - OSOM

Application de gestion du temps par QR code pour l'industrie métallurgique.

## Fonctionnalités

- **Scanner QR** : Lecture QR codes avec caméra mobile
- **Timer automatique** : Démarrage/arrêt par scan
- **Switch rapide** : Changement de tâche instantané  
- **Storage offline** : Données sauvegardées localement
- **Interface mobile** : Optimisée pour utilisation avec gants

## QR Codes de démonstration

Les codes QR suivants sont configurés pour la démonstration :

### Production
- `METAL_CUT_01` - Découpe Métal - Poste 1
- `WELD_ASM_02` - Soudure Assemblage - Poste 2  
- `QC_STATION_03` - Contrôle Qualité - Station 3

### Maintenance
- `MAINT_PREV_01` - Maintenance Préventive

### Pause
- `BREAK_TIME_01` - Pause Officielle

### Atelier
- `WORKSHOP_MISC` - Atelier - Divers

## Installation

```bash
npm install
npm run dev
```

L'application sera accessible sur http://localhost:3001

## Build pour production

```bash
npm run build
```

## Déploiement Netlify

L'application est configurée pour export statique, compatible Netlify.

## Architecture

- **Next.js 14** - Framework React
- **TypeScript** - Typage strict
- **Tailwind CSS** - Styling industriel
- **@zxing/library** - Scanner QR codes
- **LocalStorage** - Persistance données

## Couleurs industrielles

- Gris métallique : `industrial-xxx`
- Orange sécurité : `safety-xxx`  
- Interface adaptée environnement industriel