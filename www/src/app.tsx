import * as React from "react";
import * as ReactDOM from "react-dom";

import RAButton from "./components/basics/button/button"

ReactDOM.render(
  <RAButton color="Red" onClick={ e => alert("test") }>
    Testing
  </RAButton>,
  document.getElementById("test")
);
