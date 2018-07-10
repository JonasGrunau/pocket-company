import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/Screen";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Screen/>, document.getElementById("root"));
registerServiceWorker();
