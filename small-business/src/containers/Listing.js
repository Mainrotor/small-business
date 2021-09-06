import { connect } from "react-redux";
import Listing from "../components/Listing.js";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(Listing);
