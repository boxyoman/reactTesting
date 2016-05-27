import * as React from "react";
import * as ReactDOM from "react-dom";

import RAButton from "./components/basics/button/button"

ReactDOM.render(
  <RAButton onClick={ e => alert("test") } />,
  document.getElementById("test")
);
