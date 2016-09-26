import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer/counter';

interface Window { devToolsExtension: any; }

const store = createStore(counterReducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
