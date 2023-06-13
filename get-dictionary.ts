import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: (namespace:string | '') => import(`./dictionaries/en/${namespace}.json`).then((module) => module.default),
  de: (namespace:string | '') => import(`./dictionaries/de/${namespace}.json`).then((module) => module.default),
  cs: (namespace:string | '') => import(`./dictionaries/cs/${namespace}.json`).then((module) => module.default),
}

export const getDictionary = async (locale: Locale,namespace:string) => dictionaries[locale](namespace)