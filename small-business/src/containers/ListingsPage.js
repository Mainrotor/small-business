import { connect } from "react-redux";
import ListingsPage from "../components/ListingsPage.js";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(ListingsPage);
