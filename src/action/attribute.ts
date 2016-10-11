import { fetchByIdentifier } from 'pim/fetcher/attribute';
import { Attribute } from 'pim/model/catalog/attribute';

export const fetchAttributesIfNeeded = (identifiers: string[]) => (dispatch: any, getState: any) => {
  const identifiersToFetch = identifiers.filter((identifier: string) => {
    return !getState().catalog.attributes.find((attribute: Attribute) => {
      return attribute.code === identifier;
    });
  });

  dispatch({type: 'FETCH_ATTRIBUTES_REQUEST', attributes: identifiersToFetch});

  return fetchByIdentifier(identifiersToFetch).then((attributes) => {
    dispatch({type: 'FETCH_ATTRIBUTES_SUCCESS', attributes});

    return identifiers.map((identifier) => {
      return getState().catalog.attributes.find((attribute: Attribute) => attribute.code === identifier)
    })
  });
}
