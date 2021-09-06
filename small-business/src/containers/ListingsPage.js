import { connect } from "react-redux";
import ListingsPage from "../components/ListingsPage.js";
import { deleteListing } from "../redux/actions.js";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (index) => dispatch(deleteListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
