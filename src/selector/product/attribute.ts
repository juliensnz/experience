import { getProduct } from 'pim/selector/product/product'
import { Family } from 'pim/model/catalog/family'

export const getProductAttributes = (state: any) => {
  const product = getProduct(state);
  const family = getFamily(state, product.family);

  const familyAttributes = family ? family.attributes : [];
  const productAttributes = product.values ? Object.keys(product.values) : [];

  return [...new Set([...familyAttributes, ...productAttributes])];
}

export const getFamily = (state: any, familyCode: string) => {
  return state.catalog.families.find((family: Family) => {
    return familyCode === family.code;
  });
}

export const getAttribute = (state: any, code: string) => {
  return state.catalog.attributes[code];
}
