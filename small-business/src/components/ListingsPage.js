import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import red from "@material-ui/core/colors/red";
import DeleteIcon from "@material-ui/icons/Delete";
import Listing from "./Listing.js";

const useStyles = makeStyles((theme) => ({
  root: {
    color: red,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: theme.palette.text.inherit,
  },
}));

const ListingsPage = (props) => {
  const classes = useStyles();

  const loggedInChecker = (props) => {
    if (props.loggedIn) {
      return (
        <td>
          <DeleteIcon className={classes.icon} />
        </td>
      );
    }
  };

  return (
    <div id="listingsCont">
      <table id="listingsTable">
        <tr class="lrow">
          <th>Name</th>
          <th>Description</th>
          <th>Hours</th>
          <th>Address</th>
        </tr>
      </table>
      <Listing />
    </div>
  );
};

export default ListingsPage;
