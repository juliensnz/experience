import { fetchOne } from 'pim/fetcher/family';
import { Family } from 'pim/model/catalog/family';

export const fetchFamilyIfNeeded = (identifier: string) => (dispatch: any, getState: any) => {
  const family = getState().catalog.families.find((family: Family) => family.code === identifier);

  if (!family) {
    dispatch({type: 'FETCH_FAMILY_REQUEST', family: identifier});

    return fetchOne(identifier).then((family) => {
      dispatch({type: 'FETCH_FAMILY_SUCCESS', family});

      return family;
    });
  }

  return Promise.resolve(family);
}
