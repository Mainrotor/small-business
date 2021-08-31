import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

const Dashboard = (props) => {
  const classes = useStyles();
  const loginChecker = (props) => {
    let button;
    if (props.loggedIn) {
      button = <Button color="inherit">Logout</Button>;
    } else {
      button = <Button color="inherit">Login</Button>;
    }
    return button;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <Button color="inherit">Listings</Button>
          {loginChecker(props)}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
