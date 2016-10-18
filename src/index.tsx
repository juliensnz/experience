import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import modelReducer from './reducer/product/model';
import productReducer from './reducer/product/product';
import localeReducer from './reducer/catalog/locale';
import channelReducer from './reducer/catalog/channel';
import attributeGroupsReducer from './reducer/catalog/attribute-group';
import familyReducer from './reducer/catalog/family';
import attributeReducer from './reducer/catalog/attribute';
import currencyReducer from './reducer/catalog/currency';
import contextReducer from './reducer/context';
import tabsReducer from './reducer/view/tabs';
import * as createLogger from 'redux-logger';

declare var require: any;
require('react-select/dist/react-select.css');
require('pim/assets/style/style.less');


// dev tools trick, should not be in prod.
const myWindow: any = window;

const logger = createLogger();
const store = createStore((state: any, action: any) => {
    state = productReducer(state, action);

    return combineReducers({
      model: modelReducer,
      context: contextReducer,
      page: combineReducers({
        currentTab: tabsReducer
      }),
      catalog: combineReducers({
        channels: channelReducer,
        locales: localeReducer,
        attributeGroups: attributeGroupsReducer,
        families: familyReducer,
        attributes: attributeReducer,
        currencies: currencyReducer
      })
    })(state, action);
  },
  {},
  compose(
    // applyMiddleware(thunk, logger),
    applyMiddleware(thunk),
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
