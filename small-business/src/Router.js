import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import App from "./App.js";
import Login from "./containers/Login.js";
import Listings from "./containers/ListingsPage.js";
import Listing from "./containers/Listing.js";
import Create from "./containers/Create.js";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listings} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/listings" component={Listings} />
      <Route path="/listing/:id" component={Listing} />
      <ProtectedRoute path="/Create" component={Create} />
    </Switch>
  );
};

export default Router;
