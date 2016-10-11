import { fetchAll } from 'pim/fetcher/locale'

export const fetchLocalesIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.locales.length) {
    dispatch({type: 'FETCH_LOCALE_REQUEST'});

    fetchAll().then((locales) => {
      dispatch({type: 'FETCH_LOCALE_SUCCESS', locales})
    })
  }
}
