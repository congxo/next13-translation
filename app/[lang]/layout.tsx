import './globals.css'
import { Inter } from 'next/font/google'

import { i18n } from '~/i18n-config'
import Link from 'next/link'
import LocaleSwitcher from '../components/locale-switcher'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body>
        
      <div>
        <Link href={`/${params.lang}/`}>to home</Link><br></br>
        <Link href={`/${params.lang}/serverpage`}>to Serverpage</Link><br></br>
        <Link href={`/${params.lang}/clientpage`}>to ClientPage</Link>
      </div>
      ----------------------------------------------------------------
      <div>
      <LocaleSwitcher />
      </div>
        {children}</body>
    </html>
  )
}