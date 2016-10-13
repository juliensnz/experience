import * as React from 'react'
import { connect } from 'react-redux'
import { Product } from 'pim/model/product/product'

export const view = (props: any) => {
  return <tr>
    <td>{props.product.identifier}</td>
    <td>{props.product.label}</td>
    <td>{props.product.family}</td>
  </tr>
}

export const connector = connect((state: any) => {
  return {}
});
