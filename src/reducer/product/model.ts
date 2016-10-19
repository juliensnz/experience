import { Value } from 'pim/model/product/value'

export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'VALUE_UPDATED':
      let newState = Object.assign({}, state);

      const values = state.values[action.attribute.code] ? state.values[action.attribute.code].filter((value: Value) => {
        return value.locale !== action.value.locale || value.scope !== action.value.scope;
      }) : [];

      newState.values[action.attribute.code] = [...values, action.value];

      state = newState;
    break;
    case 'ADD_ATTRIBUTE':
      if (undefined === state.values[action.attributeCode]) {
        let newState = Object.assign({}, state);
        newState.values[action.attributeCode] = [];

        state = newState;
      }
    break;
    case 'REMOVE_ATTRIBUTE':
      if (undefined !== state.values[action.attributeCode]) {
        let newState = Object.assign({}, state);

        delete newState.values[action.attributeCode];

        state = newState;
      }
  }

  return state;
}
