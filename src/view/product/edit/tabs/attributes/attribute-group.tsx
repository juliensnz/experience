import * as React from 'react';
import { connect } from 'react-redux';
import { getLabel } from 'pim/utils/i18n';

export const view = (
  {
    groups,
    childViews,
    currentGroup,
    uiLocale,
    onGroupSelected
  }:
  {
    groups: any,
    onGroupSelected: any,
    currentGroup: string,
    uiLocale: string,
    childViews: any
  }
) => {
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

export const connector = connect((state: any) => {
  return {
    groups: state.attributeGroups.groups,
    current: state.attributeGroups.current,
    uiLocale: state.context.uiLocale
  }
}, (dispatch: any) => {
  return {
    onGroupSelected: (attributeGroupCode: any) => {
      dispatch({
        type: 'ATTRIBUTE_GROUP_SELECTED',
        group: attributeGroupCode
      })
    }
  }
});
