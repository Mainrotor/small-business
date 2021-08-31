import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(Dashboard);
