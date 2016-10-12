import { fetchLocalesIfNeeded } from 'pim/action/locale'
import { fetchChannelsIfNeeded } from 'pim/action/channel'
import { fetchAttributesIfNeeded } from 'pim/action/attribute'
import { fetchFamilyIfNeeded } from 'pim/action/family'
import { fetchOne } from 'pim/fetcher/product';
import { Family } from 'pim/model/catalog/family';
import { Channel } from 'pim/model/catalog/channel';
import { Locale } from 'pim/model/catalog/locale';
import { Attribute } from 'pim/model/catalog/attribute';

export const fetchProductIfNeeded = (identifier: (string | number)) => (dispatch: any, getState: any) => {
  if (getState().model) {
    dispatch({type: 'FETCH_PRODUCT_REQUEST'});

    return fetchOne(identifier).then((product: any) => {
      Promise.all([
        dispatch(fetchFamilyIfNeeded(product.family)),
        dispatch(fetchLocalesIfNeeded()),
        dispatch(fetchChannelsIfNeeded())
      ]).then(([family, locales, channels]: [Family, Locale[], Channel[]]) => {
          return dispatch(fetchAttributesIfNeeded(
            [...new Set([...Object.keys(product.values), ...family.attributes])]
          )).then((attributes: Attribute[]) => {
            dispatch({type: 'FETCH_PRODUCT_SUCCESS', product});

            return product;
          });
        })
    })
  }
}
