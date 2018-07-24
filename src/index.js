import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; //add
import { Provider } from "react-redux"; //add
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import dashboardApp from "./store"; //add

const store = createStore(dashboardApp); //add

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
registerServiceWorker();
