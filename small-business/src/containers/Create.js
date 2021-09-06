import { connect } from "react-redux";
import { create } from "../redux/actions.js";
import Create from "../components/Create.js";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: (payload) => dispatch(create(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
