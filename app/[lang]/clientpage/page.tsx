import React from 'react'
import { getDictionary } from '~/get-dictionary'
import { Locale } from '~/i18n-config'
import ClientCompo from '../../components/client-compo'

async function ClientPage({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) {

    const dictionary = await getDictionary(lang,"clientpage")

  return (
    <div>ClientPage:
        <ClientCompo dictionary={dictionary.counter}/>
    </div>
  )
}

export default ClientPage