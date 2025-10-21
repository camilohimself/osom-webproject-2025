# Configuration Resend - Email Transactionnel

## 🎯 Pourquoi Resend?

Resend est le service d'email transactionnel choisi pour envoyer:
- **Kit de contact** (EmailModal)
- **Notifications internes** de leads
- **Emails automatiques** futurs

## 📋 Étapes de Configuration

### 1. Créer un compte Resend

1. Aller sur [resend.com](https://resend.com)
2. S'inscrire (gratuit: 3,000 emails/mois, 100 emails/jour)
3. Vérifier votre email

### 2. Obtenir votre API Key

1. Dashboard Resend → **API Keys**
2. Cliquer **Create API Key**
3. Nom: `OSOM Production` (ou `OSOM Development`)
4. Permission: **Sending access**
5. Copier la clé (format: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### 3. Configurer votre domaine email

#### Option A: Utiliser le domaine Resend (rapide, pour tester)
- Emails envoyés depuis: `hello@osom.ch` via `onboarding@resend.dev`
- ✅ Fonctionne immédiatement
- ⚠️ Peut finir dans spam

#### Option B: Utiliser votre domaine (recommandé production)
1. Resend Dashboard → **Domains**
2. Ajouter `osom.ch`
3. Configurer DNS records (SPF, DKIM, DMARC)
4. Attendre vérification (~5-10 min)
5. Emails envoyés depuis: `hello@osom.ch` (vrai domaine)

**DNS Records à ajouter chez votre registrar:**
```
Type    Name                    Value
TXT     @                       v=spf1 include:_spf.resend.com ~all
TXT     resend._domainkey       [Clé fournie par Resend]
TXT     _dmarc                  v=DMARC1; p=none; rua=mailto:hello@osom.ch
```

### 4. Ajouter la clé API dans Vercel

#### Développement local:
```bash
# Copier .env.example → .env.local
cp .env.example .env.local

# Éditer .env.local et ajouter:
RESEND_API_KEY=re_votre_vraie_clé_ici
```

#### Production (Vercel):
1. Vercel Dashboard → Votre projet
2. **Settings** → **Environment Variables**
3. Ajouter:
   - Name: `RESEND_API_KEY`
   - Value: `re_votre_vraie_clé_ici`
   - Environment: **Production** (et Preview si souhaité)
4. **Save**
5. Redéployer le projet

### 5. Tester l'envoi d'email

#### Test local:
```bash
# Lancer le serveur dev
npm run dev

# Aller sur http://localhost:3000/contact
# Cliquer "Kit de Contact"
# Entrer votre email
# Vérifier la console: "✅ Email envoyé avec succès via Resend"
```

#### Test production:
1. Déployer sur Vercel
2. Aller sur https://osom.ch/contact
3. Cliquer "Kit de Contact"
4. Entrer votre email
5. Vérifier réception email (~30 secondes)

### 6. Monitoring

**Resend Dashboard:**
- **Emails** → voir tous les emails envoyés
- **Logs** → erreurs, bounces, deliveries
- **Analytics** → taux d'ouverture, clicks

**Logs application:**
```
✅ Email envoyé avec succès via Resend: <email-id>
❌ Erreur Resend: { message: '...' }
⚠️  RESEND_API_KEY non configurée - Mode simulation
```

## 🔧 Troubleshooting

### Email pas reçu?

1. **Vérifier spam/junk** (surtout si Option A)
2. **Vérifier logs Resend** (Dashboard → Emails)
3. **Vérifier console serveur** (erreurs API?)
4. **Vérifier configuration DNS** (si Option B)

### Erreur "Invalid API Key"?

- Vérifier que `RESEND_API_KEY` est bien configurée
- Vérifier format: `re_xxxxxxxxxxxxxxxxxxxxx`
- Régénérer une nouvelle clé si nécessaire

### Emails dans spam?

- **Solution**: Configurer votre domaine (Option B)
- Ajouter SPF, DKIM, DMARC records
- Attendre 24-48h propagation DNS

## 💡 Best Practices

1. **Jamais commit .env.local** (contient clés secrètes)
2. **Utiliser clés différentes** dev vs production
3. **Monitor quotas** (gratuit: 100 emails/jour)
4. **Configurer domaine** pour meilleure délivrabilité
5. **Tester templates** avant envoi masse

## 📊 Limites Plan Gratuit

- ✅ 3,000 emails/mois
- ✅ 100 emails/jour
- ✅ Support email
- ❌ Pas de support téléphone
- ❌ Pas d'analytics avancés

**Upgrade Pro (20$/mois)** si besoin:
- 50,000 emails/mois
- 1,000 emails/jour
- Analytics avancés
- Support prioritaire

## 🚀 Prochaines Étapes (Future)

- [ ] Ajouter email confirmation leads (après formulaire callback)
- [ ] Notification email interne quand nouveau lead
- [ ] Newsletter automatique (integration CRM)
- [ ] Email templates dynamiques (personnalisés par package)
- [ ] A/B testing subject lines

---

**Ressources:**
- [Resend Documentation](https://resend.com/docs)
- [Resend Next.js Guide](https://resend.com/docs/send-with-nextjs)
- [Resend Status](https://status.resend.com)
