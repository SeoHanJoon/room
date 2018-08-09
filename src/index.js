import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import storeModule from './store';

injectGlobal([
  `
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  h1 {
    margin:0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`,
]);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(storeModule, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root'),
);

registerServiceWorker();
