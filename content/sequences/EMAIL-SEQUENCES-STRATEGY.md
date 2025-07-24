# Email Automation Strategy OSOM

## 🎯 Lead Nurturing Sequences

### Sequence 1 - SEO Audit Tool Lead
**Trigger** : Email capture après audit SEO gratuit

#### Email 1 - Immédiat (0 min)
```
Sujet : ✅ Votre audit SEO détaillé (PDF) - OSOM
Contenu :
- Merci + PDF audit personnalisé
- Récap score obtenu
- 3 actions prioritaires
- CTA : "Consultation gratuite 30 min"
```

#### Email 2 - J+2
```
Sujet : 🚀 Comment [CLIENT] a gagné 688 conversions avec ces 3 changements
Contenu :
- Case study Culture Peinture
- Comparaison score lead vs résultats client
- Template plan d'action
- CTA : "Voir d'autres cas clients"
```

#### Email 3 - J+7
```
Sujet : [PRÉNOM], votre concurrent fait-il ces 5 erreurs SEO ?
Contenu :
- Audit concurrent gratuit
- Checklist erreurs communes
- Position vs concurrence
- CTA : "Audit concurrentiel gratuit"
```

### Sequence 2 - ROI Calculator Lead
**Trigger** : Email capture après calcul ROI

#### Email 1 - Immédiat (0 min)
```
Sujet : 📊 Votre potentiel ROI calculé : [ROI]% - Plan d'action
Contenu :
- PDF stratégie personnalisée
- Timeline réaliste 3-6-12 mois
- Budget recommandé
- CTA : "Call stratégique gratuit"
```

#### Email 2 - J+3
```
Sujet : 💡 [CLIENT] : CHF [X] → CHF [Y] en 6 mois (même secteur)
Contenu :
- Case study secteur similaire
- Méthodologie appliquée
- ROI réel vs projeté
- CTA : "Découvrir la méthode"
```

#### Email 3 - J+10
```
Sujet : ⏰ Dernière chance : Audit personnalisé gratuit
Contenu :
- Urgence limitée (2 places/mois)
- Témoignages clients
- Garantie résultats
- CTA : "Réserver ma place"
```

## 🔄 Email Flows Avancés

### Flow 1 - Non-Répondeurs (No Open)
- J+14 : Re-send Email 1 nouveau sujet
- J+21 : Contenu value-add (guide gratuit)
- J+30 : Dernière tentative + désabonnement facile

### Flow 2 - Engagés (Open sans click)
- Segmentation par engagement
- Contenu plus spécialisé
- Invitations événements exclusifs

## 📈 KPIs Tracking

### Métriques Essentielles
```
Open Rate : 25-35% (industrie B2B)
Click Rate : 3-8% (liens CTA)
Conversion Rate : 1-3% (call booking)
Unsubscribe : <0.5%
```

### Lead Scoring Integration
```
Email ouvert : +5 points
Lien cliqué : +10 points
PDF téléchargé : +15 points
Call booké : +50 points
```

## 🛠️ Technical Setup ConvertKit

### Automation Setup
```javascript
// API Integration React
const addSubscriber = async (email, tags, customFields) => {
  await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email: email,
      tags: tags, // ['seo-audit', 'roi-calculator']
      custom_fields: customFields // { roi_score: 250, intent_score: 8 }
    })
  })
}
```

### Tags Strategy
- `seo-audit-lead` : From SEO tool
- `roi-calculator-lead` : From ROI tool
- `high-intent` : Score 8-10
- `qualified-business` : Revenue >50k
- `consultation-ready` : Multiple engagements

---

**Status** : Prêt pour implémentation
**Prochaine étape** : Setup ConvertKit + API integration

*Document créé le 23 juillet 2025*