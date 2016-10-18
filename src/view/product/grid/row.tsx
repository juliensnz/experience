import * as React from 'react'
import { Product } from 'pim/model/product/product'

export const view = (props: any) => (
  <tr>
    <td>{props.product.identifier}</td>
    <td>{props.product.meta.label.en_US}</td>
    <td>{props.product.family}</td>
    <td>{props.product.enabled ? 'oker' : 'nope'}</td>
  </tr>
)
