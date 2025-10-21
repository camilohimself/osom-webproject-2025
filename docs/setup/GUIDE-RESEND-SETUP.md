# 🚀 Guide Configuration Resend - OSOM

## Problème identifié

Le domaine `send.osom.ch` n'est PAS vérifié sur Resend, ce qui empêche l'envoi d'emails.

**Erreur:** `403 - The send.osom.ch domain is not verified`

---

## ✅ ÉTAPE 1 : Vérifier le domaine sur Resend (PRIORITÉ ABSOLUE)

### 1. Va sur ton dashboard Resend
👉 https://resend.com/domains

### 2. Clique sur ton domaine `send.osom.ch`

### 3. Vérifie le statut des records DNS

Tu devrais voir ces 3 records :

#### 📧 SPF Record
```
Type: TXT
Name: send.osom.ch
Value: v=spf1 include:_spf.resend.com ~all
Status: [À vérifier]
```

#### 🔐 DKIM Record  
```
Type: TXT
Name: resend._domainkey.send.osom.ch
Value: [Clé fournie par Resend]
Status: [À vérifier]
```

#### 📮 DMARC Record
```
Type: TXT
Name: _dmarc.send.osom.ch
Value: v=DMARC1; p=none; rua=mailto:hello@osom.ch
Status: [À vérifier]
```

### 4. Si les records ne sont PAS vérifiés (🔴 rouge ou ⏳ en attente)

**Option A : Attendre la propagation DNS (2-24h)**
- Les DNS peuvent prendre du temps à se propager
- Clique sur "Verify DNS" toutes les heures

**Option B : Vérifier la configuration sur Hostpoint**
1. Va sur ton panel Hostpoint
2. Accède à la zone DNS de `osom.ch`
3. Vérifie que les 3 records ci-dessus sont bien créés pour `send.osom.ch`
4. Si manquants, ajoute-les exactement comme indiqué par Resend

### 5. Une fois TOUS les records vérifiés (✅ verts)

Clique sur le bouton **"Send test email"** sur Resend pour confirmer que tout fonctionne.

---

## ✅ ÉTAPE 2 : Configurer la variable sur Vercel

Une fois le domaine vérifié sur Resend :

### 1. Va sur Vercel
👉 https://vercel.com/

### 2. Sélectionne le projet `osom-webproject-2025`

### 3. Va dans **Settings → Environment Variables**

### 4. Ajoute ces 2 variables :

#### Variable 1 : RESEND_API_KEY
- **Name:** `RESEND_API_KEY`
- **Value:** `re_d5L2KRhr_27wzvGfwQVhU5tnKjULipdPi`
- **Environments:** Sélectionne **Production**, **Preview** ET **Development** (tous les 3)

#### Variable 2 : GOOGLE_PAGESPEED_API_KEY
- **Name:** `GOOGLE_PAGESPEED_API_KEY`
- **Value:** `AIzaSyAdpWz5UfMF6Uo4ofbDjvBFTG3ukkZPkp8`
- **Environments:** Sélectionne **Production**, **Preview** ET **Development** (tous les 3)

### 5. Clique sur **Save**

---

## ✅ ÉTAPE 3 : Redéployer et tester

### 1. Redéployer sur Vercel

**Option A : Via commit Git**
```bash
git add -A
git commit -m "fix: Configure Resend API for production"
git push
```

**Option B : Via dashboard Vercel**
- Va dans l'onglet **Deployments**
- Clique sur **Redeploy** sur le dernier déploiement

### 2. Attendre le déploiement (2-3 minutes)

### 3. Tester en production

Une fois déployé, teste les 3 funnels sur ton site live :

#### Test 1 : Outil Audit SEO
1. Va sur https://osom.ch/outils
2. Entre ton site web
3. Clique sur "Analyser"
4. Entre ton email `hello@osom.ch`
5. Vérifie que tu reçois :
   - ✅ Email rapport audit (de `audit@send.osom.ch`)
   - ✅ Email notification lead (de `leads@send.osom.ch`)

#### Test 2 : Questionnaire
1. Va sur https://osom.ch/questionnaire
2. Remplis le questionnaire
3. Soumets le formulaire
4. Vérifie que tu reçois :
   - ✅ Email notification lead avec réponses (de `leads@send.osom.ch`)

#### Test 3 : Kit de contact
1. Va sur https://osom.ch/contact
2. Clique sur "Kit de Contact"
3. Entre ton email `hello@osom.ch`
4. Vérifie que tu reçois :
   - ✅ Email kit de contact (de `contact@send.osom.ch`)

---

## 🎯 Checklist finale

- [ ] Domaine `send.osom.ch` vérifié sur Resend (SPF + DKIM + DMARC = ✅)
- [ ] `RESEND_API_KEY` ajoutée sur Vercel
- [ ] `GOOGLE_PAGESPEED_API_KEY` ajoutée sur Vercel
- [ ] Site redéployé sur Vercel
- [ ] Test Audit SEO → 2 emails reçus
- [ ] Test Questionnaire → 1 email reçu
- [ ] Test Kit contact → 1 email reçu

---

## 💡 Troubleshooting

### Les emails ne arrivent toujours pas ?

1. **Vérifie le dossier spam** de hello@osom.ch

2. **Vérifie les logs Resend**
   👉 https://resend.com/emails
   - Tu devrais voir tous les emails envoyés
   - Regarde les statuts : delivered, bounced, failed

3. **Vérifie les logs Vercel**
   👉 Va dans ton projet → Functions
   - Regarde les logs des fonctions API
   - Cherche les erreurs Resend

4. **Test en local**
   ```bash
   npm run dev
   node test-resend.js
   ```

5. **Contacte le support Resend**
   Si rien ne fonctionne après 24h, contacte le support Resend avec ton domaine `send.osom.ch`

---

## 📞 Support

Si tu as besoin d'aide, contacte :
- **Resend Support:** support@resend.com
- **Vercel Support:** https://vercel.com/support

---

*Dernière mise à jour : 20 Octobre 2025*
