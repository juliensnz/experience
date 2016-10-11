import { Attribute } from 'pim/model/catalog/attribute'

export default (state: Attribute[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_ATTRIBUTES_SUCCESS':
      state = [...state, ...action.attributes];
  }

  return state;
}
