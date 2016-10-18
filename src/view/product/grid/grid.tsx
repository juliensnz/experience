import * as React from 'react'
import { connect } from 'react-redux'
import { Product } from 'pim/model/product/product'
import { searchProductsRequest } from 'pim/action/product'

export class view extends React.Component<{
  columns: string[],
  products: Product[],
  childViews: any,
  dispatch: any
}, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(searchProductsRequest())
  }

  render() {
    const { columns, products, childViews } = this.props;

    const ProductRow = childViews.find((childView: any) => {
      return 'pim/product/grid/row' === childView.code
    }).viewModule

    return <div>
      <div className="header">
        <div className="title">
          List products
        </div>
        <div className="container">
          <table>
            <thead>
              <tr>
                {columns.map((column: string, i: number) => (<th key={i}>{column}</th>))}
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product) => (
                <ProductRow key={product.identifier} product={product}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
}

export const connector = connect((state: any) => {
  return {
    columns: ['identifier', 'label', 'family', 'enabled'],
    products: state.model.items
  }
});
