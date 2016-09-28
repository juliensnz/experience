import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import modelReducer from './reducer/model';

declare var require: any;
require("pim/assets/style/style.less");

interface Window { devToolsExtension: any }

// dev tools trick, should not be in prod.
const myWindow: any = window;
const store = createStore(combineReducers({model: modelReducer}), myWindow.devToolsExtension && myWindow.devToolsExtension());

const root: any = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
