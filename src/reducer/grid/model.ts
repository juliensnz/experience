import { SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS } from 'pim/action/product'

export default (state: any = {items: []}, action: any = {}) => {
  switch (action.type) {
    case SEARCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {items: action.products})
    case SEARCH_PRODUCTS_REQUEST:
    default:
      return state
  }
}
