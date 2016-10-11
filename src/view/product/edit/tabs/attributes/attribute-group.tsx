import * as React from 'react';
import { connect } from 'react-redux';
import { getLabel } from 'pim/utils/i18n';
import { fetchAll } from 'pim/fetcher/attribute-group';

export class view extends React.Component<
  {
    groups: any,
    onGroupSelected: any,
    currentGroup: string,
    uiLocale: string,
    childViews: any,
    dispatch: any
  },
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGroupsIfNeeded());
  }

  render() {
    const {
      groups,
      childViews,
      currentGroup,
      uiLocale,
      onGroupSelected
    } = this.props;

    const groupViews = groups.map((group: any) => {
    const className = currentGroup === group.code ? 'selected' : '';
    return <li
      className={ className }
      onClick={ () => { onGroupSelected(group.code); }}
    >
      { getLabel(group.labels, uiLocale, group.code) }
    </li>;
  })
  return <ul>
    { groupViews }
  </ul>;
  }
}

export const connector = connect((state: any) => {
  return {
    groups: state.catalog.attributeGroups ? state.catalog.attributeGroups : [],
    current: state.context.attributeGroup,
    uiLocale: state.context.uiLocale
  }
}, (dispatch: any) => {
  return {
    onGroupSelected: (attributeGroupCode: any) => {
      dispatch({
        type: 'ATTRIBUTE_GROUP_SELECTED',
        group: attributeGroupCode
      })
    },
    dispatch
  }
});

const fetchGroupsIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.attributeGroups.length) {
    dispatch({type: 'FETCH_GROUP_REQUEST'});

    fetchAll().then((groups) => {
      dispatch({type: 'FETCH_GROUP_SUCCESS', groups})
    })
  }
}
