import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // add
import { Provider } from 'react-redux'; // add
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import dashboardApp from './store'; // add

const store = createStore(dashboardApp); // add

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root'),
);
registerServiceWorker();
