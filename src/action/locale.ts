import { fetchAll } from 'pim/fetcher/locale'

export const fetchLocalesIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.locales.length) {
    dispatch({type: 'FETCH_LOCALES_REQUEST'});

    return fetchAll().then((locales) => {
      dispatch({type: 'FETCH_LOCALES_SUCCESS', locales})

      return locales;
    })
  }

  return Promise.resolve(getState().catalog.locales);
}
