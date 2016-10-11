import { Locale } from 'pim/model/catalog/locale'

export interface Channel {
  code: string,
  label: string
  currencies: string[]
  locales: Locale[],
  category: any,
  conversion_unit: string
}
