// Script de test Resend
// Usage: node test-resend.js

const { Resend } = require('resend');

// Charger la clé depuis .env.local
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log('🧪 TEST RESEND API');
  console.log('='.repeat(60));

  // Vérifier que la clé existe
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY non trouvée dans .env.local');
    process.exit(1);
  }

  console.log('✅ RESEND_API_KEY chargée:', process.env.RESEND_API_KEY.substring(0, 10) + '...');
  console.log('');

  try {
    console.log('📧 Envoi email test...');

    const { data, error } = await resend.emails.send({
      from: 'OSOM <onboarding@resend.dev>', // Domaine Resend par défaut (pas de vérification nécessaire)
      to: 'camrivera@protonmail.com', // VOTRE email personnel (compte Resend)
      subject: '✅ TEST RESEND - Configuration réussie!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #FFDD00; background: #000; padding: 20px; text-align: center;">
            🎉 Resend fonctionne!
          </h1>
          <div style="padding: 20px; background: #f5f5f5; border-radius: 10px; margin-top: 20px;">
            <h2>Configuration Resend réussie</h2>
            <p>Votre clé API Resend est correctement configurée et opérationnelle.</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p><strong>Domaine:</strong> osom.ch</p>
            <p><strong>Environnement:</strong> Development</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-left: 4px solid #2196F3; border-radius: 5px;">
            <p><strong>ℹ️ Prochaines étapes:</strong></p>
            <ul>
              <li>✅ Resend configuré en local</li>
              <li>⏳ Ajouter RESEND_API_KEY dans Vercel (production)</li>
              <li>⏳ Configurer domaine email (optionnel mais recommandé)</li>
            </ul>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px; text-align: center;">
            Envoyé depuis OSOM via Resend<br>
            <a href="https://osom.ch">osom.ch</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ ERREUR Resend:', error);
      process.exit(1);
    }

    console.log('');
    console.log('='.repeat(60));
    console.log('✅ EMAIL ENVOYÉ AVEC SUCCÈS!');
    console.log('='.repeat(60));
    console.log('');
    console.log('📊 Détails:');
    console.log(`   Email ID: ${data.id}`);
    console.log(`   De: OSOM <hello@osom.ch>`);
    console.log(`   À: hello@osom.ch`);
    console.log('');
    console.log('📬 Vérifiez votre boîte email dans 10-30 secondes');
    console.log('   (Pensez à vérifier le dossier spam aussi)');
    console.log('');
    console.log('🎯 Resend Dashboard: https://resend.com/emails');
    console.log('');

  } catch (error) {
    console.error('');
    console.error('❌ ERREUR lors du test:', error.message);
    console.error('');
    if (error.message.includes('API key')) {
      console.error('💡 Vérifiez que votre clé API est correcte dans .env.local');
    }
    process.exit(1);
  }
}

testResend();
