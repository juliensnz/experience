import { connect } from 'react-redux';
import * as React from 'react';
import { childrenForSection } from 'pim/view/util/child';
import { fetchOne } from 'pim/fetcher/product';
import { fetchOne as fetchFamily } from 'pim/fetcher/family';
import { fetchByIdentifier as fetchAttributeByIdentifier } from 'pim/fetcher/attribute';


export class view extends React.Component<
  { label: any, childViews: any, dispatch: any },
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchProductIfNeeded(12));
  }

  render() {
    const { label, childViews } = this.props;

    return <div>
      <div className="header">
        <div className="title">
          Edit product - {label}
        </div>
        <div className="meta">
          {childrenForSection(childViews, 'meta')}
        </div>
        <div className="buttons">
          {childrenForSection(childViews, 'buttons')}
        </div>
      </div>
      <div className="container">
        {childrenForSection(childViews, 'container')}
      </div>
    </div>
  }
}

export const connector = connect(
  (state: any) => {
    return {
      label: state.model.family
    }
  },
  (dispatch: any) => {
    return {
      dispatch
    };
  });

const fetchProductIfNeeded = (identifier: (string | number)) => (dispatch: any, getState: any) => {
  if (getState().model) {
    dispatch({type: 'FETCH_PRODUCT_REQUEST'});

    fetchOne(12).then((product: any) => {
      Promise.all([
        dispatch(fetchFamilyIfNeeded(product.family)),
        fetchAttributeByIdentifier(Object.keys(product.values))
      ]).then(() => {
          console.log(arguments);
        })

      dispatch({type: 'FETCH_PRODUCT_SUCCESS', product});
    })
  }
}

const fetchFamilyIfNeeded = (identifier: string) => (dispatch: any, getState: any) => {
  if (!getState().catalog.family[identifier]) {
    dispatch({type: 'FETCH_FAMILY_REQUEST'});

    fetchFamily(identifier).then((family) => {
      dispatch({type: 'FETCH'})
    });
  }

  return 'toto';
}
