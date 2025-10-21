import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface AuditData {
  url: string
  score: number
  title: {
    exists: boolean
    length: number
    optimal: boolean
  }
  description: {
    exists: boolean
    length: number
    optimal: boolean
  }
  headings: {
    h1Count: number
    h2Count: number
    structure: 'good' | 'fair' | 'poor'
  }
  images: {
    total: number
    withAlt: number
    altOptimization: number
  }
  performance: {
    mobile: number | null
    desktop: number | null
  }
  technical: {
    httpsEnabled: boolean
    canonical: boolean
    viewport: boolean
    lang: boolean
  }
  recommendations: string[]
}

export async function POST(request: NextRequest) {
  try {
    const { email, auditData } = await request.json() as { email: string; auditData: AuditData }

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    if (!auditData || !auditData.url) {
      return NextResponse.json(
        { error: 'Données audit manquantes' },
        { status: 400 }
      )
    }

    // Generate PageSpeed Insights URL
    const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(auditData.url)}`

    // Score color helper
    const getScoreColor = (score: number) => {
      if (score >= 80) return '#10b981' // green
      if (score >= 60) return '#f59e0b' // orange
      return '#ef4444' // red
    }

    const scoreColor = getScoreColor(auditData.score)

    // Build recommendations HTML
    const recommendationsHtml = auditData.recommendations
      .map(rec => `<li style="margin-bottom: 8px; color: #4b5563;">${rec}</li>`)
      .join('')

    // Email HTML Template
    const emailTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audit SEO - ${auditData.url}</title>
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
        .content {
            padding: 40px 30px;
        }
        .score-section {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, ${scoreColor}15, ${scoreColor}05);
            border-radius: 12px;
            margin: 20px 0;
            border: 2px solid ${scoreColor}30;
        }
        .score-number {
            font-size: 72px;
            font-weight: bold;
            color: ${scoreColor};
            margin: 0;
        }
        .score-label {
            font-size: 18px;
            color: #666;
            margin-top: 10px;
        }
        .metric-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 30px 0;
        }
        .metric-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #FFDD00;
        }
        .metric-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .metric-value {
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
        .recommendations {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .recommendations h3 {
            color: #856404;
            margin-top: 0;
        }
        .recommendations ul {
            padding-left: 20px;
            margin: 10px 0;
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
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .metric-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://osom.ch/osom-logo-full.svg"
                 alt="OSOM Logo"
                 width="120"
                 height="40"
                 style="display: block; margin: 0 auto 15px auto;" />
            <div style="opacity: 0.9; font-size: 16px;">Audit SEO automatisé</div>
        </div>

        <div class="content">
            <h2>Votre audit SEO pour :</h2>
            <p style="font-size: 18px; color: #667eea; font-weight: 600; word-break: break-all;">
                ${auditData.url}
            </p>

            <div class="score-section">
                <div class="score-number">${auditData.score}/100</div>
                <div class="score-label">Score SEO Global</div>
                <p style="margin-top: 15px; color: #666;">
                    ${auditData.score >= 80 ? '✅ Excellent ! Site bien optimisé' :
                      auditData.score >= 60 ? '⚠️ Bon potentiel, améliorations possibles' :
                      '🔴 Gros potentiel d\'amélioration détecté'}
                </p>
            </div>

            <h3 style="color: #1a1a2e; margin-top: 30px;">📊 Métriques détaillées</h3>

            <div class="metric-grid">
                <div class="metric-box">
                    <div class="metric-label">Balise Title</div>
                    <div class="metric-value">${auditData.title.length} car. ${auditData.title.optimal ? '✅' : '⚠️'}</div>
                </div>

                <div class="metric-box">
                    <div class="metric-label">Description</div>
                    <div class="metric-value">${auditData.description.length} car. ${auditData.description.optimal ? '✅' : '⚠️'}</div>
                </div>

                <div class="metric-box">
                    <div class="metric-label">H1 (doit être 1)</div>
                    <div class="metric-value">${auditData.headings.h1Count} ${auditData.headings.h1Count === 1 ? '✅' : '⚠️'}</div>
                </div>

                <div class="metric-box">
                    <div class="metric-label">Images ALT</div>
                    <div class="metric-value">${auditData.images.withAlt}/${auditData.images.total} (${auditData.images.altOptimization}%)</div>
                </div>

                ${auditData.performance.mobile ? `
                <div class="metric-box">
                    <div class="metric-label">Performance Mobile</div>
                    <div class="metric-value">${auditData.performance.mobile}/100</div>
                </div>
                ` : ''}

                ${auditData.performance.desktop ? `
                <div class="metric-box">
                    <div class="metric-label">Performance Desktop</div>
                    <div class="metric-value">${auditData.performance.desktop}/100</div>
                </div>
                ` : ''}
            </div>

            ${recommendationsHtml ? `
            <div class="recommendations">
                <h3>💡 Recommendations prioritaires</h3>
                <ul>
                    ${recommendationsHtml}
                </ul>
            </div>
            ` : ''}

            <h3 style="color: #1a1a2e; margin-top: 30px;">📈 Rapport complet Google PageSpeed Insights</h3>
            <p>Pour obtenir le rapport complet avec toutes les métriques de performance (Core Web Vitals, FCP, LCP, CLS, etc.) :</p>

            <div style="text-align: center; margin: 30px 0;">
                <a href="${pageSpeedUrl}" class="cta-button" target="_blank">
                    🔍 Voir le rapport PageSpeed complet
                </a>
            </div>

            <h3 style="color: #1a1a2e;">💬 Besoin d'aide ?</h3>
            <p>Notre équipe peut vous aider à améliorer votre SEO et votre performance web.</p>

            <div style="text-align: center; margin: 30px 0;">
                <a href="https://wa.me/41791289549?text=Bonjour%20OSOM,%20j%27ai%20reçu%20mon%20audit%20SEO%20et%20je%20souhaite%20améliorer%20mon%20site." class="cta-button">
                    💬 Parler à un expert OSOM
                </a>
                <a href="https://osom.ch/services" class="cta-button">
                    📦 Découvrir nos packages
                </a>
            </div>
        </div>

        <div class="footer">
            <p><strong>OSOM</strong> - Expert marketing digital & SEO • Valais<br>
            <a href="https://osom.ch">osom.ch</a> | hello@osom.ch | +41 79 128 95 49</p>

            <p style="font-size: 12px; margin-top: 20px;">
                Vous recevez cet email car vous avez demandé un audit SEO gratuit.<br>
                Cet audit est fourni à titre informatif uniquement.
            </p>
        </div>
    </div>
</body>
</html>`

    // Send email via Resend
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'OSOM Audit <audit@osom.ch>',
          replyTo: 'hello@osom.ch',
          to: email,
          subject: `Audit SEO pour ${auditData.url} - Score ${auditData.score}/100`,
          html: emailTemplate,
        })

        if (error) {
          console.error('❌ Erreur Resend:', error)
          return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email', details: error },
            { status: 500 }
          )
        }

        console.log('✅ Email audit SEO envoyé au client:', data?.id)

        // Envoyer notification à OSOM
        try {
          await resend.emails.send({
            from: 'OSOM Leads <leads@osom.ch>',
            replyTo: 'hello@osom.ch',
            to: 'hello@osom.ch',
            subject: `🔍 Nouveau lead Audit SEO: ${email} (Score ${auditData.score}/100)`,
            html: `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau Lead Audit SEO</title>
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
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
            border-left: 4px solid #667eea;
        }
        .score {
            font-size: 48px;
            font-weight: bold;
            color: ${getScoreColor(auditData.score)};
            text-align: center;
            margin: 20px 0;
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
                 style="display: block; margin: 0 auto 15px auto;" />
            <h1 style="margin: 0; font-size: 28px;">🔍 Nouveau Lead Audit SEO</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Outil Audit SEO gratuit</p>
        </div>

        <div class="content">
            <h2 style="color: #1a1a2e;">📊 Résultats de l'audit</h2>

            <div class="score">${auditData.score}/100</div>

            <div class="info-box">
                <strong>URL auditée:</strong><br/>
                <a href="${auditData.url}" target="_blank">${auditData.url}</a>
            </div>

            <div class="info-box">
                <strong>Email du prospect:</strong><br/>
                <a href="mailto:${email}">${email}</a>
            </div>

            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <strong>📈 Métriques clés:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>Title: ${auditData.title.length} car. ${auditData.title.optimal ? '✅' : '⚠️'}</li>
                    <li>Description: ${auditData.description.length} car. ${auditData.description.optimal ? '✅' : '⚠️'}</li>
                    <li>H1: ${auditData.headings.h1Count} ${auditData.headings.h1Count === 1 ? '✅' : '⚠️'}</li>
                    <li>Images ALT: ${auditData.images.withAlt}/${auditData.images.total} (${auditData.images.altOptimization}%)</li>
                    ${auditData.performance.mobile ? `<li>Performance Mobile: ${auditData.performance.mobile}/100</li>` : ''}
                </ul>
            </div>

            ${auditData.recommendations.length > 0 ? `
            <div style="background: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <strong>💡 Opportunités détectées:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    ${auditData.recommendations.slice(0, 3).map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Suite%20à%20votre%20audit%20SEO%20OSOM&body=Bonjour,%0D%0A%0D%0AJe%20vous%20contacte%20suite%20à%20votre%20audit%20SEO%20gratuit%20sur%20OSOM.ch."
                   style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    📧 Contacter le prospect
                </a>
                <a href="${pageSpeedUrl}" target="_blank"
                   style="display: inline-block; background: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                    🔍 Voir rapport PageSpeed
                </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                    <strong>Date:</strong> ${new Date().toLocaleString('fr-CH')}<br/>
                    <strong>Score SEO:</strong> ${auditData.score}/100<br/>
                    <strong>Potentiel:</strong> ${auditData.score < 60 ? '🔥 Fort potentiel d\'amélioration' : auditData.score < 80 ? '⚠️ Optimisations possibles' : '✅ Site bien optimisé'}
                </p>
            </div>
        </div>
    </div>
</body>
</html>
            `,
          })
          console.log('✅ Email de notification envoyé à OSOM')
        } catch (notifError) {
          console.error('❌ Erreur notification OSOM:', notifError)
          // Continue quand même
        }

        return NextResponse.json({
          success: true,
          message: 'Audit envoyé avec succès',
          emailId: data?.id
        })

      } catch (resendError) {
        console.error('❌ Erreur Resend:', resendError)
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi', details: resendError },
          { status: 500 }
        )
      }
    } else {
      // Mode développement
      console.log('⚠️  RESEND_API_KEY non configurée - Mode simulation')
      console.log('📧 Email à envoyer à:', email)
      console.log('📊 Audit score:', auditData.score)

      return NextResponse.json({
        success: true,
        message: 'Simulation: Audit envoyé',
        mode: 'development'
      })
    }

  } catch (error) {
    console.error('❌ Erreur send-audit-email:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
