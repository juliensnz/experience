import { Family } from 'pim/model/catalog/family'

export default (state: Family[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_FAMILY_SUCCESS':
      state = [...state, action.family];
  }

  return state;
}
