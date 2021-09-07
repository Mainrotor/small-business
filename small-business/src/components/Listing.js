import React from "react";
import Maps from "./Maps.js";

const Listing = (props) => {
  const id = props.match.params.id;
  let listing = props.listings.find((x) => x.id == id);
  console.log(listing);

  const mapStyles = {
    width: "100vh",
    height: "200px",
  };

  return (
    <div id="listingContainer">
      <main>
        <h1>{listing.name}</h1>
        <p>{listing.address}</p>
        <p>{listing.hours}</p>
        <p>{listing.description}</p>
      </main>
      <Maps address={listing.coords} />
    </div>
  );
};

export default Listing;
