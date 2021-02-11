import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// react-router -------- core navigation lib, we don't install this manually
// react-router-dom ---- navigation for dom-based apps (for this app)
// react-router-native - navigation for react-native apps
// react-router-redux -- bindings between redux and react router (not necessary)
