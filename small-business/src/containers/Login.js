import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../redux/actions.js";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
