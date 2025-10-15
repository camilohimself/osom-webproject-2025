import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, source } = await request.json()

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
      timestamp,
      status: 'calendly_intent' // User veut prendre RDV
    }

    // LOG pour suivi (en production: envoyer vers CRM/Database)
    console.log('='.repeat(60))
    console.log('📅 NOUVEAU LEAD - CALENDLY INTENT')
    console.log('='.repeat(60))
    console.log(JSON.stringify(leadData, null, 2))
    console.log('='.repeat(60))

    // TODO Phase 2: Intégrer CRM (HubSpot, Pipedrive, Airtable, etc.)
    // await saveToCRM(leadData)

    // TODO Phase 3: Envoyer notification email interne
    // await sendInternalNotification(leadData)

    return NextResponse.json({
      success: true,
      message: 'Lead enregistré avec succès',
      leadId: `LEAD-${Date.now()}` // Temporary ID
    })

  } catch (error) {
    console.error('❌ Erreur sauvegarde lead:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
