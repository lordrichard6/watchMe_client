import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page ONE
      <Link to="/pagetwo"> -->TWO</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page TWO
      <Link to="/"> -->ONE</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
