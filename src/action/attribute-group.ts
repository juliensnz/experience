import { fetchAll } from 'pim/fetcher/attribute-group';

export const fetchAttributeGroupsIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.attributeGroups.length) {
    dispatch({type: 'FETCH_GROUP_REQUEST'});

    return fetchAll().then((groups) => {
      dispatch({type: 'FETCH_GROUP_SUCCESS', groups})
    });
  }

  return Promise.resolve(getState().catalog.attributeGroups);
}
