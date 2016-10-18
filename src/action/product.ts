import { Product } from 'pim/model/product/product'
import { search } from 'pim/fetcher/product';

export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST'
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS'

const getProductsSearchParams = (state: any) => {
  //return state.ui.grid.products;
  return {
    filters: [],
    page: 1,
    limit: 10
  }
}

export const searchProductsRequest = () => (dispatch: any, getState: any) => {
  dispatch({type: SEARCH_PRODUCTS_REQUEST})

  const { filters, page, limit } = getProductsSearchParams(getState())

  return search(filters, page, limit)
    .then((products: Product[]) => {
      dispatch({type: SEARCH_PRODUCTS_SUCCESS, products})
    })
}
