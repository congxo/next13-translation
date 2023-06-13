import Link from 'next/link'
import { getDictionary } from '~/get-dictionary'
import { Locale } from '~/i18n-config'
import Counter from '../components/counter'
import LocaleSwitcher from '../components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const tHome = await getDictionary(lang,"home");
  const tServerpage = await getDictionary(lang,"serverpage");

  return (
    <div>


     
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {tServerpage['server-component'].welcome}
      </p>
      <Counter dictionary={tHome.counter} />
    </div>
  )
}