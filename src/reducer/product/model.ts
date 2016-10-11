import { Value } from 'pim/model/product/value'

export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FIELD_CHANGED':
      const newState = Object.assign({}, state);

      newState.values[action.field] = newState.values[action.field].map((value: Value) => {
        if (value.locale !== action.locale || value.scope !== action.scope) {
          return value
        }

        return Object.assign({}, value, {data: action.value});
      });

      state = newState;
    break;
    case 'FETCH_PRODUCT_SUCCESS':
      state = action.product;
  }

  return state;
}
