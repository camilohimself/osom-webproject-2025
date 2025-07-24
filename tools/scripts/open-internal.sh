#!/bin/bash

echo "🚀 Démarrage serveur + ouverture automatique..."

# Démarrer le serveur en arrière-plan
npm run dev > /dev/null 2>&1 &

# Attendre que le serveur soit prêt
echo "⏳ Attente serveur..."
sleep 5

# Ouvrir le questionnaire interne
open http://localhost:3000/internal/project-brief

echo "✅ Questionnaire ouvert dans votre navigateur !"