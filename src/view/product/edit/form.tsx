import { connect } from 'react-redux';
import * as React from 'react';
import { childrenForSection } from 'pim/view/util/child';
import { Attribute } from 'pim/model/catalog/attribute';
import { fetchProductIfNeeded } from 'pim/action/product';

export class view extends React.Component<
  { label: any, childViews: any, dispatch: any },
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchProductIfNeeded(1));
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
  }
);
