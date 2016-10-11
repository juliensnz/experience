import { Value } from 'pim/model/product/value'

export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':



      state = Object.assign({}, state, {model: action.product});
  }

  return state;
}
