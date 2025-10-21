# ✅ Configuration Resend - État Actuel

**Date**: 15 Octobre 2025
**Status**: 🎉 **FONCTIONNEL EN PRODUCTION** 🎉

---

## 🎯 CE QUI FONCTIONNE MAINTENANT

### ✅ Développement Local (localhost)

**Email test envoyé avec succès!**
- Email ID: `19595087-4d10-457f-a8df-6a7c8c60ac4c`
- De: `OSOM <onboarding@resend.dev>`
- À: `camrivera@protonmail.com`
- Status: Delivré ✅

**Configuration**:
```bash
# .env.local (NE JAMAIS COMMIT)
RESEND_API_KEY=re_d5L2KRhr_27wzvGfwQVhU5tnKjULipdPi
```

**Route API active**:
- `/api/send-welcome-email` → Envoi kit de contact ✅

---

## ⚠️ LIMITATIONS ACTUELLES

### 1. **Domaine Email Temporaire**

**ACTUELLEMENT**: `onboarding@resend.dev`
- ✅ Fonctionne immédiatement
- ⚠️ Risque spam
- ⚠️ Pas professionnel

**OBJECTIF**: `hello@osom.ch`
- Nécessite vérification domaine (voir étapes ci-dessous)

### 2. **Destinataires Restreints**

**ACTUELLEMENT**: Emails uniquement vers `camrivera@protonmail.com`
- Restriction Resend plan gratuit sans domaine vérifié
- Pour envoyer à d'autres emails → vérifier domaine

**APRÈS vérification domaine**: Emails vers n'importe qui ✅

---

## 🚀 PROCHAINES ÉTAPES

### ÉTAPE 1: Ajouter clé API dans Vercel (PRODUCTION)

**Urgence**: 🔴 **CRITIQUE** (sinon emails ne fonctionnent pas en prod)

**Instructions**:
1. Aller sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionner projet `osom-webproject-2025`
3. **Settings** → **Environment Variables**
4. Cliquer **Add New**
5. Remplir:
   ```
   Name: RESEND_API_KEY
   Value: re_d5L2KRhr_27wzvGfwQVhU5tnKjULipdPi
   Environment: Production ✅
   ```
6. **Save**
7. Redéployer le projet (Deployments → ... → Redeploy)

**Test après déploiement**:
```bash
# Aller sur production
https://osom.ch/contact

# Cliquer "Kit de Contact"
# Entrer email camrivera@protonmail.com
# Vérifier réception
```

---

### ÉTAPE 2: Vérifier Domaine osom.ch (RECOMMANDÉ)

**Urgence**: 🟡 **IMPORTANT** (mais peut attendre quelques jours)

**Pourquoi?**
- Emails depuis `hello@osom.ch` (professionnel)
- Envoyer à n'importe quelle adresse
- Meilleure délivrabilité (moins de spam)

**Instructions**:

#### A. Ajouter domaine dans Resend

1. Aller sur [Resend Dashboard → Domains](https://resend.com/domains)
2. Cliquer **Add Domain**
3. Entrer: `osom.ch`
4. Cliquer **Add**

#### B. Configurer DNS

Resend va afficher 3 records DNS à ajouter chez votre registrar (Infomaniak, GoDaddy, etc.):

```
Type    Name                    Value                           TTL
────────────────────────────────────────────────────────────────────
TXT     @                       v=spf1 include:_spf.resend.com ~all    3600
TXT     resend._domainkey       [longue clé fournie par Resend]        3600
TXT     _dmarc                  v=DMARC1; p=none; rua=mailto:hello@osom.ch    3600
```

**Où ajouter ces records?**
- Chez votre hébergeur DNS (probablement Infomaniak ou autre)
- Section: DNS / Zone DNS / DNS Records

#### C. Vérifier

1. Attendre 5-30 minutes (propagation DNS)
2. Retourner sur Resend → Domains
3. Cliquer **Verify** à côté de `osom.ch`
4. Si ✅ vert → Domaine vérifié!

#### D. Mettre à jour le code

Une fois domaine vérifié:

```typescript
// src/app/api/send-welcome-email/route.ts
from: 'OSOM <hello@osom.ch>', // ✅ Maintenant autorisé
```

---

### ÉTAPE 3: Tester en Production

**Après avoir fait Étapes 1 & 2**:

1. Aller sur `https://osom.ch/contact`
2. Cliquer "Kit de Contact"
3. Entrer un email (n'importe lequel si domaine vérifié)
4. Vérifier réception
5. Check Resend Dashboard → Emails pour confirmer envoi

---

## 📊 QUOTAS & LIMITES

### Plan Gratuit Resend

- ✅ 3,000 emails/mois
- ✅ 100 emails/jour
- ⚠️ Sans domaine vérifié: uniquement vers votre email
- ⚠️ Avec domaine vérifié: vers n'importe qui

**Estimation OSOM**:
- Kit de contact: ~5-10 emails/jour
- Leads mobile: ~3-5 emails/jour
- **Total**: ~10-20 emails/jour
- **Verdict**: Plan gratuit largement suffisant ✅

---

## 🔐 SÉCURITÉ

### ✅ Bonnes pratiques appliquées

- Clé API dans `.env.local` (gitignored)
- Compte GitHub (pas Google perso)
- 2FA activé sur GitHub
- Clé jamais commitée dans Git

### ⚠️ À NE JAMAIS FAIRE

```bash
# ❌ JAMAIS commit .env.local
git add .env.local  # NON!

# ❌ JAMAIS exposer clé publiquement
RESEND_API_KEY=re_xxx...  # Dans un fichier public

# ❌ JAMAIS partager clé API
# (Même dans ce chat, c'est pas idéal mais OK car éphémère)
```

---

## 📧 EMAILS ACTUELLEMENT CONFIGURÉS

### 1. Kit de Contact (✅ Actif)

**Trigger**: User clique "Kit de Contact" sur `/contact`

**Flow**:
```
User entre email
    ↓
POST /api/send-welcome-email
    ↓
Resend envoie email HTML
    ↓
User reçoit kit (30s)
```

**Contenu**:
- Métriques OSOM
- Lien questionnaire
- Lien Calendly
- Contact direct

### 2. Autres emails (⏳ TODO Phase 2)

- Confirmation lead mobile
- Notification interne leads
- Newsletter
- Relance Calendly

---

## 🐛 TROUBLESHOOTING

### Email pas reçu?

1. **Vérifier SPAM** (surtout avec onboarding@resend.dev)
2. **Check Resend Dashboard** → Emails → voir status
3. **Vérifier logs serveur** (erreurs API?)
4. **Confirmer RESEND_API_KEY** dans Vercel (si prod)

### Erreur "Domain not verified"?

- Normal si domaine pas encore vérifié
- Solution temporaire: utiliser `onboarding@resend.dev`
- Solution permanente: Vérifier domaine (Étape 2)

### Erreur "Can only send to camrivera@protonmail.com"?

- Normal sans domaine vérifié
- Pour envoyer à d'autres → vérifier domaine

---

## 🎯 CHECKLIST COMPLÈTE

### Développement Local ✅
- [x] Compte Resend créé (GitHub)
- [x] API Key générée
- [x] Clé ajoutée dans `.env.local`
- [x] Resend SDK installé
- [x] Test envoi réussi

### Production Vercel ✅
- [x] API Key ajoutée dans Vercel (Sensitive: Enabled)
- [x] Redéploiement effectué (sans cache)
- [x] Test production réussi (email reçu!)

### Domaine Email (Optionnel mais recommandé) ⏳
- [ ] Domaine `osom.ch` ajouté dans Resend
- [ ] DNS records configurés
- [ ] Domaine vérifié ✅
- [ ] Code mis à jour (`hello@osom.ch`)
- [ ] Test avec domaine custom réussi

---

## 📚 RESSOURCES

- [Resend Dashboard](https://resend.com/dashboard)
- [Resend Docs](https://resend.com/docs)
- [Resend Email Status](https://resend.com/emails)
- [Resend Domains](https://resend.com/domains)
- [Documentation complète](./SETUP-RESEND.md)

---

**Dernière mise à jour**: 15 Octobre 2025
**Responsable**: Camilo Rivera
**Email support**: camrivera@protonmail.com
