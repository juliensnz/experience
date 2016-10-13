import { Currency } from 'pim/model/catalog/currency'

export default (state: Currency[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_CURRENCIES_SUCCESS':
      state = action.currencies;
  }

  return state;
}
