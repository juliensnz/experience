import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import modelReducer from './reducer/product/model';
import localeReducer from './reducer/view/locale-switcher';
import attributeGroupsReducer from './reducer/product/attribute-groups';
import contextReducer from './reducer/context';
import tabsReducer from './reducer/view/tabs';
import * as createLogger from 'redux-logger';

declare var require: any;
require('pim/assets/style/style.less');

// dev tools trick, should not be in prod.
const myWindow: any = window;

const logger = createLogger();
const store = createStore(
  combineReducers({
    model: modelReducer,
    attributeGroups: attributeGroupsReducer,
    context: contextReducer,
    page: combineReducers({
      currentTab: tabsReducer
    }),
    views: combineReducers({
      localeSwitcher: localeReducer
    })
  }),
  {},
  compose(
    applyMiddleware(thunk, logger),
    myWindow.devToolsExtension && myWindow.devToolsExtension()
  )
);

const root: any = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
