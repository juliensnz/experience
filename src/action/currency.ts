import { fetchAll } from 'pim/fetcher/currency'

export const fetchCurrenciesIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.currencies.length) {
    dispatch({type: 'FETCH_CURRENCIES_REQUEST'});

    return fetchAll().then((currencies) => {
      dispatch({type: 'FETCH_CURRENCIES_SUCCESS', currencies})

      return currencies;
    })
  }

  return Promise.resolve(getState().catalog.currencies);
}
