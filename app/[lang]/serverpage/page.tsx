import React from 'react'
import { Locale } from '~/i18n-config'
import { getDictionary } from '~/get-dictionary'

async function Server({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) {

    const dictionary = await getDictionary(lang,"serverpage")

  return (

    <div>
        <div>Server Page</div>
        {dictionary['server-component'].welcome}
    </div>
 
  )
}

export default Server