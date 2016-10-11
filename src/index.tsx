import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import modelReducer from './reducer/product/model';
import localeReducer from './reducer/catalog/locale';
import channelReducer from './reducer/catalog/channel';
import attributeGroupsReducer from './reducer/catalog/attribute-group';
import familyReducer from './reducer/catalog/family';
import attributeReducer from './reducer/catalog/attribute';
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
    context: contextReducer,
    page: combineReducers({
      currentTab: tabsReducer
    }),
    catalog: combineReducers({
      channels: channelReducer,
      locales: localeReducer,
      attributeGroups: attributeGroupsReducer,
      family: familyReducer,
      attribute: attributeReducer
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
