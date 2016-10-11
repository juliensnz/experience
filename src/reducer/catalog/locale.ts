import { Locale } from 'pim/model/catalog/locale'

export default (state: Locale[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_LOCALE_SUCCESS':
      state = action.locales;
  }

  return state;
}
