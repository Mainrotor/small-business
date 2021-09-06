import { connect } from "react-redux";
import { logout } from "../redux/actions.js";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
