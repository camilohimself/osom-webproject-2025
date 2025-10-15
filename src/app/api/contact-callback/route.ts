import { NextRequest, NextResponse } from 'next/server'

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

    // LOG pour suivi (en production: envoyer vers CRM/Database)
    console.log('='.repeat(60))
    console.log('🔔 NOUVEAU LEAD - RAPPEL DEMANDÉ')
    console.log('='.repeat(60))
    console.log(JSON.stringify(leadData, null, 2))
    console.log('='.repeat(60))

    // TODO Phase 2: Intégrer CRM (HubSpot, Pipedrive, Airtable, etc.)
    // await saveToCRM(leadData)

    // TODO Phase 3: Envoyer notification email interne
    // await sendInternalNotification(leadData)

    // TODO Phase 4: Envoyer SMS confirmation au client
    // await sendSMSConfirmation(phone)

    return NextResponse.json({
      success: true,
      message: 'Demande de rappel enregistrée avec succès',
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
