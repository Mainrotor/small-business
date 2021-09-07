import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { create } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75ch",
    },
  },
}));

export default function Create(props) {
  const [payload, setPayload] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
    id: "",
    coords: {},
  });

  const [coordinateState, setCoordinateState] = useState({});

  const classes = useStyles();

  const getCoords = (address) => {
    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=AIzaSyAtbxfNcSuqkQbvndVNIExOIgrGs3u4zcE&address=${address}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPayload((prevState) => ({
          ...prevState,
          coords: {
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          },
        }));
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      payload.name === "" ||
      payload.address === "" ||
      payload.hours === "" ||
      payload.description === ""
    ) {
      return <h1>Fields Required</h1>;
    } else {
      getCoords(payload.address);
      props.create(payload);
    }
  };

  const changeHandler = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;

    if (props.listings.length > 0) {
      setPayload((prevState) => ({
        ...prevState,
        [fieldName]: value,

        id: props.listings[props.listings.length - 1].id + 1,
      }));
    } else {
      setPayload((prevState) => ({
        ...prevState,
        [fieldName]: value,

        id: 0,
      }));
    }

    getCoords(payload.address);
  };

  return (
    <main id="createMain">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          onChange={(e) => changeHandler(e)}
          name="name"
          value={payload.name}
          required
          id="standard-required"
        />
        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          onChange={(e) => changeHandler(e)}
          value={payload.address}
          required
          id="standard-required"
        />
        <TextField
          id="standard-basic"
          label="Hours (ex. 8AM-9PM)"
          name="hours"
          onChange={(e) => changeHandler(e)}
          value={payload.hours}
          required
          id="standard-required"
        />
        <TextField
          id="standard-basic"
          label="Description"
          name="description"
          onChange={(e) => changeHandler(e)}
          value={payload.description}
          required
          id="standard-required"
        />
        <Button
          variant="contained"
          color="default"
          type="submit"
          style={{ width: "400px" }}
        >
          SAVE
        </Button>
      </form>
    </main>
  );
}
