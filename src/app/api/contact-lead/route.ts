import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, source, questionnaire } = await request.json()

    // Validation basique
    if (!email) {
      return NextResponse.json(
        { error: 'Email obligatoire' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Timestamp pour tracking
    const timestamp = new Date().toISOString()
    const leadData = {
      name: name || null,
      email,
      phone: phone || null,
      company: company || null,
      source: source || 'contact_form_desktop',
      questionnaire: questionnaire || null,
      timestamp,
      status: 'new_lead'
    }

    // LOG pour suivi
    console.log('='.repeat(60))
    console.log('📧 NOUVEAU LEAD')
    console.log('='.repeat(60))
    console.log(JSON.stringify(leadData, null, 2))
    console.log('='.repeat(60))

    // Format source label
    const sourceLabels: Record<string, string> = {
      'questionnaire': 'Questionnaire intelligent',
      'contact_form_desktop': 'Formulaire contact desktop',
      'contact_form_mobile': 'Formulaire contact mobile',
      'audit_seo': 'Audit SEO gratuit',
      'newsletter': 'Newsletter',
      'callback': 'Demande de rappel'
    }
    const sourceLabel = sourceLabels[source] || source

    // Build questionnaire HTML if present
    let questionnaireHtml = ''
    if (questionnaire) {
      const questionLabels: Record<string, string> = {
        'projectType': 'Type de projet',
        'timeline': 'Délai souhaité',
        'budget': 'Budget',
        'currentSituation': 'Situation actuelle',
        'mainGoal': 'Objectif principal',
        'targetAudience': 'Clientèle cible'
      }

      questionnaireHtml = `
        <h3 style="color: #1a1a2e; margin-top: 30px;">📋 Réponses du questionnaire</h3>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #FFDD00;">
          ${Object.entries(questionnaire).map(([key, value]) => `
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">${questionLabels[key] || key}:</strong><br/>
              <span style="color: #333; font-size: 16px;">${value}</span>
            </div>
          `).join('')}
        </div>
      `
    }

    // Email HTML pour OSOM
    const emailToOsom = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau Lead OSOM</title>
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
            <h1 style="margin: 0; font-size: 28px;">🎯 Nouveau Lead OSOM</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Source: ${sourceLabel}</p>
        </div>

        <div class="content">
            <h2 style="color: #1a1a2e;">📝 Informations de contact</h2>

            <div class="info-box">
                <div class="label">Nom</div>
                <div class="value">${name || 'Non renseigné'}</div>
            </div>

            <div class="info-box">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="info-box">
                <div class="label">Téléphone</div>
                <div class="value">${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Non renseigné'}</div>
            </div>

            <div class="info-box">
                <div class="label">Entreprise</div>
                <div class="value">${company || 'Non renseigné'}</div>
            </div>

            ${questionnaireHtml}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                    <strong>Date:</strong> ${new Date(timestamp).toLocaleString('fr-CH')}<br/>
                    <strong>Lead ID:</strong> LEAD-${Date.now()}
                </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <a href="https://wa.me/${phone?.replace(/\s+/g, '')}"
                   style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    💬 Contacter sur WhatsApp
                </a>
                <a href="mailto:${email}"
                   style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    📧 Répondre par email
                </a>
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
          subject: `🎯 Nouveau lead: ${name || email} (${sourceLabel})`,
          html: emailToOsom,
        })
        console.log('✅ Email de notification envoyé à OSOM')
      } catch (emailError) {
        console.error('❌ Erreur envoi email OSOM:', emailError)
        // Continue malgré l'erreur
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead enregistré avec succès',
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
