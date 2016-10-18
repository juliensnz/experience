import { fetchByIdentifier } from 'pim/fetcher/attribute';
import { Attribute } from 'pim/model/catalog/attribute';
import { AttributeGroup } from 'pim/model/catalog/attribute-group';
import { fetchAttributeGroupsIfNeeded } from 'pim/action/attribute-group'

export const fetchAttributesIfNeeded = (identifiers: string[]) => (dispatch: any, getState: any) => {
  dispatch({type: 'FETCH_ATTRIBUTES_REQUEST', attributes: identifiers});

  return fetchByIdentifier(identifiers).then((attributes) => {
    dispatch({type: 'FETCH_ATTRIBUTES_SUCCESS', attributes});

    return identifiers.map((identifier) => {
      return getState().catalog.attributes[identifier]
    })
  });
}

export const fetchAttributesFromGroupIfNeeded = (groupCode: string) => (dispatch: any, getState: any) => {
  return dispatch(fetchAttributeGroupsIfNeeded()).then(() => {
    const attributeGroup: AttributeGroup = getState().catalog.attributeGroups.find(
      (group: AttributeGroup) => group.code === groupCode
    );

    if (undefined === attributeGroup) {
      throw Error(`Cannot find the attribute groupd ${groupCode}`)
    }

    return dispatch(fetchAttributesIfNeeded(attributeGroup.attributes));
  });
}
