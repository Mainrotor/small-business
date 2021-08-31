import { connect } from "react-redux";
import Listing from "../components/Listing.js";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(Listing);
