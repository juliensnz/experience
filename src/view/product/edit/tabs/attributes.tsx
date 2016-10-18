import * as React from 'react';
import { connect } from 'react-redux';
import { childrenForSection } from 'pim/view/util/child';

export class view extends React.Component<
  {
    currentGroup: string,
    config: string,
    childViews: any
  },
  {}
> {
  render() {
    const { childViews, config, currentGroup }: { childViews: any, config: any, currentGroup: string } = this.props;

    const FieldsView = childViews.find((view: any) => {
      return config.config.fieldsView === view.code
    });

    return <div>
      {childrenForSection(childViews, 'sidebar')}
      {childrenForSection(childViews, 'context')}
      <FieldsView.viewModule attributeGroup={ currentGroup }/>
    </div>;
  }
}

export const connector = connect(
  (state: any) => {
    return {
      currentGroup: state.context.attributeGroup
    }
  },
  (dispatch: any) => {
    return {};
  }
);
