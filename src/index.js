import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // add
import { Provider } from 'react-redux'; // add
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import storeModule from './store'; // add

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(storeModule, devTools); // add

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root'),
);
registerServiceWorker();
