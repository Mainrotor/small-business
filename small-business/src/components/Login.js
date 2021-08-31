import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  input: {
    marginBottom: 5,
  },

  bottomInput: {
    marginBottom: 15,
  },
});

const submitHandler = (e, props) => {
  e.preventDefault();
  props.login("jason", "pass");
};

export default function Login(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.user);
  });

  return (
    <main id="loginMain">
      <form
        className="loginForm"
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          submitHandler(e, props);
        }}
      >
        <TextField
          id="standard-basic"
          className={classes.input}
          label="Username"
        />
        <TextField
          id="standard-basic"
          className={classes.bottomInput}
          label="Password"
          type="password"
        />
        <Button variant="contained" color="default" type="submit">
          LOGIN
        </Button>
      </form>
    </main>
  );
}
