#!/bin/bash

echo "🧹 Nettoyage cache Next.js..."
rm -rf .next

echo "🔄 Redémarrage serveur dev..."
npm run dev