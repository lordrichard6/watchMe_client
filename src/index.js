import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));

// react-router -------- core navigation lib, we don't install this manually
// react-router-dom ---- navigation for dom-based apps (for this app)
// react-router-native - navigation for react-native apps
// react-router-redux -- bindings between redux and react router (not necessary)
