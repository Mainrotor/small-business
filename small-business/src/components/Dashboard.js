import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import cookie from "cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Dashboard = (props, type) => {
  const classes = useStyles();
  const loginChecker = (props) => {
    if (props.loggedIn) {
      return (
        <Button
          color="inherit"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            props.logout();
            document.cookie = "loggedIn=false";
            console.log(props.loggedIn);
          }}
        >
          Logout
        </Button>
      );
    } else if (props.loggedIn == false) {
      return (
        <Button color="">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </Button>
      );
    }
  };

  const newListingChecker = (props) => {
    let butt;

    props.loggedIn
      ? (butt = (
          <Button>
            <Link
              to="/Create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add New Listing
            </Link>
          </Button>
        ))
      : (butt = null);
    return butt;
  };

  const adminBarChecker = (props) => {
    let adminBar;
    if (props.loggedIn) {
      adminBar = (
        <div style={{ height: "50" }} id="adminBar">
          <h1>Logged in as Admin</h1>
        </div>
      );
    } else {
      adminBar = <div></div>;
    }
    return adminBar;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          {newListingChecker(props)}
          <Button color="inherit">
            <Link
              to={{ pathname: "/Listings" }}
              style={{ textDecoration: "none", color: "white" }}
            >
              Listings
            </Link>
          </Button>
          {loginChecker(props)}
        </Toolbar>
      </AppBar>
      {adminBarChecker(props)}
    </div>
  );
};

export default Dashboard;
