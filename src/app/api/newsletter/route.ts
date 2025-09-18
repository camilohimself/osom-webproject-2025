import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const email = formData.get('email') as string

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // TODO: Intégrer avec votre service d'email marketing (Mailchimp, Sendinblue, etc.)
    console.log('Nouvel abonné newsletter:', email)

    // Simulation envoi (remplacer par vraie intégration)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Rediriger vers la page précédente avec un message de succès
    const referer = request.headers.get('referer') || '/'
    const url = new URL(referer)
    url.searchParams.set('newsletter', 'success')
    
    return NextResponse.redirect(url)
  } catch (error) {
    console.error('Erreur newsletter:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}