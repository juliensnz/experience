import * as React from 'react';
import { connect } from 'react-redux';

export const view = (props: any) => {
  const tabViews = props.childViews.filter((childView: any) => {
    return 'container' === childView.section;
  })

  const tabSelectors = tabViews.map((tab: any) => {
    return <div onClick={props.onTabClick} data-tab={tab.code}>{tab.config.label}</div>
  });

  const tab = tabViews.find((tab: any) => {
    return tab.code === props.currentTab;
  });

  console.log(tab);

  return <div>
    <div className="tabs-selector">{tabSelectors}</div>
    <tab.viewModule />
  </div>;
}

export const connector = connect(
  (state: any) => {
    return {
      currentTab: currentTabSelector(state)
    };
  },
  (dispatch: any) => {
    return {
      onTabClick: (e: any) => {
        dispatch({
          type: 'CHANGE_TAB',
          tab: e.currentTarget.dataset.tab
        });
      }
    }
  }
);

const currentTabSelector = (state: any) => {
  return state.page && state.page.currentTab ? state.page.currentTab : null;
}
