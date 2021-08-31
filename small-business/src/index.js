import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Router from "./Router.js";
import Dashboard from "./containers/Dashboard.js";
import { Provider } from "react-redux";
import store from "./redux/store";

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
