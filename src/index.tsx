import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import modelReducer from './reducer/model';
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
    page: combineReducers({
      currentTab: tabsReducer
    })
  }),
  applyMiddleware(logger),
  myWindow.devToolsExtension && myWindow.devToolsExtension()
);

const root: any = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
