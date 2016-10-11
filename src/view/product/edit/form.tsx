import { connect } from 'react-redux';
import * as React from 'react';
import { childrenForSection } from 'pim/view/util/child';
import { Attribute } from 'pim/model/catalog/attribute';
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
        dispatch(fetchAttributeIfNeeded(Object.keys(product.values)))
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

    return fetchFamily(identifier).then((family) => {
      dispatch({type: 'FETCH_FAMILY_SUCCESS', family})
    });
  }

  return Promise.resolve();;
}

const fetchAttributeIfNeeded = (identifiers: string[]) => (dispatch: any, getState: any) => {
  const identifierToFetch = identifiers.filter((identifier: string) => {
    return !getState().catalog.attributes.find((attribute: Attribute) => {
      return attribute.code === identifier;
    });
  });

  console.log(identifierToFetch);
  // if (!getState().catalog.family[identifiers]) {
  //   dispatch({type: 'FETCH_ATTRIBUTES_REQUEST'});

  //   fetchFamily(identifiers).then((attributes) => {
  //     dispatch({type: 'FETCH_ATTRIBUTES_SUCCESS', attributes})
  //   });
  // }

  return 'toto';
}
