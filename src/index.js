import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);
