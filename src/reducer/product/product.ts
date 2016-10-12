import { Value } from 'pim/model/product/value'
import { Attribute } from 'pim/model/catalog/attribute'

export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      let initialValues = !action.product.values || 0 === action.product.values.length ? action.product.values : {};

      action.attributes.forEach((attribute: Attribute) => {
        initialValues[attribute.code] = initialValues[attribute.code] ? initialValues[attribute.code] : []
      });

      console.log(initialValues);


      state = Object.assign({}, state, {model: action.product});
  }

  return state;
}
