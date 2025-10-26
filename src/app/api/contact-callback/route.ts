import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, project } = await request.json()

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Nom et téléphone obligatoires' },
        { status: 400 }
      )
    }

    // Validation téléphone basique
    const phoneRegex = /^[\d\s+()-]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Numéro de téléphone invalide' },
        { status: 400 }
      )
    }

    // Timestamp pour tracking
    const timestamp = new Date().toISOString()
    const leadData = {
      name,
      phone,
      email: email || null,
      project: project || null,
      source: 'contact_mobile_form',
      timestamp,
      status: 'callback_requested'
    }

    // LOG pour suivi
    console.log('='.repeat(60))
    console.log('🔔 NOUVEAU LEAD - RAPPEL DEMANDÉ')
    console.log('='.repeat(60))
    console.log(JSON.stringify(leadData, null, 2))
    console.log('='.repeat(60))

    // Email HTML pour OSOM
    const emailToOsom = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demande de Rappel OSOM</title>
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
            background: linear-gradient(135deg, #FFDD00 0%, #FFA500 100%);
            color: #000;
            padding: 30px;
            text-align: center;
        }
        .content {
            padding: 30px;
        }
        .info-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 4px solid #FFDD00;
        }
        .label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .value {
            font-size: 16px;
            font-weight: 600;
            color: #333;
        }
        .urgent-badge {
            display: inline-block;
            background: #ef4444;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://osom.ch/osom-logo-full.svg"
                 alt="OSOM Logo"
                 width="100"
                 height="33"
                 style="display: block; margin: 0 auto 15px auto; filter: brightness(0);" />
            <h1 style="margin: 0; font-size: 28px;">🔔 Demande de Rappel URGENT</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulaire mobile contact</p>
        </div>

        <div class="content">
            <div style="text-align: center;">
                <div class="urgent-badge">⏰ RAPPEL DEMANDÉ - Réponse promise sous 2h</div>
            </div>

            <h2 style="color: #1a1a2e;">📝 Informations de contact</h2>

            <div class="info-box">
                <div class="label">Nom</div>
                <div class="value">${name}</div>
            </div>

            <div class="info-box">
                <div class="label">Téléphone (APPELER EN PRIORITÉ)</div>
                <div class="value"><a href="tel:${phone}" style="font-size: 20px; color: #FFDD00; font-weight: bold;">${phone}</a></div>
            </div>

            ${email ? `
            <div class="info-box">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ` : ''}

            ${project ? `
            <div class="info-box">
                <div class="label">Détails du projet</div>
                <div class="value">${project}</div>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                    <strong>Date:</strong> ${new Date(timestamp).toLocaleString('fr-CH')}<br/>
                    <strong>Source:</strong> Formulaire mobile "Je veux être rappelé"<br/>
                    <strong>Lead ID:</strong> LEAD-${Date.now()}
                </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <a href="tel:${phone.replace(/\s+/g, '')}"
                   style="display: inline-block; background: #FFDD00; color: black; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px; font-size: 16px;">
                    📞 Appeler ${name}
                </a>
                <a href="https://wa.me/${phone.replace(/[\s+()-]/g, '')}"
                   style="display: inline-block; background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    💬 WhatsApp
                </a>
                ${email ? `
                <a href="mailto:${email}"
                   style="display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    📧 Email
                </a>
                ` : ''}
            </div>

            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <strong>⚠️ Action requise:</strong>
                <p style="margin: 10px 0 0 0;">
                    Le client attend un rappel <strong>sous 2 heures (jours ouvrés)</strong>.
                    Prioriser cet appel pour maintenir notre promesse de service.
                </p>
            </div>
        </div>
    </div>
</body>
</html>`

    // Envoyer notification à OSOM
    if (resend) {
      try {
        await resend.emails.send({
          from: 'OSOM Leads <leads@osom.ch>',
          replyTo: 'hello@osom.ch',
          to: 'hello@osom.ch',
          subject: `🔔 RAPPEL URGENT: ${name} - ${phone}`,
          html: emailToOsom,
        })
        console.log('✅ Email de notification envoyé à OSOM')
      } catch (emailError) {
        console.error('❌ Erreur envoi email OSOM:', emailError)
        // Continue malgré l'erreur - le lead est quand même loggé
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Demande de rappel enregistrée avec succès',
      leadId: `LEAD-${Date.now()}`
    })

  } catch (error) {
    console.error('❌ Erreur sauvegarde lead:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
