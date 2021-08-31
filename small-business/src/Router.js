import { Switch, Route } from "react-router";
import App from "./App.js";
import Login from "./containers/Login.js";
import Listings from "./containers/ListingsPage.js";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/listings" component={Listings} />
    </Switch>
  );
};

export default Router;
