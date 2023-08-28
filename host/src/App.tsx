import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => (
  <div>
    <Navbar />
    <Body />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
