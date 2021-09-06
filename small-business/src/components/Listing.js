import React from "react";

const Listing = (props) => {
  const id = props.match.params.id;
  let listing = props.listings.find((x) => x.id == id);
  console.log(listing);

  return (
    <div id="listingContainer">
      <main>
        <h1>{listing.name}</h1>
        <p>{listing.address}</p>
        <p>{listing.hours}</p>
        <p>{listing.description}</p>
      </main>
    </div>
  );
};

export default Listing;
