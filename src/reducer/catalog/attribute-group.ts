import { AttributeGroup } from 'pim/model/catalog/attribute-group'

export default (state: AttributeGroup[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_GROUP_SUCCESS':
      state = Object.keys(action.groups).map((key) => {
          return action.groups[key];
      });
  }

  return state;
}
