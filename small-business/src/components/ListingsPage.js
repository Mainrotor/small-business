import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import red from "@material-ui/core/colors/red";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

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

  const loggedInChecker = (props, type, index) => {
    if (props.loggedIn) {
      switch (type) {
        case "header":
          return <TableCell>Delete</TableCell>;
          break;
        case "row":
          return (
            <TableCell>
              <DeleteIcon
                onClick={() => {
                  deleteHandler(index);
                }}
              />
            </TableCell>
          );
      }
    }
  };

  const deleteHandler = (index) => {
    props.deleteListing(index);
  };

  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {loggedInChecker(props, "header")}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>
                <Link to={`/listing/${listing.id}`}>{listing["name"]}</Link>
              </TableCell>
              <TableCell>{listing["description"]}</TableCell>
              <TableCell>{listing["hours"]}</TableCell>
              <TableCell>{listing["address"]}</TableCell>
              {loggedInChecker(props, "row", listing.id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ListingsPage;
