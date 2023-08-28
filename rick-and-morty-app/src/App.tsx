import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import List from "./components/List";

const App = () => (
  <div className="mt-10">
    <List />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
