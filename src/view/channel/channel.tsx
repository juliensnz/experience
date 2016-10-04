import { connect } from 'react-redux';
import * as React from 'react';
import { childrenForSection } from 'pim/view/util/child';

export const view = ({ label, childViews }: { label: any, childViews: any }) => {
  return <div>
    <div className="header">
      <div className="title">
        Edit channel - {label}
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

export const connector = connect((state: any) => {
  return {
    label: state.model.label
  }
});
