import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "@GlobalStyle/GlobalStyle";
import App from "@main/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
