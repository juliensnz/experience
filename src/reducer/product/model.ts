import { Value } from 'pim/model/product/value'

export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FIELD_CHANGED':
      let newState = Object.assign({}, state);
      const value = {
        data: action.data,
        locale: action.locale,
        scope: action.scope
      };

      const values = state.values[action.field] ? state.values[action.field].filter((value: Value) => {
        return value.locale !== action.locale || value.scope !== action.scope;
      }) : [];
      newState.values[action.field] = [...values, value];

      state = newState;
    break;
  }

  return state;
}
