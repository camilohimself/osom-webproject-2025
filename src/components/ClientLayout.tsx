'use client'

import { useEffect, useState, ReactNode } from 'react'
import { Header, Footer } from '@/components/layout'
import { LocaleProvider, useLocaleContext } from '@/contexts/LocaleContext'
import { getDictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'

interface ClientLayoutContentProps {
  children: ReactNode
}

function ClientLayoutContent({ children }: ClientLayoutContentProps) {
  const { locale, isLoading } = useLocaleContext()
  const [dictionary, setDictionary] = useState<any>(null)

  useEffect(() => {
    async function loadDictionary() {
      try {
        const dict = await getDictionary(locale)
        setDictionary(dict)
      } catch (error) {
        console.error('Failed to load dictionary for locale:', locale, error)
      }
    }

    loadDictionary()
  }, [locale])

  if (isLoading || !dictionary) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-400"></div>
      </div>
    )
  }

  return (
    <>
      <Header currentLocale={locale} dictionary={dictionary} />
      <main>
        {children}
      </main>
      <Footer currentLocale={locale} dictionary={dictionary} />
    </>
  )
}

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ClientLayoutContent>
        {children}
      </ClientLayoutContent>
    </LocaleProvider>
  )
}