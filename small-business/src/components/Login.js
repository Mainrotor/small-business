import React, { useEffect, useState } from "react";
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

export default function Login(props) {
  const [localUsername, setLocalUsername] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  const classes = useStyles();

  const handleUserChange = (e) => {
    setLocalUsername(e.target.value);
    console.log(localUsername);
  };

  const handlePassChange = (e) => {
    setLocalPassword(e.target.value);
    console.log(localPassword);
  };

  const submitHandler = (e, props) => {
    e.preventDefault();
    props.login(localUsername, localPassword);
    document.cookie = "loggedIn=true; max-age=60";
    setLocalUsername("");
    setLocalPassword("");
  };

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
          onChange={handleUserChange}
          value={localUsername}
        />
        <TextField
          id="standard-basic"
          className={classes.bottomInput}
          label="Password"
          type="password"
          onChange={handlePassChange}
          value={localPassword}
        />
        <Button variant="contained" color="default" type="submit">
          LOGIN
        </Button>
      </form>
    </main>
  );
}
