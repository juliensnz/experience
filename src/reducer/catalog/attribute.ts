import { Attribute } from 'pim/model/catalog/attribute'

export default (state: {[key: string]: Attribute} = {}, action: any = {}) => {
  switch (action.type) {
    case 'FETCH_ATTRIBUTES_SUCCESS':
      const newState = Object.assign({}, state);

      action.attributes.forEach((attribute: Attribute) => {
        newState[attribute.code] = attribute;
      });

      state = newState;
  }

  return state;
}
