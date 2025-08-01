import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Template email HTML
    const emailTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OSOM - Kit de contact stratégie digitale</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #FFDD00;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .metric {
            background: linear-gradient(135deg, #FFDD00, #FFA500);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
        }
        .metric h3 {
            font-size: 48px;
            margin: 0;
            font-weight: bold;
        }
        .cta-button {
            display: inline-block;
            background: #FFDD00;
            color: #000;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px 5px;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            background: #FFA500;
            transform: translateY(-2px);
        }
        .stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 30px 0;
        }
        .stat-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #FFDD00;
        }
        .stat-number {
            font-size: 32px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        .stat-label {
            color: #666;
            font-size: 14px;
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        .contact-info {
            background: #e8f4fd;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        @media (max-width: 600px) {
            .stats {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">osom</div>
            <div class="subtitle">Stratégie digitale data-driven • Valais</div>
        </div>
        
        <div class="content">
            <h2>Bonjour,</h2>
            
            <p>Merci pour votre intérêt pour nos services de stratégie digitale ! Voici votre kit de contact complet :</p>
            
            <div class="metric">
                <h3>14x</h3>
                <p>plus efficace que la concurrence<br><small>Données GA4 vérifiées sur 6 mois</small></p>
            </div>
            
            <div class="stats">
                <div class="stat-box">
                    <div class="stat-number">688</div>
                    <div class="stat-label">Conversions SEO</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">49</div>
                    <div class="stat-label">Conversions Payantes</div>
                </div>
            </div>
            
            <h3>🎯 Comment commencer :</h3>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://osom.ch/questionnaire" class="cta-button">
                    📋 Questionnaire intelligent (3 min)
                </a>
                <a href="https://calendly.com/osom-consultation/30min" class="cta-button">
                    📅 Consultation gratuite (30 min)
                </a>
            </div>
            
            <div class="contact-info">
                <h4>📞 Contact direct :</h4>
                <p>
                    <strong>Email :</strong> contact@osom.ch<br>
                    <strong>Téléphone :</strong> +41 27 XXX XX XX<br>
                    <strong>Adresse :</strong> Valais, Suisse
                </p>
            </div>
            
            <h3>💡 Exemples de résultats clients :</h3>
            <ul>
                <li><strong>Client PME :</strong> +11.3% taux de conversion (vs 2-3% industrie)</li>
                <li><strong>Entreprise locale :</strong> 68.6% engagement SEO (vs 44.6% direct)</li>
                <li><strong>Société B2B :</strong> 14,171 sessions récupérées (ROI invisible révélé)</li>
            </ul>
            
            <p><strong>Prochaine étape recommandée :</strong> Remplissez notre questionnaire intelligent en 3 minutes pour recevoir une analyse personnalisée de votre potentiel digital.</p>
            
            <div style="text-align: center; margin: 40px 0;">
                <a href="https://osom.ch/questionnaire" class="cta-button" style="font-size: 18px; padding: 20px 40px;">
                    🚀 Démarrer mon analyse gratuite
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>OSOM</strong> - Expert marketing digital & SEO • Valais<br>
            <a href="https://osom.ch">osom.ch</a> | contact@osom.ch</p>
            
            <p style="font-size: 12px; margin-top: 20px;">
                Vous recevez cet email car vous avez demandé des informations sur nos services.<br>
                Si vous ne souhaitez plus recevoir nos communications, contactez-nous.
            </p>
        </div>
    </div>
</body>
</html>`

    // Pour le moment, on simule l'envoi (en production, utiliser Resend, SendGrid, etc.)
    // Ici on peut logger l'email ou l'envoyer via un service
    console.log('Email à envoyer à:', email)
    console.log('Template:', emailTemplate.substring(0, 200) + '...')

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Intégrer un vrai service d'email comme Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'OSOM <contact@osom.ch>',
    //   to: email,
    //   subject: 'OSOM - Votre kit de contact stratégie digitale',
    //   html: emailTemplate,
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}