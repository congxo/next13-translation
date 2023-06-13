'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '~/i18n-config'


export default function LocaleSwitcher() {
  const route = useRouter();
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  const changeLanguage = async (locale:string) =>{
    const res = await fetch(`http://localhost:3000/api/${locale}`,{
      method:"POST",
    })
    route.replace(redirectedPathName(locale))
  
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <div onClick={()=>changeLanguage(locale)}>{locale}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}